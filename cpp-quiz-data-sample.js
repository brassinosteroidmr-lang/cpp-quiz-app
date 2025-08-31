// CPP Certification Quiz Data
// Generated from .doc files
// Sample data structure - full parsing would extract all questions

const cppQuizData = {
  "ch1": {
    "chapter": "戦略・マネジメント",
    "questions": [
      {
        "id": "ch1_q1_1",
        "category": "戦略・マネジメント",
        "difficulty": 2,
        "text": "戦略は何をやるかを規定し、戦術はそれをどうやるかということだと言われている。すなわち、戦略は[①]であり、戦術は[②]ということになる。",
        "options": ["How to do", "What to do"],
        "correct": 1,
        "explanation": "戦略=What to do（何をやるか）、戦術=How to do（どうやるか）"
      },
      {
        "id": "ch1_q1_2",
        "category": "戦略・マネジメント",
        "difficulty": 2,
        "text": "企業組織における戦略の位置づけについて、企業が表明した将来のあるべき姿を達成するための方策が[①]である。さらに、その企業のなかにある事業部門ごとの戦略が[②]であり、この事業部門における各種機能の戦略を[③]と呼ぶ。",
        "options": ["機能戦略", "事業戦略", "企業戦略"],
        "correct": 2,
        "explanation": "企業戦略→事業戦略→機能戦略の階層構造"
      }
    ]
  },
  "ch7": {
    "chapter": "IT・システム活用",
    "questions": [
      {
        "id": "ch7_q1_1",
        "category": "IT・システム活用",
        "difficulty": 2,
        "text": "調達系情報システムとしては、調達機能のための仕組み、[①]のための仕組み、[②]のための仕組み、の3つのシステムの種類に分けることができる。",
        "options": ["WEB経由", "トランザクション", "EDI", "電子ワークフロー", "サプライヤーとの連携のための仕組み", "システム動作履歴", "社内連携のための仕組み"],
        "correct": 4,
        "explanation": "調達系情報システムの3つの種類：調達機能のための仕組み、社内連携のための仕組み、サプライヤーとの連携のための仕組み"
      },
      {
        "id": "ch7_q1_2",
        "category": "IT・システム活用",
        "difficulty": 2,
        "text": "調達機能のための仕組みが取り扱うデータには、マスター系データ、[③]系データ、[④]データ、分析用データがある。",
        "options": ["WEB経由", "トランザクション", "EDI", "電子ワークフロー", "システム動作履歴"],
        "correct": 1,
        "explanation": "トランザクション系データ：調達必要量、見積り、発注等の調達案件1件ごとのデータ"
      },
      {
        "id": "ch7_q1_3",
        "category": "IT・システム活用",
        "difficulty": 2,
        "text": "サプライヤーとの連携のための仕組みの一つである[⑤]は、企業などがコンピューターをネットワークでつなぎ、伝票や文書を電子データで自動的に交換することをいう。",
        "options": ["WEB経由", "トランザクション", "EDI", "電子ワークフロー"],
        "correct": 2,
        "explanation": "EDI (Electronic Data Interchange)：電子データ交換システム"
      },
      {
        "id": "ch7_q2_1",
        "category": "IT・システム活用",
        "difficulty": 2,
        "text": "（１）製図作業・図面作成など、コンピューターを用いて設計すること。",
        "options": ["CAE", "CAD", "CPM", "PDM", "BOM", "PLC", "CAM"],
        "correct": 1,
        "explanation": "CAD (Computer-Aided Design)：コンピュータ支援設計"
      },
      {
        "id": "ch7_q2_2",
        "category": "IT・システム活用",
        "difficulty": 2,
        "text": "実際のモノづくりの前に、コンピューター上で仮想的にモノをつくり、製品の構造や伝熱などさまざまな角度から設計上の機能に関する仮想実験を可能にするシステムのこと。",
        "options": ["CAE", "CAD", "CPM", "PDM", "BOM", "PLC", "CAM"],
        "correct": 0,
        "explanation": "CAE (Computer-Aided Engineering)：コンピュータ支援エンジニアリング"
      }
    ]
  }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cppQuizData;
}

// For browser use
if (typeof window !== 'undefined') {
  window.cppQuizData = cppQuizData;
}

// Helper function to get questions by category
function getQuestionsByCategory(category) {
  const questions = [];
  for (const chapterId in cppQuizData) {
    const chapter = cppQuizData[chapterId];
    chapter.questions.forEach(q => {
      if (q.category === category) {
        questions.push(q);
      }
    });
  }
  return questions;
}

// Helper function to get random questions
function getRandomQuestions(count = 10) {
  const allQuestions = [];
  for (const chapterId in cppQuizData) {
    allQuestions.push(...cppQuizData[chapterId].questions);
  }
  
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Add helper functions to exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports.getQuestionsByCategory = getQuestionsByCategory;
  module.exports.getRandomQuestions = getRandomQuestions;
}
