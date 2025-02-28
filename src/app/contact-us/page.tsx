'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';

export default function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert(t('thankYouMessage'));
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-200">
        <div className="text-2xl font-light">
          <Link href="/" className="lulo-text">lulo</Link>
        </div>
        <div className="flex space-x-6 md:space-x-12 items-center">
          <Link href="/case-studies" className="text-sm md:text-base hover:underline uppercase">{t('caseStudies')}</Link>
          <Link href="/contact-us" className="text-sm md:text-base hover:underline font-bold uppercase">{t('contactUs')}</Link>
          <Link href="/about-us" className="text-sm md:text-base hover:underline uppercase">{t('aboutUs')}</Link>
          <LanguageSwitcher />
        </div>
      </nav>
      
      <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column - Form Title */}
          <div className="md:w-1/3">
            <h1 className="text-3xl md:text-4xl font-bold sora-text mb-4">{t('contactHeading')}</h1>
            <p className="text-gray-600 sora-light">{t('contactSubheading')}</p>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('yourName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder={t('namePlaceholder')}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('yourEmail')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder={t('emailPlaceholder')}
                />
              </div>
              
              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{t('companyName')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder={t('companyPlaceholder')}
                />
              </div>
              
              {/* Service Field */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">{t('howCanWeHelp')}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
                >
                  <option value="" disabled>{t('selectService')}</option>
                  <option value="ai-development">{t('aiDevelopment')}</option>
                  <option value="ml-consulting">{t('mlConsulting')}</option>
                  <option value="nlp-solutions">{t('nlpSolutions')}</option>
                  <option value="custom-ai-agents">{t('customAiAgents')}</option>
                </select>
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('anythingElse')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-300"
                >
                  {t('submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 