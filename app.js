// ========================================
// 調達マスターへの道 - メインアプリケーション
// ========================================

class ProcurementMasterApp {
    constructor() {
        this.questionsData = [];
        this.currentScenario = null;
        this.currentStage = null;
        this.currentScore = 0;
        this.scenarioProgress = {};
        this.player = this.loadPlayerData();
        this.examMode = null; // 試験対策モード

        this.init();
    }

    // ========================================
    // 初期化
    // ========================================
    async init() {
        try {
            console.log('🚀 アプリケーション初期化開始');

            await this.loadQuestionsData();
            console.log('✓ データ読み込み完了');

            this.setupEventListeners();
            console.log('✓ イベントリスナー設定完了');

            this.updateContinueButton();
            console.log('✓ 継続ボタン更新完了');

            // 試験対策モードを初期化
            if (typeof ExamMode !== 'undefined') {
                this.examMode = new ExamMode(this);
                console.log('✓ 試験対策モード初期化完了');
            }

            // ローディング画面を非表示にしてタイトル画面を表示
            setTimeout(() => {
                console.log('✓ タイトル画面を表示します');
                const loadingScreen = document.getElementById('loading-screen');
                const titleScreen = document.getElementById('title-screen');

                if (loadingScreen && titleScreen) {
                    loadingScreen.classList.remove('active');
                    titleScreen.classList.add('active');
                    console.log('✓ 初期化完了！');
                } else {
                    console.error('画面要素が見つかりません');
                }
            }, 500);
        } catch (error) {
            console.error('✗ 初期化エラー:', error);
            // エラーが発生してもローディング画面は消す
            setTimeout(() => {
                document.getElementById('loading-screen').classList.remove('active');
            }, 500);
            alert('アプリケーションの初期化に失敗しました。\n\nエラー: ' + error.message + '\n\nページを再読み込みしてください。');
        }
    }

    // ========================================
    // データ読み込み
    // ========================================
    async loadQuestionsData() {
        try {
            // QUESTIONS_DATAはquestions-data.jsで定義されています
            if (typeof QUESTIONS_DATA !== 'undefined' && Array.isArray(QUESTIONS_DATA)) {
                this.questionsData = QUESTIONS_DATA;
                console.log(`✓ ${this.questionsData.length}問のデータを読み込みました`);
            } else {
                throw new Error('QUESTIONS_DATAが定義されていないか、配列ではありません');
            }
        } catch (error) {
            console.error('✗ 問題データの読み込みエラー:', error);
            alert('問題データの読み込みに失敗しました。ページを再読み込みしてください。\nエラー: ' + error.message);
            this.questionsData = [];
            throw error; // エラーを再スロー
        }
    }

    // ========================================
    // プレイヤーデータ管理
    // ========================================
    loadPlayerData() {
        const savedData = localStorage.getItem('procurementMasterPlayer');
        if (savedData) {
            return JSON.parse(savedData);
        }

        // デフォルトプレイヤーデータ
        return {
            completedScenarios: [],
            totalScore: 0,
            questionsAnswered: 0,
            correctAnswers: 0
        };
    }

    savePlayerData() {
        localStorage.setItem('procurementMasterPlayer', JSON.stringify(this.player));
    }

    resetPlayerData() {
        if (confirm('本当に進捗をリセットしますか？この操作は取り消せません。')) {
            localStorage.removeItem('procurementMasterPlayer');
            localStorage.removeItem('examProgress');
            this.player = this.loadPlayerData();
            if (this.examMode) {
                this.examMode.examProgress = this.examMode.loadExamProgress();
            }
            alert('進捗をリセットしました');
            this.showScreen('title');
        }
    }

    updateContinueButton() {
        const continueBtn = document.getElementById('continue-game');
        if (this.player.completedScenarios.length > 0 || this.player.questionsAnswered > 0) {
            continueBtn.style.display = 'flex';
        } else {
            continueBtn.style.display = 'none';
        }
    }

    // ========================================
    // 画面遷移
    // ========================================
    showScreen(screenId) {
        document.querySelectorAll('.screen:not(.overlay-screen)').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(`${screenId}-screen`).classList.add('active');
    }

    showOverlay(overlayId) {
        document.getElementById(`${overlayId}-screen`).classList.add('active');
    }

