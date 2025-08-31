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
                        <div class="chapter-introduction">
                            <div class="intro-question">
                                <h4><i class="fas fa-question-circle"></i> 「調達」と聞いて、どんなイメージを持ちますか？</h4>
                                <p>「安く買い叩く部署」「コスト削減ばかり考えている人たち」「単純に物を買うだけの仕事」...そう思っていませんか？</p>
                                <p><strong>実は、それは大きな誤解です！</strong></p>
                            </div>
                            
                            <div class="reality-shock">
                                <div class="shock-icon">😲</div>
                                <div class="shock-content">
                                    <h5>調達の真実</h5>
                                    <p>現代の優秀な調達部門は、企業の<span class="highlight-profit">利益の30-50%</span>に直接影響を与え、<span class="highlight-innovation">新商品開発の成否</span>を左右する、まさに<strong>「企業の頭脳」</strong>とも言える存在なのです。</p>
                                </div>
                            </div>
                            
                            <div class="analogy-comparison">
                                <h5><i class="fas fa-lightbulb"></i> 身近な例で理解する「調達の進化」</h5>
                                <div class="comparison-grid">
                                    <div class="comparison-item old">
                                        <div class="period">📰 昔の調達</div>
                                        <div class="description">
                                            <h6>「モノを買う人」</h6>
                                            <p>• 既に決まったものを安く購入<br>
                                            • 価格交渉が主な仕事<br>
                                            • 製品完成後に関与</p>
                                        </div>
                                    </div>
                                    <div class="arrow">→</div>
                                    <div class="comparison-item new">
                                        <div class="period">🚀 今の調達</div>
                                        <div class="description">
                                            <h6>「価値を創造する人」</h6>
                                            <p>• 企画段階から参画<br>
                                            • 技術革新を主導<br>
                                            • 競争優位を生み出す</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="important-point">
                            <i class="fas fa-star"></i>
                            <strong>この章で学ぶ重要ポイント</strong>
                            <p>調達は単なる購買業務ではなく、企業競争力の源泉となる戦略的機能であることを理解します。</p>
                        </div>

                        <p>現代の調達は、サプライチェーンだけでなく、<strong>エンジニアリングチェーン</strong>の仕様決定段階から積極的に関与することによって、企業により大きな利益をもたらすことができます。</p>
                        
                        <div class="definition-note">
                            <h5>💡 専門用語解説</h5>
                            <p><strong>エンジニアリングチェーン</strong>とは、製品やサービスの企画・設計・開発から製造準備まで、技術的な価値創造を行う一連のプロセスのことです。調達部門がこの段階から参画することで、コスト効率と品質の両方を最適化できます。</p>
                        </div>

                        <div class="strategic-positioning">
                            <h4><i class="fas fa-sitemap"></i> 調達の戦略的位置付け</h4>
                            <p>調達がどのように企業価値創造に貢献するかを、「企業のエンジン」として視覚的に理解しましょう。</p>
                            
                            <div class="enterprise-engine">
                                <div class="engine-diagram">
                                    <div class="engine-level level-strategy">
                                        <div class="level-icon">🎯</div>
                                        <div class="level-content">
                                            <h5>企業戦略</h5>
                                            <p>「何を目指すか」を決める経営の舵取り</p>
                                            <div class="examples">例：市場シェア拡大、新市場参入、コスト競争力強化</div>
                                        </div>
                                    </div>
                                    
                                    <div class="connection-arrows">
                                        <div class="arrow-down">⬇</div>
                                        <div class="connection-label">戦略を実現する手段として</div>
                                    </div>
                                    
                                    <div class="engine-level level-procurement">
                                        <div class="level-icon">🏭</div>
                                        <div class="level-content">
                                            <h5>調達戦略</h5>
                                            <p>「どこから何を調達するか」の戦略的判断</p>
                                            <div class="dual-chain">
                                                <div class="chain supply-chain">
                                                    <h6><i class="fas fa-truck"></i> サプライチェーン</h6>
                                                    <span>物流・供給の最適化</span>
                                                </div>
                                                <div class="chain-connector">×</div>
                                                <div class="chain engineering-chain">
                                                    <h6><i class="fas fa-cogs"></i> エンジニアリングチェーン</h6>
                                                    <span>設計・開発の最適化</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="connection-arrows">
                                        <div class="arrow-down">⬇</div>
                                        <div class="connection-label">両方向で価値創造</div>
                                    </div>
                                    
                                    <div class="engine-level level-results">
                                        <div class="level-icon">💎</div>
                                        <div class="level-content">
                                            <h5>価値創出・利益実現</h5>
                                            <p>競合他社との差別化と持続的成長</p>
                                            <div class="result-metrics">
                                                <span class="metric cost">コスト削減</span>
                                                <span class="metric quality">品質向上</span>
                                                <span class="metric innovation">技術革新</span>
                                                <span class="metric speed">開発加速</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="positioning-insights">
                                    <h5><i class="fas fa-key"></i> なぜ調達が戦略的なのか？</h5>
                                    <div class="insights-grid">
                                        <div class="insight-item">
                                            <i class="fas fa-percentage"></i>
                                            <h6>コスト影響力</h6>
                                            <p>多くの企業で<strong>売上の50-80%</strong>が調達コスト。1%の改善でも大きな利益向上</p>
                                        </div>
                                        <div class="insight-item">
                                            <i class="fas fa-rocket"></i>
                                            <h6>イノベーション源泉</h6>
                                            <p>サプライヤーの<strong>先進技術</strong>を早期導入し、競合より先に市場投入</p>
                                        </div>
                                        <div class="insight-item">
                                            <i class="fas fa-shield-alt"></i>
                                            <h6>リスク管理</h6>
                                            <p><strong>供給途絶</strong>や<strong>品質問題</strong>を防ぎ、事業継続性を確保</p>
                                        </div>
                                        <div class="insight-item">
                                            <i class="fas fa-clock"></i>
                                            <h6>スピード優位</h6>
                                            <p>優秀なサプライヤーとの連携で<strong>開発期間短縮</strong>と<strong>市場投入加速</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="success-stories">
                            <h4><i class="fas fa-trophy"></i> 調達が企業を変えた！実際の成功事例</h4>
                            
                            <div class="stories-container">
                                <div class="story-card manufacturing">
                                    <div class="story-header">
                                        <div class="company-icon">🏭</div>
                                        <div class="company-info">
                                            <h5>自動車メーカーT社</h5>
                                            <span class="industry">製造業</span>
                                        </div>
                                    </div>
                                    <div class="story-content">
                                        <h6>📋 チャレンジ</h6>
                                        <p>新型エンジン開発で、従来より<strong>30%軽量化</strong>が必要だった</p>
                                        
                                        <h6>💡 調達の関与</h6>
                                        <p><strong>設計段階から</strong>調達部門が参加。軽量金属の専門サプライヤーを開発初期に巻き込む</p>
                                        
                                        <h6>🎯 結果</h6>
                                        <div class="results">
                                            <span class="result-item">軽量化35%達成</span>
                                            <span class="result-item">開発期間20%短縮</span>
                                            <span class="result-item">コスト15%削減</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="story-card tech">
                                    <div class="story-header">
                                        <div class="company-icon">💻</div>
                                        <div class="company-info">
                                            <h5>電子機器メーカーS社</h5>
                                            <span class="industry">テクノロジー</span>
                                        </div>
                                    </div>
                                    <div class="story-content">
                                        <h6>📋 チャレンジ</h6>
                                        <p>スマートフォン市場で<strong>競合より3ヶ月早く</strong>新機能を投入したい</p>
                                        
                                        <h6>💡 調達の関与</h6>
                                        <p><strong>次世代センサー</strong>を開発中のベンチャー企業と戦略的パートナーシップ</p>
                                        
                                        <h6>🎯 結果</h6>
                                        <div class="results">
                                            <span class="result-item">業界初機能搭載</span>
                                            <span class="result-item">市場シェア+15%</span>
                                            <span class="result-item">売上200億円増</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="story-card service">
                                    <div class="story-header">
                                        <div class="company-icon">🏪</div>
                                        <div class="company-info">
                                            <h5>小売チェーンR社</h5>
                                            <span class="industry">サービス業</span>
                                        </div>
                                    </div>
                                    <div class="story-content">
                                        <h6>📋 チャレンジ</h6>
                                        <p>食品ロス削減と<strong>コスト競争力</strong>を両立したい</p>
                                        
                                        <h6>💡 調達の関与</h6>
                                        <p><strong>AIによる需要予測</strong>と産地直送ネットワークを調達主導で構築</p>
                                        
                                        <h6>🎯 結果</h6>
                                        <div class="results">
                                            <span class="result-item">食品ロス40%削減</span>
                                            <span class="result-item">調達コスト25%削減</span>
                                            <span class="result-item">顧客満足度向上</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="key-learning">
                                <h5><i class="fas fa-graduation-cap"></i> これらの事例から学べること</h5>
                                <div class="learning-points">
                                    <div class="point">
                                        <i class="fas fa-clock"></i>
                                        <span><strong>早期関与</strong>：設計・企画段階からの参画が成功の鍵</span>
                                    </div>
                                    <div class="point">
                                        <i class="fas fa-handshake"></i>
                                        <span><strong>戦略的パートナーシップ</strong>：単なる取引相手ではなく、共創パートナー</span>
                                    </div>
                                    <div class="point">
                                        <i class="fas fa-chart-line"></i>
                                        <span><strong>全体最適</strong>：部分的なコスト削減ではなく、企業全体の価値向上</span>
                                    </div>
                                </div>
                            </div>
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
                            <table class="procurement-functions-table">
                                <thead>
                                    <tr>
                                        <th><i class="fas fa-cog"></i> 業務領域</th>
                                        <th><i class="fas fa-tasks"></i> 主な機能・業務</th>
                                        <th><i class="fas fa-target"></i> 特徴</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="sourcing-row">
                                        <td><strong>🔹 ソーシング<br>（Sourcing）</strong></td>
                                        <td>
                                            • 調達品の仕様決定への参画<br>
                                            • 最適なサプライヤーの選定と価格交渉<br>
                                            • 長期的な戦略的パートナーシップの構築
                                        </td>
                                        <td>
                                            <span class="feature-badge strategic">戦略的調達</span><br>
                                            <span class="feature-badge long-term">長期視点</span>
                                        </td>
                                    </tr>
                                    <tr class="purchasing-row">
                                        <td><strong>🔹 パーチェシング<br>（Purchasing）</strong></td>
                                        <td>
                                            • 正確な発注業務の実行<br>
                                            • 納期スケジュールの管理<br>
                                            • 商品の受入れ・品質検収業務
                                        </td>
                                        <td>
                                            <span class="feature-badge operational">実務的調達</span><br>
                                            <span class="feature-badge execution">実行重視</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                        <div class="procurement-classification-section">
                            <h4><i class="fas fa-layer-group"></i> 調達品分類マトリックス</h4>
                            <p class="section-description">調達品を戦略的重要度と調達の関与度で分類し、効果的な管理手法を明確化します。</p>
                            
                            <div class="classification-overview">
                                <div class="category-legend">
                                    <h5><i class="fas fa-palette"></i> カテゴリー別色分け</h5>
                                    <div class="legend-items">
                                        <div class="legend-item">
                                            <span class="legend-color core-products"></span>
                                            <span>コア製品関連（直接材・ソフトウェア）</span>
                                        </div>
                                        <div class="legend-item">
                                            <span class="legend-color business-products"></span>
                                            <span>事業支援関連（仕入品・サービス品）</span>
                                        </div>
                                        <div class="legend-item">
                                            <span class="legend-color infrastructure"></span>
                                            <span>インフラ関連（設備・工事・エネルギー）</span>
                                        </div>
                                        <div class="legend-item">
                                            <span class="legend-color support-items"></span>
                                            <span>間接支援関連（間接品・サービス・販促）</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="enhanced-table-container">
                                <table class="procurement-items-enhanced-table">
                                    <thead>
                                        <tr>
                                            <th rowspan="2" class="category-header">分類</th>
                                            <th rowspan="2" class="definition-header">定義・具体例</th>
                                            <th rowspan="2" class="department-header">主管部署</th>
                                            <th colspan="2" class="importance-header">重要度評価</th>
                                            <th rowspan="2" class="characteristics-header">調達特性</th>
                                        </tr>
                                        <tr>
                                            <th>関与度</th>
                                            <th>金額規模</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- コア製品関連 -->
                                        <tr class="category-core-products">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-cogs category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>①直接材</strong>
                                                        <small>Direct Materials</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>製品の構成要素</strong></p>
                                                    <table class="detail-examples-table">
                                                        <thead>
                                                            <tr>
                                                                <th><i class="fas fa-tag"></i> 分類</th>
                                                                <th><i class="fas fa-list-ul"></i> 具体例</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><strong>原材料</strong></td>
                                                                <td>鋼材、樹脂、アルミニウム、木材</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>電子部品</strong></td>
                                                                <td>IC、コネクタ、センサー、基板</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>機構部品</strong></td>
                                                                <td>ギア、ベアリング、モーター、バネ</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>包装材料</strong></td>
                                                                <td>段ボール、フィルム、緩衝材、ラベル</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">調達部門</span>
                                                <span class="department-badge secondary">設計部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge high">
                                                    <i class="fas fa-arrow-up"></i> 高
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge large">
                                                    <i class="fas fa-coins"></i> 大
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag strategic">戦略性</span>
                                                    <span class="char-tag quality">品質重視</span>
                                                    <span class="char-tag cost">コスト影響大</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="category-core-products">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-code category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>④ソフトウェア</strong>
                                                        <small>Software</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>製品内蔵・システム用SW</strong></p>
                                                    <ul class="examples-list">
                                                        <li>組込みソフトウェア</li>
                                                        <li>アプリケーションソフト</li>
                                                        <li>OS・ミドルウェア</li>
                                                        <li>ライセンス・特許</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">調達部門</span>
                                                <span class="department-badge secondary">IT部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge high">
                                                    <i class="fas fa-arrow-up"></i> 高
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge medium">
                                                    <i class="fas fa-coins"></i> 中
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag innovation">革新性</span>
                                                    <span class="char-tag security">セキュリティ</span>
                                                    <span class="char-tag license">ライセンス管理</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <!-- 事業支援関連 -->
                                        <tr class="category-business-products">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-boxes category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>②仕入品</strong>
                                                        <small>Purchased Goods</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>OEM・ODM製品</strong></p>
                                                    <table class="detail-examples-table">
                                                        <thead>
                                                            <tr>
                                                                <th><i class="fas fa-industry"></i> 製品タイプ</th>
                                                                <th><i class="fas fa-info-circle"></i> 特徴・説明</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><strong>OEM製品</strong></td>
                                                                <td>相手先ブランド名での製造・供給</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>ODM製品</strong></td>
                                                                <td>設計込みでの製造・開発</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>完成品仕入れ</strong></td>
                                                                <td>他社製完成品の仕入れ・販売</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>PB品</strong></td>
                                                                <td>プライベートブランド商品</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">営業部門</span>
                                                <span class="department-badge secondary">調達部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge medium">
                                                    <i class="fas fa-minus"></i> 中
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge large">
                                                    <i class="fas fa-coins"></i> 大
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag market">市場連動</span>
                                                    <span class="char-tag volume">数量重視</span>
                                                    <span class="char-tag relationship">関係性</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="category-business-products">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-tools category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>③アフターサービス品</strong>
                                                        <small>After-sales Parts</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>保守・修理用部品</strong></p>
                                                    <table class="detail-examples-table">
                                                        <thead>
                                                            <tr>
                                                                <th><i class="fas fa-wrench"></i> サービス種類</th>
                                                                <th><i class="fas fa-clock"></i> 用途・目的</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><strong>交換用部品</strong></td>
                                                                <td>故障時の緊急交換・修理対応</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>消耗品</strong></td>
                                                                <td>定期メンテナンス・予防保全</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>修理用工具</strong></td>
                                                                <td>保守作業用の専用治具・工具</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>アップグレード品</strong></td>
                                                                <td>性能向上・機能拡張用部品</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">サービス部門</span>
                                                <span class="department-badge secondary">調達部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge medium">
                                                    <i class="fas fa-minus"></i> 中
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge small">
                                                    <i class="fas fa-coins"></i> 小
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag availability">可用性</span>
                                                    <span class="char-tag urgent">緊急性</span>
                                                    <span class="char-tag lifecycle">ライフサイクル</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <!-- インフラ関連 -->
                                        <tr class="category-infrastructure">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-industry category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>⑤設備</strong>
                                                        <small>Equipment</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>生産設備・システム</strong></p>
                                                    <ul class="examples-list">
                                                        <li>製造装置・加工機械</li>
                                                        <li>検査・測定機器</li>
                                                        <li>搬送・物流設備</li>
                                                        <li>IT・通信インフラ</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">生産技術部門</span>
                                                <span class="department-badge secondary">調達部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge high">
                                                    <i class="fas fa-arrow-up"></i> 高
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge large">
                                                    <i class="fas fa-coins"></i> 大
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag capex">設備投資</span>
                                                    <span class="char-tag tech">技術性</span>
                                                    <span class="char-tag longterm">長期契約</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="category-infrastructure">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-hammer category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>⑥工事</strong>
                                                        <small>Construction</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>建設・据付工事</strong></p>
                                                    <ul class="examples-list">
                                                        <li>建屋・構造物工事</li>
                                                        <li>設備据付・配管工事</li>
                                                        <li>電気・通信工事</li>
                                                        <li>改修・メンテナンス工事</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">調達部門</span>
                                                <span class="department-badge secondary">生産技術部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge medium">
                                                    <i class="fas fa-minus"></i> 中
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge medium">
                                                    <i class="fas fa-coins"></i> 中
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag project">プロジェクト性</span>
                                                    <span class="char-tag safety">安全性</span>
                                                    <span class="char-tag regulation">法規制</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="category-infrastructure">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-bolt category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>⑧エネルギー</strong>
                                                        <small>Energy</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>電力・ユーティリティ</strong></p>
                                                    <ul class="examples-list">
                                                        <li>電力（電力会社・新電力）</li>
                                                        <li>ガス（都市ガス・LPG）</li>
                                                        <li>水道・工業用水</li>
                                                        <li>蒸気・圧縮空気</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">総務部門</span>
                                                <span class="department-badge secondary">生産部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge low">
                                                    <i class="fas fa-arrow-down"></i> 低
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge medium">
                                                    <i class="fas fa-coins"></i> 中
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag utility">ユーティリティ</span>
                                                    <span class="char-tag contract">契約型</span>
                                                    <span class="char-tag sustainability">持続可能性</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <!-- 間接支援関連 -->
                                        <tr class="category-support-items">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-clipboard-list category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>⑦間接品</strong>
                                                        <small>Indirect Materials</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>副資材・消耗品</strong></p>
                                                    <ul class="examples-list">
                                                        <li>副資材（治具、工具類）</li>
                                                        <li>メンテナンス品</li>
                                                        <li>事務用品・オフィス用品</li>
                                                        <li>清掃・衛生用品</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">各部門</span>
                                                <span class="department-badge secondary">総務部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge low">
                                                    <i class="fas fa-arrow-down"></i> 低
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge small">
                                                    <i class="fas fa-coins"></i> 小
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag efficiency">効率性</span>
                                                    <span class="char-tag standardization">標準化</span>
                                                    <span class="char-tag automation">自動化</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="category-support-items">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-handshake category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>⑨サービス</strong>
                                                        <small>Services</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>役務・専門サービス</strong></p>
                                                    <ul class="examples-list">
                                                        <li>業務委託・人材派遣</li>
                                                        <li>旅費・交通費</li>
                                                        <li>研修・教育サービス</li>
                                                        <li>コンサルティング</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">総務部門</span>
                                                <span class="department-badge secondary">各部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge low">
                                                    <i class="fas fa-arrow-down"></i> 低
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge medium">
                                                    <i class="fas fa-coins"></i> 中
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag service">サービス性</span>
                                                    <span class="char-tag expertise">専門性</span>
                                                    <span class="char-tag flexibility">柔軟性</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="category-support-items">
                                            <td class="category-cell">
                                                <div class="category-info">
                                                    <i class="fas fa-bullhorn category-icon"></i>
                                                    <div class="category-details">
                                                        <strong>⑩販促品</strong>
                                                        <small>Promotional Items</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="definition-cell">
                                                <div class="definition-content">
                                                    <p><strong>販売促進・広報用品</strong></p>
                                                    <ul class="examples-list">
                                                        <li>展示品・デモ機</li>
                                                        <li>カタログ・パンフレット</li>
                                                        <li>看板・サイン</li>
                                                        <li>ノベルティ・記念品</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td class="department-cell">
                                                <span class="department-badge primary">営業部門</span>
                                                <span class="department-badge secondary">マーケティング部門</span>
                                            </td>
                                            <td class="involvement-cell">
                                                <span class="involvement-badge low">
                                                    <i class="fas fa-arrow-down"></i> 低
                                                </span>
                                            </td>
                                            <td class="scale-cell">
                                                <span class="scale-badge small">
                                                    <i class="fas fa-coins"></i> 小
                                                </span>
                                            </td>
                                            <td class="characteristics-cell">
                                                <div class="characteristics-tags">
                                                    <span class="char-tag marketing">マーケティング</span>
                                                    <span class="char-tag brand">ブランド性</span>
                                                    <span class="char-tag seasonal">季節性</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="strategic-matrix">
                                <h5><i class="fas fa-th"></i> 戦略的重要度マトリックス</h5>
                                <p class="matrix-description">調達品を2つの軸で分類し、最適な調達戦略を決定します。</p>
                                
                                <div class="matrix-container">
                                    <!-- Y軸ラベル -->
                                    <div class="y-axis-container">
                                        <div class="y-axis-label">
                                            <span class="axis-title">調達の<br>関与度</span>
                                            <div class="axis-scale">
                                                <span class="scale-high">高</span>
                                                <span class="scale-low">低</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- メインマトリックス -->
                                    <div class="matrix-main">
                                        <div class="matrix-grid">
                                            <!-- 上段 (高関与度) -->
                                            <div class="matrix-row high-involvement">
                                                <div class="matrix-quadrant bottleneck-items">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                        <h6>ボトルネック品目</h6>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <p class="items-list">アフターサービス品</p>
                                                        <div class="strategy-info">
                                                            <span class="strategy-tag bottleneck">供給保証・代替探索</span>
                                                            <div class="characteristics">
                                                                <span class="char">高関与度</span>
                                                                <span class="char">小規模</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="matrix-quadrant strategic-items">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-crown"></i>
                                                        <h6>戦略的重要品目</h6>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <p class="items-list">直接材・ソフトウェア・設備</p>
                                                        <div class="strategy-info">
                                                            <span class="strategy-tag strategic">戦略的パートナーシップ</span>
                                                            <div class="characteristics">
                                                                <span class="char">高関与度</span>
                                                                <span class="char">大規模</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <!-- 下段 (低関与度) -->
                                            <div class="matrix-row low-involvement">
                                                <div class="matrix-quadrant routine-items">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-cog"></i>
                                                        <h6>ルーチン品目</h6>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <p class="items-list">間接品・サービス・販促品・エネルギー</p>
                                                        <div class="strategy-info">
                                                            <span class="strategy-tag routine">効率化・自動化</span>
                                                            <div class="characteristics">
                                                                <span class="char">低関与度</span>
                                                                <span class="char">小規模</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="matrix-quadrant leverage-items">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-balance-scale"></i>
                                                        <h6>レバレッジ品目</h6>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <p class="items-list">仕入品・工事</p>
                                                        <div class="strategy-info">
                                                            <span class="strategy-tag leverage">競争入札・価格交渉</span>
                                                            <div class="characteristics">
                                                                <span class="char">低関与度</span>
                                                                <span class="char">大規模</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- X軸ラベル -->
                                        <div class="x-axis-container">
                                            <div class="x-axis-scale">
                                                <span class="scale-low">小</span>
                                                <span class="scale-high">大</span>
                                            </div>
                                            <div class="x-axis-label">
                                                <span class="axis-title">金額規模・事業影響度</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="matrix-legend">
                                    <h6><i class="fas fa-info-circle"></i> 各象限の調達アプローチ</h6>
                                    <div class="legend-grid">
                                        <div class="legend-item strategic">
                                            <span class="legend-color strategic-bg"></span>
                                            <span class="legend-text"><strong>戦略的重要品目</strong>：長期パートナーシップ、共同開発</span>
                                        </div>
                                        <div class="legend-item leverage">
                                            <span class="legend-color leverage-bg"></span>
                                            <span class="legend-text"><strong>レバレッジ品目</strong>：競争入札、価格交渉重視</span>
                                        </div>
                                        <div class="legend-item bottleneck">
                                            <span class="legend-color bottleneck-bg"></span>
                                            <span class="legend-text"><strong>ボトルネック品目</strong>：供給保証、代替先確保</span>
                                        </div>
                                        <div class="legend-item routine">
                                            <span class="legend-color routine-bg"></span>
                                            <span class="legend-text"><strong>ルーチン品目</strong>：プロセス効率化、自動化</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                        <div class="future-intro">
                            <h3>🔮 未来の調達は、今とは大きく違う？</h3>
                            <div class="intro-question">
                                <p><strong>質問：</strong>10年後の調達担当者は、今と同じ仕事をしていると思いますか？</p>
                                <div class="answer-reveal">
                                    <p><i class="fas fa-arrow-right"></i> <strong>答えは「NO」</strong>です。調達は最も変化の激しい分野の一つ。</p>
                                    <p>この節で、驚くべき変化と新しい可能性を見てみましょう！</p>
                                </div>
                            </div>
                        </div>

                        <div class="evolution-timeline">
                            <h4><i class="fas fa-clock"></i> 調達業務の進化タイムライン</h4>
                            <div class="timeline-container">
                                <div class="timeline-item past">
                                    <div class="timeline-year">2000年代</div>
                                    <div class="timeline-content">
                                        <h5>🏭 従来の調達</h5>
                                        <div class="characteristics">
                                            <span class="char-item cost">コスト削減重視</span>
                                            <span class="char-item simple">単純な購買業務</span>
                                            <span class="char-item reactive">受動的対応</span>
                                            <span class="char-item short">短期的視点</span>
                                        </div>
                                        <p class="timeline-desc">「安く買えればOK」の時代</p>
                                    </div>
                                </div>
                                
                                <div class="timeline-item present">
                                    <div class="timeline-year">2020年代</div>
                                    <div class="timeline-content">
                                        <h5>🚀 戦略的調達</h5>
                                        <div class="characteristics">
                                            <span class="char-item value">価値創造</span>
                                            <span class="char-item innovation">イノベーション創出</span>
                                            <span class="char-item partnership">戦略パートナーシップ</span>
                                            <span class="char-item proactive">プロアクティブ対応</span>
                                        </div>
                                        <p class="timeline-desc">「企業の競争力を左右する重要機能」として認識</p>
                                    </div>
                                </div>
                                
                                <div class="timeline-item future">
                                    <div class="timeline-year">2030年代</div>
                                    <div class="timeline-content">
                                        <h5>🤖 AI駆動型調達</h5>
                                        <div class="characteristics">
                                            <span class="char-item ai">AI意思決定支援</span>
                                            <span class="char-item sustainable">サステナビリティ重視</span>
                                            <span class="char-item ecosystem">エコシステム構築</span>
                                            <span class="char-item resilient">レジリエント経営</span>
                                        </div>
                                        <p class="timeline-desc">「人間＋AI」で新しい価値を創造</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="digital-transformation-impact">
                            <h4><i class="fas fa-robot"></i> デジタル化・AI技術が変える調達業務</h4>
                            
                            <div class="impact-grid">
                                <div class="impact-card automation">
                                    <div class="impact-icon">
                                        <i class="fas fa-cogs"></i>
                                    </div>
                                    <h5>🔄 業務自動化</h5>
                                    <div class="before-after">
                                        <div class="before">
                                            <strong>現在：</strong>手作業での見積依頼・比較
                                        </div>
                                        <div class="arrow">↓</div>
                                        <div class="after">
                                            <strong>未来：</strong>AIが最適サプライヤーを自動選定
                                        </div>
                                    </div>
                                    <div class="impact-benefit">⚡ 作業時間90%削減</div>
                                </div>
                                
                                <div class="impact-card prediction">
                                    <div class="impact-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <h5>📊 予測分析</h5>
                                    <div class="before-after">
                                        <div class="before">
                                            <strong>現在：</strong>過去の実績から判断
                                        </div>
                                        <div class="arrow">↓</div>
                                        <div class="after">
                                            <strong>未来：</strong>市場動向・リスクをAI予測
                                        </div>
                                    </div>
                                    <div class="impact-benefit">🎯 予測精度80%向上</div>
                                </div>
                                
                                <div class="impact-card blockchain">
                                    <div class="impact-icon">
                                        <i class="fas fa-link"></i>
                                    </div>
                                    <h5>🔗 サプライチェーン可視化</h5>
                                    <div class="before-after">
                                        <div class="before">
                                            <strong>現在：</strong>一次サプライヤーまで把握
                                        </div>
                                        <div class="arrow">↓</div>
                                        <div class="after">
                                            <strong>未来：</strong>原材料まで完全トレーサビリティ
                                        </div>
                                    </div>
                                    <div class="impact-benefit">🛡️ リスク検知力3倍</div>
                                </div>
                                
                                <div class="impact-card sustainability">
                                    <div class="impact-icon">
                                        <i class="fas fa-leaf"></i>
                                    </div>
                                    <h5>🌱 ESG調達</h5>
                                    <div class="before-after">
                                        <div class="before">
                                            <strong>現在：</strong>価格・品質重視の選定
                                        </div>
                                        <div class="arrow">↓</div>
                                        <div class="after">
                                            <strong>未来：</strong>カーボンフットプリント等も評価
                                        </div>
                                    </div>
                                    <div class="impact-benefit">🌍 持続可能性指標向上</div>
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

                        <div class="new-business-domains">
                            <h4><i class="fas fa-rocket"></i> 急拡大する新しい業務領域</h4>
                            
                            <div class="domain-showcase">
                                <div class="domain-card strategic">
                                    <div class="domain-header">
                                        <div class="domain-icon">🤝</div>
                                        <h5>戦略コンサルタント</h5>
                                        <span class="growth-badge">成長率300%</span>
                                    </div>
                                    <div class="domain-description">
                                        <p><strong>従来：</strong>言われたものを買う購買担当</p>
                                        <p><strong>今後：</strong>経営戦略に深く関与する戦略パートナー</p>
                                    </div>
                                    <div class="concrete-examples">
                                        <h6>具体例</h6>
                                        <ul>
                                            <li>🏢 <strong>トヨタ</strong>：調達部門がサプライヤーの技術ロードマップ策定に参画</li>
                                            <li>🔧 <strong>ボーイング</strong>：新機種開発の初期段階から調達戦略を立案</li>
                                            <li>💻 <strong>アップル</strong>：調達担当がサプライヤーとの合弁事業を企画</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="domain-card innovation">
                                    <div class="domain-header">
                                        <div class="domain-icon">💡</div>
                                        <h5>イノベーション・ディレクター</h5>
                                        <span class="growth-badge">成長率250%</span>
                                    </div>
                                    <div class="domain-description">
                                        <p><strong>従来：</strong>既存製品の調達のみ</p>
                                        <p><strong>今後：</strong>新技術発掘・共同開発のリーダー</p>
                                    </div>
                                    <div class="concrete-examples">
                                        <h6>具体例</h6>
                                        <ul>
                                            <li>🚗 <strong>テスラ</strong>：バッテリー技術の革新をサプライヤーと共同開発</li>
                                            <li>📱 <strong>サムスン</strong>：折りたたみディスプレイ技術を調達部門が発掘</li>
                                            <li>🏥 <strong>ファイザー</strong>：mRNAワクチン製造技術を調達経由で獲得</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="domain-card risk-manager">
                                    <div class="domain-header">
                                        <div class="domain-icon">🛡️</div>
                                        <h5>サプライチェーン・レジリエンス・オフィサー</h5>
                                        <span class="growth-badge new">新職種</span>
                                    </div>
                                    <div class="domain-description">
                                        <p><strong>従来：</strong>問題が起きてから対応</p>
                                        <p><strong>今後：</strong>AIを駆使したリスク予測・回避の専門家</p>
                                    </div>
                                    <div class="concrete-examples">
                                        <h6>具体例</h6>
                                        <ul>
                                            <li>🌪️ <strong>災害対応</strong>：気象データからサプライヤー被災を72時間前に予測</li>
                                            <li>📈 <strong>市場変動</strong>：原材料価格の急騰を1か月前に察知し代替調達</li>
                                            <li>🔒 <strong>サイバー攻撃</strong>：サプライヤーのセキュリティ脆弱性を常時監視</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="domain-card sustainability">
                                    <div class="domain-header">
                                        <div class="domain-icon">🌱</div>
                                        <h5>サステナビリティ・チーフ</h5>
                                        <span class="growth-badge">成長率400%</span>
                                    </div>
                                    <div class="domain-description">
                                        <p><strong>従来：</strong>価格・品質・納期のみ考慮</p>
                                        <p><strong>今後：</strong>地球環境・社会貢献まで責任を負うリーダー</p>
                                    </div>
                                    <div class="concrete-examples">
                                        <h6>具体例</h6>
                                        <ul>
                                            <li>🌿 <strong>ユニリーバ</strong>：2030年までにサプライチェーン全体でカーボンニュートラル達成</li>
                                            <li>👕 <strong>パタゴニア</strong>：フェアトレード認証サプライヤーのみとの取引</li>
                                            <li>☕ <strong>スターバックス</strong>：農家の生活向上プログラムを調達部門が主導</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="domain-card data-scientist">
                                    <div class="domain-header">
                                        <div class="domain-icon">📊</div>
                                        <h5>調達データサイエンティスト</h5>
                                        <span class="growth-badge hot">超注目</span>
                                    </div>
                                    <div class="domain-description">
                                        <p><strong>従来：</strong>Excel表での簡単な分析</p>
                                        <p><strong>今後：</strong>ビッグデータ・AIを駆使した高度な分析専門家</p>
                                    </div>
                                    <div class="concrete-examples">
                                        <h6>具体例</h6>
                                        <ul>
                                            <li>🎯 <strong>需要予測</strong>：SNS分析から消費トレンドを3か月先まで予測</li>
                                            <li>💰 <strong>価格最適化</strong>：機械学習で年間調達コスト15%削減を実現</li>
                                            <li>🔍 <strong>サプライヤー発掘</strong>：世界中の新興企業を自動スキャニング</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="domain-card ecosystem-builder">
                                    <div class="domain-header">
                                        <div class="domain-icon">🌐</div>
                                        <h5>エコシステム・アーキテクト</h5>
                                        <span class="growth-badge future">未来型</span>
                                    </div>
                                    <div class="domain-description">
                                        <p><strong>従来：</strong>1対1のサプライヤー関係</p>
                                        <p><strong>今後：</strong>複数企業をつなぐエコシステム全体の設計者</p>
                                    </div>
                                    <div class="concrete-examples">
                                        <h6>具体例</h6>
                                        <ul>
                                            <li>🚗 <strong>自動車業界</strong>：EV充電インフラ全体の調達エコシステムを構築</li>
                                            <li>🏠 <strong>建設業界</strong>：スマートシティプロジェクトの調達ネットワークを統括</li>
                                            <li>🍔 <strong>食品業界</strong>：Farm to Tableの完全トレーサブルシステムを設計</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="skills-transformation">
                            <h4><i class="fas fa-graduation-cap"></i> 求められるスキルの大変革</h4>
                            
                            <table class="skills-comparison-table">
                                <thead>
                                    <tr>
                                        <th>スキル分野</th>
                                        <th>従来（2020年）</th>
                                        <th>現在・近未来（2025年〜）</th>
                                        <th>重要度変化</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>テクニカルスキル</strong></td>
                                        <td>Excel、メール、電話</td>
                                        <td>AI/ML理解、データ分析、プログラミング基礎</td>
                                        <td><span class="importance-up">↗️ 5倍</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>戦略思考</strong></td>
                                        <td>部分最適化</td>
                                        <td>システム思考、複雑系理解</td>
                                        <td><span class="importance-up">↗️ 3倍</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>コミュニケーション</strong></td>
                                        <td>日本語のみ</td>
                                        <td>多言語、異文化理解、デジタルコミュニケーション</td>
                                        <td><span class="importance-up">↗️ 4倍</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>創造性</strong></td>
                                        <td>定型業務中心</td>
                                        <td>デザイン思考、イノベーション創出</td>
                                        <td><span class="importance-up">↗️ 10倍</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>持続可能性</strong></td>
                                        <td>意識なし</td>
                                        <td>ESG専門知識、循環経済理解</td>
                                        <td><span class="importance-new">✨ 新規</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="career-roadmap">
                            <h4><i class="fas fa-road"></i> 調達プロフェッショナルへの道筋</h4>
                            
                            <div class="roadmap-timeline">
                                <div class="roadmap-stage entry">
                                    <div class="stage-number">1</div>
                                    <div class="stage-content">
                                        <h5>🚀 エントリーレベル（1-3年）</h5>
                                        <div class="stage-skills">
                                            <span class="skill-tag">基礎調達知識</span>
                                            <span class="skill-tag">Excel/データ分析</span>
                                            <span class="skill-tag">コミュニケーション</span>
                                        </div>
                                        <p><strong>目標年収：</strong> 400-600万円</p>
                                    </div>
                                </div>
                                
                                <div class="roadmap-stage specialist">
                                    <div class="stage-number">2</div>
                                    <div class="stage-content">
                                        <h5>🎯 スペシャリスト（3-7年）</h5>
                                        <div class="stage-skills">
                                            <span class="skill-tag">カテゴリー専門性</span>
                                            <span class="skill-tag">AI/データサイエンス基礎</span>
                                            <span class="skill-tag">戦略思考</span>
                                        </div>
                                        <p><strong>目標年収：</strong> 600-900万円</p>
                                    </div>
                                </div>
                                
                                <div class="roadmap-stage leader">
                                    <div class="stage-number">3</div>
                                    <div class="stage-content">
                                        <h5>👑 リーダー（7-12年）</h5>
                                        <div class="stage-skills">
                                            <span class="skill-tag">チームマネジメント</span>
                                            <span class="skill-tag">イノベーション創出</span>
                                            <span class="skill-tag">グローバル視点</span>
                                        </div>
                                        <p><strong>目標年収：</strong> 900-1500万円</p>
                                    </div>
                                </div>
                                
                                <div class="roadmap-stage executive">
                                    <div class="stage-number">4</div>
                                    <div class="stage-content">
                                        <h5>🌟 エグゼクティブ（12年〜）</h5>
                                        <div class="stage-skills">
                                            <span class="skill-tag">企業戦略レベル</span>
                                            <span class="skill-tag">エコシステム構築</span>
                                            <span class="skill-tag">未来創造</span>
                                        </div>
                                        <p><strong>目標年収：</strong> 1500万円〜</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="success-stories">
                            <h4><i class="fas fa-star"></i> 新時代の調達リーダー成功事例</h4>
                            
                            <div class="stories-grid">
                                <div class="story-card tesla">
                                    <div class="story-header">
                                        <div class="company-logo">🚗</div>
                                        <div class="story-title">
                                            <h6>テスラ・CPO（最高調達責任者）</h6>
                                            <p>年収：約3,000万円</p>
                                        </div>
                                    </div>
                                    <div class="story-content">
                                        <p><strong>革命的成果：</strong>従来の自動車業界の調達常識を破り、バッテリー技術の内製化により、EV普及を加速。</p>
                                        <div class="key-skills">
                                            <span class="skill">技術理解</span>
                                            <span class="skill">破壊的思考</span>
                                            <span class="skill">スピード重視</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="story-card amazon">
                                    <div class="story-header">
                                        <div class="company-logo">📦</div>
                                        <div class="story-title">
                                            <h6>Amazon・グローバル調達ディレクター</h6>
                                            <p>年収：約2,500万円</p>
                                        </div>
                                    </div>
                                    <div class="story-content">
                                        <p><strong>革命的成果：</strong>AI駆動の需要予測により、世界中の配送網を最適化。調達コスト30%削減を実現。</p>
                                        <div class="key-skills">
                                            <span class="skill">データサイエンス</span>
                                            <span class="skill">グローバル視点</span>
                                            <span class="skill">顧客中心思考</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="story-card unilever">
                                    <div class="story-header">
                                        <div class="company-logo">🌿</div>
                                        <div class="story-title">
                                            <h6>ユニリーバ・サステナビリティ調達責任者</h6>
                                            <p>年収：約2,000万円</p>
                                        </div>
                                    </div>
                                    <div class="story-content">
                                        <p><strong>革命的成果：</strong>サプライチェーン全体の温室効果ガス削減目標達成により、企業価値を大幅向上。</p>
                                        <div class="key-skills">
                                            <span class="skill">ESG専門性</span>
                                            <span class="skill">ステークホルダー調整</span>
                                            <span class="skill">長期視点</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>調達プロフェッショナルになるための重要ポイント</strong>
                            <div class="point-grid">
                                <div class="point-item">
                                    <h6>🎯 専門性の深化</h6>
                                    <p>単なる「何でもできる人」ではなく、特定領域でのエキスパートを目指す</p>
                                </div>
                                <div class="point-item">
                                    <h6>🤖 テクノロジー活用</h6>
                                    <p>AIに代替されるのではなく、AIを活用して価値を創造する人材になる</p>
                                </div>
                                <div class="point-item">
                                    <h6>🌐 グローバル視点</h6>
                                    <p>ローカルな視点だけでなく、世界規模での最適化を考える</p>
                                </div>
                                <div class="point-item">
                                    <h6>🌱 持続可能性</h6>
                                    <p>短期的利益だけでなく、長期的な社会・環境への貢献を重視する</p>
                                </div>
                            </div>
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
                        <div class="chapter2-intro">
                            <h3>🚨 現実に直面！調達部門の7つの痛い課題</h3>
                            <div class="reality-check">
                                <p><strong>質問：</strong>あなたの会社の調達部門は、本当に戦略的な価値を生み出していますか？</p>
                                <div class="answer-reveal">
                                    <p><i class="fas fa-arrow-right"></i> 多くの企業で「NO」が現実。このページで、なぜそうなるのかを解明しましょう。</p>
                                </div>
                            </div>
                        </div>

                        <div class="crisis-dashboard">
                            <h4><i class="fas fa-chart-line"></i> 調達部門の課題診断ダッシュボード</h4>
                            
                            <div class="issues-grid">
                                <div class="issue-card critical">
                                    <div class="issue-rank">🔥 最重要</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">⚡</div>
                                        <h5>戦略的調達機能の体制脆弱性</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill critical" style="width: 95%"></div>
                                            </div>
                                            <span class="meter-value">95%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill critical" style="width: 90%"></div>
                                            </div>
                                            <span class="meter-value">90%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> 調達部門が「お使い部門」状態</p>
                                        <div class="symptoms">
                                            <span class="symptom">💼 経営戦略への参画なし</span>
                                            <span class="symptom">📊 データに基づく提案不足</span>
                                            <span class="symptom">🎯 戦略的思考人材の不在</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約5,000万円〜2億円</span>
                                    </div>
                                </div>

                                <div class="issue-card critical">
                                    <div class="issue-rank">🔥 最重要</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">⏰</div>
                                        <h5>調達品・仕様の上流決定</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill critical" style="width: 90%"></div>
                                            </div>
                                            <span class="meter-value">90%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill critical" style="width: 85%"></div>
                                            </div>
                                            <span class="meter-value">85%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> 「後出しジャンケン」状態の調達</p>
                                        <div class="symptoms">
                                            <span class="symptom">🎯 設計後の価格交渉で限界</span>
                                            <span class="symptom">💡 技術的改善提案機会の損失</span>
                                            <span class="symptom">🔄 仕様変更コスト増大</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約3,000万円〜1.5億円</span>
                                    </div>
                                </div>

                                <div class="issue-card high">
                                    <div class="issue-rank">⚠️ 重要</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">🔒</div>
                                        <h5>サプライヤー固定化</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill high" style="width: 80%"></div>
                                            </div>
                                            <span class="meter-value">80%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill high" style="width: 75%"></div>
                                            </div>
                                            <span class="meter-value">75%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> 「なあなあ関係」による競争力低下</p>
                                        <div class="symptoms">
                                            <span class="symptom">💰 価格競争力の劣化</span>
                                            <span class="symptom">📈 継続的改善意欲の低下</span>
                                            <span class="symptom">🌍 新技術・新サプライヤー発掘不足</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約2,000万円〜8,000万円</span>
                                    </div>
                                </div>

                                <div class="issue-card high">
                                    <div class="issue-rank">⚠️ 重要</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">💰</div>
                                        <h5>価格査定力の不足</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill high" style="width: 85%"></div>
                                            </div>
                                            <span class="meter-value">85%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill medium" style="width: 65%"></div>
                                            </div>
                                            <span class="meter-value">65%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> 「言い値」で買わされる状態</p>
                                        <div class="symptoms">
                                            <span class="symptom">📊 原価分析スキル不足</span>
                                            <span class="symptom">🎯 市場価格との乖離把握不能</span>
                                            <span class="symptom">💼 交渉力・根拠の欠如</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約1,500万円〜6,000万円</span>
                                    </div>
                                </div>

                                <div class="issue-card medium">
                                    <div class="issue-rank">⚡ 注意</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">🔧</div>
                                        <h5>開発購買の発展途上</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill medium" style="width: 60%"></div>
                                            </div>
                                            <span class="meter-value">60%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill medium" style="width: 55%"></div>
                                            </div>
                                            <span class="meter-value">55%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> イノベーション創出への貢献不足</p>
                                        <div class="symptoms">
                                            <span class="symptom">💡 新技術共同開発の経験不足</span>
                                            <span class="symptom">🤝 サプライヤーとの戦略的連携不足</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約1,000万円〜4,000万円</span>
                                    </div>
                                </div>

                                <div class="issue-card medium">
                                    <div class="issue-rank">⚡ 注意</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">📚</div>
                                        <h5>調達スキル向上体制未整備</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill medium" style="width: 70%"></div>
                                            </div>
                                            <span class="meter-value">70%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill medium" style="width: 60%"></div>
                                            </div>
                                            <span class="meter-value">60%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> 人材成長の仕組み不在</p>
                                        <div class="symptoms">
                                            <span class="symptom">📈 体系的育成プログラム不足</span>
                                            <span class="symptom">🎓 専門知識の属人化</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約800万円〜3,000万円</span>
                                    </div>
                                </div>

                                <div class="issue-card low">
                                    <div class="issue-rank">📋 監視</div>
                                    <div class="issue-header">
                                        <div class="issue-icon">💾</div>
                                        <h5>調達情報管理体制不備</h5>
                                    </div>
                                    <div class="impact-meters">
                                        <div class="meter-item">
                                            <span class="meter-label">影響度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill low" style="width: 50%"></div>
                                            </div>
                                            <span class="meter-value">50%</span>
                                        </div>
                                        <div class="meter-item">
                                            <span class="meter-label">緊急度</span>
                                            <div class="meter-bar">
                                                <div class="meter-fill low" style="width: 40%"></div>
                                            </div>
                                            <span class="meter-value">40%</span>
                                        </div>
                                    </div>
                                    <div class="issue-description">
                                        <p><strong>問題:</strong> データ活用による意思決定不足</p>
                                        <div class="symptoms">
                                            <span class="symptom">📊 情報の散在・断片化</span>
                                            <span class="symptom">🔍 分析・レポーティング機能不足</span>
                                        </div>
                                    </div>
                                    <div class="cost-impact">
                                        <strong>年間損失額:</strong> <span class="cost-value">約500万円〜2,000万円</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="wake-up-call">
                            <h4><i class="fas fa-bell"></i> この現実を変える時が来た！</h4>
                            <div class="urgency-stats">
                                <div class="stat-item total-loss">
                                    <div class="stat-icon">💸</div>
                                    <div class="stat-content">
                                        <h5>年間総損失額</h5>
                                        <p class="stat-value">最大 <span class="loss-amount">約6.8億円</span></p>
                                        <p class="stat-detail">※中堅製造業（売上500億円）の場合</p>
                                    </div>
                                </div>
                                <div class="stat-item recovery-potential">
                                    <div class="stat-icon">🚀</div>
                                    <div class="stat-content">
                                        <h5>回復可能性</h5>
                                        <p class="stat-value"><span class="recovery-rate">80%以上</span> 改善可能</p>
                                        <p class="stat-detail">適切な改革により3年以内に実現</p>
                                    </div>
                                </div>
                                <div class="stat-item competitive-advantage">
                                    <div class="stat-icon">🏆</div>
                                    <div class="stat-content">
                                        <h5>競争優位性</h5>
                                        <p class="stat-value"><span class="advantage-rate">10-15%</span> 利益率向上</p>
                                        <p class="stat-detail">業界トップクラスへの道筋</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>課題解決への第一歩</strong>
                            <p>これらの課題は決して個別の問題ではありません。<strong>相互に関連し合う構造的な問題</strong>です。次の節で、これらを根本から解決する「調達競争力強化フレームワーク」をご紹介します。</p>
                        </div>
                    `
                },
                {
                    id: 'ch2-2',
                    title: '2.2 調達競争力強化の方向性と改革フレームワーク',
                    content: `
                        <div class="solution-intro">
                            <h3>💡 課題解決の究極フレームワーク誕生！</h3>
                            <div class="transformation-promise">
                                <p><strong>ついに発見：</strong>調達競争力を劇的に変える「科学的アプローチ」</p>
                                <div class="promise-highlight">
                                    <p><i class="fas fa-magic"></i> たった3つの要素で、あなたの会社の調達部門が業界トップクラスに変わる！</p>
                                </div>
                            </div>
                        </div>

                        <div class="power-formula">
                            <h4><i class="fas fa-formula"></i> 調達競争力の黄金方程式</h4>
                            
                            <div class="formula-container">
                                <div class="formula-visual">
                                    <div class="formula-part competition">
                                        <div class="formula-icon">⚔️</div>
                                        <h5>競争環境<br>構築力</h5>
                                        <div class="power-indicator">
                                            <div class="power-level" style="width: 85%"></div>
                                        </div>
                                    </div>
                                    
                                    <div class="formula-operator">×</div>
                                    
                                    <div class="formula-part execution">
                                        <div class="formula-icon">🎯</div>
                                        <h5>購買評価<br>実行力</h5>
                                        <div class="power-indicator">
                                            <div class="power-level" style="width: 90%"></div>
                                        </div>
                                    </div>
                                    
                                    <div class="formula-equals">=</div>
                                    
                                    <div class="formula-result">
                                        <div class="result-icon">🚀</div>
                                        <h5>調達戦略力</h5>
                                        <div class="result-level">
                                            <div class="level-bar supercharge" style="width: 95%"></div>
                                            <span class="level-text">95% 業界トップ級</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="foundation-support">
                                    <div class="foundation-arrow">↑ 支える基盤 ↑</div>
                                    <div class="foundation-platform">
                                        <div class="platform-icon">🏗️</div>
                                        <h5>調達基盤</h5>
                                        <div class="platform-elements">
                                            <span class="element">企画機能</span>
                                            <span class="element">組織体制</span>
                                            <span class="element">プロセス</span>
                                            <span class="element">情報管理</span>
                                            <span class="element">人材育成</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="three-pillars">
                            <h4><i class="fas fa-columns"></i> 成功への3本柱：詳細解説</h4>
                            
                            <div class="pillar-showcase">
                                <div class="pillar-card pillar-competition">
                                    <div class="pillar-header">
                                        <div class="pillar-number">1</div>
                                        <div class="pillar-icon">⚔️</div>
                                        <h5>競争環境構築力</h5>
                                        <div class="pillar-subtitle">市場を味方にする力</div>
                                    </div>
                                    
                                    <div class="pillar-content">
                                        <div class="capability-breakdown">
                                            <div class="capability-item">
                                                <div class="capability-icon">🌐</div>
                                                <div class="capability-text">
                                                    <h6>グローバル市場分析</h6>
                                                    <p>世界中の供給市場を常時監視し、新しい機会を発掘</p>
                                                </div>
                                                <div class="impact-score">+25%コスト削減</div>
                                            </div>
                                            
                                            <div class="capability-item">
                                                <div class="capability-icon">🔍</div>
                                                <div class="capability-text">
                                                    <h6>新規サプライヤー発掘</h6>
                                                    <p>隠れた優良サプライヤーを見つけ出し、競争を活性化</p>
                                                </div>
                                                <div class="impact-score">+15%品質向上</div>
                                            </div>
                                            
                                            <div class="capability-item">
                                                <div class="capability-icon">📈</div>
                                                <div class="capability-text">
                                                    <h6>競争原理活用</h6>
                                                    <p>健全な競争環境を構築し、継続的改善を促進</p>
                                                </div>
                                                <div class="impact-score">+20%イノベーション</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="pillar-card pillar-execution">
                                    <div class="pillar-header">
                                        <div class="pillar-number">2</div>
                                        <div class="pillar-icon">🎯</div>
                                        <h5>購買評価・実行力</h5>
                                        <div class="pillar-subtitle">確実に成果を出す力</div>
                                    </div>
                                    
                                    <div class="pillar-content">
                                        <div class="capability-breakdown">
                                            <div class="capability-item">
                                                <div class="capability-icon">🔬</div>
                                                <div class="capability-text">
                                                    <h6>精密QCD査定</h6>
                                                    <p>品質・コスト・納期を科学的に評価し、最適解を導出</p>
                                                </div>
                                                <div class="impact-score">+30%精度向上</div>
                                            </div>
                                            
                                            <div class="capability-item">
                                                <div class="capability-icon">💰</div>
                                                <div class="capability-text">
                                                    <h6>高度な原価分析</h6>
                                                    <p>コスト構造を徹底分析し、適正価格を見極める</p>
                                                </div>
                                                <div class="impact-score">+18%価格最適化</div>
                                            </div>
                                            
                                            <div class="capability-item">
                                                <div class="capability-icon">⚡</div>
                                                <div class="capability-text">
                                                    <h6>施策実行力</h6>
                                                    <p>計画を確実に実行し、目標達成まで粘り強く推進</p>
                                                </div>
                                                <div class="impact-score">+40%達成率向上</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="pillar-card pillar-foundation">
                                    <div class="pillar-header">
                                        <div class="pillar-number">3</div>
                                        <div class="pillar-icon">🏗️</div>
                                        <h5>調達基盤</h5>
                                        <div class="pillar-subtitle">持続成長を支える力</div>
                                    </div>
                                    
                                    <div class="pillar-content">
                                        <div class="foundation-grid">
                                            <div class="foundation-element">
                                                <div class="element-icon">🎯</div>
                                                <h6>調達企画機能強化</h6>
                                                <p>中長期視点での戦略立案</p>
                                            </div>
                                            <div class="foundation-element">
                                                <div class="element-icon">🏢</div>
                                                <h6>組織体制整備</h6>
                                                <p>戦略実行に最適な組織設計</p>
                                            </div>
                                            <div class="foundation-element">
                                                <div class="element-icon">🔄</div>
                                                <h6>PDCAプロセス徹底</h6>
                                                <p>継続的改善サイクルの確立</p>
                                            </div>
                                            <div class="foundation-element">
                                                <div class="element-icon">⚙️</div>
                                                <h6>プロセス標準化</h6>
                                                <p>効率性と品質の両立</p>
                                            </div>
                                            <div class="foundation-element">
                                                <div class="element-icon">💾</div>
                                                <h6>情報管理システム</h6>
                                                <p>データ駆動意思決定の実現</p>
                                            </div>
                                            <div class="foundation-element">
                                                <div class="element-icon">🎓</div>
                                                <h6>教育体制整備</h6>
                                                <p>継続的スキル向上の仕組み</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="transformation-roadmap">
                            <h4><i class="fas fa-road"></i> 変革実行ロードマップ</h4>
                            
                            <div class="roadmap-phases">
                                <div class="phase-card phase-1">
                                    <div class="phase-header">
                                        <div class="phase-number">Phase 1</div>
                                        <div class="phase-duration">0-6ヶ月</div>
                                    </div>
                                    <h5>🚀 基盤構築期</h5>
                                    <div class="phase-tasks">
                                        <div class="task-item">現状診断・課題特定</div>
                                        <div class="task-item">調達戦略策定</div>
                                        <div class="task-item">組織体制整備</div>
                                        <div class="task-item">人材配置最適化</div>
                                    </div>
                                    <div class="phase-result">
                                        <strong>期待成果：</strong><span class="result-value">5-10%コスト削減</span>
                                    </div>
                                </div>

                                <div class="phase-card phase-2">
                                    <div class="phase-header">
                                        <div class="phase-number">Phase 2</div>
                                        <div class="phase-duration">6-18ヶ月</div>
                                    </div>
                                    <h5>⚔️ 競争力強化期</h5>
                                    <div class="phase-tasks">
                                        <div class="task-item">サプライヤー競争環境構築</div>
                                        <div class="task-item">価格査定力向上</div>
                                        <div class="task-item">プロセス標準化推進</div>
                                        <div class="task-item">情報システム導入</div>
                                    </div>
                                    <div class="phase-result">
                                        <strong>期待成果：</strong><span class="result-value">15-25%総合改善</span>
                                    </div>
                                </div>

                                <div class="phase-card phase-3">
                                    <div class="phase-header">
                                        <div class="phase-number">Phase 3</div>
                                        <div class="phase-duration">18-36ヶ月</div>
                                    </div>
                                    <h5>🏆 優位性確立期</h5>
                                    <div class="phase-tasks">
                                        <div class="task-item">開発購買本格展開</div>
                                        <div class="task-item">グローバル調達網構築</div>
                                        <div class="task-item">AI・デジタル技術活用</div>
                                        <div class="task-item">サステナビリティ統合</div>
                                    </div>
                                    <div class="phase-result">
                                        <strong>期待成果：</strong><span class="result-value">業界トップクラス達成</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="success-guarantee">
                            <h4><i class="fas fa-shield-check"></i> 成功保証システム</h4>
                            
                            <div class="guarantee-grid">
                                <div class="guarantee-item">
                                    <div class="guarantee-icon">📊</div>
                                    <h6>定量的成果保証</h6>
                                    <p>明確なKPIによる成果測定と改善サイクル</p>
                                    <div class="guarantee-metric">ROI 300%以上保証</div>
                                </div>
                                
                                <div class="guarantee-item">
                                    <div class="guarantee-icon">🎯</div>
                                    <h6>段階的リスク管理</h6>
                                    <p>フェーズごとの成果確認と軌道修正機能</p>
                                    <div class="guarantee-metric">リスク低減 90%</div>
                                </div>
                                
                                <div class="guarantee-item">
                                    <div class="guarantee-icon">🔄</div>
                                    <h6>継続改善メカニズム</h6>
                                    <p>PDCAサイクルによる持続的競争力向上</p>
                                    <div class="guarantee-metric">年率 15%向上</div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-key"></i>
                            <strong>フレームワーク成功の秘密</strong>
                            <p>このフレームワークの真の力は、<strong>「競争環境構築力」×「購買評価・実行力」の相乗効果</strong>にあります。単体では限界がある各要素が、組み合わさることで爆発的な成果を生み出します。そして、それを支える「調達基盤」が持続的成長を実現するのです。</p>
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

                        <div class="success-stories-showcase">
                            <h4><i class="fas fa-trophy"></i> 業界を震撼させた成功事例</h4>
                            
                            <div class="stories-grid">
                                <div class="success-story transformative">
                                    <div class="story-badge">🏆 変革成功</div>
                                    <div class="story-header">
                                        <div class="company-icon">🏭</div>
                                        <div class="story-title">
                                            <h5>製造業A社：グローバル競争力獲得</h5>
                                            <p class="story-sector">自動車部品メーカー</p>
                                        </div>
                                    </div>
                                    
                                    <div class="story-challenge">
                                        <h6><i class="fas fa-exclamation-triangle"></i> 課題</h6>
                                        <p>国内サプライヤー依存、価格競争力不足で海外競合に劣勢</p>
                                    </div>
                                    
                                    <div class="story-solution">
                                        <h6><i class="fas fa-lightbulb"></i> 解決策</h6>
                                        <div class="solution-steps">
                                            <div class="step-item">
                                                <span class="step-number">1</span>
                                                <span class="step-text">グローバルサプライヤーDB構築</span>
                                            </div>
                                            <div class="step-item">
                                                <span class="step-number">2</span>
                                                <span class="step-text">競争入札制度導入</span>
                                            </div>
                                            <div class="step-item">
                                                <span class="step-number">3</span>
                                                <span class="step-text">原価分析力強化</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="story-results">
                                        <h6><i class="fas fa-chart-line"></i> 成果</h6>
                                        <div class="results-grid">
                                            <div class="result-item">
                                                <div class="result-value">-28%</div>
                                                <div class="result-label">調達コスト削減</div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-value">+35%</div>
                                                <div class="result-label">品質向上</div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-value">200%</div>
                                                <div class="result-label">利益増</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="success-story innovative">
                                    <div class="story-badge">🚀 革新成功</div>
                                    <div class="story-header">
                                        <div class="company-icon">💊</div>
                                        <div class="story-title">
                                            <h5>製薬会社B社：開発購買で業界リード</h5>
                                            <p class="story-sector">医薬品メーカー</p>
                                        </div>
                                    </div>
                                    
                                    <div class="story-challenge">
                                        <h6><i class="fas fa-exclamation-triangle"></i> 課題</h6>
                                        <p>新薬開発コスト増大、市場投入スピード遅延</p>
                                    </div>
                                    
                                    <div class="story-solution">
                                        <h6><i class="fas fa-lightbulb"></i> 解決策</h6>
                                        <div class="solution-steps">
                                            <div class="step-item">
                                                <span class="step-number">1</span>
                                                <span class="step-text">早期サプライヤー参画</span>
                                            </div>
                                            <div class="step-item">
                                                <span class="step-number">2</span>
                                                <span class="step-text">共同開発プラットフォーム</span>
                                            </div>
                                            <div class="step-item">
                                                <span class="step-number">3</span>
                                                <span class="step-text">リスク分散調達戦略</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="story-results">
                                        <h6><i class="fas fa-chart-line"></i> 成果</h6>
                                        <div class="results-grid">
                                            <div class="result-item">
                                                <div class="result-value">-18ヶ月</div>
                                                <div class="result-label">開発期間短縮</div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-value">-22%</div>
                                                <div class="result-label">開発コスト削減</div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-value">#1</div>
                                                <div class="result-label">業界シェア</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="success-story digital">
                                    <div class="story-badge">🤖 デジタル成功</div>
                                    <div class="story-header">
                                        <div class="company-icon">📱</div>
                                        <div class="story-title">
                                            <h5>電子機器C社：AI調達で競争優位</h5>
                                            <p class="story-sector">家電メーカー</p>
                                        </div>
                                    </div>
                                    
                                    <div class="story-challenge">
                                        <h6><i class="fas fa-exclamation-triangle"></i> 課題</h6>
                                        <p>部品価格変動リスク、需要予測精度不足</p>
                                    </div>
                                    
                                    <div class="story-solution">
                                        <h6><i class="fas fa-lightbulb"></i> 解決策</h6>
                                        <div class="solution-steps">
                                            <div class="step-item">
                                                <span class="step-number">1</span>
                                                <span class="step-text">AI価格予測システム</span>
                                            </div>
                                            <div class="step-item">
                                                <span class="step-number">2</span>
                                                <span class="step-text">自動調達プラットフォーム</span>
                                            </div>
                                            <div class="step-item">
                                                <span class="step-number">3</span>
                                                <span class="step-text">リアルタイム最適化</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="story-results">
                                        <h6><i class="fas fa-chart-line"></i> 成果</h6>
                                        <div class="results-grid">
                                            <div class="result-item">
                                                <div class="result-value">95%</div>
                                                <div class="result-label">予測精度</div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-value">-15%</div>
                                                <div class="result-label">在庫コスト削減</div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-value">300%</div>
                                                <div class="result-label">生産性向上</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="best-practices">
                            <h4><i class="fas fa-star"></i> 勝利のベストプラクティス集</h4>
                            
                            <div class="practices-accordion">
                                <div class="practice-category competition">
                                    <div class="category-header">
                                        <div class="category-icon">⚔️</div>
                                        <h5>競争環境構築のベストプラクティス</h5>
                                        <div class="expand-indicator">+</div>
                                    </div>
                                    <div class="category-content">
                                        <div class="practice-grid">
                                            <div class="practice-item">
                                                <div class="practice-title">🌐 3カ国ルール</div>
                                                <p>主要部品は必ず3カ国以上のサプライヤーから調達可能にする</p>
                                                <div class="practice-benefit">リスク分散＋価格競争力向上</div>
                                            </div>
                                            <div class="practice-item">
                                                <div class="practice-title">🔄 定期ローテーション</div>
                                                <p>2年ごとにサプライヤー見直しを実施し競争環境を維持</p>
                                                <div class="practice-benefit">継続的コスト最適化</div>
                                            </div>
                                            <div class="practice-item">
                                                <div class="practice-title">📊 ベンチマーク分析</div>
                                                <p>四半期ごとに市場価格・品質基準をベンチマーク</p>
                                                <div class="practice-benefit">客観的評価基準の確立</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="practice-category evaluation">
                                    <div class="category-header">
                                        <div class="category-icon">🎯</div>
                                        <h5>評価・実行力強化のベストプラクティス</h5>
                                        <div class="expand-indicator">+</div>
                                    </div>
                                    <div class="category-content">
                                        <div class="practice-grid">
                                            <div class="practice-item">
                                                <div class="practice-title">💰 原価透明化要求</div>
                                                <p>主要サプライヤーには原価構造の開示を義務化</p>
                                                <div class="practice-benefit">適正価格の科学的判断</div>
                                            </div>
                                            <div class="practice-item">
                                                <div class="practice-title">📈 段階的目標設定</div>
                                                <p>年率3-5%の継続的改善目標をサプライヤーと共有</p>
                                                <div class="practice-benefit">持続的コストダウン</div>
                                            </div>
                                            <div class="practice-item">
                                                <div class="practice-title">⚡ 迅速意思決定</div>
                                                <p>評価から意思決定まで最大30日以内のルール化</p>
                                                <div class="practice-benefit">機会損失の最小化</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="practice-category technology">
                                    <div class="category-header">
                                        <div class="category-icon">🤖</div>
                                        <h5>テクノロジー活用のベストプラクティス</h5>
                                        <div class="expand-indicator">+</div>
                                    </div>
                                    <div class="category-content">
                                        <div class="practice-grid">
                                            <div class="practice-item">
                                                <div class="practice-title">🧠 AI予測分析</div>
                                                <p>需要・価格・リスクをAIで予測し先手を打つ</p>
                                                <div class="practice-benefit">戦略的アドバンテージ</div>
                                            </div>
                                            <div class="practice-item">
                                                <div class="practice-title">🔗 ブロックチェーン活用</div>
                                                <p>サプライチェーンの完全透明化と追跡可能性</p>
                                                <div class="practice-benefit">信頼性とリスク管理</div>
                                            </div>
                                            <div class="practice-item">
                                                <div class="practice-title">📱 モバイル承認</div>
                                                <p>承認プロセスのモバイル化で意思決定を加速</p>
                                                <div class="practice-benefit">スピード＋効率性</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="implementation-checklist">
                            <h4><i class="fas fa-clipboard-check"></i> 実装チェックリスト</h4>
                            
                            <div class="checklist-sections">
                                <div class="checklist-section immediate">
                                    <h5>🚀 今すぐ実行（1ヶ月以内）</h5>
                                    <div class="checklist-items">
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check1">
                                            <label for="check1">現在のサプライヤー競争状況を分析</label>
                                        </div>
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check2">
                                            <label for="check2">主要調達品目の市場価格調査を実施</label>
                                        </div>
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check3">
                                            <label for="check3">調達チームのスキル評価を完了</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="checklist-section short-term">
                                    <h5>⚡ 短期実行（3ヶ月以内）</h5>
                                    <div class="checklist-items">
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check4">
                                            <label for="check4">新規サプライヤー開拓プロジェクト開始</label>
                                        </div>
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check5">
                                            <label for="check5">原価分析ツールの導入と教育</label>
                                        </div>
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check6">
                                            <label for="check6">サプライヤー評価制度の再構築</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="checklist-section long-term">
                                    <h5>🎯 中長期実行（6ヶ月以内）</h5>
                                    <div class="checklist-items">
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check7">
                                            <label for="check7">AI・デジタルツールの本格導入</label>
                                        </div>
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check8">
                                            <label for="check8">グローバル調達ネットワーク構築</label>
                                        </div>
                                        <div class="checklist-item">
                                            <input type="checkbox" id="check9">
                                            <label for="check9">開発購買体制の本格稼働</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <div class="chapter3-intro">
                            <h3><i class="fas fa-lightbulb"></i> 調達企画：戦略的価値創造の中核</h3>
                            <div class="strategic-awakening">
                                <p><strong>質問：</strong>なぜ同じ工場で、同じ製品を作っているのに、<span class="highlight-profit">利益率が10倍</span>も違う企業があるのでしょうか？</p>
                                <div class="answer-reveal">
                                    <p><strong>答え：</strong>調達企画力の差です。戦略的な調達企画により、<span class="profit-boost">原価30%削減</span>、<span class="quality-boost">品質向上</span>、<span class="speed-boost">開発期間50%短縮</span>を同時実現した企業が実在します。</p>
                                </div>
                            </div>
                        </div>

                        <div class="planning-system">
                            <h4><i class="fas fa-cogs"></i> 調達企画システム：3つの戦略エンジン</h4>
                            <p class="system-intro">調達企画とは、会社方針・事業方針に基づいて、より高いレベルのQCD（品質・コスト・納期）とその安定調達を実現する<strong>戦略的価値創造システム</strong>です。</p>
                            
                            <div class="three-engines">
                                <div class="engine-card target-deployment">
                                    <div class="engine-rank">🎯 第1エンジン</div>
                                    <div class="engine-header">
                                        <div class="engine-icon">📊</div>
                                        <h5>目標展開エンジン</h5>
                                    </div>
                                    <div class="engine-description">
                                        <p><strong>機能：</strong>経営目標を調達現場の具体的アクションに変換</p>
                                        <div class="transformation-flow">
                                            <div class="flow-step">
                                                <span class="step-label">経営目標</span>
                                                <span class="arrow">→</span>
                                            </div>
                                            <div class="flow-step">
                                                <span class="step-label">部門目標</span>
                                                <span class="arrow">→</span>
                                            </div>
                                            <div class="flow-step">
                                                <span class="step-label">個別目標</span>
                                            </div>
                                        </div>
                                        <div class="success-examples">
                                            <div class="example-tag"><strong>実績例</strong></div>
                                            <ul>
                                                <li>新商品目標原価<span class="metric-value">20%減</span></li>
                                                <li>現行品コストダウン年間<span class="metric-value">15%減</span></li>
                                                <li>品質不良率<span class="metric-value">90%削減</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="engine-card strategy-planning">
                                    <div class="engine-rank">⚡ 第2エンジン</div>
                                    <div class="engine-header">
                                        <div class="engine-icon">🎯</div>
                                        <h5>戦略立案エンジン</h5>
                                    </div>
                                    <div class="engine-description">
                                        <p><strong>機能：</strong>調達特性の深堀分析→最適戦略の構築</p>
                                        <div class="strategy-process">
                                            <div class="process-step">
                                                <div class="step-number">1</div>
                                                <div class="step-content">
                                                    <strong>調達特性分析</strong>
                                                    <span>仕様特性×調達環境の詳細把握</span>
                                                </div>
                                            </div>
                                            <div class="process-step">
                                                <div class="step-number">2</div>
                                                <div class="step-content">
                                                    <strong>改善要素特定</strong>
                                                    <span>買い方・作り方・仕様・調達政策</span>
                                                </div>
                                            </div>
                                            <div class="process-step">
                                                <div class="step-number">3</div>
                                                <div class="step-content">
                                                    <strong>調達基盤強化</strong>
                                                    <span>ボトルネック解消の体系的アプローチ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="engine-card execution-management">
                                    <div class="engine-rank">🔄 第3エンジン</div>
                                    <div class="engine-header">
                                        <div class="engine-icon">⚙️</div>
                                        <h5>実行マネジメントエンジン</h5>
                                    </div>
                                    <div class="engine-description">
                                        <p><strong>機能：</strong>高速PDCAサイクルによる継続的最適化</p>
                                        <div class="pdca-accelerator">
                                            <div class="pdca-cycle">
                                                <div class="pdca-phase plan">
                                                    <span class="phase-label">P</span>
                                                    <span class="phase-desc">精密な施策効果見積</span>
                                                </div>
                                                <div class="pdca-phase do">
                                                    <span class="phase-label">D</span>
                                                    <span class="phase-desc">グローバル情報収集実行</span>
                                                </div>
                                                <div class="pdca-phase check">
                                                    <span class="phase-label">C</span>
                                                    <span class="phase-desc">仮説検証・効果測定</span>
                                                </div>
                                                <div class="pdca-phase action">
                                                    <span class="phase-label">A</span>
                                                    <span class="phase-desc">迅速な施策変更・追加</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="speed-metrics">
                                            <div class="metric-item">
                                                <span class="metric-label">改善サイクル</span>
                                                <span class="metric-value">従来比3倍高速</span>
                                            </div>
                                            <div class="metric-item">
                                                <span class="metric-label">意思決定</span>
                                                <span class="metric-value">データドリブン100%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="synergy-effect">
                                <h5><i class="fas fa-rocket"></i> 3エンジン連携による相乗効果</h5>
                                <div class="synergy-visualization">
                                    <div class="synergy-formula">
                                        <span class="formula-part">目標展開</span>
                                        <span class="operator">×</span>
                                        <span class="formula-part">戦略立案</span>
                                        <span class="operator">×</span>
                                        <span class="formula-part">実行管理</span>
                                        <span class="equals">=</span>
                                        <span class="result">戦略的調達力</span>
                                    </div>
                                    <div class="impact-metrics">
                                        <div class="impact-item">
                                            <span class="impact-icon">💰</span>
                                            <span class="impact-desc">コスト削減効果<strong>3-5倍増幅</strong></span>
                                        </div>
                                        <div class="impact-item">
                                            <span class="impact-icon">⚡</span>
                                            <span class="impact-desc">改善スピード<strong>10倍加速</strong></span>
                                        </div>
                                        <div class="impact-item">
                                            <span class="impact-icon">🎯</span>
                                            <span class="impact-desc">目標達成率<strong>95%以上</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'ch3-2',
                    title: '3.2 調達戦略の方向性と視点',
                    content: `
                        <div class="value-equation-intro">
                            <h3><i class="fas fa-calculator"></i> 戦略的価値の黄金方程式</h3>
                            <div class="value-discovery">
                                <p><strong>驚愕の事実：</strong>同じ部品を調達しているのに、A社は<span class="cost-highlight">原価50%削減</span>、B社は<span class="quality-highlight">品質10倍向上</span>を実現。その秘密は<strong>価値最大化の方程式</strong>にありました。</p>
                            </div>
                        </div>

                        <div class="golden-equation">
                            <h4><i class="fas fa-crown"></i> 調達戦略の黄金方程式</h4>
                            <div class="equation-container">
                                <div class="equation-visual">
                                    <div class="equation-part value">
                                        <div class="part-header">
                                            <span class="part-icon">💎</span>
                                            <span class="part-label">戦略的価値</span>
                                        </div>
                                        <div class="part-symbol">V</div>
                                        <div class="value-meter">
                                            <div class="meter-fill" style="width: 85%"></div>
                                            <span class="meter-label">最大化目標</span>
                                        </div>
                                    </div>
                                    
                                    <span class="equation-equals">=</span>
                                    
                                    <div class="equation-fraction">
                                        <div class="fraction-numerator">
                                            <div class="fraction-part function">
                                                <span class="fraction-icon">⚡</span>
                                                <span class="fraction-label">実現機能</span>
                                                <span class="fraction-symbol">F</span>
                                                <div class="enhancement-arrows">↗️</div>
                                            </div>
                                        </div>
                                        <div class="fraction-line"></div>
                                        <div class="fraction-denominator">
                                            <div class="fraction-part cost">
                                                <span class="fraction-icon">💰</span>
                                                <span class="fraction-label">ライフサイクルコスト</span>
                                                <span class="fraction-symbol">C</span>
                                                <div class="reduction-arrows">↘️</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="equation-insights">
                                    <div class="insight-card function-boost">
                                        <h5><i class="fas fa-arrow-up"></i> 機能向上（F↗️）</h5>
                                        <ul class="boost-examples">
                                            <li>品質向上・性能向上</li>
                                            <li>付加価値創造</li>
                                            <li>顧客満足度向上</li>
                                        </ul>
                                    </div>
                                    <div class="insight-card cost-reduction">
                                        <h5><i class="fas fa-arrow-down"></i> コスト最適化（C↘️）</h5>
                                        <ul class="reduction-examples">
                                            <li>調達コスト削減</li>
                                            <li>運用コスト低減</li>
                                            <li>総保有コスト最適化</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="ve-foundation">
                                    <p class="ve-note"><i class="fas fa-lightbulb"></i> <strong>VE（Value Engineering）</strong>の価値最大化思想に基づく戦略的アプローチ</p>
                                </div>
                            </div>
                        </div>

                        <div class="cost-optimization-system">
                            <h4><i class="fas fa-cogs"></i> コスト最適化：4次元戦略システム</h4>
                            <div class="system-overview">
                                <p>コスト最適化を実現する<strong>4つの戦略次元</strong>から体系的にアプローチ。各次元は独立実行も、組み合わせによる相乗効果も可能です。</p>
                            </div>
                            
                            <div class="four-dimensions">
                                <div class="dimension-card policy">
                                    <div class="dimension-header">
                                        <div class="dimension-number">1</div>
                                        <div class="dimension-title">
                                            <h5>調達政策</h5>
                                            <span class="dimension-subtitle">構造革新</span>
                                        </div>
                                        <div class="impact-badge high">
                                            <span class="impact-icon">🚀</span>
                                            <span class="impact-text">高インパクト</span>
                                        </div>
                                    </div>
                                    <div class="dimension-content">
                                        <p class="dimension-desc">調達構造の根本的変革による戦略的効果創出</p>
                                        <div class="transformation-examples">
                                            <div class="transformation-item">
                                                <div class="trans-icon">🎯</div>
                                                <div class="trans-content">
                                                    <strong>サプライヤーポートフォリオ再編</strong>
                                                    <span>戦略的パートナー集約による協創効果</span>
                                                </div>
                                            </div>
                                            <div class="transformation-item">
                                                <div class="trans-icon">🌍</div>
                                                <div class="trans-content">
                                                    <strong>グローバル調達最適化</strong>
                                                    <span>国内・海外調達の戦略的配分</span>
                                                </div>
                                            </div>
                                            <div class="transformation-item">
                                                <div class="trans-icon">🔗</div>
                                                <div class="trans-content">
                                                    <strong>商流簡素化</strong>
                                                    <span>メーカー直取引による中間コスト排除</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="dimension-card specification">
                                    <div class="dimension-header">
                                        <div class="dimension-number">2</div>
                                        <div class="dimension-title">
                                            <h5>仕様最適化</h5>
                                            <span class="dimension-subtitle">価値工学</span>
                                        </div>
                                        <div class="impact-badge high">
                                            <span class="impact-icon">⚡</span>
                                            <span class="impact-text">技術革新</span>
                                        </div>
                                    </div>
                                    <div class="dimension-content">
                                        <p class="dimension-desc">設計仕様の戦略的見直しによる価値創造</p>
                                        <div class="optimization-matrix">
                                            <div class="matrix-row">
                                                <div class="method-card ve">
                                                    <div class="method-header">
                                                        <span class="method-icon">🔬</span>
                                                        <strong>VE (Value Engineering)</strong>
                                                    </div>
                                                    <div class="method-metrics">
                                                        <span class="metric-label">効果</span>
                                                        <span class="metric-value high">10-30%削減</span>
                                                    </div>
                                                    <p class="method-desc">機能・コスト同時最適化</p>
                                                </div>
                                                <div class="method-card vr">
                                                    <div class="method-header">
                                                        <span class="method-icon">🧩</span>
                                                        <strong>品種統合（VR）</strong>
                                                    </div>
                                                    <div class="method-metrics">
                                                        <span class="metric-label">効果</span>
                                                        <span class="metric-value medium">5-15%削減</span>
                                                    </div>
                                                    <p class="method-desc">品種集約・管理効率化</p>
                                                </div>
                                            </div>
                                            <div class="matrix-row">
                                                <div class="method-card innovation">
                                                    <div class="method-header">
                                                        <span class="method-icon">🆕</span>
                                                        <strong>新技術・工法採用</strong>
                                                    </div>
                                                    <div class="method-metrics">
                                                        <span class="metric-label">効果</span>
                                                        <span class="metric-value ultra">15-40%削減</span>
                                                    </div>
                                                    <p class="method-desc">革新的製造効率化</p>
                                                </div>
                                                <div class="method-card standard">
                                                    <div class="method-header">
                                                        <span class="method-icon">📦</span>
                                                        <strong>標準品活用</strong>
                                                    </div>
                                                    <div class="method-metrics">
                                                        <span class="metric-label">効果</span>
                                                        <span class="metric-value low">3-12%削減</span>
                                                    </div>
                                                    <p class="method-desc">汎用品による効率化</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="dimension-card purchasing">
                                    <div class="dimension-header">
                                        <div class="dimension-number">3</div>
                                        <div class="dimension-title">
                                            <h5>購買プロセス</h5>
                                            <span class="dimension-subtitle">買い方革新</span>
                                        </div>
                                        <div class="impact-badge medium">
                                            <span class="impact-icon">🎯</span>
                                            <span class="impact-text">プロセス改善</span>
                                        </div>
                                    </div>
                                    <div class="dimension-content">
                                        <p class="dimension-desc">購買プロセスの高度化による効率的価値実現</p>
                                        <div class="process-improvements">
                                            <div class="improvement-flow">
                                                <div class="flow-step">
                                                    <div class="step-icon">🔍</div>
                                                    <div class="step-content">
                                                        <strong>サプライヤー選定最適化</strong>
                                                        <span>戦略的評価・管理システム</span>
                                                    </div>
                                                </div>
                                                <div class="flow-arrow">→</div>
                                                <div class="flow-step">
                                                    <div class="step-icon">💹</div>
                                                    <div class="step-content">
                                                        <strong>価格査定高度化</strong>
                                                        <span>精密コスト分析・市場価格情報活用</span>
                                                    </div>
                                                </div>
                                                <div class="flow-arrow">→</div>
                                                <div class="flow-step">
                                                    <div class="step-icon">🤝</div>
                                                    <div class="step-content">
                                                        <strong>戦略的価格交渉</strong>
                                                        <span>Win-Win関係構築交渉術</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="dimension-card manufacturing">
                                    <div class="dimension-header">
                                        <div class="dimension-number">4</div>
                                        <div class="dimension-title">
                                            <h5>製造プロセス</h5>
                                            <span class="dimension-subtitle">作り方革新</span>
                                        </div>
                                        <div class="impact-badge medium">
                                            <span class="impact-icon">⚙️</span>
                                            <span class="impact-text">生産改善</span>
                                        </div>
                                    </div>
                                    <div class="dimension-content">
                                        <p class="dimension-desc">モノづくりプロセス変革による構造的コスト改善</p>
                                        <div class="manufacturing-strategies">
                                            <div class="strategy-grid">
                                                <div class="strategy-item make-buy">
                                                    <div class="strategy-header">
                                                        <span class="strategy-icon">🏭</span>
                                                        <strong>内外作編成</strong>
                                                    </div>
                                                    <p>最適な内製・外注配分</p>
                                                </div>
                                                <div class="strategy-item delivery">
                                                    <div class="strategy-header">
                                                        <span class="strategy-icon">🚚</span>
                                                        <strong>納入条件最適化</strong>
                                                    </div>
                                                    <p>物流・在庫効率の改善</p>
                                                </div>
                                                <div class="strategy-item process">
                                                    <div class="strategy-header">
                                                        <span class="strategy-icon">🔄</span>
                                                        <strong>生産プロセス改善</strong>
                                                    </div>
                                                    <p>製造効率・品質の向上</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="synergy-maximization">
                                <h5><i class="fas fa-magic"></i> 4次元シナジー効果</h5>
                                <div class="synergy-formula">
                                    <span class="synergy-part">調達政策</span>
                                    <span class="synergy-operator">×</span>
                                    <span class="synergy-part">仕様最適化</span>
                                    <span class="synergy-operator">×</span>
                                    <span class="synergy-part">購買プロセス</span>
                                    <span class="synergy-operator">×</span>
                                    <span class="synergy-part">製造プロセス</span>
                                    <span class="synergy-equals">=</span>
                                    <span class="synergy-result">最大価値実現</span>
                                </div>
                                <div class="combined-effects">
                                    <div class="effect-item">
                                        <span class="effect-icon">🎯</span>
                                        <span class="effect-desc">単独実行：<strong>10-40%</strong>のコスト削減</span>
                                    </div>
                                    <div class="effect-item">
                                        <span class="effect-icon">🚀</span>
                                        <span class="effect-desc">組み合わせ効果：<strong>50-70%</strong>のコスト削減</span>
                                    </div>
                                    <div class="effect-item">
                                        <span class="effect-icon">💎</span>
                                        <span class="effect-desc">総合価値向上：<strong>2-5倍</strong>の価値創造</span>
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
                                        <table class="pdca-details-table">
                                            <thead>
                                                <tr>
                                                    <th><i class="fas fa-bullseye"></i> 主要活動</th>
                                                    <th><i class="fas fa-list-alt"></i> 具体的内容</th>
                                                    <th><i class="fas fa-clock"></i> 期間</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>戦略目標の設定</strong></td>
                                                    <td>コスト削減率、品質向上目標、納期短縮目標の明確化</td>
                                                    <td>年初・四半期</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>調達戦略の立案</strong></td>
                                                    <td>ソーシング戦略、サプライヤー戦略、リスク管理戦略</td>
                                                    <td>中期計画</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>具体的施策計画</strong></td>
                                                    <td>年間調達計画、予算計画、プロジェクト計画の策定</td>
                                                    <td>年間計画</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>KPI・指標設定</strong></td>
                                                    <td>測定可能な成果指標とモニタリング体制の構築</td>
                                                    <td>継続</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="pdca-item do">
                                    <div class="pdca-letter">D</div>
                                    <div class="pdca-content">
                                        <h5>Do（実行フェーズ）</h5>
                                        <table class="pdca-details-table">
                                            <thead>
                                                <tr>
                                                    <th><i class="fas fa-play"></i> 実行活動</th>
                                                    <th><i class="fas fa-cogs"></i> 具体的業務</th>
                                                    <th><i class="fas fa-users"></i> 関与者</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>戦略的施策の実行</strong></td>
                                                    <td>サプライヤー開発、価格交渉、契約締結</td>
                                                    <td>調達企画チーム</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>日常的調達業務</strong></td>
                                                    <td>発注管理、納期管理、品質管理</td>
                                                    <td>調達実務担当</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>データ収集・蓄積</strong></td>
                                                    <td>実績データ、市場情報、パフォーマンスデータ収集</td>
                                                    <td>全調達メンバー</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>プロセス標準化</strong></td>
                                                    <td>ベストプラクティス展開、業務手順標準化</td>
                                                    <td>プロセス改善チーム</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="pdca-item check">
                                    <div class="pdca-letter">C</div>
                                    <div class="pdca-content">
                                        <h5>Check（評価・検証フェーズ）</h5>
                                        <table class="pdca-details-table">
                                            <thead>
                                                <tr>
                                                    <th><i class="fas fa-chart-line"></i> 評価活動</th>
                                                    <th><i class="fas fa-search"></i> 分析内容</th>
                                                    <th><i class="fas fa-clipboard-check"></i> 成果物</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>実績測定・分析</strong></td>
                                                    <td>KPI達成状況、コスト削減効果、品質向上効果</td>
                                                    <td>定量評価レポート</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>多角的な分析評価</strong></td>
                                                    <td>財務的効果、戦略的効果、リスク影響度</td>
                                                    <td>総合評価書</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>課題・問題の抽出</strong></td>
                                                    <td>目標未達要因、プロセス上の問題点</td>
                                                    <td>課題特定リスト</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>成功要因の分析</strong></td>
                                                    <td>好成果要因の特定と横展開可能性</td>
                                                    <td>成功パターン集</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="pdca-item action">
                                    <div class="pdca-letter">A</div>
                                    <div class="pdca-content">
                                        <h5>Action（改善・標準化フェーズ）</h5>
                                        <table class="pdca-details-table">
                                            <thead>
                                                <tr>
                                                    <th><i class="fas fa-tools"></i> 改善活動</th>
                                                    <th><i class="fas fa-tasks"></i> 実装内容</th>
                                                    <th><i class="fas fa-forward"></i> 次ステップ</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>改善策の立案・実行</strong></td>
                                                    <td>問題解決策の策定と実装</td>
                                                    <td>効果測定・検証</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>成功事例の標準化</strong></td>
                                                    <td>ベストプラクティスのマニュアル化・展開</td>
                                                    <td>組織全体への浸透</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>次期計画への反映</strong></td>
                                                    <td>学習成果を次期戦略・計画に組み込み</td>
                                                    <td>新PDCAサイクル開始</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>組織学習の促進</strong></td>
                                                    <td>知識・ノウハウの組織内共有と人材育成</td>
                                                    <td>継続的能力向上</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                        <div class="introduction-section">
                            <div class="intro-question">
                                <h4><i class="fas fa-question-circle"></i> なぜ調達プロセスの標準化が必要なのでしょうか？</h4>
                                <p>「いつも同じやり方で進めているつもりなのに、担当者によって結果が違う」「どこでどんな判断をすればよいか迷う」「緊急時の対応がバラバラで混乱する」...このような経験はありませんか？</p>
                            </div>
                            
                            <div class="analogy-box">
                                <div class="analogy-icon">🏭</div>
                                <div class="analogy-content">
                                    <h5>身近な例で理解する「標準化の重要性」</h5>
                                    <p>マクドナルドがなぜ世界中どこで食べても同じ味なのかを考えてみてください。それは<strong>「標準化されたプロセス」</strong>があるからです。調達活動も同じで、標準化により一貫した品質とスピードを実現できるのです。</p>
                                </div>
                            </div>
                            
                            <div class="key-benefits">
                                <h5><i class="fas fa-star"></i> プロセス標準化の3つの大きなメリット</h5>
                                <div class="benefits-grid">
                                    <div class="benefit-item">
                                        <div class="benefit-icon efficiency">⚡</div>
                                        <h6>効率性の向上</h6>
                                        <p>判断に迷う時間を削減<br>処理スピードが50%向上</p>
                                    </div>
                                    <div class="benefit-item">
                                        <div class="benefit-icon quality">🎯</div>
                                        <h6>品質の安定化</h6>
                                        <p>人による差をなくす<br>ミス・トラブルを80%削減</p>
                                    </div>
                                    <div class="benefit-item">
                                        <div class="benefit-icon training">📚</div>
                                        <h6>教育の効率化</h6>
                                        <p>新人教育が簡単に<br>習得期間を半分に短縮</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="process-hierarchy">
                            <h4><i class="fas fa-sitemap"></i> 調達プロセスの階層的意思決定体系</h4>
                            
                            <div class="hierarchy-explanation">
                                <p>調達の意思決定は<strong>「ピラミッド構造」</strong>になっています。上に行くほど<span class="highlight-strategic">戦略的で影響が大きく</span>、下に行くほど<span class="highlight-operational">日常的で実務的</span>になります。</p>
                                
                                <div class="decision-pyramid">
                                    <div class="pyramid-visual">
                                        <div class="pyramid-level level-1">
                                            <div class="level-label">戦略レベル</div>
                                            <div class="level-desc">企業の将来を決める重要な判断</div>
                                            <div class="level-examples">例：何を作るか？誰に頼むか？</div>
                                        </div>
                                        <div class="pyramid-level level-2">
                                            <div class="level-label">戦術レベル</div>
                                            <div class="level-desc">戦略を実現するための具体的方法</div>
                                            <div class="level-examples">例：どんな仕様で？どのサプライヤーで？</div>
                                        </div>
                                        <div class="pyramid-level level-3">
                                            <div class="level-label">実行レベル</div>
                                            <div class="level-desc">日々の業務で行う細かい調整</div>
                                            <div class="level-examples">例：いつ？いくらで？何個？</div>
                                        </div>
                                    </div>
                                    
                                    <div class="pyramid-characteristics">
                                        <div class="char-item">
                                            <i class="fas fa-clock"></i>
                                            <span>決定頻度</span>
                                            <div class="frequency-bar">
                                                <div class="freq-strategic">年1-2回</div>
                                                <div class="freq-tactical">月1-2回</div>
                                                <div class="freq-operational">毎日</div>
                                            </div>
                                        </div>
                                        <div class="char-item">
                                            <i class="fas fa-users"></i>
                                            <span>関与者</span>
                                            <div class="involvement-info">
                                                <div class="inv-strategic">経営陣・事業部長</div>
                                                <div class="inv-tactical">部長・課長</div>
                                                <div class="inv-operational">担当者・係長</div>
                                            </div>
                                        </div>
                                        <div class="char-item">
                                            <i class="fas fa-impact"></i>
                                            <span>影響度</span>
                                            <div class="impact-scale">
                                                <div class="impact-high">全社レベル</div>
                                                <div class="impact-medium">部門レベル</div>
                                                <div class="impact-low">個人・チーム</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="detailed-decisions">
                                <h5><i class="fas fa-list-ol"></i> 6段階の具体的な意思決定プロセス</h5>
                                <p>では、この階層に沿って6つの具体的な決定ステップを見てみましょう：</p>
                            </div>
                            
                            <div class="decision-levels">
                                <div class="level-item strategic">
                                    <div class="level-header">
                                        <div class="level-icon">🏢</div>
                                        <h5>戦略レベル（Strategic Level）</h5>
                                        <span class="level-subtitle">企業の将来を左右する重要な決定</span>
                                    </div>
                                    
                                    <div class="level-content">
                                        <div class="decision-step step-1">
                                            <div class="step-header">
                                                <div class="step-number">①</div>
                                                <div class="step-title">
                                                    <strong>製品レベルでの内外製造決定（Make or Buy）</strong>
                                                    <span class="step-summary">「この製品を自社で作るか、他社に頼むか？」</span>
                                                </div>
                                            </div>
                                            
                                            <div class="decision-details">
                                                <div class="real-example">
                                                    <h6><i class="fas fa-lightbulb"></i> 身近な例で理解</h6>
                                                    <p><strong>トヨタの場合：</strong>エンジンやトランスミッションは「コア技術」なので自社で製造。しかし、カーナビやオーディオシステムは専門メーカー（パナソニック等）から調達。</p>
                                                </div>
                                                
                                                <table class="decision-criteria-table">
                                                    <thead>
                                                        <tr>
                                                            <th><i class="fas fa-balance-scale"></i> 判断基準</th>
                                                            <th><i class="fas fa-users-cog"></i> 関与部門</th>
                                                            <th><i class="fas fa-calendar-alt"></i> 決定タイミング</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                • コア技術の有無<br>
                                                                • 戦略的重要性<br>
                                                                • 投資対効果
                                                            </td>
                                                            <td>
                                                                • 経営陣<br>
                                                                • 事業部門<br>
                                                                • 技術・調達部門
                                                            </td>
                                                            <td>
                                                                • 新製品開発時<br>
                                                                • 事業戦略見直し時<br>
                                                                • 年1-2回
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        
                                        <div class="decision-step step-2">
                                            <div class="step-header">
                                                <div class="step-number">②</div>
                                                <div class="step-title">
                                                    <strong>開発・設計レベルでの内外製造決定</strong>
                                                    <span class="step-summary">「この機能・モジュールを自社で開発するか？」</span>
                                                </div>
                                            </div>
                                            
                                            <div class="decision-details">
                                                <div class="real-example">
                                                    <h6><i class="fas fa-lightbulb"></i> 身近な例で理解</h6>
                                                    <p><strong>スマートフォンの場合：</strong>Appleは外観デザイン・OS・プロセッサーは自社開発。しかし、カメラセンサーはSONY、ディスプレイはサムスンから調達。</p>
                                                </div>
                                                
                                                <table class="decision-criteria-table">
                                                    <thead>
                                                        <tr>
                                                            <th><i class="fas fa-balance-scale"></i> 判断基準</th>
                                                            <th><i class="fas fa-users-cog"></i> 関与部門</th>
                                                            <th><i class="fas fa-calendar-alt"></i> 決定タイミング</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                • 設計ノウハウ<br>
                                                                • 開発リソース<br>
                                                                • 技術的難易度
                                                            </td>
                                                            <td>
                                                                • 設計・開発部門<br>
                                                                • 技術部門<br>
                                                                • 調達部門
                                                            </td>
                                                            <td>
                                                                • 製品設計段階<br>
                                                                • 設計変更時<br>
                                                                • 月1-2回
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="level-item tactical">
                                    <div class="level-header">
                                        <div class="level-icon">⚙️</div>
                                        <h5>戦術レベル（Tactical Level）</h5>
                                        <span class="level-subtitle">戦略を実現する具体的な方法を決める</span>
                                    </div>
                                    
                                    <div class="level-content">
                                        <div class="decision-step step-3">
                                            <div class="step-header">
                                                <div class="step-number">③</div>
                                                <div class="step-title">
                                                    <strong>部品単位での内外製造・仕様決定</strong>
                                                    <span class="step-summary">「この部品をどこで、どんな仕様で作るか？」</span>
                                                </div>
                                            </div>
                                            
                                            <div class="decision-details">
                                                <div class="real-example">
                                                    <h6><i class="fas fa-lightbulb"></i> 身近な例で理解</h6>
                                                    <p><strong>自動車部品の場合：</strong>ブレーキパッドは安全部品なので高品質仕様で信頼できる専門メーカーに。一方、内装パネルはコスト重視で複数社から選択。</p>
                                                </div>
                                                
                                                <div class="decision-flow">
                                                    <div class="flow-item">
                                                        <i class="fas fa-search"></i>
                                                        <span>品質要求確認</span>
                                                    </div>
                                                    <div class="flow-arrow">→</div>
                                                    <div class="flow-item">
                                                        <i class="fas fa-calculator"></i>
                                                        <span>コスト試算</span>
                                                    </div>
                                                    <div class="flow-arrow">→</div>
                                                    <div class="flow-item">
                                                        <i class="fas fa-industry"></i>
                                                        <span>生産能力確認</span>
                                                    </div>
                                                    <div class="flow-arrow">→</div>
                                                    <div class="flow-item">
                                                        <i class="fas fa-check"></i>
                                                        <span>仕様決定</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="decision-step step-4">
                                            <div class="step-header">
                                                <div class="step-number">④</div>
                                                <div class="step-title">
                                                    <strong>サプライヤー選定・決定</strong>
                                                    <span class="step-summary">「どのサプライヤーに発注するか？」</span>
                                                </div>
                                            </div>
                                            
                                            <div class="decision-details">
                                                <div class="real-example">
                                                    <h6><i class="fas fa-lightbulb"></i> 身近な例で理解</h6>
                                                    <p><strong>機械部品の調達：</strong>品質(Quality)、コスト(Cost)、納期(Delivery)、サービス(Service)の「QCDS」で総合評価。単純に安いだけでなく、トータルでベストな会社を選ぶ。</p>
                                                </div>
                                                
                                                <table class="qcds-evaluation-table">
                                                    <thead>
                                                        <tr>
                                                            <th>評価項目</th>
                                                            <th>重要度</th>
                                                            <th>評価ポイント</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Quality（品質）</strong></td>
                                                            <td><span class="weight-high">高</span></td>
                                                            <td>不良率、品質管理体制、認証取得</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Cost（コスト）</strong></td>
                                                            <td><span class="weight-high">高</span></td>
                                                            <td>単価、変動費、管理コスト</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Delivery（納期）</strong></td>
                                                            <td><span class="weight-medium">中</span></td>
                                                            <td>納期遵守率、リードタイム、柔軟性</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Service（サービス）</strong></td>
                                                            <td><span class="weight-medium">中</span></td>
                                                            <td>技術サポート、提案力、対応力</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="level-item operational">
                                    <div class="level-header">
                                        <div class="level-icon">📋</div>
                                        <h5>実行レベル（Operational Level）</h5>
                                        <span class="level-subtitle">日々の業務で実際に発注・契約を行う</span>
                                    </div>
                                    
                                    <div class="level-content">
                                        <div class="decision-step step-5">
                                            <div class="step-header">
                                                <div class="step-number">⑤</div>
                                                <div class="step-title">
                                                    <strong>調達条件決定</strong>
                                                    <span class="step-summary">「いつ、いくつ、どんな条件で発注するか？」</span>
                                                </div>
                                            </div>
                                            
                                            <div class="decision-details">
                                                <div class="real-example">
                                                    <h6><i class="fas fa-lightbulb"></i> 身近な例で理解</h6>
                                                    <p><strong>オフィス用品の調達：</strong>コピー用紙が残り1週間分になったら、通常の2倍量を月末に発注。大型連休前は3倍量を発注して在庫切れを防ぐ。</p>
                                                </div>
                                                
                                                <div class="conditions-checklist">
                                                    <div class="checklist-item">
                                                        <i class="fas fa-calendar-check"></i>
                                                        <div class="item-content">
                                                            <strong>納期設定</strong>
                                                            <span>生産計画、在庫状況を確認してタイミング決定</span>
                                                        </div>
                                                    </div>
                                                    <div class="checklist-item">
                                                        <i class="fas fa-boxes"></i>
                                                        <div class="item-content">
                                                            <strong>数量決定</strong>
                                                            <span>需要予測、適正在庫レベルを基に発注量決定</span>
                                                        </div>
                                                    </div>
                                                    <div class="checklist-item">
                                                        <i class="fas fa-shield-alt"></i>
                                                        <div class="item-content">
                                                            <strong>品質基準</strong>
                                                            <span>検査項目、合格基準、不良時対応を明文化</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="decision-step step-6">
                                            <div class="step-header">
                                                <div class="step-number">⑥</div>
                                                <div class="step-title">
                                                    <strong>調達価格決定・契約締結</strong>
                                                    <span class="step-summary">「最終価格を決めて正式に発注する」</span>
                                                </div>
                                            </div>
                                            
                                            <div class="decision-details">
                                                <div class="real-example">
                                                    <h6><i class="fas fa-lightbulb"></i> 身近な例で理解</h6>
                                                    <p><strong>価格交渉の例：</strong>市場価格が1個100円の部品を、年間10万個の長期契約を条件に95円で交渉成立。契約書に署名して正式発注。</p>
                                                </div>
                                                
                                                <div class="contract-process">
                                                    <div class="process-step">
                                                        <div class="step-icon">💰</div>
                                                        <div class="step-info">
                                                            <strong>価格交渉</strong>
                                                            <span>市場価格、競合見積もりを基に最適価格を決定</span>
                                                        </div>
                                                    </div>
                                                    <div class="process-arrow">↓</div>
                                                    <div class="process-step">
                                                        <div class="step-icon">📝</div>
                                                        <div class="step-info">
                                                            <strong>契約書作成</strong>
                                                            <span>法務確認を経て、取引条件を契約書に明記</span>
                                                        </div>
                                                    </div>
                                                    <div class="process-arrow">↓</div>
                                                    <div class="process-step">
                                                        <div class="step-icon">✅</div>
                                                        <div class="step-info">
                                                            <strong>正式発注</strong>
                                                            <span>承認を得てシステムに発注データを登録・送信</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <table class="nested-info-table">
                                                <thead>
                                                    <tr>
                                                        <th><i class="fas fa-file-alt"></i> 情報項目</th>
                                                        <th><i class="fas fa-info-circle"></i> 詳細内容</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>CR実績データ</strong></td>
                                                        <td>月次・年次の削減金額、削減率、達成状況</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>CR視点表</strong></td>
                                                        <td>分析結果、改善ポイント、効果測定</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>アクションプラン</strong></td>
                                                        <td>具体的施策計画、スケジュール、責任者</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>交渉戦略</strong></td>
                                                        <td>戦略メモ、交渉結果、教訓・ノウハウ</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>ベンチマーク</strong></td>
                                                        <td>市場価格、競合情報、目標値設定</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td>
                                            <div class="purpose-tags">
                                                <span class="purpose-tag primary">コスト削減活動の推進・管理</span>
                                                <span class="purpose-tag secondary">目標達成度の測定・評価</span>
                                                <span class="purpose-tag accent">改善施策の立案・実行</span>
                                            </div>
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
                            <div class="supplier-classification-matrix">
                                <h4><i class="fas fa-sitemap"></i> 戦略的サプライヤー分類マトリックス</h4>
                                <p class="matrix-description">サプライヤーを戦略的重要度と調達リスクの2軸で分類し、それぞれに適した管理アプローチを適用します。</p>
                                
                                <div class="matrix-container">
                                    <!-- Y軸ラベル -->
                                    <div class="y-axis-container">
                                        <div class="y-axis-label">
                                            <span class="axis-title">戦略的<br>重要度</span>
                                            <div class="axis-scale">
                                                <span class="scale-high">高</span>
                                                <span class="scale-low">低</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- メインマトリックス -->
                                    <div class="matrix-main">
                                        <div class="matrix-grid">
                                            <!-- 上段 (高戦略的重要度) -->
                                            <div class="matrix-row high-strategic">
                                                <div class="matrix-quadrant strategic-partners">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-handshake"></i>
                                                        <h6>戦略的パートナー</h6>
                                                        <small>Strategic Partners</small>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <div class="characteristics-section">
                                                            <p class="feature-desc"><strong>特徴：</strong>高戦略的重要度 × 高調達リスク</p>
                                                            <ul class="feature-list">
                                                                <li>コア技術・重要部品供給</li>
                                                                <li>代替困難な独自技術</li>
                                                                <li>長期パートナーシップ必須</li>
                                                            </ul>
                                                        </div>
                                                        <div class="strategy-section">
                                                            <span class="strategy-tag strategic-partner">戦略的アライアンス</span>
                                                            <ul class="approach-list">
                                                                <li>共同開発・技術革新</li>
                                                                <li>経営層定期会議</li>
                                                                <li>リスク共有体制</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="matrix-quadrant key-suppliers">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-star"></i>
                                                        <h6>重要サプライヤー</h6>
                                                        <small>Key Suppliers</small>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <div class="characteristics-section">
                                                            <p class="feature-desc"><strong>特徴：</strong>高戦略的重要度 × 低調達リスク</p>
                                                            <ul class="feature-list">
                                                                <li>重要部品の安定供給</li>
                                                                <li>複数供給源あり</li>
                                                                <li>高い品質・技術力</li>
                                                            </ul>
                                                        </div>
                                                        <div class="strategy-section">
                                                            <span class="strategy-tag key-supplier">優先パートナーシップ</span>
                                                            <ul class="approach-list">
                                                                <li>能力向上支援・投資</li>
                                                                <li>中長期契約</li>
                                                                <li>定期業績評価</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <!-- 下段 (低戦略的重要度) -->
                                            <div class="matrix-row low-strategic">
                                                <div class="matrix-quadrant operational-suppliers">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                        <h6>運用サプライヤー</h6>
                                                        <small>Operational Suppliers</small>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <div class="characteristics-section">
                                                            <p class="feature-desc"><strong>特徴：</strong>低戦略的重要度 × 高調達リスク</p>
                                                            <ul class="feature-list">
                                                                <li>特殊立地・設備要件</li>
                                                                <li>限定された供給源</li>
                                                                <li>標準的製品・サービス</li>
                                                            </ul>
                                                        </div>
                                                        <div class="strategy-section">
                                                            <span class="strategy-tag operational">リスク軽減重視</span>
                                                            <ul class="approach-list">
                                                                <li>代替サプライヤー確保</li>
                                                                <li>安全在庫管理</li>
                                                                <li>効率的取引プロセス</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="matrix-quadrant transactional-suppliers">
                                                    <div class="quadrant-header">
                                                        <i class="fas fa-exchange-alt"></i>
                                                        <h6>取引型サプライヤー</h6>
                                                        <small>Transactional Suppliers</small>
                                                    </div>
                                                    <div class="quadrant-content">
                                                        <div class="characteristics-section">
                                                            <p class="feature-desc"><strong>特徴：</strong>低戦略的重要度 × 低調達リスク</p>
                                                            <ul class="feature-list">
                                                                <li>汎用的製品・サービス</li>
                                                                <li>多数の供給源</li>
                                                                <li>標準化された仕様</li>
                                                            </ul>
                                                        </div>
                                                        <div class="strategy-section">
                                                            <span class="strategy-tag transactional">コスト最適化</span>
                                                            <ul class="approach-list">
                                                                <li>e-調達システム活用</li>
                                                                <li>競争入札実施</li>
                                                                <li>自動発注・省力化</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- X軸ラベル -->
                                        <div class="x-axis-container">
                                            <div class="x-axis-scale">
                                                <span class="scale-low">低</span>
                                                <span class="scale-high">高</span>
                                            </div>
                                            <div class="x-axis-label">
                                                <span class="axis-title">調達リスク</span>
                                            </div>
                                        </div>
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
            ]
        },
        {
            id: 'ch10',
            title: '第10章 契約マネジメントの基本',
            pages: [
                {
                    id: 'ch10-1',
                    title: '10.1 契約の基本的な考え方と重要性',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-handshake"></i>
                            <strong>契約マネジメントの意義</strong>
                            <p>契約マネジメントは、調達プロセスの中核を成す重要な機能です。単なる法的手続きを超えて、企業のリスク管理、価値創造、そして持続可能なサプライヤー関係構築の基盤となります。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-gavel"></i> 契約の法的意義</h4>
                            
                            <div class="definition-box">
                                <h5>契約の定義</h5>
                                <p>契約とは、法的に強制力を持つ当事者間の合意であり、権利と義務を明確に定めた法的文書です。調達における契約は、売主（サプライヤー）と買主（調達企業）の間で、商品やサービスの提供に関する条件を定めたものです。</p>
                            </div>

                            <div class="features-grid">
                                <div class="feature-item">
                                    <h6><i class="fas fa-balance-scale"></i> 権利義務の明確化</h6>
                                    <ul>
                                        <li>双方の責任範囲の明確化</li>
                                        <li>履行条件の詳細規定</li>
                                        <li>違反時の対処方法の規定</li>
                                        <li>紛争解決手続きの設定</li>
                                    </ul>
                                </div>

                                <div class="feature-item">
                                    <h6><i class="fas fa-shield-alt"></i> リスク配分機能</h6>
                                    <ul>
                                        <li>各種リスクの責任者明確化</li>
                                        <li>免責条項の設定</li>
                                        <li>保険・保証の義務化</li>
                                        <li>不可抗力条項の規定</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-chart-line"></i> 契約マネジメントのビジネス価値</h4>
                            
                            <div class="value-proposition">
                                <div class="value-item">
                                    <div class="value-number">1</div>
                                    <div class="value-content">
                                        <h6>コストコントロール</h6>
                                        <p>明確な価格条項、変更管理プロセス、コスト削減インセンティブの設定により、総調達コストの最適化を実現</p>
                                    </div>
                                </div>

                                <div class="value-item">
                                    <div class="value-number">2</div>
                                    <div class="value-content">
                                        <h6>品質保証</h6>
                                        <p>詳細な品質基準、検査手順、不適合時の対処方法を規定し、一貫した品質レベルを確保</p>
                                    </div>
                                </div>

                                <div class="value-item">
                                    <div class="value-number">3</div>
                                    <div class="value-content">
                                        <h6>納期管理</h6>
                                        <p>具体的な納期、マイルストーン、遅延時のペナルティを明記し、確実な納期遵守を促進</p>
                                    </div>
                                </div>

                                <div class="value-item">
                                    <div class="value-number">4</div>
                                    <div class="value-content">
                                        <h6>リスク低減</h6>
                                        <p>包括的なリスク分析と適切なリスク配分により、予期しない損失や事業中断を防止</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>契約マネジメント不備によるリスク</strong>
                            <ul>
                                <li><strong>法的リスク</strong>：不明確な条項による紛争、法的責任の拡大</li>
                                <li><strong>財務リスク</strong>：予期しないコスト増加、損害賠償責任</li>
                                <li><strong>運営リスク</strong>：サービス中断、品質問題の長期化</li>
                                <li><strong>評判リスク</strong>：取引先とのトラブルによる企業イメージ悪化</li>
                                <li><strong>機会損失</strong>：適切な条項がないことによる価値創造機会の逸失</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'ch10-2',
                    title: '10.2 契約の種類と特徴',
                    content: `
                        <div class="content-section">
                            <h4><i class="fas fa-list-alt"></i> 調達契約の分類体系</h4>
                            
                            <div class="classification-grid">
                                <div class="classification-item">
                                    <h5><i class="fas fa-tags"></i> 対象による分類</h5>
                                    <div class="sub-categories">
                                        <div class="sub-category">
                                            <h6>物品調達契約</h6>
                                            <ul>
                                                <li>原材料調達契約</li>
                                                <li>部品・コンポーネント契約</li>
                                                <li>完成品・商品調達契約</li>
                                                <li>設備・機器調達契約</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="sub-category">
                                            <h6>サービス調達契約</h6>
                                            <ul>
                                                <li>業務委託契約</li>
                                                <li>保守・メンテナンス契約</li>
                                                <li>コンサルティング契約</li>
                                                <li>システム開発契約</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="classification-item">
                                    <h5><i class="fas fa-clock"></i> 期間による分類</h5>
                                    <div class="sub-categories">
                                        <div class="sub-category">
                                            <h6>単発契約（スポット契約）</h6>
                                            <ul>
                                                <li>一回限りの取引</li>
                                                <li>明確な納期・仕様</li>
                                                <li>シンプルな契約構造</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="sub-category">
                                            <h6>継続契約（フレーム契約）</h6>
                                            <ul>
                                                <li>一定期間の継続取引</li>
                                                <li>基本条件の固定化</li>
                                                <li>柔軟な数量・時期調整</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="classification-item">
                                    <h5><i class="fas fa-dollar-sign"></i> 価格体系による分類</h5>
                                    <div class="sub-categories">
                                        <div class="sub-category">
                                            <h6>固定価格契約</h6>
                                            <ul>
                                                <li>価格の事前確定</li>
                                                <li>予算管理の容易さ</li>
                                                <li>サプライヤーリスク大</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="sub-category">
                                            <h6>変動価格契約</h6>
                                            <ul>
                                                <li>市場連動価格</li>
                                                <li>原材料費スライド制</li>
                                                <li>リスク分担型価格</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-file-contract"></i> 主要な契約形態の詳細</h4>
                            
                            <div class="contract-types">
                                <div class="contract-type">
                                    <h5><i class="fas fa-handshake"></i> 基本契約とスポット契約</h5>
                                    <div class="contract-details">
                                        <div class="detail-section">
                                            <h6>基本契約（マスター契約）</h6>
                                            <p>継続的な取引関係において、共通の基本条件を定めた包括的な契約</p>
                                            <div class="pros-cons">
                                                <div class="pros">
                                                    <strong>メリット：</strong>
                                                    <ul>
                                                        <li>取引の効率化・標準化</li>
                                                        <li>契約締結コストの削減</li>
                                                        <li>長期的関係の構築</li>
                                                        <li>条件交渉の安定化</li>
                                                    </ul>
                                                </div>
                                                <div class="cons">
                                                    <strong>デメリット：</strong>
                                                    <ul>
                                                        <li>市場変動への対応困難</li>
                                                        <li>新規参入の阻害</li>
                                                        <li>契約条件の硬直化リスク</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="detail-section">
                                            <h6>スポット契約（個別契約）</h6>
                                            <p>特定の取引に特化した単発の契約</p>
                                            <div class="pros-cons">
                                                <div class="pros">
                                                    <strong>メリット：</strong>
                                                    <ul>
                                                        <li>市場価格の反映</li>
                                                        <li>競争原理の活用</li>
                                                        <li>柔軟な条件設定</li>
                                                        <li>リスクの限定化</li>
                                                    </ul>
                                                </div>
                                                <div class="cons">
                                                    <strong>デメリット：</strong>
                                                    <ul>
                                                        <li>契約締結コストの高さ</li>
                                                        <li>供給の不安定性</li>
                                                        <li>品質の一貫性確保困難</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="contract-type">
                                    <h5><i class="fas fa-chart-line"></i> パフォーマンス契約</h5>
                                    <div class="performance-details">
                                        <p>成果や性能に基づいて報酬を決定する契約形態</p>
                                        
                                        <div class="performance-types">
                                            <div class="type-item">
                                                <h6>SLA（Service Level Agreement）契約</h6>
                                                <ul>
                                                    <li>具体的なサービス水準の定義</li>
                                                    <li>測定指標（KPI）の設定</li>
                                                    <li>達成度に応じた報酬調整</li>
                                                    <li>改善計画の義務化</li>
                                                </ul>
                                            </div>

                                            <div class="type-item">
                                                <h6>ゲインシェア契約</h6>
                                                <ul>
                                                    <li>コスト削減効果の共有</li>
                                                    <li>改善インセンティブの提供</li>
                                                    <li>Win-Win関係の構築</li>
                                                    <li>継続的改善の促進</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>契約形態選択の考慮要因</strong>
                            <ol>
                                <li><strong>取引の性質</strong>：標準品 vs 特注品、継続性、重要度</li>
                                <li><strong>市場環境</strong>：価格変動性、サプライヤー数、競争状況</li>
                                <li><strong>リスク特性</strong>：技術リスク、市場リスク、財務リスク</li>
                                <li><strong>戦略的重要度</strong>：コア業務との関連性、差別化要素</li>
                                <li><strong>管理コスト</strong>：契約管理負荷、モニタリング要件</li>
                            </ol>
                        </div>
                    `
                },
                {
                    id: 'ch10-3',
                    title: '10.3 契約条項の設計と管理',
                    content: `
                        <div class="content-section">
                            <h4><i class="fas fa-edit"></i> 契約条項設計の基本原則</h4>
                            
                            <div class="principles-grid">
                                <div class="principle-item">
                                    <h5><i class="fas fa-eye"></i> 明確性の原則</h5>
                                    <p>曖昧さを排除し、具体的で測定可能な条件を設定</p>
                                    <ul>
                                        <li>具体的な数値・期限の明示</li>
                                        <li>専門用語の定義明確化</li>
                                        <li>測定方法・基準の規定</li>
                                        <li>解釈の余地がない表現</li>
                                    </ul>
                                </div>

                                <div class="principle-item">
                                    <h5><i class="fas fa-balance-scale"></i> 公平性の原則</h5>
                                    <p>双方にとって合理的でバランスの取れた条件設定</p>
                                    <ul>
                                        <li>適正なリスク分担</li>
                                        <li>対等な権利義務関係</li>
                                        <li>合理的な責任制限</li>
                                        <li>相互利益の考慮</li>
                                    </ul>
                                </div>

                                <div class="principle-item">
                                    <h5><i class="fas fa-shield-alt"></i> 実効性の原則</h5>
                                    <p>実際に履行可能で実効性のある条項設計</p>
                                    <ul>
                                        <li>現実的な期限・条件設定</li>
                                        <li>履行可能性の検証</li>
                                        <li>強制執行可能な条項</li>
                                        <li>例外規定の適切な設定</li>
                                    </ul>
                                </div>

                                <div class="principle-item">
                                    <h5><i class="fas fa-sync-alt"></i> 柔軟性の原則</h5>
                                    <p>環境変化に対応できる適応性のある契約設計</p>
                                    <ul>
                                        <li>変更手続きの明確化</li>
                                        <li>レビュー・見直し条項</li>
                                        <li>エスカレーション条項</li>
                                        <li>不可抗力条項の設定</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-list-ol"></i> 重要な契約条項の詳細設計</h4>
                            
                            <div class="clauses-detail">
                                <div class="clause-category">
                                    <h5><i class="fas fa-clipboard-check"></i> 基本的取引条件</h5>
                                    
                                    <div class="clause-items">
                                        <div class="clause-item">
                                            <h6>対象物・仕様条項</h6>
                                            <div class="clause-content">
                                                <p><strong>設計ポイント：</strong></p>
                                                <ul>
                                                    <li>詳細仕様書の添付・引用</li>
                                                    <li>品質基準・検査方法の明記</li>
                                                    <li>仕様変更手続きの規定</li>
                                                    <li>サンプル・見本の取り扱い</li>
                                                </ul>
                                                
                                                <div class="example-box">
                                                    <strong>記載例：</strong>
                                                    <p>「本契約の対象物は、別紙仕様書第1号に定める仕様に適合する○○とし、JIS規格第×××号に準拠するものとする。品質検査は、別紙検査要領に従って実施し、合格基準を満たさない場合は不合格品として取り扱う。」</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="clause-item">
                                            <h6>価格・支払条項</h6>
                                            <div class="clause-content">
                                                <p><strong>設計ポイント：</strong></p>
                                                <ul>
                                                    <li>価格の内訳・構成要素の明示</li>
                                                    <li>支払条件・サイトの設定</li>
                                                    <li>価格改定メカニズムの規定</li>
                                                    <li>税金・関税等の負担区分</li>
                                                </ul>
                                                
                                                <div class="price-adjustment-table">
                                                    <h6>価格改定条項の例</h6>
                                                    <table>
                                                        <tr><th>改定要因</th><th>改定方式</th><th>改定時期</th></tr>
                                                        <tr><td>原材料価格変動</td><td>スライド制（±10%超）</td><td>四半期毎見直し</td></tr>
                                                        <tr><td>労務費上昇</td><td>協議により決定</td><td>年1回</td></tr>
                                                        <tr><td>為替変動</td><td>基準レートから±5%超</td><td>月次調整</td></tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="clause-item">
                                            <h6>納期・納入条項</h6>
                                            <div class="clause-content">
                                                <p><strong>設計ポイント：</strong></p>
                                                <ul>
                                                    <li>具体的納期・マイルストーンの設定</li>
                                                    <li>納入場所・方法の明記</li>
                                                    <li>遅延時のペナルティ規定</li>
                                                    <li>部分納入・分割納入の取り扱い</li>
                                                </ul>
                                                
                                                <div class="delivery-schedule">
                                                    <h6>納期管理条項例</h6>
                                                    <div class="schedule-stages">
                                                        <div class="stage">
                                                            <span class="stage-name">設計完了</span>
                                                            <span class="stage-date">契約後30日</span>
                                                        </div>
                                                        <div class="stage">
                                                            <span class="stage-name">試作品納入</span>
                                                            <span class="stage-date">契約後60日</span>
                                                        </div>
                                                        <div class="stage">
                                                            <span class="stage-name">量産開始</span>
                                                            <span class="stage-date">契約後90日</span>
                                                        </div>
                                                        <div class="stage">
                                                            <span class="stage-name">最終納入</span>
                                                            <span class="stage-date">契約後120日</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="clause-category">
                                    <h5><i class="fas fa-exclamation-triangle"></i> リスク管理条項</h5>
                                    
                                    <div class="risk-clauses">
                                        <div class="risk-item">
                                            <h6>責任制限・免責条項</h6>
                                            <ul>
                                                <li>損害賠償の上限設定</li>
                                                <li>間接損害の免責</li>
                                                <li>不可抗力免責の範囲</li>
                                                <li>製造物責任の取り扱い</li>
                                            </ul>
                                        </div>

                                        <div class="risk-item">
                                            <h6>知的財産権条項</h6>
                                            <ul>
                                                <li>既存IP権の保護</li>
                                                <li>新規開発IPの帰属</li>
                                                <li>侵害時の対応手続き</li>
                                                <li>ライセンス・使用権の設定</li>
                                            </ul>
                                        </div>

                                        <div class="risk-item">
                                            <h6>機密保持条項</h6>
                                            <ul>
                                                <li>機密情報の定義・範囲</li>
                                                <li>使用目的・期間の制限</li>
                                                <li>返還・廃棄義務</li>
                                                <li>違反時の救済措置</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-tools"></i>
                            <strong>契約条項管理のベストプラクティス</strong>
                            <ol>
                                <li><strong>標準化・テンプレート化</strong>：共通条項の標準化によるリスク低減と効率化</li>
                                <li><strong>法務レビュー体制</strong>：専門的知見による条項の適法性・有効性の確保</li>
                                <li><strong>継続的見直し</strong>：法改正や事業環境変化への対応</li>
                                <li><strong>交渉ポイントの明確化</strong>：譲歩可能点と譲歩不可能点の事前整理</li>
                                <li><strong>実務担当者への教育</strong>：契約条項の理解と適切な運用の徹底</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch11',
            title: '第11章 品質管理・保証の仕組み',
            pages: [
                {
                    id: 'ch11-1',
                    title: '11.1 調達における品質管理の意義',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-award"></i>
                            <strong>品質管理の戦略的意義</strong>
                            <p>調達における品質管理は、単なる不良品の排除にとどまらず、企業の競争力強化と持続可能な成長を支える重要な戦略的活動です。サプライチェーン全体の品質向上により、顧客満足の向上と企業価値の最大化を実現します。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-target"></i> 品質管理の多面的価値</h4>
                            
                            <div class="value-dimensions">
                                <div class="dimension-item">
                                    <div class="dimension-header">
                                        <i class="fas fa-users"></i>
                                        <h5>顧客価値の向上</h5>
                                    </div>
                                    <div class="dimension-content">
                                        <ul>
                                            <li><strong>製品・サービス品質の安定化</strong>：一貫した品質レベルによる顧客信頼の獲得</li>
                                            <li><strong>顧客満足度の向上</strong>：品質不具合の削減による顧客体験の改善</li>
                                            <li><strong>ブランド価値の向上</strong>：高品質製品による企業ブランドの差別化</li>
                                            <li><strong>市場競争力の強化</strong>：品質優位性による市場シェア拡大</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="dimension-item">
                                    <div class="dimension-header">
                                        <i class="fas fa-chart-line"></i>
                                        <h5>経営効率の改善</h5>
                                    </div>
                                    <div class="dimension-content">
                                        <ul>
                                            <li><strong>品質コストの最適化</strong>：予防コスト投入による総品質コストの削減</li>
                                            <li><strong>運営効率の向上</strong>：不良品対応業務の削減による業務効率化</li>
                                            <li><strong>在庫の最適化</strong>：品質安定化による安全在庫の削減</li>
                                            <li><strong>生産性の向上</strong>：品質問題による作業中断の削減</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="dimension-item">
                                    <div class="dimension-header">
                                        <i class="fas fa-shield-alt"></i>
                                        <h5>リスク管理の強化</h5>
                                    </div>
                                    <div class="dimension-content">
                                        <ul>
                                            <li><strong>製造物責任リスクの低減</strong>：品質不具合による法的責任の最小化</li>
                                            <li><strong>リコール・回収リスクの削減</strong>：市場での品質問題による大規模損失の防止</li>
                                            <li><strong>規制コンプライアンス</strong>：法的・業界基準への確実な適合</li>
                                            <li><strong>サプライチェーンリスクの管理</strong>：上流品質問題の波及防止</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="dimension-item">
                                    <div class="dimension-header">
                                        <i class="fas fa-handshake"></i>
                                        <h5>関係性の強化</h5>
                                    </div>
                                    <div class="dimension-content">
                                        <ul>
                                            <li><strong>サプライヤー関係の向上</strong>：協働的品質改善による Win-Win 関係構築</li>
                                            <li><strong>内部連携の強化</strong>：品質目標共有による部門間連携の促進</li>
                                            <li><strong>ステークホルダー信頼</strong>：投資家・パートナーからの信頼獲得</li>
                                            <li><strong>長期的競争優位</strong>：品質文化の構築による持続的競争力</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-cogs"></i> 品質管理システムの構成要素</h4>
                            
                            <div class="system-components">
                                <div class="component-layer" data-level="1">
                                    <h5><i class="fas fa-flag"></i> 品質方針・戦略レベル</h5>
                                    <div class="component-items">
                                        <div class="component-item">
                                            <h6>品質方針の策定</h6>
                                            <p>企業全体の品質に対する基本的な考え方と方向性を明確化</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>品質目標の設定</h6>
                                            <p>具体的で測定可能な品質目標と達成指標（KPI）の設定</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>品質戦略の立案</h6>
                                            <p>事業戦略と整合した品質向上のロードマップ策定</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="component-layer" data-level="2">
                                    <h5><i class="fas fa-sitemap"></i> 組織・体制レベル</h5>
                                    <div class="component-items">
                                        <div class="component-item">
                                            <h6>品質管理組織</h6>
                                            <p>品質保証部門の設置と明確な責任・権限の配分</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>役割・責任の明確化</h6>
                                            <p>各部門・個人レベルでの品質責任の明確化</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>教育・訓練体制</h6>
                                            <p>品質意識向上と技能習得のための継続的教育プログラム</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="component-layer" data-level="3">
                                    <h5><i class="fas fa-clipboard-list"></i> プロセス・手順レベル</h5>
                                    <div class="component-items">
                                        <div class="component-item">
                                            <h6>品質管理プロセス</h6>
                                            <p>サプライヤー選定から納入まで一貫した品質管理フロー</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>検査・テスト手順</h6>
                                            <p>標準化された検査方法と判定基準の設定</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>不具合対応手順</h6>
                                            <p>品質問題発生時の迅速な対応・是正措置手順</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="component-layer" data-level="4">
                                    <h5><i class="fas fa-chart-bar"></i> 測定・改善レベル</h5>
                                    <div class="component-items">
                                        <div class="component-item">
                                            <h6>品質指標管理</h6>
                                            <p>不良率、顧客クレーム率等の定量的品質指標の継続監視</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>内部監査</h6>
                                            <p>品質管理システムの有効性評価と改善点の特定</p>
                                        </div>
                                        <div class="component-item">
                                            <h6>継続的改善</h6>
                                            <p>PDCA サイクルによる品質管理システムの継続的向上</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-balance-scale"></i> 品質コストの構造と最適化</h4>
                            
                            <div class="quality-costs">
                                <div class="cost-category">
                                    <h5><i class="fas fa-shield-alt"></i> 予防コスト（Prevention Costs）</h5>
                                    <p>品質問題の発生を未然に防ぐための投資</p>
                                    <div class="cost-items">
                                        <div class="cost-item">
                                            <h6>品質計画・設計</h6>
                                            <ul>
                                                <li>品質管理システムの構築・運用</li>
                                                <li>サプライヤー認定・監査</li>
                                                <li>品質基準・手順の策定</li>
                                            </ul>
                                        </div>
                                        <div class="cost-item">
                                            <h6>教育・訓練</h6>
                                            <ul>
                                                <li>品質管理教育プログラム</li>
                                                <li>技能向上研修</li>
                                                <li>品質意識啓発活動</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="cost-category">
                                    <h5><i class="fas fa-search"></i> 評価コスト（Appraisal Costs）</h5>
                                    <p>品質レベルの確認・評価のための活動費用</p>
                                    <div class="cost-items">
                                        <div class="cost-item">
                                            <h6>検査・テスト</h6>
                                            <ul>
                                                <li>受入検査・工程検査・最終検査</li>
                                                <li>サンプリング検査・全数検査</li>
                                                <li>検査機器・設備の維持管理</li>
                                            </ul>
                                        </div>
                                        <div class="cost-item">
                                            <h6>測定・分析</h6>
                                            <ul>
                                                <li>品質データの収集・分析</li>
                                                <li>統計的品質管理</li>
                                                <li>第三者認証・評価</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="cost-category failure-costs">
                                    <h5><i class="fas fa-exclamation-triangle"></i> 失敗コスト（Failure Costs）</h5>
                                    <p>品質不具合により発生する損失</p>
                                    <div class="failure-subcategories">
                                        <div class="failure-internal">
                                            <h6>内部失敗コスト</h6>
                                            <ul>
                                                <li>不良品の廃棄・再加工</li>
                                                <li>作業やり直し・段取り直し</li>
                                                <li>検査・選別作業の追加</li>
                                                <li>在庫ロス・機会損失</li>
                                            </ul>
                                        </div>
                                        <div class="failure-external">
                                            <h6>外部失敗コスト</h6>
                                            <ul>
                                                <li>顧客クレーム対応・損害賠償</li>
                                                <li>製品回収・リコール費用</li>
                                                <li>市場での信頼失墜による売上減</li>
                                                <li>顧客離れ・機会損失</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="cost-optimization">
                                <h5><i class="fas fa-chart-line"></i> 品質コスト最適化の原則</h5>
                                <div class="optimization-chart">
                                    <div class="chart-description">
                                        <p>予防・評価コストの適切な投入により、失敗コストを大幅に削減し、総品質コストを最小化</p>
                                    </div>
                                    <div class="optimization-points">
                                        <div class="point-item">
                                            <strong>投資対効果の分析</strong>
                                            <p>予防コスト1円の投入で失敗コスト10円の削減効果</p>
                                        </div>
                                        <div class="point-item">
                                            <strong>早期発見・早期対応</strong>
                                            <p>上流での品質管理による下流コストの大幅削減</p>
                                        </div>
                                        <div class="point-item">
                                            <strong>継続的改善</strong>
                                            <p>品質管理システムの成熟により予防効果を最大化</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>品質管理成功の要因</strong>
                            <ol>
                                <li><strong>トップマネジメントのコミット</strong>：経営層の品質重視方針と継続的な支援</li>
                                <li><strong>全社的な品質文化</strong>：全従業員の品質意識向上と参画促進</li>
                                <li><strong>データドリブンアプローチ</strong>：客観的データに基づく品質判断と改善</li>
                                <li><strong>サプライヤーとの協働</strong>：パートナーシップによる品質向上活動</li>
                                <li><strong>継続的な学習・改善</strong>：ベストプラクティスの共有と組織学習の促進</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch12',
            title: '第12章 グローバル調達戦略',
            pages: [
                {
                    id: 'ch12-1',
                    title: '12.1 グローバル調達の意義と機会',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-globe-americas"></i>
                            <strong>グローバル調達の戦略的価値</strong>
                            <p>グローバル調達は、単なるコスト削減手段を超えて、企業の競争力強化と持続的成長を実現する重要な戦略的活動です。世界規模での最適なリソース配分により、イノベーション促進と市場競争力の向上を図ります。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-chart-line"></i> グローバル調達がもたらす機会</h4>
                            
                            <div class="opportunities-grid">
                                <div class="opportunity-item">
                                    <div class="opportunity-header">
                                        <i class="fas fa-dollar-sign"></i>
                                        <h5>コスト競争力の向上</h5>
                                    </div>
                                    <div class="opportunity-content">
                                        <ul>
                                            <li><strong>労働コスト格差の活用</strong>：人件費の安い地域からの調達によるコスト削減</li>
                                            <li><strong>材料・部品コストの最適化</strong>：原材料産出国からの直接調達</li>
                                            <li><strong>規模の経済効果</strong>：グローバル統合による調達量拡大とコスト削減</li>
                                            <li><strong>為替メリットの享受</strong>：通貨安地域からの調達による相対的コスト削減</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="opportunity-item">
                                    <div class="opportunity-header">
                                        <i class="fas fa-lightbulb"></i>
                                        <h5>技術・イノベーションアクセス</h5>
                                    </div>
                                    <div class="opportunity-content">
                                        <ul>
                                            <li><strong>先進技術の獲得</strong>：技術先進国からの最新技術・ノウハウの調達</li>
                                            <li><strong>多様な技術ソリューション</strong>：地域固有の技術・製品への アクセス</li>
                                            <li><strong>研究開発リソースの活用</strong>：海外R&D拠点との連携強化</li>
                                            <li><strong>イノベーション創出</strong>：異文化交流による新たなアイデア創出</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="opportunity-item">
                                    <div class="opportunity-header">
                                        <i class="fas fa-expand-arrows-alt"></i>
                                        <h5>市場アクセスの拡大</h5>
                                    </div>
                                    <div class="opportunity-content">
                                        <ul>
                                            <li><strong>新興市場への参入</strong>：現地調達を通じた市場参入機会の創出</li>
                                            <li><strong>顧客ニーズの多様化対応</strong>：地域特化製品・サービスの開発</li>
                                            <li><strong>現地化戦略の推進</strong>：地域密着型事業展開の基盤構築</li>
                                            <li><strong>政府調達への参加</strong>：現地調達要件を満たした政府案件受注</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="opportunity-item">
                                    <div class="opportunity-header">
                                        <i class="fas fa-shield-alt"></i>
                                        <h5>リスク分散・供給安定化</h5>
                                    </div>
                                    <div class="opportunity-content">
                                        <ul>
                                            <li><strong>地理的リスク分散</strong>：複数地域からの調達による災害リスク軽減</li>
                                            <li><strong>政治・規制リスク分散</strong>：特定国依存からの脱却</li>
                                            <li><strong>サプライヤー基盤の多様化</strong>：供給源の分散による安定調達</li>
                                            <li><strong>需給バランスの最適化</strong>：需要変動への柔軟な対応能力</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-balance-scale"></i> グローバル調達の課題と対策</h4>
                            
                            <div class="challenges-solutions">
                                <div class="challenge-category">
                                    <h5><i class="fas fa-exclamation-triangle"></i> 主要な課題</h5>
                                    
                                    <div class="challenge-items">
                                        <div class="challenge-item">
                                            <h6>文化・言語の壁</h6>
                                            <p>コミュニケーションの齟齬、ビジネス慣習の違い、契約解釈の相違</p>
                                        </div>
                                        
                                        <div class="challenge-item">
                                            <h6>品質・規格の統一</h6>
                                            <p>各国の品質基準・規格の相違、品質管理体制の格差</p>
                                        </div>
                                        
                                        <div class="challenge-item">
                                            <h6>物流・納期管理</h6>
                                            <p>長距離輸送による リードタイム延長、関税・通関手続きの複雑化</p>
                                        </div>
                                        
                                        <div class="challenge-item">
                                            <h6>法的・規制リスク</h6>
                                            <p>各国の法制度の相違、規制変更リスク、知的財産保護の課題</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="solution-category">
                                    <h5><i class="fas fa-tools"></i> 対策アプローチ</h5>
                                    
                                    <div class="solution-items">
                                        <div class="solution-item">
                                            <h6>組織・体制強化</h6>
                                            <ul>
                                                <li>グローバル調達組織の設立</li>
                                                <li>現地調達チームの配置</li>
                                                <li>多言語・多文化対応人材の育成</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="solution-item">
                                            <h6>標準化・統合化</h6>
                                            <ul>
                                                <li>グローバル統一基準の策定</li>
                                                <li>調達プロセスの標準化</li>
                                                <li>ITシステムの統合・連携</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="solution-item">
                                            <h6>パートナーシップ構築</h6>
                                            <ul>
                                                <li>戦略的サプライヤーとの長期契約</li>
                                                <li>現地パートナーとの連携</li>
                                                <li>業界団体・商工会議所との協力</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="solution-item">
                                            <h6>リスクマネジメント</h6>
                                            <ul>
                                                <li>包括的リスク評価体制</li>
                                                <li>早期警戒システム構築</li>
                                                <li>代替調達先の確保</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-map-marked-alt"></i> 地域別調達戦略</h4>
                            
                            <div class="regional-strategies">
                                <div class="region-card" data-region="asia">
                                    <h5><i class="fas fa-yen-sign"></i> アジア太平洋地域</h5>
                                    <div class="region-content">
                                        <div class="region-strengths">
                                            <h6>強み・機会</h6>
                                            <ul>
                                                <li>製造コストの競争力（中国、東南アジア）</li>
                                                <li>高い技術力（日本、韓国、台湾）</li>
                                                <li>豊富な労働力と成長市場</li>
                                                <li>エレクトロニクス・自動車産業の集積</li>
                                            </ul>
                                        </div>
                                        <div class="region-considerations">
                                            <h6>留意点</h6>
                                            <ul>
                                                <li>知的財産保護の課題</li>
                                                <li>品質管理体制の格差</li>
                                                <li>政治・外交関係の影響</li>
                                                <li>環境規制の強化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="region-card" data-region="europe">
                                    <h5><i class="fas fa-euro-sign"></i> ヨーロッパ地域</h5>
                                    <div class="region-content">
                                        <div class="region-strengths">
                                            <h6>強み・機会</h6>
                                            <ul>
                                                <li>高品質・高付加価値製品</li>
                                                <li>先進的な環境技術</li>
                                                <li>統一された市場（EU）</li>
                                                <li>厳格な品質・安全基準</li>
                                            </ul>
                                        </div>
                                        <div class="region-considerations">
                                            <h6>留意点</h6>
                                            <ul>
                                                <li>高い人件費・製造コスト</li>
                                                <li>複雑な規制・認証要件</li>
                                                <li>Brexit等の政治的不確実性</li>
                                                <li>環境規制のさらなる強化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="region-card" data-region="americas">
                                    <h5><i class="fas fa-dollar-sign"></i> 南北アメリカ地域</h5>
                                    <div class="region-content">
                                        <div class="region-strengths">
                                            <h6>強み・機会</h6>
                                            <ul>
                                                <li>豊富な天然資源（ブラジル、カナダ）</li>
                                                <li>巨大な消費市場（米国、ブラジル）</li>
                                                <li>USMCA等の貿易協定メリット</li>
                                                <li>イノベーション・技術力（米国）</li>
                                            </ul>
                                        </div>
                                        <div class="region-considerations">
                                            <h6>留意点</h6>
                                            <ul>
                                                <li>政治・経済の不安定性（南米）</li>
                                                <li>為替変動リスク</li>
                                                <li>貿易政策の変更リスク</li>
                                                <li>物流インフラの格差</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-rocket"></i>
                            <strong>グローバル調達成功の要因</strong>
                            <ol>
                                <li><strong>明確な戦略とガバナンス</strong>：全社レベルでの統一された方針と管理体制</li>
                                <li><strong>現地化とグローバル化のバランス</strong>：地域特性への対応と標準化の最適な組み合わせ</li>
                                <li><strong>継続的な関係構築</strong>：長期的視点でのサプライヤー・パートナーとの信頼関係</li>
                                <li><strong>デジタル技術の活用</strong>：ITを活用したグローバル調達の効率化・可視化</li>
                                <li><strong>人材育成への投資</strong>：グローバル対応能力を持つ人材の育成・確保</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch13',
            title: '第13章 リスクマネジメント',
            pages: [
                {
                    id: 'ch13-1',
                    title: '13.1 調達リスクの体系的理解',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>調達リスクマネジメントの重要性</strong>
                            <p>現代のグローバルなサプライチェーンにおいて、調達リスクは企業経営に重大な影響を与える可能性があります。体系的なリスクマネジメントにより、予期しない損失を防ぎ、事業継続性を確保することが重要です。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-list-alt"></i> 調達リスクの分類</h4>
                            
                            <div class="risk-classification">
                                <div class="risk-category">
                                    <h5><i class="fas fa-building"></i> サプライヤーリスク</h5>
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <h6>財務リスク</h6>
                                            <ul>
                                                <li>財務基盤の悪化・倒産リスク</li>
                                                <li>資金繰り悪化による納期遅延</li>
                                                <li>投資余力不足による品質低下</li>
                                                <li>価格転嫁圧力の増大</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="risk-item">
                                            <h6>運営・品質リスク</h6>
                                            <ul>
                                                <li>製造能力・技術力の不足</li>
                                                <li>品質管理システムの欠陥</li>
                                                <li>労働争議・ストライキ</li>
                                                <li>経営陣・キーマンの交代</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="risk-item">
                                            <h6>コンプライアンスリスク</h6>
                                            <ul>
                                                <li>法令違反・規制不適合</li>
                                                <li>環境・労働基準違反</li>
                                                <li>知的財産権侵害</li>
                                                <li>反社会勢力との関係</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="risk-category">
                                    <h5><i class="fas fa-chart-line"></i> 市場・価格リスク</h5>
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <h6>価格変動リスク</h6>
                                            <ul>
                                                <li>原材料価格の急騰</li>
                                                <li>エネルギーコストの変動</li>
                                                <li>人件費の上昇</li>
                                                <li>為替レート変動の影響</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="risk-item">
                                            <h6>需給バランスリスク</h6>
                                            <ul>
                                                <li>需要急増による供給不足</li>
                                                <li>代替品・新技術による需要減</li>
                                                <li>競合他社による買占め</li>
                                                <li>産業構造変化の影響</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="risk-category">
                                    <h5><i class="fas fa-globe"></i> 地政学・環境リスク</h5>
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <h6>政治・規制リスク</h6>
                                            <ul>
                                                <li>政情不安・政権交代の影響</li>
                                                <li>貿易制裁・関税政策の変更</li>
                                                <li>規制強化・新規制の導入</li>
                                                <li>輸出入制限・ライセンス制度</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="risk-item">
                                            <h6>自然災害・環境リスク</h6>
                                            <ul>
                                                <li>地震・津波等の自然災害</li>
                                                <li>パンデミック・感染症拡大</li>
                                                <li>気候変動・異常気象</li>
                                                <li>環境汚染・生態系破壊</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="risk-category">
                                    <h5><i class="fas fa-shield-alt"></i> 技術・情報リスク</h5>
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <h6>技術・イノベーションリスク</h6>
                                            <ul>
                                                <li>技術革新による陳腐化</li>
                                                <li>標準・規格の変更</li>
                                                <li>特許・知的財産の制約</li>
                                                <li>技術者・技術継承の問題</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="risk-item">
                                            <h6>情報セキュリティリスク</h6>
                                            <ul>
                                                <li>サイバー攻撃・情報漏洩</li>
                                                <li>営業秘密の流出</li>
                                                <li>システム障害・データ消失</li>
                                                <li>偽造・模倣品の流通</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-chart-pie"></i> リスク評価フレームワーク</h4>
                            
                            <div class="risk-assessment-framework">
                                <div class="assessment-matrix">
                                    <h5>リスク評価マトリックス</h5>
                                    <div class="matrix-description">
                                        <p>発生確率と影響度の組み合わせによるリスクレベルの評価</p>
                                    </div>
                                    
                                    <div class="matrix-table">
                                        <table class="risk-matrix">
                                            <thead>
                                                <tr>
                                                    <th rowspan="2">発生確率</th>
                                                    <th colspan="4">影響度</th>
                                                </tr>
                                                <tr>
                                                    <th class="impact-low">低</th>
                                                    <th class="impact-medium">中</th>
                                                    <th class="impact-high">高</th>
                                                    <th class="impact-critical">極高</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th class="prob-high">高</th>
                                                    <td class="risk-medium">中</td>
                                                    <td class="risk-high">高</td>
                                                    <td class="risk-critical">極高</td>
                                                    <td class="risk-critical">極高</td>
                                                </tr>
                                                <tr>
                                                    <th class="prob-medium">中</th>
                                                    <td class="risk-low">低</td>
                                                    <td class="risk-medium">中</td>
                                                    <td class="risk-high">高</td>
                                                    <td class="risk-critical">極高</td>
                                                </tr>
                                                <tr>
                                                    <th class="prob-low">低</th>
                                                    <td class="risk-low">低</td>
                                                    <td class="risk-low">低</td>
                                                    <td class="risk-medium">中</td>
                                                    <td class="risk-high">高</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="assessment-criteria">
                                    <h5>評価基準の設定</h5>
                                    
                                    <div class="criteria-sections">
                                        <div class="criteria-section">
                                            <h6>発生確率の評価基準</h6>
                                            <ul>
                                                <li><strong>高（3）</strong>：過去3年以内に発生実績あり、または70%以上の確率</li>
                                                <li><strong>中（2）</strong>：過去5年以内に発生実績あり、または30-70%の確率</li>
                                                <li><strong>低（1）</strong>：発生実績なし、または30%未満の確率</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="criteria-section">
                                            <h6>影響度の評価基準</h6>
                                            <ul>
                                                <li><strong>極高（4）</strong>：売上への重大な影響（10%以上減）、事業停止リスク</li>
                                                <li><strong>高（3）</strong>：売上への大きな影響（5-10%減）、生産・販売への支障</li>
                                                <li><strong>中（2）</strong>：売上への軽微な影響（1-5%減）、一時的な支障</li>
                                                <li><strong>低（1）</strong>：売上への影響軽微（1%未満）、代替手段で対応可能</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-tools"></i> リスク対応戦略</h4>
                            
                            <div class="risk-response-strategies">
                                <div class="strategy-item">
                                    <h5><i class="fas fa-ban"></i> 回避（Avoid）</h5>
                                    <p>リスクの原因となる活動や取引を避ける</p>
                                    <div class="strategy-examples">
                                        <h6>適用例</h6>
                                        <ul>
                                            <li>政情不安国からの調達停止</li>
                                            <li>高リスクサプライヤーとの取引中止</li>
                                            <li>規制の厳しい分野からの撤退</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="strategy-item">
                                    <h5><i class="fas fa-shield-alt"></i> 軽減（Mitigate）</h5>
                                    <p>リスクの発生確率や影響度を下げる措置を講じる</p>
                                    <div class="strategy-examples">
                                        <h6>適用例</h6>
                                        <ul>
                                            <li>サプライヤー監査・指導の実施</li>
                                            <li>品質管理システムの強化</li>
                                            <li>代替調達先の事前準備</li>
                                            <li>契約条件の見直し・強化</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="strategy-item">
                                    <h5><i class="fas fa-share-alt"></i> 転嫁（Transfer）</h5>
                                    <p>リスクを第三者に移転する</p>
                                    <div class="strategy-examples">
                                        <h6>適用例</h6>
                                        <ul>
                                            <li>保険の付保</li>
                                            <li>為替ヘッジ取引</li>
                                            <li>サプライヤーへの責任転嫁条項</li>
                                            <li>アウトソーシングによるリスク移転</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="strategy-item">
                                    <h5><i class="fas fa-check"></i> 受容（Accept）</h5>
                                    <p>リスクを認識した上で受け入れる</p>
                                    <div class="strategy-examples">
                                        <h6>適用例</h6>
                                        <ul>
                                            <li>軽微なリスクの許容</li>
                                            <li>戦略上重要な取引の継続</li>
                                            <li>リスク対応コストが効果を上回る場合</li>
                                            <li>緊急時対応計画の策定</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>効果的なリスクマネジメントのポイント</strong>
                            <ol>
                                <li><strong>継続的モニタリング</strong>：リスク状況の定期的な監視と評価の更新</li>
                                <li><strong>早期警戒システム</strong>：リスクの兆候を早期に察知する仕組みの構築</li>
                                <li><strong>組織的対応</strong>：リスク管理を組織全体で共有し、責任を明確化</li>
                                <li><strong>バランスの取れた対応</strong>：過度なリスク回避による機会損失を避ける</li>
                                <li><strong>学習・改善</strong>：発生した問題から学び、予防策を継続的に改善</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch14',
            title: '第14章 調達のデジタル化・DX推進',
            pages: [
                {
                    id: 'ch14-1',
                    title: '14.1 調達DXの意義と全体像',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-digital-tachograph"></i>
                            <strong>調達DX（デジタルトランスフォーメーション）の戦略的意義</strong>
                            <p>調達DXは、デジタル技術を活用して調達プロセス、組織、ビジネスモデルを根本的に変革し、競争優位性を創出する取り組みです。単なる業務効率化を超えて、データドリブンな意思決定と革新的な価値創造を実現します。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-rocket"></i> 調達DXがもたらす変革</h4>
                            
                            <div class="transformation-areas">
                                <div class="transform-item">
                                    <div class="transform-header">
                                        <i class="fas fa-chart-line"></i>
                                        <h5>意思決定の高度化</h5>
                                    </div>
                                    <div class="transform-content">
                                        <ul>
                                            <li><strong>データドリブン経営</strong>：リアルタイムデータに基づく迅速・的確な判断</li>
                                            <li><strong>予測分析の活用</strong>：AI・機械学習による需要予測・リスク予測</li>
                                            <li><strong>シナリオ分析</strong>：複数の選択肢を定量的に比較検討</li>
                                            <li><strong>最適化アルゴリズム</strong>：複雑な制約条件下での最適解の導出</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="transform-item">
                                    <div class="transform-header">
                                        <i class="fas fa-sync-alt"></i>
                                        <h5>プロセスの自動化・効率化</h5>
                                    </div>
                                    <div class="transform-content">
                                        <ul>
                                            <li><strong>RPA（Robotic Process Automation）</strong>：定型業務の自動化</li>
                                            <li><strong>ワークフロー自動化</strong>：承認プロセスの迅速化・標準化</li>
                                            <li><strong>電子調達システム</strong>：発注から支払までの一気通貫処理</li>
                                            <li><strong>スマート検収</strong>：画像認識・IoTを活用した自動検収</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="transform-item">
                                    <div class="transform-header">
                                        <i class="fas fa-link"></i>
                                        <h5>サプライチェーンの可視化・連携</h5>
                                    </div>
                                    <div class="transform-content">
                                        <ul>
                                            <li><strong>リアルタイム可視化</strong>：サプライチェーン全体の状況把握</li>
                                            <li><strong>サプライヤー連携</strong>：EDI・API連携による情報共有</li>
                                            <li><strong>トレーサビリティ</strong>：ブロックチェーン技術による完全な履歴管理</li>
                                            <li><strong>コラボレーション強化</strong>：クラウドプラットフォームでの協働</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="transform-item">
                                    <div class="transform-header">
                                        <i class="fas fa-brain"></i>
                                        <h5>新たな価値創造</h5>
                                    </div>
                                    <div class="transform-content">
                                        <ul>
                                            <li><strong>イノベーション促進</strong>：外部との協創による新技術・製品開発</li>
                                            <li><strong>サービス化</strong>：製品からサービス・ソリューション提供への転換</li>
                                            <li><strong>エコシステム構築</strong>：パートナー企業との価値共創</li>
                                            <li><strong>サステナビリティ</strong>：環境・社会価値の創出と事業価値の両立</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-layer-group"></i> 調達DXのテクノロジー体系</h4>
                            
                            <div class="technology-stack">
                                <div class="tech-layer" data-layer="4">
                                    <h5><i class="fas fa-brain"></i> AI・Analytics Layer</h5>
                                    <div class="tech-items">
                                        <div class="tech-item">
                                            <h6>人工知能・機械学習</h6>
                                            <ul>
                                                <li>需要予測・価格予測AI</li>
                                                <li>サプライヤーリスク評価AI</li>
                                                <li>契約書自動分析・チェック</li>
                                                <li>チャットボット・バーチャルアシスタント</li>
                                            </ul>
                                        </div>
                                        <div class="tech-item">
                                            <h6>高度分析・可視化</h6>
                                            <ul>
                                                <li>ビッグデータ分析</li>
                                                <li>リアルタイム ダッシュボード</li>
                                                <li>予測分析・シミュレーション</li>
                                                <li>BI（Business Intelligence）ツール</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="tech-layer" data-layer="3">
                                    <h5><i class="fas fa-cogs"></i> Application Layer</h5>
                                    <div class="tech-items">
                                        <div class="tech-item">
                                            <h6>調達管理システム</h6>
                                            <ul>
                                                <li>e-Procurement システム</li>
                                                <li>SRM（Supplier Relationship Management）</li>
                                                <li>Contract Management System</li>
                                                <li>Spend Analysis ツール</li>
                                            </ul>
                                        </div>
                                        <div class="tech-item">
                                            <h6>自動化・効率化ツール</h6>
                                            <ul>
                                                <li>RPA（Robotic Process Automation）</li>
                                                <li>ワークフロー管理システム</li>
                                                <li>電子承認・電子契約システム</li>
                                                <li>OCR・文書管理システム</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="tech-layer" data-layer="2">
                                    <h5><i class="fas fa-exchange-alt"></i> Integration Layer</h5>
                                    <div class="tech-items">
                                        <div class="tech-item">
                                            <h6>システム連携基盤</h6>
                                            <ul>
                                                <li>API（Application Programming Interface）</li>
                                                <li>EDI（Electronic Data Interchange）</li>
                                                <li>ESB（Enterprise Service Bus）</li>
                                                <li>マスターデータ管理（MDM）</li>
                                            </ul>
                                        </div>
                                        <div class="tech-item">
                                            <h6>新技術基盤</h6>
                                            <ul>
                                                <li>ブロックチェーン</li>
                                                <li>IoT（Internet of Things）</li>
                                                <li>5G・エッジコンピューティング</li>
                                                <li>AR/VR技術</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="tech-layer" data-layer="1">
                                    <h5><i class="fas fa-server"></i> Infrastructure Layer</h5>
                                    <div class="tech-items">
                                        <div class="tech-item">
                                            <h6>クラウドインフラ</h6>
                                            <ul>
                                                <li>SaaS（Software as a Service）</li>
                                                <li>PaaS（Platform as a Service）</li>
                                                <li>IaaS（Infrastructure as a Service）</li>
                                                <li>ハイブリッドクラウド環境</li>
                                            </ul>
                                        </div>
                                        <div class="tech-item">
                                            <h6>セキュリティ・ガバナンス</h6>
                                            <ul>
                                                <li>ID・アクセス管理（IAM）</li>
                                                <li>データ暗号化・保護</li>
                                                <li>ログ管理・監査</li>
                                                <li>災害復旧・事業継続（DR/BCP）</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-road"></i> 調達DX推進のロードマップ</h4>
                            
                            <div class="dx-roadmap">
                                <div class="roadmap-phase" data-phase="1">
                                    <h5><i class="fas fa-play"></i> Phase 1: 基盤整備・デジタル化（6-12ヶ月）</h5>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>既存プロセスのデジタル化</li>
                                                <li>基本的なシステム導入</li>
                                                <li>データ品質の向上</li>
                                                <li>組織・人材の基盤整備</li>
                                            </ul>
                                        </div>
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>現状業務プロセスの棚卸・分析</li>
                                                <li>e-Procurement システム導入</li>
                                                <li>マスターデータ整備・統一</li>
                                                <li>電子承認ワークフロー構築</li>
                                                <li>デジタルスキル研修実施</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="roadmap-phase" data-phase="2">
                                    <h5><i class="fas fa-chart-line"></i> Phase 2: 分析・最適化（12-24ヶ月）</h5>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>データ分析による洞察獲得</li>
                                                <li>業務プロセスの最適化</li>
                                                <li>自動化の推進</li>
                                                <li>サプライヤー連携強化</li>
                                            </ul>
                                        </div>
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>Spend Analysis・コスト分析</li>
                                                <li>SRM システム導入・活用</li>
                                                <li>RPA による定型業務自動化</li>
                                                <li>サプライヤーポータル構築</li>
                                                <li>KPI・ダッシュボード整備</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="roadmap-phase" data-phase="3">
                                    <h5><i class="fas fa-brain"></i> Phase 3: 高度化・AI活用（24-36ヶ月）</h5>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>AI・機械学習の本格活用</li>
                                                <li>予測・最適化機能の導入</li>
                                                <li>リアルタイム意思決定</li>
                                                <li>エコシステム連携拡大</li>
                                            </ul>
                                        </div>
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>需要予測AI・価格予測AI導入</li>
                                                <li>リスクモニタリングシステム構築</li>
                                                <li>スマートコントラクト活用</li>
                                                <li>ブロックチェーンによるトレーサビリティ</li>
                                                <li>外部プラットフォーム連携</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="roadmap-phase" data-phase="4">
                                    <h5><i class="fas fa-rocket"></i> Phase 4: 革新・価値創造（36ヶ月以降）</h5>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>新ビジネスモデル創出</li>
                                                <li>バリューチェーン革新</li>
                                                <li>持続可能性の実現</li>
                                                <li>競争優位性の確立</li>
                                            </ul>
                                        </div>
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>サービス・ソリューション事業展開</li>
                                                <li>パートナーエコシステム構築</li>
                                                <li>サーキュラーエコノミー対応</li>
                                                <li>イノベーション創出プラットフォーム</li>
                                                <li>グローバル展開・標準化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-key"></i>
                            <strong>調達DX成功の重要要因</strong>
                            <ol>
                                <li><strong>経営層のコミット</strong>：明確なビジョンと十分な投資・リソース配分</li>
                                <li><strong>段階的アプローチ</strong>：小さな成功を積み重ねながらの段階的推進</li>
                                <li><strong>データファースト</strong>：質の高いデータを基盤とした取り組み</li>
                                <li><strong>人材育成</strong>：デジタルスキルと業務知識を併せ持つ人材の確保・育成</li>
                                <li><strong>変革管理</strong>：組織文化の変革と変化に対する抵抗の克服</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch15',
            title: '第15章 持続可能な調達・CSR',
            pages: [
                {
                    id: 'ch15-1',
                    title: '15.1 サステナブル調達の重要性',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-leaf"></i>
                            <strong>サステナブル調達の戦略的意義</strong>
                            <p>サステナブル調達は、環境・社会・ガバナンス（ESG）の観点から責任ある調達活動を実践することで、長期的な企業価値向上と持続可能な社会の実現を両立する重要な経営戦略です。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-globe"></i> サステナブル調達の背景と必要性</h4>
                            
                            <div class="background-factors">
                                <div class="factor-item">
                                    <div class="factor-header">
                                        <i class="fas fa-users"></i>
                                        <h5>ステークホルダーからの要請</h5>
                                    </div>
                                    <div class="factor-content">
                                        <ul>
                                            <li><strong>投資家の ESG 重視</strong>：ESG投資の拡大と企業評価への影響</li>
                                            <li><strong>顧客の価値観変化</strong>：エシカル消費・サステナブル消費の拡大</li>
                                            <li><strong>従業員の意識向上</strong>：働きがいのある企業への期待</li>
                                            <li><strong>地域社会との共生</strong>：地域社会への貢献と信頼関係構築</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="factor-item">
                                    <div class="factor-header">
                                        <i class="fas fa-gavel"></i>
                                        <h5>法的要請・規制強化</h5>
                                    </div>
                                    <div class="factor-content">
                                        <ul>
                                            <li><strong>人権デューデリジェンス</strong>：サプライチェーン人権法の導入・強化</li>
                                            <li><strong>環境規制の強化</strong>：気候変動対策・循環経済への対応義務</li>
                                            <li><strong>情報開示要求</strong>：非財務情報開示の法制化・標準化</li>
                                            <li><strong>制裁・取引制限</strong>：人権侵害企業との取引禁止措置</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="factor-item">
                                    <div class="factor-header">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        <h5>事業リスクの増大</h5>
                                    </div>
                                    <div class="factor-content">
                                        <ul>
                                            <li><strong>レピュテーションリスク</strong>：サプライチェーンでの問題による信頼失墜</li>
                                            <li><strong>事業継続リスク</strong>：環境・社会問題による供給中断</li>
                                            <li><strong>財務影響</strong>：ESG課題による資金調達・保険コストの上昇</li>
                                            <li><strong>人材確保リスク</strong>：優秀な人材の獲得・定着への影響</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="factor-item">
                                    <div class="factor-header">
                                        <i class="fas fa-chart-line"></i>
                                        <h5>競争優位の源泉</h5>
                                    </div>
                                    <div class="factor-content">
                                        <ul>
                                            <li><strong>差別化要因</strong>：サステナビリティを競争優位に転換</li>
                                            <li><strong>イノベーション創出</strong>：制約から生まれる技術革新・ビジネスモデル革新</li>
                                            <li><strong>市場アクセス</strong>：ESG要件のある市場・顧客への参入機会</li>
                                            <li><strong>パートナーシップ</strong>：価値観を共有するパートナーとの強固な関係</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-puzzle-piece"></i> ESG要素別の調達課題</h4>
                            
                            <div class="esg-components">
                                <div class="esg-item" data-component="environment">
                                    <h5><i class="fas fa-seedling"></i> Environment（環境）</h5>
                                    <div class="esg-content">
                                        <div class="issue-category">
                                            <h6>気候変動・脱炭素</h6>
                                            <ul>
                                                <li>サプライヤーのCO2排出量削減要求</li>
                                                <li>再生可能エネルギー利用促進</li>
                                                <li>カーボンニュートラル対応</li>
                                                <li>気候変動適応策の実施</li>
                                            </ul>
                                        </div>
                                        <div class="issue-category">
                                            <h6>資源・循環経済</h6>
                                            <ul>
                                                <li>持続可能な原材料調達</li>
                                                <li>リサイクル材料の積極活用</li>
                                                <li>廃棄物削減・ゼロエミッション</li>
                                                <li>水資源の持続可能利用</li>
                                            </ul>
                                        </div>
                                        <div class="issue-category">
                                            <h6>生物多様性・自然保護</h6>
                                            <ul>
                                                <li>森林破壊ゼロ調達</li>
                                                <li>生態系保全への配慮</li>
                                                <li>持続可能な農林水産物調達</li>
                                                <li>化学物質管理強化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="esg-item" data-component="social">
                                    <h5><i class="fas fa-hands-helping"></i> Social（社会）</h5>
                                    <div class="esg-content">
                                        <div class="issue-category">
                                            <h6>人権・労働</h6>
                                            <ul>
                                                <li>強制労働・児童労働の排除</li>
                                                <li>差別禁止・多様性確保</li>
                                                <li>適正な労働条件・賃金保障</li>
                                                <li>労働安全衛生の確保</li>
                                            </ul>
                                        </div>
                                        <div class="issue-category">
                                            <h6>地域社会・コミュニティ</h6>
                                            <ul>
                                                <li>地域経済への貢献</li>
                                                <li>中小企業・地場企業の活用</li>
                                                <li>教育・人材育成支援</li>
                                                <li>地域文化・伝統の尊重</li>
                                            </ul>
                                        </div>
                                        <div class="issue-category">
                                            <h6>製品・サービスの社会的責任</h6>
                                            <ul>
                                                <li>製品安全性の確保</li>
                                                <li>アクセシビリティ向上</li>
                                                <li>情報セキュリティ・プライバシー保護</li>
                                                <li>公正な市場競争の促進</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="esg-item" data-component="governance">
                                    <h5><i class="fas fa-balance-scale"></i> Governance（ガバナンス）</h5>
                                    <div class="esg-content">
                                        <div class="issue-category">
                                            <h6>企業倫理・コンプライアンス</h6>
                                            <ul>
                                                <li>贈収賄防止・腐敗防止</li>
                                                <li>公正取引・独禁法遵守</li>
                                                <li>利益相反の回避</li>
                                                <li>内部通報制度整備</li>
                                            </ul>
                                        </div>
                                        <div class="issue-category">
                                            <h6>透明性・情報開示</h6>
                                            <ul>
                                                <li>サプライチェーン透明性確保</li>
                                                <li>ESG情報の適切な開示</li>
                                                <li>ステークホルダーとの対話</li>
                                                <li>監査・第三者認証の活用</li>
                                            </ul>
                                        </div>
                                        <div class="issue-category">
                                            <h6>リスク管理・危機管理</h6>
                                            <ul>
                                                <li>ESGリスクの特定・評価</li>
                                                <li>事業継続計画（BCP）整備</li>
                                                <li>サプライヤー監視・監査</li>
                                                <li>是正措置・改善支援</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-route"></i> サステナブル調達推進のプロセス</h4>
                            
                            <div class="sustainable-process">
                                <div class="process-step" data-step="1">
                                    <div class="step-header">
                                        <div class="step-number">1</div>
                                        <h5>方針・戦略策定</h5>
                                    </div>
                                    <div class="step-content">
                                        <ul>
                                            <li>サステナブル調達方針の制定</li>
                                            <li>重要課題（マテリアリティ）の特定</li>
                                            <li>目標・KPIの設定</li>
                                            <li>推進体制・責任者の明確化</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="process-step" data-step="2">
                                    <div class="step-header">
                                        <div class="step-number">2</div>
                                        <h5>リスク評価・優先順位付け</h5>
                                    </div>
                                    <div class="step-content">
                                        <ul>
                                            <li>サプライチェーンマッピング</li>
                                            <li>ESGリスク評価・スクリーニング</li>
                                            <li>高リスクサプライヤー・地域の特定</li>
                                            <li>取り組み優先順位の決定</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="process-step" data-step="3">
                                    <div class="step-header">
                                        <div class="step-number">3</div>
                                        <h5>要求・基準設定</h5>
                                    </div>
                                    <div class="step-content">
                                        <ul>
                                            <li>サプライヤー行動規範制定</li>
                                            <li>調達基準・選定要件への組み込み</li>
                                            <li>契約条項・SLAへの反映</li>
                                            <li>認証・第三者監査要件設定</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="process-step" data-step="4">
                                    <div class="step-header">
                                        <div class="step-number">4</div>
                                        <h5>実行・モニタリング</h5>
                                    </div>
                                    <div class="step-content">
                                        <ul>
                                            <li>サプライヤー説明会・研修実施</li>
                                            <li>定期的な自己評価・アンケート</li>
                                            <li>現地監査・第三者監査</li>
                                            <li>是正措置・改善支援</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="process-step" data-step="5">
                                    <div class="step-header">
                                        <div class="step-number">5</div>
                                        <h5>報告・改善</h5>
                                    </div>
                                    <div class="step-content">
                                        <ul>
                                            <li>進捗状況・成果の測定・報告</li>
                                            <li>ステークホルダーとの対話</li>
                                            <li>取り組み事例の共有</li>
                                            <li>継続的改善・レベルアップ</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-tools"></i> 実装のための具体的手法</h4>
                            
                            <div class="implementation-tools">
                                <div class="tool-category">
                                    <h5><i class="fas fa-search"></i> 評価・監査ツール</h5>
                                    <div class="tools-list">
                                        <div class="tool-item">
                                            <h6>セルフアセスメント</h6>
                                            <p>サプライヤー自身による定期的な自己評価アンケート</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>デスクトップ監査</h6>
                                            <p>書類・データ・公開情報による リモート評価</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>現地監査</h6>
                                            <p>専門家による実地での詳細監査・検証</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>第三者認証</h6>
                                            <p>独立した認証機関による客観的な評価・認証</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="tool-category">
                                    <h5><i class="fas fa-graduation-cap"></i> 能力向上支援</h5>
                                    <div class="tools-list">
                                        <div class="tool-item">
                                            <h6>研修・教育プログラム</h6>
                                            <p>ESG課題・ベストプラクティスに関する教育</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>技術支援・コンサルティング</h6>
                                            <p>改善計画策定・実行に対する専門的支援</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>協働改善プロジェクト</h6>
                                            <p>共同でのESG課題解決・イノベーション創出</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>ベストプラクティス共有</h6>
                                            <p>優良事例の横展開・ナレッジマネジメント</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="tool-category">
                                    <h5><i class="fas fa-handshake"></i> インセンティブ設計</h5>
                                    <div class="tools-list">
                                        <div class="tool-item">
                                            <h6>優先発注・長期契約</h6>
                                            <p>ESG評価の高いサプライヤーへの優遇措置</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>表彰・認定制度</h6>
                                            <p>優秀なESG取り組みに対する表彰・認定</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>成果連動価格</h6>
                                            <p>ESG目標達成度に応じた価格・報酬調整</p>
                                        </div>
                                        <div class="tool-item">
                                            <h6>共同投資・資金支援</h6>
                                            <p>ESG改善投資への財務支援・リスク分担</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-star"></i>
                            <strong>サステナブル調達成功のポイント</strong>
                            <ol>
                                <li><strong>トップコミットメント</strong>：経営層の強いリーダーシップと継続的な支援</li>
                                <li><strong>段階的アプローチ</strong>：重要度・緊急度に応じた優先順位付けと段階的実行</li>
                                <li><strong>協働・パートナーシップ</strong>：サプライヤーとの対話・協働による課題解決</li>
                                <li><strong>透明性・情報開示</strong>：取り組み状況・成果の積極的な情報開示</li>
                                <li><strong>継続的改善</strong>：PDCAサイクルによる継続的なレベルアップ</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch16',
            title: '第16章 調達コストマネジメント',
            pages: [
                {
                    id: 'ch16-1',
                    title: '16.1 コスト管理の戦略的アプローチ',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-chart-line"></i>
                            <strong>戦略的コストマネジメントの意義</strong>
                            <p>調達コストマネジメントは、単なるコスト削減を超えて、企業の競争力強化と長期的価値創造を実現する戦略的活動です。総所有コスト（TCO）の最適化により、持続可能な成長基盤を構築します。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-layers"></i> コスト構造の包括的理解</h4>
                            
                            <div class="cost-structure">
                                <div class="cost-layer" data-layer="direct">
                                    <h5><i class="fas fa-dollar-sign"></i> 直接コスト（Direct Cost）</h5>
                                    <div class="cost-components">
                                        <div class="cost-component">
                                            <h6>製品・サービス価格</h6>
                                            <ul>
                                                <li>基本価格・リスト価格</li>
                                                <li>数量割引・ボリューム割引</li>
                                                <li>契約期間による割引</li>
                                                <li>早期支払い割引</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="cost-component">
                                            <h6>付帯費用</h6>
                                            <ul>
                                                <li>輸送費・配送費</li>
                                                <li>保険料・関税</li>
                                                <li>検査費・認証費</li>
                                                <li>設置費・設定費</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="cost-layer" data-layer="indirect">
                                    <h5><i class="fas fa-cogs"></i> 間接コスト（Indirect Cost）</h5>
                                    <div class="cost-components">
                                        <div class="cost-component">
                                            <h6>調達プロセスコスト</h6>
                                            <ul>
                                                <li>サプライヤー探索・評価費用</li>
                                                <li>契約締結・管理費用</li>
                                                <li>発注処理・管理費用</li>
                                                <li>検収・支払い処理費用</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="cost-component">
                                            <h6>品質・リスク管理コスト</h6>
                                            <ul>
                                                <li>品質監査・管理費用</li>
                                                <li>不良品対応・返品費用</li>
                                                <li>在庫管理・保管費用</li>
                                                <li>リスク対応・保険費用</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="cost-layer" data-layer="lifecycle">
                                    <h5><i class="fas fa-recycle"></i> ライフサイクルコスト</h5>
                                    <div class="cost-components">
                                        <div class="cost-component">
                                            <h6>運用・保守コスト</h6>
                                            <ul>
                                                <li>運用費・メンテナンス費</li>
                                                <li>消耗品・交換部品費</li>
                                                <li>エネルギー・ユーティリティ費</li>
                                                <li>オペレーター人件費</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="cost-component">
                                            <h6>廃棄・リサイクルコスト</h6>
                                            <ul>
                                                <li>廃棄処理費用</li>
                                                <li>環境対応費用</li>
                                                <li>リサイクル処理費</li>
                                                <li>データ消去・セキュリティ費用</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="cost-layer" data-layer="opportunity">
                                    <h5><i class="fas fa-clock"></i> 機会コスト・リスクコスト</h5>
                                    <div class="cost-components">
                                        <div class="cost-component">
                                            <h6>機会コスト</h6>
                                            <ul>
                                                <li>代替選択肢による潜在利益</li>
                                                <li>技術革新による機会損失</li>
                                                <li>市場タイミング逸失による損失</li>
                                                <li>投資機会の機会費用</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="cost-component">
                                            <h6>リスクコスト</h6>
                                            <ul>
                                                <li>供給中断による損失</li>
                                                <li>品質問題による損害</li>
                                                <li>価格変動による損失</li>
                                                <li>コンプライアンス違反コスト</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-calculator"></i> TCO（Total Cost of Ownership）分析</h4>
                            
                            <div class="tco-framework">
                                <div class="tco-definition">
                                    <h5>TCOの定義と重要性</h5>
                                    <p>TCOは、製品・サービスの取得から廃棄まで、ライフサイクル全体で発生する総コストを包括的に評価する手法です。初期コストだけでなく、運用コスト、保守コスト、廃棄コストまで含めた真のコストを把握します。</p>
                                </div>

                                <div class="tco-calculation">
                                    <h5>TCO計算フレームワーク</h5>
                                    
                                    <div class="tco-formula">
                                        <div class="formula-box">
                                            <strong>TCO = 取得コスト + 運用コスト + 保守コスト + 廃棄コスト</strong>
                                        </div>
                                    </div>

                                    <div class="tco-components-detail">
                                        <div class="tco-phase">
                                            <h6><i class="fas fa-shopping-cart"></i> 取得コスト（Acquisition Cost）</h6>
                                            <div class="phase-items">
                                                <ul>
                                                    <li><strong>購入価格</strong>：本体価格、オプション価格</li>
                                                    <li><strong>導入コスト</strong>：設置費、初期設定費、研修費</li>
                                                    <li><strong>付帯費用</strong>：配送費、保険料、関税</li>
                                                    <li><strong>プロジェクト費用</strong>：導入プロジェクト管理費</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="tco-phase">
                                            <h6><i class="fas fa-play"></i> 運用コスト（Operating Cost）</h6>
                                            <div class="phase-items">
                                                <ul>
                                                    <li><strong>人件費</strong>：オペレーター費用、管理費用</li>
                                                    <li><strong>ユーティリティ費</strong>：電気代、ガス代、水道代</li>
                                                    <li><strong>消耗品費</strong>：消耗部品、事務用品</li>
                                                    <li><strong>ライセンス費</strong>：ソフトウェアライセンス更新費</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="tco-phase">
                                            <h6><i class="fas fa-wrench"></i> 保守コスト（Maintenance Cost）</h6>
                                            <div class="phase-items">
                                                <ul>
                                                    <li><strong>予防保守</strong>：定期点検、清掃、調整</li>
                                                    <li><strong>修理・交換</strong>：故障修理、部品交換</li>
                                                    <li><strong>アップグレード</strong>：機能向上、性能改善</li>
                                                    <li><strong>サポート費用</strong>：技術サポート、ヘルプデスク</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="tco-phase">
                                            <h6><i class="fas fa-trash-alt"></i> 廃棄コスト（Disposal Cost）</h6>
                                            <div class="phase-items">
                                                <ul>
                                                    <li><strong>撤去費用</strong>：機器撤去、原状回復</li>
                                                    <li><strong>処分費用</strong>：廃棄処理、リサイクル処理</li>
                                                    <li><strong>データ処理</strong>：データ移行、セキュリティ対応</li>
                                                    <li><strong>残存価値</strong>：売却収入、リース返却</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-tools"></i> コスト削減手法の体系</h4>
                            
                            <div class="cost-reduction-methods">
                                <div class="method-category" data-category="strategic">
                                    <h5><i class="fas fa-chess"></i> 戦略的手法</h5>
                                    
                                    <div class="method-items">
                                        <div class="method-item">
                                            <h6>仕様最適化（Value Engineering）</h6>
                                            <p>機能・性能要件の見直しによる最適仕様の追求</p>
                                            <ul>
                                                <li>オーバースペック要件の削減</li>
                                                <li>標準化・共通化の推進</li>
                                                <li>代替材料・技術の検討</li>
                                                <li>設計変更による原価低減</li>
                                            </ul>
                                        </div>

                                        <div class="method-item">
                                            <h6>サプライヤー統合・集約</h6>
                                            <p>サプライヤー数の最適化による規模効果の獲得</p>
                                            <ul>
                                                <li>購買品目の統合・集約</li>
                                                <li>ボリューム集約による価格交渉力強化</li>
                                                <li>管理コストの削減</li>
                                                <li>戦略的パートナーシップ構築</li>
                                            </ul>
                                        </div>

                                        <div class="method-item">
                                            <h6>調達方式の変革</h6>
                                            <p>調達プロセス・契約方式の抜本的見直し</p>
                                            <ul>
                                                <li>長期契約による安定化</li>
                                                <li>フレーム契約の活用</li>
                                                <li>リバースオークションの導入</li>
                                                <li>共同調達・協業調達</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="method-category" data-category="tactical">
                                    <h5><i class="fas fa-tactics"></i> 戦術的手法</h5>
                                    
                                    <div class="method-items">
                                        <div class="method-item">
                                            <h6>価格交渉・見積競争</h6>
                                            <p>市場メカニズムを活用した価格最適化</p>
                                            <ul>
                                                <li>複数社見積による競争促進</li>
                                                <li>コストブレークダウン分析</li>
                                                <li>ベンチマーク価格による交渉</li>
                                                <li>段階的価格削減目標設定</li>
                                            </ul>
                                        </div>

                                        <div class="method-item">
                                            <h6>契約条件の最適化</h6>
                                            <p>契約条項・支払条件の見直しによるコスト削減</p>
                                            <ul>
                                                <li>支払条件の改善（サイト延長）</li>
                                                <li>価格変動条項の見直し</li>
                                                <li>ペナルティ・インセンティブ設定</li>
                                                <li>為替リスク対策</li>
                                            </ul>
                                        </div>

                                        <div class="method-item">
                                            <h6>業務プロセス改善</h6>
                                            <p>調達業務の効率化による間接コスト削減</p>
                                            <ul>
                                                <li>電子調達システム導入</li>
                                                <li>承認プロセス簡素化</li>
                                                <li>在庫最適化・VMI導入</li>
                                                <li>品質管理コスト削減</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="method-category" data-category="operational">
                                    <h5><i class="fas fa-cog"></i> 運用的手法</h5>
                                    
                                    <div class="method-items">
                                        <div class="method-item">
                                            <h6>需要予測・計画精度向上</h6>
                                            <p>需要変動への適応によるコスト最適化</p>
                                            <ul>
                                                <li>需要予測精度の向上</li>
                                                <li>発注タイミング最適化</li>
                                                <li>安全在庫の適正化</li>
                                                <li>デッドストック削減</li>
                                            </ul>
                                        </div>

                                        <div class="method-item">
                                            <h6>サプライヤー開発・協働</h6>
                                            <p>サプライヤーとの協力による相互利益創出</p>
                                            <ul>
                                                <li>生産性向上支援</li>
                                                <li>技術指導・品質改善支援</li>
                                                <li>共同コスト削減プロジェクト</li>
                                                <li>イノベーション創出協業</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-chart-bar"></i> コスト管理KPIと効果測定</h4>
                            
                            <div class="kpi-framework">
                                <div class="kpi-categories">
                                    <div class="kpi-category">
                                        <h5><i class="fas fa-dollar-sign"></i> コスト効率性指標</h5>
                                        <div class="kpi-items">
                                            <div class="kpi-item">
                                                <h6>調達コスト削減率</h6>
                                                <p>（前年コスト - 当年コスト）/ 前年コスト × 100</p>
                                            </div>
                                            <div class="kpi-item">
                                                <h6>TCO削減効果</h6>
                                                <p>ライフサイクル全体でのコスト削減効果</p>
                                            </div>
                                            <div class="kpi-item">
                                                <h6>調達ROI</h6>
                                                <p>コスト削減効果 / 削減施策投資額</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="kpi-category">
                                        <h5><i class="fas fa-tachometer-alt"></i> 業務効率性指標</h5>
                                        <div class="kpi-items">
                                            <div class="kpi-item">
                                                <h6>調達プロセス効率</h6>
                                                <p>発注から納入までのリードタイム</p>
                                            </div>
                                            <div class="kpi-item">
                                                <h6>調達業務コスト率</h6>
                                                <p>調達業務コスト / 総調達金額</p>
                                            </div>
                                            <div class="kpi-item">
                                                <h6>自動化率</h6>
                                                <p>自動処理件数 / 全処理件数</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="kpi-category">
                                        <h5><i class="fas fa-target"></i> 成果・品質指標</h5>
                                        <div class="kpi-items">
                                            <div class="kpi-item">
                                                <h6>コスト削減目標達成率</h6>
                                                <p>実績削減額 / 目標削減額 × 100</p>
                                            </div>
                                            <div class="kpi-item">
                                                <h6>品質維持率</h6>
                                                <p>コスト削減による品質影響の測定</p>
                                            </div>
                                            <div class="kpi-item">
                                                <h6>サプライヤー満足度</h6>
                                                <p>Win-Win関係構築の成果指標</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-lightbulb"></i>
                            <strong>持続可能なコストマネジメントの原則</strong>
                            <ol>
                                <li><strong>価値重視アプローチ</strong>：単純な価格削減ではなく、価値最大化を追求</li>
                                <li><strong>長期視点の重視</strong>：短期的削減と長期的関係・品質のバランス</li>
                                <li><strong>協働的関係構築</strong>：サプライヤーとの Win-Win 関係による持続的改善</li>
                                <li><strong>データドリブン管理</strong>：客観的データに基づく意思決定と効果測定</li>
                                <li><strong>継続的改善</strong>：PDCAサイクルによる継続的なコスト最適化</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch17',
            title: '第17章 サプライチェーンマネジメント',
            pages: [
                {
                    id: 'ch17-1',
                    title: '17.1 SCMの戦略的意義と全体最適',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-network-wired"></i>
                            <strong>サプライチェーンマネジメントの戦略的価値</strong>
                            <p>サプライチェーンマネジメント（SCM）は、原材料調達から最終顧客への製品・サービス提供まで、価値創造プロセス全体を統合的に管理し、競争優位性を構築する重要な経営戦略です。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-sitemap"></i> サプライチェーンの構造と機能</h4>
                            
                            <div class="supply-chain-structure">
                                <div class="chain-layer" data-layer="upstream">
                                    <h5><i class="fas fa-arrow-left"></i> 上流（Upstream）</h5>
                                    <div class="layer-components">
                                        <div class="component-item">
                                            <h6>原材料サプライヤー</h6>
                                            <ul>
                                                <li>原料採掘・生産事業者</li>
                                                <li>農林水産業者</li>
                                                <li>素材・化学メーカー</li>
                                                <li>エネルギー供給事業者</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="component-item">
                                            <h6>部品・コンポーネントサプライヤー</h6>
                                            <ul>
                                                <li>専門部品メーカー</li>
                                                <li>組立加工業者</li>
                                                <li>技術・設計サービス提供者</li>
                                                <li>治具・設備メーカー</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="chain-layer" data-layer="internal">
                                    <h5><i class="fas fa-industry"></i> 内部（Internal）</h5>
                                    <div class="layer-components">
                                        <div class="component-item">
                                            <h6>調達・購買機能</h6>
                                            <ul>
                                                <li>戦略調達・ソーシング</li>
                                                <li>サプライヤー管理</li>
                                                <li>契約・リスク管理</li>
                                                <li>品質・コスト管理</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="component-item">
                                            <h6>生産・オペレーション</h6>
                                            <ul>
                                                <li>生産計画・スケジューリング</li>
                                                <li>製造・組立プロセス</li>
                                                <li>品質管理・検査</li>
                                                <li>在庫管理・倉庫運営</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="chain-layer" data-layer="downstream">
                                    <h5><i class="fas fa-arrow-right"></i> 下流（Downstream）</h5>
                                    <div class="layer-components">
                                        <div class="component-item">
                                            <h6>流通・販売チャネル</h6>
                                            <ul>
                                                <li>卸売業者・代理店</li>
                                                <li>小売業者・販売店</li>
                                                <li>物流・配送事業者</li>
                                                <li>電子商取引プラットフォーム</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="component-item">
                                            <h6>最終顧客・市場</h6>
                                            <ul>
                                                <li>企業顧客（B2B）</li>
                                                <li>消費者（B2C）</li>
                                                <li>政府・公共機関</li>
                                                <li>海外市場・輸出先</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-target"></i> SCMの戦略的目標と価値創造</h4>
                            
                            <div class="scm-objectives">
                                <div class="objective-category" data-category="customer">
                                    <h5><i class="fas fa-users"></i> 顧客価値の最大化</h5>
                                    <div class="objective-items">
                                        <div class="objective-item">
                                            <h6>顧客満足度向上</h6>
                                            <ul>
                                                <li>適切な製品・サービスの提供</li>
                                                <li>納期・品質・サービスレベル向上</li>
                                                <li>カスタマイゼーション対応</li>
                                                <li>顧客ニーズへの迅速対応</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="objective-item">
                                            <h6>市場応答性向上</h6>
                                            <ul>
                                                <li>需要変動への柔軟対応</li>
                                                <li>新製品投入スピード向上</li>
                                                <li>市場機会の迅速な捕捉</li>
                                                <li>競合優位性の確立</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="objective-category" data-category="efficiency">
                                    <h5><i class="fas fa-chart-line"></i> 効率性・生産性向上</h5>
                                    <div class="objective-items">
                                        <div class="objective-item">
                                            <h6>コスト最適化</h6>
                                            <ul>
                                                <li>調達・製造・物流コスト削減</li>
                                                <li>在庫コスト・運転資本削減</li>
                                                <li>間接費・管理コスト効率化</li>
                                                <li>規模の経済・範囲の経済活用</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="objective-item">
                                            <h6>資産効率性向上</h6>
                                            <ul>
                                                <li>設備・資産稼働率向上</li>
                                                <li>キャッシュフロー改善</li>
                                                <li>投下資本収益率向上</li>
                                                <li>資産回転率向上</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="objective-category" data-category="resilience">
                                    <h5><i class="fas fa-shield-alt"></i> レジリエンス・持続性強化</h5>
                                    <div class="objective-items">
                                        <div class="objective-item">
                                            <h6>リスク管理・事業継続</h6>
                                            <ul>
                                                <li>サプライチェーンリスク低減</li>
                                                <li>事業継続能力（BCP）強化</li>
                                                <li>多様化・冗長性確保</li>
                                                <li>早期警戒・対応システム</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="objective-item">
                                            <h6>持続可能性・ESG対応</h6>
                                            <ul>
                                                <li>環境負荷削減・カーボンニュートラル</li>
                                                <li>社会的責任・人権配慮</li>
                                                <li>サプライヤー持続可能性向上</li>
                                                <li>循環型経済への対応</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="objective-category" data-category="innovation">
                                    <h5><i class="fas fa-lightbulb"></i> イノベーション・成長促進</h5>
                                    <div class="objective-items">
                                        <div class="objective-item">
                                            <h6>技術革新・R&D協働</h6>
                                            <ul>
                                                <li>サプライヤーとの共同開発</li>
                                                <li>オープンイノベーション推進</li>
                                                <li>新技術・新材料の早期導入</li>
                                                <li>デジタル技術活用</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="objective-item">
                                            <h6>新市場開拓・事業拡大</h6>
                                            <ul>
                                                <li>グローバル展開支援</li>
                                                <li>新事業領域への参入</li>
                                                <li>バリューチェーン拡張</li>
                                                <li>エコシステム構築</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-balance-scale"></i> 全体最適vs部分最適の課題と解決</h4>
                            
                            <div class="optimization-challenges">
                                <div class="challenge-section">
                                    <h5><i class="fas fa-exclamation-triangle"></i> 部分最適の問題</h5>
                                    
                                    <div class="problem-examples">
                                        <div class="problem-item">
                                            <h6>機能間の対立</h6>
                                            <p>各部門が自部門の目標を優先し、全体最適を阻害</p>
                                            <ul>
                                                <li>調達部門：調達コスト削減優先</li>
                                                <li>生産部門：生産効率・稼働率優先</li>
                                                <li>販売部門：売上・市場シェア優先</li>
                                                <li>物流部門：輸送・配送効率優先</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="problem-item">
                                            <h6>情報の分断・非対称</h6>
                                            <p>部門間の情報共有不足による非効率</p>
                                            <ul>
                                                <li>需要予測情報の未共有</li>
                                                <li>在庫情報の可視化不足</li>
                                                <li>生産計画と調達計画の不整合</li>
                                                <li>品質問題情報の伝達遅延</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="problem-item">
                                            <h6>KPI・評価制度の不整合</h6>
                                            <p>部門別KPIが全体最適と矛盾</p>
                                            <ul>
                                                <li>短期的成果重視による長期価値毀損</li>
                                                <li>コスト削減と品質・サービス向上の対立</li>
                                                <li>個別部門最適化と全体効率性の乖離</li>
                                                <li>協働インセンティブの欠如</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="solution-section">
                                    <h5><i class="fas fa-tools"></i> 全体最適実現の手法</h5>
                                    
                                    <div class="solution-approaches">
                                        <div class="solution-item">
                                            <h6>統合的組織設計</h6>
                                            <div class="approach-details">
                                                <ul>
                                                    <li><strong>横断的組織体制</strong>：SCM推進組織・委員会設置</li>
                                                    <li><strong>統合KPI設計</strong>：全体最適を促進する評価指標</li>
                                                    <li><strong>協働インセンティブ</strong>：部門間連携を評価する制度</li>
                                                    <li><strong>人材交流・ローテーション</strong>：全体視点を持つ人材育成</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="solution-item">
                                            <h6>情報統合・可視化</h6>
                                            <div class="approach-details">
                                                <ul>
                                                    <li><strong>統合情報システム</strong>：ERP・SCMシステム導入</li>
                                                    <li><strong>リアルタイム情報共有</strong>：ダッシュボード・BI活用</li>
                                                    <li><strong>予測・計画統合</strong>：S&OP（Sales & Operations Planning）</li>
                                                    <li><strong>データ標準化</strong>：マスターデータ統一管理</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="solution-item">
                                            <h6>プロセス統合・標準化</h6>
                                            <div class="approach-details">
                                                <ul>
                                                    <li><strong>エンドツーエンドプロセス設計</strong>：全体最適プロセス構築</li>
                                                    <li><strong>標準オペレーション</strong>：ベストプラクティス標準化</li>
                                                    <li><strong>継続改善システム</strong>：PDCA・カイゼン活動</li>
                                                    <li><strong>変革管理</strong>：組織・文化変革の推進</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="solution-item">
                                            <h6>パートナーシップ構築</h6>
                                            <div class="approach-details">
                                                <ul>
                                                    <li><strong>戦略的パートナーシップ</strong>：重要サプライヤーとの協働</li>
                                                    <li><strong>情報共有・協働計画</strong>：CPFR（Collaborative Planning）</li>
                                                    <li><strong>Win-Win関係構築</strong>：相互利益創出の仕組み</li>
                                                    <li><strong>エコシステム形成</strong>：業界・地域レベルの協働</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-chart-bar"></i> SCM成熟度モデルと進化段階</h4>
                            
                            <div class="maturity-model">
                                <div class="maturity-level" data-level="1">
                                    <h5>Level 1: 機能別最適化</h5>
                                    <div class="level-characteristics">
                                        <div class="characteristics-item">
                                            <h6>特徴</h6>
                                            <ul>
                                                <li>部門別個別最適化</li>
                                                <li>情報システム分断</li>
                                                <li>短期成果重視</li>
                                                <li>サプライヤーとの取引的関係</li>
                                            </ul>
                                        </div>
                                        <div class="characteristics-item">
                                            <h6>課題</h6>
                                            <ul>
                                                <li>全体効率性の低さ</li>
                                                <li>在庫・コストの非効率</li>
                                                <li>市場応答性の遅さ</li>
                                                <li>品質・サービス問題</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="maturity-level" data-level="2">
                                    <h5>Level 2: 内部統合</h5>
                                    <div class="level-characteristics">
                                        <div class="characteristics-item">
                                            <h6>特徴</h6>
                                            <ul>
                                                <li>社内プロセス統合</li>
                                                <li>ERPシステム導入</li>
                                                <li>統合計画・KPI</li>
                                                <li>クロスファンクショナルチーム</li>
                                            </ul>
                                        </div>
                                        <div class="characteristics-item">
                                            <h6>成果</h6>
                                            <ul>
                                                <li>内部効率性向上</li>
                                                <li>情報可視化・共有</li>
                                                <li>在庫最適化</li>
                                                <li>納期・品質改善</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="maturity-level" data-level="3">
                                    <h5>Level 3: 外部統合</h5>
                                    <div class="level-characteristics">
                                        <div class="characteristics-item">
                                            <h6>特徴</h6>
                                            <ul>
                                                <li>サプライヤー・顧客との統合</li>
                                                <li>情報共有・協働計画</li>
                                                <li>戦略的パートナーシップ</li>
                                                <li>サプライチェーン可視化</li>
                                            </ul>
                                        </div>
                                        <div class="characteristics-item">
                                            <h6>成果</h6>
                                            <ul>
                                                <li>サプライチェーン全体最適化</li>
                                                <li>市場応答性向上</li>
                                                <li>イノベーション創出</li>
                                                <li>競争優位性確立</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="maturity-level" data-level="4">
                                    <h5>Level 4: デジタル統合</h5>
                                    <div class="level-characteristics">
                                        <div class="characteristics-item">
                                            <h6>特徴</h6>
                                            <ul>
                                                <li>AI・IoT活用</li>
                                                <li>リアルタイム最適化</li>
                                                <li>予測・シミュレーション</li>
                                                <li>自動化・自律化</li>
                                            </ul>
                                        </div>
                                        <div class="characteristics-item">
                                            <h6>成果</h6>
                                            <ul>
                                                <li>動的最適化</li>
                                                <li>レジリエンス強化</li>
                                                <li>新価値創造</li>
                                                <li>持続可能性実現</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="maturity-level" data-level="5">
                                    <h5>Level 5: エコシステム統合</h5>
                                    <div class="level-characteristics">
                                        <div class="characteristics-item">
                                            <h6>特徴</h6>
                                            <ul>
                                                <li>業界・地域エコシステム形成</li>
                                                <li>プラットフォーム・ネットワーク経営</li>
                                                <li>社会価値創造</li>
                                                <li>循環型・持続型モデル</li>
                                            </ul>
                                        </div>
                                        <div class="characteristics-item">
                                            <h6>成果</h6>
                                            <ul>
                                                <li>業界リーダーシップ</li>
                                                <li>社会的価値創造</li>
                                                <li>長期持続可能性</li>
                                                <li>ステークホルダー価値最大化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-rocket"></i>
                            <strong>SCM成功の重要要因</strong>
                            <ol>
                                <li><strong>トップマネジメントのコミットメント</strong>：全社的なSCM推進の強いリーダーシップ</li>
                                <li><strong>全体最適思考</strong>：部分最適を超えた全体最適を追求する組織文化</li>
                                <li><strong>情報・プロセス統合</strong>：エンドツーエンドの情報・プロセス統合</li>
                                <li><strong>戦略的パートナーシップ</strong>：重要ステークホルダーとの長期的信頼関係</li>
                                <li><strong>継続的改善・変革</strong>：変化に適応する組織能力と改善文化</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch18',
            title: '第18章 調達法務・コンプライアンス',
            pages: [
                {
                    id: 'ch18-1',
                    title: '18.1 調達における法的リスクと対応',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-gavel"></i>
                            <strong>調達法務・コンプライアンスの重要性</strong>
                            <p>調達活動における法的リスク管理とコンプライアンス体制の構築は、企業の持続的成長と社会的信頼の獲得に不可欠です。複雑化する規制環境下で、適切な法務対応により事業リスクを最小化し、競争優位性を確保します。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-balance-scale"></i> 調達に関する主要法制度</h4>
                            
                            <div class="legal-framework">
                                <div class="law-category" data-category="commercial">
                                    <h5><i class="fas fa-handshake"></i> 商取引・契約法</h5>
                                    <div class="law-items">
                                        <div class="law-item">
                                            <h6>民法（契約法）</h6>
                                            <ul>
                                                <li>契約の成立・履行・責任</li>
                                                <li>債務不履行・損害賠償</li>
                                                <li>契約解除・取消</li>
                                                <li>時効・除斥期間</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>商法・会社法</h6>
                                            <ul>
                                                <li>商行為・商取引</li>
                                                <li>代理・表見代理</li>
                                                <li>会社の権限・責任</li>
                                                <li>利益相反・競業避止</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>国際商取引法</h6>
                                            <ul>
                                                <li>ウィーン売買条約（CISG）</li>
                                                <li>インコタームズ</li>
                                                <li>国際商事仲裁</li>
                                                <li>外為法・貿易管理令</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="law-category" data-category="competition">
                                    <h5><i class="fas fa-users-cog"></i> 競争・取引法</h5>
                                    <div class="law-items">
                                        <div class="law-item">
                                            <h6>独占禁止法（競争法）</h6>
                                            <ul>
                                                <li>私的独占・不当な取引制限</li>
                                                <li>不公正な取引方法</li>
                                                <li>優越的地位の濫用</li>
                                                <li>企業結合・M&A規制</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>下請代金支払遅延等防止法</h6>
                                            <ul>
                                                <li>下請代金の支払期日</li>
                                                <li>減額・返品の禁止</li>
                                                <li>買いたたき・押し付け販売禁止</li>
                                                <li>書面交付・記録保存義務</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>建設業法・その他業法</h6>
                                            <ul>
                                                <li>建設業許可・資格要件</li>
                                                <li>元請・下請関係規制</li>
                                                <li>業界固有の取引規制</li>
                                                <li>許認可・届出義務</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="law-category" data-category="quality">
                                    <h5><i class="fas fa-certificate"></i> 品質・安全法</h5>
                                    <div class="law-items">
                                        <div class="law-item">
                                            <h6>製造物責任法（PL法）</h6>
                                            <ul>
                                                <li>製造業者等の無過失責任</li>
                                                <li>欠陥の種類・判断基準</li>
                                                <li>免責事由・抗弁</li>
                                                <li>損害賠償・時効</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>各種安全・品質規制</h6>
                                            <ul>
                                                <li>食品衛生法・薬機法</li>
                                                <li>消費生活用製品安全法</li>
                                                <li>労働安全衛生法</li>
                                                <li>JIS・国際規格適合</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="law-category" data-category="information">
                                    <h5><i class="fas fa-shield-alt"></i> 情報・知財法</h5>
                                    <div class="law-items">
                                        <div class="law-item">
                                            <h6>知的財産権法</h6>
                                            <ul>
                                                <li>特許・実用新案・意匠・商標</li>
                                                <li>著作権・営業秘密</li>
                                                <li>侵害・ライセンス</li>
                                                <li>職務発明・共同開発</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>情報保護・プライバシー法</h6>
                                            <ul>
                                                <li>個人情報保護法</li>
                                                <li>GDPR・CCPA等</li>
                                                <li>営業秘密保護・不正競争防止法</li>
                                                <li>サイバーセキュリティ関連法</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="law-category" data-category="environmental">
                                    <h5><i class="fas fa-leaf"></i> 環境・労働法</h5>
                                    <div class="law-items">
                                        <div class="law-item">
                                            <h6>環境関連法</h6>
                                            <ul>
                                                <li>環境基本法・各種環境法</li>
                                                <li>化学物質・廃棄物規制</li>
                                                <li>温室効果ガス・省エネ法</li>
                                                <li>海外環境規制（RoHS・REACH等）</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="law-item">
                                            <h6>労働・人権関連法</h6>
                                            <ul>
                                                <li>労働基準法・労働契約法</li>
                                                <li>男女共同参画・ハラスメント防止</li>
                                                <li>外国人技能実習・特定技能</li>
                                                <li>強制労働・児童労働規制</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-exclamation-triangle"></i> 主要な法的リスクと対応策</h4>
                            
                            <div class="legal-risks">
                                <div class="risk-category" data-risk="contract">
                                    <h5><i class="fas fa-file-contract"></i> 契約・取引リスク</h5>
                                    
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>契約条項の不備・不適切性</h6>
                                                <p>曖昧な条項、一方的な条件、法的強制力の欠如等による紛争リスク</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>標準契約書テンプレートの整備</li>
                                                    <li>法務部門による契約書レビュー体制</li>
                                                    <li>重要条項チェックリストの活用</li>
                                                    <li>外部法律事務所との連携</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>債務不履行・損害賠償</h6>
                                                <p>納期遅延、品質不適合、仕様違い等による損害賠償請求リスク</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>免責条項・責任制限条項の設定</li>
                                                    <li>保険付保・保証制度の活用</li>
                                                    <li>段階的是正措置の規定</li>
                                                    <li>代替調達先の確保</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>国際取引・準拠法リスク</h6>
                                                <p>準拠法・管轄、為替・貿易規制、文化・商慣習の違い等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>国際商事仲裁条項の設定</li>
                                                    <li>インコタームズ・L/C活用</li>
                                                    <li>現地法律事務所との連携</li>
                                                    <li>貿易コンプライアンス体制整備</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="risk-category" data-risk="compliance">
                                    <h5><i class="fas fa-clipboard-check"></i> コンプライアンスリスク</h5>
                                    
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>独禁法・競争法違反</h6>
                                                <p>カルテル、入札談合、優越的地位濫用、下請法違反等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>競争法コンプライアンス規程整備</li>
                                                    <li>定期的な研修・啓発活動</li>
                                                    <li>取引条件・プロセスの適正化</li>
                                                    <li>内部監査・モニタリング体制</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>贈収賄・腐敗防止法違反</h6>
                                                <p>公務員等への不正利益供与、商業賄賂、利益相反等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>贈収賄防止規程・ガイドライン策定</li>
                                                    <li>サプライヤー行動規範の制定</li>
                                                    <li>利益相反管理・申告制度</li>
                                                    <li>定期的デューデリジェンス実施</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>輸出管理・経済制裁違反</h6>
                                                <p>軍事転用技術・製品の不適切輸出、制裁対象者との取引等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>輸出管理内部規程（CP）策定</li>
                                                    <li>該非判定・事前審査制度</li>
                                                    <li>制裁リスト・WLスクリーニング</li>
                                                    <li>輸出管理責任者・組織体制整備</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="risk-category" data-risk="liability">
                                    <h5><i class="fas fa-exclamation-circle"></i> 責任・損害リスク</h5>
                                    
                                    <div class="risk-items">
                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>製造物責任（PL）リスク</h6>
                                                <p>製品欠陥による人身・財産損害、リコール費用等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>品質管理・検査体制強化</li>
                                                    <li>PL保険・リコール保険付保</li>
                                                    <li>サプライヤー品質監査・認定</li>
                                                    <li>トレーサビリティ・記録管理</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>知的財産権侵害リスク</h6>
                                                <p>特許・著作権等の侵害、営業秘密漏洩・盗用等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>知財クリアランス・先行調査</li>
                                                    <li>知財保証・補償条項の設定</li>
                                                    <li>営業秘密管理・秘密保持契約</li>
                                                    <li>知財紛争対応・訴訟保険</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="risk-item">
                                            <div class="risk-description">
                                                <h6>情報漏洩・プライバシー侵害</h6>
                                                <p>個人情報・機密情報の漏洩、サイバー攻撃被害等</p>
                                            </div>
                                            <div class="risk-mitigation">
                                                <h6>対応策</h6>
                                                <ul>
                                                    <li>情報セキュリティ管理体制整備</li>
                                                    <li>サプライヤー情報セキュリティ監査</li>
                                                    <li>データ保護・プライバシー規程</li>
                                                    <li>サイバー保険・事故対応計画</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-clipboard-list"></i> コンプライアンス体制の構築</h4>
                            
                            <div class="compliance-system">
                                <div class="system-component" data-component="governance">
                                    <h5><i class="fas fa-users"></i> ガバナンス・組織体制</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>経営レベル</h6>
                                            <ul>
                                                <li>取締役会・監査役によるコンプライアンス監督</li>
                                                <li>CCO（Chief Compliance Officer）の設置</li>
                                                <li>コンプライアンス委員会・会議体</li>
                                                <li>内部監査・監査委員会との連携</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>実務レベル</h6>
                                            <ul>
                                                <li>調達コンプライアンス責任者・担当者</li>
                                                <li>法務部門・調達部門の連携体制</li>
                                                <li>現場レベルのコンプライアンス推進者</li>
                                                <li>外部専門家・顧問弁護士の活用</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="system-component" data-component="rules">
                                    <h5><i class="fas fa-file-alt"></i> 規程・ガイドライン</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>基本方針・行動規範</h6>
                                            <ul>
                                                <li>企業理念・行動規範の明文化</li>
                                                <li>調達基本方針・調達倫理</li>
                                                <li>サプライヤー行動規範</li>
                                                <li>利益相反管理規程</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>実務規程・手順書</h6>
                                            <ul>
                                                <li>調達業務規程・承認権限</li>
                                                <li>契約審査・承認手続き</li>
                                                <li>サプライヤー評価・監査手順</li>
                                                <li>緊急時対応・危機管理手順</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="system-component" data-component="training">
                                    <h5><i class="fas fa-graduation-cap"></i> 教育・研修</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>定期研修・啓発</h6>
                                            <ul>
                                                <li>新入社員・異動者研修</li>
                                                <li>調達担当者向け法務研修</li>
                                                <li>管理職向けコンプライアンス研修</li>
                                                <li>最新法改正・規制動向説明会</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>実践的教育</h6>
                                            <ul>
                                                <li>ケーススタディ・事例研究</li>
                                                <li>契約書作成・レビュー実習</li>
                                                <li>リスクアセスメント演習</li>
                                                <li>緊急時対応シミュレーション</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="system-component" data-component="monitoring">
                                    <h5><i class="fas fa-search"></i> 監視・監査</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>内部監視・チェック</h6>
                                            <ul>
                                                <li>日常業務での自己点検</li>
                                                <li>上司による業務承認・確認</li>
                                                <li>法務部門による契約書チェック</li>
                                                <li>定期的な業務プロセス監査</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>内部監査・外部監査</h6>
                                            <ul>
                                                <li>内部監査部門による監査</li>
                                                <li>外部法律事務所による法務監査</li>
                                                <li>サプライヤーコンプライアンス監査</li>
                                                <li>監査結果のフォローアップ・改善</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="system-component" data-component="response">
                                    <h5><i class="fas fa-exclamation-triangle"></i> 発覚時対応</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>通報・相談体制</h6>
                                            <ul>
                                                <li>内部通報制度・ホットライン</li>
                                                <li>匿名通報・相談窓口</li>
                                                <li>外部通報窓口の設置</li>
                                                <li>通報者保護・非報復規程</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>事案対応・是正</h6>
                                            <ul>
                                                <li>迅速な事実調査・原因究明</li>
                                                <li>適切な処分・是正措置</li>
                                                <li>再発防止策の策定・実施</li>
                                                <li>監督官庁・ステークホルダーへの報告</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-shield-alt"></i>
                            <strong>効果的な調達法務・コンプライアンス体制の要点</strong>
                            <ol>
                                <li><strong>予防重視アプローチ</strong>：事後対応より事前予防に重点を置いた体制構築</li>
                                <li><strong>リスクベース管理</strong>：リスクの重要度に応じためりはりある管理</li>
                                <li><strong>実効性確保</strong>：形式的でない実効性のある仕組み・運用</li>
                                <li><strong>継続的改善</strong>：法改正・事業環境変化への適応と改善</li>
                                <li><strong>ステークホルダー協働</strong>：サプライヤー等との協働によるコンプライアンス向上</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'ch19',
            title: '第19章 調達戦略の実装と組織変革',
            pages: [
                {
                    id: 'ch19-1',
                    title: '19.1 戦略実装のフレームワーク',
                    content: `
                        <div class="important-point">
                            <i class="fas fa-rocket"></i>
                            <strong>調達戦略実装の重要性</strong>
                            <p>優れた調達戦略も、適切な実装プロセスと組織変革なしには成果を生みません。戦略策定から実行、定着まで一貫したアプローチにより、持続可能な競争優位性を確立し、企業価値の最大化を実現します。</p>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-map-marked-alt"></i> 戦略実装の全体プロセス</h4>
                            
                            <div class="implementation-process">
                                <div class="process-phase" data-phase="1">
                                    <div class="phase-header">
                                        <div class="phase-number">1</div>
                                        <h5>現状分析・戦略策定</h5>
                                        <span class="phase-duration">2-3ヶ月</span>
                                    </div>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>現状の包括的分析・評価</li>
                                                <li>戦略的課題・機会の特定</li>
                                                <li>調達戦略・ビジョンの策定</li>
                                                <li>ステークホルダーの合意形成</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>Spend Analysis・カテゴリー分析</li>
                                                <li>サプライヤー・市場分析</li>
                                                <li>組織・プロセス・システム現状分析</li>
                                                <li>ベンチマーク・ベストプラクティス調査</li>
                                                <li>戦略オプション検討・評価</li>
                                                <li>調達戦略・実装計画の策定</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-deliverables">
                                            <h6>成果物</h6>
                                            <ul>
                                                <li>現状分析レポート</li>
                                                <li>調達戦略書</li>
                                                <li>実装ロードマップ</li>
                                                <li>投資計画・予算</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="process-phase" data-phase="2">
                                    <div class="phase-header">
                                        <div class="phase-number">2</div>
                                        <h5>基盤整備・準備</h5>
                                        <span class="phase-duration">3-6ヶ月</span>
                                    </div>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>実装に向けた組織・体制整備</li>
                                                <li>必要なリソース・スキルの確保</li>
                                                <li>基盤システム・プロセス構築</li>
                                                <li>変革への準備・意識改革</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>プロジェクト組織・PMO設立</li>
                                                <li>人材配置・採用・育成計画</li>
                                                <li>ITシステム・インフラ整備</li>
                                                <li>業務プロセス・規程改定</li>
                                                <li>コミュニケーション・研修計画</li>
                                                <li>パイロットプロジェクト選定</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-deliverables">
                                            <h6>成果物</h6>
                                            <ul>
                                                <li>プロジェクト計画書</li>
                                                <li>組織・人事計画</li>
                                                <li>システム仕様・設計書</li>
                                                <li>業務プロセス文書</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="process-phase" data-phase="3">
                                    <div class="phase-header">
                                        <div class="phase-number">3</div>
                                        <h5>パイロット実施・検証</h5>
                                        <span class="phase-duration">3-6ヶ月</span>
                                    </div>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>小規模での戦略実装・検証</li>
                                                <li>課題・問題点の早期発見・対策</li>
                                                <li>成功事例・ベストプラクティス創出</li>
                                                <li>本格展開への準備</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>パイロット領域での戦略実行</li>
                                                <li>新プロセス・システム運用開始</li>
                                                <li>サプライヤーとの協働開始</li>
                                                <li>成果・課題の定期的モニタリング</li>
                                                <li>改善・修正の実施</li>
                                                <li>成功事例の文書化・共有</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-deliverables">
                                            <h6>成果物</h6>
                                            <ul>
                                                <li>パイロット結果レポート</li>
                                                <li>課題・改善提案</li>
                                                <li>成功事例集</li>
                                                <li>本格展開計画</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="process-phase" data-phase="4">
                                    <div class="phase-header">
                                        <div class="phase-number">4</div>
                                        <h5>本格展開・実行</h5>
                                        <span class="phase-duration">12-24ヶ月</span>
                                    </div>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>全社・全領域への戦略展開</li>
                                                <li>目標成果の達成</li>
                                                <li>組織能力・文化の変革</li>
                                                <li>持続可能な仕組みの構築</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>段階的な展開・ロールアウト</li>
                                                <li>全社システム・プロセス展開</li>
                                                <li>大規模サプライヤー連携</li>
                                                <li>成果管理・KPIモニタリング</li>
                                                <li>継続的改善・最適化</li>
                                                <li>組織学習・知識共有</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-deliverables">
                                            <h6>成果物</h6>
                                            <ul>
                                                <li>展開状況レポート</li>
                                                <li>成果・効果測定結果</li>
                                                <li>改善・最適化提案</li>
                                                <li>次期戦略への提言</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="process-phase" data-phase="5">
                                    <div class="phase-header">
                                        <div class="phase-number">5</div>
                                        <h5>定着・進化</h5>
                                        <span class="phase-duration">継続的</span>
                                    </div>
                                    <div class="phase-content">
                                        <div class="phase-objectives">
                                            <h6>主要目標</h6>
                                            <ul>
                                                <li>新しい仕組み・文化の定着</li>
                                                <li>継続的な改善・進化</li>
                                                <li>次世代戦略の準備</li>
                                                <li>組織学習・能力向上</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-activities">
                                            <h6>主要活動</h6>
                                            <ul>
                                                <li>定常運用・ガバナンス体制</li>
                                                <li>継続的改善・イノベーション</li>
                                                <li>人材育成・スキル開発</li>
                                                <li>外部環境変化への対応</li>
                                                <li>次期戦略検討・準備</li>
                                                <li>成果・知見の対外発信</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="phase-deliverables">
                                            <h6>成果物</h6>
                                            <ul>
                                                <li>定期評価・改善レポート</li>
                                                <li>人材育成・教育プログラム</li>
                                                <li>次期戦略構想</li>
                                                <li>ベストプラクティス・ナレッジ</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-users-cog"></i> 組織変革マネジメント</h4>
                            
                            <div class="change-management">
                                <div class="change-component" data-component="leadership">
                                    <h5><i class="fas fa-user-tie"></i> リーダーシップ・ビジョン</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>トップマネジメントのコミット</h6>
                                            <ul>
                                                <li>CEO・経営陣の明確なコミットメント表明</li>
                                                <li>変革ビジョン・戦略の社内外への発信</li>
                                                <li>必要なリソース・投資の確保</li>
                                                <li>変革プロセスへの積極的な関与</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>変革リーダーの育成・配置</h6>
                                            <ul>
                                                <li>変革推進リーダー（Change Agent）の選任</li>
                                                <li>部門・現場レベルの変革推進者育成</li>
                                                <li>変革リーダーシップスキル研修</li>
                                                <li>変革実績に基づく評価・処遇</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="change-component" data-component="communication">
                                    <h5><i class="fas fa-bullhorn"></i> コミュニケーション・エンゲージメント</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>戦略的コミュニケーション</h6>
                                            <ul>
                                                <li>変革の必要性・意義の明確な説明</li>
                                                <li>ビジョン・戦略の分かりやすい伝達</li>
                                                <li>進捗・成果の定期的な共有</li>
                                                <li>多様なチャネル・方法でのコミュニケーション</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>双方向コミュニケーション</h6>
                                            <ul>
                                                <li>現場からのフィードバック収集</li>
                                                <li>課題・懸念への迅速な対応</li>
                                                <li>従業員参加型のワークショップ・会議</li>
                                                <li>アイデア・改善提案制度の活用</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="change-component" data-component="capability">
                                    <h5><i class="fas fa-graduation-cap"></i> 能力開発・スキル向上</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>戦略的人材育成</h6>
                                            <ul>
                                                <li>必要スキル・コンピテンシーの定義</li>
                                                <li>現状スキルレベルの評価・ギャップ分析</li>
                                                <li>体系的な教育・研修プログラム</li>
                                                <li>OJT・メンタリング・コーチング</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>学習する組織の構築</h6>
                                            <ul>
                                                <li>継続学習・自己啓発の促進</li>
                                                <li>知識共有・ベストプラクティス展開</li>
                                                <li>失敗から学ぶ文化の醸成</li>
                                                <li>外部学習・ベンチマーク活動</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="change-component" data-component="culture">
                                    <h5><i class="fas fa-heart"></i> 文化・マインドセット変革</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>価値観・行動規範の浸透</h6>
                                            <ul>
                                                <li>新しい価値観・行動規範の明文化</li>
                                                <li>経営陣・管理職による模範的行動</li>
                                                <li>価値観に基づく意思決定・行動の奨励</li>
                                                <li>価値観浸透度の測定・フォローアップ</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>変革文化の醸成</h6>
                                            <ul>
                                                <li>挑戦・イノベーション精神の奨励</li>
                                                <li>協働・チームワークの重視</li>
                                                <li>顧客・市場志向の徹底</li>
                                                <li>継続改善・学習する組織文化</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="change-component" data-component="systems">
                                    <h5><i class="fas fa-cogs"></i> システム・仕組み変革</h5>
                                    <div class="component-details">
                                        <div class="detail-section">
                                            <h6>人事・評価制度改革</h6>
                                            <ul>
                                                <li>新戦略に整合した評価・報酬制度</li>
                                                <li>変革貢献・成果に基づく処遇</li>
                                                <li>キャリア開発・昇進制度の見直し</li>
                                                <li>多様性・包括性を重視した人事制度</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="detail-section">
                                            <h6>業務システム・プロセス改革</h6>
                                            <ul>
                                                <li>新戦略を支えるITシステム構築</li>
                                                <li>効率的・効果的な業務プロセス設計</li>
                                                <li>意思決定・権限配分の最適化</li>
                                                <li>パフォーマンス管理・改善の仕組み</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-section">
                            <h4><i class="fas fa-chart-line"></i> 成果測定・継続改善</h4>
                            
                            <div class="performance-management">
                                <div class="measurement-framework">
                                    <h5>成果測定フレームワーク</h5>
                                    
                                    <div class="measurement-levels">
                                        <div class="measurement-level" data-level="financial">
                                            <h6><i class="fas fa-dollar-sign"></i> 財務・経済成果</h6>
                                            <div class="kpi-items">
                                                <ul>
                                                    <li><strong>コスト削減効果</strong>：年間コスト削減額・率</li>
                                                    <li><strong>ROI・投資効果</strong>：戦略投資に対するリターン</li>
                                                    <li><strong>利益寄与度</strong>：調達戦略による利益向上</li>
                                                    <li><strong>キャッシュフロー改善</strong>：運転資本・支払条件改善</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="measurement-level" data-level="operational">
                                            <h6><i class="fas fa-tachometer-alt"></i> 業務・運営成果</h6>
                                            <div class="kpi-items">
                                                <ul>
                                                    <li><strong>品質向上</strong>：不良率削減・品質指標改善</li>
                                                    <li><strong>納期・リードタイム</strong>：調達リードタイム短縮</li>
                                                    <li><strong>業務効率性</strong>：生産性・プロセス効率向上</li>
                                                    <li><strong>リスク低減</strong>：リスク事象・影響の削減</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="measurement-level" data-level="strategic">
                                            <h6><i class="fas fa-chess"></i> 戦略・競争成果</h6>
                                            <div class="kpi-items">
                                                <ul>
                                                    <li><strong>市場競争力</strong>：市場シェア・顧客満足度向上</li>
                                                    <li><strong>イノベーション創出</strong>：新製品・サービス開発成果</li>
                                                    <li><strong>サステナビリティ</strong>：ESG評価・持続可能性指標</li>
                                                    <li><strong>ブランド価値</strong>：企業価値・評判向上</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="measurement-level" data-level="organizational">
                                            <h6><i class="fas fa-users"></i> 組織・人材成果</h6>
                                            <div class="kpi-items">
                                                <ul>
                                                    <li><strong>組織能力向上</strong>：スキル・コンピテンシー向上</li>
                                                    <li><strong>従業員エンゲージメント</strong>：満足度・モチベーション</li>
                                                    <li><strong>文化変革度</strong>：価値観浸透・行動変容</li>
                                                    <li><strong>人材確保・育成</strong>：採用・定着・育成成果</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="improvement-cycle">
                                    <h5>継続改善サイクル</h5>
                                    
                                    <div class="pdca-cycle">
                                        <div class="cycle-phase" data-phase="plan">
                                            <h6>Plan（計画）</h6>
                                            <ul>
                                                <li>成果・課題の分析・評価</li>
                                                <li>改善機会の特定・優先順位付け</li>
                                                <li>改善計画・目標の設定</li>
                                                <li>実行計画・リソース配分</li>
                                            </ul>
                                        </div>

                                        <div class="cycle-phase" data-phase="do">
                                            <h6>Do（実行）</h6>
                                            <ul>
                                                <li>改善施策の実行</li>
                                                <li>新しいプロセス・仕組みの導入</li>
                                                <li>教育・研修・能力開発</li>
                                                <li>進捗・状況のモニタリング</li>
                                            </ul>
                                        </div>

                                        <div class="cycle-phase" data-phase="check">
                                            <h6>Check（評価）</h6>
                                            <ul>
                                                <li>実行結果・成果の測定</li>
                                                <li>目標達成度・効果の評価</li>
                                                <li>課題・問題点の分析</li>
                                                <li>成功要因・阻害要因の特定</li>
                                            </ul>
                                        </div>

                                        <div class="cycle-phase" data-phase="action">
                                            <h6>Action（改善）</h6>
                                            <ul>
                                                <li>成功事例の標準化・展開</li>
                                                <li>課題・問題への対策実施</li>
                                                <li>プロセス・仕組みの修正</li>
                                                <li>次期改善計画への反映</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="important-point">
                            <i class="fas fa-crown"></i>
                            <strong>戦略実装成功の成功要因</strong>
                            <ol>
                                <li><strong>強力なリーダーシップ</strong>：経営トップの確固たるコミットメントと一貫したメッセージ</li>
                                <li><strong>全社一体となった推進</strong>：部門を超えた協働と全員参加による実行体制</li>
                                <li><strong>段階的・着実な実行</strong>：大きな目標を具体的なステップに分解した計画的実行</li>
                                <li><strong>変革への投資</strong>：人材・システム・教育への十分な投資とリソース配分</li>
                                <li><strong>学習・適応する組織</strong>：失敗を恐れず学習し続ける組織文化の構築</li>
                            </ol>
                        </div>
                    `
                }
            ]
        }
    ]
};

// ブラウザ環境でグローバル変数として利用可能にする
if (typeof window !== 'undefined') {
    window.TEXTBOOK_DATA = TEXTBOOK_DATA;
}

// Node.js環境でも利用可能にする
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = TEXTBOOK_DATA;
    global.TEXTBOOK_DATA = TEXTBOOK_DATA;
}
