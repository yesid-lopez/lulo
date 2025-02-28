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
      
      <div className="p-8">
        <h1 className="text-2xl font-bold sora-text">About Us</h1>
        <p className="mt-4 sora-light">Learn about our mission to simplify innovation through advanced AI solutions.</p>
      </div>
    </div>
  );
} 