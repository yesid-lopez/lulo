'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navigation() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F5]">
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200 h-[73px] max-w-[1920px] mx-auto">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black my-1 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
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
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-[73px] right-0 w-64 h-[calc(100vh-73px)] bg-[#F5F5F5] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <Link 
            href="/case-studies" 
            className={`text-base hover:underline uppercase ${
              pathname === '/case-studies' ? 'font-bold' : ''
            }`}
            onClick={toggleMenu}
          >
            {t('caseStudies')}
          </Link>
          <Link 
            href="/contact-us" 
            className={`text-base hover:underline uppercase ${
              pathname === '/contact-us' ? 'font-bold' : ''
            }`}
            onClick={toggleMenu}
          >
            {t('contactUs')}
          </Link>
          <Link 
            href="/about-us" 
            className={`text-base hover:underline uppercase ${
              pathname === '/about-us' ? 'font-bold' : ''
            }`}
            onClick={toggleMenu}
          >
            {t('aboutUs')}
          </Link>
          <div className="pt-4 border-t border-gray-200">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
} 