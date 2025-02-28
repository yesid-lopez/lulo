'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function FAQ() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        <div className="flex space-x-6 md:space-x-12 items-center">
          <Link href="/instagram" className="text-sm md:text-base hover:underline">{t('instagram')}</Link>
          <Link href="/faq" className="text-sm md:text-base hover:underline font-bold">{t('faq')}</Link>
          <Link href="/apply" className="text-sm md:text-base hover:underline">{t('apply')}</Link>
          <LanguageSwitcher />
        </div>
      </nav>
      
      <div className="p-8">
        <h1 className="text-2xl font-bold">FAQ Page</h1>
      </div>
    </div>
  );
} 