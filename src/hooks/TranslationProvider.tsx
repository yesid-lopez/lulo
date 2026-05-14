'use client';

import React, { useState, useEffect, useCallback, createContext, ReactNode } from 'react';
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

const persistLocale = (lang: Language) => {
  if (typeof document !== 'undefined') {
    // Cookie is the source of truth for server components — must be written
    // synchronously before any router.refresh() so the next server request
    // sees the new locale.
    document.cookie = `${LOCALE_COOKIE_NAME}=${lang}; Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
  }
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem('language', lang);
    } catch {
      // Storage may be unavailable (private mode, quota). Cookie is enough.
    }
  }
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Hydrate from localStorage on mount, and make sure the cookie matches
  // what the user previously chose (covers the case where the cookie was
  // cleared but localStorage survived).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('language') as Language | null;
    if (saved && saved !== language) {
      setLanguageState(saved);
      persistLocale(saved);
    } else {
      persistLocale(language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    // Persist BEFORE updating state so any consumer that triggers a server
    // refetch (e.g. router.refresh()) in the same tick already sees the new
    // cookie. React state then catches up for client-side UI strings.
    persistLocale(lang);
    setLanguageState(lang);
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
