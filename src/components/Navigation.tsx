'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { X } from 'lucide-react'; // Import X icon for close button

export default function Navigation() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setHeaderHeight] = useState(73); // Default height
  
  useEffect(() => {
    // Function to measure and update header height
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    
    // Update on mount and window resize
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F5]">
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200 h-[73px] max-w-[1920px] mx-auto relative z-50">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className={`md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 ${isMenuOpen ? 'invisible' : 'visible'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black my-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
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
      
      {/* Mobile Menu and Overlay Container */}
      <div className="md:hidden">
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        ></div>
        
        {/* Mobile Menu Panel - full screen approach */}
        <div 
          className={`fixed top-0 right-0 w-[calc(100%-80px)] h-screen bg-[#F5F5F5] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header with Close Button */}
          <div className="h-[73px] border-b border-gray-200 flex items-center justify-between px-4 md:px-16 bg-[#F5F5F5]">
            <div className="text-2xl font-light">
              <Link href="/" className="lulo-text" onClick={closeMenu}>lulo</Link>
            </div>
            <button
              className="flex items-center justify-center w-8 h-8 z-50 cursor-pointer"
              onClick={closeMenu}
              aria-label="Close menu"
              type="button"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="flex flex-col p-6 space-y-6">
            <Link 
              href="/case-studies" 
              className={`text-base hover:underline uppercase ${
                pathname === '/case-studies' ? 'font-bold' : ''
              }`}
              onClick={closeMenu}
            >
              {t('caseStudies')}
            </Link>
            <Link 
              href="/contact-us" 
              className={`text-base hover:underline uppercase ${
                pathname === '/contact-us' ? 'font-bold' : ''
              }`}
              onClick={closeMenu}
            >
              {t('contactUs')}
            </Link>
            <Link 
              href="/about-us" 
              className={`text-base hover:underline uppercase ${
                pathname === '/about-us' ? 'font-bold' : ''
              }`}
              onClick={closeMenu}
            >
              {t('aboutUs')}
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 
