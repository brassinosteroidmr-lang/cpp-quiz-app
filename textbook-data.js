// 自動生成ファイル - parse_textbook.py で生成
// CPP B級 教科書データ（22ユニット）

var TEXTBOOK_DATA = [
  {
    "sectionId": 1,
    "name": "専門領域調達",
    "icon": "🏭",
    "totalMinutes": 51,
    "units": [
      {
        "id": 1,
        "title": "原材料調達",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>原材料は「市況性」という他の調達品にはない特徴がある。価格をバイヤーがコントロールできないため、<strong>リスク管理の知識</strong>が問われる。試験では取引所名や価格変動対策が頻出。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">1-1 原料と材料の違い <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>区分</th>
  <th>定義</th>
  <th>具体例</th>
  </tr>
  <tr>
  <td><strong>原料</strong></td>
  <td>原産地から採取し、<strong>一次加工</strong>したもの</td>
  <td>原油、鉄鉱石、農産品</td>
  </tr>
  <tr>
  <td><strong>材料</strong></td>
  <td>原料を<strong>二次加工</strong>し、汎用用途に適合させたもの</td>
  <td>インゴット、ビレット、鋼板、ペレット</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>原（げん）は一（いち）、材（ざい）は二（に）</strong>」→ 原料＝一次加工、材料＝二次加工</div>
  <h4 class="unit-h4">1-2 原材料調達の4つの関心事 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>関心事</th>
  <th>ポイント</th>
  </tr>
  <tr>
  <td><strong>市況性</strong></td>
  <td>購入価格に変動性がある。バイヤーは価格コントロールできない</td>
  </tr>
  <tr>
  <td><strong>市場を通した取引</strong></td>
  <td>各地に取引所あり。取引価格は経済指標として扱われる</td>
  </tr>
  <tr>
  <td><strong>採掘地・採取地の偏在</strong></td>
  <td>カントリーリスク・地政学リスクの影響を受ける</td>
  </tr>
  <tr>
  <td><strong>サステナビリティ対応</strong></td>
  <td>環境破壊、人権問題（強制労働等）への配慮が必要</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>し・し・さい・サス</strong>」（市況・市場・採掘偏在・サステナビリティ）</div>
  <h4 class="unit-h4">1-3 主要取引所 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>取引所</th>
  <th>略称</th>
  <th>所在地</th>
  <th>主要品目</th>
  </tr>
  <tr>
  <td>ニューヨーク商業取引所</td>
  <td><strong>NYMEX</strong></td>
  <td>ニューヨーク</td>
  <td><strong>原油</strong></td>
  </tr>
  <tr>
  <td>ロンドン金属取引所</td>
  <td><strong>LME</strong></td>
  <td>ロンドン</td>
  <td><strong>貴金属・非鉄金属</strong></td>
  </tr>
  <tr>
  <td>シカゴマーカンタイル取引所</td>
  <td><strong>CME</strong></td>
  <td>シカゴ</td>
  <td><strong>畜産物</strong></td>
  </tr>
  <tr>
  <td>東京商品取引所</td>
  <td>―</td>
  <td>東京</td>
  <td>貴金属・石油・農産物</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>ニューヨークで油（NYMEX=原油）、ロンドンで金属（LME）、シカゴで肉（CME=畜産）</strong>」</div>
  <h4 class="unit-h4">1-4 市況に影響を与える主な要因 <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li>需要地域の景気動向</li><li>当該原材料を使った製品の販売動向</li><li>供給状況（不足・過剰）</li><li>産出国の政策・政情</li><li>生産に関する技術動向</li><li>代替品の登場</li><li>輸送コスト</li><li><strong>外国為替動向</strong>（日本は原料を海外依存 → <strong>二重の変動要素</strong>）</li></ul>
  <h4 class="unit-h4">1-5 スポット価格と長期契約価格 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>種類</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>スポット価格</strong></td>
  <td>一回ごとの取引で成立する市場価格。余剰品の価格設定の場合も</td>
  </tr>
  <tr>
  <td><strong>長期契約価格</strong></td>
  <td>供給者と大口需要者の間で、ある期間にわたって適用される価格</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">1-6 現物市場と先物市場 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>種類</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>現物市場</strong></td>
  <td>現実にある原料を取引する市場の価格</td>
  </tr>
  <tr>
  <td><strong>先物市場</strong></td>
  <td>将来の一定時期に受け渡す条件で売買契約する取引。<strong>価格変動リスク回避策</strong>として活用</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">1-7 価格変動リスクの回避策 <span class="star-badge star-3">★★★</span></h4>
  <ol class="unit-list"><li><strong>先物の適用</strong> → 事前に将来の取引価格を決定</li><li><strong>長期契約</strong> → 一定期間、価格を固定</li><li><strong>利用局面における対応</strong>：<br>- 使用量を減らす・使用をやめる<br>- 材料を変える・代替品に切り替える<br>- 新材料を開発する<br>- 工法を変える・機構を変える</li></ol>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>先（さき）・長（なが）・利（り）</strong>で価格変動回避」→ 先物・長期契約・利用局面対応</div>
  <h4 class="unit-h4">1-8 品質の決定方法 <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li>見本による方法</li><li>銘柄による方法</li><li>規格による方法</li><li>標準品による方法</li><li>見本と説明による方法</li></ul>
  <h4 class="unit-h4">1-9 サステナビリティ対応 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>分野</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>環境</strong></td>
  <td>環境破壊、森林伐採、水資源過剰使用 → <strong>環境デューデリジェンス</strong></td>
  </tr>
  <tr>
  <td><strong>人権</strong></td>
  <td>紛争鉱物、児童労働、強制労働 → <strong>人権デューデリジェンス</strong></td>
  </tr>
  <tr>
  <td><strong>フェアトレード</strong></td>
  <td>発展途上国の原材料を<strong>適正価格で継続的に調達</strong> → 生産者・労働者の生活改善</td>
  </tr>
  <tr>
  <td><strong>リサイクル</strong></td>
  <td><strong>都市鉱山</strong> ＝ 工業製品から資源を取り出し再利用。偏在の問題がない</td>
  </tr>
  </table></div>
  <h3 class="unit-h3">暗記ポイント</h3>
  <ul class="unit-list"><li>取引所3つ（NYMEX/LME/CME）と品目の対応</li><li>価格変動リスク回避策3つ</li><li>サステナビリティの4分野</li></ul>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> ロンドン金属取引所（LME）で主に取引される品目は何か？ → <strong>貴金属・非鉄金属</strong></p>
  <p><strong>Q2.</strong> 原材料の価格変動リスク回避策を3つ挙げよ。 → <strong>①先物の適用、②長期契約、③利用局面における対応</strong></p>
  <p><strong>Q3.</strong> 工業製品から資源を取り出し再利用することを何と呼ぶか？ → <strong>都市鉱山</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 2,
        "title": "設備調達",
        "estimatedMinutes": 10,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>設備調達は高額かつ全社経営に影響する。<strong>ライフサイクルコスト</strong>、<strong>入手形態の比較</strong>、<strong>12ステップの手順</strong>が試験で問われやすい。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">2-1 設備調達とは <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li><strong>設備</strong> ＝ 機械、装置、運搬設備、試験装置・測定機器、金型、治工具、制御機器など</li><li><strong>設備調達</strong> ＝ 設備自体＋設計製作〜試験〜据付〜試運転の調達</li></ul>
  <h4 class="unit-h4">2-2 設備調達の特徴 <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li>全社の経営に影響 → 全関係部門の意見が必要</li><li>調達の関与プロセスが不明確なケースが多い</li><li>サプライヤーが固定化しがち、随意契約も多い</li><li>繰返し性が低く、データ・ノウハウ蓄積がしにくい</li></ul>
  <h4 class="unit-h4">2-3 ライフサイクルコスト <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>コスト区分</th>
  <th>内容</th>
  <th>例</th>
  </tr>
  <tr>
  <td><strong>イニシャルコスト</strong></td>
  <td>使用開始までにかかる費用</td>
  <td>設備本体、据付費用</td>
  </tr>
  <tr>
  <td><strong>ランニングコスト</strong></td>
  <td>使用開始後の費用</td>
  <td>燃料費、用力費、メンテナンス費</td>
  </tr>
  <tr>
  <td><strong>その他費用</strong></td>
  <td>―</td>
  <td>環境負荷低減費用、廃棄費用</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>イ・ラ・そ</strong>のライフサイクル」→ イニシャル・ランニング・その他</div>
  <h4 class="unit-h4">2-4 入手形態の比較 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>項目</th>
  <th>買取（購入）</th>
  <th>リース</th>
  <th>レンタル</th>
  </tr>
  <tr>
  <td>支払</td>
  <td>一括or割賦</td>
  <td>割賦払い</td>
  <td>割賦払い</td>
  </tr>
  <tr>
  <td>使用期間</td>
  <td>長期</td>
  <td>比較的長期</td>
  <td><strong>短期</strong></td>
  </tr>
  <tr>
  <td>対象</td>
  <td>バイヤー指定品</td>
  <td>バイヤー指定品を<strong>リース会社が購入</strong></td>
  <td><strong>レンタル会社の在庫</strong>から選定</td>
  </tr>
  <tr>
  <td>所有権</td>
  <td>バイヤー企業</td>
  <td><strong>リース会社</strong></td>
  <td><strong>レンタル会社</strong></td>
  </tr>
  <tr>
  <td>中途解約</td>
  <td>―</td>
  <td><strong>原則不可</strong></td>
  <td><strong>可能</strong></td>
  </tr>
  <tr>
  <td>契約終了</td>
  <td>―</td>
  <td>返却・再リース・買取</td>
  <td>返却or再レンタル</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：</div>
  <ul class="unit-list"><li>リース ＝ 「リー（理）スの通り解約不可」→ <strong>中途解約原則不可</strong></li><li>レンタル ＝ 「レン（連）絡すれば解約OK」→ <strong>中途解約可能</strong></li></ul>
  <h4 class="unit-h4">2-5 サプライヤー・価格決定方法 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方法</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>随意契約</strong>（一社特命）</td>
  <td>特例措置。原則は複数見積</td>
  </tr>
  <tr>
  <td><strong>指名競争入札</strong></td>
  <td>複数社を指名、最低価格提示者と契約</td>
  </tr>
  <tr>
  <td><strong>相見積契約</strong></td>
  <td>複数の全見積先と価格交渉し契約</td>
  </tr>
  <tr>
  <td><strong>交渉優先権契約</strong></td>
  <td>最低価格提示の数社と交渉 → <strong>CR効果が大きい</strong>（時間はかかる）</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">2-6 設備調達の12ステップ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>ステップ</th>
  <th>ポイント</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>仕様書作成</strong></td>
  <td>ライフサイクルコスト最小化、VE的アプローチ確保</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>サプライヤー候補選定</strong></td>
  <td>過去実績に縛られず広く門戸開放</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>設備仕様説明会</strong></td>
  <td>原則3社以上、公正・公平な運営</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>提案説明会</strong></td>
  <td>サプライヤー候補が個別に提案</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td><strong>見積書取得</strong></td>
  <td>項目統一・細分化、差替え再提出禁止</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td><strong>サプライヤー候補絞込み</strong></td>
  <td>2〜3社に絞込み</td>
  </tr>
  <tr>
  <td>⑦</td>
  <td><strong>コスト分析</strong></td>
  <td>各社見積項目別比較、類似品比較</td>
  </tr>
  <tr>
  <td>⑧</td>
  <td><strong>調達交渉</strong></td>
  <td>―</td>
  </tr>
  <tr>
  <td>⑨</td>
  <td><strong>契約</strong></td>
  <td>基本契約書＋高額は個別契約書</td>
  </tr>
  <tr>
  <td>⑩</td>
  <td><strong>納期管理</strong></td>
  <td>工程表提出、完成図書管理</td>
  </tr>
  <tr>
  <td>⑪</td>
  <td><strong>初期流動管理</strong></td>
  <td>受注者とともに実施</td>
  </tr>
  <tr>
  <td>⑫</td>
  <td><strong>固定資産管理</strong></td>
  <td>20万円以上は固定資産計上</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>し・さ・せ・て・み・さ・コ・ちょう・けい・の・しょ・こ</strong>」 → 仕様書・サプライヤー・説明会・提案・見積・絞込み・コスト・調達交渉・契約・納期・初期流動・固定資産</div>
  <h4 class="unit-h4">2-7 設備仕様書の3種類 <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li><strong>要求仕様書</strong>：発注者 → 受注者に仕様提示</li><li><strong>提案仕様書</strong>：受注者 → 発注者に仕様提案</li><li><strong>確定仕様書</strong>：双方協議のうえ発注者が承認</li></ol>
  <h4 class="unit-h4">2-8 設備能力を表す指標 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>指標</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>タクトタイム</strong></td>
  <td>機械スピード能力。生産能力を示す</td>
  </tr>
  <tr>
  <td><strong>MTBF</strong></td>
  <td>Mean Time Between Failures＝<strong>平均故障間隔</strong>。前回故障から今回故障までの実働時間総和÷故障発生件数</td>
  </tr>
  <tr>
  <td><strong>歩留り</strong></td>
  <td>良品数÷（投入数−他要因不良数）</td>
  </tr>
  <tr>
  <td><strong>工程能力（Cp）</strong></td>
  <td>（規格上限−規格下限）÷6σ。通常 <strong>Cp≧1.33（4σ）</strong> が要求</td>
  </tr>
  </table></div>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 設備の入手形態で、中途解約が原則不可なのはどれか？ → <strong>リース</strong></p>
  <p><strong>Q2.</strong> 設備調達の手順において、原則3社以上のサプライヤーを選定するのはどのステップか？ → <strong>③設備仕様説明会</strong></p>
  <p><strong>Q3.</strong> MTBFとは何の略か？日本語で何と呼ぶか？ → <strong>Mean Time Between Failures＝平均故障間隔</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 3,
        "title": "ソフトウェア調達",
        "estimatedMinutes": 10,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>ソフトウェアは「目に見えない」調達品。価格決定法が<strong>8種類以上</strong>あり、さらに<strong>知的財産権</strong>も問われる。暗記量が多いが試験頻出。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">3-1 ソフトウェア調達の種類 <span class="star-badge star-1">★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>区分</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>パッケージソフト購入</strong></td>
  <td>サプライヤー作成のソフトを購入（使用権の許諾）</td>
  </tr>
  <tr>
  <td><strong>ライセンス導入</strong></td>
  <td>技術使用料を支払い</td>
  </tr>
  <tr>
  <td><strong>SaaS</strong></td>
  <td>開発会社サーバーのアプリをクラウドで利用（Software as a Service）</td>
  </tr>
  <tr>
  <td><strong>開発外部委託</strong></td>
  <td>外部企業に開発を委託（製造委託に相当）</td>
  </tr>
  </table></div>
  <p>購入形態の変遷：光記憶媒体 → ダウンロード → <strong>クラウドサービス（SaaS）</strong></p>
  <h4 class="unit-h4">3-2 開発方法 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方法</th>
  <th>特徴</th>
  </tr>
  <tr>
  <td><strong>ウォーターフォール型</strong></td>
  <td>上流から下流へ順次進行。7工程を順番に実施</td>
  </tr>
  <tr>
  <td><strong>アジャイル型</strong></td>
  <td>機能単位で、要件定義→テストまでを<strong>繰り返す</strong></td>
  </tr>
  </table></div>
  <p><strong>ウォーターフォール型の7工程</strong> <span class="star-badge star-3">★★★</span></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>工程</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①</td>
  <td>要件定義</td>
  <td>ユーザー要求事項の分析、システム化事項のまとめ</td>
  </tr>
  <tr>
  <td>②</td>
  <td>外部設計</td>
  <td>帳票・画面などユーザーインターフェイス設計</td>
  </tr>
  <tr>
  <td>③</td>
  <td>内部設計</td>
  <td>プログラム詳細機能、内部構造の設計</td>
  </tr>
  <tr>
  <td>④</td>
  <td>プログラム設計</td>
  <td>コーディング用の仕様設計</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td>プログラミング</td>
  <td>ソースコード作成</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td>単体テスト</td>
  <td>プログラムの動作確認</td>
  </tr>
  <tr>
  <td>⑦</td>
  <td>運用テスト</td>
  <td>運用マニュアルに従ったシステム利用</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>よ・が・な・プ・プ・た・う</strong>」→ 要件・外部・内部・プログラム設計・プログラミング・単体テスト・運用テスト</div>
  <h4 class="unit-h4">3-3 調達価格の決定法 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方式</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>単金方式</strong></td>
  <td>単金×工数で算出</td>
  </tr>
  <tr>
  <td><strong>類似法</strong></td>
  <td>過去の類似システム実績をもとに推定</td>
  </tr>
  <tr>
  <td><strong>三点見積</strong></td>
  <td><strong>（最小値＋最尤値×4＋最大値）÷6</strong></td>
  </tr>
  <tr>
  <td><strong>トップダウン見積</strong></td>
  <td>全体規模→サブシステムに割り振り</td>
  </tr>
  <tr>
  <td><strong>ボトムアップ見積</strong></td>
  <td>サブシステムごとに推定→積み上げ</td>
  </tr>
  <tr>
  <td><strong>プログラムステップ法</strong></td>
  <td>プログラムの行数で開発費を見積もる</td>
  </tr>
  <tr>
  <td><strong>開発生産性法</strong></td>
  <td>開発費＝単金×（規模÷単位時間当り生産性）</td>
  </tr>
  <tr>
  <td><strong>ファンクションポイント法</strong></td>
  <td>入出力・ファイル数等に重み付け→過去実績で算出</td>
  </tr>
  </table></div>
  <p><strong>モデル化法</strong>：</p>
  <ul class="unit-list"><li><strong>COCOMO法</strong>：開発規模（ステップ数）と難易度で工数・期間を見積もる</li><li><strong>Dotyモデル</strong>：ソースコードのステップに基づく指数関数モデル</li><li><strong>Putnamモデル</strong>：全体コスト→工程・サブシステム単位で見積もる</li></ul>
  <div class="mnemo-box">🎵 🔑 三点見積の公式は暗記必須：<strong>(最小＋最尤×4＋最大)÷6</strong></div>
  <h4 class="unit-h4">3-4 派遣と請負の違い <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>項目</th>
  <th>派遣</th>
  <th>請負</th>
  </tr>
  <tr>
  <td>契約</td>
  <td>労働者派遣契約</td>
  <td>請負契約</td>
  </tr>
  <tr>
  <td>雇用関係</td>
  <td><strong>派遣会社</strong>と労働者</td>
  <td><strong>請負会社</strong>と労働者</td>
  </tr>
  <tr>
  <td>指揮命令</td>
  <td><strong>派遣先</strong>会社が行う</td>
  <td><strong>請負会社</strong>が行う</td>
  </tr>
  <tr>
  <td>成果物責任</td>
  <td>なし</td>
  <td><strong>あり</strong>（仕事の結果に対して報酬）</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>派遣は先（さき）が指揮、請負は元（もと）が指揮</strong>」</div>
  <h4 class="unit-h4">3-5 著作権 <span class="star-badge star-3">★★★</span></h4>
  <p><strong>著作者人格権</strong>（譲渡・相続<strong>不可</strong>）：</p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>権利</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>公表権</strong></td>
  <td>発表するか否かを決める権利</td>
  </tr>
  <tr>
  <td><strong>氏名公表権</strong></td>
  <td>氏名を表示するか否かを決める権利</td>
  </tr>
  <tr>
  <td><strong>同一性保持権</strong></td>
  <td>内容を勝手に変更されない権利</td>
  </tr>
  </table></div>
  <p><strong>著作財産権</strong>（譲渡・相続<strong>可能</strong>）：複製権、上演権・演奏権、翻訳権 等</p>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>人格は譲れない（譲渡不可）、財産は譲れる（譲渡可）</strong>」</div>
  <h4 class="unit-h4">3-6 工業所有権 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>権利</th>
  <th>対象</th>
  <th>保護期間</th>
  </tr>
  <tr>
  <td><strong>特許</strong></td>
  <td>高度な発明（物・方法・生産方法の3タイプ）</td>
  <td><strong>出願から20年</strong></td>
  </tr>
  <tr>
  <td><strong>実用新案</strong></td>
  <td>物品の形状・構造・組合せ（発明ほど高度でない）</td>
  <td><strong>出願から6年</strong></td>
  </tr>
  <tr>
  <td><strong>意匠</strong></td>
  <td>物品の形状・模様・色</td>
  <td><strong>登録から15年</strong></td>
  </tr>
  <tr>
  <td><strong>商標</strong></td>
  <td>商品・サービスを区別するマーク</td>
  <td><strong>登録から10年</strong>（更新可）</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>特（とく）に（20）実（じつ）は6（ろく）でもない、意匠（い）15（いちご）商標（しょう）10（じゅう）</strong>」 → 特許20年、実用新案6年、意匠15年、商標10年</div>
  <p>注意：特許・実用新案は「<strong>出願</strong>から」、意匠・商標は「<strong>登録</strong>から」起算</p>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 三点見積の計算式を答えよ。 → <strong>(最小値＋最尤値×4＋最大値)÷6</strong></p>
  <p><strong>Q2.</strong> 派遣において、労働者に指揮命令を行うのはどの会社か？ → <strong>派遣先会社</strong></p>
  <p><strong>Q3.</strong> 工業所有権のうち、出願から6年の保護期間を持つのは何か？ → <strong>実用新案</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 4,
        "title": "プロジェクト調達",
        "estimatedMinutes": 5,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>プロジェクト調達は「現物それ以外に同じものがない」一品もの。建設・プラント・ITの3領域と新しい契約方式が出題ポイント。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">4-1 プロジェクト調達の3領域 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>領域</th>
  <th>具体例</th>
  </tr>
  <tr>
  <td><strong>建設</strong></td>
  <td>オフィスビル、住宅、工場、施設、道路</td>
  </tr>
  <tr>
  <td><strong>プラント</strong></td>
  <td>石油プラント、水処理プラント、化学工場</td>
  </tr>
  <tr>
  <td><strong>ITシステム</strong></td>
  <td>情報システム、通信システム</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">4-2 建設プロジェクトの新しい契約方式 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方式</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>CM方式</strong> (Construction Management)</td>
  <td>発注者の代行者・補助者である<strong>コンストラクトマネージャー</strong>を置き、技術検討や工程管理等のマネジメント業務を行う</td>
  </tr>
  <tr>
  <td><strong>ECI方式</strong> (Early Contractor Involvement)</td>
  <td>プロジェクトの<strong>設計段階から施工者の技術力を反映</strong> → コスト削減・納期短縮</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：</div>
  <ul class="unit-list"><li>CM ＝ 「<strong>C</strong>onstruction の<strong>M</strong>anager（管理者）を置く」</li><li>ECI ＝ 「<strong>E</strong>arly（早期に）<strong>C</strong>ontractor（施工者）を<strong>I</strong>nvolve（巻き込む）」</li></ul>
  <h4 class="unit-h4">4-3 プラントプロジェクト <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li><strong>EPC</strong> ＝ Engineering（設計）、Procurement（調達）、Construction（建設）</li><li>エンジニアリング会社がE・P・Cを請け負う</li><li><strong>フルターンキー契約</strong> ＝ 設計から調達、建設、試運転、性能保証まで一括請負</li></ul>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>フルターンキー ＝ 鍵を回せばすぐ使える</strong>」→ 全部おまかせ契約</div>
  <h4 class="unit-h4">4-4 プロジェクト調達の核心 <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li><strong>スケジュール・納期管理が最重要</strong></li><li>資機材の遅れ → 据付作業人員や重機の日程調整が発生</li><li>変更はつきもの → 外部要因によるスケジュール調整を想定しておく</li></ul>
  <h4 class="unit-h4">4-5 プロジェクト調達における調達物 <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li><strong>ハードウェア系</strong>：資材・機材（設備・器具・重機）、間接材（事務用品、MRO系）</li><li><strong>サービス系</strong>：業務委託（物流、警備、清掃、システム開発、コンサル）</li><li>MRO ＝ Maintenance, Repair, Operation に用いる副資材</li></ul>
  <h4 class="unit-h4">4-6 プロジェクトにおける契約形態 <span class="star-badge star-1">★</span></h4>
  <p>建設プロジェクトの流れ：施主（企業・組織）→ 建設会社 → 下請（各「→」が調達行為）</p>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 設計段階から施工者の技術力を反映させる建設契約方式は何か？ → <strong>ECI方式（Early Contractor Involvement）</strong></p>
  <p><strong>Q2.</strong> EPCの「P」は何を指すか？ → <strong>Procurement（調達）</strong></p>
  <p><strong>Q3.</strong> プロジェクト調達における最も重要な管理事項は何か？ → <strong>スケジュール・納期管理</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 5,
        "title": "仕入",
        "estimatedMinutes": 5,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>「仕入」は小売業特有の調達。製造業の調達との<strong>決定的な違い</strong>と、仕入形態3種の比較が試験で問われる。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">5-1 仕入の特徴 <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li>調達した商品が<strong>そのまま売り場に並ぶ</strong> → 消費者の審判を受ける</li><li>仕入担当者 ＝ <strong>バイヤー</strong></li><li><strong>マーチャンダイザー</strong> ＝ 商品開発計画、販売商品決定、サプライヤー折衝、取引条件決定に責任</li><li><strong>目利き</strong>と<strong>商品知識</strong>が重要</li></ul>
  <h4 class="unit-h4">5-2 仕入先 <span class="star-badge star-1">★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>仕入先</th>
  <th>メリット</th>
  </tr>
  <tr>
  <td><strong>仲介業者（卸・問屋）</strong></td>
  <td>在庫保有、決済機能、数量調整、情報提供</td>
  </tr>
  <tr>
  <td><strong>メーカー・生産者</strong></td>
  <td>中間マージン省略</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">5-3 仕入方法 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方法</th>
  <th>特徴</th>
  </tr>
  <tr>
  <td><strong>大量仕入</strong></td>
  <td>同一商品を大量に購入。価格低減メリットあるが在庫過多リスク</td>
  </tr>
  <tr>
  <td><strong>当用仕入</strong></td>
  <td>必要の都度発注。売残りリスク低減、累積仕入量割引交渉も可能</td>
  </tr>
  <tr>
  <td><strong>本部集中仕入</strong></td>
  <td>チェーンストア本部が全店舗分を一括購入</td>
  </tr>
  <tr>
  <td><strong>店舗分散仕入</strong></td>
  <td>各店舗で分散して仕入れ。地域状況を反映</td>
  </tr>
  <tr>
  <td><strong>集約仕入</strong></td>
  <td>仕入先を絞り1社あたりの量を増やし単価低減</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">5-4 仕入形態3種 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>形態</th>
  <th>所有権</th>
  <th>小売のリスク</th>
  <th>メーカーのリスク</th>
  </tr>
  <tr>
  <td><strong>①買取仕入</strong></td>
  <td>商品引渡で<strong>小売へ移転</strong></td>
  <td><strong>在庫・売残りリスクあり</strong></td>
  <td>返品リスクなし</td>
  </tr>
  <tr>
  <td><strong>②委託</strong></td>
  <td><strong>メーカー</strong>にある</td>
  <td>売残りリスクなし</td>
  <td><strong>返品リスクあり</strong></td>
  </tr>
  <tr>
  <td><strong>③消化</strong></td>
  <td><strong>メーカー</strong>にある（保管責任も）</td>
  <td>なし</td>
  <td><strong>在庫・返品リスクあり</strong></td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>買（か）い取ったら自分のもの、委（い）託・消（しょう）化はメーカーのもの</strong>」</div>
  <ul class="unit-list"><li>買取 → 所有権が小売に移る → 小売がリスクを負う</li><li>委託・消化 → 所有権はメーカー → メーカーがリスクを負う</li></ul>
  <p>消化仕入の特徴：<strong>売れた分だけ仕入れたことになる</strong></p>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 商品の所有権がメーカーにあり、売れた分だけ仕入れたことになる形態は何か？ → <strong>消化仕入</strong></p>
  <p><strong>Q2.</strong> 商品開発計画から取引条件決定まで責任を持つ担当者を何と呼ぶか？ → <strong>マーチャンダイザー</strong></p>
  <p><strong>Q3.</strong> 買取仕入において、在庫・売残りリスクを負うのはどちらか？ → <strong>小売側</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 6,
        "title": "間接品・サービス調達",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>間接品は「目立たないが合計すると大きな金額」になる領域。<strong>8つの課題</strong>と<strong>管理力強化の4ステップ</strong>、CR施策が出題のポイント。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">6-1 間接品・サービスの分類 <span class="star-badge star-1">★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>区分</th>
  <th>例</th>
  </tr>
  <tr>
  <td><strong>間接品</strong></td>
  <td>事務用品、印刷物、IT関係、販促用品、工場消耗品</td>
  </tr>
  <tr>
  <td><strong>サービス（利用）</strong></td>
  <td>電力・ガス・水、交通、通信、ITサービス</td>
  </tr>
  <tr>
  <td><strong>サービス（業務委託）</strong></td>
  <td>清掃、警備、工事、物流</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">6-2 間接品・サービス調達の8つの課題 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>課題</th>
  </tr>
  <tr>
  <td>①</td>
  <td>管理が<strong>利用部門に任されている</strong></td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>購入状況の把握が難しく</strong>、発生実態が見えない</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>利用者が多岐</strong>にわたっている</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>サプライヤーが固定化</strong>している</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td>購入<strong>価格にばらつき</strong>がある</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td>業務上不要な、<strong>過剰性能</strong>の品目がある</td>
  </tr>
  <tr>
  <td>⑦</td>
  <td><strong>コンプライアンスリスク</strong>がある</td>
  </tr>
  <tr>
  <td>⑧</td>
  <td><strong>CRノウハウ</strong>の社内蓄積が不足している</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>り・こう・り・さ・か・か・コ・CR</strong>」 → 利用部門任せ・購入状況・利用者多岐・サプライヤー固定・価格ばらつき・過剰性能・コンプライアンス・CRノウハウ不足</div>
  <h4 class="unit-h4">6-3 管理力強化の4ステップ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>Step</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>4-1</strong></td>
  <td><strong>CR推進の組織体制確立</strong>（集中的にCRを進める組織を決定、関与率を指標管理）</td>
  </tr>
  <tr>
  <td><strong>4-2</strong></td>
  <td><strong>調達状況の把握</strong>（誰がどこから何を購入しているかのデータ整備）</td>
  </tr>
  <tr>
  <td><strong>4-3</strong></td>
  <td><strong>対象アイテムの絞込み</strong>（<strong>ABC分析</strong>で金額の大きな品目から優先）</td>
  </tr>
  <tr>
  <td><strong>4-4</strong></td>
  <td><strong>施策の検討</strong>（CR施策の立案と実行）</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>組（そ）・状（じょう）・絞（しぼ）・施（し）</strong>」→ 組織・状況把握・絞込み・施策</div>
  <h4 class="unit-h4">6-4 CR施策の体系 <span class="star-badge star-2">★★</span></h4>
  <p><strong>(1) 仕様の見直し・VE</strong></p>
  <ul class="unit-list"><li>①仕様適正化（過剰仕様の見直し）</li><li>②VE</li></ul>
  <p><strong>(2) コスト低減</strong></p>
  <ul class="unit-list"><li>①CRアイデアの探索（展示会・セミナー参加）</li><li>②ベンチマークによるCR（他サプライヤーからの競争見積）</li><li>③コスト分析によるCR（要素別に推計・積み上げ）</li></ul>
  <p><strong>(3) 買い方の工夫</strong></p>
  <ul class="unit-list"><li>①集約（サプライヤーを絞り→ボリュームディスカウント）</li><li>②購入方法の見直し（取引ルート、購入タイミング、数量）</li><li>③<strong>バンドリングとアンバンドリング</strong></li><li>④リバースオークションの活用</li></ul>
  <p><strong>(4) 利用量コントロール</strong></p>
  <ul class="unit-list"><li>①利用サイドの利用量節減（<strong>「買わないことが最大のCR」</strong>）</li><li><strong>ナッジ</strong>の活用 ＝ 「ちょっとしたきっかけを与えて行動を促す」</li></ul>
  <h4 class="unit-h4">6-5 バンドリングとアンバンドリング <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>手法</th>
  <th>内容</th>
  <th>例</th>
  </tr>
  <tr>
  <td><strong>バンドリング</strong></td>
  <td>複数品目をまとめて<strong>1社に発注</strong></td>
  <td>広報資料の制作＋印刷を1社にまとめて発注</td>
  </tr>
  <tr>
  <td><strong>アンバンドリング</strong></td>
  <td>発注単位を<strong>分離して個別発注</strong></td>
  <td>制作と印刷を分離し、それぞれのコストを精査</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">6-6 購入パターン3種 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>パターン</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>都度調達品目</strong></td>
  <td>案件の都度、サプライヤー選定・価格決定</td>
  </tr>
  <tr>
  <td><strong>推奨サプライヤー都度調達</strong></td>
  <td>調達部門推奨のサプライヤーに見積依頼し購入</td>
  </tr>
  <tr>
  <td><strong>継続調達品目（カタログ調達）</strong></td>
  <td>年間契約済、ユーザーは簡易プロセスで購入</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">6-7 間接品調達のIT活用 <span class="star-badge star-1">★</span></h4>
  <p>間接品調達に特化したITシステムの主な機能：</p>
  <ol class="unit-list"><li>多様なプロセスのシンプル化</li><li>集中購買の実現支援</li><li>見積入手・比較の簡易化と情報蓄積</li><li>逆オークションなどの価格決定支援</li><li>カタログ機能</li><li>価格情報などの比較可能なコミュニティー形成</li></ol>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 間接品・サービス調達の管理力強化で、ABC分析を用いるのはどのステップか？ → <strong>4-3 対象アイテムの絞込み</strong></p>
  <p><strong>Q2.</strong> 発注単位を分離して個別発注し、コストを精査する手法は何か？ → <strong>アンバンドリング</strong></p>
  <p><strong>Q3.</strong> 消耗品の在庫場所に購入価格を掲示して節約を促す手法は、行動経済学の何を活用したものか？ → <strong>ナッジ</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 7,
        "title": "業務委託",
        "estimatedMinutes": 5,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>業務委託はサービス調達の一種。サービスの<strong>4つの特性</strong>と<strong>2つのタイプ</strong>、管理のポイントが試験に出る。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">7-1 業務委託とは <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li>企業が自社の業務の一部を外部に委託すること</li><li>「丸投げ」してはならない</li><li>理由：本業集中、コスト低減、外部専門性活用、人件費削減</li></ul>
  <h4 class="unit-h4">7-2 サービスの4つの特性 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>特性</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>無形性</strong></td>
  <td>サービスには形がない</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>同時性</strong></td>
  <td>生産と消費が同時に発生する</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>消滅性</strong></td>
  <td>提供と同時に消滅する</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>変動性</strong></td>
  <td>提供者・時間・場所により品質に変動がある</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>む・ど・しょう・へん</strong>」→ 無形・同時・消滅・変動 または「<strong>サービスは『むどうしょうへん』（無同消変）</strong>」</div>
  <h4 class="unit-h4">7-3 サービスの2タイプ <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>タイプ</th>
  <th>特徴</th>
  <th>例</th>
  </tr>
  <tr>
  <td><strong>プロセス型</strong></td>
  <td>サービス内容やプロセスが<strong>予め定められている</strong></td>
  <td>物流、コールセンター</td>
  </tr>
  <tr>
  <td><strong>プロフェッショナル型</strong></td>
  <td>委託元の要望に応じて提供企業が<strong>内容を設計</strong></td>
  <td>弁護士、コンサルティング</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>プロセス＝手順が決まっている（定型）、プロフェッショナル＝プロの判断（非定型）</strong>」</div>
  <h4 class="unit-h4">7-4 業務委託の契約 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>契約形態</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>請負契約</strong></td>
  <td>委託先が<strong>成果物を完成</strong>させ、委託元は対価を払う</td>
  </tr>
  <tr>
  <td><strong>準委任契約</strong></td>
  <td>法令以外の事務を委任。<strong>成果物に対する責任は問われない</strong></td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>請負は『成果で請け負う』、準委任は『過程のお任せ』</strong>」</div>
  <h4 class="unit-h4">7-5 業務委託の管理 <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li><strong>業務内容の明示</strong>：委託する業務内容を明確に文書化（作業範囲、作業場所、実施期間、成果物、受入基準等）</li><li><strong>定期的な入札</strong>：委託先の固定化防止。ただし<strong>スイッチングコスト</strong>も考慮</li><li><strong>KGI・KPIの設定</strong>：パフォーマンスをモニターできる仕組み</li></ol>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> サービスの4つの特性を全て答えよ。 → <strong>①無形性、②同時性、③消滅性、④変動性</strong></p>
  <p><strong>Q2.</strong> 成果物に対する責任が問われない契約形態は何か？ → <strong>準委任契約</strong></p>
  <p><strong>Q3.</strong> 物流やコールセンターのように、プロセスが予め定められているサービスのタイプは何か？ → <strong>プロセス型</strong></p>
  <hr class="unit-divider">
  <h2 class="unit-h2">暗記チェックリスト</h2>
  <h3 class="unit-h3">レベル1：絶対落とせない（） <span class="star-badge star-3">★★★</span></h3>
  <ul class="unit-list"><li>[ ] 原材料の4つの関心事（市況性・市場取引・偏在・サステナビリティ）</li><li>[ ] 取引所3つ（NYMEX=原油/LME=非鉄金属/CME=畜産物）</li><li>[ ] 価格変動リスク回避策3つ（先物・長期契約・利用局面対応）</li><li>[ ] ライフサイクルコストの3区分（イニシャル・ランニング・その他）</li><li>[ ] 購入・リース・レンタルの比較（所有権・解約可否の違い）</li><li>[ ] 設備調達12ステップの順序</li><li>[ ] 三点見積の計算式（最小＋最尤×4＋最大）÷6</li><li>[ ] ウォーターフォール型の7工程</li><li>[ ] 派遣と請負の指揮命令関係の違い</li><li>[ ] 著作者人格権3つ（譲渡不可）vs 著作財産権（譲渡可）</li><li>[ ] 工業所有権4つと保護期間（特許20/実用新案6/意匠15/商標10）</li><li>[ ] CM方式 vs ECI方式の違い</li><li>[ ] 仕入形態3種（買取・委託・消化）と所有権・リスク</li><li>[ ] 間接品調達の8つの課題</li><li>[ ] 管理力強化の4ステップ（組織→把握→絞込み→施策）</li><li>[ ] サービスの4特性（無形性・同時性・消滅性・変動性）</li></ul>
  <h3 class="unit-h3">レベル2：確実に得点（） <span class="star-badge star-2">★★</span></h3>
  <ul class="unit-list"><li>[ ] 原料 vs 材料の違い（一次加工 vs 二次加工）</li><li>[ ] スポット価格 vs 長期契約価格 vs 先物価格</li><li>[ ] 市況に影響を与える要因（8つ）</li><li>[ ] サステナビリティの4分野（環境・人権・フェアトレード・リサイクル）</li><li>[ ] 設備仕様書3種（要求・提案・確定）</li><li>[ ] 設備能力指標（MTBF、Cp）の意味と計算式</li><li>[ ] サプライヤー・価格決定法4種（随意/指名競争/相見積/交渉優先権）</li><li>[ ] ソフトウェア価格決定法（8種＋モデル化法3種）</li><li>[ ] EPC、フルターンキー契約の意味</li><li>[ ] マーチャンダイザーの役割</li><li>[ ] 仕入方法（大量/当用/集中/分散/集約）</li><li>[ ] バンドリング vs アンバンドリング</li><li>[ ] CR施策4分類（仕様見直し/コスト低減/買い方工夫/利用量コントロール）</li><li>[ ] 購入パターン3種（都度/推奨/継続）</li><li>[ ] 請負契約 vs 準委任契約</li><li>[ ] プロセス型 vs プロフェッショナル型</li></ul>
  <hr class="unit-divider">
  <h2 class="unit-h2">まとめ：専門領域調達の全体像</h2>
  <p>専門領域調達は7つの異なる調達カテゴリーを横断的に学ぶ分野。各領域の<strong>固有の特徴</strong>と<strong>共通する調達の基本原則</strong>を結びつけて理解するのがコツ。</p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>領域</th>
  <th>最大の特徴</th>
  <th>試験最頻出ポイント</th>
  </tr>
  <tr>
  <td>原材料</td>
  <td>市況性（価格コントロール不可）</td>
  <td>取引所、リスク回避策、サステナビリティ</td>
  </tr>
  <tr>
  <td>設備</td>
  <td>高額・ライフサイクルコスト</td>
  <td>入手形態比較、12ステップ、MTBF</td>
  </tr>
  <tr>
  <td>ソフトウェア</td>
  <td>目に見えない</td>
  <td>価格決定法、知的財産権、派遣vs請負</td>
  </tr>
  <tr>
  <td>プロジェクト</td>
  <td>一品もの</td>
  <td>CM/ECI方式、EPC、納期管理</td>
  </tr>
  <tr>
  <td>仕入</td>
  <td>消費者の審判</td>
  <td>仕入形態3種の所有権・リスク</td>
  </tr>
  <tr>
  <td>間接品</td>
  <td>見えにくいコスト</td>
  <td>8課題、4ステップ、バンドリング</td>
  </tr>
  <tr>
  <td>業務委託</td>
  <td>サービス特性</td>
  <td>4特性、2タイプ、契約形態</td>
  </tr>
  </table></div></div>`
      }
    ]
  },
  {
    "sectionId": 2,
    "name": "ビジネスファンダメンタルズ",
    "icon": "💼",
    "totalMinutes": 33,
    "units": [
      {
        "id": 1,
        "title": "リーダーシップと信頼関係",
        "estimatedMinutes": 5,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>調達部門はサプライチェーン全体をコーディネートする役割。バイヤーの「リーダーシップ」と「信頼関係」が、目標調達コスト実現の基盤になる。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">1-1 調達部門のリーダーシップ <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li>調達部門の役割 ＝ サプライチェーン全体が最適となるように<strong>コーディネート</strong>すること</li><li>優秀なバイヤー ＝ 優れた「<strong>コーディネーター</strong>」</li><li>バイヤーの4つの関係者：①サプライヤー、②他部門、③部下、④上司（経営トップ）</li><li>これら関係者の潜在能力をフルに発揮させる ＝ 「<strong>調達部門のリーダーシップ</strong>」</li></ul>
  <h4 class="unit-h4">1-2 信頼関係の醸成 <span class="star-badge star-2">★★</span></h4>
  <p>第一の要素は「<strong>信頼関係</strong>」。そのために「<strong>自己中心的ではない</strong>」ことが重要。</p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>対象</th>
  <th>信頼構築のポイント</th>
  </tr>
  <tr>
  <td><strong>サプライヤー・部下</strong></td>
  <td><strong>公私の別</strong>が厳格。どのサプライヤーにも公平・偏見なく正しく遇する</td>
  </tr>
  <tr>
  <td><strong>経営トップ</strong></td>
  <td>「待ち姿勢」ではなく自ら<strong>経営トップに働きかける</strong>行動を起こす</td>
  </tr>
  <tr>
  <td><strong>他部門</strong></td>
  <td>調達部門でつかんだ<strong>情報を積極的に公開・共有</strong>し、他部門の課題解決に貢献</td>
  </tr>
  </table></div>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 優秀なバイヤーは優れた何であるとされるか？ → <strong>コーディネーター</strong></p>
  <p><strong>Q2.</strong> サプライヤーとの信頼関係で最も重要な要素は何か？ → <strong>公私の別が厳格であること</strong></p>
  <p><strong>Q3.</strong> 経営トップとの信頼関係を築くために重要な姿勢は？ → <strong>「待ち姿勢」ではなく、自ら経営トップに働きかける行動を起こすこと</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 2,
        "title": "コミュニケーション技術",
        "estimatedMinutes": 10,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>バイヤーに必要な3つのスキル（説明力・質問力・傾聴力）、質問の5原則・4基本型、コーチングの6スキル、ファシリテーションの5ステップが頻出。暗記事項が多い最重要ユニット。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">2-1 バイヤーに必要な3つのスキル <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li><strong>説明力</strong>（プレゼンテーション能力）</li><li><strong>質問力</strong>（インタビュー力）</li><li><strong>傾聴力</strong></li></ol>
  <h4 class="unit-h4">2-2 説明力（プレゼンテーション力） <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li>プレゼン ＝ 限られた時間で情報・意思を正確に伝え、<strong>相手に判断・意思決定してもらう</strong>方法</li><li>聴き手の思考プロセスに沿った順序：<strong>結論→理由→結論</strong></li></ul>
  <h4 class="unit-h4">2-3 質問力 <span class="star-badge star-3">★★★</span></h4>
  <p><strong>質問の5原則</strong> <span class="star-badge star-3">★★★</span></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>原則</th>
  </tr>
  <tr>
  <td>1</td>
  <td>質問は<strong>本質を見出す最良の方法</strong></td>
  </tr>
  <tr>
  <td>2</td>
  <td>質問は<strong>情報取得と説得の道具</strong></td>
  </tr>
  <tr>
  <td>3</td>
  <td>質問には<strong>工夫と伏線（準備）</strong>が必要</td>
  </tr>
  <tr>
  <td>4</td>
  <td><strong>聞（聴）き上手が質問上手</strong></td>
  </tr>
  <tr>
  <td>5</td>
  <td>相手の<strong>プライドを傷つけない</strong></td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>本（ほん）・情（じょう）・工（こう）・聴（ちょう）・プラ（イド）</strong>」</div>
  <p><strong>質問の4つの基本型</strong> <span class="star-badge star-3">★★★</span></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>基本型</th>
  <th>内容</th>
  <th>代表的手法</th>
  </tr>
  <tr>
  <td><strong>①構成密度の高い質問と低い質問</strong></td>
  <td>高い＝質問者の意見を含む（Yes/No型）、低い＝情報量の多い回答を得られる</td>
  <td>―</td>
  </tr>
  <tr>
  <td><strong>②アプローチ型質問</strong></td>
  <td>緊張を解き共感を得る</td>
  <td>親密型、ウォーミングアップ型、総括型</td>
  </tr>
  <tr>
  <td><strong>③情報取得型質問</strong></td>
  <td>事実や情報を聞き出す</td>
  <td>事実型、疑問型（5W1H）、多方面型、ディベート型</td>
  </tr>
  <tr>
  <td><strong>④説得型質問</strong></td>
  <td>相手を説得する</td>
  <td>皮剥型、示唆型、誘導型</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>こう・ア・情・説</strong>」→ 構成密度・アプローチ・情報取得・説得</div>
  <p><strong>各手法の詳細</strong> <span class="star-badge star-2">★★</span></p>
  <p><strong>アプローチ型：</strong></p>
  <ul class="unit-list"><li><strong>親密型質問法</strong>：尊敬と親密さで相手をリラックスさせる</li><li><strong>ウォーミングアップ型</strong>：答えやすい質問から始める（小さな要求→大きな要求を断りにくい心理）</li><li><strong>総括型</strong>：仕様書・見積書の全項目について質問</li></ul>
  <p><strong>情報取得型：</strong></p>
  <ul class="unit-list"><li><strong>事実型質問法</strong>：意見を入れず事実だけを質問</li><li><strong>疑問型質問法</strong>：5W1Hを用い「なぜ」を繰り返す（トヨタ：<strong>なぜを5回</strong>で本質を見出す）</li><li><strong>多方面型質問法</strong>：同一事項を組織・人・時を変えて質問し情報を体系化</li><li><strong>ディベート型質問法</strong>：議論を通じて質の高い情報を得る</li></ul>
  <p><strong>説得型：</strong></p>
  <ul class="unit-list"><li><strong>皮剥型質問法</strong>：5W1Hで矛盾点・過剰品質・過剰コストを明らかにし、一緒に解決策を考える</li><li><strong>示唆型質問法</strong>：解決のヒントを提案し「相手に言わせる」</li><li><strong>誘導型質問法</strong>：望む方向へ誘導する質問</li></ul>
  <h4 class="unit-h4">2-4 傾聴力 <span class="star-badge star-2">★★</span></h4>
  <p><strong>傾聴の3つの基本</strong> <span class="star-badge star-2">★★</span></p>
  <ol class="unit-list"><li><strong>熱心に聴く</strong>（アイコンタクト、相槌）</li><li><strong>理解を示す</strong>（相手の発言を言い換えて共感を示す）</li><li><strong>相手の考えを促す質問をする</strong>（発言を掘り下げたり進展させる）</li></ol>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>熱（ねつ）・理（り）・促（そく）</strong>」→ 熱心に聴く・理解を示す・促す質問</div>
  <h4 class="unit-h4">2-5 コーチング <span class="star-badge star-3">★★★</span></h4>
  <ul class="unit-list"><li>コーチング ＝ 「相手のなかにある応答や可能性を引き出すコミュニケーション技術」</li><li><strong>個人</strong>への働きかけ</li></ul>
  <p><strong>コーチングの6スキル</strong> <span class="star-badge star-3">★★★</span></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>スキル</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>アクティブリスニング</strong></td>
  <td>好奇心と共感をもって「聴く」。コーチングの基本</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>認める</strong></td>
  <td>違い・変化・成長に気づき、言葉にして伝える</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>ほぐす</strong></td>
  <td>考えの「かたまり」をほぐし、思考を具体化・明確化</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>質問する</strong></td>
  <td>興味を持ち、考えを明確にする・視点を広げる・行動を促す</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td><strong>フィードバックする</strong></td>
  <td>コーチの主観を素直に伝える</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td><strong>リクエストする</strong></td>
  <td>「〜して欲しい」とストレートに要望</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>ア・み・ほ・し・フィ・リ</strong>」→ アクティブリスニング・認める・ほぐす・質問・フィードバック・リクエスト</div>
  <h4 class="unit-h4">2-6 ファシリテーション <span class="star-badge star-3">★★★</span></h4>
  <ul class="unit-list"><li>ファシリテーション ＝ 「中立的な立場で、グループのプロセスを管理し、チームワークを引き出し、グループの成果を最大化するよう支援すること」</li><li><strong>組織</strong>への働きかけ</li></ul>
  <p><strong>コーチングとの違い</strong> <span class="star-badge star-2">★★</span></p>
  <ul class="unit-list"><li>コーチング ＝ <strong>個人</strong>への働きかけ</li><li>ファシリテーション ＝ <strong>組織</strong>への働きかけ（コンフリクト処理、合意形成など組織特有の問題）</li></ul>
  <p><strong>ファシリテーションの5ステップ</strong> <span class="star-badge star-3">★★★</span></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>ステップ</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>巻き込み</strong></td>
  <td>参加者の参画意識を引き出す。意見を「言いやすい雰囲気」づくり</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>ぶつかり</strong></td>
  <td>意見を衝突させ、論点の本質を鮮明にする</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>意味づけ</strong></td>
  <td>出揃った意見を全員で理解する</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>軸出し</strong></td>
  <td>決めるための<strong>判断基準</strong>を検討する</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td><strong>結び</strong></td>
  <td>成果を確認し、行動に結びつける。自主的行動が重要</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>巻（ま）・ぶつ・意（い）・軸（じく）・結（むす）</strong>」</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 質問の5原則のうち、第4原則は何か？ → <strong>聞（聴）き上手が質問上手</strong></p>
  <p><strong>Q2.</strong> コーチングの6スキルを全て答えよ。 → <strong>①アクティブリスニング、②認める、③ほぐす、④質問する、⑤フィードバックする、⑥リクエストする</strong></p>
  <p><strong>Q3.</strong> ファシリテーションの5ステップのうち、「判断基準を検討する」のは第何ステップか？ → <strong>④軸出し</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 3,
        "title": "問題解決",
        "estimatedMinutes": 10,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>問題解決は調達業務の根幹スキル。<strong>問題の3類型</strong>、<strong>QCストーリー8ステップ</strong>、<strong>要因解析ツール</strong>、<strong>QC7つ道具＋新QC7つ道具</strong>が頻出。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">3-1 問題とは <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li>問題 ＝ 基準や目標と現実との<strong>差異（ギャップ）</strong></li></ul>
  <h4 class="unit-h4">3-2 問題の3類型 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>類型</th>
  <th>内容</th>
  <th>調達での例</th>
  </tr>
  <tr>
  <td><strong>発生型</strong></td>
  <td>基準の逸脱・目標の未達（顕在型）</td>
  <td>納期遅れ、突然の値上げ要求</td>
  </tr>
  <tr>
  <td><strong>探索型</strong></td>
  <td>将来の脅威・機会を認識して発見（潜在型）</td>
  <td>石油高騰で部品価格上昇を推測</td>
  </tr>
  <tr>
  <td><strong>設定型</strong></td>
  <td>あるべき姿を設定したときに生じるギャップ</td>
  <td>グローバル調達のための契約検討</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>発（はつ）・探（たん）・設（せつ）</strong>」→ 発生型・探索型・設定型</div>
  <h4 class="unit-h4">3-3 問題解決に必要なもの <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li>問題解決の<strong>手順</strong>（ステップ、進め方）</li><li><strong>仮説・検証、要因解析</strong>などの問題解決技術</li><li>問題解決する<strong>体制</strong></li><li><strong>調達データ</strong></li><li>調達対象に対する<strong>技術情報</strong>の蓄積</li></ol>
  <h4 class="unit-h4">3-4 QCストーリー8ステップ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>ステップ</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>テーマの選定</strong></td>
  <td>問題を具体的に特定、最重要課題を選ぶ</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>現状の把握と目標の設定</strong></td>
  <td>事実を集め、「何を、いつまでに、どれだけ」を明確に</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>活動計画の作成</strong></td>
  <td>実施事項、日程、役割分担を決める</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>要因の解析</strong></td>
  <td>特性要因図等を活用し、真の要因を見つけ出す</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td><strong>対策の検討と実施</strong></td>
  <td>対策アイデアの具体化と実行</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td><strong>効果の確認</strong></td>
  <td>対策前後の比較、有形・無形の効果を把握</td>
  </tr>
  <tr>
  <td>⑦</td>
  <td><strong>標準化と管理の定着</strong></td>
  <td>効果が元に戻らないよう歯止め。会社の財産として残す</td>
  </tr>
  <tr>
  <td>⑧</td>
  <td><strong>反省と今後の課題</strong></td>
  <td>活動のやり方の反省と次のテーマ</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>テ・現・活・要・対・効・標・反</strong>」→ テーマ・現状・活動・要因・対策・効果・標準化・反省</div>
  <h4 class="unit-h4">3-5 要因解析の推進手順 <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li><strong>要因の洗い出し</strong>（量を重視、ブレインストーミング/ブレインライティング）</li><li><strong>要因の体系化</strong>（上下関係、掘り下げ。網羅性と論理性がポイント）</li><li><strong>影響度の評価</strong></li><li><strong>改善対象要因の特定</strong></li><li><strong>目標達成可能性の評価</strong></li></ol>
  <h4 class="unit-h4">3-6 要因解析に有効なツール <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>ツール</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>R-f分析</strong></td>
  <td>Result-Factor分析。問題を要因にツリー構造に展開</td>
  </tr>
  <tr>
  <td><strong>FTA分析</strong></td>
  <td>Fault Tree Analysis。望ましくない事象の発生要因を上位から下位に論理展開し発生確率を算出</td>
  </tr>
  <tr>
  <td><strong>PM分析</strong></td>
  <td>Phenomena/Physical-Mechanism分析。現象を物理的メカニズムで4M（Machine/Man/Material/Method）から分析。<strong>慢性的な故障・チョコ停・不良に最適</strong></td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>R-fはツリー、FTAは確率、PMは慢性故障</strong>」</div>
  <h4 class="unit-h4">3-7 調達業務の問題解決の特徴 <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li>自社サイドだけでなく、<strong>サプライヤーの立場からも考察</strong>する</li><li>サプライヤーとの接点から<strong>仮説検証しながら技術情報を入手</strong>する</li><li><strong>ファシリテーション機能</strong>を活かし、サプライヤーとのコミュニケーションに気遣う</li></ol>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 問題の3つの類型を全て答えよ。 → <strong>発生型、探索型、設定型</strong></p>
  <p><strong>Q2.</strong> QCストーリーの第④ステップは何か？ → <strong>要因の解析</strong></p>
  <p><strong>Q3.</strong> 慢性的な故障・チョコ停・不良の要因解析に最も適した分析方法は何か？ → <strong>PM分析</strong></p>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 4,
        "title": "QC7つ道具と新QC7つ道具",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜ重要？</h3>
  <p>7つ道具は名前と用途の対応が頻出。QC7つ道具は「数値データ」、新QC7つ道具は「言語データ」の整理に使う、という大きな違いを押さえよう。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">4-1 QC7つ道具 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>道具</th>
  <th>用途</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>パレート図</strong></td>
  <td>重要な不良や問題が何かをつかむ（重点指向）</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>特性要因図</strong></td>
  <td>原因と結果の関係を整理する（「<strong>魚の骨</strong>」とも呼ぶ）</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>グラフ</strong>（管理図含む）</td>
  <td>データの視覚化</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>チェックシート</strong></td>
  <td>データの分類項目別分布を知る</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td><strong>ヒストグラム</strong></td>
  <td>データのバラツキを知る</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td><strong>散布図</strong></td>
  <td>2つの対になったデータの関係を知る</td>
  </tr>
  <tr>
  <td>⑦</td>
  <td><strong>管理図</strong>（層別）</td>
  <td>工程の状態が正常かどうか判断（中心線CL＋管理限界線UCL/LCL）</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>パ・特・グ・チェ・ヒ・散・管</strong>」→ パレート・特性要因・グラフ・チェックシート・ヒストグラム・散布図・管理図</div>
  <p><strong>特性要因図の2分類</strong> <span class="star-badge star-1">★</span></p>
  <ul class="unit-list"><li><strong>原因追求型</strong>：「なぜ」「なぜ」と追求し真の原因をつかむ</li><li><strong>対策追求型</strong>：特性を目的的表現にする</li></ul>
  <p><strong>管理図の3本線</strong> <span class="star-badge star-1">★</span></p>
  <ul class="unit-list"><li><strong>CL</strong>：中心線</li><li><strong>UCL</strong>：上方管理限界線</li><li><strong>LCL</strong>：下方管理限界線</li></ul>
  <h4 class="unit-h4">4-2 新QC7つ道具 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>No.</th>
  <th>道具</th>
  <th>用途</th>
  </tr>
  <tr>
  <td>①</td>
  <td><strong>親和図法</strong></td>
  <td>混沌とした言語データを親和性で統合し、問題を明確化</td>
  </tr>
  <tr>
  <td>②</td>
  <td><strong>連関図法</strong></td>
  <td>複雑な因果関係を矢線で理論的に関連づけ、問題の核心をとらえる</td>
  </tr>
  <tr>
  <td>③</td>
  <td><strong>系統図法</strong></td>
  <td>目的を達成する手段を多段階に展開（目的−手段の関係）</td>
  </tr>
  <tr>
  <td>④</td>
  <td><strong>マトリックス図法</strong></td>
  <td>2つ以上の事柄を組み合わせ、問題解決の着眼点を得る</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td><strong>マトリックス・データ解析法</strong></td>
  <td>新QC7つ道具の中で<strong>唯一の数値データ解析</strong>手法（主成分分析）</td>
  </tr>
  <tr>
  <td>⑥</td>
  <td><strong>PDPC法</strong></td>
  <td>事態の進展に応じた複数シナリオを検討し、望ましい結果に至るプロセスを定める</td>
  </tr>
  <tr>
  <td>⑦</td>
  <td><strong>アロー・ダイヤグラム法</strong></td>
  <td>作業の順序関係を矢線と結合点で表し、最適な日程計画を作成</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 覚え方：「<strong>親（しん）・連（れん）・系（けい）・マト・マトデ・P・アロー</strong>」</div>
  <p><strong>重要ポイント</strong>：</p>
  <ul class="unit-list"><li>新QC7つ道具は<strong>言語データ</strong>を整理する手法（例外：マトリックス・データ解析法のみ数値データ）</li><li>新QC7つ道具は<strong>管理サイクルの計画段階</strong>で活用</li></ul>
  <h4 class="unit-h4">4-3 QCの生い立ち <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>年代</th>
  <th>出来事</th>
  </tr>
  <tr>
  <td>1950年</td>
  <td><strong>統計的品質管理</strong>（デミング氏）。3σ管理（1000分の3の発生確率）</td>
  </tr>
  <tr>
  <td>1960年代後半</td>
  <td><strong>ZD運動</strong>（Zero Defects）</td>
  </tr>
  <tr>
  <td>1970年代</td>
  <td><strong>TQC活動</strong>（Total Quality Control：全社的品質管理活動）</td>
  </tr>
  <tr>
  <td>1990年代</td>
  <td>PPM管理（1PPM＝100万分の1）</td>
  </tr>
  <tr>
  <td>1995年頃</td>
  <td><strong>シックスシグマ管理</strong>（GE）。6σ＝100万分の3.4</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">4-4 QC的ものの見方・考え方 <span class="star-badge star-1">★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>大分類</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>品質保証の考え方</strong></td>
  <td>企業の社会的責任を果たす、顧客の立場に立つ</td>
  </tr>
  <tr>
  <td><strong>管理の考え方</strong></td>
  <td>PDCAを廻す、事実（現場・現物・現実）に基づく</td>
  </tr>
  <tr>
  <td><strong>改善の考え方</strong></td>
  <td><strong>重点指向（パレートの法則＝80:20の法則）</strong>、5W1H、標準化</td>
  </tr>
  </table></div>
  <div class="mnemo-box">🎵 🔑 パレートの法則：全体の<strong>2割が8割を占める</strong></div>
  <h4 class="unit-h4">4-5 SQC（統計的品質管理） <span class="star-badge star-1">★</span></h4>
  <ul class="unit-list"><li>SQC ＝ Statistical Quality Control</li><li>統計的方法を採用した合理的・経済的な品質管理</li><li>QC7つ道具・新QC7つ道具を活用</li></ul>
  <h3 class="unit-h3">確認クイズ</h3>
  <p><strong>Q1.</strong> 新QC7つ道具のうち、唯一数値データを解析する手法は何か？ → <strong>マトリックス・データ解析法</strong></p>
  <p><strong>Q2.</strong> 特性要因図の別名は何か？ → <strong>魚の骨</strong></p>
  <p><strong>Q3.</strong> パレートの法則（80:20の法則）とはどのようなものか？ → <strong>全体の2割が全体の8割を占めるという経験則</strong></p>
  <hr class="unit-divider">
  <h2 class="unit-h2">暗記チェックリスト</h2>
  <h3 class="unit-h3">レベル1：絶対落とせない（） <span class="star-badge star-3">★★★</span></h3>
  <ul class="unit-list"><li>[ ] 質問の5原則</li><li>[ ] 質問の4つの基本型（構成密度・アプローチ・情報取得・説得）</li><li>[ ] コーチングの6スキル</li><li>[ ] コーチング（個人） vs ファシリテーション（組織）の違い</li><li>[ ] ファシリテーションの5ステップ（巻き込み→ぶつかり→意味づけ→軸出し→結び）</li><li>[ ] 問題の3類型（発生型・探索型・設定型）</li><li>[ ] QCストーリー8ステップ</li><li>[ ] QC7つ道具（7つ全て）と各道具の用途</li><li>[ ] 新QC7つ道具（7つ全て）と各道具の用途</li><li>[ ] マトリックス・データ解析法＝唯一の数値データ解析</li></ul>
  <h3 class="unit-h3">レベル2：確実に得点（） <span class="star-badge star-2">★★</span></h3>
  <ul class="unit-list"><li>[ ] バイヤーに必要な3スキル（説明力・質問力・傾聴力）</li><li>[ ] プレゼンの順序（結論→理由→結論）</li><li>[ ] 傾聴の3基本（熱心に聴く・理解を示す・促す質問）</li><li>[ ] 各質問手法の詳細（疑問型＝5W1H、なぜ5回 等）</li><li>[ ] 要因解析の推進手順（5ステップ）</li><li>[ ] 要因解析ツール（R-f分析・FTA・PM分析）</li><li>[ ] QCの生い立ち（デミング→ZD→TQC→PPM→シックスシグマ）</li><li>[ ] パレートの法則（80:20）</li><li>[ ] 特性要因図の2分類（原因追求型・対策追求型）</li><li>[ ] 管理図の3本線（CL/UCL/LCL）</li><li>[ ] 調達業務の問題解決の3つの特徴</li></ul>
  <hr class="unit-divider">
  <h2 class="unit-h2">まとめ：ビジネスファンダメンタルズの全体像</h2>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>テーマ</th>
  <th>核心</th>
  <th>試験最頻出ポイント</th>
  </tr>
  <tr>
  <td>コミュニケーション</td>
  <td>信頼関係＋3つのスキル</td>
  <td>質問の5原則・4基本型</td>
  </tr>
  <tr>
  <td>コーチング</td>
  <td>個人の可能性を引き出す</td>
  <td>6スキル</td>
  </tr>
  <tr>
  <td>ファシリテーション</td>
  <td>組織の成果を最大化</td>
  <td>5ステップ</td>
  </tr>
  <tr>
  <td>問題解決</td>
  <td>ギャップの認識と解消</td>
  <td>3類型、QCストーリー8ステップ</td>
  </tr>
  <tr>
  <td>QC7つ道具</td>
  <td>数値データの分析</td>
  <td>7つの名前と用途</td>
  </tr>
  <tr>
  <td>新QC7つ道具</td>
  <td>言語データの整理</td>
  <td>7つの名前と用途、唯一の数値＝マトリックスデータ解析</td>
  </tr>
  </table></div></div>`
      }
    ]
  },
  {
    "sectionId": 3,
    "name": "CRのための関連知識",
    "icon": "⚙️",
    "totalMinutes": 48,
    "units": [
      {
        "id": 1,
        "title": "生産方式（TPS・セル生産）",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜバイヤーに生産方式の知識が必要？</h3>
  <p>製造原価に占める外部支出コストは年々高まっている。バイヤーがサプライヤーの加工方式や生産システムを理解することで、建設的な交渉やCR（コストリダクション）が可能になる。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">製造業の分類 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>分類</th>
  <th>特徴</th>
  <th>生産方式</th>
  </tr>
  <tr>
  <td>プロセス型</td>
  <td>地下資源・農水産物を精製加工（装置産業）</td>
  <td>連続投入生産／ロット別投入生産</td>
  </tr>
  <tr>
  <td>加工・組立型</td>
  <td>材料・部品などの工業製品が素材</td>
  <td>ライン生産／セル生産</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">生産管理の分類 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>分類軸</th>
  <th>方式</th>
  <th>ポイント</th>
  </tr>
  <tr>
  <td>手配方法</td>
  <td><strong>製番方式</strong>（製品中心）／<strong>MRP方式</strong>（部品中心）</td>
  <td>製番＝注文ベース、MRP＝計画ベース</td>
  </tr>
  <tr>
  <td>進捗管理</td>
  <td><strong>製番・ロット管理</strong>／<strong>日別管理</strong></td>
  <td>日別管理は総量で管理</td>
  </tr>
  <tr>
  <td>作業指示</td>
  <td><strong>プル方式</strong>（使った分だけ補給）／<strong>プッシュ方式</strong>（計画に基づき生産）</td>
  <td>かんばん＝プル方式</td>
  </tr>
  <tr>
  <td>生産時期</td>
  <td><strong>見込み生産</strong>（需要予測）／<strong>受注生産</strong>（受注後に生産開始）</td>
  <td>—</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">トヨタ生産方式（TPS） <span class="star-badge star-3">★★★</span></h4>
  <p>TPSの中核は <strong>JIT（ジャストインタイム）生産方式</strong>。</p>
  <p><strong>JIT3つの特徴：</strong></p>
  <ol class="unit-list"><li><strong>徹底したムダの排除</strong></li><li><strong>かんばんの運用</strong>（JIT実現の生産管理手法、札で生産指示・在庫規制）</li><li><strong>生産指示の仕組み構築</strong>（かんばんと現物の連鎖）</li></ol>
  <p><strong>TPSの考え方：</strong> 大量生産方式の「標準・効率・安定」と手作り生産方式の「熟練・応用・融通」を高度に融合。</p>
  <p><strong>TPSの3大特徴：</strong></p>
  <ol class="unit-list"><li><strong>トレードオフの克服</strong> — 生産性・品質・リードタイムの同時実現</li><li><strong>フレキシビリティ</strong> — ミックス、変動、モデルチェンジに柔軟対応</li><li><strong>組織学習</strong> — 日常業務に改善メカニズムを組み込む</li></ol>
  <p><strong>改善サイクル4ステップ：</strong> ムダの顕在化 → 問題解決・改善 → 改善の定着化 → 上流へのフィードバック</p>
  <div class="memo-box"><span class="box-icon">📝</span><strong>リーン生産方式</strong>：TPSから生まれた欧米流。在庫・時間・スペース・労働力のムダをゼロにし、バリューチェーン全体で継続改善する方式。</div>
  <h4 class="unit-h4">セル生産方式 <span class="star-badge star-3">★★★</span></h4>
  <p>コンベヤー方式の課題（単純分業・編成ロス・設備投資増大）を解消するために誕生。</p>
  <p><strong>セル生産3つの特徴：</strong></p>
  <ol class="unit-list"><li><strong>コンパクトなレイアウト</strong>（U字型、L字型、二の字型、フラワー型）</li><li><strong>多能工による少人数配置</strong>（初工程〜最終工程を1人で完結）</li><li><strong>柔軟な作業分担</strong>（臨機応変に担当工程を変更）</li></ol>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>比較項目</th>
  <th>セル生産</th>
  <th>コンベヤー生産</th>
  </tr>
  <tr>
  <td>作業者技術</td>
  <td>多能工</td>
  <td>単能工</td>
  </tr>
  <tr>
  <td>仕掛在庫</td>
  <td>小</td>
  <td>大</td>
  </tr>
  <tr>
  <td>適性ロット</td>
  <td>多品種少量</td>
  <td>少品種多量</td>
  </tr>
  <tr>
  <td>ライン構築</td>
  <td>速い</td>
  <td>遅い</td>
  </tr>
  </table></div>
  <p><strong>セル生産3方式：</strong></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方式</th>
  <th>特徴</th>
  <th>強み</th>
  <th>弱み</th>
  </tr>
  <tr>
  <td><strong>1人方式</strong>（ベンチ生産）</td>
  <td>1人で全工程完結</td>
  <td>編成効率◎、フレキシブル◎</td>
  <td>作業習熟に時間</td>
  </tr>
  <tr>
  <td><strong>巡回方式</strong>（兎追い）</td>
  <td>複数人が各自全工程を巡回</td>
  <td>編成効率◎、段取り○</td>
  <td>能力差で詰まる</td>
  </tr>
  <tr>
  <td><strong>分割方式</strong>（部分巡回）</td>
  <td>工程の一部を受持ち巡回</td>
  <td>教育しやすい</td>
  <td>編成ロス発生</td>
  </tr>
  </table></div>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>ジャンプかんばん</strong>」→ <strong>J</strong>IT（ジャストインタイム）+ <strong>かんばん</strong> = TPS の中核</div>
  <p><strong>試験頻出：</strong> セル生産方式は「多品種少量生産向き」「多能工が前提」「編成効率100%（1人完結の場合）」</p>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>JIT生産方式を守る道具として使われる生産管理手法は何か？</li><li>セル生産方式のうち、1人で初工程から最終検査まで完結させる方式の名称は？</li><li>TPSにおいて「プル方式」とはどのような作業指示方式か？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.かんばん方式 2.1人方式（ベンチ生産） 3.前の工程が使用した分だけ補給する方式</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 2,
        "title": "IE（インダストリアルエンジニアリング）",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：IEとは</h3>
  <p>IE（Industrial Engineering）は、人・材料・設備・エネルギーの最適な総合システムを実現・設計するための技術。「ムリ・ムダ・ムラ」を改善する現状分析技術と改善発想技術の2本柱で構成される。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">IEの2つの側面 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>側面</th>
  <th>内容</th>
  <th>活用場面</th>
  </tr>
  <tr>
  <td><strong>方法工学</strong>（メソッドエンジニアリング）</td>
  <td>作業方法の調査分析→最大効率の工程設計</td>
  <td>新製品の作業設計、レイアウト変更</td>
  </tr>
  <tr>
  <td><strong>作業測定</strong>（ワークメジャメント）</td>
  <td>標準作業・標準時間の設定→工程改善</td>
  <td>目標設定、実施効率の測定</td>
  </tr>
  </table></div>
  <div class="formula-box">📐 <strong>IEの一般的活用：</strong> 方法工学で設計した標準作業をもとに標準時間を設定 → 実施効率（標準時間÷実作業時間）を測定 → パフォーマンスロスを改善</div>
  <h4 class="unit-h4">現状分析技術 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>手法</th>
  <th>目的</th>
  <th>ポイント</th>
  </tr>
  <tr>
  <td><strong>タイムスタディー</strong></td>
  <td>要素作業単位で時間を測定・評価</td>
  <td>分割は2〜3秒が限界、ビデオ撮影が便利</td>
  </tr>
  <tr>
  <td><strong>工程分析</strong></td>
  <td>加工→検査→運搬→停滞の流れを分析</td>
  <td>フロープロセスチャート使用</td>
  </tr>
  <tr>
  <td><strong>稼働分析</strong></td>
  <td>生産的/非生産的内容の時間比率を把握</td>
  <td>ワークサンプリングが一般的</td>
  </tr>
  <tr>
  <td><strong>ライン作業分析</strong></td>
  <td>ラインバランスの改善</td>
  <td>ピッチダイアグラム使用</td>
  </tr>
  <tr>
  <td><strong>連合作業分析</strong></td>
  <td>人-機械、人-人の連合作業を最適化</td>
  <td>M-Mチャート使用</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">タイムスタディーのワークユニット6段階 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>レベル</th>
  <th>名称</th>
  <th>説明</th>
  </tr>
  <tr>
  <td>1</td>
  <td>最終製品・業務</td>
  <td>各工程の集積からなる最終アウトプット</td>
  </tr>
  <tr>
  <td>2</td>
  <td>中間製品・大工程</td>
  <td>中間段階の完成状態</td>
  </tr>
  <tr>
  <td>3</td>
  <td>課題・工程</td>
  <td>決まった作業域での1つのまとまった作業</td>
  </tr>
  <tr>
  <td>4</td>
  <td>単位作業</td>
  <td>作業として完結する最小単位</td>
  </tr>
  <tr>
  <td>5</td>
  <td>要素作業</td>
  <td>ストップウォッチで測定できる最小単位</td>
  </tr>
  <tr>
  <td>6</td>
  <td>動作</td>
  <td>作業の最も小さな単位区分</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">工程図記号（JIS Z 8206） <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>工程分類</th>
  <th>記号名称</th>
  <th>意味</th>
  </tr>
  <tr>
  <td>加工</td>
  <td>○</td>
  <td>材料に変化を与える</td>
  </tr>
  <tr>
  <td>運搬</td>
  <td>→</td>
  <td>位置に変化を与える</td>
  </tr>
  <tr>
  <td>数量検査</td>
  <td>□</td>
  <td>量・個数を基準と比較</td>
  </tr>
  <tr>
  <td>品質検査</td>
  <td>◇</td>
  <td>品質特性を試験・比較</td>
  </tr>
  <tr>
  <td>滞留</td>
  <td>D</td>
  <td>材料が滞っている状態</td>
  </tr>
  <tr>
  <td>貯蔵</td>
  <td>▽</td>
  <td>計画により貯えている</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">ワークサンプリング手順 <span class="star-badge star-3">★★★</span></h4>
  <p>①目的の明確化 → ②観測項目の分類と定義 → ③観測期間・回数・時刻・巡回経路の決定 → ④観測の実施 → ⑤結果のまとめ</p>
  <p><strong>重要ポイント：</strong> 「かたより」を防ぐため、観測時刻は作業サイクルと合わないように設定し、巡回経路は事前に複数設定して都度選択する。</p>
  <h4 class="unit-h4">ライン作業分析 <span class="star-badge star-3">★★★</span></h4>
  <p><strong>目的：</strong> サイクルタイムの短縮とバランスロスの削減</p>
  <div class="formula-box">📐 <strong>目標サイクルタイム ＝ ライン稼働時間 ÷ 生産必要量 ÷ 良品率</strong></div>
  <p><strong>改善3アプローチ：</strong></p>
  <ol class="unit-list"><li>作業改善による正味作業時間短縮</li><li>目標サイクルタイムの延長（不稼働時間削減、良品率向上）</li><li>作業分担見直しによる編成効率向上</li></ol>
  <h4 class="unit-h4">連合作業分析の3つの視点 <span class="star-badge star-3">★★★</span></h4>
  <ol class="unit-list"><li>連合作業を<strong>単独</strong>にできないか</li><li>単独作業を<strong>連合作業</strong>にして時間短縮できないか</li><li>作業分担を変えて「<strong>手待ち</strong>」「<strong>停止</strong>」を減らせないか</li></ol>
  <h4 class="unit-h4">改善発想技術 <span class="star-badge star-3">★★★</span></h4>
  <p><strong>ECRS の法則（効果が大きい順）：</strong></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>順序</th>
  <th>記号</th>
  <th>内容</th>
  <th>効果</th>
  </tr>
  <tr>
  <td>1</td>
  <td><strong>E</strong>：Eliminate</td>
  <td>排除（作業をなくす）</td>
  <td>最大 → 最初に検討</td>
  </tr>
  <tr>
  <td>2</td>
  <td><strong>C</strong>：Combine</td>
  <td>統合と分離（再編成）</td>
  <td>—</td>
  </tr>
  <tr>
  <td>3</td>
  <td><strong>R</strong>：Rearrange</td>
  <td>入替と代替（順序変更）</td>
  <td>—</td>
  </tr>
  <tr>
  <td>4</td>
  <td><strong>S</strong>：Simplify</td>
  <td>簡素化（簡単な方法）</td>
  <td>最後に検討</td>
  </tr>
  </table></div>
  <p><strong>動作経済の4原則：</strong></p>
  <ol class="unit-list"><li>動作の数を少なくする</li><li>両手は同時に使う</li><li>移動距離を短縮する</li><li>動作を楽にする</li></ol>
  <p><strong>標準時間設定法（PTS法）：</strong> 基本動作に分解し、あらかじめ決められた時間値から作業時間を求める。</p>
  <ul class="unit-list"><li><strong>MTM分析法</strong>：基本動作10種（Reach, Move, Turn, Apply Pressure, Grasp, Release, Position, Disengage, Eye time, Body motion）</li><li><strong>WF分析法</strong>：身体部位の動作距離から時間設定</li></ul>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>いい加減にしろECRS</strong>」→ <strong>E</strong>liminate（排除）→ <strong>C</strong>ombine（統合）→ <strong>R</strong>earrange（入替）→ <strong>S</strong>implify（簡素化）＝効果大→小の順</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>タコ稼ぎラーメン</strong>」→ <strong>タ</strong>イムスタディー、<strong>コ</strong>程分析、<strong>稼</strong>働分析、<strong>ラ</strong>イン作業分析、連（<strong>レン</strong>）合作業分析 ＝ 5つの現状分析技術</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>ECRSの法則で最初に検討すべきは何か？</li><li>ワークサンプリングで「かたより」を防ぐために必要な2つの工夫は？</li><li>目標サイクルタイムの計算式は？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.E（Eliminate：排除＝作業そのものをなくせないか） 2.①観測時刻を作業サイクルと合わないように設定、②巡回経路を事前に複数設定し都度選択 3.ライン稼働時間÷生産必要量÷良品率</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 3,
        "title": "設備保全",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：なぜバイヤーに設備保全の知識？</h3>
  <p>設備の稼働状況が製品の生産性・品質・歩留まりに直結し、調達品のコストに反映される。サプライヤーの設備状態や稼働率を把握し、ロスの多い工場には保全体制の改善を指導することがバイヤーの役割。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">設備保全の分類体系 <span class="star-badge star-3">★★★</span></h4>
  <p>\`\`<code> 設備保全 ├── 予防保全（PM：Preventive Maintenance）── 故障をくい止める │   ├── 定期保全 │   │   ├── 時間基準保全（TBM）：時間パラメータで周期設定→無条件交換 │   │   └── オーバーホール型保全（IR）：定期分解点検→不具合発見時に修理 │   └── 予知保全 │       └── 状態基準保全（CBM）：パラメータ連続測定→劣化基準到達で修理 ├── 改良保全（CM）── 故障をさせない（部品改良・性能向上） ├── MP活動 ── 故障をさせない（設備導入時にMP情報を反映） └── 事後保全（BM：Break down Maintenance）── 故障を早く復元 </code>\`\`</p>
  <h4 class="unit-h4">各保全方式の適用条件 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>方式</th>
  <th>適用条件</th>
  </tr>
  <tr>
  <td><strong>TBM</strong>（時間基準）</td>
  <td>①劣化周期の傾向把握しやすい、②部品安価・交換容易</td>
  </tr>
  <tr>
  <td><strong>IR</strong>（オーバーホール）</td>
  <td>①劣化周期のバラツキ大、②部品が高価</td>
  </tr>
  <tr>
  <td><strong>CBM</strong>（状態基準）</td>
  <td>①周期が定まらない、②交換部品高価、③故障時の影響大</td>
  </tr>
  <tr>
  <td><strong>CM</strong>（改良保全）</td>
  <td>①バラツキ大、②修理費高い、③寿命短い・故障頻度多い、④修理時間長い、⑤点検しにくい</td>
  </tr>
  <tr>
  <td><strong>BM</strong>（事後保全）</td>
  <td>①影響・損失小、②予備品常備、③交換時間短い</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">6大ロスと設備総合効率 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>ロス分類</th>
  <th>6大ロス</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>停止ロス</strong></td>
  <td>①故障ロス</td>
  <td>機能停止型（突発）・機能低下型</td>
  </tr>
  <tr>
  <td></td>
  <td>②段取り調整ロス</td>
  <td>品種切替時のロス</td>
  </tr>
  <tr>
  <td><strong>速度ロス</strong></td>
  <td>③空転・小停止ロス</td>
  <td>チョコ停（一時的トラブル）</td>
  </tr>
  <tr>
  <td></td>
  <td>④速度低下ロス</td>
  <td>設計スピードとの差</td>
  </tr>
  <tr>
  <td><strong>不良ロス</strong></td>
  <td>⑤工程不良ロス</td>
  <td>不良品・手直し</td>
  </tr>
  <tr>
  <td></td>
  <td>⑥立上り歩留まりロス</td>
  <td>生産開始から安定までの物量ロス</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">設備総合効率の計算 <span class="star-badge star-3">★★★</span></h4>
  <div class="formula-box">📐 <strong>設備総合効率 ＝ 時間稼働率 × 性能稼働率 × 良品率</strong></div>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>指標</th>
  <th>計算式</th>
  </tr>
  <tr>
  <td><strong>時間稼働率</strong></td>
  <td>（負荷時間 − 停止時間）÷ 負荷時間</td>
  </tr>
  <tr>
  <td><strong>性能稼働率</strong></td>
  <td>速度稼働率 × 正味稼働率</td>
  </tr>
  <tr>
  <td>速度稼働率</td>
  <td>基準サイクルタイム ÷ 実際サイクルタイム</td>
  </tr>
  <tr>
  <td>正味稼働率</td>
  <td>出来高 × 実際サイクルタイム ÷（負荷時間 − 停止時間）</td>
  </tr>
  <tr>
  <td><strong>良品率</strong></td>
  <td>（加工数量 − 不良数量）÷ 加工数量</td>
  </tr>
  </table></div>
  <p><strong>判定基準：</strong></p>
  <ul class="unit-list"><li><strong>85%以上</strong> → 設備状態良好</li><li><strong>50〜60%</strong> → 保全が適切に行われていない</li><li><strong>85%未満</strong> → 改善の余地あり</li></ul>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>故障（こしょう）だ！段取り（だんどり）、チョコ停（てい）、速度（そくど）低下、不良（ふりょう）、歩留まり（ぶどまり）</strong>」→ 6大ロスを順番に</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>時（じ）は性（せい）よ（良）く</strong>」→ 設備総合効率 ＝ <strong>時</strong>間稼働率 × <strong>性</strong>能稼働率 × <strong>良</strong>品率</div>
  <div class="formula-box">📐 <strong>試験頻出：</strong> TBM＝時間基準で無条件交換、CBM＝状態基準で劣化監視、BM＝故障後に修理</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>設備総合効率の計算式は？</li><li>「チョコ停」はどのロス分類に属するか？</li><li>状態基準保全（CBM）が適用される条件を3つ挙げよ。</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.時間稼働率×性能稼働率×良品率 2.速度ロス（空転・小停止ロス） 3.①劣化周期が一定でない、②交換部品が高価、③故障すると生産・品質に多大な影響</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 4,
        "title": "IPS（理想目標管理システム）",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：IPSとは</h3>
  <p>IPS（Ideal Production System）は、1970年代にTDK社で開発されたCR手法。技術的判断から究極のCR目標（理想目標原価）を設定し、全部門一丸で改善する方法。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">「右からの発想」 <span class="star-badge star-3">★★★</span></h4>
  <p>IPSの核心は、現状からの積み上げ（「左からの発想」）ではなく、<strong>理想の姿から物事を発想する</strong>こと。</p>
  <p><strong>4つの概念：</strong></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>概念</th>
  <th>定義</th>
  </tr>
  <tr>
  <td>①<strong>理念</strong></td>
  <td>究極の「神様の工場」：稼働率100%、良品率100%、人員0、速度∞</td>
  </tr>
  <tr>
  <td>②<strong>理想</strong></td>
  <td>制約条件を考慮した将来のあるべき姿</td>
  </tr>
  <tr>
  <td>③<strong>経営戦略コスト</strong></td>
  <td>戦略売価 − 利益目標</td>
  </tr>
  <tr>
  <td>④<strong>理想目標原価</strong></td>
  <td>技術的判断による工場のあるべき姿のコスト</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">3つの制約条件 <span class="star-badge star-3">★★★</span></h4>
  <p>理念に届かない理由が「制約条件」。IPSでは3つまで許容。</p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>制約</th>
  <th>定義</th>
  <th>例</th>
  </tr>
  <tr>
  <td><strong>技術の制約</strong></td>
  <td>世の中でまだ開発されていない技術水準</td>
  <td>市場最高回転数4500rpmが限界</td>
  </tr>
  <tr>
  <td><strong>資金の制約・投資機会の制約</strong></td>
  <td>現状の投資条件の中での最高額投資</td>
  <td>4500rpmモーターが高価で投資不可</td>
  </tr>
  <tr>
  <td><strong>方針の制約</strong></td>
  <td>コンプライアンス、顧客主義、トップ方針など</td>
  <td>競合品を使わない方針</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">IPS 18の基本手順（主要ステップ） <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li>対象品種と範囲を選定</li><li><strong>経営戦略コスト</strong>を設定（戦略売価 − 利益目標）</li><li>現状コスト指標の把握・分析</li><li>技術的判断による理想目標設定</li></ol>
  <p>5-6. 理想直接コスト → 理想トータルコスト設定 7-8. テーマ展開 → 理想コスト試算</p>
  <ol class="unit-list"><li><strong>経営戦略コスト ≧ 理想コスト</strong> を確認（NGなら工法/製品変更して繰返し）</li><li>理想コスト決定</li></ol>
  <p>11-18. 年度別目標展開 → 月単位の改善実行</p>
  <h4 class="unit-h4">IPSのコスト3段階 <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li><strong>TC</strong>（Total Cost）：直接費＋間接費＋販管費＋営業外収支</li><li><strong>FC</strong>（Factory Cost）：直接費＋間接費</li><li><strong>DC</strong>（Direct Cost）：直接材料費＋直接労務費＋直接経費</li></ul>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>右から理（り）理（り）経（けい）理（り）</strong>」→ 右からの発想で <strong>理</strong>念 → <strong>理</strong>想 → <strong>経</strong>営戦略コスト → <strong>理</strong>想目標原価</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>技（ぎ）金（きん）方（ほう）</strong>」→ <strong>技</strong>術の制約 → <strong>金</strong>（資金）の制約 → <strong>方</strong>針の制約 ＝ IPS3つの制約条件</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>IPSにおける「理念」とはどのような状態か？</li><li>経営戦略コストの計算式は？</li><li>IPSで許容される制約条件は最大いくつか？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.稼働率100%、良品率100%、人員0、速度無限大の「神様の工場」 2.戦略売価−利益目標 3.3つ（技術・資金/投資機会・方針）</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 5,
        "title": "物流／3PL",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：調達と物流の関係</h3>
  <p>調達物流は、調達LT・調達価格・納入品質に大きく影響する。物流コストはサプライヤーの仕入れ価格に上乗せされていることが多く、バイヤーは物流構造も理解する必要がある。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">物流を構成する6つの活動 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>活動</th>
  <th>機能</th>
  </tr>
  <tr>
  <td><strong>輸送</strong></td>
  <td>生産と消費の場所のギャップを埋める</td>
  </tr>
  <tr>
  <td><strong>保管</strong></td>
  <td>生産と消費の時間のギャップを埋め、価値を維持</td>
  </tr>
  <tr>
  <td><strong>荷役</strong></td>
  <td>短距離移動、ピッキング、仕分け</td>
  </tr>
  <tr>
  <td><strong>包装</strong></td>
  <td>物品の保護（個装・内装・外装／商業包装・工業包装）</td>
  </tr>
  <tr>
  <td><strong>流通加工</strong></td>
  <td>付加価値を与える作業（値札取付、返品処理等）</td>
  </tr>
  <tr>
  <td><strong>情報</strong></td>
  <td>物流に伴う情報処理</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">物流の8R <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>英語</th>
  <th>日本語</th>
  </tr>
  <tr>
  <td>Right Material</td>
  <td>正しい物を</td>
  </tr>
  <tr>
  <td>Right Quantity</td>
  <td>正しい量を</td>
  </tr>
  <tr>
  <td>Right Quality</td>
  <td>正しい品質の物を</td>
  </tr>
  <tr>
  <td>Right Place</td>
  <td>正しい場所に</td>
  </tr>
  <tr>
  <td>Right Time</td>
  <td>適切な時間に</td>
  </tr>
  <tr>
  <td>Right Method</td>
  <td>適切な方法で</td>
  </tr>
  <tr>
  <td>Right Cost</td>
  <td>適切なコストで</td>
  </tr>
  <tr>
  <td>Right Impression</td>
  <td>良い印象で</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">領域別の物流 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>領域</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①<strong>調達物流</strong></td>
  <td>サプライヤー → 自社工場</td>
  </tr>
  <tr>
  <td>②<strong>生産物流</strong></td>
  <td>工場内の受入→製造→保管→出荷、拠点間輸送</td>
  </tr>
  <tr>
  <td>③<strong>製品物流</strong></td>
  <td>拠点倉庫 → 販売店・小売店</td>
  </tr>
  <tr>
  <td>④<strong>静脈物流</strong></td>
  <td>製品の廃棄・リサイクルに伴う物流（帰りの血液＝静脈）</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">物流とロジスティクスの発展段階 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>段階</th>
  <th>名称</th>
  <th>特徴</th>
  </tr>
  <tr>
  <td>①</td>
  <td>後処理物流</td>
  <td>非効率な物流の繰り返し</td>
  </tr>
  <tr>
  <td>②</td>
  <td>物流システム</td>
  <td>入出荷・保管・輸送が有機的接続</td>
  </tr>
  <tr>
  <td>③</td>
  <td>ビジネス・ロジスティクス</td>
  <td>調達・生産・販売・物流が横断的接続</td>
  </tr>
  <tr>
  <td>④</td>
  <td>サプライチェーン・ロジスティクス</td>
  <td>顧客・供給業者との連携、情報共有</td>
  </tr>
  <tr>
  <td>⑤</td>
  <td>グリーン・ロジスティクス</td>
  <td>回収・リサイクルも前提</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">代表的物流モデル <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>モデル</th>
  <th>特徴</th>
  <th>留意点</th>
  </tr>
  <tr>
  <td><strong>直送</strong></td>
  <td>LT最短、積載効率悪い</td>
  <td>輸送効率↑なら工場在庫↑</td>
  </tr>
  <tr>
  <td><strong>物流センター</strong>（プール）</td>
  <td>中継拠点に在庫</td>
  <td>管理状態が見えにくい</td>
  </tr>
  <tr>
  <td><strong>クロスドッキング</strong></td>
  <td>中継拠点で在庫なし（積替えのみ）</td>
  <td>LTは最も遅い搬入で決まる</td>
  </tr>
  <tr>
  <td><strong>ミルクラン</strong></td>
  <td>複数サプライヤーを1台で巡回</td>
  <td>輸送効率高い、在庫水準低い</td>
  </tr>
  <tr>
  <td><strong>ミルクラン＋プール</strong></td>
  <td>互いの不備を補完</td>
  <td>高度な配車計画が必要</td>
  </tr>
  <tr>
  <td><strong>ハブ＆スポーク</strong></td>
  <td>大型輸送でハブ接続、エリア配送</td>
  <td>一定物量が条件</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">3PL（Third Party Logistics） <span class="star-badge star-3">★★★</span></h4>
  <p><strong>定義：</strong> 企業のロジスティクス活動を外部の第三者に外注すること。3PL事業者は荷主の「物流管理業務」を担う戦略的パートナー。</p>
  <p><strong>3PL事業者3つの特徴：</strong></p>
  <ol class="unit-list"><li>荷主の立場で最適物流が提案できる</li><li>情報システムに強く、コンサルティング能力を有する</li><li><strong>報酬とリスクを荷主と共有</strong>（ゲインシェアリング＝CR効果の利益シェア）</li></ol>
  <p><strong>3PL導入成功のポイント：</strong></p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>段階</th>
  <th>ポイント</th>
  </tr>
  <tr>
  <td>導入準備期</td>
  <td>トップの強い意志、競争入札、実現性ある提案</td>
  </tr>
  <tr>
  <td>移行期</td>
  <td>運営体制整備、荷主と共同チーム設立</td>
  </tr>
  <tr>
  <td>安定稼働期</td>
  <td>情報開示と機密保持、目標共有、相互評価</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">物流コスト分析 <span class="star-badge star-2">★★</span></h4>
  <ul class="unit-list"><li><strong>直接物流費</strong>：外部業者への支払い → 明確に管理</li><li><strong>間接物流費</strong>：社内人件費等 → 実態が掴みにくい → コスト構造の整理が必要</li><li><strong>ABC手法</strong>：ピッキング、検品、梱包等の個別作業コストから全体を分析</li></ul>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>ミルクは巡回</strong>」→ <strong>ミルク</strong>ラン ＝ 複数サプライヤーを<strong>巡回</strong>（牛乳配達モデル）</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>8R = モノ・量・質・場所・時間・方法・コスト・印象</strong>」→ M-Q-Q-P-T-M-C-I</div>
  <div class="formula-box">📐 <strong>試験頻出：</strong> 3PL＝物流管理業務のアウトソーシング、ゲインシェアリング＝CR効果の利益シェア</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>物流の8Rのうち、Rで始まらないものはあるか？</li><li>クロスドッキングモデルの最大の特徴は何か？</li><li>3PL事業者と従来の物流アウトソーシングの最大の違いは？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.全て「Right」で始まる（すべてR） 2.中継拠点で在庫を持たず車の積替えのみ行う 3.報酬とリスクを荷主と共有する（ゲインシェアリング）、物流管理業務を戦略的に担う</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 6,
        "title": "BPR（ビジネスプロセスリエンジニアリング）",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：BPRとは</h3>
  <p>BPR（Business Process Reengineering）は、既存の組織や業務を根本的に見直し、プロセスの視点で業務を再設計する企業改革手法。1993年にマイケル・ハマーとジェームス・チャンピーが提唱。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">BPRの特徴 <span class="star-badge star-3">★★★</span></h4>
  <p>全社共通目標の設定、<strong>トップダウン</strong>によるプロジェクト組成、ゼロベースの思考、ITの積極的活用、権限委譲により<strong>全体最適</strong>を追求。</p>
  <h4 class="unit-h4">BPR導入5ステップ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>Step</th>
  <th>名称</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>1</td>
  <td><strong>目的と対象の明確化</strong></td>
  <td>プロセス体系化、業務プロセス分析（モデリング）</td>
  </tr>
  <tr>
  <td>2</td>
  <td><strong>目標の設定</strong></td>
  <td>CS・QCD分析、KPI設定</td>
  </tr>
  <tr>
  <td>3</td>
  <td><strong>課題認識</strong></td>
  <td>プロセスリデザイン（改革後の姿の設計）</td>
  </tr>
  <tr>
  <td>4</td>
  <td><strong>テーマ設定</strong></td>
  <td>テーマ区分、推進企画</td>
  </tr>
  <tr>
  <td>5</td>
  <td><strong>推進計画</strong></td>
  <td>推進シナリオ、推進体制、スケジュール</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">プロセスリデザインの3つの改革視点 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>改革視点</th>
  <th>観点</th>
  </tr>
  <tr>
  <td><strong>機能分担改革</strong></td>
  <td>①社内vs社外（アウトソーシング）、②集中vs分散（シェアードサービス）、③統合vs分離、④フラット化、⑤タイプ別組織編成</td>
  </tr>
  <tr>
  <td><strong>業務・情報システム改革</strong></td>
  <td>①非付加価値プロセスの排除、②判断ルール明確化、③権限委譲、④情報伝達ロス極小化、⑤管理情報整備、⑥場所・時間制約解消</td>
  </tr>
  <tr>
  <td><strong>人材改革</strong></td>
  <td>①人材変革ビジョン、②新評価制度、③スキルアップシステム</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">KPIとプロセス指標 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>指標</th>
  <th>説明</th>
  </tr>
  <tr>
  <td><strong>KPI</strong>（Key Performance Indicator）</td>
  <td>経営成果指標。部門粗利率、営業利益率、在庫回転数、CS指標等</td>
  </tr>
  <tr>
  <td><strong>PD</strong>（Performance Driver）</td>
  <td>プロセス指標。活動状態を測定する指標。KPIとの関連付けが重要</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">調達部門のBPR <span class="star-badge star-2">★★</span></h4>
  <p>工場単位で分散している業務について、社内/社外、集中化/分散化を検討する。</p>
  <ul class="unit-list"><li><strong>段階1：</strong> ソーシング・値決め業務を本社に統合・集中化（業務レベル向上）</li><li><strong>段階2：</strong> 手配オペレーション（発注・検収）を標準化してアウトソーシング（効率化・コスト最適化）</li></ul>
  <h4 class="unit-h4">BPR効果 <span class="star-badge star-2">★★</span></h4>
  <p>ATカーニー社の調査：IT化によるBPRを調達業務で実施した場合、<strong>全体で35%以上の業務時間短縮</strong>が可能。</p>
  <h4 class="unit-h4">BPMとは <span class="star-badge star-1">★</span></h4>
  <p>BPM（Business Process Management）は、BPRを継続的に支援するツール。「分析→設計→実行→モニタリング→改善・再構築」のマネジメントサイクルで継続的プロセス改善を遂行。</p>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>BPR目標課題テーマ推進</strong>」→ Step1<strong>目</strong>的、Step2<strong>標</strong>（目標）、Step3<strong>課</strong>題、Step4<strong>テー</strong>マ、Step5<strong>推</strong>進</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>機（き）業（ぎょう）人（じん）</strong>」→ <strong>機</strong>能分担改革、<strong>業</strong>務・情報システム改革、<strong>人</strong>材改革 ＝ プロセスリデザイン3視点</div>
  <p><strong>試験頻出：</strong> BPRは「全体最適」「トップダウン」「ゼロベース」がキーワード。調達BPRで35%以上の時間短縮可能（ATカーニー社）</p>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>BPRの導入5ステップのうち、Step3は何か？</li><li>プロセスリデザインの3つの改革視点は？</li><li>調達部門のBPR段階2で行うことは？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.課題認識（プロセスリデザイン） 2.機能分担改革、業務・情報システム改革、人材改革 3.手配オペレーション（発注・検収）を標準化してアウトソーシングし、効率化・コスト最適化を図る</div>
  <hr class="unit-divider">
  <h2 class="unit-h2">暗記チェックリスト</h2>
  <h3 class="unit-h3">Level 1（ 最重要） <span class="star-badge star-3">★★★</span></h3>
  <ul class="unit-list"><li>[ ] TPS中核 = JIT生産方式、かんばん = JIT実現の管理手法</li><li>[ ] プル方式 = 使った分だけ補給、プッシュ方式 = 計画ベース</li><li>[ ] セル生産3方式（1人・巡回・分割）の特徴と比較</li><li>[ ] IEの2側面：方法工学と作業測定</li><li>[ ] ECRS法則（E→C→R→S：効果大→小の順）</li><li>[ ] 動作経済の4原則</li><li>[ ] 5つの現状分析技術（タイム・工程・稼働・ライン・連合）</li><li>[ ] 工程図記号6種（加工○・運搬→・数量□・品質◇・滞留D・貯蔵▽）</li><li>[ ] 目標サイクルタイム = ライン稼働時間÷生産必要量÷良品率</li><li>[ ] 設備保全体系（PM, TBM, IR, CBM, CM, BM）</li><li>[ ] 6大ロス（故障・段取り・チョコ停・速度低下・不良・歩留まり）</li><li>[ ] 設備総合効率 = 時間稼働率×性能稼働率×良品率、85%基準</li><li>[ ] IPS「右からの発想」4概念（理念→理想→経営戦略コスト→理想目標原価）</li><li>[ ] IPS制約条件3つ（技術・資金/投資機会・方針）</li><li>[ ] 物流8R、4領域（調達・生産・製品・静脈）</li><li>[ ] 6つの物流モデルの特徴</li><li>[ ] 3PL = 物流管理のアウトソーシング、ゲインシェアリング</li><li>[ ] BPR 5ステップ、3改革視点（機能分担・業務/情報・人材）</li></ul>
  <h3 class="unit-h3">Level 2（ 重要） <span class="star-badge star-2">★★</span></h3>
  <ul class="unit-list"><li>[ ] TPSの改善サイクル4ステップ</li><li>[ ] ワークサンプリングの5手順、「かたより」防止策</li><li>[ ] 連合作業分析の3視点</li><li>[ ] 保全方式の適用条件（TBM, IR, CBM, CM, BM）</li><li>[ ] IPS 18の基本手順（主要フロー）</li><li>[ ] IPSのコスト3段階（TC, FC, DC）</li><li>[ ] ロジスティクス発展5段階</li><li>[ ] 3PL導入3段階のポイント</li><li>[ ] BPR調達部門の段階1・2</li><li>[ ] KPIとPD（プロセス指標）の関係</li></ul></div>`
      }
    ]
  },
  {
    "sectionId": 4,
    "name": "マネジメント手法",
    "icon": "📊",
    "totalMinutes": 40,
    "units": [
      {
        "id": 1,
        "title": "方針管理",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：方針管理とは</h3>
  <p>企業やその構成組織がある目標に向かって計画を作成し、組織の隅々に行き渡らせたうえで、<strong>PDCAサイクル</strong>を回して目標を達成するマネジメント手法。TQC（Total Quality Control）がその起源。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">方針管理の定義 <span class="star-badge star-3">★★★</span></h4>
  <p>（財）日本科学技術連盟の定義：「経営基本方針に基づき、長（中）期経営計画や短期経営方針を定め、それらを効率的に達成するために、<strong>企業組織全体の協力のもとに</strong>行われる活動」</p>
  <h4 class="unit-h4">方針管理の歴史 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>年</th>
  <th>出来事</th>
  </tr>
  <tr>
  <td>1958年</td>
  <td><strong>デミング賞</strong>の審査項目として方針重視がQCに定着</td>
  </tr>
  <tr>
  <td>1961年</td>
  <td><strong>小松製作所</strong>の管理点設定図（<strong>旗方式</strong>）＝方針管理の始まり</td>
  </tr>
  <tr>
  <td>1965年</td>
  <td><strong>ブリジストン</strong>で「方針管理要領」制定＝「方針管理」用語の誕生</td>
  </tr>
  </table></div>
  <p><strong>デミング賞：</strong> 故W.E.デミング博士の業績を記念して1951年創設。TQMに関する世界最高ランクの賞。本賞（個人）・実施賞（企業）・事業所表彰がある。</p>
  <div class="formula-box">📐 <strong>旗方式：</strong> 全体目標を個々に分解し、達成＝青旗、未達成＝赤旗で管理する方式。</div>
  <h4 class="unit-h4">方針管理の用語 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>分類</th>
  <th>用語</th>
  <th>解説</th>
  </tr>
  <tr>
  <td><strong>目標展開</strong></td>
  <td>方針</td>
  <td>どの方向に向かうべきか、力点をどこに置くか（ベクトル合わせ）</td>
  </tr>
  <tr>
  <td></td>
  <td>目標</td>
  <td>到達すべき目標値・レベルと達成期限 → <strong>数値化する</strong></td>
  </tr>
  <tr>
  <td><strong>施策展開</strong></td>
  <td>実施項目</td>
  <td>目標達成のための施策・手段</td>
  </tr>
  <tr>
  <td></td>
  <td>実行テーマ</td>
  <td>実施項目を<strong>5W1H</strong>で具体化（What, Where, How, Who, When, Why）</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">方針管理の手順 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>手順</th>
  <th>内容</th>
  <th>ポイント</th>
  </tr>
  <tr>
  <td>①方針展開</td>
  <td>上位方針ほど幅広く網羅</td>
  <td>方針は明確に</td>
  </tr>
  <tr>
  <td>②目標展開</td>
  <td>重要目標の明示、管理目的の明確化</td>
  <td><strong>目標は数値化</strong>、上下左右のすり合わせ</td>
  </tr>
  <tr>
  <td>③実施項目展開</td>
  <td>5W1Hで具体化</td>
  <td>管理者も分担者であることに注意</td>
  </tr>
  <tr>
  <td>④期中フォローとトップ診断</td>
  <td>展開された実施項目の実施管理</td>
  <td><strong>行動面</strong>と<strong>成果</strong>の両面で管理</td>
  </tr>
  </table></div>
  <div class="info-box"><span class="box-icon">ℹ️</span><strong>上下のすり合わせ：</strong> 上＝上位目標・上司の考え方、左右＝関係部門</div>
  <h4 class="unit-h4">方針管理の体系 <span class="star-badge star-3">★★★</span></h4>
  <p>上位からの方針を下位が受け、自部門の方針としてPDCAサイクルを回す。</p>
  <p><strong>日常管理とは：</strong> 各部門の担当業務について、効率的達成のために日常実施するすべての活動（現状維持＋改善を含む）</p>
  <h4 class="unit-h4">調達業務における方針管理の活用 <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li><strong>自部門の目標達成</strong>：CRや手配工数削減などの目標をPDCAで推進</li><li><strong>サプライヤーへの指導</strong>：Q・C・D・F（柔軟性）目標の方針展開を指導・支援</li></ol>
  <h4 class="unit-h4">方針管理とISO9000s <span class="star-badge star-2">★★</span></h4>
  <p>ISO9000sを取得すれば自動的に方針管理をマスターできる仕組み。品質のみならずコスト目標にも有効。調達部門はサプライヤーにISO9000s認証を義務づけ、または推奨すべき。</p>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>1958デミ、1961コマ旗、1965ブリ</strong>」→ <strong>デミ</strong>ング賞(1958)、<strong>コマ</strong>ツ<strong>旗</strong>方式(1961)、<strong>ブリ</strong>ジストン(1965)</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>方目実期</strong>（ほうもくじっき）」→ <strong>方</strong>針展開→<strong>目</strong>標展開→<strong>実</strong>施項目展開→<strong>期</strong>中フォロー ＝ 方針管理4手順</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>方針管理の起源となったマネジメント手法は？</li><li>1961年に方針管理の始まりとなった手法と企業は？</li><li>方針管理の④期中フォローでは、どの2つの面から管理すべきか？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.TQC（Total Quality Control） 2.管理点設定図（旗方式）、小松製作所 3.行動面（行動が取られたか否か）と成果（目標に対する実績）</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 2,
        "title": "プロジェクトの管理と進め方",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：プロジェクトとは</h3>
  <p><strong>初めと終わり（ゴール）があり、内容がユニーク（非反復的）で有期限の一連の作業。</strong> 関連各部から集められた専門家によるプロジェクトチームで遂行される。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">プロジェクトマネジメントの5プロセス <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>プロセス</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>①<strong>立上げ</strong></td>
  <td>ゴール、スコープ、日程、成果物の方向性を定める</td>
  </tr>
  <tr>
  <td>②<strong>計画立案</strong></td>
  <td>スコープ、アクティビティ、スケジュール、コスト、品質、リスク等を明確化。<strong>最も重要なフェーズ</strong></td>
  </tr>
  <tr>
  <td>③<strong>実行</strong></td>
  <td>キックオフ、プロジェクト活動の実行</td>
  </tr>
  <tr>
  <td>④<strong>実施管理</strong></td>
  <td>ミーティング・レポートで進捗管理。特に<strong>変更管理</strong>が大切</td>
  </tr>
  <tr>
  <td>⑤<strong>終結</strong></td>
  <td>公式に終了。将来のために<strong>教訓</strong>をとりまとめ</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">プロジェクトにおける調達アクティビティ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>項目</th>
  <th>プロセス</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>方針の明確化</td>
  <td>計画立案</td>
  <td>内外製、契約形態、範囲、予算等の基本方針</td>
  </tr>
  <tr>
  <td>契約の方針</td>
  <td>計画立案</td>
  <td>RFI（情報提供依頼）、RFP（提案依頼）、RFQ（見積依頼）の検討</td>
  </tr>
  <tr>
  <td>契約交渉・取引先選定</td>
  <td>実行</td>
  <td>取引条件の契約、義務と責任の明確化</td>
  </tr>
  <tr>
  <td>調達実施管理</td>
  <td>実施管理</td>
  <td>納期管理、タスク遂行状況管理。<strong>変更管理</strong>が特に重要</td>
  </tr>
  <tr>
  <td>契約の完了</td>
  <td>終結</td>
  <td>検査、検収、支払の一連のプロセス</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">契約の3形態（バイヤーのリスク順） <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>形態</th>
  <th>内容</th>
  <th>バイヤーのリスク</th>
  </tr>
  <tr>
  <td><strong>定額契約</strong></td>
  <td>一括請負。最初に額を合意しサプライヤーが成果物提供</td>
  <td><strong>低い</strong></td>
  </tr>
  <tr>
  <td><strong>タイム・アンド・マテリアル契約</strong></td>
  <td>時間単金×かかった時間で支払</td>
  <td>中間</td>
  </tr>
  <tr>
  <td><strong>実費償還契約</strong></td>
  <td>発生コスト＋マージンを支払</td>
  <td><strong>高い</strong></td>
  </tr>
  </table></div>
  <div class="memo-box"><span class="box-icon">📝</span><strong>リスク順：</strong> 定額 ＜ タイム・アンド・マテリアル ＜ 実費償還（バイヤー側から見て）</div>
  <h4 class="unit-h4">成功の5ポイント <span class="star-badge star-3">★★★</span></h4>
  <ol class="unit-list"><li><strong>計画の重視</strong></li><li><strong>要件の明確化</strong></li><li><strong>変更管理の重視</strong></li><li><strong>コミュニケーションの重視</strong></li><li>プロジェクト完了時の<strong>レビューと成果物のまとめ</strong></li></ol>
  <h4 class="unit-h4">スケジュール管理 <span class="star-badge star-2">★★</span></h4>
  <div class="formula-box">📐 <strong>クリティカル・パス法：</strong> ネットワーク図で各作業の所要日を足し、<strong>最長経路（＝クリティカルパス）</strong>を特定。クリティカルパス上の作業遅延はプロジェクト全体の遅延に直結するため、より厳しく管理する。</div>
  <p>クリティカルパス特定後、<strong>ガントチャート</strong>でスケジュールを組み立てる。</p>
  <h4 class="unit-h4">内外作の判断基準 <span class="star-badge star-2">★★</span></h4>
  <p>社内における存在の有無、コストの優位性、専門知識の有無、将来の成長性。</p>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>立（た）計（けい）実（じつ）管（かん）終（しゅう）</strong>」→ <strong>立</strong>上げ→<strong>計</strong>画立案→<strong>実</strong>行→実施<strong>管</strong>理→<strong>終</strong>結 ＝ 5プロセス</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>定タ実（ていたじつ）でリスク増大</strong>」→ <strong>定</strong>額→<strong>タ</strong>イム＆マテリアル→<strong>実</strong>費償還の順でバイヤーリスク↑</div>
  <p><strong>試験頻出：</strong> 計画立案が最も重要、変更管理の重視、RFI/RFP/RFQの区別</p>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>プロジェクトマネジメントで最も重要なフェーズはどれか？</li><li>バイヤー側のリスクが最も高い契約形態はどれか？</li><li>クリティカル・パスとは何か？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.計画立案 2.実費償還契約 3.ネットワーク図で最も長い日程となる経路。この上の作業遅延はプロジェクト全体の遅延に直結する</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 3,
        "title": "TOC（制約条件の理論）",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：TOCとは</h3>
  <p>TOC（Theory of Constraints）は、物理学者エリヤフ・ゴールドラット博士が提唱した理論。制約条件を見つけて解決していく経営改善手法。「制約管理」「コンストレインツ・マネジメント」とも。SCMの背景理論の1つ。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">TOCの基本的考え方 <span class="star-badge star-3">★★★</span></h4>
  <p><strong>企業のゴール：</strong>「現在から将来に渡って利益を出し続ける」＋「市場を満足させる」＋「従業員に安心・満足な環境」</p>
  <p><strong>核心：</strong></p>
  <ul class="unit-list"><li><strong>部分最適の総和 ≠ 全体最適</strong></li><li>鎖全体の強度は<strong>一番弱い鎖（制約条件）の強度</strong>で決まる</li><li>ボトルネックに集中して対策を打たなければ効果がない</li></ul>
  <h4 class="unit-h4">TOCの3つの指標 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>指標</th>
  <th>定義</th>
  <th>方向</th>
  </tr>
  <tr>
  <td><strong>T（スループット）</strong></td>
  <td>売上高 − 資材費 ＝ 販売を通じてお金を作り出す割合</td>
  <td><strong>増大</strong>（理論的に限界なし）優先度①</td>
  </tr>
  <tr>
  <td><strong>I（在庫）</strong></td>
  <td>販売しようとする物の購入投資額</td>
  <td><strong>削減</strong>（ゼロ以下不可）優先度②</td>
  </tr>
  <tr>
  <td><strong>OE（業務費用）</strong></td>
  <td>在庫をスループットに変えるために費やしたお金</td>
  <td><strong>削減</strong>（ゼロ以下不可）優先度③</td>
  </tr>
  </table></div>
  <div class="memo-box"><span class="box-icon">📝</span><strong>T/I</strong> ＝ 在庫がスループットに変換される効率（材料が流れるスピード） <strong>T/OE</strong> ＝ 全体の生産性（1円の費用で獲得したお金）</div>
  <h4 class="unit-h4">3つの制約条件 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>制約</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>物理制約</strong></td>
  <td>生産キャパシティ・原材料の制約。市場需要＞生産能力（手不足）</td>
  </tr>
  <tr>
  <td><strong>市場制約</strong></td>
  <td>市場規模・地域性。生産能力＞市場需要（手余り）</td>
  </tr>
  <tr>
  <td><strong>方針（管理）制約</strong></td>
  <td>原価計算・評価尺度・手順・組織・慣習・価値観。<strong>TOCの最大の制約条件</strong></td>
  </tr>
  </table></div>
  <h4 class="unit-h4">改善の5ステップ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>Step</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>1</td>
  <td><strong>制約条件を見つける</strong> — 最も大きな制約を探し出す</td>
  </tr>
  <tr>
  <td>2</td>
  <td><strong>制約条件を活用する</strong> — 制約工程の時間・スペースを必要なだけ拡大</td>
  </tr>
  <tr>
  <td>3</td>
  <td><strong>制約条件以外を制約条件に従わせる</strong> — 制約以外に着手してはならない</td>
  </tr>
  <tr>
  <td>4</td>
  <td><strong>制約条件を強化する</strong> — 設備能力強化、人員増、改善で全体アウトプット増</td>
  </tr>
  <tr>
  <td>5</td>
  <td><strong>惰性に注意しながら繰り返す</strong> — 別の制約を発見し1〜5を繰り返す</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">5つのツリー（思考プロセス） <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>ツリー</th>
  <th>略称</th>
  <th>問い</th>
  <th>目的</th>
  </tr>
  <tr>
  <td>①現状問題構造ツリー</td>
  <td><strong>CRT</strong></td>
  <td>何を変えるか</td>
  <td>中核問題の特定（問題全体の70%に影響）</td>
  </tr>
  <tr>
  <td>②対立解消図</td>
  <td><strong>CRD</strong></td>
  <td>何に変えるか</td>
  <td>対立を解消するアイデア創出</td>
  </tr>
  <tr>
  <td>③未来問題構造ツリー</td>
  <td><strong>FRT</strong></td>
  <td>何に変えるか（検証）</td>
  <td>解決策の有効性シミュレーション</td>
  </tr>
  <tr>
  <td>④前提条件ツリー</td>
  <td><strong>PRT</strong></td>
  <td>どうやって変えるか</td>
  <td>実行のロードマップ作成</td>
  </tr>
  <tr>
  <td>⑤移行ツリー</td>
  <td><strong>TrT</strong></td>
  <td>どうやって変えるか（計画）</td>
  <td>解決策の実行計画作成</td>
  </tr>
  </table></div>
  <div class="memo-box"><span class="box-icon">📝</span><strong>中核問題：</strong> 問題全体の<strong>70%に影響</strong>を持つ根底の問題</div>
  <h4 class="unit-h4">DBR（ドラム・バッファ・ロープ） <span class="star-badge star-3">★★★</span></h4>
  <p>ボトルネック工程に注目し、生産スケジュールを最適化する手法。</p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>要素</th>
  <th>意味</th>
  </tr>
  <tr>
  <td><strong>ドラム（Drum）</strong></td>
  <td>制約工程の生産スケジュール（ペースを決める）</td>
  </tr>
  <tr>
  <td><strong>バッファ（Buffer）</strong></td>
  <td>制約工程を保護する時間的余裕</td>
  </tr>
  <tr>
  <td><strong>ロープ（Rope）</strong></td>
  <td>制約工程に同期した部材の配当計画（初工程の投入制御）</td>
  </tr>
  </table></div>
  <p><strong>少年の行進例：</strong> 足の遅い少年（ボトルネック）のペースを<strong>ドラム</strong>で先頭に知らせ、<strong>ロープ</strong>でつなぎ、<strong>バッファ</strong>（たるみ）を持たせる。</p>
  <h4 class="unit-h4">VAT分析（生産タイプ別DBR） <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>タイプ</th>
  <th>生産形態</th>
  <th>主な業種</th>
  <th>DBRポイント</th>
  </tr>
  <tr>
  <td><strong>V型</strong></td>
  <td>原料加工（装置産業）</td>
  <td>鉄鋼、化学、繊維</td>
  <td>大ロット生産工程がボトルネック → 段取り改善</td>
  </tr>
  <tr>
  <td><strong>A型</strong></td>
  <td>部品組立（個別受注）</td>
  <td>橋梁、建設、航空機</td>
  <td>部品取り揃えが鍵 → バッファ明確化、納期管理</td>
  </tr>
  <tr>
  <td><strong>T型</strong></td>
  <td>部品組立（多品種大量）</td>
  <td>家電、自動車</td>
  <td>最終組立ラインを制約工程 → サブラインにバッファ</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">スループットによる意思決定 <span class="star-badge star-2">★★</span></h4>
  <div class="formula-box">📐 <strong>CPM（Constraints Per Minute）</strong> ＝ ボトルネック工程の分あたりのスループット</div>
  <p>製品別にCPMと販売量をプロットし、儲かる製品を明確にする。</p>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>見つけ活かし従わせ強化して繰り返す</strong>」→ TOC改善5ステップ</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>ブシカン方（ぶしかんほう）</strong>」→ <strong>物</strong>理制約、<strong>市</strong>場制約、<strong>管</strong>理（<strong>方</strong>針）制約 ＝ 3制約（方針制約が最大）</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>CRT→CRD→FRT→PRT→TrT</strong>」→ <strong>何</strong>を変える→<strong>何</strong>に変える→検証→<strong>どう</strong>やって→計画</div>
  <div class="formula-box">📐 <strong>試験頻出：</strong> T＝売上−資材費（生産高ではなく販売した分）、部分最適≠全体最適、方針制約がTOC最大の制約、中核問題＝70%影響</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>TOCの3指標のうち、優先度が最も高いものは？</li><li>TOCにおいて最大の制約条件とされるのは何か？</li><li>DBRの「ロープ」とは何を意味するか？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.T（スループット）の増大 2.方針（管理）制約 3.制約工程に同期した部材の配当計画（初工程の投入制御）</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 4,
        "title": "シックスシグマ",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：シックスシグマとは</h3>
  <p>プロセスの改善によりエラーやミスの発生確率を「<strong>100万分の3.4</strong>」以下に抑える経営改善手法。最終目標は高品質・低コスト・最小サイクルタイムによる顧客満足の向上。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">シックスシグマの基本 <span class="star-badge star-3">★★★</span></h4>
  <ul class="unit-list"><li><strong>σ（シグマ）</strong> ＝ 標準偏差（バラツキの指標）</li><li><strong>6σレベル</strong> ＝ エラー発生確率100万分の3.4回</li><li>発案者：<strong>マイケル・ハリー氏</strong>（モトローラ社、1980年）</li><li>世界的普及：<strong>GE（ゼネラルエレクトリック社）</strong> が1995年に全社活動開始、1998年に効果公表</li></ul>
  <h4 class="unit-h4">シックスシグマの歴史 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>年</th>
  <th>出来事</th>
  </tr>
  <tr>
  <td>1980年</td>
  <td><strong>モトローラ社</strong>のマイケル・ハリー氏が考案</td>
  </tr>
  <tr>
  <td>1995年</td>
  <td><strong>GE</strong>が経営改革手法として全社活動開始</td>
  </tr>
  <tr>
  <td>1998年</td>
  <td>GEが効果を公表 → 導入企業が増加</td>
  </tr>
  </table></div>
  <p><strong>背景：</strong> モトローラが日本のポケットベル市場参入時に自社品質の低さに愕然 → 日本の品質管理手法を研究・欧米流にアレンジ</p>
  <h4 class="unit-h4">DMAIC と DMADV <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>フェーズ</th>
  <th>DMAIC（現状改善）</th>
  <th>DMADV（予防措置設計）</th>
  </tr>
  <tr>
  <td><strong>D</strong>efine</td>
  <td>機会の定義（ビジネスチャンスの定義）</td>
  <td>同左</td>
  </tr>
  <tr>
  <td><strong>M</strong>easure</td>
  <td>特性データ収集、現状把握</td>
  <td>QFD（品質機能展開）で特性特定</td>
  </tr>
  <tr>
  <td><strong>A</strong>nalyze</td>
  <td>統計手法で欠陥要因を特定</td>
  <td>特性の最適値を特定</td>
  </tr>
  <tr>
  <td><strong>I</strong>mprove / <strong>D</strong>esign</td>
  <td>改善の試行・実行、成果確認</td>
  <td>特性の具体的設計</td>
  </tr>
  <tr>
  <td><strong>C</strong>ontrol / <strong>V</strong>erify</td>
  <td>効果の監視・維持管理</td>
  <td>設計内容の検証・維持管理</td>
  </tr>
  </table></div>
  <p><strong>共通追加ステップ：</strong></p>
  <ul class="unit-list"><li><strong>Standardize（標準化）</strong>：ISOなどで管理項目・管理値を設定</li><li><strong>Integrate（統合）</strong>：知見の水平展開と組織への統合</li></ul>
  <div class="memo-box"><span class="box-icon">📝</span><strong>DMAIC</strong> ＝ 既存の欠陥除去、<strong>DMADV</strong> ＝ 新しい製品・プロセスの欠陥予防</div>
  <h4 class="unit-h4">推進体制の役割 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>役割</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>チャンピオン</strong></td>
  <td>事業部長など、テーマに責任を持つ人</td>
  </tr>
  <tr>
  <td><strong>BB（Black Belt）</strong></td>
  <td>上級変革専門家。1テーマ年間<strong>1000万円以上</strong>の成果、4ヶ月で完了</td>
  </tr>
  <tr>
  <td><strong>GB（Green Belt）</strong></td>
  <td>中級変革専門家。1テーマ年間<strong>250万円以上</strong>の成果</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">重要概念 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>概念</th>
  <th>説明</th>
  </tr>
  <tr>
  <td><strong>VOC</strong>（Voice of Customer）</td>
  <td>顧客の声。テーマのエントリーポイント</td>
  </tr>
  <tr>
  <td><strong>COPQ</strong>（Cost of Poor Quality）</td>
  <td>品質不良による発生コスト（目に見えるコスト＋見えにくいコスト）</td>
  </tr>
  <tr>
  <td><strong>経営フェイラー</strong></td>
  <td>経営品質のバラツキから出てくる損失</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">成功の9ポイント <span class="star-badge star-3">★★★</span></h4>
  <ol class="unit-list"><li>経営トップの改革意欲表明（<strong>最も重要</strong>）</li><li>共通教育によるトレーニング</li><li>DMAIC/DMADVの確実な実行</li><li>顧客満足基点のバリューチェーン革新</li><li>統計ソフト（MINITAB等）の活用</li><li>財務成果直結</li><li>科学的データ分析</li><li>業績・人事評価への活用</li><li>共通言語文化による企業文化革新</li></ol>
  <h4 class="unit-h4">シックスシグマの対象 <span class="star-badge star-2">★★</span></h4>
  <p>製品、プロセス、サプライチェーン、営業、サービス、マネジメント、ビジネス、経営へと広がり、<strong>部門限定ではない</strong>（部門共通の重要特性を重視）。</p>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>ディマイク（DMAIC）</strong>」→ <strong>D</strong>efine, <strong>M</strong>easure, <strong>A</strong>nalyze, <strong>I</strong>mprove, <strong>C</strong>ontrol</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>モトGE百万3.4</strong>」→ <strong>モト</strong>ローラ考案 → <strong>GE</strong>で普及 → <strong>100万</strong>分の<strong>3.4</strong></div>
  <div class="formula-box">📐 <strong>試験頻出：</strong> 6σ＝100万分の3.4、DMAIC＝既存改善/DMADV＝新規設計、BB＝1000万円以上/GB＝250万円以上、成功の最重要点＝トップの改革意欲</div>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>シックスシグマにおける6σレベルとはエラー発生確率がいくらか？</li><li>DMAICとDMADVの違いは？</li><li>Black Beltに求められる1テーマあたりの年間成果額は？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.100万分の3.4回 2.DMAIC＝既存製品・プロセスの欠陥除去、DMADV＝新製品・プロセスの欠陥予防設計 3.年間1000万円以上</div>
  <hr class="unit-divider"></div>`
      },
      {
        "id": 5,
        "title": "ナレッジマネジメント・スキル管理",
        "estimatedMinutes": 8,
        "content": `<div class="unit-content"><h3 class="unit-h3">導入：ナレッジマネジメントとは</h3>
  <p>KM（Knowledge Management）は、企業の知識資産を組織的に蓄積・共有し、効率を高め価値を生み出すマネジメント全般のこと。個人知を組織知に変え、Σ（個人知）以上の知を組織が持つことを目指す。</p>
  <h3 class="unit-h3">コア知識</h3>
  <h4 class="unit-h4">知識の分類 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>分類</th>
  <th>内容</th>
  <th>例</th>
  </tr>
  <tr>
  <td><strong>形式知</strong></td>
  <td>言語・文章で表現した客観的な知</td>
  <td>マニュアル、データベース</td>
  </tr>
  <tr>
  <td><strong>暗黙知</strong></td>
  <td>言語・文章で表現しがたい主観的な知</td>
  <td>技能、勘、ノウハウ</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">SECIモデル（セキモデル） <span class="star-badge star-3">★★★</span></h4>
  <p>個人知が組織知となり新しいものを創造するプロセス。野中郁次郎氏が提唱。</p>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>フェーズ</th>
  <th>名称</th>
  <th>知識変換</th>
  <th>内容</th>
  </tr>
  <tr>
  <td><strong>S</strong></td>
  <td>共同化（Socialization）</td>
  <td>暗黙知→暗黙知</td>
  <td>同じ体験をして暗黙知を伝達（徒弟制度など）</td>
  </tr>
  <tr>
  <td><strong>E</strong></td>
  <td>表出化（Externalization）</td>
  <td>暗黙知→形式知</td>
  <td>メタファーやアナロジーで暗黙知を言語化</td>
  </tr>
  <tr>
  <td><strong>C</strong></td>
  <td>連結化（Combination）</td>
  <td>形式知→形式知</td>
  <td>形式知同士を組み合わせ再編（業務マニュアル等）</td>
  </tr>
  <tr>
  <td><strong>I</strong></td>
  <td>内面化（Internalization）</td>
  <td>形式知→暗黙知</td>
  <td>形式知を実践して体得（マニュアル→自分のもの）</td>
  </tr>
  </table></div>
  <div class="memo-box"><span class="box-icon">📝</span><strong>メタファー</strong> ＝ 概念的なものにみたてること <strong>アナロジー</strong> ＝ 既知の具体的なものと比較例示すること</div>
  <p><strong>表出化のための環境整備：</strong> 会議室・ミーティングスペースの物理的整備、人的交流の場作り</p>
  <h4 class="unit-h4">KMの歴史的背景 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>年代</th>
  <th>出来事</th>
  </tr>
  <tr>
  <td>1970〜80年代</td>
  <td>ダニエル・ベル「脱工業化社会」、ガルブレイス「不確実性の時代」</td>
  </tr>
  <tr>
  <td>1990年代</td>
  <td>ドラッカー「ポスト資本主義社会」、<strong>野中郁次郎</strong>「知識創造企業」(1990)</td>
  </tr>
  <tr>
  <td>1992年</td>
  <td><strong>キャプラン＆ノートン「バランススコアカード」</strong></td>
  </tr>
  <tr>
  <td>1990年代後半</td>
  <td>IT技術普及でKM採用企業急増（GE, IBM, ノキア、エーザイ、電通等）</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">KMの対象ナレッジ5類型 <span class="star-badge star-3">★★★</span></h4>
  <ol class="unit-list"><li><strong>共有すれば役立つもの</strong>（営業顧客、サプライヤー情報、成功事例）</li><li><strong>繰り返し使えるもの</strong>（技術データベース）</li><li><strong>過ちを防ぐもの</strong>（品質保証資料）</li><li><strong>競争力に繋がるもの</strong>（特許情報）</li><li><strong>経験から体得したもの</strong>（個人の技・勘）</li></ol>
  <h4 class="unit-h4">KM推進の5ステップ <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>Step</th>
  <th>名称</th>
  <th>内容</th>
  </tr>
  <tr>
  <td>1</td>
  <td><strong>構想・現状把握</strong></td>
  <td>KMビジョン策定、問題明確化、管理実態把握</td>
  </tr>
  <tr>
  <td>2</td>
  <td><strong>グランドデザイン</strong></td>
  <td>情報循環系の検討、しくみ・ツールの目指す姿</td>
  </tr>
  <tr>
  <td>3</td>
  <td><strong>具体化・実践準備</strong></td>
  <td>情報知識整備、しくみ・ツール整備、KMプロモーション</td>
  </tr>
  <tr>
  <td>4</td>
  <td><strong>実践</strong></td>
  <td>推奨ワークスタイル実践、<strong>early adapter</strong>を見極め働きかけ</td>
  </tr>
  <tr>
  <td>5</td>
  <td><strong>変化確認</strong></td>
  <td>実践状況把握、フォロー</td>
  </tr>
  </table></div>
  <div class="memo-box"><span class="box-icon">📝</span><strong>ロジャーズのイノベーション普及曲線：</strong> 普及率が<strong>16%</strong>を超えると急上昇</div>
  <h4 class="unit-h4">ロジャーズの採用者5分類 <span class="star-badge star-3">★★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>分類</th>
  <th>特徴</th>
  </tr>
  <tr>
  <td><strong>イノベーター</strong>（革新的採用者）</td>
  <td>冒険的、最初に採用</td>
  </tr>
  <tr>
  <td><strong>アーリーアダプター</strong>（初期採用者）</td>
  <td>自ら情報収集、多数から尊敬</td>
  </tr>
  <tr>
  <td><strong>アーリーマジョリティ</strong>（初期多数）</td>
  <td>慎重、追随的採用</td>
  </tr>
  <tr>
  <td><strong>レイトマジョリティ</strong>（後期多数）</td>
  <td>うたぐり深い、模倣的採用</td>
  </tr>
  <tr>
  <td><strong>ラガード</strong>（採用遅滞者）</td>
  <td>最も保守的、最後に採用</td>
  </tr>
  </table></div>
  <h4 class="unit-h4">スキル管理 <span class="star-badge star-2">★★</span></h4>
  <div class="tb-table-wrap"><table class="tb-table">
  <tr>
  <th>概念</th>
  <th>説明</th>
  </tr>
  <tr>
  <td><strong>スキル</strong></td>
  <td>形式知化が困難な暗黙知（例：新幹線先頭車両の曲げ加工、官能試験）</td>
  </tr>
  <tr>
  <td><strong>スキル管理</strong></td>
  <td>スキルの保有状況を確認し、意図的に望ましい状態に変えるマネジメント</td>
  </tr>
  <tr>
  <td><strong>スキル伝承</strong></td>
  <td>共同体験が基本。形式知化できる要素の発見努力（ワザ言語の活用）</td>
  </tr>
  </table></div>
  <p><strong>スキル伝承のポイント：</strong></p>
  <ul class="unit-list"><li>共同体験が基本</li><li><strong>ワザ言語</strong>（感覚を表現する言葉：「コクがある」「キレがいい」等）の活用</li><li>教え手と学び手の信頼関係・使命感</li><li>技能保有者への評価制度構築</li></ul>
  <h4 class="unit-h4">調達業務のナレッジマネジメント <span class="star-badge star-2">★★</span></h4>
  <ol class="unit-list"><li><strong>自社の調達KM</strong>：価格データ・工数データの共有、ネゴのスキル・値頃感の形式知化</li><li><strong>サプライヤーのKM指導</strong>：技術・技能の共有化・伝承の工夫を把握し支援</li></ol>
  <h3 class="unit-h3">暗記ポイント</h3>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>セキ（SECI）</strong>」→ <strong>S</strong>ocialization（共同化）→ <strong>E</strong>xternalization（表出化）→ <strong>C</strong>ombination（連結化）→ <strong>I</strong>nternalization（内面化）</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>暗暗→暗形→形形→形暗</strong>」→ S(暗→暗)→E(暗→形)→C(形→形)→I(形→暗) のサイクル</div>
  <div class="mnemo-box">🎵 <strong>語呂合わせ：</strong> 「<strong>イアアレラ</strong>」→ <strong>イ</strong>ノベーター→<strong>ア</strong>ーリーアダプター→<strong>ア</strong>ーリーマジョリティ→<strong>レ</strong>イトマジョリティ→<strong>ラ</strong>ガード</div>
  <p><strong>試験頻出：</strong> SECIモデルの4フェーズ、形式知vs暗黙知、ロジャーズの16%、バランススコアカード</p>
  <h3 class="unit-h3">確認クイズ</h3>
  <ol class="unit-list"><li>SECIモデルで「暗黙知を形式知に変換する」フェーズは？</li><li>ロジャーズのイノベーション普及曲線で、普及率が急上昇する閾値は？</li><li>スキル伝承の基本的方法は？</li></ol>
  <div class="memo-box"><span class="box-icon">📝</span><strong>解答：</strong> 1.E（表出化：Externalization） 2.16% 3.スキルを有する人と獲得したい人の共同体験</div>
  <hr class="unit-divider">
  <h2 class="unit-h2">暗記チェックリスト</h2>
  <h3 class="unit-h3">Level 1（ 最重要） <span class="star-badge star-3">★★★</span></h3>
  <ul class="unit-list"><li>[ ] 方針管理の定義、歴史3年（1958デミング、1961コマツ旗、1965ブリジストン）</li><li>[ ] 方針管理4手順（方針→目標→実施項目→期中フォロー）、目標は数値化</li><li>[ ] プロジェクトマネジメント5プロセス（立上げ→計画立案→実行→実施管理→終結）</li><li>[ ] 計画立案が最も重要、変更管理の重視</li><li>[ ] 契約3形態のリスク順（定額＜タイム＆マテリアル＜実費償還）</li><li>[ ] RFI/RFP/RFQの区別</li><li>[ ] TOC基本：部分最適≠全体最適、鎖の最弱リンク</li><li>[ ] T(スループット)＝売上−資材費、I(在庫)、OE(業務費用)の優先順</li><li>[ ] TOC 3制約（物理・市場・方針）、方針制約が最大</li><li>[ ] TOC改善5ステップ</li><li>[ ] 5つのツリー（CRT→CRD→FRT→PRT→TrT）</li><li>[ ] DBR（ドラム＝スケジュール、バッファ＝保護時間、ロープ＝投入制御）</li><li>[ ] 6σ＝100万分の3.4、モトローラ→GE</li><li>[ ] DMAIC（現状改善）とDMADV（予防設計）</li><li>[ ] BB＝1000万円以上/GB＝250万円以上、成功最重要＝トップの改革意欲</li><li>[ ] VOC、COPQ の意味</li><li>[ ] 形式知vs暗黙知、SECIモデル4フェーズ</li><li>[ ] ロジャーズの採用者5分類と16%閾値</li><li>[ ] KM推進5ステップ</li></ul>
  <h3 class="unit-h3">Level 2（ 重要） <span class="star-badge star-2">★★</span></h3>
  <ul class="unit-list"><li>[ ] 日常管理の定義</li><li>[ ] 方針管理とISO9000sの関係</li><li>[ ] クリティカル・パス法とガントチャート</li><li>[ ] 内外作の判断基準4項目</li><li>[ ] VAT分析（V型・A型・T型のDBRポイント）</li><li>[ ] CPM（ボトルネック工程分あたりのスループット）</li><li>[ ] シックスシグマの対象（部門限定ではない）</li><li>[ ] チャンピオン/BB/GBの役割</li><li>[ ] スキル管理、スキル伝承（共同体験、ワザ言語）</li><li>[ ] 調達業務のKM（自社＋サプライヤー指導）</li><li>[ ] バランススコアカード（KM評価は「学習と成長の視点」）</li></ul></div>`
      }
    ]
  },
];
