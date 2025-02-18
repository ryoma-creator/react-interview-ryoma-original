// src/app/questions/[id]/page.js
'use client';

import { useState } from 'react'; 
import Link from 'next/link';
import { questions } from '@/data/questions';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function QuestionPage({ params }) {
  const { language, t } = useLanguage();
  const { completedQuestions, toggleQuestionCompletion } = useProgress();
  const [isReadingBasic, setIsReadingBasic] = useState(false);
  const [isReadingDetailed, setIsReadingDetailed] = useState(false);
  
  const question = questions.find(q => q.id === params.id);
  if (!question) {
    notFound();
  }

  const isCompleted = completedQuestions[question.id];
  const category = question.category;

  // テキスト音声変換関数
  const speakText = (text, isDetailed = false) => {
    if ('speechSynthesis' in window) {
      // 既存の発話をキャンセル
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'en' ? 'en-US' : 'ja-JP';
      utterance.rate = 0.9; // 少しゆっくり
      
      utterance.onstart = () => {
        if (isDetailed) {
          setIsReadingDetailed(true);
        } else {
          setIsReadingBasic(true);
        }
      };
      
      utterance.onend = () => {
        if (isDetailed) {
          setIsReadingDetailed(false);
        } else {
          setIsReadingBasic(false);
        }
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // マークダウンをプレーンテキストに変換（音声用）
  const markdownToPlainText = (markdown) => {
    return markdown
      .replace(/```[^`]+```/g, 'code example') // コードブロックを簡略化
      .replace(/\*\*([^*]+)\*\*/g, '$1') // 太字を通常テキストに
      .replace(/\n/g, ' '); // 改行をスペースに
  };

  return (
    <main className="min-h-screen">
      <Link href={`/categories/${category}`} className="text-blue-500 hover:underline mb-4 inline-block">
        ← {t.back}
      </Link>
      
      <article className={`bg-white rounded-lg shadow border overflow-hidden ${
        isCompleted ? 'border-green-300' : 'border-gray-200'
      }`}>
        <div className="p-6 bg-blue-50 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {language === 'en' ? question.titleEn : question.titleJa}
          </h1>
          <button
            onClick={() => toggleQuestionCompletion(question.id)}
            className={`px-4 py-2 rounded-md ${
              isCompleted 
                ? 'bg-white text-green-600 border border-green-600' 
                : 'bg-blue-600 text-white'
            }`}
          >
            {isCompleted ? t.markAsIncomplete : t.markAsComplete}
          </button>
        </div>
        
        <div className="p-6">
          {/* 基本回答セクション */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{t.basicAnswer}</h2>
              <button 
                onClick={() => {
                  if (isReadingBasic) {
                    window.speechSynthesis.cancel();
                    setIsReadingBasic(false);
                  } else {
                    const text = language === 'en' ? question.basicAnswerEn : question.basicAnswerJa;
                    speakText(text);
                  }
                }}
                className={`flex items-center px-3 py-1 rounded ${
                  isReadingBasic 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                {isReadingBasic ? (
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
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="whitespace-pre-line">
                {language === 'en' ? question.basicAnswerEn : question.basicAnswerJa}
              </p>
            </div>
          </div>
          
          {/* 詳細回答セクション */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{t.detailedAnswer}</h2>
              <button 
                onClick={() => {
                  if (isReadingDetailed) {
                    window.speechSynthesis.cancel();
                    setIsReadingDetailed(false);
                  } else {
                    const text = markdownToPlainText(
                      language === 'en' ? question.detailedAnswerEn : question.detailedAnswerJa
                    );
                    speakText(text, true);
                  }
                }}
                className={`flex items-center px-3 py-1 rounded ${
                  isReadingDetailed 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                {isReadingDetailed ? (
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
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="prose max-w-none">
                <ReactMarkdown>
                  {language === 'en' ? question.detailedAnswerEn : question.detailedAnswerJa}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          
          {/* 例示コードセクション（もし存在する場合） */}
          {question.codeExample && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'Code Example' : 'コード例'}
              </h2>
              <div className="p-4 bg-gray-900 rounded-lg">
                <pre className="text-gray-100 overflow-x-auto">
                  <code>
                    {language === 'en' ? question.codeExample.en : question.codeExample.ja}
                  </code>
                </pre>
              </div>
            </div>
          )}
          
          {/* 参考リンク */}
          {question.references && question.references.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">{t.references}</h2>
              <ul className="list-disc list-inside space-y-1">
                {question.references.map((ref, index) => (
                  <li key={index}>
                    <a href={ref} target="_blank" rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline">
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}