// src/index.js
import { techGroups } from './techGroup';
import { categories } from './categories';
import { javascriptQuestions } from './questions/javascript';
import { reactQuestions } from './questions/react';
import { nextjsQuestions } from './questions/nextjs';
import { devToolsQuestions } from './questions/dev-tools';

// すべての質問を結合
const questions = [
  ...javascriptQuestions,
  ...reactQuestions,
  ...nextjsQuestions,
  ...devToolsQuestions
];

export { techGroups, categories, questions };