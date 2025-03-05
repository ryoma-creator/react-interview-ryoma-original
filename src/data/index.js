
import { techGroups } from './techGroup';
import { categories } from './categories';
import { javascriptQuestions } from './questions/javascript';
import { reactQuestions } from './questions/react';
import { nextjsQuestions } from './questions/nextjs';
import { devToolsQuestions } from './questions/dev-tools';
import { techVocabularyQuestions } from './questions/tech-vocabulary';
import { codingChallengesQuestions } from './questions/coding-challenges';


const questions = [
  ...javascriptQuestions,
  ...reactQuestions,
  ...nextjsQuestions,
  ...devToolsQuestions,
  ...techVocabularyQuestions,
  ...(codingChallengesQuestions || [])
];

export { techGroups, categories, questions };