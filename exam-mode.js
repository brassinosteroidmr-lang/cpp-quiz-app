// ========================================
// 試験対策モード - ExamMode クラス
// ========================================

class ExamMode {
    constructor(app) {
        this.app = app; // 親アプリへの参照
        this.currentChapter = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.examStartTime = null;

        // 学習進捗データ
        this.examProgress = this.loadExamProgress();

        this.setupExamEventListeners();
    }

    // ========================================
    // イベントリスナー設定
    // ========================================
    setupExamEventListeners() {
        // モード選択
        document.getElementById('exam-mode-card').addEventListener('click', () => {
            this.showChapterSelect();
        });

        document.getElementById('story-mode-card').addEventListener('click', () => {
            this.app.showScenarioList();
        });

        // 戻るボタン
        document.getElementById('back-to-mode-from-exam').addEventListener('click', () => {
            this.showModeSelection();
        });

        document.getElementById('back-to-mode-from-scenario').addEventListener('click', () => {
            this.showModeSelection();
        });

        document.getElementById('back-to-chapters').addEventListener('click', () => {
            this.showChapterSelect();
        });

        document.getElementById('back-to-chapters-from-result').addEventListener('click', () => {
            this.showChapterSelect();
        });

        document.getElementById('retry-exam').addEventListener('click', () => {
            this.startExam(this.currentChapter);
        });
    }

    // ========================================
    // 進捗データ管理
    // ========================================
    loadExamProgress() {
        const saved = localStorage.getItem('examProgress');
        if (saved) {
            return JSON.parse(saved);
        }

        // デフォルト
        const progress = {};
        for (let ch in EXAM_QUESTIONS) {
            progress[ch] = {
                attempted: 0,
                correct: 0,
                totalQuestions: EXAM_QUESTIONS[ch].length
            };
        }
        return progress;
    }

    saveExamProgress() {
        localStorage.setItem('examProgress', JSON.stringify(this.examProgress));
    }

    updateChapterProgress(chapterId, correct, total) {
        if (!this.examProgress[chapterId]) {
            this.examProgress[chapterId] = {
                attempted: 0,
                correct: 0,
                totalQuestions: EXAM_QUESTIONS[chapterId].length
            };
        }

        this.examProgress[chapterId].attempted += total;
        this.examProgress[chapterId].correct += correct;
        this.saveExamProgress();
    }

    // ========================================
    // 画面遷移
    // ========================================
    showModeSelection() {
        this.hideAllSections();
        document.getElementById('mode-selection').style.display = 'block';
    }

    showChapterSelect() {
        this.hideAllSections();
        document.getElementById('exam-chapter-select').style.display = 'block';
        this.renderChapterList();
    }

    showQuestionScreen() {
        this.hideAllSections();
        document.getElementById('exam-question-screen').style.display = 'block';
    }

    showResultScreen() {
        this.hideAllSections();
        document.getElementById('exam-result-screen').style.display = 'block';
    }

    hideAllSections() {
        document.getElementById('mode-selection').style.display = 'none';
        document.getElementById('scenario-list').style.display = 'none';
        document.getElementById('scenario-play').style.display = 'none';
        document.getElementById('exam-chapter-select').style.display = 'none';
        document.getElementById('exam-question-screen').style.display = 'none';
        document.getElementById('exam-result-screen').style.display = 'none';
    }

    // ========================================
    // 章選択画面
    // ========================================
    renderChapterList() {
        const container = document.getElementById('chapters-container');
        container.innerHTML = '';

        for (let chId in EXAM_QUESTIONS) {
            const chInfo = CHAPTER_INFO[chId];
            const progress = this.examProgress[chId];
            const questions = EXAM_QUESTIONS[chId];

            if (!chInfo || !questions || questions.length === 0) continue;

            const card = document.createElement('div');
            card.className = 'chapter-card';

            const accuracy = progress.attempted > 0
                ? Math.round((progress.correct / progress.attempted) * 100)
                : 0;

            card.innerHTML = `
                <div class="chapter-number">${chId.toUpperCase()}</div>
                <div class="chapter-title">${chInfo.title}</div>
                <div class="chapter-stats">
                    <span>📚 ${questions.length}問</span>
                    ${progress.attempted > 0 ? `<span>✓ ${progress.attempted}問挑戦</span>` : ''}
                    ${progress.attempted > 0 ? `<span>📊 正答率 ${accuracy}%</span>` : ''}
                </div>
            `;

            card.addEventListener('click', () => {
                this.startExam(chId);
            });

            container.appendChild(card);
        }
    }

