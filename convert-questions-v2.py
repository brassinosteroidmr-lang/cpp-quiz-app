#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
問題データを正しい形式に変換するスクリプト
実行: python convert-questions-v2.py
"""

import json
import re

# questions-data.jsonを読み込み
with open('questions-data.json', 'r', encoding='utf-8') as f:
    questions_data = json.load(f)

# 章のマッピング
chapter_map = {
    '第１章': 'ch1',
    '第２章': 'ch2',
    '第３章': 'ch3',
    '第４章': 'ch4',
    '第５章': 'ch5',
    '第６章': 'ch6',
    '第７章': 'ch7',
    '第８章': 'ch8',
    '第９章': 'ch9',
    '第１０章': 'ch10',
    '第１１章': 'ch11'
}

CHAPTER_INFO = {
    'ch1': {'title': '第1章：経営に貢献する調達を目指して', 'number': 1},
    'ch2': {'title': '第2章：調達・購買業務の役割と機能', 'number': 2},
    'ch3': {'title': '第3章：サプライヤマネジメント', 'number': 3},
    'ch4': {'title': '第4章：コストマネジメント', 'number': 4},
    'ch5': {'title': '第5章：契約・法務', 'number': 5},
    'ch6': {'title': '第6章：品質マネジメント', 'number': 6},
    'ch7': {'title': '第7章：物流・在庫管理', 'number': 7},
    'ch8': {'title': '第8章：情報システム', 'number': 8},
    'ch9': {'title': '第9章：グローバル調達', 'number': 9},
    'ch10': {'title': '第10章：CSR・環境', 'number': 10},
    'ch11': {'title': '第11章：リスクマネジメント', 'number': 11}
}

def parse_options(options_str):
    """選択肢文字列をパースして配列に変換"""
    if not options_str or options_str == 'null':
        return []

    # タブまたは改行で分割
    options = []
    for opt in re.split(r'[\n\t]+', options_str):
        opt = opt.strip()
        if opt:
            # "1. xxx" や "1.\txxx" の形式から番号を除去
            opt = re.sub(r'^\d+\.\s*', '', opt)
            if opt:
                options.append(opt)

    return options

def parse_answer(answer_str):
    """答えをパースして空欄ごとの正解を抽出"""
    if not answer_str or answer_str == 'null':
        return []

    blanks = []

    # パターン1: "①xxx\n②yyy\n③zzz" または "①xxx、②yyy、③zzz"
    parts = [p.strip() for p in re.split(r'[\n、]', answer_str) if p.strip()]

    for part in parts:
        match = re.match(r'^([①②③④⑤⑥⑦⑧⑨⑩])\s*(.+)$', part)
        if match:
            blanks.append({
                'id': match.group(1),
                'correctAnswer': match.group(2).strip()
            })

    # パターン2: もし①が見つからない場合、単一回答として扱う
    if not blanks and answer_str.strip():
        blanks.append({
            'id': '①',
            'correctAnswer': answer_str.strip()
        })

    return blanks

def detect_blanks(question_text):
    """問題文から空欄の数を検出"""
    blank_markers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']
    found = []

    for marker in blank_markers:
        if marker in question_text:
            found.append(marker)

    return found

# 変換処理
converted_questions = {ch_id: [] for ch_id in chapter_map.values()}
question_counter = {}

for index, q in enumerate(questions_data):
    ch_id = chapter_map.get(q['chapter'])
    if not ch_id:
        print(f"Warning: Unknown chapter: {q['chapter']} for question {q['id']}")
        continue

    # 章ごとの問題番号をカウント
    if ch_id not in question_counter:
        question_counter[ch_id] = 1

    options = parse_options(q['options'])
    blanks = parse_answer(q['answer'])
    blank_markers = detect_blanks(q['question'])

    # 問題タイプを判定
    question_type = 'multiple-choice'
    if len(blank_markers) > 1 or len(blanks) > 1:
        question_type = 'fill-in-blanks'
    elif len(blank_markers) == 1 and len(blanks) == 1:
        question_type = 'fill-in-blanks'

    converted_question = {
        'id': f"{ch_id}_q{question_counter[ch_id]}",
        'type': question_type,
        'question': q['question']
    }

    question_counter[ch_id] += 1

    if question_type == 'fill-in-blanks':
        # 穴埋め問題
        converted_question['blanks'] = blanks
        converted_question['options'] = options
    else:
        # 4択問題（従来形式）
        converted_question['options'] = options[:4]
        # 正解のインデックスを探す
        correct_answer = blanks[0]['correctAnswer'] if blanks else ''
        correct_index = next((i for i, opt in enumerate(options) if correct_answer in opt or opt in correct_answer), 0)
        converted_question['correct'] = correct_index

    # 解説を生成
    correct_answers = ', '.join([b['correctAnswer'] for b in blanks])
    converted_question['explanation'] = q.get('explanation') or \
        f"正解は「{correct_answers}」です。\n\nこの問題は調達における重要な概念を問うものです。試験では基本的な用語や概念の理解が求められます。"

    converted_questions[ch_id].append(converted_question)

# 結果を表示
print('変換結果:')
for ch_id in sorted(converted_questions.keys()):
    questions = converted_questions[ch_id]
    fill_in_blanks = len([q for q in questions if q['type'] == 'fill-in-blanks'])
    multiple_choice = len([q for q in questions if q['type'] == 'multiple-choice'])
    print(f"{ch_id}: {len(questions)}問")
    print(f"  - 穴埋め: {fill_in_blanks}問")
    print(f"  - 4択: {multiple_choice}問")

# ファイルに出力
output = f"""// CPP B級試験対策 - 全145問の問題データベース（v2 - 穴埋め対応版）
// questions-data.jsから正しく変換

const EXAM_QUESTIONS = {json.dumps(converted_questions, ensure_ascii=False, indent=2)};

const CHAPTER_INFO = {json.dumps(CHAPTER_INFO, ensure_ascii=False, indent=2)};

// 章IDから問題を取得するヘルパー関数
function getQuestionsByChapter(chapterId) {{
    return EXAM_QUESTIONS[chapterId] || [];
}}

// ランダムにシャッフル
function shuffleQuestions(questions) {{
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {{
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }}
    return shuffled;
}}
"""

with open('exam-questions-v2.js', 'w', encoding='utf-8') as f:
    f.write(output)

print('\n✓ exam-questions-v2.js を生成しました')
