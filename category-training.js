// CPP Master - 分野別トレーニングモード
// 特定カテゴリを集中的に学習するモード

class CategoryTrainingSystem {
    constructor() {
        this.selectedCategory = null;
        this.trainingQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = null;
        this.isTrainingActive = false;
        this.availableCategories = [];

        this.initializeEventListeners();
        this.loadAvailableCategories();
    }

    initializeEventListeners() {
        // 分野別トレーニング開始ボタン
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-mode="category"] .mode-btn')) {
                this.showCategorySelector();
            }
        });
    }

    loadAvailableCategories() {
        // 10個の主要分野に統合
        this.availableCategories = [
            '調達の基本',
            '戦略・マネジメント',
            'サプライチェーン',
            '品質・コスト管理',
            'サステナビリティ',
            'グローバル調達',
            'リスク管理',
            'IT・デジタル化',
            '法務・契約',
            '組織・人材'
        ];

        // カテゴリマッピングを定義
        this.categoryMapping = {
            '調達の基本': ['調達の基本概念', '調達の戦略的位置付け', 'エンジニアリングチェーン', '調達品の分類', '調達の関与度', '調達企画', '調達権限'],
            '戦略・マネジメント': ['戦略・マネジメント', '環境分析', 'BSC', '競争力強化', '調達戦略', 'ソーシング戦略'],
            'サプライチェーン': ['サプライチェーン', 'モーダルシフト'],
            '品質・コスト管理': ['品質管理', '原価管理', 'コスト分析', '開発購買', 'VE・VA'],
            'サステナビリティ': ['サステナビリティ', '環境配慮', '環境法規制', '国際環境規制', '調達倫理'],
            'グローバル調達': ['グローバル調達', '国際調達', '為替リスク', '貿易実務'],
            'リスク管理': ['リスク管理', 'BCM', 'BCP', 'コンプライアンス'],
            'IT・デジタル化': ['IT・システム活用', 'デジタル化', 'DX', 'AI・IoT', 'システム導入'],
            '法務・契約': ['法務・契約', '契約管理', '知的財産', '下請法', '独占禁止法'],
            '組織・人材': ['組織・人材', '人材育成', '組織設計', 'キャリア開発', '総合問題']
        };

        console.log(`統合された分野: ${this.availableCategories.length}個`);
    }

    showCategorySelector() {
        // カテゴリ選択ダイアログを表示
        const quizSection = document.querySelector('.quiz-section');

        // モード選択画面を非表示
        const quizModes = document.querySelector('.quiz-modes');
        if (quizModes) quizModes.style.display = 'none';

        // 通常のクイズコンテナを非表示
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) quizContainer.style.display = 'none';

        // カテゴリ選択UIを作成
        const selectorContainer = this.createCategorySelectorUI();
        quizSection.appendChild(selectorContainer);
    }

    createCategorySelectorUI() {
        const container = document.createElement('div');
        container.className = 'category-selector-container';
        container.id = 'category-selector';

        let categoryCards = '';

        // ユーザーの進捗情報を取得
        const progress = JSON.parse(localStorage.getItem('cpp_user_progress') || '{}');
        const categoryStats = progress.categoryStats || {};

        this.availableCategories.forEach(category => {
            const stats = categoryStats[category] || { total: 0, correct: 0, accuracy: 0 };
            const iconMap = this.getCategoryIcon(category);

            categoryCards += `
                <div class="category-card" data-category="${category}">
                    <div class="category-icon">${iconMap}</div>
                    <h3 class="category-name">${category}</h3>
                    ${stats.total > 0 ? `
                        <div class="category-stats">
                            <div class="stat-row">
                                <span class="stat-label">学習数</span>
                                <span class="stat-value">${stats.total}問</span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">正答率</span>
                                <span class="stat-value ${stats.accuracy >= 70 ? 'good' : stats.accuracy >= 50 ? 'ok' : 'weak'}">${stats.accuracy}%</span>
                            </div>
                        </div>
                    ` : '<div class="category-stats"><span class="no-data">未学習</span></div>'}
                    <button class="category-start-btn">開始</button>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="category-selector-header">
                <h2><i class="fas fa-filter"></i> 分野別トレーニング</h2>
                <button id="category-back-btn" class="back-btn">
                    <i class="fas fa-arrow-left"></i> 戻る
                </button>
            </div>

            <div class="category-selector-content">
                <p class="selector-description">
                    学習したい分野を選択してください。各分野から20問をランダムに出題します。
                </p>

                <div class="category-grid">
                    ${categoryCards}
                </div>
            </div>
        `;

        // イベントリスナーを追加
        this.addCategorySelectorListeners(container);

        return container;
    }

    getCategoryIcon(category) {
        const iconMap = {
            '調達の基本': '📋',
            '戦略・マネジメント': '🎯',
            'サプライチェーン': '🔗',
            '品質・コスト管理': '💰',
            'サステナビリティ': '🌱',
            'グローバル調達': '🌍',
            'リスク管理': '⚠️',
            'IT・デジタル化': '💻',
            '法務・契約': '📜',
            '組織・人材': '👥'
        };

        return iconMap[category] || '📚';
    }

    addCategorySelectorListeners(container) {
        // 戻るボタン
        container.querySelector('#category-back-btn').addEventListener('click', () => {
            this.backToMenu();
        });

        // カテゴリカードのクリック
        container.querySelectorAll('.category-card').forEach(card => {
            card.querySelector('.category-start-btn').addEventListener('click', () => {
                const category = card.dataset.category;
                this.startCategoryTraining(category);
            });
        });
    }

    async startCategoryTraining(category) {
        try {
            this.selectedCategory = category;

            // 問題を取得
            await this.loadCategoryQuestions(category);

            if (this.trainingQuestions.length === 0) {
                this.showToast('この分野の問題が見つかりません', 'error');
                return;
            }

            // カテゴリ選択画面を削除
            const selector = document.getElementById('category-selector');
            if (selector) selector.remove();

            // トレーニング開始
            this.isTrainingActive = true;
            this.startTime = Date.now();

            // トレーニングUIを作成
            this.initializeTrainingUI();

            // 最初の問題を表示
            this.displayQuestion(0);

            this.showToast(`${category}の学習を開始しました (${this.trainingQuestions.length}問)`, 'success');

        } catch (error) {
            console.error('分野別トレーニング開始エラー:', error);
            this.showToast('トレーニングの開始に失敗しました', 'error');
        }
    }

    async loadCategoryQuestions(category) {
        const database = window.INTEGRATED_QUIZ_DATABASE || {};
        let questions = [];

        // 統合分野に対応する細分化カテゴリを取得
        const subcategories = this.categoryMapping[category] || [category];

        // 全章から該当する問題を収集
        Object.keys(database).forEach(chapterKey => {
            database[chapterKey].forEach(question => {
                // 元のカテゴリが統合分野に含まれるかチェック
                if (subcategories.includes(question.category)) {
                    questions.push(question);
                }
            });
        });

        // シャッフル
        questions = this.shuffleArray(questions);

        // 最大20問
        this.trainingQuestions = questions.slice(0, 20);

        console.log(`${category}の問題数: ${this.trainingQuestions.length}問 (${subcategories.length}サブカテゴリから収集)`);
    }

    initializeTrainingUI() {
        const quizSection = document.querySelector('.quiz-section');
        const trainingContainer = this.createTrainingContainer();
        quizSection.appendChild(trainingContainer);
    }

    createTrainingContainer() {
        const container = document.createElement('div');
        container.className = 'category-training-container';
        container.id = 'category-training';

        container.innerHTML = `
            <div class="training-header">
                <div class="training-info">
                    <h2><i class="fas fa-filter"></i> ${this.selectedCategory}</h2>
                    <div class="training-status">
                        <span class="training-progress">問題 <span id="current-q">1</span> / <span id="total-q">${this.trainingQuestions.length}</span></span>
                    </div>
                </div>
                <button id="training-quit-btn" class="quit-btn">
                    <i class="fas fa-times"></i> 終了
                </button>
            </div>

            <div class="training-progress-bar">
                <div class="progress-fill" id="training-progress-fill" style="width: ${100 / this.trainingQuestions.length}%"></div>
            </div>

            <div class="training-question-container">
                <div class="training-question-card">
                    <div class="question-header">
                        <span class="question-difficulty" id="question-difficulty"></span>
                    </div>
                    <h3 class="training-question-text" id="training-question-text"></h3>
                    <div class="training-answer-options" id="training-answer-options"></div>
                </div>

                <div class="training-explanation" id="training-explanation" style="display: none;">
                    <div class="explanation-header">
                        <i class="fas fa-lightbulb"></i>
                        <span>解説</span>
                    </div>
                    <div class="explanation-content" id="explanation-content"></div>
                </div>
            </div>

            <div class="training-navigation">
                <button id="training-prev-btn" class="training-btn secondary" disabled>
                    <i class="fas fa-chevron-left"></i> 前の問題
                </button>
                <button id="training-check-btn" class="training-btn primary">
                    <i class="fas fa-check"></i> 回答確認
                </button>
                <button id="training-next-btn" class="training-btn primary" style="display: none;">
                    次の問題 <i class="fas fa-chevron-right"></i>
                </button>
                <button id="training-finish-btn" class="training-btn success" style="display: none;">
                    <i class="fas fa-flag-checkered"></i> 完了
                </button>
            </div>
        `;

        this.addTrainingContainerListeners(container);

        return container;
    }

    addTrainingContainerListeners(container) {
        // 終了ボタン
        container.querySelector('#training-quit-btn').addEventListener('click', () => {
            if (confirm('トレーニングを終了しますか？進捗は保存されません。')) {
                this.backToMenu();
            }
        });

        // 回答確認ボタン
        container.querySelector('#training-check-btn').addEventListener('click', () => {
            this.checkAnswer();
        });

        // 次の問題ボタン
        container.querySelector('#training-next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // 前の問題ボタン
        container.querySelector('#training-prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        // 完了ボタン
        container.querySelector('#training-finish-btn').addEventListener('click', () => {
            this.finishTraining();
        });

        // 選択肢クリック
        container.addEventListener('click', (e) => {
            if (e.target.closest('.training-answer-option') && !e.target.closest('.training-answer-option').classList.contains('disabled')) {
                this.selectAnswer(e.target.closest('.training-answer-option'));
            }
        });
    }

    displayQuestion(index) {
        if (index < 0 || index >= this.trainingQuestions.length) return;

        this.currentQuestionIndex = index;
        const question = this.trainingQuestions[index];

        // 問題情報を更新
        document.getElementById('current-q').textContent = index + 1;
        document.getElementById('total-q').textContent = this.trainingQuestions.length;
        document.getElementById('question-difficulty').textContent = this.getDifficultyText(question.difficulty);
        document.getElementById('training-question-text').textContent = question.text;

        // 選択肢を表示
        this.displayAnswerOptions(question.options, index);

        // 進捗バーを更新
        const progressPercent = ((index + 1) / this.trainingQuestions.length) * 100;
        document.getElementById('training-progress-fill').style.width = `${progressPercent}%`;

        // 解説を非表示
        const explanationDiv = document.getElementById('training-explanation');
        if (explanationDiv) explanationDiv.style.display = 'none';

        // ボタンを更新
        this.updateNavigationButtons();
    }

    displayAnswerOptions(options, questionIndex) {
        const container = document.getElementById('training-answer-options');
        container.innerHTML = '';

        options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'training-answer-option';
            optionElement.dataset.questionIndex = questionIndex;
            optionElement.dataset.optionIndex = optionIndex;

            // 既に回答されている場合は選択状態にする
            if (this.userAnswers[questionIndex] !== undefined) {
                if (this.userAnswers[questionIndex] === optionIndex) {
                    optionElement.classList.add('selected');
                }
                optionElement.classList.add('disabled');

                // 正解・不正解の表示
                const question = this.trainingQuestions[questionIndex];
                if (optionIndex === question.correct) {
                    optionElement.classList.add('correct');
                } else if (this.userAnswers[questionIndex] === optionIndex) {
                    optionElement.classList.add('incorrect');
                }
            }

            optionElement.innerHTML = `
                <div class="option-marker">${String.fromCharCode(65 + optionIndex)}</div>
                <div class="option-text">${option}</div>
            `;

            container.appendChild(optionElement);
        });
    }

    selectAnswer(optionElement) {
        const questionIndex = parseInt(optionElement.dataset.questionIndex);

        // 同じ問題の他の選択肢の選択を解除
        const allOptions = document.querySelectorAll(`[data-question-index="${questionIndex}"]`);
        allOptions.forEach(opt => opt.classList.remove('selected'));

        // 選択した選択肢をマーク
        optionElement.classList.add('selected');
    }

    checkAnswer() {
        const questionIndex = this.currentQuestionIndex;
        const question = this.trainingQuestions[questionIndex];

        // 選択された選択肢を取得
        const selectedOption = document.querySelector(`[data-question-index="${questionIndex}"].selected`);

        if (!selectedOption) {
            this.showToast('選択肢を選んでください', 'warning');
            return;
        }

        const userAnswer = parseInt(selectedOption.dataset.optionIndex);
        const isCorrect = userAnswer === question.correct;

        // 回答を記録
        this.userAnswers[questionIndex] = userAnswer;

        // 全ての選択肢を無効化
        const allOptions = document.querySelectorAll(`[data-question-index="${questionIndex}"]`);
        allOptions.forEach(opt => {
            opt.classList.add('disabled');
            const optIndex = parseInt(opt.dataset.optionIndex);

            if (optIndex === question.correct) {
                opt.classList.add('correct');
            } else if (optIndex === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // 解説を表示
        const explanationDiv = document.getElementById('training-explanation');
        const explanationContent = document.getElementById('explanation-content');
        explanationContent.innerHTML = `
            <div class="result-badge ${isCorrect ? 'correct' : 'incorrect'}">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                ${isCorrect ? '正解' : '不正解'}
            </div>
            <p>${question.explanation || '解説はありません。'}</p>
        `;
        explanationDiv.style.display = 'block';

        // ボタンを更新
        document.getElementById('training-check-btn').style.display = 'none';
        if (this.currentQuestionIndex < this.trainingQuestions.length - 1) {
            document.getElementById('training-next-btn').style.display = 'block';
        } else {
            document.getElementById('training-finish-btn').style.display = 'block';
        }

        console.log(`問題${questionIndex + 1}: ${isCorrect ? '正解' : '不正解'}`);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.trainingQuestions.length - 1) {
            this.displayQuestion(this.currentQuestionIndex + 1);

            // ボタンを更新
            document.getElementById('training-check-btn').style.display = 'block';
            document.getElementById('training-next-btn').style.display = 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.displayQuestion(this.currentQuestionIndex - 1);
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('training-prev-btn');
        const checkBtn = document.getElementById('training-check-btn');
        const nextBtn = document.getElementById('training-next-btn');
        const finishBtn = document.getElementById('training-finish-btn');

        // 前の問題ボタン
        prevBtn.disabled = this.currentQuestionIndex === 0;

        // 既に回答済みの問題の場合
        if (this.userAnswers[this.currentQuestionIndex] !== undefined) {
            checkBtn.style.display = 'none';
            if (this.currentQuestionIndex < this.trainingQuestions.length - 1) {
                nextBtn.style.display = 'block';
                finishBtn.style.display = 'none';
            } else {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'block';
            }

            // 解説を表示
            const explanationDiv = document.getElementById('training-explanation');
            if (explanationDiv) {
                explanationDiv.style.display = 'block';
                const question = this.trainingQuestions[this.currentQuestionIndex];
                const userAnswer = this.userAnswers[this.currentQuestionIndex];
                const isCorrect = userAnswer === question.correct;

                document.getElementById('explanation-content').innerHTML = `
                    <div class="result-badge ${isCorrect ? 'correct' : 'incorrect'}">
                        <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
                        ${isCorrect ? '正解' : '不正解'}
                    </div>
                    <p>${question.explanation || '解説はありません。'}</p>
                `;
            }
        } else {
            checkBtn.style.display = 'block';
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'none';
        }
    }

    finishTraining() {
        this.isTrainingActive = false;

        // 結果を計算
        const results = this.calculateResults();

        // 結果を保存
        this.saveResults(results);

        // 結果画面を表示
        this.displayResults(results);

        this.showToast('トレーニングが完了しました', 'success');
    }

    calculateResults() {
        const totalQuestions = this.trainingQuestions.length;
        const answeredCount = Object.keys(this.userAnswers).length;
        let correctCount = 0;

        this.trainingQuestions.forEach((question, index) => {
            if (this.userAnswers[index] === question.correct) {
                correctCount++;
            }
        });

        const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
        const elapsedTime = Date.now() - this.startTime;

        return {
            category: this.selectedCategory,
            totalQuestions,
            answeredCount,
            correctCount,
            accuracy,
            elapsedTime,
            questionResults: this.trainingQuestions.map((question, index) => ({
                questionId: question.id,
                correct: this.userAnswers[index] === question.correct,
                category: question.category
            }))
        };
    }

    saveResults(results) {
        if (typeof saveEnhancedQuizResult === 'function') {
            saveEnhancedQuizResult('category', results);
        }
    }

    displayResults(results) {
        const trainingContainer = document.getElementById('category-training');

        trainingContainer.innerHTML = `
            <div class="training-results">
                <div class="results-header">
                    <h2><i class="fas fa-trophy"></i> トレーニング完了</h2>
                    <p class="results-category">${results.category}</p>
                </div>

                <div class="results-score">
                    <div class="score-circle ${results.accuracy >= 80 ? 'excellent' : results.accuracy >= 60 ? 'good' : 'ok'}">
                        <span class="score-percentage">${results.accuracy}%</span>
                        <span class="score-label">正答率</span>
                    </div>
                </div>

                <div class="results-stats">
                    <div class="stat-item">
                        <span class="stat-icon"><i class="fas fa-check-circle"></i></span>
                        <span class="stat-label">正解</span>
                        <span class="stat-value">${results.correctCount}問</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon"><i class="fas fa-times-circle"></i></span>
                        <span class="stat-label">不正解</span>
                        <span class="stat-value">${results.answeredCount - results.correctCount}問</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon"><i class="fas fa-clock"></i></span>
                        <span class="stat-label">所要時間</span>
                        <span class="stat-value">${this.formatTime(results.elapsedTime)}</span>
                    </div>
                </div>

                <div class="results-message">
                    ${this.getResultMessage(results.accuracy)}
                </div>

                <div class="results-actions">
                    <button id="training-retry-btn" class="training-btn primary">
                        <i class="fas fa-redo"></i> もう一度
                    </button>
                    <button id="training-back-menu-btn" class="training-btn secondary">
                        <i class="fas fa-home"></i> メニューに戻る
                    </button>
                </div>
            </div>
        `;

        // イベントリスナーを追加
        document.getElementById('training-retry-btn').addEventListener('click', () => {
            this.retryTraining();
        });

        document.getElementById('training-back-menu-btn').addEventListener('click', () => {
            this.backToMenu();
        });
    }

    getResultMessage(accuracy) {
        if (accuracy >= 90) {
            return '<p>素晴らしい！この分野は完璧に理解できています。</p>';
        } else if (accuracy >= 80) {
            return '<p>とても良い成績です。この調子で学習を続けましょう。</p>';
        } else if (accuracy >= 70) {
            return '<p>良好な理解度です。もう少し復習すればさらに向上できます。</p>';
        } else if (accuracy >= 60) {
            return '<p>基本は理解できています。間違えた問題を復習しましょう。</p>';
        } else {
            return '<p>この分野の基礎をもう一度学習することをお勧めします。</p>';
        }
    }

    retryTraining() {
        this.resetTraining();
        this.startCategoryTraining(this.selectedCategory);
    }

    backToMenu() {
        this.resetTraining();

        // トレーニングコンテナを削除
        const trainingContainer = document.getElementById('category-training');
        if (trainingContainer) {
            trainingContainer.remove();
        }

        // カテゴリ選択を削除
        const selector = document.getElementById('category-selector');
        if (selector) {
            selector.remove();
        }

        // クイズモード選択画面を表示
        const quizModes = document.querySelector('.quiz-modes');
        if (quizModes) {
            quizModes.style.display = 'block';
        }

        // 通常のクイズコンテナを非表示に戻す
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) quizContainer.style.display = 'none';
    }

    resetTraining() {
        this.selectedCategory = null;
        this.trainingQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = null;
        this.isTrainingActive = false;
    }

    // ユーティリティ関数
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}分${seconds}秒`;
    }

    getDifficultyText(difficulty) {
        const texts = { 1: '基礎', 2: '標準', 3: '応用' };
        return texts[difficulty] || '';
    }

    showToast(message, type = 'info') {
        if (typeof window.showToast === 'function') {
            window.showToast(message, type);
        } else {
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }
}

// グローバルインスタンス作成
window.categoryTrainingSystem = new CategoryTrainingSystem();

console.log('✅ 分野別トレーニングシステムが初期化されました');