    // ========================================
    // 試験開始
    // ========================================
    startExam(chapterId) {
        this.currentChapter = chapterId;
        this.currentQuestions = shuffleQuestions(getQuestionsByChapter(chapterId));
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.examStartTime = Date.now();

        if (this.currentQuestions.length === 0) {
            alert('この章の問題はまだ準備中です');
            return;
        }

        this.showQuestionScreen();
        this.renderQuestion();
    }

    // ========================================
    // 問題表示
    // ========================================
    renderQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const container = document.getElementById('exam-question-content');

        // 進捗更新
        document.getElementById('exam-progress-text').textContent =
            `問題 ${this.currentQuestionIndex + 1} / ${this.currentQuestions.length}`;

        container.innerHTML = '';

        // 問題文を構造化して表示
        const { instruction, mainQuestion } = this.parseQuestion(question.question);

        // 指示文（あれば）
        if (instruction) {
            const instructionDiv = document.createElement('div');
            instructionDiv.className = 'exam-question-instruction';
            instructionDiv.textContent = instruction;
            container.appendChild(instructionDiv);
        }

        // 問題本文
        const questionText = document.createElement('div');
        questionText.className = 'exam-question-text';
        const questionMain = document.createElement('div');
        questionMain.className = 'exam-question-main';
        questionMain.textContent = mainQuestion;
        questionText.appendChild(questionMain);
        container.appendChild(questionText);

        // 選択肢
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'exam-options';

        question.options.forEach((option, index) => {
            // 空の選択肢はスキップ
            if (option.includes('（選択肢なし）')) {
                return;
            }

            const optionBtn = document.createElement('button');
            optionBtn.className = 'exam-option';
            optionBtn.innerHTML = `
                <span class="option-number">${index + 1}</span>
                <span>${option}</span>
            `;

            optionBtn.addEventListener('click', () => {
                this.selectAnswer(index);
            });

            optionsContainer.appendChild(optionBtn);
        });

