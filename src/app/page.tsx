'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();
  
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
            <h1 className="text-8xl sm:text-7xl md:text-7xl lg:text-8xl font-bold mb-8">Innovation Made Simple.</h1>
            <p className="text-5xl sm:text-4xl md:text-4xl mb-12">Advanced AI Applications and Intelligent Agents</p>
            
            <p className="text-4xl sm:text-3xl md:text-3xl max-w-2xl mb-10">
              The next big thing? It starts
              with AI—Let's talk.
            </p>
            <div className="mt-6 sm:mt-6">
              <Link 
                href="/contact-us" 
                className="text-black text-2xl sm:text-xl md:text-xl hover:underline transition duration-300 block sora-light"
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
