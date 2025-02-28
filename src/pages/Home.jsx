import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [language, setLanguage] = useState('en'); // Default language is English
  
  const text = {
    en: {
      instagram: 'INSTAGRAM',
      faq: 'FAQ',
      apply: 'APPLY',
      tagline: 'Advanced AI Applications for Smarter Interactions.',
      applyButton: 'Apply Today'
    },
    es: {
      instagram: 'INSTAGRAM',
      faq: 'PREGUNTAS',
      apply: 'APLICAR',
      tagline: 'Ventas y soporte dedicados para artistas representados',
      applyButton: 'Aplicar Hoy'
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#f8f7f2] flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200">
        <div className="text-2xl font-light">
          <Link to="/">lulo</Link>
        </div>
        <div className="flex space-x-6 md:space-x-12">
          <Link to="/instagram" className="text-sm md:text-base hover:underline">{text[language].instagram}</Link>
          <Link to="/faq" className="text-sm md:text-base hover:underline">{text[language].faq}</Link>
          <Link to="/apply" className="text-sm md:text-base hover:underline">{text[language].apply}</Link>
          <button 
            onClick={toggleLanguage} 
            className="text-sm md:text-base hover:underline"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 border-r border-gray-200">
          <div className="text-[120px] md:text-[180px] font-light leading-none">
            lulo
          </div>
          <div className="mt-12 rounded-full border border-gray-300 p-8 cursor-pointer">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 flex flex-col justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              {text[language].tagline}
            </h1>
            <div className="mt-12 md:mt-24">
              <Link to="/apply">
                <button className="bg-[#e9e8e4] hover:bg-gray-300 text-black py-3 px-8 rounded-md transition duration-300">
                  {text[language].applyButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 