'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/useTranslation';

export type LegalBlock =
  | { type: 'p'; key: string }
  | { type: 'ul'; keys: string[] };

export type LegalSection = {
  titleKey: string;
  blocks: LegalBlock[];
};

type LegalPageProps = {
  titleKey: string;
  introKey?: string;
  sections: LegalSection[];
};

export default function LegalPage({ titleKey, introKey, sections }: LegalPageProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navigation />

      <div className="flex-grow px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 sora-text text-center">
              {t(titleKey)}
            </h1>
            <p className="text-lg text-gray-600 sora-light text-center italic">
              {t('lastUpdatedLabel')}: {t('legalDate')}
            </p>
          </div>

          <div className="space-y-8 text-gray-800">
            {introKey && (
              <section>
                <p className="mb-4 sora-light leading-relaxed">{t(introKey)}</p>
              </section>
            )}

            {sections.map((section, idx) => (
              <React.Fragment key={section.titleKey}>
                {(idx > 0 || introKey) && <hr className="border-gray-300 my-8" />}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 sora-text">
                    {t(section.titleKey)}
                  </h2>
                  {section.blocks.map((block, bIdx) => {
                    if (block.type === 'p') {
                      return (
                        <p key={bIdx} className="mb-4 sora-light leading-relaxed">
                          {t(block.key)}
                        </p>
                      );
                    }
                    return (
                      <ul
                        key={bIdx}
                        className="list-disc list-inside mb-4 sora-light space-y-1 ml-4"
                      >
                        {block.keys.map((k) => (
                          <li key={k}>{t(k)}</li>
                        ))}
                      </ul>
                    );
                  })}
                </section>
              </React.Fragment>
            ))}

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="sora-light mb-1">
                <strong>{t('contactEmailLabel')}:</strong>{' '}
                <a href="mailto:saradrada@luloai.com" className="hover:underline">
                  saradrada@luloai.com
                </a>
              </p>
              <p className="sora-light">
                <strong>{t('contactEmailLabel')}:</strong>{' '}
                <a href="mailto:yesidlopez@luloai.com" className="hover:underline">
                  yesidlopez@luloai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
