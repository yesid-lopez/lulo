'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function HomeHero() {
  const { t } = useTranslation();
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    setIsPortrait(window.innerHeight > window.innerWidth);

    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex min-h-[calc(100svh-145px)] flex-col md:flex-row">
      <div className="flex w-full flex-col items-center justify-center border-b border-gray-300 p-4 sm:p-6 md:w-1/3 md:border-b-0 md:border-r md:p-8">
        <div className="flex flex-col-reverse text-center md:flex-col">
          <div className="lulo-text overflow-visible text-[80px] font-light leading-none sm:text-[100px] md:text-[120px] lg:text-[160px]">
            lulo
          </div>
          <Image
            src="/lulo.png"
            alt="Lulo Logo"
            width={128}
            height={128}
            className="mx-auto mb-2 h-32 w-32 sm:h-40 sm:w-40 md:mb-0 md:mt-2 md:h-48 md:w-48"
            priority
          />
        </div>
      </div>

      <div className="flex w-full flex-col justify-center p-4 sm:p-8 md:w-2/3 md:p-12 lg:p-16">
        <div className="mx-auto max-w-xl md:mx-0">
          <h1
            className={`sora-text font-light leading-tight ${
              isPortrait
                ? 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl'
                : 'text-xl sm:text-2xl md:text-3xl lg:text-5xl'
            }`}
          >
            {t('dedicated')}
          </h1>
          <p
            className={`sora-light text-gray-600 ${
              isPortrait
                ? 'mt-3 mb-4 text-base sm:text-lg md:text-lg'
                : 'mt-1 mb-2 text-xs sm:mt-2 sm:mb-4 sm:text-sm md:text-base'
            }`}
          >
            {t('subtitle')}
          </p>
          <div className={isPortrait ? 'mt-4' : 'mt-1 sm:mt-2'}>
            <Link
              href="/contact-us"
              className={`sora-light block text-black transition duration-300 hover:underline ${
                isPortrait
                  ? 'text-lg sm:text-xl md:text-xl'
                  : 'text-sm sm:text-base md:text-lg'
              }`}
            >
              <span>{t('applyTodayLine1')}</span>
              <br />
              <span>{t('applyTodayLine2')}</span>
            </Link>
          </div>
          <div className={`flex flex-col gap-3 sm:flex-row ${isPortrait ? 'mt-4' : 'mt-3 sm:mt-4'}`}>
            <Link
              href="/contact-us"
              className={`inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 ${
                isPortrait ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}
            >
              {t('homePrimaryCta')}
            </Link>
            <Link
              href="/case-studies"
              className={`inline-flex items-center justify-center rounded-full border border-gray-950 px-6 py-3 font-semibold text-gray-950 transition-colors hover:bg-gray-950 hover:text-white ${
                isPortrait ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}
            >
              {t('homeSecondaryCta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
