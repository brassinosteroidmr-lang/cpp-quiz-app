// CPP Master - 統合クイズシステム
// 既存データ + 新規データ統合版

// 既存のクイズデータを読み込み
if (typeof require !== 'undefined') {
    const { QUIZ_DATABASE } = require('./quiz-data.js');
    const { ENHANCED_QUIZ_DATABASE } = require('./enhanced-quiz-data.js');
} else {
    // ブラウザ環境での動的読み込み
    console.log('ブラウザ環境で実行中');
}

// 統合されたクイズデータベース
const INTEGRATED_QUIZ_DATABASE = {};

// 既存データと新規データをマージ
function mergeQuizDatabases() {
    // 既存データをコピー
    if (typeof QUIZ_DATABASE !== 'undefined') {
        Object.keys(QUIZ_DATABASE).forEach(key => {
            INTEGRATED_QUIZ_DATABASE[key] = [...QUIZ_DATABASE[key]];
        });
    }
    
    // 新規データを追加
    if (typeof ENHANCED_QUIZ_DATABASE !== 'undefined') {
        Object.keys(ENHANCED_QUIZ_DATABASE).forEach(key => {
            if (INTEGRATED_QUIZ_DATABASE[key]) {
                // 既存の章に問題を追加（重複チェック）
                const existingIds = new Set(INTEGRATED_QUIZ_DATABASE[key].map(q => q.id));
                const newQuestions = ENHANCED_QUIZ_DATABASE[key].filter(q => !existingIds.has(q.id));
                INTEGRATED_QUIZ_DATABASE[key] = [...INTEGRATED_QUIZ_DATABASE[key], ...newQuestions];
            } else {
                // 新しい章を追加
                INTEGRATED_QUIZ_DATABASE[key] = [...ENHANCED_QUIZ_DATABASE[key]];
            }
        });
    }
    
    return INTEGRATED_QUIZ_DATABASE;
}

// 改善されたクイズモード設定
const ENHANCED_QUIZ_MODES = {
    practice: {
        name: '📚 練習問題',
        description: '章ごとの基本問題で学習',
        timeLimit: 300, // 5分
        questionCount: 10,
        randomize: true,
        showExplanation: true,
        allowRetry: true
    },
    review: {
        name: '🔄 復習モード', 
        description: '間違えた問題を重点復習',
        timeLimit: 600, // 10分
        questionCount: -1, // 全問
        randomize: false,
        showExplanation: true,
        allowRetry: true
    },
    exam: {
        name: '📝 模擬試験',
        description: '本番形式の試験対策',
        timeLimit: 1800, // 30分
        questionCount: 50,
        randomize: true,
        showExplanation: false,
        allowRetry: false
    },
    category: {
        name: '📂 分野別トレーニング',
        description: '特定分野を集中的に学習',
        timeLimit: 600, // 10分
        questionCount: 20,
        randomize: true,
        showExplanation: true,
        allowRetry: true
    },
    speedRun: {
        name: '⚡ スピードラン',
        description: '制限時間内にできるだけ多く回答',
        timeLimit: 180, // 3分
        questionCount: -1, // 無制限
        randomize: true,
        showExplanation: false,
        allowRetry: false
    },
    adaptive: {
        name: '🎯 アダプティブ学習',
        description: '間違えた分野を重点的に出題',
        timeLimit: 900, // 15分
        questionCount: 20,
        randomize: false,
        showExplanation: true,
        allowRetry: true
    }
};

// 改善されたカテゴリ定義
const ENHANCED_QUIZ_CATEGORIES = {
    '調達の基本概念': {
        name: '調達の基本概念',
        description: '調達業務の基本的な理解',
        icon: '📋',
        difficulty: 1
    },
    '戦略・マネジメント': {
        name: '戦略・マネジメント',
        description: '戦略的調達の考え方',
        icon: '🎯',
        difficulty: 2
    },
    'サプライチェーン': {
        name: 'サプライチェーン',
        description: 'サプライチェーン管理',
        icon: '🔗',
        difficulty: 2
    },
    '品質管理': {
        name: '品質管理',
        description: '調達における品質保証',
        icon: '✅',
        difficulty: 2
    },
    'リスク管理': {
        name: 'リスク管理',
        description: '調達リスクの特定と対策',
        icon: '⚠️',
        difficulty: 3
    },
    'グローバル調達': {
        name: 'グローバル調達',
        description: '国際調達の課題と対策',
        icon: '🌍',
        difficulty: 3
    },
    '環境・サステナビリティ': {
        name: '環境・サステナビリティ',
        description: '持続可能な調達',
        icon: '🌱',
        difficulty: 2
    },
    'デジタル化': {
        name: 'デジタル化',
        description: '調達のデジタルトランスフォーメーション',
        icon: '💻',
        difficulty: 3
    },
    'コストマネジメント': {
        name: 'コストマネジメント',
        description: 'コスト分析と最適化',
        icon: '💰',
        difficulty: 2
    },
    '法務・契約': {
        name: '法務・契約',
        description: '調達に関する法務知識',
        icon: '⚖️',
        difficulty: 3
    },
    '組織・人材': {
        name: '組織・人材',
        description: '調達組織と人材育成',
        icon: '👥',
        difficulty: 2
    },
    '総合問題': {
        name: '総合問題',
        description: '分野横断的な応用問題',
        icon: '🧩',
        difficulty: 3
    }
};

