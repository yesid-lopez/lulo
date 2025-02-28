'use client';

import { useContext } from 'react';
import { TranslationContext } from './TranslationProvider';

export { TranslationProvider } from './TranslationProvider';

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 