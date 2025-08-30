// CPP Master - クイズデータベース
// CPPｂ級試験対応問題集

const QUIZ_DATABASE = {
    // 第1章: 経営に貢献する調達を目指して
    ch1: [
        {
            id: 'ch1_q1',
            category: '調達の基本概念',
            difficulty: 1,
            text: '調達業務を「ソーシング」と「パーチェシング」に分類した場合、「サプライヤーの評価・選定」はどちらに分類されるか。',
            options: ['ソーシング', 'パーチェシング', 'どちらにも該当しない', 'どちらにも該当する'],
            correct: 0,
            explanation: 'ソーシングは調達品の決定やサプライヤーの評価・選定などの戦略的業務を指します。パーチェシングは発注・納期管理などの実務的業務を指します。'
        },
        {
            id: 'ch1_q2',
            category: '調達の戦略的位置付け',
            difficulty: 2,
            text: '企業活動における調達の戦略的位置付けとして最も適切なものはどれか。',
            options: [
                '単なるコスト削減手段',
                '企業競争力の源泉となる戦略的機能', 
                '製造部門の補助機能',
                '事務処理中心の間接業務'
            ],
            correct: 1,
            explanation: '現代の調達は単なる購買業務ではなく、企業競争力の源泉となる戦略的機能として位置付けられています。'
        },
        {
            id: 'ch1_q3',
            category: 'エンジニアリングチェーン',
            difficulty: 2,
            text: 'エンジニアリングチェーンにおける調達部門の関与として正しいものはどれか。',
            options: [
                '製品設計後の部品調達のみ',
                '仕様決定段階から参画し利益貢献を図る',
                '品質検査のみを担当',
                '在庫管理のみを担当'
            ],
            correct: 1,
            explanation: 'エンジニアリングチェーンにおいて調達部門が仕様決定段階から関わることで、より大きな利益貢献を果たすことができます。'
        },
        {
            id: 'ch1_q4',
            category: '調達品の分類',
            difficulty: 1,
            text: '次のうち「直接材」に分類されるものはどれか。',
            options: ['事務用品', '製品の一部となる部品', '清掃用品', 'コピー用紙'],
            correct: 1,
            explanation: '直接材は製品の一部として使用される原材料や部品を指します。'
        },
        {
            id: 'ch1_q5',
            category: '調達の関与度',
            difficulty: 2,
            text: '調達部門の関与度が最も高いのはどの品目か。',
            options: ['間接品', '直接材', '仕入品', 'アフターサービス品'],
            correct: 1,
            explanation: '直接材は製品の主要構成要素であり、調達部門の関与度が最も高い品目です。'
        }
    ],

    // 第2章: 調達競争力強化の方向性
    ch2: [
        {
            id: 'ch2_q1',
            category: '競争力強化',
            difficulty: 2,
            text: '調達競争力強化のための基本的な方向性として最も重要なものはどれか。',
            options: [
                'コストのみの追求',
                '品質・コスト・納期・サービスの総合最適化',
                '国内サプライヤーへの集約',
                '発注量の最大化'
            ],
            correct: 1,
            explanation: '調達競争力強化には、品質・コスト・納期・サービス（QCDS）の総合的な最適化が重要です。'
        },
        {
            id: 'ch2_q2',
            category: 'サプライチェーン',
            difficulty: 2,
            text: 'サプライチェーン管理において調達部門が果たすべき役割として正しいものはどれか。',
            options: [
                '単純な発注業務のみ',
                'サプライヤーとの戦略的パートナーシップ構築',
                '価格交渉のみに専念',
                '在庫の単純な削減'
            ],
            correct: 1,
            explanation: 'サプライチェーン管理では、サプライヤーとの長期的な戦略的パートナーシップの構築が重要な役割となります。'
        },
        {
            id: 'ch2_q3',
            category: 'グローバル調達',
            difficulty: 3,
            text: 'グローバル調達を推進する際の主要な検討要素として適切でないものはどれか。',
            options: [
                '為替リスク',
                '品質管理体制',
                '輸送コストと時間',
                '国内雇用への配慮のみ'
            ],
            correct: 3,
            explanation: 'グローバル調達では為替・品質・物流など多角的な検討が必要で、国内雇用への配慮のみでは戦略的判断になりません。'
        },
        {
            id: 'ch2_q4',
            category: '調達戦略',
            difficulty: 2,
            text: '調達戦略を策定する際の基本的なプロセスとして最も適切な順序はどれか。',
            options: [
                '発注→評価→計画→実行',
                '計画→実行→評価→改善',
                '実行→計画→評価→改善',
                '評価→実行→計画→改善'
            ],
            correct: 1,
            explanation: 'PDCA（Plan-Do-Check-Action）サイクルに基づき、計画→実行→評価→改善の順序が基本となります。'
        }
    ],

    // 第3章: 調達企画機能の強化
    ch3: [
        {
            id: 'ch3_q1',
            category: '調達企画',
            difficulty: 2,
            text: '調達企画機能の強化において最も重要な要素はどれか。',
            options: [
                '単年度予算の厳守',
                '中長期的な調達戦略の策定',
                '発注頻度の最大化',
                '特定サプライヤーへの集中'
            ],
            correct: 1,
            explanation: '調達企画機能の強化には、短期的な視点ではなく中長期的な調達戦略の策定が最も重要です。'
        },
        {
            id: 'ch3_q2',
            category: 'ソーシング戦略',
            difficulty: 3,
            text: 'ソーシング戦略を策定する際のクラジル分析マトリックスで、「供給リスク高・利益インパクト高」の品目に対する戦略として適切なものはどれか。',
            options: [
                'レバレッジ戦略（価格重視）',
                'ボトルネック戦略（供給確保重視）',
                'ストラテジック戦略（パートナーシップ）',
                'ルーチン戦略（効率化重視）'
            ],
            correct: 2,
            explanation: '供給リスクも利益インパクトも高い品目では、戦略的パートナーシップによる協働が適切です。'
        }
    ],

    // 第4章: 調達組織・体制の整備
    ch4: [
        {
            id: 'ch4_q1',
            category: '調達権限',
            difficulty: 2,
            text: '調達部門が持つべき権限として最も基本的で重要なものはどれか。',
            options: [
                '予算管理権限のみ',
                '仕様決定・サプライヤー選定・価格決定の3権限',
                '品質管理権限のみ',
                '在庫管理権限のみ'
            ],
            correct: 1,
            explanation: '調達権限の確立には、仕様決定権、サプライヤー選定権、価格決定権の3つの基本権限が不可欠です。'
        },
        {
            id: 'ch4_q2',
            category: 'CPO',
            difficulty: 3,
            text: 'CPO（Chief Procurement Officer）の主要役割として適切でないものはどれか。',
            options: [
                '調達戦略の策定・実行',
                '調達組織の最適化',
                '日常の発注業務の直接実行',
                'ステークホルダー管理'
            ],
            correct: 2,
            explanation: 'CPOは戦略的な役割を担い、日常の発注業務は現場が担当します。CPOは戦略立案、組織運営、変革推進に注力すべきです。'
        },
        {
            id: 'ch4_q3',
            category: '調達組織',
            difficulty: 2,
            text: '調達組織の体制整備において最優先で取り組むべき事項はどれか。',
            options: [
                '人員数の拡大',
                '調達権限の明確化と確立',
                '新システムの導入',
                '海外拠点の設置'
            ],
            correct: 1,
            explanation: '組織体制整備の基盤は権限の明確化です。権限が確立されていない状態では、他の施策も効果的に機能しません。'
        }
    ],

    // 第5章: マネジメントプロセスの徹底
    ch5: [
        {
            id: 'ch5_q1',
            category: 'PDCAサイクル',
            difficulty: 1,
            text: '調達マネジメントのPDCAサイクルにおいて、「Check（評価）」段階で行うべき活動として正しいものはどれか。',
            options: [
                '目標設定と戦略立案',
                '施策の実行と日常業務',
                '実績測定と分析評価',
                '改善策の実施'
            ],
            correct: 2,
            explanation: 'Check段階では実績測定、分析評価、課題抽出を行い、次のAction（改善）に繋げる準備を行います。'
        },
        {
            id: 'ch5_q2',
            category: 'マネジメントプロセス',
            difficulty: 2,
            text: '調達マネジメントプロセスの継続的改善において最も重要な要素はどれか。',
            options: [
                '一度決めた方針の固守',
                '定期的な見直しと改善',
                '他社の完全な模倣',
                '短期的な成果のみの追求'
            ],
            correct: 1,
            explanation: '継続的改善には定期的な見直しとPDCAサイクルの回転が不可欠です。市場変化に対応するため柔軟性が重要です。'
        }
    ],

    // 第6章: 調達プロセスの標準化
    ch6: [
        {
            id: 'ch6_q1',
            category: 'プロセス標準化',
            difficulty: 2,
            text: '調達プロセス標準化の主な目的として最も適切なものはどれか。',
            options: [
                '作業の複雑化',
                '効率化と品質向上',
                '人員削減のみ',
                'コストの増加'
            ],
            correct: 1,
            explanation: 'プロセス標準化の目的は、作業効率の向上、品質の安定化、ノウハウの共有による全体最適化です。'
        },
        {
            id: 'ch6_q2',
            category: '標準化手順',
            difficulty: 3,
            text: '調達プロセス標準化を実施する際の適切な手順はどれか。',
            options: [
                '即座に新システムを導入',
                '現状把握→分析→標準設計→展開→定着',
                '他社事例の完全コピー',
                '一部門のみで試行'
            ],
            correct: 1,
            explanation: '標準化は段階的に進める必要があり、現状把握から始めて分析、設計、展開、定着の順で実施します。'
        }
    ],

    // 第7章: 調達情報管理の仕組み構築
    ch7: [
        {
            id: 'ch7_q1',
            category: '情報管理',
            difficulty: 2,
            text: '調達情報管理システム構築の最重要目的はどれか。',
            options: [
                'データの大量保存',
                '意思決定支援と業務効率化',
                'システム導入による見た目の改善',
                '人件費削減のみ'
            ],
            correct: 1,
            explanation: '調達情報管理システムの目的は、正確な情報に基づく迅速な意思決定支援と業務プロセスの効率化です。'
        },
        {
            id: 'ch7_q2',
            category: 'データ品質',
            difficulty: 3,
            text: '調達情報の品質管理において最も注意すべき点はどれか。',
            options: [
                'データ量の最大化',
                'リアルタイム性と正確性の確保',
                '複雑な分析機能の追加',
                'システムの高度化のみ'
            ],
            correct: 1,
            explanation: '調達情報はリアルタイム性と正確性が重要で、古い情報や不正確なデータは誤った意思決定を招きます。'
        }
    ],

    // 第8章: 調達スキル向上の仕組み構築
    ch8: [
        {
            id: 'ch8_q1',
            category: 'スキル向上',
            difficulty: 2,
            text: '調達担当者のスキル向上において最も重要な要素はどれか。',
            options: [
                '資格取得のみ',
                '体系的な人材育成プログラム',
                '個人の自主学習のみ',
                '外部研修への丸投げ'
            ],
            correct: 1,
            explanation: '効果的なスキル向上には、計画的で体系的な人材育成プログラムが必要です。個別の能力開発と組織的な取り組みの両方が重要です。'
        },
        {
            id: 'ch8_q2',
            category: '人材育成',
            difficulty: 3,
            text: '調達人材育成プログラムの設計において考慮すべき要素として不適切なものはどれか。',
            options: [
                '現在のスキルレベル把握',
                '将来の業務要求に対する準備',
                '一律同じ内容での実施',
                '実務経験との組み合わせ'
            ],
            correct: 2,
            explanation: '人材育成は個々のスキルレベルや役割に応じてカスタマイズすべきで、一律同じ内容では効果的ではありません。'
        }
    ],

    // 第9章: サプライヤー管理
    ch9: [
        {
            id: 'ch9_q1',
            category: 'サプライヤー管理',
            difficulty: 2,
            text: 'サプライヤー評価において最も重要な評価項目の組み合わせはどれか。',
            options: [
                '価格のみ',
                '品質・コスト・納期・サービス（QCDS）',
                '企業規模のみ',
                '地理的な近さのみ'
            ],
            correct: 1,
            explanation: 'サプライヤー評価はQCDS（品質・コスト・納期・サービス）を総合的に評価することが基本です。'
        },
        {
            id: 'ch9_q2',
            category: 'サプライヤー開発',
            difficulty: 3,
            text: 'サプライヤー開発活動の最も効果的なアプローチはどれか。',
            options: [
                '短期的な価格圧力のみ',
                '長期パートナーシップによる協働改善',
                '頻繁なサプライヤー変更',
                '一方的な要求の押し付け'
            ],
            correct: 1,
            explanation: 'サプライヤー開発は長期的な関係構築による協働改善が最も効果的で、Win-Winの関係を築くことが重要です。'
        }
    ],

    // 第10章: 調達契約
    ch10: [
        {
            id: 'ch10_q1',
            category: '契約管理',
            difficulty: 2,
            text: '調達契約において最も基本的な契約要素はどれか。',
            options: [
                '契約金額のみ',
                '品質・納期・価格・契約条件の全て',
                '支払条件のみ',
                '契約期間のみ'
            ],
            correct: 1,
            explanation: '調達契約では品質、納期、価格、その他の契約条件を総合的に定める必要があります。'
        }
    ],

    // 第11章: 調達における品質管理
    ch11: [
        {
            id: 'ch11_q1',
            category: '品質管理',
            difficulty: 2,
            text: '調達における品質管理の基本原則として正しいものはどれか。',
            options: [
                '検査による品質確保のみ',
                '予防重視による品質作り込み',
                '不良品の事後対応のみ',
                '価格優先での品質妥協'
            ],
            correct: 1,
            explanation: '品質管理は予防重視で、源流での品質作り込みが基本原則です。事後検査より予防が効果的です。'
        }
    ],

    // 第12章: グローバル調達
    ch12: [
        {
            id: 'ch12_q1',
            category: 'グローバル調達',
            difficulty: 3,
            text: 'グローバル調達推進時の主要リスクとして最も注意すべきものはどれか。',
            options: [
                '言語の違いのみ',
                '為替変動・品質・物流・法規制の複合リスク',
                '時差の問題のみ',
                '文化の違いのみ'
            ],
            correct: 1,
            explanation: 'グローバル調達では為替、品質、物流、法規制など多面的なリスクが複合的に存在するため総合的な対策が必要です。'
        }
    ],

    // 第13章: 調達におけるリスク管理
    ch13: [
        {
            id: 'ch13_q1',
            category: 'リスク管理',
            difficulty: 3,
            text: '調達リスク管理のプロセスとして適切な順序はどれか。',
            options: [
                '対策→評価→特定→監視',
                'リスク特定→評価→対策→監視',
                '監視→特定→対策→評価',
                '評価→監視→特定→対策'
            ],
            correct: 1,
            explanation: 'リスク管理は「特定→評価→対策→監視」の順序で実施し、継続的にサイクルを回すことが基本です。'
        }
    ],

    // 第14章: 調達業務のデジタル化
    ch14: [
        {
            id: 'ch14_q1',
            category: 'デジタル化',
            difficulty: 2,
            text: '調達業務デジタル化の主な効果として期待できないものはどれか。',
            options: [
                '業務効率の向上',
                'データ活用による意思決定支援',
                '完全な人手不要の実現',
                '透明性の向上'
            ],
            correct: 2,
            explanation: 'デジタル化は効率向上や意思決定支援には有効ですが、完全に人手を不要にするものではなく、人とテクノロジーの協働が重要です。'
        }
    ],

    // 第15章: サステナブル調達
    ch15: [
        {
            id: 'ch15_q1',
            category: 'サステナブル調達',
            difficulty: 2,
            text: 'サステナブル調達が重視する要素として適切でないものはどれか。',
            options: [
                '環境への配慮',
                '社会的責任',
                '短期利益の最大化のみ',
                '経済的持続可能性'
            ],
            correct: 2,
            explanation: 'サステナブル調達は環境・社会・経済の3つの側面を重視し、短期利益のみを追求するものではありません。'
        }
    ],

    // 第16章: 調達コストマネジメント
    ch16: [
        {
            id: 'ch16_q1',
            category: 'コストマネジメント',
            difficulty: 3,
            text: 'TCO（Total Cost of Ownership）に含まれるコスト要素として適切でないものはどれか。',
            options: [
                '初期購入コスト',
                '運用・保守コスト',
                '廃棄コスト',
                '競合他社のコスト'
            ],
            correct: 3,
            explanation: 'TCOは自社の製品ライフサイクル全体のコストを対象とし、競合他社のコストは含まれません。'
        }
    ],

    // 第17章: サプライチェーンマネジメント
    ch17: [
        {
            id: 'ch17_q1',
            category: 'SCM',
            difficulty: 3,
            text: 'サプライチェーンマネジメント（SCM）の基本概念として正しいものはどれか。',
            options: [
                '単一企業内の最適化',
                'サプライチェーン全体の最適化',
                '調達部門のみの最適化',
                '製造部門のみの最適化'
            ],
            correct: 1,
            explanation: 'SCMはサプライチェーン全体を通じた最適化を図り、部分最適ではなく全体最適を追求します。'
        }
    ],

    // 第18章: 調達法務・契約管理
    ch18: [
        {
            id: 'ch18_q1',
            category: '法務・契約',
            difficulty: 3,
            text: '調達契約におけるリーガルリスク管理として最も重要なものはどれか。',
            options: [
                '契約書の簡素化',
                '法的要件の事前確認と適切な契約条項設定',
                '契約期間の短縮',
                '契約相手方への一方的な責任転嫁'
            ],
            correct: 1,
            explanation: '法務リスク管理では事前の法的要件確認と適切な契約条項設定により、リスクを予防することが最も重要です。'
        }
    ],

    // 第19章: 調達戦略の実践と展開
    ch19: [
        {
            id: 'ch19_q1',
            category: '戦略実践',
            difficulty: 3,
            text: '調達戦略の成功的な実践・展開において最も重要な要素はどれか。',
            options: [
                '完璧な計画の策定のみ',
                '実行力と継続的改善',
                '短期間での結果追求',
                '他社戦略の完全模倣'
            ],
            correct: 1,
            explanation: '戦略実践では実行力が重要で、PDCAサイクルによる継続的改善により成果を上げることが成功の鍵です。'
        },
        {
            id: 'ch19_q2',
            category: '戦略展開',
            difficulty: 2,
            text: '調達戦略を組織全体に展開する際に最も重要な成功要因はどれか。',
            options: [
                'トップダウンの命令のみ',
                '関係者の理解と協力の獲得',
                '外部コンサルタントへの依存',
                'システム導入のみ'
            ],
            correct: 1,
            explanation: '戦略展開の成功には関係者全員の理解と協力が不可欠で、変革に対する組織的なコミットメントが重要です。'
        }
    ],

    // 模擬試験用の総合問題
    exam: [
        {
            id: 'exam_q1',
            category: '総合問題',
            difficulty: 2,
            text: 'OEMの正式名称として正しいものはどれか。',
            options: [
                'Original Engineering Manufacturing',
                'Original Equipment Manufacturing', 
                'Optimized Equipment Management',
                'Organized Efficient Manufacturing'
            ],
            correct: 1,
            explanation: 'OEMは「Original Equipment Manufacturing」の略で、相手先ブランド名製造を意味します。'
        },
        {
            id: 'exam_q2',
            category: '総合問題',
            difficulty: 3,
            text: '調達におけるTCO（Total Cost of Ownership）の概念として最も適切な説明はどれか。',
            options: [
                '購入価格のみを考慮した総コスト',
                '購入から廃棄まで製品ライフサイクル全体のコスト',
                '輸送費のみを加算した総コスト',
                '人件費のみを加算した総コスト'
            ],
            correct: 1,
            explanation: 'TCOは購入価格だけでなく、導入・運用・保守・廃棄まで製品ライフサイクル全体のコストを考慮する概念です。'
        },
        {
            id: 'exam_q3',
            category: '総合問題',
            difficulty: 2,
            text: 'JIT（Just In Time）調達の基本思想として正しいものはどれか。',
            options: [
                '大量購入によるコスト削減',
                '必要な時に必要な分だけ調達',
                '年間契約による安定調達',
                '複数社からの分散調達'
            ],
            correct: 1,
            explanation: 'JIT調達は「必要な時に、必要な分だけ、必要な品質で」調達することで在庫削減と効率化を図る思想です。'
        }
    ]
};

