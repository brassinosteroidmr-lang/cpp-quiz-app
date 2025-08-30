// CPP Master - 教科書データ
// 全19章の完全な教科書コンテンツ

const TEXTBOOK_DATA = {
    chapters: [
        {
            id: 'ch1',
            title: '第1章 経営に貢献する調達を目指して',
            pages: [
                {
                    id: 'ch1-1',
                    title: '1.1 企業活動における調達の位置付け',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-star"></i>
                            <strong>重要ポイント</strong>
                            <p>調達は単なる購買業務ではなく、企業競争力の源泉となる戦略的機能</p>
                        </div>

                        <p>現代の調達は、サプライチェーンだけでなく、<strong>エンジニアリングチェーン</strong>の仕様決定段階から積極的に関与することによって、企業により大きな利益をもたらすことができます。</p>
                        
                        <div class="definition-note">
                            <h5>💡 専門用語解説</h5>
                            <p><strong>エンジニアリングチェーン</strong>とは、製品やサービスの企画・設計・開発から製造準備まで、技術的な価値創造を行う一連のプロセスのことです。調達部門がこの段階から参画することで、コスト効率と品質の両方を最適化できます。</p>
                        </div>

                        <div class="diagram">
                            <h4>調達の戦略的位置付け図</h4>
                            <div class="flow-chart">
                                <div class="flow-item">企業戦略</div>
                                <div class="flow-arrow">↓</div>
                                <div class="flow-item">調達戦略 ← サプライチェーン管理</div>
                                <div class="flow-arrow">↓</div>
                                <div class="flow-item">エンジニアリングチェーン → 利益創出</div>
                            </div>
                        </div>

                        <div class="case-study">
                            <i class="fas fa-lightbulb"></i>
                            <strong>実務事例</strong>
                            <p>重工業での成功事例：設計段階から調達部門が参画することで、材料選定や加工方法を最適化し、製品原価の20%削減を実現しました。このように、早期からの関与が大きな成果につながります。</p>
                        </div>
                    `
                },
                {
                    id: 'ch1-2',
                    title: '1.2 調達の業務・機能',
                    content: `
                        <div class="definition-box">
                            <h4>調達業務の定義</h4>
                            <p>「調達」とは、次の2つの業務領域を包含する広範囲な概念です：</p>
                            
                            <div class="terminology-note">
                                <p><em>※ソーシングは「戦略的調達」、パーチェシングは「実務的調達」と理解すると分かりやすいでしょう。</em></p>
                            </div>
                            <ul>
                                <li><strong>🔹 ソーシング（Sourcing）</strong>
                                    <ul>
                                        <li>調達品の仕様決定への参画</li>
                                        <li>最適なサプライヤーの選定と価格交渉</li>
                                        <li>長期的な戦略的パートナーシップの構築</li>
                                    </ul>
                                </li>
                                <li><strong>🔹 パーチェシング（Purchasing）</strong>
                                    <ul>
                                        <li>正確な発注業務の実行</li>
                                        <li>納期スケジュールの管理</li>
                                        <li>商品の受入れ・品質検収業務</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h4>調達機能の3つの主要領域</h4>
                        <p>調達業務は、次の3つの機能領域に整理されます。それぞれが相互に連携し、調達全体の効果を高めます。</p>
                        <table class="function-table">
                            <thead>
                                <tr>
                                    <th>領域</th>
                                    <th>主な機能</th>
                                    <th>重要度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>調達企画</strong></td>
                                    <td>中長期的な戦略立案、市場動向分析、サプライヤー戦略の策定</td>
                                    <td>⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td><strong>調達実施</strong></td>
                                    <td>日常的な発注業務、納期管理、品質確保、サプライヤー対応</td>
                                    <td>⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td><strong>管理・改善</strong></td>
                                    <td>実績データの分析、業務プロセスの継続改善、調達人材の育成</td>
                                    <td>⭐⭐</td>
                                </tr>
                            </tbody>
                        </table>
                    `
                },
                {
                    id: 'ch1-3',
                    title: '1.3 調達品の範囲',
                    content: `
                        <h4>📊 調達品分類表</h4>
                        <table class="procurement-items-table">
                            <thead>
                                <tr>
                                    <th>分類</th>
                                    <th>定義</th>
                                    <th>担当部署例</th>
                                    <th>調達の関与度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>①直接材</strong></td>
                                    <td>製品の一部として使用される原材料、部品</td>
                                    <td>調達部門</td>
                                    <td><span class="involvement-high">高</span></td>
                                </tr>
                                <tr>
                                    <td><strong>②仕入品</strong></td>
                                    <td>OEM・ODM製品</td>
                                    <td>営業部門</td>
                                    <td><span class="involvement-medium">中</span></td>
                                </tr>
                                <tr>
                                    <td><strong>③アフターサービス品</strong></td>
                                    <td>保守・修理用部品</td>
                                    <td>サービス部門</td>
                                    <td><span class="involvement-medium">中</span></td>
                                </tr>
                                <tr>
                                    <td><strong>④ソフトウェア</strong></td>
                                    <td>製品内蔵ソフトウェア</td>
                                    <td>調達部門・IT部門</td>
                                    <td><span class="involvement-high">高</span></td>
                                </tr>
                                <tr>
                                    <td><strong>⑤設備</strong></td>
                                    <td>生産設備、システム</td>
                                    <td>生産技術部門</td>
                                    <td><span class="involvement-high">高</span></td>
                                </tr>
                                <tr>
                                    <td><strong>⑥工事</strong></td>
                                    <td>建設工事、据付工事</td>
                                    <td>調達部門・生産技術部門</td>
                                    <td><span class="involvement-medium">中</span></td>
                                </tr>
                                <tr>
                                    <td><strong>⑦間接品</strong></td>
                                    <td>副資材、メンテナンス品、事務用品</td>
                                    <td>各部門</td>
                                    <td><span class="involvement-low">低</span></td>
                                </tr>
                                <tr>
                                    <td><strong>⑧エネルギー</strong></td>
                                    <td>電力、ガス、水道</td>
                                    <td>総務部門</td>
                                    <td><span class="involvement-low">低</span></td>
                                </tr>
                                <tr>
                                    <td><strong>⑨サービス</strong></td>
                                    <td>役務、旅費、研修</td>
                                    <td>総務部門</td>
                                    <td><span class="involvement-low">低</span></td>
                                </tr>
                                <tr>
                                    <td><strong>⑩販促品</strong></td>
                                    <td>展示品、カタログ、看板</td>
                                    <td>営業部門</td>
                                    <td><span class="involvement-low">低</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="important-point">
                            <i class="fas fa-info-circle"></i>
                            <strong>重要概念</strong>
                            <ul>
                                <li><strong>OEM</strong>: Original Equipment Manufacturing（相手先ブランドでの製造）</li>
                                <li><strong>ODM</strong>: Original Design Manufacturing（委託先ブランドでの設計・製造）</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'ch1-4',
                    title: '1.4 調達を取り巻く環境変化とその対応',
                    content: `
                        <h4>環境変化と対応戦略</h4>
                        <table class="environment-change-table">
                            <thead>
                                <tr>
                                    <th>環境変化</th>
                                    <th>具体的変化</th>
                                    <th>調達の対応方向</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>CSR意識の高まり</strong></td>
                                    <td>・環境規制強化<br>・コンプライアンス重視</td>
                                    <td>サプライヤーのCSR管理強化<br>透明性確保</td>
                                </tr>
                                <tr>
                                    <td><strong>管理範囲拡大</strong></td>
                                    <td>・間接材への注目<br>・IT活用促進</td>
                                    <td>管理対象の拡大<br>デジタル化推進</td>
                                </tr>
                                <tr>
                                    <td><strong>競争環境激化</strong></td>
                                    <td>・グローバル競争<br>・ライフサイクル短縮</td>
                                    <td>戦略的調達の高度化<br>イノベーション重視</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="trend-box">
                            <h4>📈 最新トレンド（2024-2025年）</h4>
                            <ul>
                                <li><strong>サステナブル調達</strong>: カーボンニュートラル対応</li>
                                <li><strong>デジタル調達</strong>: AI・IoT活用による効率化</li>
                                <li><strong>レジリエンス強化</strong>: サプライチェーンリスク対応</li>
                                <li><strong>サーキュラーエコノミー</strong>: 循環経済への対応</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'ch1-5',
                    title: '1.5 これからの調達の役割と業務領域',
                    content: `
                        <div class="evolution-diagram">
                            <h4>調達の進化</h4>
                            <div class="evolution-container">
                                <div class="evolution-before">
                                    <h5>従来の調達</h5>
                                    <ul>
                                        <li>コスト削減重視</li>
                                        <li>単純な購買業務</li>
                                        <li>受動的対応</li>
                                        <li>短期的視点</li>
                                    </ul>
                                </div>
                                <div class="evolution-arrow">→</div>
                                <div class="evolution-after">
                                    <h5>戦略的調達</h5>
                                    <ul>
                                        <li>価値創造</li>
                                        <li>イノベーション創出</li>
                                        <li>戦略パートナーシップ</li>
                                        <li>プロアクティブ対応</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h4>拡大する調達の役割</h4>
                        <div class="role-expansion">
                            <div class="role-item">
                                <div class="role-icon">🤝</div>
                                <div class="role-content">
                                    <h5>1. 戦略的パートナーとしての役割</h5>
                                    <p>経営陣と連携し、企業戦略実現のための調達戦略を立案・実行</p>
                                </div>
                            </div>
                            <div class="role-item">
                                <div class="role-icon">💡</div>
                                <div class="role-content">
                                    <h5>2. イノベーション創出の促進役</h5>
                                    <p>サプライヤーとの協業により、新技術・新製品の開発を推進</p>
                                </div>
                            </div>
                            <div class="role-item">
                                <div class="role-icon">🛡️</div>
                                <div class="role-content">
                                    <h5>3. サプライチェーンリスクマネジメント</h5>
                                    <p>リスク分析・対策により、安定した事業運営を支援</p>
                                </div>
                            </div>
                            <div class="role-item">
                                <div class="role-icon">🌱</div>
                                <div class="role-content">
                                    <h5>4. サステナビリティの推進</h5>
                                    <p>環境・社会責任を考慮した持続可能な調達活動を実践</p>
                                </div>
                            </div>
                        </div>

                        <div class="case-study">
                            <i class="fas fa-chart-line"></i>
                            <strong>成功企業の事例</strong>
                            <p>トヨタ自動車: サプライヤーとの長期パートナーシップにより、継続的改善（カイゼン）を実現。調達コストの削減と品質向上を同時に達成し、競争優位性を確立。</p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch2',
            title: '第2章 調達競争力強化の方向性',
            pages: [
                {
                    id: 'ch2-1',
                    title: '2.1 調達の抱える現状課題',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>現状課題の7つの観点</strong>
                            <p>現代の調達部門が直面する主要な課題を体系的に整理しました。各課題は相互に関連しており、包括的な対策が必要です。</p>
                        </div>

                        <table class="issues-table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>課題</th>
                                    <th>影響度</th>
                                    <th>対策の緊急度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><strong>戦略的調達機能の体制脆弱性</strong><br><small>組織全体での戦略的思考と体制構築の不足</small></td>
                                    <td><span class="impact-high">高</span></td>
                                    <td><span class="urgency-high">高</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><strong>調達品・仕様の上流決定</strong><br><small>設計段階での調達部門の関与不足による機会損失</small></td>
                                    <td><span class="impact-high">高</span></td>
                                    <td><span class="urgency-high">高</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><strong>開発購買の発展途上</strong></td>
                                    <td><span class="impact-medium">中</span></td>
                                    <td><span class="urgency-medium">中</span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><strong>サプライヤー固定化</strong></td>
                                    <td><span class="impact-high">高</span></td>
                                    <td><span class="urgency-high">高</span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><strong>価格査定力の不足</strong></td>
                                    <td><span class="impact-high">高</span></td>
                                    <td><span class="urgency-medium">中</span></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><strong>調達スキル向上体制未整備</strong></td>
                                    <td><span class="impact-medium">中</span></td>
                                    <td><span class="urgency-medium">中</span></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><strong>調達情報管理体制不備</strong></td>
                                    <td><span class="impact-medium">中</span></td>
                                    <td><span class="urgency-low">低</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="detailed-analysis">
                            <h4>📈 課題の詳細分析</h4>
                            <div class="analysis-item">
                                <h5>1. 戦略的調達機能の体制脆弱性</h5>
                                <p>多くの企業で調達部門は事務的な購買業務に留まり、経営戦略への参画が限定的です。</p>
                                <ul>
                                    <li>調達部門の経営層への影響力不足</li>
                                    <li>重要な意思決定プロセスからの疎外</li>
                                    <li>戦略実行に必要な人員・予算の不足</li>
                                    <li>戦略的思考力を持つ専門人材の育成不足</li>
                                </ul>
                            </div>
                            <div class="analysis-item">
                                <h5>2. 調達品・仕様の上流決定</h5>
                                <p>設計・開発段階での調達部門の関与が不十分で、コスト最適化の機会を逃している状況です。</p>
                                <ul>
                                    <li>設計部門が技術優先で仕様を決定し、調達コストを考慮しない</li>
                                    <li>調達部門が仕様決定後に参画するため、提案機会が限定的</li>
                                    <li>早期段階でのコスト削減・最適化機会の逸失</li>
                                    <li>サプライヤーの技術的知見や改善提案の活用不足</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'ch2-2',
                    title: '2.2 調達競争力強化の方向性と改革フレームワーク',
                    content: `
                        <div class="framework-overview">
                            <h4>🎯 調達競争力強化の3つの要素</h4>
                            <p>調達競争力を向上させるために、以下3つの要素を体系的に強化する必要があります。これらは相互に連携し、総合的な調達力向上を実現します。</p>
                            
                            <div class="strength-elements">
                                <div class="element-card">
                                    <div class="element-number">①</div>
                                    <div class="element-content">
                                        <h5>競争環境構築力</h5>
                                        <p>市場競争を活用した調達力強化</p>
                                        <ul>
                                            <li>グローバル市場からの情報収集・分析</li>
                                            <li>新規サプライヤー・技術の積極的な発掘</li>
                                            <li>競争原理を活用した価格・品質向上</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="element-card">
                                    <div class="element-number">②</div>
                                    <div class="element-content">
                                        <h5>購買評価・実行力</h5>
                                        <p>精度高い評価と確実な実行による成果創出</p>
                                        <ul>
                                            <li>競争力のあるQCD（品質・コスト・納期）査定</li>
                                            <li>目標達成のための具体的施策立案・実行</li>
                                            <li>詳細な原価分析による価格妥当性判断</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="element-card">
                                    <div class="element-number">③</div>
                                    <div class="element-content">
                                        <h5>調達基盤</h5>
                                        <p>持続的な調達力向上を支える組織基盤</p>
                                        <ul>
                                            <li>中長期視点での調達企画機能の強化</li>
                                            <li>戦略実行に適した調達組織・体制の整備</li>
                                            <li>PDCAサイクルに基づくマネジメントプロセスの徹底</li>
                                            <li>効率性と品質を両立する調達プロセスの標準化</li>
                                            <li>意思決定を支援する調達情報管理システムの構築</li>
                                            <li>継続的な調達スキル向上を実現する教育体制の整備</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="framework-diagram">
                            <h4>改革フレームワーク図</h4>
                            <div class="framework-visual">
                                <div class="framework-top">
                                    <div class="strategy-box">
                                        <h5>調達戦略</h5>
                                        <div class="strategy-content">
                                            <div class="strategy-left">競争環境構築力</div>
                                            <div class="strategy-multiply">×</div>
                                            <div class="strategy-right">購買評価・実行力</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="framework-arrow">↑</div>
                                <div class="framework-bottom">
                                    <div class="foundation-box">
                                        <h5>調達基盤</h5>
                                        <div class="foundation-items">
                                            <div class="foundation-item">調達企画機能強化</div>
                                            <div class="foundation-item">組織体制整備</div>
                                            <div class="foundation-item">プロセス徹底</div>
                                            <div class="foundation-item">プロセス標準化</div>
                                            <div class="foundation-item">情報管理構築</div>
                                            <div class="foundation-item">スキル向上</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-key"></i>
                            <strong>成功のカギ</strong>
                            <p>「競争環境構築力」と「購買評価・実行力」の向上が「調達戦略」のレベルアップにつながり、それを支えるのが「調達基盤」です。戦略と基盤の2面で施策を立てることが重要です。</p>
                        </div>
                    `
                },
                {
                    id: 'ch2-3',
                    title: '2.3 競争環境構築力と購買評価・実行力',
                    content: `
                        <div class="capability-analysis">
                            <h4>💪 競争環境構築力の構成要素</h4>
                            
                            <div class="capability-grid">
                                <div class="capability-item">
                                    <div class="capability-icon">🌐</div>
                                    <div class="capability-content">
                                        <h5>市場情報収集力</h5>
                                        <ul>
                                            <li>グローバル市場動向の把握</li>
                                            <li>技術トレンドの先取り</li>
                                            <li>新興市場の開拓</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="capability-item">
                                    <div class="capability-icon">🔍</div>
                                    <div class="capability-content">
                                        <h5>サプライヤー開拓力</h5>
                                        <ul>
                                            <li>新規サプライヤーの発掘</li>
                                            <li>代替技術の評価</li>
                                            <li>パートナーシップ構築</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="capability-item">
                                    <div class="capability-icon">⚔️</div>
                                    <div class="capability-content">
                                        <h5>競争原理活用力</h5>
                                        <ul>
                                            <li>入札制度の活用</li>
                                            <li>ベンチマーキング実施</li>
                                            <li>競争環境の維持・創出</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="capability-analysis">
                            <h4>⚡ 購買評価・実行力の構成要素</h4>
                            
                            <div class="capability-grid">
                                <div class="capability-item">
                                    <div class="capability-icon">💰</div>
                                    <div class="capability-content">
                                        <h5>価格査定力</h5>
                                        <ul>
                                            <li>原価分析技術</li>
                                            <li>見積評価スキル</li>
                                            <li>市場価格動向把握</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="capability-item">
                                    <div class="capability-icon">🤝</div>
                                    <div class="capability-content">
                                        <h5>交渉・実行力</h5>
                                        <ul>
                                            <li>戦略的交渉術</li>
                                            <li>Win-Winの関係構築</li>
                                            <li>契約・実行管理</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="capability-item">
                                    <div class="capability-icon">📊</div>
                                    <div class="capability-content">
                                        <h5>QCD総合評価力</h5>
                                        <ul>
                                            <li>品質評価基準</li>
                                            <li>コスト分析手法</li>
                                            <li>納期管理システム</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="case-study">
                            <i class="fas fa-trophy"></i>
                            <strong>ベストプラクティス</strong>
                            <p>製造業A社では、グローバルサプライヤーデータベースを構築し、新規サプライヤーの開拓を体系化。競争環境を維持しながら、コスト20%削減を達成。同時に品質向上も実現し、顧客満足度が向上した。</p>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch3',
            title: '第3章 調達企画機能の強化',
            pages: [
                {
                    id: 'ch3-1',
                    title: '3.1 調達企画の役割',
                    content: `
                        <div class="definition-box">
                            <h4>調達企画とは</h4>
                            <p>会社方針・事業方針に基づいて、より高いレベルのQCD（品質・コスト・納期）とその安定調達を実現することを目指し、調達機能の現状における短期及び中長期の課題を整理して、以下の3つの活動を体系的に行うことです：</p>
                            <ul>
                                <li><strong>目標展開</strong>：具体的で測定可能な目標の設定</li>
                                <li><strong>戦略立案</strong>：目標達成のための戦略・施策の策定</li>
                                <li><strong>実行マネジメント</strong>：継続的な実行・改善プロセス</li>
                            </ul>
                        </div>

                        <table class="role-table">
                            <thead>
                                <tr>
                                    <th>役割</th>
                                    <th>内容</th>
                                    <th>重要ポイント</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>① 目標展開</strong></td>
                                    <td>経営目標と連動した部門目標の実現に向けて、対象範囲を明確化し、仮説に基づいて個別目標（調達品目・サプライヤー・調達基盤）を具体的に設定します。</td>
                                    <td>トップダウンで具体的な数値目標を設定<br><strong>例：</strong>新商品目標原価20%減、現行品コストダウン年間15%減</td>
                                </tr>
                                <tr>
                                    <td><strong>② 調達戦略立案</strong></td>
                                    <td>調達品の特性（調達特性、仕様特性等）を詳細に分析し、最適な調達戦略を立案します。現状分析から課題を特定し、効果的な改善策を策定します。</td>
                                    <td><strong>基本手順：</strong><br>1. 調達特性と仕様特性の詳細把握<br>2. 改善要素の特定（買い方、作り方、仕様、調達政策）<br>3. ボトルネック解消のための調達基盤強化</td>
                                </tr>
                                <tr>
                                    <td><strong>③ 実行マネジメント</strong></td>
                                    <td>グローバル調達市場から幅広く情報を収集し、精度の高い査定によって施策効果を見積もります。仮説検証を行いながら、必要に応じて迅速な施策の変更・追加を実施します。</td>
                                    <td>PDCAサイクルの高速回転によりスピーディーな改善を実現<br>データに基づく客観的な意思決定</td>
                                </tr>
                            </tbody>
                        </table>
                    `
                },
                {
                    id: 'ch3-2',
                    title: '3.2 調達戦略の方向性と視点',
                    content: `
                        <div class="strategy-formula">
                            <h4>調達戦略の基本公式</h4>
                            <p>調達戦略の目標は「価値（Value）」の最大化です。これは機能をコストで割った比率で表現されます。</p>
                            <div class="formula-box">
                                <div class="formula">
                                    調達戦略に求められるもの「V（価値）」 = <span class="fraction"><span class="numerator">実現される機能「F」</span><span class="denominator">ライフサイクルコスト「C」</span></span>
                                </div>
                                <p class="formula-note">※ VE（Value Engineering）の考え方に基づく価値最大化アプローチ</p>
                                <p class="formula-explanation">価値を向上させるには、<strong>機能を高める</strong>か<strong>コストを下げる</strong>かの2つの方向性があります。</p>
                            </div>
                        </div>

                        <div class="strategy-approaches">
                            <h4>「C」最適コストの追求 - 4つの戦略的切り口</h4>
                            <p>コスト最適化を実現するため、以下4つの切り口から体系的にアプローチします。各切り口は独立して実行することも、組み合わせて相乗効果を狙うことも可能です。</p>
                            <div class="approach-grid">
                                <div class="approach-card">
                                    <div class="approach-number">①</div>
                                    <div class="approach-content">
                                        <h5>調達政策</h5>
                                        <p class="approach-desc">既存の調達構造を根本的に見直し、大きく変更する戦略的施策</p>
                                        <ul class="approach-examples">
                                            <li>サプライヤーポートフォリオの再編成</li>
                                            <li>国内・海外調達の最適配分</li>
                                            <li>メーカー直取引による商流簡素化</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="approach-card">
                                    <div class="approach-number">②</div>
                                    <div class="approach-content">
                                        <h5>仕様</h5>
                                        <p class="approach-desc">設計仕様の見直しや変更によるコスト最適化施策</p>
                                        <ul class="approach-examples">
                                            <li>VE（Value Engineering）による機能・コスト最適化</li>
                                            <li>部品品種統合（VR: Variety Reduction）</li>
                                            <li>新技術・工法の採用による効率化</li>
                                            <li>標準品・汎用品の積極活用</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="approach-card">
                                    <div class="approach-number">③</div>
                                    <div class="approach-content">
                                        <h5>買い方</h5>
                                        <p class="approach-desc">サプライヤー選定や価格決定プロセスの改善による効率化施策</p>
                                        <ul class="approach-examples">
                                            <li>サプライヤー選定・管理方式の最適化</li>
                                            <li>価格査定方式の高度化</li>
                                            <li>戦略的な価格交渉方式の導入</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="approach-card">
                                    <div class="approach-number">④</div>
                                    <div class="approach-content">
                                        <h5>作り方</h5>
                                        <p class="approach-desc">モノづくりプロセスの変更による施策</p>
                                        <ul class="approach-examples">
                                            <li>内外作編成</li>
                                            <li>納入条件</li>
                                            <li>生産プロセス改善</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        // 第4章から第19章を追加
        {
            id: 'ch4',
            title: '第4章 調達組織・体制の整備',
            pages: [
                {
                    id: 'ch4-1',
                    title: '4.1 調達権限の確立',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-key"></i>
                            <strong>調達権限確立の重要性</strong>
                            <p>調達部門が実力を向上させ、適切な権限を確立することによって、製品競争力の強化と企業価値の向上を実現できます。権限と責任の明確化が成功の鍵となります。</p>
                        </div>

                        <h4>調達部門が持つべき権限</h4>
                        <div class="authority-grid">
                            <div class="authority-item">
                                <h5>🎯 仕様決定権</h5>
                                <p>製品仕様の決定プロセスへの積極的参画権限</p>
                                <ul>
                                    <li>設計初期段階からの継続的関与</li>
                                    <li>技術的・経済的観点からの代替案提案権</li>
                                    <li>コスト効率性を重視した仕様の最適化提案</li>
                                </ul>
                            </div>
                            <div class="authority-item">
                                <h5>🏢 サプライヤー選定権</h5>
                                <p>最適なサプライヤーを選定する権限</p>
                                <ul>
                                    <li>サプライヤー評価基準策定</li>
                                    <li>新規サプライヤー開拓</li>
                                    <li>取引継続可否の判断</li>
                                </ul>
                            </div>
                            <div class="authority-item">
                                <h5>💰 価格決定権</h5>
                                <p>適正価格での調達実現権限</p>
                                <ul>
                                    <li>価格査定・交渉</li>
                                    <li>契約条件決定</li>
                                    <li>価格改善要求</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'ch4-2',
                    title: '4.2 調達最高責任者（CPO）の役割',
                    content: `
                        <div class="definition-box">
                            <h4>CPO（Chief Procurement Officer：調達最高責任者）とは</h4>
                            <p>調達部門が企業経営に真に貢献するため、経営者としての視点で必要な意思決定をタイムリーに行い、調達現場の活動を戦略的にサポートする体制を整備する役割を担う最高責任者です。</p>
                            <p class="definition-note">現代企業では、調達がコストセンターから利益創出部門へと役割転換する中で、CPOの重要性が急速に高まっています。</p>
                        </div>

                        <div class="cpo-roles">
                            <h4>CPOの主要役割</h4>
                            <div class="role-grid">
                                <div class="role-card">
                                    <div class="role-icon">📈</div>
                                    <div class="role-content">
                                        <h5>戦略立案</h5>
                                        <ul>
                                            <li>調達戦略の策定・実行</li>
                                            <li>経営戦略との整合</li>
                                            <li>中長期ロードマップ作成</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="role-card">
                                    <div class="role-icon">👥</div>
                                    <div class="role-content">
                                        <h5>組織運営</h5>
                                        <ul>
                                            <li>調達組織の最適化</li>
                                            <li>人材育成・配置</li>
                                            <li>業績評価・改善</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="role-card">
                                    <div class="role-icon">🤝</div>
                                    <div class="role-content">
                                        <h5>ステークホルダー管理</h5>
                                        <ul>
                                            <li>経営陣との連携</li>
                                            <li>他部門との調整</li>
                                            <li>サプライヤー関係構築</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="role-card">
                                    <div class="role-icon">⚡</div>
                                    <div class="role-content">
                                        <h5>変革推進</h5>
                                        <ul>
                                            <li>デジタル化推進</li>
                                            <li>プロセス改革</li>
                                            <li>イノベーション創出</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch5',
            title: '第5章 マネジメントプロセスの徹底',
            pages: [
                {
                    id: 'ch5-1',
                    title: '5.1 調達マネジメントプロセスの体系化',
                    content: `
                        <p>効果的な調達活動を実現するためには、体系化されたマネジメントプロセスの構築が不可欠です。本節では、PDCA（Plan-Do-Check-Action）サイクルを基軸とした調達マネジメントの体系的なアプローチについて解説します。</p>
                        
                        <div class="process-overview">
                            <h4>PDCAサイクルによる調達マネジメント体系</h4>
                            <p>調達マネジメントにおけるPDCAサイクルは、継続的な改善と最適化を実現するための基本的なフレームワークです。以下の4つのフェーズを通じて、組織的かつ効率的な調達活動を推進します。</p>
                            
                            <div class="pdca-diagram">
                                <div class="pdca-item plan">
                                    <div class="pdca-letter">P</div>
                                    <div class="pdca-content">
                                        <h5>Plan（計画フェーズ）</h5>
                                        <ul>
                                            <li><strong>戦略目標の設定</strong>：コスト削減率、品質向上目標、納期短縮目標など</li>
                                            <li><strong>調達戦略の立案</strong>：ソーシング戦略、サプライヤー戦略、リスク管理戦略</li>
                                            <li><strong>具体的施策計画</strong>：年間調達計画、予算計画、プロジェクト計画の策定</li>
                                            <li><strong>KPI・指標設定</strong>：測定可能な成果指標とモニタリング体制の構築</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pdca-item do">
                                    <div class="pdca-letter">D</div>
                                    <div class="pdca-content">
                                        <h5>Do（実行フェーズ）</h5>
                                        <ul>
                                            <li><strong>戦略的施策の実行</strong>：サプライヤー開発、交渉、契約締結の実施</li>
                                            <li><strong>日常的調達業務</strong>：発注管理、納期管理、品質管理の継続実行</li>
                                            <li><strong>データ収集・蓄積</strong>：実績データ、市場情報、パフォーマンスデータの体系的収集</li>
                                            <li><strong>プロセス標準化</strong>：ベストプラクティスの展開と業務手順の標準化</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pdca-item check">
                                    <div class="pdca-letter">C</div>
                                    <div class="pdca-content">
                                        <h5>Check（評価・検証フェーズ）</h5>
                                        <ul>
                                            <li><strong>実績測定・分析</strong>：KPI達成状況、コスト削減効果、品質向上効果の定量評価</li>
                                            <li><strong>多角的な分析評価</strong>：財務的効果、戦略的効果、リスク影響度の総合評価</li>
                                            <li><strong>課題・問題の抽出</strong>：目標未達要因、プロセス上の問題点の特定</li>
                                            <li><strong>成功要因の分析</strong>：好成果要因の特定と横展開可能性の検討</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pdca-item action">
                                    <div class="pdca-letter">A</div>
                                    <div class="pdca-content">
                                        <h5>Action（改善・標準化フェーズ）</h5>
                                        <ul>
                                            <li><strong>改善策の立案・実行</strong>：問題解決策の策定と実装</li>
                                            <li><strong>成功事例の標準化</strong>：ベストプラクティスのマニュアル化と組織展開</li>
                                            <li><strong>次期計画への反映</strong>：学習成果を次期戦略・計画に組み込み</li>
                                            <li><strong>組織学習の促進</strong>：知識・ノウハウの組織内共有と人材育成</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>PDCA高速回転による調達力向上のポイント</strong>
                            <p>調達組織の競争力向上には、PDCAサイクルの高速回転が重要です。以下の要点を押さえることで、継続的な改善サイクルを実現できます。</p>
                            <ol>
                                <li><strong>「Plan（計画）」フェーズでの精度向上</strong>
                                    <ul>
                                        <li>具体的で測定可能な目標設定（SMART原則の活用）</li>
                                        <li>市場分析に基づく現実的な戦略立案</li>
                                        <li>リスクを考慮した実行計画の策定</li>
                                    </ul>
                                </li>
                                <li><strong>「Check（評価）」フェーズでの継続的モニタリング</strong>
                                    <ul>
                                        <li>リアルタイムでの進捗把握システムの構築</li>
                                        <li>定期的な成果測定と分析の実施</li>
                                        <li>早期警告システムによる問題の事前察知</li>
                                    </ul>
                                </li>
                                <li><strong>組織全体でのPDCA文化の醸成</strong>
                                    <ul>
                                        <li>全社員への改善マインドの浸透</li>
                                        <li>失敗を学習機会と捉える組織風土の構築</li>
                                        <li>改善提案を評価・実行する仕組みづくり</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        
                        <div class="case-study">
                            <h4>実践事例：製造業A社のPDCAマネジメント導入</h4>
                            <p>製造業A社では、従来の場当たり的な調達管理から脱却するため、体系的なPDCAマネジメントを導入しました。</p>
                            
                            <div class="example-timeline">
                                <div class="timeline-item">
                                    <div class="timeline-phase">Plan</div>
                                    <div class="timeline-content">
                                        <strong>計画策定（1-2月）</strong>：年間コスト削減目標15%設定、重点品目の特定、サプライヤー評価基準の策定
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-phase">Do</div>
                                    <div class="timeline-content">
                                        <strong>施策実行（3-8月）</strong>：サプライヤー統合による規模効果追求、新規サプライヤー開発、価格交渉の実施
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-phase">Check</div>
                                    <div class="timeline-content">
                                        <strong>中間評価（9月）</strong>：上半期実績分析により12%のコスト削減を確認、課題品目の特定
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-phase">Action</div>
                                    <div class="timeline-content">
                                        <strong>改善実行（10-12月）</strong>：課題品目への追加施策実施、成功事例の他品目展開により最終的に18%削減を達成
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch6',
            title: '第6章 調達プロセスの標準化',
            pages: [
                {
                    id: 'ch6-1',
                    title: '6.1 調達プロセスの体系化と標準化',
                    content: `
                        <p>効率的な調達活動を実現するためには、組織全体で統一された調達プロセスの標準化が不可欠です。本節では、調達における意思決定の階層構造と、各レベルでの標準化アプローチについて詳しく解説します。</p>
                        
                        <div class="process-hierarchy">
                            <h4>調達プロセスの階層的意思決定体系</h4>
                            <p>調達における意思決定は、戦略性と影響度に応じて階層化されており、各レベルで適切な判断基準と手順の標準化が必要です。以下の6段階の決定プロセスを通じて、体系的な調達管理を実現します。</p>
                            
                            <div class="decision-levels">
                                <div class="level-item strategic">
                                    <h5>戦略レベル（Strategic Level）</h5>
                                    <div class="level-content">
                                        <div class="decision-item">
                                            <strong>1次決定：製品レベルでの内外製造決定（Make or Buy）</strong>
                                            <p>企業の中核技術・競争優位性を考慮した製品全体の内製・外製判断</p>
                                            <ul>
                                                <li><strong>判断基準</strong>：コア技術の有無、戦略的重要性、投資効率</li>
                                                <li><strong>関与部門</strong>：経営陣、事業部門、技術部門、調達部門</li>
                                                <li><strong>決定頻度</strong>：新製品開発時、事業戦略見直し時</li>
                                            </ul>
                                        </div>
                                        <div class="decision-item">
                                            <strong>2次決定：開発・設計レベルでの内外製造決定</strong>
                                            <p>設計・開発工程における各機能・モジュール単位での内製・外製判断</p>
                                            <ul>
                                                <li><strong>判断基準</strong>：設計ノウハウ、開発リソース、技術的難易度</li>
                                                <li><strong>関与部門</strong>：設計・開発部門、技術部門、調達部門</li>
                                                <li><strong>決定頻度</strong>：製品設計段階、設計変更時</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="level-item tactical">
                                    <h5>戦術レベル（Tactical Level）</h5>
                                    <div class="level-content">
                                        <div class="decision-item">
                                            <strong>3次決定：部品単位での内外製造・仕様決定</strong>
                                            <p>個別部品レベルでの製造方法と技術仕様の決定</p>
                                            <ul>
                                                <li><strong>判断基準</strong>：コスト効率性、品質要求、生産能力</li>
                                                <li><strong>関与部門</strong>：調達部門、製造部門、品質管理部門</li>
                                                <li><strong>決定頻度</strong>：部品設計確定時、仕様変更時</li>
                                            </ul>
                                        </div>
                                        <div class="decision-item">
                                            <strong>4次決定：サプライヤー選定・決定</strong>
                                            <p>外製部品・サービスの供給者選定と契約関係の構築</p>
                                            <ul>
                                                <li><strong>判断基準</strong>：総合評価（Q・C・D・S）、リスク評価、戦略適合性</li>
                                                <li><strong>関与部門</strong>：調達部門、品質管理部門、技術部門</li>
                                                <li><strong>決定頻度</strong>：新規調達時、既存契約見直し時</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="level-item operational">
                                    <h5>実行レベル（Operational Level）</h5>
                                    <div class="level-content">
                                        <div class="decision-item">
                                            <strong>5次決定：調達条件決定</strong>
                                            <p>具体的な取引条件（納期、数量、品質基準等）の設定</p>
                                            <ul>
                                                <li><strong>判断基準</strong>：生産計画、在庫水準、市場状況</li>
                                                <li><strong>関与部門</strong>：調達部門、生産管理部門、営業部門</li>
                                                <li><strong>決定頻度</strong>：月次・週次の調達計画立案時</li>
                                            </ul>
                                        </div>
                                        <div class="decision-item">
                                            <strong>6次決定：調達価格決定・契約締結</strong>
                                            <p>最終的な取引価格の決定と発注・契約の実行</p>
                                            <ul>
                                                <li><strong>判断基準</strong>：市場価格、交渉結果、予算制約</li>
                                                <li><strong>関与部門</strong>：調達部門、経理部門、法務部門</li>
                                                <li><strong>決定頻度</strong>：日次・週次の発注業務</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="process-standardization">
                            <h4>調達プロセス標準化の重要な要素</h4>
                            <p>調達プロセスの標準化を効果的に進めるためには、以下の要素を体系的に整備する必要があります。</p>
                            
                            <div class="standardization-elements">
                                <div class="element-item">
                                    <h5><i class="fas fa-clipboard-list"></i> 手順書・マニュアルの整備</h5>
                                    <ul>
                                        <li>各決定レベルでの標準作業手順（SOP：Standard Operating Procedure）の策定</li>
                                        <li>判断基準とチェックポイントの明文化</li>
                                        <li>例外処理・エスカレーション手順の規定</li>
                                    </ul>
                                </div>
                                
                                <div class="element-item">
                                    <h5><i class="fas fa-users"></i> 役割・責任の明確化</h5>
                                    <ul>
                                        <li>RACI（Responsible, Accountable, Consulted, Informed）マトリックスの作成</li>
                                        <li>承認権限と決裁レベルの設定</li>
                                        <li>関係部門間の連携体制の構築</li>
                                    </ul>
                                </div>
                                
                                <div class="element-item">
                                    <h5><i class="fas fa-chart-bar"></i> KPI・測定指標の設定</h5>
                                    <ul>
                                        <li>各プロセスでの成果測定指標の定義</li>
                                        <li>品質・コスト・納期・サービス（QCDS）の定量評価</li>
                                        <li>継続的改善のためのベンチマーク設定</li>
                                    </ul>
                                </div>
                                
                                <div class="element-item">
                                    <h5><i class="fas fa-cog"></i> システム・ツールの統一</h5>
                                    <ul>
                                        <li>調達管理システム（ERP、e-Procurement）の標準化</li>
                                        <li>データフォーマット・入力基準の統一</li>
                                        <li>承認ワークフロー・電子決裁の仕組み構築</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-triangle-exclamation"></i>
                            <strong>プロセス標準化における重要な原則</strong>
                            <div class="principles-list">
                                <ol>
                                    <li><strong>階層性の原則</strong>：上位レベルの意思決定ほど戦略的要素が強く、企業業績への影響が大きいため、より慎重かつ包括的な検討が必要です。</li>
                                    <li><strong>一貫性の原則</strong>：同じレベルの決定は、組織全体で統一された基準と手順により行われる必要があります。</li>
                                    <li><strong>透明性の原則</strong>：すべてのプロセスで意思決定の根拠と結果が明確に記録され、追跡可能でなければなりません。</li>
                                    <li><strong>柔軟性の原則</strong>：標準化と同時に、市場環境や事業状況の変化に対応できる柔軟性を保つ必要があります。</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="case-study">
                            <h4>実践事例：電子機器メーカーB社の調達プロセス標準化</h4>
                            <p>電子機器メーカーB社では、グローバル展開に伴い調達プロセスの標準化を実施し、大幅な効率向上を実現しました。</p>
                            
                            <div class="implementation-steps">
                                <div class="step-item">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h6>現状分析・課題抽出</h6>
                                        <p>地域別に異なる調達プロセスを調査し、統一化による効果を試算（調達コスト20%削減、処理時間50%短縮の見込み）</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h6>標準プロセス設計</h6>
                                        <p>6段階の意思決定プロセスを定義し、各段階での承認権限・判断基準・必要書類を標準化</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h6>システム統合・導入</h6>
                                        <p>グローバル統一の調達管理システムを導入し、標準化されたワークフローを実装</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-number">4</div>
                                    <div class="step-content">
                                        <h6>成果と継続改善</h6>
                                        <p>標準化により調達コスト18%削減、処理時間45%短縮を達成。継続的な改善により更なる効果を追求中</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch7',
            title: '第7章 調達情報管理の仕組み構築',
            pages: [
                {
                    id: 'ch7-1',
                    title: '7.1 調達情報管理の重要性と体系化',
                    content: `
                        <p>現代の調達活動において、情報は最も重要な戦略的資源の一つです。市場の複雑化、グローバル化、技術革新の加速化などの環境変化により、調達部門は膨大な情報を効率的に収集・管理・活用することが求められています。本章では、競争優位性を実現する調達情報管理の体系的なアプローチについて解説します。</p>
                        
                        <div class="info-importance">
                            <h4>調達部門の情報ハブ機能</h4>
                            <p>調達部門は企業の中で「情報を扱う専門部門」として位置付けられます。競争力のある条件で調達を実現するためには、多岐にわたる情報の収集・分析・活用が必須であり、これらの情報を体系的に管理する仕組みの構築が成功の鍵となります。</p>
                            
                            <div class="key-concepts">
                                <div class="concept-item">
                                    <h6><i class="fas fa-database"></i> 情報の一元化（Centralization）</h6>
                                    <p>散在する調達関連情報を統合データベースに集約し、重複や不整合を排除して信頼性の高い情報基盤を構築</p>
                                </div>
                                <div class="concept-item">
                                    <h6><i class="fas fa-share-alt"></i> 情報の共有化（Sharing）</h6>
                                    <p>適切なアクセス権限管理のもとで関係者間での情報共有を促進し、組織全体の意思決定精度を向上</p>
                                </div>
                                <div class="concept-item">
                                    <h6><i class="fas fa-chart-line"></i> 情報の活用促進（Utilization）</h6>
                                    <p>収集した情報を戦略的意思決定や日常業務に効果的に活用できる仕組みとツールの整備</p>
                                </div>
                            </div>
                        </div>

                        <div class="information-categories">
                            <h4>調達情報管理の5つの主要カテゴリー</h4>
                            <p>調達活動で取り扱う情報は、その目的と性質に応じて以下の5つのカテゴリーに分類され、それぞれ異なる管理手法とシステムが必要です。</p>
                            
                            <table class="info-management-table">
                                <thead>
                                    <tr>
                                        <th style="width: 25%">情報カテゴリー</th>
                                        <th style="width: 35%">具体的な情報内容</th>
                                        <th style="width: 25%">主要な活用目的</th>
                                        <th style="width: 15%">更新頻度</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>①CR推進管理情報</strong><br><small>Cost Reduction Management</small></td>
                                        <td>
                                            <ul>
                                                <li>CR実績データ・削減金額</li>
                                                <li>CR視点表・分析結果</li>
                                                <li>CRアクションプラン</li>
                                                <li>交渉戦略メモ・結果記録</li>
                                                <li>ベンチマークデータ</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>コスト削減活動の推進・管理</li>
                                                <li>目標達成度の測定・評価</li>
                                                <li>改善施策の立案・実行</li>
                                            </ul>
                                        </td>
                                        <td>月次<br>週次</td>
                                    </tr>
                                    <tr>
                                        <td><strong>②調達価格関連情報</strong><br><small>Pricing & Cost Analysis</small></td>
                                        <td>
                                            <ul>
                                                <li>スペンドアナリシスデータ</li>
                                                <li>価格査定支援データ</li>
                                                <li>コストテーブル・原価構造</li>
                                                <li>市場価格動向・指数</li>
                                                <li>競合価格情報</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>価格妥当性の分析・検証</li>
                                                <li>交渉力の強化・根拠構築</li>
                                                <li>予算策定・価格予測</li>
                                            </ul>
                                        </td>
                                        <td>日次<br>リアルタイム</td>
                                    </tr>
                                    <tr>
                                        <td><strong>③サプライヤー情報</strong><br><small>Supplier Intelligence</small></td>
                                        <td>
                                            <ul>
                                                <li>企業基本情報・財務状況</li>
                                                <li>技術力・生産能力評価</li>
                                                <li>品質・納期実績データ</li>
                                                <li>代替サプライヤー情報</li>
                                                <li>リスク評価・監視情報</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>サプライヤー選定・評価</li>
                                                <li>リスク管理・早期警告</li>
                                                <li>関係強化・開発支援</li>
                                            </ul>
                                        </td>
                                        <td>四半期<br>随時</td>
                                    </tr>
                                    <tr>
                                        <td><strong>④部品・仕様情報</strong><br><small>Component & Specification</small></td>
                                        <td>
                                            <ul>
                                                <li>戦略部品互換表・代替品情報</li>
                                                <li>仕様検索データベース</li>
                                                <li>仕様シミュレーションツール</li>
                                                <li>標準化・共通化データ</li>
                                                <li>技術ロードマップ</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>最適仕様の選定支援</li>
                                                <li>標準化・共通化推進</li>
                                                <li>設計支援・コスト最適化</li>
                                            </ul>
                                        </td>
                                        <td>月次<br>プロジェクト単位</td>
                                    </tr>
                                    <tr>
                                        <td><strong>⑤市場動向・戦略情報</strong><br><small>Market Intelligence</small></td>
                                        <td>
                                            <ul>
                                                <li>業界動向・競合分析</li>
                                                <li>市況・価格動向情報</li>
                                                <li>技術トレンド・イノベーション</li>
                                                <li>規制・政策動向</li>
                                                <li>地政学的リスク情報</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>中長期戦略の立案</li>
                                                <li>リスク管理・対策策定</li>
                                                <li>機会発見・先行投資判断</li>
                                            </ul>
                                        </td>
                                        <td>月次<br>四半期</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="information-lifecycle">
                            <h4>情報管理のライフサイクル</h4>
                            <p>効果的な調達情報管理は、情報の収集から廃棄まで一貫したライフサイクル管理が重要です。</p>
                            
                            <div class="lifecycle-steps">
                                <div class="lifecycle-item">
                                    <div class="step-icon">1</div>
                                    <div class="step-content">
                                        <h6>情報収集（Collection）</h6>
                                        <ul>
                                            <li>内部システムからの自動データ抽出</li>
                                            <li>外部ソース（市場調査、業界レポート）からの情報取得</li>
                                            <li>サプライヤー・取引先からの情報提供</li>
                                            <li>現場・営業からの情報収集</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="lifecycle-item">
                                    <div class="step-icon">2</div>
                                    <div class="step-content">
                                        <h6>情報検証・加工（Validation & Processing）</h6>
                                        <ul>
                                            <li>データの正確性・完整性の確認</li>
                                            <li>重複データの統合・クレンジング</li>
                                            <li>分析しやすい形式への変換・標準化</li>
                                            <li>機密度・重要度の分類・タグ付け</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="lifecycle-item">
                                    <div class="step-icon">3</div>
                                    <div class="step-content">
                                        <h6>情報蓄積・管理（Storage & Management）</h6>
                                        <ul>
                                            <li>セキュアなデータベースへの格納</li>
                                            <li>アクセス権限の設定・管理</li>
                                            <li>バックアップ・復旧体制の構築</li>
                                            <li>データ品質の継続的モニタリング</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="lifecycle-item">
                                    <div class="step-icon">4</div>
                                    <div class="step-content">
                                        <h6>情報活用・配信（Utilization & Distribution）</h6>
                                        <ul>
                                            <li>レポート・ダッシュボードでの可視化</li>
                                            <li>分析ツールでの高度な分析実行</li>
                                            <li>関係者への適時・適切な情報配信</li>
                                            <li>意思決定支援システムとの連携</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="lifecycle-item">
                                    <div class="step-icon">5</div>
                                    <div class="step-content">
                                        <h6>情報更新・廃棄（Update & Disposal）</h6>
                                        <ul>
                                            <li>定期的な情報の更新・メンテナンス</li>
                                            <li>古い情報の アーカイブ・削除</li>
                                            <li>情報の鮮度管理・有効期限設定</li>
                                            <li>法規制に従った適切な廃棄処理</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>情報管理成功の重要ポイント</strong>
                            <div class="success-factors">
                                <ol>
                                    <li><strong>情報品質の確保</strong>：正確性（Accuracy）、完全性（Completeness）、一貫性（Consistency）、適時性（Timeliness）の4つの品質要素を満たす情報管理</li>
                                    <li><strong>ユーザビリティの向上</strong>：利用者のニーズに応じた使いやすいインターフェース、検索機能、レポート機能の提供</li>
                                    <li><strong>セキュリティとコンプライアンス</strong>：機密情報の適切な保護、個人情報保護法等の法規制遵守</li>
                                    <li><strong>継続的改善</strong>：利用者フィードバックに基づく機能改善、新しい情報ニーズへの対応</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="case-study">
                            <h4>実践事例：自動車部品メーカーC社の情報管理システム構築</h4>
                            <p>自動車部品メーカーC社では、グローバル調達の拡大に対応するため、統合的な調達情報管理システムを構築し、大幅な業務効率化を実現しました。</p>
                            
                            <div class="case-details">
                                <div class="case-challenge">
                                    <h6><i class="fas fa-exclamation-triangle"></i> 課題</h6>
                                    <ul>
                                        <li>地域別に分散した調達情報により、全社的な分析・戦略立案が困難</li>
                                        <li>サプライヤー情報の不備による調達リスクの見落とし</li>
                                        <li>重複した情報収集作業による人的リソースの浪費</li>
                                    </ul>
                                </div>
                                
                                <div class="case-solution">
                                    <h6><i class="fas fa-lightbulb"></i> 解決策</h6>
                                    <ul>
                                        <li>グローバル統一の調達情報プラットフォーム構築</li>
                                        <li>5カテゴリーに分類した情報管理体系の導入</li>
                                        <li>AI・機械学習を活用した情報分析・予測機能の実装</li>
                                        <li>モバイル対応による現場からのリアルタイム情報入力</li>
                                    </ul>
                                </div>
                                
                                <div class="case-results">
                                    <h6><i class="fas fa-chart-line"></i> 成果</h6>
                                    <ul>
                                        <li><strong>情報収集効率</strong>：従来比60%の作業時間削減</li>
                                        <li><strong>意思決定速度</strong>：戦略的意思決定にかかる時間を50%短縮</li>
                                        <li><strong>リスク管理</strong>：サプライヤーリスクの早期発見率90%向上</li>
                                        <li><strong>コスト効果</strong>：情報活用による調達コスト8%削減を達成</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch8',
            title: '第8章 調達スキル向上の仕組み構築',
            pages: [
                {
                    id: 'ch8-1',
                    title: '8.1 調達プロフェッショナルの役割とスキル体系',
                    content: `
                        <p>現代の複雑化した調達環境において、調達部門の成功は調達プロフェッショナルの能力に大きく依存します。本節では、高度な調達業務を遂行するために必要な役割定義、スキル要件、および能力開発の体系について詳しく解説します。</p>
                        
                        <div class="professional-definition">
                            <h4>調達プロフェッショナルの役割定義</h4>
                            <p>調達プロフェッショナルとは、「高品質（Quality）・低コスト（Cost）・短納期（Delivery）の最適バランスを実現し、その安定的な調達を継続するために、戦略的思考に基づく目標設定、社内外のリソース活用、具体的施策の立案・実行を通じて、組織の競争優位性向上に貢献する専門人材」と定義されます。</p>
                            
                            <div class="role-characteristics">
                                <div class="characteristic-item">
                                    <h6><i class="fas fa-target"></i> 戦略的思考力</h6>
                                    <p>中長期的な視点での事業戦略との整合性を考慮した調達戦略の立案能力</p>
                                </div>
                                <div class="characteristic-item">
                                    <h6><i class="fas fa-network-wired"></i> ステークホルダー連携力</h6>
                                    <p>社内外の多様な関係者との効果的な連携・調整能力</p>
                                </div>
                                <div class="characteristic-item">
                                    <h6><i class="fas fa-chart-line"></i> 継続的改善推進力</h6>
                                    <p>現状に満足せず、常により良い調達方法を追求する改善マインド</p>
                                </div>
                            </div>
                        </div>

                        <div class="key-functions">
                            <h4>調達プロフェッショナルの4つの中核機能</h4>
                            <p>調達プロフェッショナルは、以下の4つの中核機能を通じて組織価値の最大化に貢献します。</p>
                            
                            <div class="function-grid">
                                <div class="function-card">
                                    <div class="function-number">1</div>
                                    <div class="function-content">
                                        <h5>戦略的ソーシング（Strategic Sourcing）</h5>
                                        <ul>
                                            <li><strong>サプライマーケット分析</strong>：競争環境、技術動向、リスク要因の分析</li>
                                            <li><strong>サプライヤー評価・選定</strong>：QCD・S（Service）総合評価による最適パートナー選定</li>
                                            <li><strong>調達戦略策定</strong>：カテゴリー別、品目別の最適調達戦略立案</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="function-card">
                                    <div class="function-number">2</div>
                                    <div class="function-content">
                                        <h5>価格・コスト管理（Cost Management）</h5>
                                        <ul>
                                            <li><strong>価格査定・分析</strong>：原価構造分析、市場価格ベンチマーキング</li>
                                            <li><strong>交渉・契約管理</strong>：効果的な交渉戦略と有利な契約条件の獲得</li>
                                            <li><strong>コスト削減活動</strong>：VE（Value Engineering）・VA（Value Analysis）の推進</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="function-card">
                                    <div class="function-number">3</div>
                                    <div class="function-content">
                                        <h5>サプライヤー開発・管理（Supplier Development）</h5>
                                        <ul>
                                            <li><strong>能力向上支援</strong>：技術指導、品質改善、生産性向上の支援</li>
                                            <li><strong>関係構築・維持</strong>：戦略的パートナーシップの構築</li>
                                            <li><strong>パフォーマンス管理</strong>：定期的評価とフィードバックによる継続改善</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="function-card">
                                    <div class="function-number">4</div>
                                    <div class="function-content">
                                        <h5>リスク管理・問題解決（Risk Management）</h5>
                                        <ul>
                                            <li><strong>リスク識別・評価</strong>：サプライチェーンリスクの体系的管理</li>
                                            <li><strong>BCM（事業継続管理）</strong>：災害・パンデミック等への対応計画策定</li>
                                            <li><strong>問題解決・改善</strong>：発生した課題の根本原因分析と解決策実行</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="competency-model">
                            <h4>調達プロフェッショナル コンピテンシーモデル</h4>
                            <p>調達プロフェッショナルに求められる能力を、知識・スキル・行動特性の3つの観点から体系化したコンピテンシーモデルです。</p>
                            
                            <div class="competency-categories">
                                <div class="competency-category">
                                    <h5><i class="fas fa-brain"></i> 専門知識（Knowledge）</h5>
                                    <div class="knowledge-areas">
                                        <div class="knowledge-item">
                                            <h6>調達・購買知識</h6>
                                            <ul>
                                                <li>調達プロセス、契約実務、法務知識</li>
                                                <li>品質管理、ロジスティクス、在庫管理</li>
                                            </ul>
                                        </div>
                                        <div class="knowledge-item">
                                            <h6>財務・会計知識</h6>
                                            <ul>
                                                <li>原価計算、財務分析、予算管理</li>
                                                <li>投資評価、為替・金利リスク管理</li>
                                            </ul>
                                        </div>
                                        <div class="knowledge-item">
                                            <h6>技術・市場知識</h6>
                                            <ul>
                                                <li>製品・技術の理解、業界動向分析</li>
                                                <li>イノベーション動向、競合分析</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="competency-category">
                                    <h5><i class="fas fa-tools"></i> 専門スキル（Skills）</h5>
                                    <div class="skill-areas">
                                        <div class="skill-item">
                                            <h6>分析・評価スキル</h6>
                                            <ul>
                                                <li><strong>スペンドアナリシス</strong>：支出分析による改善機会の発見</li>
                                                <li><strong>サプライマーケット分析</strong>：市場構造、競争状況の分析</li>
                                                <li><strong>リスク評価</strong>：定量・定性リスク評価手法の活用</li>
                                            </ul>
                                        </div>
                                        <div class="skill-item">
                                            <h6>コミュニケーションスキル</h6>
                                            <ul>
                                                <li><strong>交渉・調整力</strong>：Win-Winの関係構築を目指した交渉術</li>
                                                <li><strong>プレゼンテーション</strong>：経営層・関係部門への効果的な提案</li>
                                                <li><strong>多様性対応</strong>：グローバル・多文化環境でのコミュニケーション</li>
                                            </ul>
                                        </div>
                                        <div class="skill-item">
                                            <h6>システム・デジタルスキル</h6>
                                            <ul>
                                                <li><strong>調達システム</strong>：ERP、e-Procurement等の活用</li>
                                                <li><strong>データ分析ツール</strong>：Excel、BI（Business Intelligence）ツール</li>
                                                <li><strong>デジタル技術</strong>：AI、RPA等の新技術理解</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="competency-category">
                                    <h5><i class="fas fa-user-tie"></i> 行動特性（Behavior）</h5>
                                    <div class="behavior-traits">
                                        <div class="trait-item">
                                            <h6>戦略思考</h6>
                                            <p>中長期視点での戦略立案、全体最適を考慮した意思決定</p>
                                        </div>
                                        <div class="trait-item">
                                            <h6>結果志向</h6>
                                            <p>目標達成への強いコミット、成果創出へのこだわり</p>
                                        </div>
                                        <div class="trait-item">
                                            <h6>変革推進</h6>
                                            <p>現状打破への意欲、新しいアプローチへの挑戦</p>
                                        </div>
                                        <div class="trait-item">
                                            <h6>関係構築</h6>
                                            <p>社内外ステークホルダーとの信頼関係構築</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="skill-development">
                            <h4>スキル向上のための具体的アプローチ</h4>
                            
                            <div class="development-methods">
                                <div class="method-item">
                                    <h6><i class="fas fa-graduation-cap"></i> 体系的教育プログラム</h6>
                                    <ul>
                                        <li>階層別研修（新人・中堅・リーダー・管理職）</li>
                                        <li>専門分野別研修（法務、財務、技術、グローバル）</li>
                                        <li>外部セミナー・資格取得支援</li>
                                    </ul>
                                </div>
                                
                                <div class="method-item">
                                    <h6><i class="fas fa-users"></i> OJT（On-the-Job Training）</h6>
                                    <ul>
                                        <li>メンター制度による個別指導</li>
                                        <li>プロジェクト参画による実践経験</li>
                                        <li>他部門・海外拠点でのローテーション</li>
                                    </ul>
                                </div>
                                
                                <div class="method-item">
                                    <h6><i class="fas fa-network-wired"></i> ネットワーク構築</h6>
                                    <ul>
                                        <li>業界団体・研究会への参加</li>
                                        <li>社内横断的なCoP（Community of Practice）活動</li>
                                        <li>サプライヤー・パートナーとの技術交流</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>調達プロフェッショナル育成の成功要因</strong>
                            <ol>
                                <li><strong>計画的な人材育成</strong>：個人の能力・キャリア志向に応じたカスタマイズされた育成プログラムの提供</li>
                                <li><strong>実践機会の創出</strong>：挑戦的なプロジェクトや新しい責任範囲での経験機会の積極的提供</li>
                                <li><strong>継続的な学習文化</strong>：失敗を恐れず新しいことに挑戦する組織文化の醸成</li>
                                <li><strong>多様性の尊重</strong>：多様なバックグラウンドを持つ人材の活用と異文化理解の推進</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch9',
            title: '第9章 戦略的サプライヤー管理',
            pages: [
                {
                    id: 'ch9-1',
                    title: '9.1 サプライヤー評価・選定の体系的アプローチ',
                    content: `
                        <p>サプライヤー管理は調達戦略の中核を成す重要な領域です。適切なサプライヤーの選定と継続的な関係管理により、企業の競争力向上と持続可能な成長を実現できます。本節では、戦略的観点からのサプライヤー評価・選定手法について詳しく解説します。</p>
                        
                        <div class="evaluation-framework">
                            <h4>QCDS総合評価フレームワーク</h4>
                            <p>サプライヤー評価においては、従来のQCD（品質・コスト・納期）に加えて、サービス（Service）を含めたQCDS評価が標準となっています。これらの要素を総合的に評価することで、最適なサプライヤー選定を実現します。</p>
                            
                            <div class="qcds-evaluation">
                                <div class="qcds-item quality">
                                    <div class="qcds-letter">Q</div>
                                    <div class="qcds-content">
                                        <h5>Quality（品質）- 重要度30%</h5>
                                        <div class="evaluation-details">
                                            <h6>評価項目</h6>
                                            <ul>
                                                <li><strong>品質管理体制</strong>：QMS（品質管理システム）の構築・運用状況</li>
                                                <li><strong>品質実績</strong>：不良率、クレーム発生率、品質事故履歴</li>
                                                <li><strong>品質改善活動</strong>：継続的品質改善、予防保全の取り組み</li>
                                                <li><strong>認証・資格</strong>：ISO9001、業界固有認証の取得状況</li>
                                                <li><strong>検査・測定能力</strong>：品質保証設備、測定技術の保有</li>
                                            </ul>
                                            <h6>評価手法</h6>
                                            <ul>
                                                <li>品質監査（Quality Audit）の実施</li>
                                                <li>統計的品質管理データの分析</li>
                                                <li>第三者認証機関による評価結果の活用</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="qcds-item cost">
                                    <div class="qcds-letter">C</div>
                                    <div class="qcds-content">
                                        <h5>Cost（コスト）- 重要度25%</h5>
                                        <div class="evaluation-details">
                                            <h6>評価項目</h6>
                                            <ul>
                                                <li><strong>価格競争力</strong>：市場価格との比較、競合他社との価格比較</li>
                                                <li><strong>原価構造</strong>：材料費、労務費、製造間接費の透明性</li>
                                                <li><strong>コスト改善提案</strong>：VE/VA提案、生産性向上施策</li>
                                                <li><strong>TCO（Total Cost of Ownership）</strong>：初期費用＋運用コスト</li>
                                                <li><strong>為替・価格変動対応</strong>：価格安定性、変動要因への対応力</li>
                                            </ul>
                                            <h6>評価手法</h6>
                                            <ul>
                                                <li>コストブレークダウン分析</li>
                                                <li>ベンチマークコスト比較</li>
                                                <li>ライフサイクルコスト評価</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="qcds-item delivery">
                                    <div class="qcds-letter">D</div>
                                    <div class="qcds-content">
                                        <h5>Delivery（納期）- 重要度20%</h5>
                                        <div class="evaluation-details">
                                            <h6>評価項目</h6>
                                            <ul>
                                                <li><strong>納期遵守率</strong>：約束納期の遵守実績、遅延発生率</li>
                                                <li><strong>リードタイム</strong>：受注から納品までの所要時間</li>
                                                <li><strong>生産能力・キャパシティ</strong>：需要変動への対応力</li>
                                                <li><strong>柔軟性</strong>：緊急対応、仕様変更への対応力</li>
                                                <li><strong>ロジスティクス</strong>：配送体制、在庫管理能力</li>
                                            </ul>
                                            <h6>評価手法</h6>
                                            <ul>
                                                <li>納期実績データ分析</li>
                                                <li>生産計画・能力評価</li>
                                                <li>サプライチェーン可視化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="qcds-item service">
                                    <div class="qcds-letter">S</div>
                                    <div class="qcds-content">
                                        <h5>Service（サービス）- 重要度25%</h5>
                                        <div class="evaluation-details">
                                            <h6>評価項目</h6>
                                            <ul>
                                                <li><strong>技術サポート</strong>：技術的問題解決、設計支援能力</li>
                                                <li><strong>顧客対応</strong>：コミュニケーション品質、レスポンス速度</li>
                                                <li><strong>開発協力</strong>：共同開発、イノベーション創出への貢献</li>
                                                <li><strong>アフターサービス</strong>：保守、メンテナンス、トラブル対応</li>
                                                <li><strong>情報共有</strong>：市場情報、技術情報の提供レベル</li>
                                            </ul>
                                            <h6>評価手法</h6>
                                            <ul>
                                                <li>顧客満足度調査</li>
                                                <li>サービスレベル測定</li>
                                                <li>関係部門ヒアリング</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="supplier-categorization">
                            <h4>戦略的サプライヤー分類マトリックス</h4>
                            <p>サプライヤーを戦略的重要度と調達リスクの2軸で分類し、それぞれに適した管理アプローチを適用します。</p>
                            
                            <div class="matrix-grid">
                                <div class="matrix-item strategic">
                                    <h6>戦略的パートナー（Strategic Partners）</h6>
                                    <div class="matrix-characteristics">
                                        <p><strong>特徴</strong>：高い戦略的重要度、高い調達リスク</p>
                                        <ul>
                                            <li>コア技術・重要部品の供給</li>
                                            <li>代替困難な独自技術・ノウハウ保有</li>
                                            <li>長期的なパートナーシップが必要</li>
                                        </ul>
                                        <p><strong>管理アプローチ</strong></p>
                                        <ul>
                                            <li>戦略的アライアンス・JV（Joint Venture）</li>
                                            <li>共同開発・技術革新の推進</li>
                                            <li>定期的な経営層会議・戦略協議</li>
                                            <li>リスク共有・分担の仕組み構築</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="matrix-item key">
                                    <h6>重要サプライヤー（Key Suppliers）</h6>
                                    <div class="matrix-characteristics">
                                        <p><strong>特徴</strong>：高い戦略的重要度、低い調達リスク</p>
                                        <ul>
                                            <li>重要部品・サービスの安定供給</li>
                                            <li>複数の供給源が存在</li>
                                            <li>品質・技術力が高レベル</li>
                                        </ul>
                                        <p><strong>管理アプローチ</strong></p>
                                        <ul>
                                            <li>優先的パートナーシップの構築</li>
                                            <li>能力向上支援・投資</li>
                                            <li>中長期契約による関係安定化</li>
                                            <li>定期的な業績評価・フィードバック</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="matrix-item operational">
                                    <h6>運用サプライヤー（Operational Suppliers）</h6>
                                    <div class="matrix-characteristics">
                                        <p><strong>特徴</strong>：低い戦略的重要度、高い調達リスク</p>
                                        <ul>
                                            <li>特殊な立地・設備・技術要件</li>
                                            <li>限定された供給源</li>
                                            <li>標準的な製品・サービス</li>
                                        </ul>
                                        <p><strong>管理アプローチ</strong></p>
                                        <ul>
                                            <li>リスク軽減策の実施</li>
                                            <li>代替サプライヤーの確保</li>
                                            <li>安全在庫の適正管理</li>
                                            <li>効率的な取引プロセスの構築</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="matrix-item transactional">
                                    <h6>取引型サプライヤー（Transactional Suppliers）</h6>
                                    <div class="matrix-characteristics">
                                        <p><strong>特徴</strong>：低い戦略的重要度、低い調達リスク</p>
                                        <ul>
                                            <li>汎用的な製品・サービス</li>
                                            <li>多数の供給源が存在</li>
                                            <li>標準化された仕様・品質</li>
                                        </ul>
                                        <p><strong>管理アプローチ</strong></p>
                                        <ul>
                                            <li>コスト最適化・効率重視</li>
                                            <li>e-調達システムの活用</li>
                                            <li>競争入札による価格適正化</li>
                                            <li>自動発注・省力化の推進</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="selection-process">
                            <h4>サプライヤー選定プロセス</h4>
                            <p>効果的なサプライヤー選定のための体系的プロセスです。</p>
                            
                            <div class="process-steps">
                                <div class="step-item">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h6>調達要件の明確化</h6>
                                        <ul>
                                            <li>技術仕様・品質要求の詳細化</li>
                                            <li>数量・納期・価格条件の設定</li>
                                            <li>戦略的重要度・リスクレベルの評価</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="step-item">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h6>サプライヤー探索・予備選定</h6>
                                        <ul>
                                            <li>データベース・業界情報からの候補抽出</li>
                                            <li>RFI（Request for Information）による情報収集</li>
                                            <li>基本要件による足切り評価</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="step-item">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h6>詳細評価・監査</h6>
                                        <ul>
                                            <li>RFP（Request for Proposal）による提案評価</li>
                                            <li>QCDS総合評価の実施</li>
                                            <li>現地監査・工場視察の実施</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="step-item">
                                    <div class="step-number">4</div>
                                    <div class="step-content">
                                        <h6>最終選定・承認</h6>
                                        <ul>
                                            <li>評価結果の総合判定</li>
                                            <li>選定理由書の作成・承認取得</li>
                                            <li>契約交渉・基本合意</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="step-item">
                                    <div class="step-number">5</div>
                                    <div class="step-content">
                                        <h6>関係構築・モニタリング開始</h6>
                                        <ul>
                                            <li>キックオフミーティングの開催</li>
                                            <li>SLA（Service Level Agreement）の設定</li>
                                            <li>定期的なパフォーマンス評価体制の構築</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>サプライヤー選定成功の要因</strong>
                            <ol>
                                <li><strong>多面的評価</strong>：QCDS各要素の総合的な評価と、定量・定性両面からの分析</li>
                                <li><strong>長期的視点</strong>：短期的なコスト重視ではなく、中長期的な価値創造を重視した選定</li>
                                <li><strong>リスク管理</strong>：財務リスク、技術リスク、地政学リスク等の総合的リスク評価</li>
                                <li><strong>戦略適合性</strong>：自社の事業戦略・調達戦略との整合性の確認</li>
                                <li><strong>継続的改善</strong>：選定プロセス自体の継続的見直しと改善</li>
                            </ol>
                        </div>
                    `
                }
