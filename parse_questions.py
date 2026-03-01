#!/usr/bin/env python3
"""
演習問題_200問_Part1.md + Part2.md を解析し questions-data.js を生成するスクリプト
"""
import re
import json

SECTION_MAP = {
    range(1, 51):    (1, '専門領域調達'),
    range(51, 101):  (2, 'ビジネスファンダメンタルズ'),
    range(101, 151): (3, 'CRのための関連知識'),
    range(151, 201): (4, 'マネジメント手法'),
}

def get_section(num):
    for r, (sid, sname) in SECTION_MAP.items():
        if num in r:
            return sid, sname
    raise ValueError(f'問題番号 {num} はセクションマップ外')

def parse_questions(text):
    # 各問題ブロックに分割（### 問N ★ で始まる部分）
    pattern = re.compile(r'^### 問(\d+)\s+(★+)', re.MULTILINE)
    matches = list(pattern.finditer(text))
    questions = []

    for i, m in enumerate(matches):
        num = int(m.group(1))
        stars = m.group(2)
        difficulty = len(stars)

        # このブロックの終わりは次の問題の開始、またはテキスト末尾
        block_start = m.end()
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[block_start:block_end].strip()

        # 問題文（最初の空行または選択肢行の前まで）
        lines = block.split('\n')
        q_lines = []
        choice_lines = []
        answer_line = ''

        mode = 'question'
        for line in lines:
            stripped = line.strip()
            if not stripped:
                if mode == 'question' and q_lines:
                    mode = 'choices'
                continue
            if re.match(r'^- \([A-D]\)', stripped):
                mode = 'choices'
                choice_lines.append(stripped)
            elif stripped.startswith('> **正解'):
                answer_line = stripped
                mode = 'answer'
            elif mode == 'question':
                q_lines.append(stripped)

        question_text = ' '.join(q_lines).strip()

        # 選択肢パース
        choices = []
        choice_map = {}
        for cl in choice_lines:
            cm = re.match(r'^- \(([A-D])\)\s*(.+)', cl)
            if cm:
                letter = cm.group(1)
                text_part = cm.group(2).strip()
                choice_map[letter] = text_part
        for letter in ['A', 'B', 'C', 'D']:
            choice_text = choice_map.get(letter, '')
            choices.append(f'({letter}) {choice_text}' if choice_text else '')

        # 正解と解説
        answer = ''
        explanation = ''
        am = re.match(r'^> \*\*正解：\(([A-D])\)\*\*\s*(.*)', answer_line)
        if am:
            answer = am.group(1)
            explanation = am.group(2).strip()

        sid, sname = get_section(num)

        questions.append({
            'id': num,
            'sectionId': sid,
            'section': sname,
            'difficulty': difficulty,
            'question': question_text,
            'choices': choices,
            'answer': answer,
            'explanation': explanation,
        })

    return questions

def main():
    all_questions = []
    for fname in [
        'remake/演習問題_200問_Part1.md',
        'remake/演習問題_200問_Part2.md',
    ]:
        with open(fname, encoding='utf-8') as f:
            text = f.read()
        qs = parse_questions(text)
        print(f'{fname}: {len(qs)} 問 パース完了')
        all_questions.extend(qs)

    # IDで重複チェック
    ids = [q['id'] for q in all_questions]
    dupes = [x for x in ids if ids.count(x) > 1]
    if dupes:
        print(f'警告: 重複ID検出: {set(dupes)}')

    all_questions.sort(key=lambda q: q['id'])
    print(f'合計: {len(all_questions)} 問')

    # JavaScript 出力
    lines = ['// 自動生成ファイル - parse_questions.py で生成',
             '// CPP B級 演習問題 200問',
             '// セクション1: 専門領域調達 (問1-50)',
             '// セクション2: ビジネスファンダメンタルズ (問51-100)',
             '// セクション3: CRのための関連知識 (問101-150)',
             '// セクション4: マネジメント手法 (問151-200)',
             '',
             'var QUESTIONS = [']

    for q in all_questions:
        # JSON シリアライズしてインデント
        q_json = json.dumps(q, ensure_ascii=False, indent=2)
        # 各行に2スペースインデント追加
        indented = '\n'.join('  ' + line for line in q_json.split('\n'))
        lines.append(indented + ',')

    lines.append('];')
    output = '\n'.join(lines) + '\n'

    with open('questions-data.js', 'w', encoding='utf-8') as f:
        f.write(output)

    print('questions-data.js を出力しました')

    # 簡易検証
    for sid in [1, 2, 3, 4]:
        count = sum(1 for q in all_questions if q['sectionId'] == sid)
        missing_answer = [q['id'] for q in all_questions if q['sectionId'] == sid and not q['answer']]
        print(f'  セクション{sid}: {count}問, 正解なし={missing_answer}')

if __name__ == '__main__':
    main()
