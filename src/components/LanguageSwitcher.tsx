'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from '../hooks/useTranslation';

type Language = 'en' | 'es' | 'de';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();
  const router = useRouter();

  // TranslationProvider.setLanguage writes the lulo-locale cookie
  // synchronously before updating React state, so by the time we call
  // router.refresh() here the next server request already sees the new
  // locale and re-fetches CMS content in the selected language.
  const switchTo = (lang: Language) => {
    if (lang === language) return;
    setLanguage(lang);
    router.refresh();
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'en' ? 'font-bold' : 'font-normal'}`}
        onClick={() => switchTo('en')}
      >
        EN
      </button>
      <span>|</span>
      <button
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'es' ? 'font-bold' : 'font-normal'}`}
        onClick={() => switchTo('es')}
      >
        ES
      </button>
      <span>|</span>
      <button
        className={`px-2 transition-all duration-200 cursor-pointer hover:scale-110 ${language === 'de' ? 'font-bold' : 'font-normal'}`}
        onClick={() => switchTo('de')}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher; 
