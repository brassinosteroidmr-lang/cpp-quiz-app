
// === スマート出題アルゴリズム ===

class SmartQuizSelector {
    constructor() {
        this.recentQuestions = JSON.parse(localStorage.getItem('recent_questions') || '[]');
        this.categoryHistory = JSON.parse(localStorage.getItem('category_history') || '{}');
        this.difficultyHistory = JSON.parse(localStorage.getItem('difficulty_history') || '{}');
        this.maxRecentQuestions = 100;  // 最近の問題を記録する上限
    }
    
    // 多様性を考慮した問題選択
    selectDiverseQuestions(allQuestions, count, mode = 'practice') {
        console.log(`Smart selection: ${allQuestions.length}問から${count}問を選択`);
        
        // 最近出題された問題を除外
        const availableQuestions = this.filterRecentQuestions(allQuestions);
        console.log(`Recent除外後: ${availableQuestions.length}問`);
        
        // カテゴリバランスを考慮
        const balancedQuestions = this.balanceCategories(availableQuestions, count);
        console.log(`カテゴリバランス後: ${balancedQuestions.length}問`);
        
        // 難易度分散を考慮
        const finalQuestions = this.balanceDifficulty(balancedQuestions, count);
        console.log(`最終選択: ${finalQuestions.length}問`);
        
        // 出題履歴を更新
        this.updateHistory(finalQuestions);
        
        return finalQuestions;
    }
    
    // 最近出題された問題をフィルタリング
    filterRecentQuestions(questions) {
        const recentIds = new Set(this.recentQuestions);
        const filtered = questions.filter(q => !recentIds.has(q.id));
        
        // フィルタ後の問題が少なすぎる場合は最近の履歴をリセット
        if (filtered.length < questions.length * 0.3) {
            console.log('Recent履歴をリセット（多様性確保のため）');
            this.recentQuestions = this.recentQuestions.slice(-20); // 最新20問のみ保持
            localStorage.setItem('recent_questions', JSON.stringify(this.recentQuestions));
            return questions.filter(q => !new Set(this.recentQuestions).has(q.id));
        }
        
        return filtered;
    }
    
    // カテゴリのバランスを取る
    balanceCategories(questions, targetCount) {
        const categoryGroups = {};
        questions.forEach(q => {
            if (!categoryGroups[q.category]) {
                categoryGroups[q.category] = [];
            }
            categoryGroups[q.category].push(q);
        });
        
        const categories = Object.keys(categoryGroups);
        const questionsPerCategory = Math.ceil(targetCount / categories.length);
        
        let balanced = [];
        
        // 各カテゴリから均等に選択
        categories.forEach(category => {
            const categoryQuestions = this.shuffleArray(categoryGroups[category]);
            const selected = categoryQuestions.slice(0, questionsPerCategory);
            balanced = balanced.concat(selected);
        });
        
        // 目標数に合わせて調整
        return this.shuffleArray(balanced).slice(0, targetCount);
    }
    
    // 難易度のバランスを取る
    balanceDifficulty(questions, targetCount) {
        const difficultyGroups = { 1: [], 2: [], 3: [] };
        questions.forEach(q => {
            difficultyGroups[q.difficulty].push(q);
        });
        
        // 難易度比率: 基礎30%, 標準50%, 応用20%
        const ratios = { 1: 0.3, 2: 0.5, 3: 0.2 };
        let balanced = [];
        
        Object.keys(ratios).forEach(difficulty => {
            const targetForDifficulty = Math.round(targetCount * ratios[difficulty]);
            const available = difficultyGroups[difficulty];
            
            if (available.length > 0) {
                const shuffled = this.shuffleArray(available);
                const selected = shuffled.slice(0, Math.min(targetForDifficulty, available.length));
                balanced = balanced.concat(selected);
            }
        });
        
        // 不足分を他の難易度から補完
        if (balanced.length < targetCount) {
            const remaining = questions.filter(q => !balanced.find(b => b.id === q.id));
            const shuffled = this.shuffleArray(remaining);
            balanced = balanced.concat(shuffled.slice(0, targetCount - balanced.length));
        }
        
        return this.shuffleArray(balanced).slice(0, targetCount);
    }
    
    // 出題履歴を更新
    updateHistory(questions) {
        // 最近の問題IDを記録
        const questionIds = questions.map(q => q.id);
        this.recentQuestions = [...this.recentQuestions, ...questionIds];
        
        // 上限を超えたら古いものを削除
        if (this.recentQuestions.length > this.maxRecentQuestions) {
            this.recentQuestions = this.recentQuestions.slice(-this.maxRecentQuestions);
        }
        
        // カテゴリ履歴を更新
        questions.forEach(q => {
            this.categoryHistory[q.category] = (this.categoryHistory[q.category] || 0) + 1;
        });
        
        // 難易度履歴を更新
        questions.forEach(q => {
            this.difficultyHistory[q.difficulty] = (this.difficultyHistory[q.difficulty] || 0) + 1;
        });
        
        // ローカルストレージに保存
        localStorage.setItem('recent_questions', JSON.stringify(this.recentQuestions));
        localStorage.setItem('category_history', JSON.stringify(this.categoryHistory));
        localStorage.setItem('difficulty_history', JSON.stringify(this.difficultyHistory));
    }
    
    // 配列をシャッフル
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    // 統計情報を取得
    getStats() {
        return {
            recentQuestionsCount: this.recentQuestions.length,
            categoryDistribution: this.categoryHistory,
            difficultyDistribution: this.difficultyHistory,
            totalAnswered: this.recentQuestions.length
        };
    }
    
    // 履歴をリセット
    resetHistory() {
        this.recentQuestions = [];
        this.categoryHistory = {};
        this.difficultyHistory = {};
        
        localStorage.removeItem('recent_questions');
        localStorage.removeItem('category_history');
        localStorage.removeItem('difficulty_history');
        
        console.log('出題履歴をリセットしました');
    }
}

// グローバルインスタンス
window.smartQuizSelector = new SmartQuizSelector();

// 既存の問題取得関数を拡張
const originalGetQuizQuestions = window.getEnhancedQuizQuestions || window.getQuizQuestions;

window.getEnhancedQuizQuestions = function(mode, options = {}) {
    const originalQuestions = originalGetQuizQuestions(mode, options);
    
    // スマート選択を適用
    if (originalQuestions.length > 0) {
        const targetCount = options.questionCount || 
                          (window.ENHANCED_QUIZ_MODES && window.ENHANCED_QUIZ_MODES[mode] ? 
                           window.ENHANCED_QUIZ_MODES[mode].questionCount : 10);
        
        if (targetCount > 0) {
            return window.smartQuizSelector.selectDiverseQuestions(originalQuestions, targetCount, mode);
        }
    }
    
    return originalQuestions;
};

console.log('✅ スマート出題アルゴリズムが有効化されました');
