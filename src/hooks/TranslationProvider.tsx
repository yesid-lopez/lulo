'use client';

import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { translations } from '../utils/translations';

type Language = 'en' | 'es' | 'de';

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

// Must stay in sync with LOCALE_COOKIE_NAME in src/utils/serverLocale.ts —
// that's where server components read this value before fetching CMS content.
const LOCALE_COOKIE_NAME = 'lulo-locale';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

const writeLocaleCookie = (lang: Language) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${LOCALE_COOKIE_NAME}=${lang}; Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  // Store language preference in localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Mirror the language to localStorage (for client UI strings) and a cookie
  // (so server components can pick up the locale on the next request).
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      writeLocaleCookie(language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
