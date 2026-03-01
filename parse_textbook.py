#!/usr/bin/env python3
"""
テキスト_*.md を解析し textbook-data.js を生成するスクリプト
"""
import re
import json

# ファイルとセクション情報のマッピング
TEXTBOOK_FILES = [
    ('remake/テキスト_専門領域調達_完全攻略.md',       1, '専門領域調達',           '🏭'),
    ('remake/テキスト_ビジネスファンダメンタルズ_完全攻略.md', 2, 'ビジネスファンダメンタルズ', '💼'),
    ('remake/テキスト_CRのための関連知識_完全攻略.md',   3, 'CRのための関連知識',       '⚙️'),
    ('remake/テキスト_マネジメント手法_完全攻略.md',     4, 'マネジメント手法',         '📊'),
]


def escape_html(text):
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def inline_convert(text):
    """インライン要素の変換（太字・斜体・コード・リンク）"""
    # 太字+斜体: ***text***
    text = re.sub(r'\*\*\*(.+?)\*\*\*', r'<strong><em>\1</em></strong>', text)
    # 太字: **text**
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    # 斜体: *text*
    text = re.sub(r'\*([^*\n]+?)\*', r'<em>\1</em>', text)
    # インラインコード: `text`
    text = re.sub(r'`([^`]+?)`', r'<code>\1</code>', text)
    # ★ をバッジに
    text = re.sub(r'(★{1,3})', lambda m: f'<span class="star-badge star-{len(m.group(1))}">{m.group(1)}</span>', text)
    return text


def table_to_html(table_lines):
    """Markdownテーブル行のリストをHTMLテーブルに変換"""
    html = ['<div class="tb-table-wrap"><table class="tb-table">']
    is_header = True
    for line in table_lines:
        # セパレータ行（|---|---|）はスキップ
        if re.match(r'^\s*\|[\s\-:|]+\|\s*$', line):
            is_header = False
            continue
        # セル分割
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        tag = 'th' if is_header else 'td'
        html.append('<tr>')
        for cell in cells:
            html.append(f'<{tag}>{inline_convert(cell)}</{tag}>')
        html.append('</tr>')
    html.append('</table></div>')
    return '\n'.join(html)


def parse_unit_content(lines):
    """ユニット内のMarkdown行リストをHTMLに変換"""
    html_parts = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.rstrip()

        # 空行
        if not stripped:
            i += 1
            continue

        # 水平線
        if stripped in ('---', '***', '___'):
            html_parts.append('<hr class="unit-divider">')
            i += 1
            continue

        # テーブル
        if stripped.startswith('|') and '|' in stripped[1:]:
            table_lines = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                table_lines.append(lines[i])
                i += 1
            html_parts.append(table_to_html(table_lines))
            continue

        # ブロック引用 (> text)
        if stripped.startswith('>'):
            bq_lines = []
            while i < len(lines) and lines[i].rstrip().startswith('>'):
                bq_lines.append(lines[i].rstrip()[1:].strip())
                i += 1
            bq_text = ' '.join(bq_lines)
            # 重要/注意系
            if re.match(r'\*\*(重要|注意|ポイント|試験|合格)', bq_text):
                box_class = 'warning-box'
                icon = '⚠️'
            elif re.match(r'\*\*(上下|対比|参考|補足)', bq_text):
                box_class = 'info-box'
                icon = 'ℹ️'
            else:
                box_class = 'memo-box'
                icon = '📝'
            html_parts.append(f'<div class="{box_class}"><span class="box-icon">{icon}</span>{inline_convert(bq_text)}</div>')
            continue

        # 🔑 語呂合わせ行
        if '🔑' in stripped or stripped.startswith('覚え方') or '語呂合わせ' in stripped:
            # Collect continuation lines
            mnemo_lines = [stripped]
            i += 1
            while i < len(lines) and lines[i].strip() and not lines[i].strip().startswith('#') and not lines[i].strip().startswith('|') and not lines[i].strip().startswith('>') and not lines[i].strip().startswith('-') and not lines[i].strip().startswith('1'):
                mnemo_lines.append(lines[i].strip())
                i += 1
            mnemo_text = ' '.join(mnemo_lines)
            html_parts.append(f'<div class="mnemo-box">🎵 {inline_convert(mnemo_text)}</div>')
            continue

        # 見出し
        m = re.match(r'^(#{1,6})\s+(.+)', stripped)
        if m:
            level = len(m.group(1))
            heading_text = m.group(2)
            # ★ を含む見出し
            star_match = re.search(r'(★+)', heading_text)
            star_html = ''
            if star_match:
                stars = star_match.group(1)
                heading_text = heading_text.replace(stars, '').strip()
                star_html = f' <span class="star-badge star-{len(stars)}">{stars}</span>'
            if level <= 2:
                html_parts.append(f'<h{level} class="unit-h{level}">{inline_convert(heading_text)}{star_html}</h{level}>')
            elif level == 3:
                html_parts.append(f'<h3 class="unit-h3">{inline_convert(heading_text)}{star_html}</h3>')
            else:
                html_parts.append(f'<h4 class="unit-h4">{inline_convert(heading_text)}{star_html}</h4>')
            i += 1
            continue

        # 番号付きリスト
        if re.match(r'^\d+[\.\)]\s+', stripped):
            list_items = []
            while i < len(lines):
                s = lines[i].rstrip()
                if re.match(r'^\d+[\.\)]\s+', s.strip()):
                    list_items.append(f'<li>{inline_convert(s.strip()[s.strip().index(" ")+1:])}</li>')
                    i += 1
                elif s and (s.startswith('   ') or s.startswith('\t')):
                    # インデントされた継続行
                    if list_items:
                        last = list_items[-1]
                        list_items[-1] = last[:-5] + '<br>' + inline_convert(s.strip()) + '</li>'
                    i += 1
                else:
                    break
            html_parts.append('<ol class="unit-list">' + ''.join(list_items) + '</ol>')
            continue

        # 箇条書きリスト
        if re.match(r'^[-*]\s+', stripped):
            list_items = []
            while i < len(lines):
                s = lines[i].rstrip()
                if re.match(r'^[-*]\s+', s.strip()):
                    item_text = s.strip()[2:]
                    list_items.append(f'<li>{inline_convert(item_text)}</li>')
                    i += 1
                elif s and (s.startswith('  ') or s.startswith('\t')):
                    if list_items:
                        last = list_items[-1]
                        list_items[-1] = last[:-5] + '<br>' + inline_convert(s.strip()) + '</li>'
                    i += 1
                else:
                    break
            html_parts.append('<ul class="unit-list">' + ''.join(list_items) + '</ul>')
            continue

        # 数式的な行（=, ÷, × を含む単独行）
        if re.search(r'[＝＋−÷×÷±≦≧]|[=+\-*/÷×]', stripped) and len(stripped) < 120 and not stripped.startswith('#') and stripped.count('|') == 0:
            if re.match(r'.*(=|÷|×|＝|÷|×).*', stripped) and len(stripped.split()) <= 8:
                html_parts.append(f'<div class="formula-box">📐 {inline_convert(stripped)}</div>')
                i += 1
                continue

        # 通常の段落テキスト
        para_lines = [stripped]
        i += 1
        while i < len(lines):
            s = lines[i].rstrip()
            if not s:
                break
            if s.startswith('#') or s.startswith('|') or s.startswith('>') or re.match(r'^[-*]\s', s) or re.match(r'^\d+[\.\)]\s', s) or s in ('---', '***'):
                break
            para_lines.append(s)
            i += 1
        para_text = ' '.join(para_lines)
        html_parts.append(f'<p>{inline_convert(para_text)}</p>')

    return '\n'.join(html_parts)


