'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Curved top edge - concave style - reduced height */}
      <div className="h-6 w-full bg-[#F5F5F5] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-12 w-[200%] bg-black rounded-t-[100%] left-[-50%]"></div>
      </div>
      
      {/* Material-like layer for entire footer */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-10 pointer-events-none"></div>
      
      {/* Subtle glow effect for entire footer */}
      <div 
        className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)'
        }}
      ></div>
      
      {/* Enhanced grainy texture overlay */}
      <div 
        className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      {/* Second grain layer for more texture */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-soft-light pointer-events-none z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      <div className="container mx-auto pt-8 pb-0 px-8 md:px-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <Link href="/" className="block mb-6">
              <div className="w-10 h-10 border border-white flex items-center justify-center">
                <span className="sr-only">lulo</span>
                <div className="w-5 h-5 bg-white"></div>
              </div>
            </Link>
          </div>
          
          {/* The Good Column */}
          <div>
            <h3 className="text-lg mb-4">{t('theGood')}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">{t('caseStudies')}</Link></li>
              <li><Link href="/about-us" className="hover:text-white transition-colors">{t('aboutUs')}</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors">{t('contactUs')}</Link></li>
            </ul>
          </div>
          
          {/* The Boring Column */}
          <div>
            <h3 className="text-lg mb-4">{t('theBoring')}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{t('termsOfService')}</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>
          
          {/* The Cool Column */}
          <div>
            <h3 className="text-lg mb-4">The Cool</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* lulo Text - Improved responsiveness */}
        <div className="mt-8 relative overflow-hidden" style={{ height: '8rem' }}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter absolute bottom-[-1rem] sm:bottom-[-1.25rem] md:bottom-[-2rem] lg:bottom-[-3rem] z-40">
            lulo
          </h1>
          <img 
            src="/lulo.png" 
            alt="Lulo Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 absolute bottom-[-3rem] md:bottom-[-4rem] lg:bottom-[-5rem] right-0 z-40" 
          />
        </div>
      </div>
    </footer>
  );
} 