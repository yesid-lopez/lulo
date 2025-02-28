'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        <div className="flex space-x-6 md:space-x-12 items-center">
          <Link href="/case-studies" className="text-sm md:text-base hover:underline uppercase">{t('caseStudies')}</Link>
          <Link href="/contact-us" className="text-sm md:text-base hover:underline uppercase">{t('contactUs')}</Link>
          <Link href="/about-us" className="text-sm md:text-base hover:underline uppercase">{t('aboutUs')}</Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 border-r border-gray-200">
          <div className="text-[120px] md:text-[180px] font-light leading-none lulo-text">
            lulo
          </div>
          <div className="mt-12 rounded-full border border-gray-300 p-8 cursor-pointer">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex flex-col justify-center p-4 sm:p-8 md:p-16">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight sora-text">
              {t('dedicated')}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2 mb-2 sm:mb-4 sora-light">
              {t('subtitle')}
            </p>
            <div className="mt-1 sm:mt-2">
              <Link 
                href="/apply" 
                className="text-black text-base sm:text-lg hover:underline transition duration-300 block sora-light"
              >
                <span>{t('applyTodayLine1')}</span>
                <br />
                <span>{t('applyTodayLine2')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
