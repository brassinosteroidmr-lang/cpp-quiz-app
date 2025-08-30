// CPP Study - 学習アプリ JavaScript

class CPPStudyApp {
    constructor() {
        this.currentTab = 'study';
        this.currentChapter = 'ch1';
        this.currentPageIndex = 0;
        this.quizData = this.loadQuizData();
        this.currentQuiz = null;
        
        this.init();
    }

    init() {
        this.showSplashScreen();
        this.setupEventListeners();
        this.setupPWA();
        this.initializeTextbook();
    }

    // スプラッシュスクリーン表示
    showSplashScreen() {
        setTimeout(() => {
            document.getElementById('splash-screen').classList.remove('active');
        }, 3000);
    }

    // イベントリスナー設定
    setupEventListeners() {
        // ナビゲーションタブ
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const tab = item.dataset.tab;
                this.switchTab(tab);
            });
        });

        // キーボードショートカット
        document.addEventListener('keydown', (e) => {
            // 教科書表示時のみ有効
            if (this.currentTab === 'study') {
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.prevPage();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextPage();
                        break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        if (e.ctrlKey || e.metaKey) {
                            e.preventDefault();
                            const chapterIndex = parseInt(e.key) - 1;
                            const chapterKey = `ch${chapterIndex + 1}`;
                            this.loadChapter(chapterKey, 0);
                        }
                        break;
                    case '?':
                    case 'h':
                        if (e.shiftKey || e.key === 'h') {
                            e.preventDefault();
                            this.showKeyboardShortcuts();
                        }
                        break;
                }
            }
        });

        // 章選択 - DOMContentLoaded後に再設定
        this.setupChapterSelector();

        // 学習ナビゲーションは動的に設定される

        // クイズモード
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => {
                this.startQuiz('practice');
            });
        });

        // クイズ回答（動的に生成されるため、displayCurrentQuestionで設定）

        // ヘルプボタン
        document.getElementById('help-button')?.addEventListener('click', () => {
            this.showKeyboardShortcuts();
        });

    }

    // タブ切り替え
    switchTab(tab) {
        // ナビゲーション更新
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        // コンテンツ更新
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tab}-tab`).classList.add('active');

        this.currentTab = tab;
        this.trackAnalytics('tab_switch', { tab });
    }


    // 教科書初期化
    initializeTextbook() {
        console.log('Initializing textbook...');
        
        // 静的コンテンツをクリア
        const studyContent = document.getElementById('study-content');
        if (studyContent) {
            studyContent.innerHTML = '<p>読み込み中...</p>';
        }
        
        this.populateChapterDropdown();
        this.setupChapterSelector();
        
        // 少し遅延してからロード（DOM更新を確実にするため）
        setTimeout(() => {
            this.loadChapter(this.currentChapter, 0);
        }, 100);
    }

    // 章選択セットアップ
    setupChapterSelector() {
        const chapterSelect = document.getElementById('chapter-select');
        if (chapterSelect) {
            // 既存のイベントリスナーを削除
            chapterSelect.replaceWith(chapterSelect.cloneNode(true));
            const newChapterSelect = document.getElementById('chapter-select');
            
            // 新しいイベントリスナーを追加
            newChapterSelect.addEventListener('change', (e) => {
                this.loadChapter(e.target.value, 0);
                this.updateChapterDropdown(e.target.value);
            });
        }
    }

    // 章選択ドロップダウンを動的に生成
    populateChapterDropdown() {
        console.log('Populating chapter dropdown...');
        const select = document.getElementById('chapter-select');
        console.log('Chapter select element found:', !!select);
        
        if (select && typeof TEXTBOOK_DATA !== 'undefined') {
            select.innerHTML = '';
            console.log('Available chapters:', TEXTBOOK_DATA.chapters.length);
            
            TEXTBOOK_DATA.chapters.forEach(chapter => {
                const option = document.createElement('option');
                option.value = chapter.id;
                option.textContent = chapter.title;
                select.appendChild(option);
                console.log('Added chapter option:', chapter.id, chapter.title);
            });
            
            select.value = this.currentChapter;
            console.log('Set current chapter to:', this.currentChapter);
        } else {
            console.log('Cannot populate dropdown - missing element or data');
        }
    }

    // 章読み込み
    loadChapter(chapterKey, pageIndex = 0) {
        this.currentChapter = chapterKey;
        this.currentPageIndex = pageIndex;
        
        const pageData = this.getPageData(chapterKey, pageIndex);
        
        if (pageData) {
            this.displayPage(pageData, chapterKey, pageIndex);
            this.updateNavigationButtons();
            this.updatePageProgress(chapterKey, pageIndex);
            this.trackAnalytics('chapter_load', { chapter: chapterKey, page: pageIndex });
        }
    }

    // ページ表示
    displayPage(pageData, chapterKey, pageIndex) {
        const studyContent = document.getElementById('study-content');
        if (studyContent) {
            const totalPages = this.getChapterPageCount(chapterKey);
            studyContent.innerHTML = `
                ${this.generateNavigationControls(chapterKey, pageIndex, 'top')}
                <article class="textbook-content">
                    <h3>${pageData.title}</h3>
                    ${pageData.content}
                </article>
                ${this.generateNavigationControls(chapterKey, pageIndex, 'bottom')}
            `;
            
            // ナビゲーションボタンのイベントリスナーを設定
            this.setupNavigationListeners();
        }
    }
    
    // ナビゲーションリスナー設定
    setupNavigationListeners() {
        // 既存のリスナーを削除するため、新しい要素で置き換える必要はなく、直接設定
        const prevBtns = document.querySelectorAll('.nav-btn.prev');
        const nextBtns = document.querySelectorAll('.nav-btn.next');
        
        prevBtns.forEach(btn => {
            // 複数のイベントリスナー登録を防ぐため、一度削除してから追加
            btn.removeEventListener('click', this.prevPageHandler);
            this.prevPageHandler = () => {
                if (!btn.disabled) {
                    this.prevPage();
                }
            };
            btn.addEventListener('click', this.prevPageHandler);
        });
        
        nextBtns.forEach(btn => {
            btn.removeEventListener('click', this.nextPageHandler);
            this.nextPageHandler = () => {
                if (!btn.disabled) {
                    this.nextPage();
                }
            };
            btn.addEventListener('click', this.nextPageHandler);
        });
    }

    // ナビゲーションコントロール生成
    generateNavigationControls(chapterKey, pageIndex, position = 'bottom') {
        const totalPages = this.getChapterPageCount(chapterKey);
        const hasPrev = pageIndex > 0;
        const hasNext = pageIndex < totalPages - 1;
        
        // 章の情報を取得
        const chapter = this.getChapterData(chapterKey);
        const chapterTitle = chapter ? chapter.title : '';
        
        return `
            <div class="study-navigation ${position}">
                <div class="navigation-info">
                    <div class="chapter-info">
                        <span class="chapter-title">${chapterTitle}</span>
                    </div>
                    <div class="page-progress">
                        <span class="page-indicator">${pageIndex + 1} / ${totalPages}</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((pageIndex + 1) / totalPages) * 100}%"></div>
                        </div>
                    </div>
                </div>
                <div class="navigation-buttons">
                    <button class="nav-btn prev" ${!hasPrev ? 'disabled' : ''} title="前のページ">
                        <i class="fas fa-chevron-left"></i>
                        <span class="btn-text">前へ</span>
                    </button>
                    <button class="nav-btn next" ${!hasNext ? 'disabled' : ''} title="次のページ">
                        <span class="btn-text">次へ</span>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ナビゲーションボタンの状態更新
    updateNavigationButtons() {
        const totalPages = this.getChapterPageCount(this.currentChapter);
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');
        const pageIndicator = document.querySelector('.page-indicator');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentPageIndex === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentPageIndex >= totalPages - 1;
        }
        
        if (pageIndicator) {
            pageIndicator.textContent = `${this.currentPageIndex + 1} / ${totalPages}`;
        }
    }

    // クイズ開始
    startQuiz(mode, chapterKey = null, difficulty = null) {
        const quizContainer = document.getElementById('quiz-container');
        const modesContainer = document.querySelector('.quiz-modes');

        if (quizContainer && modesContainer) {
            modesContainer.style.display = 'none';
            quizContainer.style.display = 'block';

            // クイズ設定の取得
            const modeConfig = (typeof QUIZ_MODES !== 'undefined') ? QUIZ_MODES[mode] : null;
            const timeLimit = modeConfig ? modeConfig.timeLimit : (mode === 'battle' ? 60 : 300);

            this.currentQuiz = {
                mode,
                chapterKey,
                difficulty,
                questions: this.getQuizQuestions(mode, chapterKey, difficulty),
                currentQuestion: 0,
                score: 0,
                correctAnswers: [],
                incorrectAnswers: [],
                timeRemaining: timeLimit,
                startTime: Date.now(),
                hasAnswered: false
            };

            // 問題がない場合のチェック
            if (this.currentQuiz.questions.length === 0) {
                this.showToast('この条件に該当する問題がありません', 'warning');
                this.endQuiz();
                return;
            }

            this.displayCurrentQuestion();
            this.startQuizTimer();
            this.trackAnalytics('quiz_start', { mode, chapterKey, difficulty, questionCount: this.currentQuiz.questions.length });
        }
    }

    // 現在の問題表示
    displayCurrentQuestion() {
        if (!this.currentQuiz) return;

        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        const questionText = document.querySelector('.question-text');
        const answerOptions = document.querySelector('.answer-options');

        // 問題文表示
        if (questionText) {
            questionText.innerHTML = `
                <div class="question-meta">
                    <span class="question-category">${question.category || 'CPP問題'}</span>
                    <span class="question-difficulty">難易度: ${['', '基礎', '標準', '応用'][question.difficulty] || '標準'}</span>
                </div>
                ${question.text}
            `;
        }

        // 回答選択肢を動的に生成
        if (answerOptions && question.options) {
            answerOptions.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'option-btn';
                optionBtn.innerHTML = `
                    <span class="option-label">${String.fromCharCode(65 + index)}</span>
                    <span class="option-text">${option}</span>
                `;
                
                // クリックイベント追加
                optionBtn.addEventListener('click', () => {
                    // 重複クリック防止
                    if (optionBtn.classList.contains('selected') || 
                        optionBtn.classList.contains('correct') || 
                        optionBtn.classList.contains('incorrect')) {
                        return;
                    }
                    this.selectAnswer(index);
                });

                answerOptions.appendChild(optionBtn);
            });
        }

        // 進捗更新
        const progressFill = document.querySelector('.quiz-progress .progress-fill');
        const questionCounter = document.querySelector('.question-counter');

        if (progressFill) {
            const progress = ((this.currentQuiz.currentQuestion + 1) / this.currentQuiz.questions.length) * 100;
            progressFill.style.width = `${progress}%`;
        }

        if (questionCounter) {
            questionCounter.textContent = `問題 ${this.currentQuiz.currentQuestion + 1} / ${this.currentQuiz.questions.length}`;
        }

        // 問題開始時刻を記録
        this.currentQuiz.questionStartTime = Date.now();
        
        // 回答済みフラグをリセット
        this.currentQuiz.hasAnswered = false;
    }

    // 回答選択
    selectAnswer(answerIndex) {
        if (!this.currentQuiz) return;

        // 既に回答済みかチェック
        if (this.currentQuiz.hasAnswered) return;
        
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        const isCorrect = answerIndex == question.correct;
        
        // 回答済みフラグを設定
        this.currentQuiz.hasAnswered = true;
        
        // 全てのオプションボタンを無効化
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.style.cursor = 'default';
        });
        
        // 回答を記録
        const answerRecord = {
            questionId: question.id,
            userAnswer: answerIndex,
            correctAnswer: question.correct,
            isCorrect,
            timeSpent: Date.now() - (this.currentQuiz.questionStartTime || this.currentQuiz.startTime)
        };

        if (isCorrect) {
            this.currentQuiz.score++;
            this.currentQuiz.correctAnswers.push(answerRecord);
        } else {
            this.currentQuiz.incorrectAnswers.push(answerRecord);
        }

        // 回答フィードバック表示
        this.showAnswerFeedback(question, answerIndex, isCorrect);
    }

    // 回答フィードバック表示
    showAnswerFeedback(question, userAnswer, isCorrect) {
        // 選択したオプションをハイライト
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            btn.classList.remove('correct', 'incorrect', 'selected');
            
            if (index === question.correct) {
                btn.classList.add('correct');
            }
            if (index === userAnswer && !isCorrect) {
                btn.classList.add('incorrect', 'selected');
            }
            if (index === userAnswer && isCorrect) {
                btn.classList.add('selected');
            }
        });

        // フィードバックメッセージ
        const message = isCorrect ? '正解！' : '不正解';
        this.showToast(message, isCorrect ? 'success' : 'error');

        // 解説表示（自動進行なし）
        if (question.explanation) {
            setTimeout(() => {
                this.showQuestionExplanation(question.explanation, isCorrect);
            }, 1000);
        } else {
            // 解説がない場合は次へボタンを表示
            setTimeout(() => {
                this.showNextButton();
            }, 1500);
        }
    }

    // 問題解説表示
    showQuestionExplanation(explanation, wasCorrect) {
        const isLastQuestion = this.currentQuiz.currentQuestion >= this.currentQuiz.questions.length - 1;
        const buttonText = isLastQuestion ? '結果を見る' : '次の問題へ';
        const buttonIcon = isLastQuestion ? 'fas fa-flag-checkered' : 'fas fa-arrow-right';
        
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'question-explanation';
        explanationDiv.innerHTML = `
            <div class="explanation-content">
                <h4><i class="fas fa-lightbulb"></i> 解説</h4>
                <p>${explanation}</p>
                <button class="explanation-next-btn">
                    <i class="${buttonIcon}"></i>
                    ${buttonText}
                </button>
            </div>
        `;

        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.appendChild(explanationDiv);
            
            // イベントリスナーを設定
            const nextBtn = explanationDiv.querySelector('.explanation-next-btn');
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
    }

    // 次へボタンのみ表示（解説がない場合）
    showNextButton() {
        const isLastQuestion = this.currentQuiz.currentQuestion >= this.currentQuiz.questions.length - 1;
        const buttonText = isLastQuestion ? '結果を見る' : '次の問題へ';
        const buttonIcon = isLastQuestion ? 'fas fa-flag-checkered' : 'fas fa-arrow-right';
        
        const nextButtonDiv = document.createElement('div');
        nextButtonDiv.className = 'next-button-container';
        nextButtonDiv.innerHTML = `
            <button class="explanation-next-btn">
                <i class="${buttonIcon}"></i>
                ${buttonText}
            </button>
        `;

        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.appendChild(nextButtonDiv);
            
            // イベントリスナーを設定
            const nextBtn = nextButtonDiv.querySelector('.explanation-next-btn');
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
    }

    // 次の問題へ進む
    nextQuestion() {
        // 解説や次へボタンを削除
        const explanation = document.querySelector('.question-explanation');
        if (explanation) {
            explanation.remove();
        }
        
        const nextButtonContainer = document.querySelector('.next-button-container');
        if (nextButtonContainer) {
            nextButtonContainer.remove();
        }

        // 選択状態をリセット
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('correct', 'incorrect', 'selected');
            btn.style.pointerEvents = 'auto';
            btn.style.cursor = 'pointer';
        });

        // 回答済みフラグをリセット
        this.currentQuiz.hasAnswered = false;

        this.currentQuiz.currentQuestion++;
        this.currentQuiz.questionStartTime = Date.now();
        
        if (this.currentQuiz.currentQuestion < this.currentQuiz.questions.length) {
            this.displayCurrentQuestion();
        } else {
            this.showQuizResults();
        }
    }

    // クイズ結果表示
    showQuizResults() {
        const score = this.currentQuiz.score;
        const total = this.currentQuiz.questions.length;
        const accuracy = Math.round((score / total) * 100);
        const timeSpent = Math.round((Date.now() - this.currentQuiz.startTime) / 1000);

        let message = '';
        let expBonus = 0;
        let grade = '';

        if (accuracy >= 90) {
            message = '素晴らしい！完璧な理解です！';
            grade = 'S';
            expBonus = 50;
        } else if (accuracy >= 80) {
            message = 'とても良い成績です！';
            grade = 'A';
            expBonus = 40;
        } else if (accuracy >= 70) {
            message = 'よくできました！';
            grade = 'B';
            expBonus = 30;
        } else if (accuracy >= 60) {
            message = '合格ライン達成！';
            grade = 'C';
            expBonus = 20;
        } else if (accuracy >= 50) {
            message = 'もう少し頑張りましょう！';
            grade = 'D';
            expBonus = 10;
        } else {
            message = '復習が必要です。';
            grade = 'F';
            expBonus = 5;
        }

            this.showDetailedQuizResults(score, total, accuracy, timeSpent, grade, message);

        this.trackAnalytics('quiz_completed', {
            mode: this.currentQuiz.mode,
            chapter: this.currentQuiz.chapterKey,
            score,
            total,
            accuracy,
            time_spent: timeSpent,
            grade,
            exp_bonus: expBonus
        });
    }

    // 詳細なクイズ結果表示
    showDetailedQuizResults(score, total, accuracy, timeSpent, grade, message) {
        // クイズコンテナを隠して結果を表示
        const quizContainer = document.getElementById('quiz-container');
        if (quizContainer) {
            quizContainer.style.display = 'none';
        }
        
        const quizSection = document.querySelector('.quiz-section');
        if (quizSection) {
            const resultsDiv = document.createElement('div');
            resultsDiv.className = 'quiz-results';
            resultsDiv.innerHTML = `
                <div class="quiz-results-content">
                    <div class="results-header">
                        <div class="grade-display grade-${grade.toLowerCase()}">
                            ${grade}
                        </div>
                        <h3>${message}</h3>
                    </div>
                    
                    <div class="results-stats">
                        <div class="stat-item">
                            <div class="stat-value">${score}/${total}</div>
                            <div class="stat-label">正解数</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${accuracy}%</div>
                            <div class="stat-label">正解率</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}</div>
                            <div class="stat-label">所要時間</div>
                        </div>
                    </div>

                    <div class="results-actions">
                        <button class="result-btn primary">
                            <i class="fas fa-arrow-left"></i>
                            クイズに戻る
                        </button>
                        <button class="result-btn secondary">
                            <i class="fas fa-play"></i>
                            もう一度挑戦
                        </button>
                    </div>
                </div>
            `;

            quizSection.appendChild(resultsDiv);
            
            // イベントリスナーを設定
            this.setupResultsListeners(resultsDiv);
        }
    }
    
    // 結果画面のイベントリスナーを設定
    setupResultsListeners(resultsDiv) {
        const backBtn = resultsDiv.querySelector('.result-btn.primary');
        const retryBtn = resultsDiv.querySelector('.result-btn.secondary');
        
        backBtn.addEventListener('click', () => this.closeQuizResults());
        retryBtn.addEventListener('click', () => this.retryQuiz());
    }

    // クイズ結果を閉じる
    closeQuizResults() {
        const resultsDiv = document.querySelector('.quiz-results');
        if (resultsDiv) {
            resultsDiv.remove();
        }
        this.endQuiz();
    }


    // クイズ再挑戦
    retryQuiz() {
        this.closeQuizResults();
        setTimeout(() => {
            this.startQuiz('practice');
        }, 300);
    }

    // クイズ終了
    endQuiz() {
        document.getElementById('quiz-container').style.display = 'none';
        document.querySelector('.quiz-modes').style.display = 'block';
        this.currentQuiz = null;
    }



    // 章開く
    openChapter(card, chapterKey = null) {
        this.switchTab('study');
        
        // chapterKeyが提供されていない場合は古い方法で取得
        if (!chapterKey) {
            const chapterIndex = Array.from(card.parentNode.children).indexOf(card);
            chapterKey = `ch${chapterIndex + 1}`;
        }
        
        this.loadChapter(chapterKey);
    }


    // トースト通知表示
    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = `toast ${type}`;
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // 効果音再生
    playSound(type) {
        // Web Audio API実装予定
        console.log(`Playing sound: ${type}`);
    }

    // PWA設定
    setupPWA() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }

        // インストールプロンプト
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });
    }

    // インストールボタン表示
    showInstallButton() {
        // インストールプロンプトが利用可能な場合
        if (this.deferredPrompt) {
            // インストールバナーを作成
            const installBanner = document.createElement('div');
            installBanner.id = 'install-banner';
            installBanner.className = 'install-banner';
            installBanner.innerHTML = `
                <div class="install-content">
                    <div class="install-icon">
                        <i class="fas fa-download"></i>
                    </div>
                    <div class="install-text">
                        <h3>CPP Master をインストール</h3>
                        <p>オフラインでも学習できます</p>
                    </div>
                    <div class="install-actions">
                        <button id="install-btn" class="install-btn primary">
                            <i class="fas fa-plus"></i>
                            インストール
                        </button>
                        <button id="dismiss-install" class="install-btn secondary">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;

            // ページに追加
            document.body.appendChild(installBanner);

            // インストールボタンのイベントリスナー
            document.getElementById('install-btn').addEventListener('click', async () => {
                if (this.deferredPrompt) {
                    this.deferredPrompt.prompt();
                    const { outcome } = await this.deferredPrompt.userChoice;
                    
                    if (outcome === 'accepted') {
                        this.showToast('アプリをインストールしました！', 'success');
                    } else {
                        this.showToast('インストールをキャンセルしました', 'info');
                    }
                    
                    this.deferredPrompt = null;
                    installBanner.remove();
                }
            });

            // 閉じるボタンのイベントリスナー
            document.getElementById('dismiss-install').addEventListener('click', () => {
                installBanner.remove();
                // 24時間後まで表示しない
                localStorage.setItem('install_dismissed', Date.now());
            });

            // 自動で5秒後に表示
            setTimeout(() => {
                installBanner.classList.add('show');
            }, 5000);

            console.log('✓ PWAインストールプロンプトを準備しました');
        }
    }


    loadQuizData() {
        // 新しいクイズデータベースを使用
        if (typeof QUIZ_DATABASE !== 'undefined') {
            return QUIZ_DATABASE;
        }
        
        // フォールバック用基本データ
        return {
            ch1: [
                {
                    id: 'ch1_q1',
                    category: '調達の基本概念',
                    difficulty: 1,
                    text: '調達業務を「ソーシング」と「パーチェシング」に分類した場合、「サプライヤーの評価・選定」はどちらに分類されるか。',
                    options: ['ソーシング', 'パーチェシング', 'どちらにも該当しない', 'どちらにも該当する'],
                    correct: 0,
                    explanation: 'ソーシングは調達品の決定やサプライヤーの評価・選定などの戦略的業務を指します。'
                }
            ]
        };
    }

    // データ取得関数
    getChapterData(chapterKey) {
        console.log('getChapterData called with:', chapterKey);
        console.log('TEXTBOOK_DATA available:', typeof TEXTBOOK_DATA !== 'undefined');
        
        if (typeof TEXTBOOK_DATA !== 'undefined') {
            const chapter = TEXTBOOK_DATA.chapters.find(chapter => chapter.id === chapterKey);
            console.log('Found chapter:', chapter ? chapter.title : 'Not found');
            return chapter;
        }
        console.log('TEXTBOOK_DATA is not available');
        return null;
    }

    getPageData(chapterKey, pageIndex) {
        const chapter = this.getChapterData(chapterKey);
        if (chapter && chapter.pages && chapter.pages[pageIndex]) {
            return chapter.pages[pageIndex];
        }
        return null;
    }

    getChapterPageCount(chapterKey) {
        const chapter = this.getChapterData(chapterKey);
        return chapter ? chapter.pages.length : 0;
    }

    getQuizQuestions(mode, chapterKey = null, difficulty = null) {
        // 新しいクイズデータベース関数を使用
        if (typeof getQuizQuestions === 'function') {
            return getQuizQuestions(mode, chapterKey, difficulty);
        }
        
        // フォールバック
        let questions = [];
        if (chapterKey && this.quizData[chapterKey]) {
            questions = [...this.quizData[chapterKey]];
        } else {
            // 全問題から選択
            Object.keys(this.quizData).forEach(key => {
                questions = questions.concat(this.quizData[key] || []);
            });
        }
        
        // 問題数制限
        const limits = { practice: 10, review: -1, exam: 50, battle: 5 };
        const limit = limits[mode] || 10;
        
        if (limit > 0) {
            questions = questions.slice(0, limit);
        }
        
        return questions;
    }


    // アナリティクス追跡
    trackAnalytics(event, parameters = {}) {
        // Google Analytics 4 または他の分析ツール連携
        console.log('Analytics:', event, parameters);
        
        // 仮想的な実装
        if (typeof gtag !== 'undefined') {
            gtag('event', event, parameters);
        }
    }

    // ページ遷移（学習画面）
    nextPage() {
        console.log('nextPage called', { currentChapter: this.currentChapter, currentPageIndex: this.currentPageIndex });
        const totalPages = this.getChapterPageCount(this.currentChapter);
        console.log('totalPages:', totalPages);
        
        if (this.currentPageIndex < totalPages - 1) {
            this.currentPageIndex++;
            this.loadChapter(this.currentChapter, this.currentPageIndex);
            this.showToast('次のページに進みました', 'info');
        } else {
            this.showToast('最後のページです', 'warning');
        }
    }

    prevPage() {
        console.log('prevPage called', { currentChapter: this.currentChapter, currentPageIndex: this.currentPageIndex });
        
        if (this.currentPageIndex > 0) {
            this.currentPageIndex--;
            this.loadChapter(this.currentChapter, this.currentPageIndex);
            this.showToast('前のページに戻りました', 'info');
        } else {
            this.showToast('最初のページです', 'warning');
        }
    }

    // 章ドロップダウンの選択状態を更新
    updateChapterDropdown(chapterKey) {
        const select = document.getElementById('chapter-select');
        if (select) {
            select.value = chapterKey;
        }
    }

    // キーボードショートカット表示
    showKeyboardShortcuts() {
        const modal = document.createElement('div');
        modal.className = 'shortcuts-modal';
        modal.innerHTML = `
            <div class="shortcuts-content">
                <div class="shortcuts-header">
                    <h3><i class="fas fa-keyboard"></i> キーボードショートカット</h3>
                    <button class="close-shortcuts" title="閉じる">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="shortcuts-list">
                    <div class="shortcut-group">
                        <h4>ページ操作</h4>
                        <div class="shortcut-item">
                            <kbd>←</kbd>
                            <span>前のページ</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>→</kbd>
                            <span>次のページ</span>
                        </div>
                    </div>
                    <div class="shortcut-group">
                        <h4>章選択</h4>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>1-9</kbd>
                            <span>第1章～第9章に移動</span>
                        </div>
                    </div>
                    <div class="shortcut-group">
                        <h4>ヘルプ</h4>
                        <div class="shortcut-item">
                            <kbd>H</kbd> または <kbd>?</kbd>
                            <span>このヘルプを表示</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shortcuts-backdrop"></div>
        `;
        
        document.body.appendChild(modal);
        
        // 閉じるボタンとバックドロップのイベントリスナー
        const closeBtn = modal.querySelector('.close-shortcuts');
        const backdrop = modal.querySelector('.shortcuts-backdrop');
        
        const closeModal = () => {
            modal.remove();
        };
        
        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
        
        // ESCキーで閉じる
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
        
        // フェードイン
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

// アプリケーション初期化（複数の方法で試行）
function initializeApp() {
    console.log('DOM Content Loaded');
    console.log('TEXTBOOK_DATA available:', typeof TEXTBOOK_DATA !== 'undefined');
    
    // データが読み込まれるまで待機
    let waitCount = 0;
    function waitForData() {
        waitCount++;
        console.log(`Waiting for TEXTBOOK_DATA... (attempt ${waitCount})`);
        console.log('Available scripts:', Object.keys(window).filter(key => key.includes('TEXTBOOK') || key.includes('DATA')));
        
        if (typeof TEXTBOOK_DATA !== 'undefined') {
            console.log('TEXTBOOK_DATA found!');
            console.log('Chapters available:', TEXTBOOK_DATA.chapters.length);
            try {
                const app = new CPPStudyApp();
                
                // グローバルオブジェクトとして設定（デバッグ用）
                window.cppApp = app;
                
                console.log('CPP App initialized successfully');
            } catch (error) {
                console.error('Failed to initialize CPP App:', error);
                console.error('Error stack:', error.stack);
            }
        } else {
            if (waitCount < 50) { // 5秒でタイムアウト
                setTimeout(waitForData, 100);
            } else {
                console.error('Timeout: TEXTBOOK_DATA not found after 5 seconds');
                console.error('Available global variables:', Object.keys(window));
            }
        }
    }
    
    // 少し遅延してから初期化開始
    setTimeout(waitForData, 50);
}

// 複数の方法で初期化を試行
document.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('load', () => {
    console.log('Window load event');
    if (!window.cppApp) {
        console.log('App not initialized yet, trying again...');
        setTimeout(initializeApp, 100);
    }
});

// Service Worker登録
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            }, (err) => {
                console.log('SW registration failed: ', err);
            });
    });
}

// オフライン機能
window.addEventListener('online', () => {
    document.body.classList.remove('offline');
});

window.addEventListener('offline', () => {
    document.body.classList.add('offline');
});

