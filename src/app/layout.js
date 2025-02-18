// src/app/layout.js
'use client';

import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ProgressProvider } from '@/context/ProgressContext';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <RootLayoutContent>{children}</RootLayoutContent>
      </ProgressProvider>
    </LanguageProvider>
  );
}

function RootLayoutContent({ children }) {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <html lang={language}>
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 mr-2 rounded ${language === 'en' ? 'bg-white text-blue-600' : 'bg-blue-700'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ja')}
                className={`px-3 py-1 rounded ${language === 'ja' ? 'bg-white text-blue-600' : 'bg-blue-700'}`}
              >
                日本語
              </button>
            </div>
          </div>
        </header>
        
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
        
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} React Interview Prep</p>
          </div>
        </footer>
      </body>
    </html>
  );
}