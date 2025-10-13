// 模擬試験モード専用JavaScript
// CPP Master - Mock Exam System

class MockExamSystem {
    constructor() {
        this.examQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = null;
        this.timeLimit = 30 * 60 * 1000; // 30分をミリ秒で
        this.timer = null;
        this.isExamActive = false;
        this.examResults = null;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // 模擬試験開始ボタン
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-mode="exam"] .mode-btn')) {
                this.startExam();
            }
        });
        
        // 問題回答ボタン
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('exam-answer-option')) {
                this.selectAnswer(e.target);
            }
        });
        
        // ナビゲーションボタン
        document.addEventListener('click', (e) => {
            if (e.target.id === 'exam-next-btn') {
                this.nextQuestion();
            } else if (e.target.id === 'exam-prev-btn') {
                this.previousQuestion();
            } else if (e.target.id === 'exam-submit-btn') {
                this.submitExam();
            } else if (e.target.id === 'exam-finish-btn') {
                this.finishExam();
            }
        });
        
        // ページ離脱警告
        window.addEventListener('beforeunload', (e) => {
            if (this.isExamActive) {
                e.preventDefault();
                e.returnValue = '模擬試験が進行中です。ページを離れると試験が終了します。';
                return e.returnValue;
            }
        });
    }
    
    async startExam() {
        try {
            // 確認ダイアログ
            const confirmed = confirm(
                '模擬試験を開始します。\n\n' +
                '・制限時間: 30分\n' +
                '・問題数: 50問\n' +
                '・途中保存はできません\n\n' +
                '開始してよろしいですか？'
            );
            
            if (!confirmed) return;
            
            // 問題を取得
            await this.loadExamQuestions();
            
            // UI初期化
            this.initializeExamUI();
            
            // 試験開始
            this.isExamActive = true;
            this.startTime = Date.now();
            this.startTimer();
            
            // 最初の問題を表示
            this.displayQuestion(0);
            
            this.showToast('模擬試験を開始しました', 'success');
            
        } catch (error) {
            console.error('模擬試験開始エラー:', error);
            this.showToast('模擬試験の開始に失敗しました', 'error');
        }
    }
    
    async loadExamQuestions() {
        // 統合されたクイズデータベースから問題を取得
        if (typeof getEnhancedQuizQuestions === 'function') {
            this.examQuestions = getEnhancedQuizQuestions('exam', {
                questionCount: 50,
                excludeAnswered: false
            });
        } else if (typeof INTEGRATED_QUIZ_DATABASE !== 'undefined') {
            // 全章から均等に問題を選択
            let allQuestions = [];
            Object.keys(INTEGRATED_QUIZ_DATABASE).forEach(chapterKey => {
                allQuestions = allQuestions.concat(INTEGRATED_QUIZ_DATABASE[chapterKey]);
            });
            
            // シャッフルして50問選択
            this.examQuestions = this.shuffleArray(allQuestions).slice(0, 50);
        } else {
            throw new Error('クイズデータベースが見つかりません');
        }
        
        if (this.examQuestions.length === 0) {
            throw new Error('試験問題が取得できませんでした');
        }
        
        console.log(`模擬試験問題数: ${this.examQuestions.length}問`);
    }
    
    initializeExamUI() {
        // クイズモード選択画面を非表示
        const quizModes = document.querySelector('.quiz-modes');
        if (quizModes) quizModes.style.display = 'none';

        // 通常のクイズコンテナを非表示
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) quizContainer.style.display = 'none';

        // 模擬試験UI要素を作成
        const examContainer = this.createExamContainer();
        const quizSection = document.querySelector('.quiz-section');
        if (quizSection) {
            quizSection.appendChild(examContainer);
        }
    }
    
    createExamContainer() {
        const container = document.createElement('div');
        container.className = 'exam-container';
        container.innerHTML = `
            <div class="exam-header">
                <div class="exam-info">
                    <h2><i class="fas fa-certificate"></i> CPP模擬試験</h2>
                    <div class="exam-status">
                        <span class="exam-progress">問題 <span id="current-q">1</span> / <span id="total-q">50</span></span>
                        <div class="exam-timer">
                            <i class="fas fa-clock"></i>
                            <span id="timer-display">30:00</span>
                        </div>
                    </div>
                </div>
                <div class="exam-controls">
                    <button id="exam-question-list-btn" class="exam-btn secondary">
                        <i class="fas fa-list"></i> 問題一覧
                    </button>
                </div>
            </div>
            
            <div class="exam-progress-bar">
                <div class="progress-fill" id="exam-progress-fill" style="width: 2%"></div>
            </div>
            
            <div class="exam-question-container">
                <div class="exam-question-card">
                    <div class="question-header">
                        <span class="question-category" id="question-category"></span>
                        <span class="question-difficulty" id="question-difficulty"></span>
                    </div>
                    <h3 class="exam-question-text" id="exam-question-text"></h3>
                    <div class="exam-answer-options" id="exam-answer-options"></div>
                </div>
            </div>
            
            <div class="exam-navigation">
                <button id="exam-prev-btn" class="exam-btn secondary" disabled>
                    <i class="fas fa-chevron-left"></i> 前の問題
                </button>
                <div class="exam-nav-center">
                    <button id="exam-mark-btn" class="exam-btn outline">
                        <i class="fas fa-bookmark"></i> 要確認
                    </button>
                    <button id="exam-clear-btn" class="exam-btn outline">
                        <i class="fas fa-eraser"></i> 回答クリア
                    </button>
                </div>
                <button id="exam-next-btn" class="exam-btn primary">
                    次の問題 <i class="fas fa-chevron-right"></i>
                </button>
                <button id="exam-submit-btn" class="exam-btn danger" style="display: none;">
                    <i class="fas fa-check"></i> 試験完了
                </button>
            </div>
            
            <!-- 問題一覧サイドパネル -->
            <div class="exam-question-list" id="exam-question-list" style="display: none;">
                <div class="question-list-header">
                    <h3><i class="fas fa-list"></i> 問題一覧</h3>
                    <button id="close-question-list" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="question-list-content" id="question-list-content">
                    <!-- 動的に生成 -->
                </div>
                <div class="question-list-summary">
                    <div class="summary-item">
                        <span class="summary-label">回答済み</span>
                        <span class="summary-value" id="answered-count">0</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">未回答</span>
                        <span class="summary-value" id="unanswered-count">50</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">要確認</span>
                        <span class="summary-value" id="marked-count">0</span>
                    </div>
                </div>
            </div>
        `;
        
        // イベントリスナーを追加
        this.addExamContainerListeners(container);
        
        return container;
    }
    
    addExamContainerListeners(container) {
        // 問題一覧の表示/非表示
        container.querySelector('#exam-question-list-btn').addEventListener('click', () => {
            this.toggleQuestionList();
        });
        
        container.querySelector('#close-question-list').addEventListener('click', () => {
            this.toggleQuestionList();
        });
        
        // 要確認マーク
        container.querySelector('#exam-mark-btn').addEventListener('click', () => {
            this.toggleQuestionMark();
        });
        
        // 回答クリア
        container.querySelector('#exam-clear-btn').addEventListener('click', () => {
            this.clearCurrentAnswer();
        });
    }
    
    displayQuestion(index) {
        if (index < 0 || index >= this.examQuestions.length) return;
        
        this.currentQuestionIndex = index;
        const question = this.examQuestions[index];
        
        // 問題情報を更新
        document.getElementById('current-q').textContent = index + 1;
        document.getElementById('total-q').textContent = this.examQuestions.length;
        document.getElementById('question-category').textContent = question.category || '';
        document.getElementById('question-difficulty').textContent = this.getDifficultyText(question.difficulty);
        document.getElementById('exam-question-text').textContent = question.text;
        
        // 選択肢を表示
        this.displayAnswerOptions(question.options, index);
        
        // 進捗バーを更新
        const progressPercent = ((index + 1) / this.examQuestions.length) * 100;
        document.getElementById('exam-progress-fill').style.width = `${progressPercent}%`;
        
        // ナビゲーションボタンを更新
        this.updateNavigationButtons();
        
        // 問題一覧を更新
        this.updateQuestionList();
    }
    
    displayAnswerOptions(options, questionIndex) {
        const container = document.getElementById('exam-answer-options');
        container.innerHTML = '';
        
        options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'exam-answer-option';
            optionElement.dataset.questionIndex = questionIndex;
            optionElement.dataset.optionIndex = optionIndex;
            
            // 既に回答されている場合は選択状態にする
            if (this.userAnswers[questionIndex] === optionIndex) {
                optionElement.classList.add('selected');
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
        const optionIndex = parseInt(optionElement.dataset.optionIndex);
        
        // 同じ問題の他の選択肢の選択を解除
        const allOptions = document.querySelectorAll(`[data-question-index="${questionIndex}"]`);
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        // 選択した選択肢をマーク
        optionElement.classList.add('selected');
        
        // 回答を記録
        this.userAnswers[questionIndex] = optionIndex;
        
        // 統計を更新
        this.updateAnswerStats();
        
        console.log(`問題${questionIndex + 1}の回答: ${optionIndex}`);
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.examQuestions.length - 1) {
            this.displayQuestion(this.currentQuestionIndex + 1);
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.displayQuestion(this.currentQuestionIndex - 1);
        }
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('exam-prev-btn');
        const nextBtn = document.getElementById('exam-next-btn');
        const submitBtn = document.getElementById('exam-submit-btn');
        
        // 前の問題ボタン
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // 次の問題 / 完了ボタン
        if (this.currentQuestionIndex === this.examQuestions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    }
    
    startTimer() {
        const timerDisplay = document.getElementById('timer-display');
        
        this.timer = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const remaining = Math.max(0, this.timeLimit - elapsed);
            
            if (remaining === 0) {
                this.timeUp();
                return;
            }
            
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // 残り5分で警告色に変更
            if (remaining <= 5 * 60 * 1000) {
                timerDisplay.style.color = '#f44336';
                timerDisplay.parentElement.classList.add('timer-warning');
            }
            
        }, 1000);
    }
    
    timeUp() {
        clearInterval(this.timer);
        this.showToast('制限時間が終了しました', 'warning');
        this.submitExam(true); // 自動提出
    }
    
    submitExam(timeUp = false) {
        const unansweredCount = this.examQuestions.length - Object.keys(this.userAnswers).length;
        
        if (!timeUp && unansweredCount > 0) {
            const confirmed = confirm(
                `未回答の問題が${unansweredCount}問あります。\n` +
                '試験を完了してよろしいですか？'
            );
            if (!confirmed) return;
        }
        
        this.finishExam();
    }
    
    finishExam() {
        // タイマー停止
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // 試験終了
        this.isExamActive = false;
        
        // 結果を計算
        this.calculateResults();
        
        // 結果画面を表示
        this.displayResults();
        
        this.showToast('模擬試験が完了しました', 'success');
    }
    
    calculateResults() {
        const totalQuestions = this.examQuestions.length;
        let correctAnswers = 0;
        const categoryStats = {};
        const difficultyStats = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 }, 3: { correct: 0, total: 0 } };
        const elapsedTime = Date.now() - this.startTime;
        
        this.examQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) {
                correctAnswers++;
            }
            
            // カテゴリ別統計
            if (!categoryStats[question.category]) {
                categoryStats[question.category] = { correct: 0, total: 0 };
            }
            categoryStats[question.category].total++;
            if (isCorrect) {
                categoryStats[question.category].correct++;
            }
            
            // 難易度別統計
            difficultyStats[question.difficulty].total++;
            if (isCorrect) {
                difficultyStats[question.difficulty].correct++;
            }
        });
        
        const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
        const grade = this.calculateGrade(accuracy);
        
        this.examResults = {
            totalQuestions,
            correctAnswers,
            accuracy,
            grade,
            elapsedTime,
            categoryStats,
            difficultyStats,
            answerDetails: this.examQuestions.map((question, index) => ({
                question,
                userAnswer: this.userAnswers[index],
                isCorrect: this.userAnswers[index] === question.correct,
                isAnswered: this.userAnswers[index] !== undefined
            })),
            timestamp: new Date().toISOString()
        };
        
        // 結果を保存
        this.saveExamResult();
    }
    
    calculateGrade(accuracy) {
        if (accuracy >= 80) return 'A';
        if (accuracy >= 70) return 'B';
        if (accuracy >= 60) return 'C';
        if (accuracy >= 50) return 'D';
        return 'F';
    }
    
    displayResults() {
        const examContainer = document.querySelector('.exam-container');
        const results = this.examResults;
        
        examContainer.innerHTML = `
            <div class="exam-results">
                <div class="results-header">
                    <div class="results-grade grade-${results.grade.toLowerCase()}">
                        <span class="grade-letter">${results.grade}</span>
                    </div>
                    <div class="results-summary">
                        <h2>模擬試験完了</h2>
                        <div class="score-display">
                            <span class="score">${results.correctAnswers}</span>
                            <span class="total">/ ${results.totalQuestions}</span>
                            <span class="percentage">(${results.accuracy}%)</span>
                        </div>
                        <div class="time-display">
                            所要時間: ${this.formatTime(results.elapsedTime)}
                        </div>
                    </div>
                </div>
                
                <div class="results-content">
                    <div class="results-tabs">
                        <button class="tab-btn active" data-tab="overview">概要</button>
                        <button class="tab-btn" data-tab="category">分野別</button>
                        <button class="tab-btn" data-tab="difficulty">難易度別</button>
                        <button class="tab-btn" data-tab="details">詳細</button>
                    </div>
                    
                    <div class="tab-content active" id="overview-tab">
                        ${this.generateOverviewContent(results)}
                    </div>
                    
                    <div class="tab-content" id="category-tab">
                        ${this.generateCategoryContent(results.categoryStats)}
                    </div>
                    
                    <div class="tab-content" id="difficulty-tab">
                        ${this.generateDifficultyContent(results.difficultyStats)}
                    </div>
                    
                    <div class="tab-content" id="details-tab">
                        ${this.generateDetailsContent(results.answerDetails)}
                    </div>
                </div>
                
                <div class="results-actions">
                    <button id="exam-restart-btn" class="exam-btn primary">
                        <i class="fas fa-redo"></i> もう一度挑戦
                    </button>
                    <button id="exam-review-btn" class="exam-btn secondary">
                        <i class="fas fa-search"></i> 間違いを復習
                    </button>
                    <button id="exam-save-btn" class="exam-btn outline">
                        <i class="fas fa-download"></i> 結果をダウンロード
                    </button>
                    <button id="exam-back-btn" class="exam-btn outline">
                        <i class="fas fa-home"></i> メニューに戻る
                    </button>
                </div>
            </div>
        `;
        
        this.addResultsListeners();
    }
    
    generateOverviewContent(results) {
        return `
            <div class="overview-stats">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                    <div class="stat-info">
                        <div class="stat-value">${results.correctAnswers}</div>
                        <div class="stat-label">正解数</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-times-circle"></i></div>
                    <div class="stat-info">
                        <div class="stat-value">${results.totalQuestions - results.correctAnswers}</div>
                        <div class="stat-label">不正解数</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-percentage"></i></div>
                    <div class="stat-info">
                        <div class="stat-value">${results.accuracy}%</div>
                        <div class="stat-label">正答率</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-clock"></i></div>
                    <div class="stat-info">
                        <div class="stat-value">${this.formatTime(results.elapsedTime)}</div>
                        <div class="stat-label">所要時間</div>
                    </div>
                </div>
            </div>
            
            <div class="performance-analysis">
                <h3>学習アドバイス</h3>
                <div class="advice-content">
                    ${this.generateAdvice(results)}
                </div>
            </div>
        `;
    }
    
    generateCategoryContent(categoryStats) {
        let content = '<div class="category-stats">';
        
        Object.entries(categoryStats).forEach(([category, stats]) => {
            const accuracy = Math.round((stats.correct / stats.total) * 100);
            content += `
                <div class="category-item">
                    <div class="category-header">
                        <span class="category-name">${category}</span>
                        <span class="category-score">${stats.correct}/${stats.total} (${accuracy}%)</span>
                    </div>
                    <div class="category-bar">
                        <div class="category-progress" style="width: ${accuracy}%"></div>
                    </div>
                </div>
            `;
        });
        
        content += '</div>';
        return content;
    }
    
    generateDifficultyContent(difficultyStats) {
        const difficultyNames = { 1: '基礎', 2: '標準', 3: '応用' };
        let content = '<div class="difficulty-stats">';
        
        Object.entries(difficultyStats).forEach(([difficulty, stats]) => {
            if (stats.total === 0) return;
            
            const accuracy = Math.round((stats.correct / stats.total) * 100);
            content += `
                <div class="difficulty-item">
                    <div class="difficulty-header">
                        <span class="difficulty-name">${difficultyNames[difficulty]}</span>
                        <span class="difficulty-score">${stats.correct}/${stats.total} (${accuracy}%)</span>
                    </div>
                    <div class="difficulty-bar">
                        <div class="difficulty-progress" style="width: ${accuracy}%"></div>
                    </div>
                </div>
            `;
        });
        
        content += '</div>';
        return content;
    }
    
    generateDetailsContent(answerDetails) {
        let content = '<div class="answer-details">';
        
        answerDetails.forEach((detail, index) => {
            const statusClass = detail.isAnswered ? 
                (detail.isCorrect ? 'correct' : 'incorrect') : 'unanswered';
            
            content += `
                <div class="detail-item ${statusClass}">
                    <div class="detail-header">
                        <span class="question-number">問題 ${index + 1}</span>
                        <span class="detail-status">
                            ${detail.isAnswered ? 
                                (detail.isCorrect ? '✓ 正解' : '✗ 不正解') : 
                                '- 未回答'}
                        </span>
                    </div>
                    <div class="detail-question">${detail.question.text.substring(0, 100)}...</div>
                    ${detail.isAnswered && !detail.isCorrect ? 
                        `<div class="detail-explanation">
                            <strong>解説:</strong> ${detail.question.explanation}
                        </div>` : ''}
                </div>
            `;
        });
        
        content += '</div>';
        return content;
    }
    
    generateAdvice(results) {
        let advice = [];
        
        if (results.accuracy >= 80) {
            advice.push('素晴らしい成績です！CPPの知識をよく理解されています。');
        } else if (results.accuracy >= 60) {
            advice.push('良い成績です。苦手分野を重点的に学習すればさらに向上できます。');
        } else {
            advice.push('基礎からしっかりと学習を進めることをお勧めします。');
        }
        
        // 弱点分野のアドバイス
        const weakCategories = Object.entries(results.categoryStats)
            .filter(([_, stats]) => (stats.correct / stats.total) < 0.6)
            .map(([category, _]) => category);
        
        if (weakCategories.length > 0) {
            advice.push(`特に「${weakCategories.join('」「')}」の分野を重点的に学習しましょう。`);
        }
        
        return advice.map(text => `<p>${text}</p>`).join('');
    }
    
    addResultsListeners() {
        // タブ切り替え
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
            });
        });
        
        // アクションボタン
        document.getElementById('exam-restart-btn').addEventListener('click', () => {
            this.restartExam();
        });
        
        document.getElementById('exam-back-btn').addEventListener('click', () => {
            this.backToMenu();
        });
        
        if (document.getElementById('exam-save-btn')) {
            document.getElementById('exam-save-btn').addEventListener('click', () => {
                this.downloadResults();
            });
        }
    }
    
    restartExam() {
        this.resetExam();
        this.startExam();
    }
    
    backToMenu() {
        this.resetExam();

        // 試験コンテナを削除
        const examContainer = document.querySelector('.exam-container');
        if (examContainer) {
            examContainer.remove();
        }

        // クイズモード選択画面を表示
        const quizModes = document.querySelector('.quiz-modes');
        if (quizModes) {
            quizModes.style.display = 'block';
        }

        // 通常のクイズコンテナを非表示に戻す（念のため）
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) quizContainer.style.display = 'none';
    }
    
    resetExam() {
        this.examQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = null;
        this.isExamActive = false;
        this.examResults = null;
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    saveExamResult() {
        // 既存の結果保存機能を利用
        if (typeof saveEnhancedQuizResult === 'function') {
            saveEnhancedQuizResult('exam', {
                score: this.examResults.correctAnswers,
                totalQuestions: this.examResults.totalQuestions,
                accuracy: this.examResults.accuracy,
                timeSpent: this.examResults.elapsedTime,
                categoryStats: this.examResults.categoryStats,
                questionResults: this.examResults.answerDetails.map(detail => ({
                    questionId: detail.question.id,
                    correct: detail.isCorrect,
                    category: detail.question.category
                }))
            });
        }
    }
    
    downloadResults() {
        const results = this.examResults;
        const csvContent = this.generateCSVReport(results);
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `cpp_exam_result_${new Date().toISOString().slice(0, 10)}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        this.showToast('結果をダウンロードしました', 'success');
    }
    
    generateCSVReport(results) {
        let csv = 'CPP模擬試験結果\n\n';
        csv += `受験日時,${new Date(results.timestamp).toLocaleString()}\n`;
        csv += `正解数,${results.correctAnswers}\n`;
        csv += `総問題数,${results.totalQuestions}\n`;
        csv += `正答率,${results.accuracy}%\n`;
        csv += `評価,${results.grade}\n`;
        csv += `所要時間,${this.formatTime(results.elapsedTime)}\n\n`;
        
        csv += '分野別成績\n';
        csv += '分野,正解数,総問題数,正答率\n';
        Object.entries(results.categoryStats).forEach(([category, stats]) => {
            const accuracy = Math.round((stats.correct / stats.total) * 100);
            csv += `${category},${stats.correct},${stats.total},${accuracy}%\n`;
        });
        
        return csv;
    }
    
    // ユーティリティメソッド
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
    
    updateAnswerStats() {
        const answeredCount = Object.keys(this.userAnswers).length;
        const unansweredCount = this.examQuestions.length - answeredCount;
        
        const answeredElement = document.getElementById('answered-count');
        const unansweredElement = document.getElementById('unanswered-count');
        
        if (answeredElement) answeredElement.textContent = answeredCount;
        if (unansweredElement) unansweredElement.textContent = unansweredCount;
    }
    
    toggleQuestionList() {
        const questionList = document.getElementById('exam-question-list');
        if (questionList) {
            questionList.style.display = questionList.style.display === 'none' ? 'block' : 'none';
        }
    }
    
    updateQuestionList() {
        const content = document.getElementById('question-list-content');
        if (!content) return;
        
        content.innerHTML = '';
        
        this.examQuestions.forEach((question, index) => {
            const item = document.createElement('div');
            item.className = 'question-list-item';
            
            const isAnswered = this.userAnswers[index] !== undefined;
            const isCurrent = index === this.currentQuestionIndex;
            
            if (isCurrent) item.classList.add('current');
            if (isAnswered) item.classList.add('answered');
            
            item.innerHTML = `
                <span class="question-num">${index + 1}</span>
                <span class="question-status">${isAnswered ? '✓' : '-'}</span>
            `;
            
            item.addEventListener('click', () => {
                this.displayQuestion(index);
                this.toggleQuestionList();
            });
            
            content.appendChild(item);
        });
    }
    
    toggleQuestionMark() {
        // 要確認マーク機能（実装は簡略化）
        const markBtn = document.getElementById('exam-mark-btn');
        markBtn.classList.toggle('marked');
        
        if (markBtn.classList.contains('marked')) {
            markBtn.innerHTML = '<i class="fas fa-bookmark"></i> 確認済み';
        } else {
            markBtn.innerHTML = '<i class="fas fa-bookmark"></i> 要確認';
        }
    }
    
    clearCurrentAnswer() {
        delete this.userAnswers[this.currentQuestionIndex];
        
        // UI更新
        const allOptions = document.querySelectorAll(`[data-question-index="${this.currentQuestionIndex}"]`);
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        this.updateAnswerStats();
        this.updateQuestionList();
    }
    
    showToast(message, type = 'info') {
        // 既存のトースト表示機能を利用
        if (typeof window.showToast === 'function') {
            window.showToast(message, type);
        } else {
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }
}

// グローバルインスタンス作成
window.mockExamSystem = new MockExamSystem();

console.log('✅ 模擬試験システムが初期化されました');