// 難易度別の問題フィルタリング
const DIFFICULTY_LEVELS = {
    1: '基礎',
    2: '標準', 
    3: '応用'
};

// クイズモード設定
const QUIZ_MODES = {
    practice: {
        name: '練習問題',
        description: '章ごとの基本問題',
        timeLimit: 300, // 5分
        questionCount: 10,
        randomize: true
    },
    review: {
        name: '復習モード',
        description: '間違えた問題を復習',
        timeLimit: 600, // 10分
        questionCount: -1, // 全問
        randomize: false
    },
    exam: {
        name: '模擬試験',
        description: '本番形式の試験',
        timeLimit: 1800, // 30分
        questionCount: 50,
        randomize: true
    },
    battle: {
        name: 'クイズバトル',
        description: '他ユーザーと対戦',
        timeLimit: 60, // 1分
        questionCount: 5,
        randomize: true
    }
};

// カテゴリ別問題集
const QUIZ_CATEGORIES = {
    '調達の基本概念': '調達業務の基本的な理解',
    '調達戦略': '戦略的調達の考え方',
    '競争力強化': '調達による競争優位の構築',
    'サプライチェーン': 'サプライチェーン管理',
    'グローバル調達': '国際調達の課題と対策',
    '総合問題': '分野横断的な応用問題'
};

