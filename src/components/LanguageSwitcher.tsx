'use client';

import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button 
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'en' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <span>|</span>
      <button 
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'es' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
      <span>|</span>
      <button 
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'de' ? 'font-bold' : 'font-normal'}`}
        onClick={() => setLanguage('de')}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher; 
