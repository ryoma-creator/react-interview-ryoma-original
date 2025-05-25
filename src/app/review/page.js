// src/app/review/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { questions } from '@/data/index.js';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import CodeBlock from '@/components/CodeBlock';

export default function ReviewPage() {
  const { language, t } = useLanguage();
  const { reviewItems, toggleReviewItem } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter questions that are marked for review
  const reviewQuestions = questions.filter(q => reviewItems?.[q.id]);
  
  if (reviewQuestions.length === 0) {
    return (
      <main className="min-h-screen p-6">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← {t?.back || 'Back'}
        </Link>
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'No Items to Review' : 'レビューするアイテムがありません'}
          </h1>
          <p>
            {language === 'en' 
              ? 'Mark some questions for review to see them here.' 
              : 'レビューするアイテムを追加してください。'}
          </p>
        </div>
      </main>
    );
  }
  
  const currentQuestion = reviewQuestions[currentIndex];
  
  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← {t?.back || 'Back'}
      </Link>
      
      <div className="text-center mb-4">
        <p>{currentIndex + 1} / {reviewQuestions.length}</p>
      </div>
      
      <div className="border rounded-lg shadow bg-white p-6">
        <h2 className="text-xl font-bold mb-4">
          {language === 'en' ? currentQuestion.titleEn : currentQuestion.titleJa}
        </h2>
        
        <div className="mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="whitespace-pre-line">
              {language === 'en' ? currentQuestion.answerEn : currentQuestion.answerJa}
            </p>
          </div>
        </div>
        
        {currentQuestion.codeExample && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">
              {language === 'en' ? 'Code Example' : 'コード例'}
            </h3>
            <CodeBlock 
              code={language === 'en' ? currentQuestion.codeExample.en : currentQuestion.codeExample.ja}
              language="javascript"
            />
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          >
            {language === 'en' ? 'Previous' : '前へ'}
          </button>
          
          <button
            onClick={() => toggleReviewItem(currentQuestion.id)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            {language === 'en' ? 'Remove from Review' : 'レビューから削除'}
          </button>
          
          <button
            onClick={() => setCurrentIndex(prev => Math.min(reviewQuestions.length - 1, prev + 1))}
            disabled={currentIndex === reviewQuestions.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
          >
            {language === 'en' ? 'Next' : '次へ'}
          </button>
        </div>
      </div>
    </main>
  );
}