// 問題データ取得関数
function getQuizQuestions(mode, chapterKey = null, difficulty = null, category = null) {
    let questions = [];
    
    // チャプター指定の場合
    if (chapterKey && QUIZ_DATABASE[chapterKey]) {
        questions = [...QUIZ_DATABASE[chapterKey]];
    }
    // 模擬試験の場合
    else if (mode === 'exam') {
        // 全章から問題を収集
        Object.keys(QUIZ_DATABASE).forEach(key => {
            if (key !== 'exam') {
                questions = questions.concat(QUIZ_DATABASE[key]);
            }
        });
        questions = questions.concat(QUIZ_DATABASE.exam);
    }
    // その他のモード
    else {
        // 全問題から選択
        Object.keys(QUIZ_DATABASE).forEach(key => {
            questions = questions.concat(QUIZ_DATABASE[key]);
        });
    }
    
    // 難易度フィルタ
    if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
    }
    
    // カテゴリフィルタ
    if (category) {
        questions = questions.filter(q => q.category === category);
    }
    
    // モード設定に応じて問題数を調整
    const modeConfig = QUIZ_MODES[mode];
    if (modeConfig) {
        // ランダム化
        if (modeConfig.randomize) {
            questions = shuffleArray(questions);
        }
        
        // 問題数制限
        if (modeConfig.questionCount > 0) {
            questions = questions.slice(0, modeConfig.questionCount);
        }
    }
    
    return questions;
}

