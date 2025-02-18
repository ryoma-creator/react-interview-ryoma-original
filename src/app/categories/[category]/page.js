// src/app/categories/[category]/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, questions } from '@/data/index.js';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import { notFound } from 'next/navigation';
import CodeBlock from '@/components/CodeBlock';

export default function CategoryPage({ params }) {
  const { language, t } = useLanguage();
  const { completedQuestions, toggleQuestionCompletion } = useProgress();
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  const [isReading, setIsReading] = useState(false);
  
  const category = categories.find(c => c.id === params.category);
  if (!category) {
    notFound();
  }
  
  const categoryQuestions = questions.filter(q => q.category === params.category);

  // テキスト音声変換関数
  const speakText = (text, questionId) => {
    if ('speechSynthesis' in window) {
      // 既存の発話をキャンセル
      window.speechSynthesis.cancel();
      
      if (isReading) {
        setIsReading(false);
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'en' ? 'en-US' : 'ja-JP';
      utterance.rate = 0.9; // 少しゆっくり
      
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

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
            <li key={question.id} className="border rounded-lg shadow bg-white overflow-hidden">
              {/* 質問ヘッダー部分 */}
              <div 
                className={`p-6 cursor-pointer transition ${isCompleted ? 'bg-green-50' : ''}`}
                onClick={() => setExpandedQuestionId(isExpanded ? null : question.id)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 mr-3 flex-shrink-0 rounded-full border ${
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
              </div>
              
              {/* 展開されたコンテンツ */}
              {isExpanded && (
                <div className="border-t border-gray-200">
                  <div className="p-6">
                    {/* 回答セクション */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">
                          {language === 'en' ? 'Answer' : '回答'}
                        </h3>
                        <button 
                          onClick={() => {
                            const text = language === 'en' ? question.answerEn : question.answerJa;
                            speakText(text, question.id);
                          }}
                          className={`flex items-center px-3 py-1 rounded ${
                            isReading 
                              ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                          }`}
                        >
                          {isReading ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                              </svg>
                              {language === 'en' ? 'Stop' : '停止'}
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                              </svg>
                              {language === 'en' ? 'Listen' : '音声'}
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="whitespace-pre-line">
                          {language === 'en' ? question.answerEn : question.answerJa}
                        </p>
                      </div>
                    </div>
                    
                    {/* コード例セクション */}
                    {question.codeExample && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">
                          {language === 'en' ? 'Code Example' : 'コード例'}
                        </h3>
                        <CodeBlock 
                          code={language === 'en' ? question.codeExample.en : question.codeExample.ja}
                          language="javascript"
                        />
                      </div>
                    )}
                    
                    {/* 参考リンク */}
                    {question.references && question.references.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">{t?.references || 'References'}</h3>
                        <ul className="list-disc list-inside space-y-1">
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
                </div>
              )}
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