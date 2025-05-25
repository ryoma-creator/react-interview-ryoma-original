// src/data/questions/coding-challenges/index.js
import { basicStateManagementQuestions } from './basic-state-management';
import { formHandlingQuestions } from './form-handling';

// 他のカテゴリをインポート（実装後に追加）
// import { listOperationsQuestions } from './list-operations';
// import { apiDataFetchingQuestions } from './api-data-fetching';
// import { componentCommunicationQuestions } from './component-communication';
// import { uiPatternsQuestions } from './ui-patterns';

export const codingChallengesQuestions = [
  ...basicStateManagementQuestions,
  ...formHandlingQuestions,
  // 他のカテゴリも実装後に追加
  // ...listOperationsQuestions,
  // ...apiDataFetchingQuestions,
  // ...componentCommunicationQuestions,
  // ...uiPatternsQuestions
];