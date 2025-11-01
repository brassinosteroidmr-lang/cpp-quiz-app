// 調達マスターへの道 - シナリオデータ
// 実務シミュレーション型学習シナリオ

const SCENARIOS = [
  {
    id: 'scenario_01',
    title: '緊急部品調達ミッション',
    description: '主要製品の部品が突然不足！納期に間に合わせるための緊急調達が必要です。',
    difficulty: 1,
    requiredLevel: 1,
    category: '調達実務',
    estimatedTime: '5分',
    stages: [
      {
        id: 'stage_1',
        type: 'story',
        text: `【状況】

月曜日の朝、あなたの元に製造部門から緊急の連絡が入りました。

「主要製品Aの組み立てに使用する電子部品が在庫不足で、このままでは水曜日の納期に間に合いません！」

在庫を確認すると、確かに部品Xが100個不足しています。
通常のサプライヤーからの調達には最短でも5営業日かかります。

あなたはどう対応しますか？`,
        choices: [
          {
            id: 'choice_1_1',
            text: 'まず通常のサプライヤーに緊急対応が可能か確認する',
            score: 8,
            feedback: '良い判断です。既存の取引先との信頼関係を活用することは、品質とコストの両面で有利です。',
            nextStage: 'stage_2a'
          },
          {
            id: 'choice_1_2',
            text: 'すぐに代替サプライヤーをインターネットで探す',
            score: 3,
            feedback: '迅速な行動は良いですが、品質確認や取引条件の確認が不十分になる可能性があります。',
            nextStage: 'stage_2b'
          },
          {
            id: 'choice_1_3',
            text: '製造部門に納期延期を提案する',
            score: -5,
            feedback: '顧客との約束を守ることが最優先です。他の解決策を探る前に納期延期を提案するのは早計です。',
            nextStage: 'stage_2c'
          }
        ]
      },
      {
        id: 'stage_2a',
        type: 'story',
        text: `【通常サプライヤーとの交渉】

通常のサプライヤーに連絡を取りました。
担当者は「通常は5営業日ですが、特急対応で3営業日まで短縮できます。ただし、特急料金として通常価格の30%増しになります。」と提案してきました。

3営業日でも納期には1日遅れてしまいます。

どうしますか？`,
        choices: [
          {
            id: 'choice_2a_1',
            text: '特急対応を依頼し、並行して他のサプライヤーにも見積依頼する',
            score: 10,
            feedback: '素晴らしい判断です！リスク分散と複数の選択肢を持つことは調達の基本です。',
            questionIds: ['q1', 'q2'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2a_2',
            text: '特急対応を断り、さらに短縮できないか交渉する',
            score: 4,
            feedback: 'コスト意識は大切ですが、時間的余裕がない状況では柔軟性も必要です。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_2b',
        type: 'story',
        text: `【代替サプライヤーの検討】

インターネットで複数の代替サプライヤーを見つけました。
その中の一社が「2営業日で納品可能」と回答してきました。

ただし、このサプライヤーとは取引実績がなく、品質保証体制も不明です。
価格は通常サプライヤーの20%安です。

どうしますか？`,
        choices: [
          {
            id: 'choice_2b_1',
            text: 'サンプル品の提供を依頼し、品質確認を行う',
            score: 9,
            feedback: '慎重かつ適切な判断です。新規サプライヤーの品質確認は必須です。',
            questionIds: ['q3'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2b_2',
            text: '納期優先で即座に発注する',
            score: -3,
            feedback: '危険です。品質が保証されていない部品を使用すると、製品不良や顧客クレームのリスクがあります。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_2c',
        type: 'story',
        text: `【製造部門との調整】

製造部門に納期延期を提案しましたが、
「この納期は顧客との重要な契約であり、延期は絶対に避けたい」と強く言われました。

営業部門からも「この顧客を失うわけにはいかない」というプレッシャーがかかっています。

改めて、どう対応しますか？`,
        choices: [
          {
            id: 'choice_2c_1',
            text: '複数のサプライヤーに並行して緊急対応を依頼する',
            score: 7,
            feedback: '良い軌道修正です。複数の選択肢を同時に進めることでリスクを低減できます。',
            questionIds: ['q4'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2c_2',
            text: '在庫管理の改善を提案する',
            score: 2,
            feedback: '長期的には重要ですが、今の緊急事態の解決にはなりません。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_3',
        type: 'knowledge_test',
        text: `【知識確認】

緊急調達の対応を進める中で、調達の基本知識を確認しましょう。
以下の問題に答えてください。`,
        questionIds: ['q5', 'q6']
      },
      {
        id: 'stage_final',
        type: 'result',
        text: `【ミッション完了】

あなたの対応により、部品調達の問題が解決しました。
製品は無事に納期内に出荷できました。

今回の経験から、緊急時の対応力と判断力を身につけることができました。`
      }
    ]
  },

  {
    id: 'scenario_02',
    title: 'サプライヤー品質問題への対応',
    description: '長年取引のあるサプライヤーから納入された部品に品質問題が発生。適切な対応が求められます。',
    difficulty: 2,
    requiredLevel: 2,
    category: '品質管理',
    estimatedTime: '7分',
    stages: [
      {
        id: 'stage_1',
        type: 'story',
        text: `【状況】

製造ラインから報告が入りました。

「A社から納入された部品のうち、10%に不良品が混入しています。このままでは製造が止まってしまいます。」

A社とは5年以上の取引があり、これまで品質問題はほとんどありませんでした。
しかし、今回の不良率10%は通常の許容範囲（0.5%以下）を大きく超えています。

あなたの最初の対応は？`,
        choices: [
          {
            id: 'choice_1_1',
            text: 'A社に連絡し、原因調査と改善対策を要求する',
            score: 10,
            feedback: '正しい対応です。まずサプライヤーと協力して根本原因を特定することが重要です。',
            nextStage: 'stage_2a'
          },
          {
            id: 'choice_1_2',
            text: '全量返品し、代替サプライヤーを探す',
            score: 3,
            feedback: '短期的な解決にはなりますが、長期的な改善にはつながりません。',
            nextStage: 'stage_2b'
          },
          {
            id: 'choice_1_3',
            text: '製造部門に検査を強化して対応してもらう',
            score: -2,
            feedback: '問題を製造部門に押し付けているだけです。根本原因の解決が必要です。',
            nextStage: 'stage_2c'
          }
        ]
      },
      {
        id: 'stage_2a',
        type: 'story',
        text: `【原因調査】

A社との緊急会議を開催しました。
調査の結果、新しい検査装置の設定ミスが原因と判明しました。

A社は「すぐに設定を修正し、全量再検査します。また、今後の再発防止策も策定します」と回答。

しかし、製造ラインは今すぐ部品が必要な状況です。

どう対応しますか？`,
        choices: [
          {
            id: 'choice_2a_1',
            text: 'A社の在庫から緊急出荷を依頼し、並行して再発防止策の詳細を確認する',
            score: 10,
            feedback: '優秀です！短期対応と長期改善の両方を同時に進めています。',
            questionIds: ['q10', 'q11'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2a_2',
            text: '再発防止策の完全な実施まで取引を停止する',
            score: 4,
            feedback: '品質重視は良いですが、関係性と実務のバランスも考慮が必要です。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_2b',
        type: 'story',
        text: `【代替サプライヤーの検討】

全量返品を決定し、代替サプライヤーを探し始めました。

しかし、この部品は特殊仕様で、他のサプライヤーで同等品を調達するには、
最低でも2週間の品質確認と試作が必要です。

製造ラインは待てません。

どうしますか？`,
        choices: [
          {
            id: 'choice_2b_1',
            text: 'A社に戻って改善を依頼する',
            score: 6,
            feedback: '軌道修正は良い判断です。既存サプライヤーとの協力関係を活用しましょう。',
            questionIds: ['q12'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2b_2',
            text: '製造部門に生産計画の変更を依頼する',
            score: 2,
            feedback: '他部門に影響を与える前に、調達部門として解決策を探るべきです。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_2c',
        type: 'story',
        text: `【製造部門の反応】

製造部門から強い抗議がありました。

「検査を強化するには追加の人員とコストが必要です。そもそも調達部門がサプライヤー管理をしっかりやるべきでは？」

正当な指摘です。改めて対応を考え直す必要があります。

どうしますか？`,
        choices: [
          {
            id: 'choice_2c_1',
            text: 'A社に直接訪問し、品質改善を協議する',
            score: 8,
            feedback: '良い判断です。直接対話で問題の本質を理解し、協力関係を強化できます。',
            questionIds: ['q13'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2c_2',
            text: '経営層にエスカレーションする',
            score: 3,
            feedback: '早すぎます。まず自分で解決策を試みましょう。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_3',
        type: 'knowledge_test',
        text: `【知識確認】

品質管理に関する知識を確認しましょう。`,
        questionIds: ['q15', 'q16']
      },
      {
        id: 'stage_final',
        type: 'result',
        text: `【ミッション完了】

あなたの対応により、品質問題が解決し、A社との関係もより強固になりました。

再発防止策も実施され、今後の品質向上が期待できます。`
      }
    ]
  },

  {
    id: 'scenario_03',
    title: 'コスト削減プロジェクト',
    description: '経営層から調達コスト10%削減の指示が。戦略的なアプローチが必要です。',
    difficulty: 3,
    requiredLevel: 3,
    category: 'コスト管理',
    estimatedTime: '10分',
    stages: [
      {
        id: 'stage_1',
        type: 'story',
        text: `【状況】

経営会議で、今期の調達コスト10%削減が決定されました。

現在の年間調達額は10億円。つまり1億円のコスト削減が目標です。

調達部門長から「3ヶ月以内に具体的な削減計画を立てて実行してほしい」と指示されました。

まず何から始めますか？`,
        choices: [
          {
            id: 'choice_1_1',
            text: '調達品目を分析し、コスト削減の余地が大きい品目を特定する',
            score: 10,
            feedback: '優秀です！データに基づいた戦略的アプローチです。',
            nextStage: 'stage_2a'
          },
          {
            id: 'choice_1_2',
            text: '全サプライヤーに一律10%の値下げを要求する',
            score: -5,
            feedback: '危険なアプローチです。サプライヤーとの関係悪化や品質低下のリスクがあります。',
            nextStage: 'stage_2b'
          },
          {
            id: 'choice_1_3',
            text: '安価な海外サプライヤーを探す',
            score: 5,
            feedback: '一つの選択肢ですが、品質やリードタイム、為替リスクなども考慮が必要です。',
            nextStage: 'stage_2c'
          }
        ]
      },
      {
        id: 'stage_2a',
        type: 'story',
        text: `【ABC分析の結果】

調達品目を分析した結果、以下のことが分かりました：

・A品目（上位20%の品目）：年間6億円（全体の60%）
・B品目（中位30%の品目）：年間3億円（全体の30%）
・C品目（下位50%の品目）：年間1億円（全体の10%）

A品目の中でも、特に電子部品（年間2億円）に集中していることが判明。

次の戦略は？`,
        choices: [
          {
            id: 'choice_2a_1',
            text: 'A品目（特に電子部品）に焦点を当て、集中購買や長期契約でボリュームディスカウントを交渉',
            score: 10,
            feedback: '戦略的な判断です！パレートの法則を活用し、効果の大きい部分に集中しています。',
            questionIds: ['q20', 'q21'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2a_2',
            text: 'C品目から先に着手し、小さな成功を積み重ねる',
            score: 3,
            feedback: 'リスクは低いですが、目標の10%削減達成は困難です。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_2b',
        type: 'story',
        text: `【サプライヤーの反応】

一律10%値下げ要求に対し、多くのサプライヤーから強い抵抗がありました。

主要サプライヤーから：
「現在の価格は適正です。一方的な値下げ要求には応じられません。
むしろ、設計見直しや発注方法の改善で一緒にコスト削減を考えませんか？」

との提案がありました。

どう対応しますか？`,
        choices: [
          {
            id: 'choice_2b_1',
            text: 'サプライヤーの提案を受け入れ、協働でコスト削減策を検討する',
            score: 9,
            feedback: '良い軌道修正です！Win-Winの関係構築が長期的な成功につながります。',
            questionIds: ['q22'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2b_2',
            text: '値下げに応じないサプライヤーとの取引を停止すると警告する',
            score: -8,
            feedback: '非常に危険です。供給途絶や品質問題のリスクが高まります。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_2c',
        type: 'story',
        text: `【海外サプライヤーの評価】

いくつかの海外サプライヤーを調査しました。

確かに価格は国内サプライヤーより20-30%安いですが、
以下の課題も見つかりました：

・リードタイム：国内3日→海外4週間
・最小ロット：国内100個→海外10,000個
・品質保証体制が不明確
・為替変動リスク

どう判断しますか？`,
        choices: [
          {
            id: 'choice_2c_1',
            text: '一部の品目で試験的に導入し、トータルコストを評価する',
            score: 8,
            feedback: '慎重かつ戦略的なアプローチです。リスクを管理しながら検証できます。',
            questionIds: ['q23'],
            nextStage: 'stage_3'
          },
          {
            id: 'choice_2c_2',
            text: '価格が安いので全面的に切り替える',
            score: -4,
            feedback: '価格だけで判断するのは危険です。トータルコストで評価しましょう。',
            nextStage: 'stage_3'
          }
        ]
      },
      {
        id: 'stage_3',
        type: 'knowledge_test',
        text: `【知識確認】

コスト管理と調達戦略に関する知識を確認しましょう。`,
        questionIds: ['q25', 'q26']
      },
      {
        id: 'stage_final',
        type: 'result',
        text: `【ミッション完了】

あなたの戦略的なアプローチにより、目標の10%コスト削減を達成しました。

さらに、サプライヤーとの関係も強化され、継続的な改善の基盤ができました。`
      }
    ]
  }
];

// シナリオ取得ヘルパー関数
function getScenarioById(id) {
  return SCENARIOS.find(s => s.id === id);
}

function getScenariosByLevel(level) {
  return SCENARIOS.filter(s => s.requiredLevel <= level);
}

function getScenariosByCategory(category) {
  return SCENARIOS.filter(s => s.category === category);
}
