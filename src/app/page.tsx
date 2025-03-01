'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 border-r border-gray-200">
          <div className="text-[120px] md:text-[180px] font-light leading-none lulo-text">
            lulo
          </div>
            <img src="/lulo.png" alt="Lulo Logo" className="w-48 h-48" />
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
                href="/contact-us" 
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
