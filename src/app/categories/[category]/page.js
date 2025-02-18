// src/app/categories/[category]/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, questions } from '@/data/questions';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function CategoryPage({ params }) {
  const { language, t } = useLanguage();
  const { completedQuestions, toggleQuestionCompletion } = useProgress();
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  
  const category = categories.find(c => c.id === params.category);
  if (!category) {
    notFound();
  }
  
  const categoryQuestions = questions.filter(q => q.category === params.category);

  return (
    <main className="min-h-screen">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← {t?.back || 'Back'}
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">
        {language === 'en' ? category.nameEn : category.nameJa}
      </h1>
      
      <ul className="space-y-4">
        {categoryQuestions.map((question) => {
          const isCompleted = completedQuestions?.[question.id];
          const isExpanded = expandedQuestionId === question.id;
          
          return (
            <li key={question.id}>
              <div 
                className={`p-6 bg-white rounded-lg shadow border cursor-pointer transition ${
                  isCompleted ? 'border-green-300 bg-green-50' : 'border-gray-200'
                }`}
              >
                {/* 質問ヘッダー部分 */}
                <div 
                  className="flex items-start"
                  onClick={() => setExpandedQuestionId(isExpanded ? null : question.id)}
                >
                  <div className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 rounded-full border ${
                    isCompleted ? 'border-green-500 bg-green-500' : 'border-gray-300'
                  }`}>
                    {isCompleted && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-medium">
                        {language === 'en' ? question.titleEn : question.titleJa}
                      </h2>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* 展開されたコンテンツ */}
                {isExpanded && (
                  <div className="mt-6 border-t pt-4">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">{t?.basicAnswer || 'Basic Answer'}</h3>
                      <p className="whitespace-pre-line">
                        {language === 'en' ? question.basicAnswerEn : question.basicAnswerJa}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">{t?.detailedAnswer || 'Detailed Answer'}</h3>
                      <div className="prose max-w-none">
                        <ReactMarkdown>
                          {language === 'en' ? question.detailedAnswerEn : question.detailedAnswerJa}
                        </ReactMarkdown>
                      </div>
                    </div>
                    
                    {question.codeExample && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">
                          {language === 'en' ? 'Code Example' : 'コード例'}
                        </h3>
                        <div className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
                          <pre className="text-gray-100">
                            <code>
                              {language === 'en' ? question.codeExample.en : question.codeExample.ja}
                            </code>
                          </pre>
                        </div>
                      </div>
                    )}
                    
                    {question.references && question.references.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">{t?.references || 'References'}</h3>
                        <ul className="list-disc list-inside">
                          {question.references.map((ref, index) => (
                            <li key={index}>
                              <a 
                                href={ref} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 hover:underline"
                              >
                                {ref}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => toggleQuestionCompletion(question.id)}
                        className={`px-4 py-2 rounded-md ${
                          isCompleted 
                            ? 'bg-white text-green-600 border border-green-600' 
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {isCompleted ? t?.markAsIncomplete || 'Mark as Incomplete' : t?.markAsComplete || 'Mark as Complete'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
        
        {categoryQuestions.length === 0 && (
          <p className="text-gray-500">質問がまだありません。</p>
        )}
      </ul>
    </main>
  );
}