'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [isPortrait, setIsPortrait] = useState(false);
  
  useEffect(() => {
    // Check initial orientation
    setIsPortrait(window.innerHeight > window.innerWidth);
    
    // Add listener for orientation changes
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="text-center flex flex-col-reverse md:flex-col">
            <div className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] font-light leading-none lulo-text overflow-visible">
              lulo
            </div>
            <Image 
              src="/lulo.png" 
              alt="Lulo Logo" 
              width={128} 
              height={128} 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-2 md:mb-0 md:mt-2"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className={`font-light leading-tight sora-text ${
              isPortrait 
                ? "text-3xl sm:text-4xl md:text-4xl lg:text-5xl" 
                : "text-xl sm:text-2xl md:text-3xl lg:text-5xl"
            }`}>
              {t('dedicated')}
            </h1>
            <p className={`text-gray-600 sora-light ${
              isPortrait 
                ? "text-base sm:text-lg md:text-lg mt-3 mb-4" 
                : "text-xs sm:text-sm md:text-base mt-1 sm:mt-2 mb-2 sm:mb-4"
            }`}>
              {t('subtitle')}
            </p>
            <div className={isPortrait ? "mt-4" : "mt-1 sm:mt-2"}>
              <Link 
                href="/contact-us" 
                className={`text-black hover:underline transition duration-300 block sora-light ${
                  isPortrait 
                    ? "text-lg sm:text-xl md:text-xl" 
                    : "text-sm sm:text-base md:text-lg"
                }`}
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
