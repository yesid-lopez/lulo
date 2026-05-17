'use client';

import { useRouter } from 'next/navigation';

import { useTranslation } from '../hooks/useTranslation';

type Language = 'en' | 'es' | 'de';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();
  const router = useRouter();

  const handleChange = (next: Language) => {
    if (next === language) return;
    setLanguage(next);
    // The locale cookie was just updated synchronously inside setLanguage's
    // effect. router.refresh() re-runs the server components so case-study
    // data is re-fetched from the CMS with the new ?locale= argument.
    router.refresh();
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'en' ? 'font-bold' : 'font-normal'}`}
        onClick={() => handleChange('en')}
      >
        EN
      </button>
      <span>|</span>
      <button
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'es' ? 'font-bold' : 'font-normal'}`}
        onClick={() => handleChange('es')}
      >
        ES
      </button>
      <span>|</span>
      <button
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'de' ? 'font-bold' : 'font-normal'}`}
        onClick={() => handleChange('de')}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
