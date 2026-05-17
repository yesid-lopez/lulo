'use client';

import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { translations } from '../utils/translations';
import { LOCALE_COOKIE, SUPPORTED_LOCALES } from '../utils/locale';

type Language = 'en' | 'es' | 'de';

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  // Optional initial language read from the cookie on the server, so the very
  // first paint matches the user's saved choice and we avoid a flash of
  // English content before the client effect runs.
  initialLanguage?: Language;
}

// One-year expiry, matching how long we want the saved preference to last for
// returning visitors. Path=/ so every page reads the same value.
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const writeLocaleCookie = (lang: Language) => {
  if (typeof document === 'undefined') return;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
};

const readLocaleCookie = (): Language | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`));
  if (!match) return null;
  const value = match.split('=')[1] as Language;
  return SUPPORTED_LOCALES.includes(value) ? value : null;
};

export const TranslationProvider = ({ children, initialLanguage = 'en' }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // On mount, prefer the cookie (set by a previous visit) over the
  // server-provided initial value. localStorage is still read for backwards
  // compatibility with users who picked a language before cookies were used.
  useEffect(() => {
    const fromCookie = readLocaleCookie();
    if (fromCookie) {
      setLanguage(fromCookie);
      return;
    }
    if (typeof window !== 'undefined') {
      const fromStorage = localStorage.getItem('language') as Language | null;
      if (fromStorage && SUPPORTED_LOCALES.includes(fromStorage)) {
        setLanguage(fromStorage);
        writeLocaleCookie(fromStorage);
      }
    }
  }, []);

  // Persist any change to both cookie (for server reads) and localStorage
  // (legacy clients).
  useEffect(() => {
    writeLocaleCookie(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
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
