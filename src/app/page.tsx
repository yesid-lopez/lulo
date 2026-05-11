'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();

  const servicePillKeys = ['homePillAgents', 'homePillAutomation', 'homePillMl'];
  const valueCardKeys = [
    {
      title: 'homeValuePrototypeTitle',
      description: 'homeValuePrototypeDescription',
    },
    {
      title: 'homeValueIntegrateTitle',
      description: 'homeValueIntegrateDescription',
    },
    {
      title: 'homeValueScaleTitle',
      description: 'homeValueScaleDescription',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-950 flex flex-col">
      <Navigation />

      <main className="flex flex-1 flex-col md:flex-row">
        <section className="w-full border-b border-gray-300 p-6 sm:p-8 md:w-[28%] md:border-b-0 md:border-r md:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-center text-center md:sticky md:top-[105px] md:min-h-0 md:justify-start">
            <Image
              src="/lulo.png"
              alt="Lulo Logo"
              width={160}
              height={160}
              className="mb-2 h-24 w-24 sm:h-32 sm:w-32 md:h-28 md:w-28 lg:h-36 lg:w-36"
              priority
            />
            <div className="lulo-text text-[72px] font-light leading-none sm:text-[96px] md:text-[92px] lg:text-[124px]">
              lulo
            </div>
            <p className="mt-3 max-w-[12rem] text-xs uppercase tracking-[0.2em] text-gray-500 lg:text-sm">
              {t('homeStudioLabel')}
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col justify-center px-6 py-10 sm:px-8 md:w-[72%] md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2">
              {servicePillKeys.map((key) => (
                <span key={key} className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-gray-600">
                  {t(key)}
                </span>
              ))}
            </div>

            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.03em] sora-text sm:text-5xl lg:text-7xl">
              {t('dedicated')}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sora-light sm:text-xl">
              {t('subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                {t('homePrimaryCta')}
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-gray-950 px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-950 hover:text-white"
              >
                {t('homeSecondaryCta')}
              </Link>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              {t('homeCtaNote')}
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {valueCardKeys.map((item) => (
                <article key={item.title} className="rounded-3xl border border-gray-200 bg-white/70 p-5 shadow-sm">
                  <h2 className="mb-2 text-base font-semibold text-gray-950">
                    {t(item.title)}
                  </h2>
                  <p className="text-sm leading-6 text-gray-600">
                    {t(item.description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