// 配列シャッフル関数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 問題統計情報取得
function getQuizStatistics() {
    let totalQuestions = 0;
    let chapterCounts = {};
    let difficultyCounts = { 1: 0, 2: 0, 3: 0 };
    let categoryCounts = {};
    
    Object.keys(QUIZ_DATABASE).forEach(key => {
        const questions = QUIZ_DATABASE[key];
        totalQuestions += questions.length;
        chapterCounts[key] = questions.length;
        
        questions.forEach(q => {
            difficultyCounts[q.difficulty]++;
            categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
        });
    });
    
    return {
        total: totalQuestions,
        byChapter: chapterCounts,
        byDifficulty: difficultyCounts,
        byCategory: categoryCounts
    };
}

// 間違えた問題の保存
function saveIncorrectAnswer(questionId, userAnswer, correctAnswer) {
    const incorrectAnswers = JSON.parse(localStorage.getItem('cpp_incorrect_answers') || '{}');
    
    incorrectAnswers[questionId] = {
        userAnswer,
        correctAnswer,
        timestamp: Date.now(),
        reviewCount: (incorrectAnswers[questionId]?.reviewCount || 0) + 1
    };
    
    localStorage.setItem('cpp_incorrect_answers', JSON.stringify(incorrectAnswers));
}

