'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useContactForm } from '@/hooks/useContactForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactUs() {
  const { t } = useTranslation();
  const { 
    formData, 
    isSubmitting, 
    submitError, 
    submitSuccess, 
    handleChange, 
    handleSubmit, 
    setSubmitSuccess 
  } = useContactForm();
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />
      
      <div className="p-4 md:p-8 max-w-6xl mx-auto w-full flex-grow">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column - Form Title */}
          <div className="md:w-1/3">
            <h1 className="text-3xl md:text-4xl font-bold sora-text mb-4">{t('contactHeading')}</h1>
            <p className="text-gray-600 sora-light">{t('contactSubheading')}</p>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="md:w-2/3">
            {submitSuccess ? (
              <div className="bg-transparent border border-black rounded-lg p-8 text-center">
                <div className="flex justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 sora-text">Thanks, We Got It!</h3>
                <p className="text-gray-600 text-base mb-6 sora-light">Your message is in good hands.<br />We&apos;ll be in touch soon!</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="px-5 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors font-medium sora-text hover:shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
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
                
                {/* Error message - improved styling */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{submitError}</span>
                  </div>
                )}
                
                {/* Submit Button with matching font size */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition duration-300 disabled:bg-gray-400 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('Sending') || 'Sending...'}
                      </>
                    ) : (
                      t('submit')
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 