    hideOverlay(overlayId) {
        document.getElementById(`${overlayId}-screen`).classList.remove('active');
    }

    // ========================================
    // イベントリスナー設定
    // ========================================
    setupEventListeners() {
        // タイトル画面
        document.getElementById('start-new-game').addEventListener('click', () => {
            this.startGame();
        });

        document.getElementById('continue-game').addEventListener('click', () => {
            this.startGame();
        });

        // ヘッダーボタン
        document.getElementById('menu-btn').addEventListener('click', () => {
            this.showMenu();
        });

        // モーダルクローズ
        document.getElementById('close-menu').addEventListener('click', () => {
            this.hideOverlay('menu');
        });

        document.getElementById('reset-progress').addEventListener('click', () => {
            this.resetPlayerData();
        });

        // シナリオリストに戻る
        document.getElementById('back-to-list').addEventListener('click', () => {
            this.showScenarioList();
        });

        // 結果モーダル
        document.getElementById('close-result').addEventListener('click', () => {
            this.hideOverlay('result');
            this.showScenarioList();
        });

        // オーバーレイクリック（背景クリックで閉じる）
        document.querySelectorAll('.overlay-screen').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                }
            });
        });
    }

    // ========================================
    // ゲーム開始
    // ========================================
    startGame() {
        this.showScreen('main');

        // モード選択画面を表示
        if (this.examMode) {
            this.examMode.showModeSelection();
        } else {
            this.showScenarioList();
        }
    }

    // ========================================
    // シナリオリスト表示
    // ========================================
    showScenarioList() {
        document.getElementById('scenario-list').style.display = 'block';
        document.getElementById('scenario-play').style.display = 'none';

        this.renderScenarioList();
    }

    renderScenarioList() {
        const container = document.getElementById('scenarios-container');
        container.innerHTML = '';

        SCENARIOS.forEach(scenario => {
            const isCompleted = this.player.completedScenarios.includes(scenario.id);

            const card = document.createElement('div');
            card.className = 'scenario-card';

            const stars = '★'.repeat(scenario.difficulty) + '☆'.repeat(5 - scenario.difficulty);

            card.innerHTML = `
                <div class="scenario-card-header">
                    <div class="scenario-difficulty" title="難易度 ${scenario.difficulty}/5">
                        ${stars}
                    </div>
                    ${isCompleted ? '<span style="color: var(--success-color);">✓ 完了</span>' : ''}
                </div>
                <h4 class="scenario-card-title">${scenario.title}</h4>
                <p class="scenario-card-description">${scenario.description}</p>
                <div class="scenario-card-meta">
                    <div class="meta-item">
                        <span>📁</span>
                        <span>${scenario.category}</span>
                    </div>
                    <div class="meta-item">
                        <span>⏱️</span>
                        <span>${scenario.estimatedTime}</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                this.startScenario(scenario.id);
            });

            container.appendChild(card);
        });
    }

    // ========================================
    // シナリオ開始
    // ========================================
    startScenario(scenarioId) {
        this.currentScenario = getScenarioById(scenarioId);
        if (!this.currentScenario) {
            console.error('シナリオが見つかりません:', scenarioId);
            return;
        }

        this.currentScore = 0;
        this.scenarioProgress = {
            stageHistory: [],
            choiceHistory: [],
            questionResults: []
        };

        document.getElementById('scenario-list').style.display = 'none';
        document.getElementById('scenario-play').style.display = 'block';
        document.getElementById('scenario-title').textContent = this.currentScenario.title;

        this.loadStage(this.currentScenario.stages[0].id);
    }

    // ========================================
    // ステージ読み込み
    // ========================================
    loadStage(stageId) {
        this.currentStage = this.currentScenario.stages.find(s => s.id === stageId);
        if (!this.currentStage) {
            console.error('ステージが見つかりません:', stageId);
            return;
        }

        this.scenarioProgress.stageHistory.push(stageId);

        const content = document.getElementById('scenario-content');
        content.innerHTML = '';

        if (this.currentStage.type === 'story') {
            this.renderStoryStage();
        } else if (this.currentStage.type === 'knowledge_test') {
            this.renderKnowledgeTest();
        } else if (this.currentStage.type === 'result') {
            this.renderScenarioResult();
        }
    }

    // ========================================
    // ストーリーステージ描画
    // ========================================
    renderStoryStage() {
        const content = document.getElementById('scenario-content');

        const storyText = document.createElement('div');
        storyText.className = 'story-text';
        storyText.textContent = this.currentStage.text;
        content.appendChild(storyText);

        const choicesContainer = document.createElement('div');
        choicesContainer.className = 'choices-container';

        this.currentStage.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;

            button.addEventListener('click', () => {
                this.handleChoice(choice);
            });

            choicesContainer.appendChild(button);
        });

        content.appendChild(choicesContainer);
    }

    // ========================================
    // 選択肢処理
    // ========================================
    handleChoice(choice) {
        this.currentScore += choice.score;
        this.scenarioProgress.choiceHistory.push({
            choiceId: choice.id,
            score: choice.score
        });

        // 選択肢ボタンを無効化
        document.querySelectorAll('.choice-button').forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        });

        // フィードバック表示
        const feedback = document.createElement('div');
        feedback.className = `feedback-box ${choice.score > 0 ? 'positive' : choice.score < 0 ? 'negative' : ''}`;
        feedback.innerHTML = `
            <div class="feedback-score">スコア: ${choice.score > 0 ? '+' : ''}${choice.score}</div>
            <div class="feedback-text">${choice.feedback}</div>
        `;

        document.getElementById('scenario-content').appendChild(feedback);

        // 関連する問題がある場合は問題を表示
        if (choice.questionIds && choice.questionIds.length > 0) {
            setTimeout(() => {
                this.showQuestions(choice.questionIds, () => {
                    // 問題終了後、次のステージへ
                    if (choice.nextStage) {
                        this.continueToNextStage(choice.nextStage);
                    }
                });
            }, 1500);
        } else {
            // 問題がない場合は次のステージへ
            setTimeout(() => {
                if (choice.nextStage) {
                    this.continueToNextStage(choice.nextStage);
                }
            }, 2000);
        }
    }

    continueToNextStage(nextStageId) {
        const continueBtn = document.createElement('button');
        continueBtn.className = 'btn btn-primary btn-full-width mt-2';
        continueBtn.innerHTML = '<span>続ける →</span>';
        continueBtn.addEventListener('click', () => {
            this.loadStage(nextStageId);
        });

        document.getElementById('scenario-content').appendChild(continueBtn);
    }

    // ========================================
    // 知識テスト表示
    // ========================================
    renderKnowledgeTest() {
        const content = document.getElementById('scenario-content');

        const testText = document.createElement('div');
        testText.className = 'story-text';
        testText.textContent = this.currentStage.text;
        content.appendChild(testText);

        if (this.currentStage.questionIds && this.currentStage.questionIds.length > 0) {
            this.showQuestions(this.currentStage.questionIds, () => {
                // テスト完了後、結果ステージへ
                this.loadStage('stage_final');
            });
        }
    }

    // ========================================
    // 問題表示
    // ========================================
    showQuestions(questionIds, onComplete) {
        let currentQuestionIndex = 0;

        const showNextQuestion = () => {
            if (currentQuestionIndex >= questionIds.length) {
                this.hideOverlay('question');
                if (onComplete) onComplete();
                return;
            }

            const questionId = questionIds[currentQuestionIndex];
            const questionData = this.questionsData.find(q => q.id === questionId);

            if (!questionData) {
                console.error('問題が見つかりません:', questionId);
                currentQuestionIndex++;
                showNextQuestion();
                return;
            }

            this.renderQuestion(questionData, (isCorrect) => {
                this.scenarioProgress.questionResults.push({
                    questionId,
                    correct: isCorrect
                });

                if (isCorrect) {
                    this.currentScore += 5;
                    this.player.correctAnswers++;
                }
                this.player.questionsAnswered++;

                currentQuestionIndex++;
                setTimeout(() => {
                    showNextQuestion();
                }, 2000);
            });
        };

        this.showOverlay('question');
        showNextQuestion();
    }

    renderQuestion(questionData, callback) {
        const content = document.getElementById('question-content');
        content.innerHTML = '';

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = questionData.question;
        content.appendChild(questionText);

        // 選択肢をパース
        const options = questionData.options.split('\n').filter(o => o.trim());
        const correctAnswer = questionData.answer;

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'question-options';

        options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-button';
            optionBtn.textContent = option.trim();

            optionBtn.addEventListener('click', () => {
                // 全てのボタンを無効化
                document.querySelectorAll('.option-button').forEach(btn => {
                    btn.disabled = true;
                });

                // 正解判定
                const isCorrect = correctAnswer.includes(option.split('.')[0]) ||
                                 correctAnswer.includes(option.split('\t')[0]);

                if (isCorrect) {
                    optionBtn.classList.add('correct');
                } else {
                    optionBtn.classList.add('incorrect');
                }

                // 解説表示（もしあれば）
                if (questionData.explanation) {
                    setTimeout(() => {
                        const explanation = document.createElement('div');
                        explanation.className = 'question-explanation';
                        explanation.innerHTML = `<strong>解説:</strong><br>${questionData.explanation}`;
                        content.appendChild(explanation);
                    }, 500);
                }

                callback(isCorrect);
            });

            optionsContainer.appendChild(optionBtn);
        });

        content.appendChild(optionsContainer);
    }

    // ========================================
    // シナリオ結果表示
    // ========================================
    renderScenarioResult() {
        // シナリオを完了リストに追加
        if (!this.player.completedScenarios.includes(this.currentScenario.id)) {
            this.player.completedScenarios.push(this.currentScenario.id);
        }

        this.player.totalScore += this.currentScore;
        this.savePlayerData();

        // 結果モーダルを表示
        this.showOverlay('result');

        const resultContent = document.getElementById('result-content');
        const correctCount = this.scenarioProgress.questionResults.filter(r => r.correct).length;
        const totalQuestions = this.scenarioProgress.questionResults.length;
        const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

        resultContent.innerHTML = `
            <div class="result-stats">
                <div class="result-stat">
                    <span class="result-stat-label">獲得スコア</span>
                    <span class="result-stat-value">${this.currentScore}</span>
                </div>
                ${totalQuestions > 0 ? `
                <div class="result-stat">
                    <span class="result-stat-label">正答率</span>
                    <span class="result-stat-value">${accuracy}%</span>
                </div>
                ` : ''}
            </div>
            <div class="story-text">${this.currentStage.text}</div>
        `;
    }

    // ========================================
    // メニュー表示
    // ========================================
    showMenu() {
        this.showOverlay('menu');
        this.updateLearningStats();
    }

    updateLearningStats() {
        const container = document.getElementById('learning-stats-content');

        // 全体の正答率を計算
        const overallAccuracy = this.player.questionsAnswered > 0
            ? Math.round((this.player.correctAnswers / this.player.questionsAnswered) * 100)
            : 0;

        // 試験対策モードの進捗を計算
        let totalExamQuestions = 0;
        let attemptedExamQuestions = 0;
        if (this.examMode && this.examMode.examProgress) {
            for (let ch in this.examMode.examProgress) {
                totalExamQuestions += this.examMode.examProgress[ch].totalQuestions;
                attemptedExamQuestions += this.examMode.examProgress[ch].attempted;
            }
        }

        container.innerHTML = `
            <div class="stat-card">
                <span class="stat-card-label">解答済み問題</span>
                <span class="stat-card-value">${this.player.questionsAnswered}</span>
            </div>
            <div class="stat-card">
                <span class="stat-card-label">全体正答率</span>
                <span class="stat-card-value">${overallAccuracy}%</span>
            </div>
            <div class="stat-card">
                <span class="stat-card-label">完了シナリオ</span>
                <span class="stat-card-value">${this.player.completedScenarios.length}</span>
            </div>
            <div class="stat-card">
                <span class="stat-card-label">学習進捗</span>
                <span class="stat-card-value">${totalExamQuestions > 0 ? Math.round((attemptedExamQuestions / totalExamQuestions) * 100) : 0}%</span>
            </div>
        `;
    }
}

// ========================================
// アプリケーション起動
// ========================================
let app;

// DOMが完全に読み込まれてから実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM読み込み完了');
        app = new ProcurementMasterApp();
    });
} else {
    console.log('DOMは既に読み込まれています');
    app = new ProcurementMasterApp();
}

// ========================================
// Service Worker登録
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Service Worker登録成功:', registration);
            })
            .catch(error => {
                console.log('Service Worker登録失敗:', error);
            });
    });
}