// 改善された問題取得関数
function getEnhancedQuizQuestions(mode, options = {}) {
    const {
        chapterKey = null,
        difficulty = null,
        category = null,
        excludeAnswered = false,
        userProgress = null
    } = options;
    
    let questions = [];
    const database = mergeQuizDatabases();
    
    // チャプター指定の場合
    if (chapterKey && database[chapterKey]) {
        questions = [...database[chapterKey]];
    }
    // 模擬試験の場合
    else if (mode === 'exam') {
        // 全章から問題を収集（バランス良く）
        Object.keys(database).forEach(key => {
            if (key !== 'exam') {
                // 各章から一定数取得
                const chapterQuestions = database[key].slice(0, 3);
                questions = questions.concat(chapterQuestions);
            }
        });
        // 試験用問題があれば追加
        if (database.exam) {
            questions = questions.concat(database.exam);
        }
    }
    // アダプティブ学習の場合
    else if (mode === 'adaptive' && userProgress) {
        questions = getAdaptiveQuestions(database, userProgress);
    }
    // その他のモード
    else {
        // 全問題から選択
        Object.keys(database).forEach(key => {
            questions = questions.concat(database[key]);
        });
    }
    
    // フィルタリング
    if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
    }
    
    if (category) {
        questions = questions.filter(q => q.category === category);
    }
    
    if (excludeAnswered && userProgress) {
        const answeredIds = new Set(userProgress.answeredQuestions || []);
        questions = questions.filter(q => !answeredIds.has(q.id));
    }
    
    // モード設定に応じて問題数を調整
    const modeConfig = ENHANCED_QUIZ_MODES[mode];
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

