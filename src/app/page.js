// src/app/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { techGroups, categories, questions } from '@/data/index';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';

export default function Home() {
  const { language, t } = useLanguage();
  const { getCategoryProgress, getTechGroupProgress, getTotalProgress, reviewItems } = useProgress();
  
  const totalProgress = getTotalProgress(questions);
  const reviewCount = reviewItems ? Object.keys(reviewItems).filter(key => reviewItems[key]).length : 0;
  
  return (
    <main className="min-h-screen">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{t.totalProgress}</h2>
          <span className="text-xl font-medium">{totalProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div 
            className="bg-blue-600 h-4 rounded-full transition-all duration-500" 
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Add Review Link Here */}
      <div className="mb-8">
        <Link 
          href="/review" 
          className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow hover:bg-yellow-100 transition"
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-yellow-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="font-medium">
              {language === 'en' ? 'Daily Review' : '日々のレビュー'}
            </span>
          </div>
          <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            {reviewCount}
          </div>
        </Link>
      </div>
      
      {techGroups.map(group => {
        const groupProgress = getTechGroupProgress(group.id, categories, questions);
        
        return (
          <div key={group.id} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {language === 'en' ? group.nameEn : group.nameJa}
              </h2>
              <span className={`px-2 py-1 rounded text-sm ${
                groupProgress === 100 ? 'bg-green-100 text-green-800' : 
                groupProgress > 0 ? 'bg-yellow-100 text-yellow-800' : 
                'bg-gray-100 text-gray-800'
              }`}>
                {groupProgress}%
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories
                .filter(category => category.techGroup === group.id)
                .map(category => {
                  const progress = getCategoryProgress(category.id, questions);
                  
                  return (
                    <Link 
                      key={category.id}
                      href={`/categories/${category.id}`}
                      className="block p-6 bg-white hover:bg-gray-50 rounded-lg shadow border border-gray-200 transition"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium">
                          {language === 'en' ? category.nameEn : category.nameJa}
                        </h3>
                        <span className={`px-2 py-1 rounded text-sm ${
                          progress === 100 ? 'bg-green-100 text-green-800' : 
                          progress > 0 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {progress}%
                        </span>
                      </div>
                      <p className="text-gray-500 mt-2">{t.viewQuestions}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            progress === 100 ? 'bg-green-500' : 
                            progress > 0 ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        );
      })}
    </main>
  );
}