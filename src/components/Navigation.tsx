'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navigation() {
  const { t } = useTranslation();
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F5]">
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200 h-[73px] max-w-[1920px] mx-auto">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-6 md:space-x-12">
            <Link 
              href="/case-studies" 
              className={`text-sm md:text-base hover:underline uppercase text-center min-w-[100px] ${
                pathname === '/case-studies' ? 'font-bold' : ''
              }`}
            >
              {t('caseStudies')}
            </Link>
            <Link 
              href="/contact-us" 
              className={`text-sm md:text-base hover:underline uppercase text-center min-w-[100px] ${
                pathname === '/contact-us' ? 'font-bold' : ''
              }`}
            >
              {t('contactUs')}
            </Link>
            <Link 
              href="/about-us" 
              className={`text-sm md:text-base hover:underline uppercase text-center min-w-[100px] ${
                pathname === '/about-us' ? 'font-bold' : ''
              }`}
            >
              {t('aboutUs')}
            </Link>
          </div>
          <div className="ml-6 md:ml-12">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
} 