'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button 
        className={`px-2 ${language === 'en' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <span>|</span>
      <button 
        className={`px-2 ${language === 'es' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher; 