        container.appendChild(optionsContainer);
    }

    // ========================================
    // 問題文を解析して指示文と本文に分離
    // ========================================
    parseQuestion(questionText) {
        // 「次の〜」で始まる指示文と本文を分離
        const lines = questionText.split('\n');
        let instruction = '';
        let mainQuestion = '';

        // 最初の「次の〜」を指示文とする
        if (lines[0].startsWith('次の')) {
            instruction = lines[0];
            mainQuestion = lines.slice(1).join('\n').trim();
        } else {
            mainQuestion = questionText;
        }

        return { instruction, mainQuestion };
    }

    // ========================================
    // 回答選択
    // ========================================
    selectAnswer(selectedIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;

        // 回答を記録
        this.userAnswers.push({
            questionId: question.id,
            selected: selectedIndex,
            correct: question.correct,
            isCorrect: isCorrect
        });

        // 全ての選択肢を無効化してマーク
        const options = document.querySelectorAll('.exam-option');
        options.forEach((option, index) => {
            option.classList.add('disabled');

            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });

        // 少し待ってから解説モーダルを表示
        setTimeout(() => {
            this.showExplanationModal(question, selectedIndex, isCorrect);
        }, 600);
    }

    // ========================================
    // 解説モーダル表示
    // ========================================
    showExplanationModal(question, selectedIndex, isCorrect) {
        const modal = document.getElementById('explanation-modal');
        const header = document.getElementById('explanation-header');
        const icon = document.getElementById('explanation-icon');
        const title = document.getElementById('explanation-title');
        const answersSection = document.getElementById('explanation-answers');
        const explanationText = document.getElementById('explanation-text');
        const nextBtn = document.getElementById('explanation-next-btn');

        // ヘッダーの設定
        header.className = `explanation-modal-header ${isCorrect ? 'correct' : 'incorrect'}`;
        icon.textContent = isCorrect ? '✓' : '✗';
        title.textContent = isCorrect ? '正解！' : '不正解';

        // 回答情報の設定
        const correctAnswerText = question.options[question.correct];
        const yourAnswerText = question.options[selectedIndex];

        answersSection.innerHTML = `
            ${!isCorrect ? `
                <div style="margin-bottom: var(--spacing-md);">
                    <span class="explanation-answer-label">あなたの回答</span>
                    <div class="explanation-answer-value your-answer">${selectedIndex + 1}. ${yourAnswerText}</div>
                </div>
            ` : ''}
            <div>
                <span class="explanation-answer-label">正解</span>
                <div class="explanation-answer-value correct-answer">${question.correct + 1}. ${correctAnswerText}</div>
            </div>
        `;

        // 解説の設定
        explanationText.textContent = question.explanation;

        // 次へボタンの設定
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            nextBtn.textContent = '次の問題へ →';
            nextBtn.onclick = () => {
                modal.classList.remove('active');
                this.currentQuestionIndex++;
                this.renderQuestion();
            };
        } else {
            nextBtn.textContent = '結果を見る';
            nextBtn.onclick = () => {
                modal.classList.remove('active');
                this.showResults();
            };
        }

        // モーダルを表示
        modal.classList.add('active');

        // モーダル背景クリックで閉じないようにする
        // （明示的に次へボタンを押す必要がある）
    }

    // ========================================
    // 結果表示
    // ========================================
    showResults() {
        const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
        const totalCount = this.userAnswers.length;
        const score = Math.round((correctCount / totalCount) * 100);
        const elapsedTime = Math.floor((Date.now() - this.examStartTime) / 1000);

        // 進捗を更新
        this.updateChapterProgress(this.currentChapter, correctCount, totalCount);

        // プレイヤーデータを更新
        this.app.player.questionsAnswered += totalCount;
        this.app.player.correctAnswers += correctCount;
        this.app.savePlayerData();

        this.showResultScreen();

        const container = document.getElementById('exam-result-content');
        container.innerHTML = `
            <div class="exam-result-score">
                <div class="exam-result-score-value">${score}点</div>
                <div class="exam-result-score-label">${this.getScoreComment(score)}</div>
            </div>

            <div class="exam-result-stats">
                <div class="exam-result-stat">
                    <span class="exam-result-stat-value">${correctCount}</span>
                    <span class="exam-result-stat-label">正解数</span>
                </div>
                <div class="exam-result-stat">
                    <span class="exam-result-stat-value">${totalCount - correctCount}</span>
                    <span class="exam-result-stat-label">不正解数</span>
                </div>
                <div class="exam-result-stat">
                    <span class="exam-result-stat-value">${Math.floor(elapsedTime / 60)}:${(elapsedTime % 60).toString().padStart(2, '0')}</span>
                    <span class="exam-result-stat-label">所要時間</span>
                </div>
            </div>

            <div class="exam-result-details">
                <h4 style="margin-bottom: 1rem; font-size: 1.125rem;">📊 詳細な分析</h4>
                <p style="line-height: 1.8; color: var(--text-secondary);">
                    正答率: ${score}%<br>
                    ${this.getAdvice(score)}
                </p>
            </div>
        `;
    }

    // ========================================
    // スコアコメント
    // ========================================
    getScoreComment(score) {
        if (score >= 90) return '素晴らしい！完璧な理解です！🎉';
        if (score >= 80) return '大変良好です！この調子で！⭐';
        if (score >= 70) return '良好です！もう少し頑張りましょう！✨';
        if (score >= 60) return '合格ラインです。復習して理解を深めましょう。';
        return '復習が必要です。解説をしっかり読み直しましょう。';
    }

    getAdvice(score) {
        if (score >= 80) {
            return '💡 <strong>アドバイス：</strong>この章は十分理解できています。他の章にも挑戦してみましょう！';
        } else if (score >= 60) {
            return '💡 <strong>アドバイス：</strong>基本は理解できていますが、もう一度解説を読み直すとさらに理解が深まります。';
        } else {
            return '💡 <strong>アドバイス：</strong>この章は少し難しかったようです。解説をじっくり読んで、もう一度挑戦してみましょう。間違えた問題を中心に復習することをお勧めします。';
        }
    }
}