// アダプティブ学習用の問題選択
function getAdaptiveQuestions(database, userProgress) {
    const { weakCategories = [], incorrectQuestions = [] } = userProgress;
    let questions = [];
    
    // 弱点カテゴリから重点的に出題
    if (weakCategories.length > 0) {
        Object.keys(database).forEach(key => {
            database[key].forEach(question => {
                if (weakCategories.includes(question.category)) {
                    questions.push({ ...question, priority: 'high' });
                }
            });
        });
    }
    
    // 間違えた問題を復習用に追加
    if (incorrectQuestions.length > 0) {
        Object.keys(database).forEach(key => {
            database[key].forEach(question => {
                if (incorrectQuestions.includes(question.id)) {
                    questions.push({ ...question, priority: 'review' });
                }
            });
        });
    }
    
    // 十分な問題数がない場合は通常問題で補完
    if (questions.length < 20) {
        Object.keys(database).forEach(key => {
            database[key].forEach(question => {
                if (!questions.find(q => q.id === question.id)) {
                    questions.push({ ...question, priority: 'normal' });
                }
            });
        });
    }
    
    // 優先度順でソート
    questions.sort((a, b) => {
        const priorityOrder = { 'review': 0, 'high': 1, 'normal': 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    return questions;
}

// 改善された統計情報取得
function getEnhancedQuizStatistics() {
    const database = mergeQuizDatabases();
    let totalQuestions = 0;
    let chapterCounts = {};
    let difficultyCounts = { 1: 0, 2: 0, 3: 0 };
    let categoryCounts = {};
    
    Object.keys(database).forEach(key => {
        const questions = database[key];
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
        byCategory: categoryCounts,
        avgQuestionsPerChapter: Math.round(totalQuestions / Object.keys(chapterCounts).length)
    };
}

// 改善された結果保存機能
function saveEnhancedQuizResult(mode, result) {
    const results = JSON.parse(localStorage.getItem('cpp_quiz_results') || '[]');
    
    const enhancedResult = {
        ...result,
        mode,
        timestamp: Date.now(),
        deviceInfo: {
            userAgent: navigator.userAgent,
            screen: `${screen.width}x${screen.height}`,
            language: navigator.language
        }
    };
    
    results.push(enhancedResult);
    
    // 最新200件のみ保持
    if (results.length > 200) {
        results.splice(0, results.length - 200);
    }
    
    localStorage.setItem('cpp_quiz_results', JSON.stringify(results));
    
    // ユーザー進捗も更新
    updateUserProgress(enhancedResult);
    
    return enhancedResult;
}

// ユーザー進捗管理
function updateUserProgress(result) {
    const progress = JSON.parse(localStorage.getItem('cpp_user_progress') || '{}');
    
    // 回答した問題を記録
    if (!progress.answeredQuestions) {
        progress.answeredQuestions = [];
    }
    
    if (result.questionResults) {
        result.questionResults.forEach(qResult => {
            if (!progress.answeredQuestions.includes(qResult.questionId)) {
                progress.answeredQuestions.push(qResult.questionId);
            }
            
            // 間違えた問題を記録
            if (!qResult.correct) {
                if (!progress.incorrectQuestions) {
                    progress.incorrectQuestions = [];
                }
                if (!progress.incorrectQuestions.includes(qResult.questionId)) {
                    progress.incorrectQuestions.push(qResult.questionId);
                }
            }
        });
    }
    
    // カテゴリ別の正答率を計算
    updateCategoryStats(progress, result);
    
    localStorage.setItem('cpp_user_progress', JSON.stringify(progress));
}

// カテゴリ別統計の更新
function updateCategoryStats(progress, result) {
    if (!progress.categoryStats) {
        progress.categoryStats = {};
    }
    
    if (result.questionResults) {
        result.questionResults.forEach(qResult => {
            const category = qResult.category;
            if (!progress.categoryStats[category]) {
                progress.categoryStats[category] = {
                    total: 0,
                    correct: 0,
                    accuracy: 0
                };
            }
            
            progress.categoryStats[category].total++;
            if (qResult.correct) {
                progress.categoryStats[category].correct++;
            }
            
            progress.categoryStats[category].accuracy = 
                Math.round((progress.categoryStats[category].correct / progress.categoryStats[category].total) * 100);
        });
    }
    
    // 弱点カテゴリを特定（正答率70%未満）
    progress.weakCategories = Object.keys(progress.categoryStats)
        .filter(category => progress.categoryStats[category].accuracy < 70)
        .sort((a, b) => progress.categoryStats[a].accuracy - progress.categoryStats[b].accuracy);
}

// ユーティリティ関数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// エクスポート（ブラウザ環境用）
if (typeof window !== 'undefined') {
    // データベースをマージして統合
    window.INTEGRATED_QUIZ_DATABASE = mergeQuizDatabases();
    window.ENHANCED_QUIZ_MODES = ENHANCED_QUIZ_MODES;
    window.ENHANCED_QUIZ_CATEGORIES = ENHANCED_QUIZ_CATEGORIES;
    window.getEnhancedQuizQuestions = getEnhancedQuizQuestions;
    window.getEnhancedQuizStatistics = getEnhancedQuizStatistics;
    window.saveEnhancedQuizResult = saveEnhancedQuizResult;
    window.updateUserProgress = updateUserProgress;
    window.mergeQuizDatabases = mergeQuizDatabases;
    
    // 初期化完了のイベントを発火
    window.dispatchEvent(new CustomEvent('quizSystemReady', {
        detail: {
            totalQuestions: Object.values(window.INTEGRATED_QUIZ_DATABASE).reduce((sum, questions) => sum + questions.length, 0),
            categories: Object.keys(ENHANCED_QUIZ_CATEGORIES).length,
            modes: Object.keys(ENHANCED_QUIZ_MODES).length
        }
    }));
}

// モジュール環境用エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        INTEGRATED_QUIZ_DATABASE: mergeQuizDatabases(),
        ENHANCED_QUIZ_MODES,
        ENHANCED_QUIZ_CATEGORIES,
        getEnhancedQuizQuestions,
        getEnhancedQuizStatistics,
        saveEnhancedQuizResult,
        updateUserProgress,
        mergeQuizDatabases
    };
}