def extract_units(text, section_name):
    """テキストからユニットを抽出する"""
    # ユニット区切りパターン: ## ユニットN：タイトル
    unit_pattern = re.compile(r'^## ユニット(\d+)[：:]\s*(.+?)(?:（所要時間[：:]約(\d+)分[）)])?(?:（約(\d+)分[）)])?$', re.MULTILINE)
    matches = list(unit_pattern.finditer(text))

    if not matches:
        # fallback: パターンが違う場合
        return []

    units = []
    for j, m in enumerate(matches):
        unit_num = int(m.group(1))
        # タイトルから所要時間を除去
        title_raw = m.group(2).strip()
        # 所要時間を抽出
        time_match = re.search(r'所要時間[：:]約(\d+)分|約(\d+)分', title_raw)
        estimated_minutes = 8  # デフォルト
        if m.group(3):
            estimated_minutes = int(m.group(3))
        elif m.group(4):
            estimated_minutes = int(m.group(4))
        elif time_match:
            estimated_minutes = int(time_match.group(1) or time_match.group(2))

        # タイトルから時間部分を除去
        title = re.sub('（所要時間[：:]約\\d+分）|（約\\d+分）', '', title_raw).strip()

        # コンテンツ範囲
        start = m.end()
        end = matches[j + 1].start() if j + 1 < len(matches) else len(text)
        content_text = text[start:end]

        # 行ごとに処理
        content_lines = content_text.split('\n')
        content_html = parse_unit_content(content_lines)

        units.append({
            'id': unit_num,
            'title': title,
            'estimatedMinutes': estimated_minutes,
            'content': f'<div class="unit-content">{content_html}</div>',
        })

    return units


def main():
    all_sections = []

    for fname, section_id, section_name, icon in TEXTBOOK_FILES:
        with open(fname, encoding='utf-8') as f:
            text = f.read()

        units = extract_units(text, section_name)
        total_mins = sum(u['estimatedMinutes'] for u in units)
        print(f'{section_name}: {len(units)} ユニット, 合計約{total_mins}分')

        all_sections.append({
            'sectionId': section_id,
            'name': section_name,
            'icon': icon,
            'totalMinutes': total_mins,
            'units': units,
        })

    # JavaScript 出力（HTMLコンテンツはエスケープしてJS文字列として格納）
    lines_out = [
        '// 自動生成ファイル - parse_textbook.py で生成',
        '// CPP B級 教科書データ（22ユニット）',
        '',
        'var TEXTBOOK_DATA = [',
    ]

    for sec in all_sections:
        # unitsのcontentだけはエスケープなし（HTMLそのまま）
        sec_json = {
            'sectionId': sec['sectionId'],
            'name': sec['name'],
            'icon': sec['icon'],
            'totalMinutes': sec['totalMinutes'],
            'units': [
                {
                    'id': u['id'],
                    'title': u['title'],
                    'estimatedMinutes': u['estimatedMinutes'],
                    'content': '__CONTENT_PLACEHOLDER__',
                }
                for u in sec['units']
            ]
        }
        sec_str = json.dumps(sec_json, ensure_ascii=False, indent=2)

        # Restore HTML content (substitute placeholder)
        for u in sec['units']:
            content_escaped = u['content'].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
            sec_str = sec_str.replace(
                '"__CONTENT_PLACEHOLDER__"',
                f'`{content_escaped}`',
                1
            )

        indented = '\n'.join('  ' + l for l in sec_str.split('\n'))
        lines_out.append(indented + ',')

    lines_out.append('];')
    output = '\n'.join(lines_out) + '\n'

    with open('textbook-data.js', 'w', encoding='utf-8') as f:
        f.write(output)

    print(f'textbook-data.js を出力しました（{len(output):,} 文字）')


if __name__ == '__main__':
    main()
