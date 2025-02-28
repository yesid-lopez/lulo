'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function AboutUs() {
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
          <Link href="/about-us" className="text-sm md:text-base hover:underline font-bold uppercase">{t('aboutUs')}</Link>
          <LanguageSwitcher />
        </div>
      </nav>
      
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-73px)]">
        <div className="w-full md:w-1/2 p-8 md:px-24">
          <div className="md:max-w-md md:ml-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 sora-text">
              Meet the Founders.
            </h1>
            <p className="text-lg sora-light mb-12">
              Born in Colombia, Where Innovation Meets Passion. We're innovators, lifelong learners, and coffee lovers—turning complex AI into simple, powerful solutions.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col space-y-12">
            {/* Sara's Card */}
            <div className="overflow-hidden flex flex-col items-start text-left">
              <div className="relative w-40 h-40 mb-6 overflow-hidden bg-amber-200">
                {/* Color block instead of image */}
              </div>
              <h2 className="text-2xl font-bold mb-1 sora-text text-black">Sara Ortiz Drada</h2>
              <p className="text-lg mb-2 sora-light text-black">
                iOS Developer
              </p>
              <Link 
                href="https://www.linkedin.com/in/saradrada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </Link>
            </div>

            {/* Yesid's Card */}
            <div className="overflow-hidden flex flex-col items-start text-left">
              <div className="relative w-40 h-40 mb-6 overflow-hidden bg-blue-200">
                {/* Color block instead of image */}
              </div>
              <h2 className="text-2xl font-bold mb-1 sora-text text-black">Yesid Leonardo López Sierra</h2>
              <p className="text-lg mb-2 sora-light text-black">
                AI Engineer
              </p>
              <Link 
                href="https://www.linkedin.com/in/yesid-lopez-sierra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 