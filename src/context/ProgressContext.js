// src/context/ProgressContext.js
'use client';

import { createContext, useState, useContext, useEffect } from 'react';

// 進捗状況を管理するコンテキスト
const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completedQuestions, setCompletedQuestions] = useState({});
  
  // LocalStorageから進捗状況をロード
  useEffect(() => {
    if (typeof window !== 'undefined') {  // SSRでのエラー防止
      const storedProgress = localStorage.getItem('reactInterviewProgress');
      if (storedProgress) {
        setCompletedQuestions(JSON.parse(storedProgress));
      }
    }
  }, []);
  
  // 進捗状況が変わったらLocalStorageに保存
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(completedQuestions).length > 0) {
      localStorage.setItem('reactInterviewProgress', JSON.stringify(completedQuestions));
    }
  }, [completedQuestions]);
  
  // 質問の完了状態を切り替える
  const toggleQuestionCompletion = (questionId) => {
    setCompletedQuestions(prev => {
      const newState = { ...prev };
      if (newState[questionId]) {
        delete newState[questionId];
      } else {
        newState[questionId] = true;
      }
      return newState;
    });
  };
  
  // 特定のカテゴリーの完了率を取得
  const getCategoryProgress = (categoryId, questions) => {
    const categoryQuestions = questions.filter(q => q.category === categoryId);
    if (categoryQuestions.length === 0) return 0;
    
    const completedCount = categoryQuestions.filter(q => completedQuestions[q.id]).length;
    return Math.round((completedCount / categoryQuestions.length) * 100);
  };
  
  // 特定の技術グループの完了率を取得
  const getTechGroupProgress = (techGroupId, categories, questions) => {
    const groupCategories = categories.filter(c => c.techGroup === techGroupId);
    if (groupCategories.length === 0) return 0;
    
    let totalQuestions = 0;
    let totalCompleted = 0;
    
    groupCategories.forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category.id);
      totalQuestions += categoryQuestions.length;
      totalCompleted += categoryQuestions.filter(q => completedQuestions[q.id]).length;
    });
    
    if (totalQuestions === 0) return 0;
    return Math.round((totalCompleted / totalQuestions) * 100);
  };
  
  // 全体の完了率を取得
  const getTotalProgress = (questions) => {
    if (questions.length === 0) return 0;
    
    const completedCount = questions.filter(q => completedQuestions[q.id]).length;
    return Math.round((completedCount / questions.length) * 100);
  };
  
  return (
    <ProgressContext.Provider 
      value={{ 
        completedQuestions, 
        toggleQuestionCompletion,
        getCategoryProgress,
        getTechGroupProgress,
        getTotalProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}