// src/context/LanguageContext.js
'use client';

import { createContext, useState, useContext, useEffect } from 'react';

// 翻訳データ
export const translations = {
  en: {
    title: 'React Interview Prep',
    categories: 'Categories',
    totalProgress: 'Total Progress',
    viewQuestions: 'View questions and answers',
    back: 'Back',
    basicAnswer: 'Basic Answer',
    detailedAnswer: 'Detailed Answer',
    references: 'References',
    markAsComplete: 'Mark as Complete',
    markAsIncomplete: 'Mark as Incomplete',
  },
  ja: {
    title: 'React面接準備ツール',
    categories: 'カテゴリー',
    totalProgress: '全体の進捗',
    viewQuestions: '質問と回答を見る',
    back: '戻る',
    basicAnswer: '基本回答',
    detailedAnswer: '詳細回答',
    references: '参考リンク',
    markAsComplete: '完了にする',
    markAsIncomplete: '未完了に戻す',
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  // ブラウザの言語設定に基づいて初期言語を設定
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else if (navigator.language.startsWith('ja')) {
        setLanguage('ja');
      }
    }
  }, []);
  
  // 言語が変更されたらローカルストレージに保存
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}