// 復習対象問題の取得
function getReviewQuestions() {
    const incorrectAnswers = JSON.parse(localStorage.getItem('cpp_incorrect_answers') || '{}');
    const questions = [];
    
    Object.keys(QUIZ_DATABASE).forEach(chapterKey => {
        QUIZ_DATABASE[chapterKey].forEach(question => {
            if (incorrectAnswers[question.id]) {
                questions.push({
                    ...question,
                    reviewCount: incorrectAnswers[question.id].reviewCount,
                    lastReview: incorrectAnswers[question.id].timestamp
                });
            }
        });
    });
    
    // 復習回数の少ない順でソート
    return questions.sort((a, b) => a.reviewCount - b.reviewCount);
}

// クイズ結果の保存
function saveQuizResult(mode, score, totalQuestions, timeSpent, chapterKey = null) {
    const results = JSON.parse(localStorage.getItem('cpp_quiz_results') || '[]');
    
    const result = {
        mode,
        score,
        totalQuestions,
        accuracy: Math.round((score / totalQuestions) * 100),
        timeSpent,
        chapterKey,
        timestamp: Date.now()
    };
    
    results.push(result);
    
    // 最新100件のみ保持
    if (results.length > 100) {
        results.splice(0, results.length - 100);
    }
    
    localStorage.setItem('cpp_quiz_results', JSON.stringify(results));
    return result;
}

// エクスポート（ブラウザ環境用）
if (typeof window !== 'undefined') {
    window.QUIZ_DATABASE = QUIZ_DATABASE;
    window.QUIZ_MODES = QUIZ_MODES;
    window.QUIZ_CATEGORIES = QUIZ_CATEGORIES;
    window.DIFFICULTY_LEVELS = DIFFICULTY_LEVELS;
    window.getQuizQuestions = getQuizQuestions;
    window.getQuizStatistics = getQuizStatistics;
    window.saveIncorrectAnswer = saveIncorrectAnswer;
    window.getReviewQuestions = getReviewQuestions;
    window.saveQuizResult = saveQuizResult;
}

// モジュール環境用エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUIZ_DATABASE,
        QUIZ_MODES,
        QUIZ_CATEGORIES,
        DIFFICULTY_LEVELS,
        getQuizQuestions,
        getQuizStatistics,
        saveIncorrectAnswer,
        getReviewQuestions,
        saveQuizResult
    };
}