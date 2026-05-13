'use client';

import LegalPage, { type LegalSection } from '@/components/LegalPage';

const sections: LegalSection[] = [
  {
    titleKey: 'cookies_s1_title',
    blocks: [{ type: 'p', key: 'cookies_s1_p1' }],
  },
  {
    titleKey: 'cookies_s2_title',
    blocks: [
      { type: 'p', key: 'cookies_s2_p1' },
      { type: 'ul', keys: ['cookies_s2_l1'] },
    ],
  },
  {
    titleKey: 'cookies_s3_title',
    blocks: [{ type: 'p', key: 'cookies_s3_p1' }],
  },
  {
    titleKey: 'cookies_s4_title',
    blocks: [{ type: 'p', key: 'cookies_s4_p1' }],
  },
  {
    titleKey: 'cookies_s5_title',
    blocks: [{ type: 'p', key: 'cookies_s5_p1' }],
  },
  {
    titleKey: 'cookies_s6_title',
    blocks: [{ type: 'p', key: 'cookies_s6_p1' }],
  },
  {
    titleKey: 'cookies_s7_title',
    blocks: [{ type: 'p', key: 'cookies_s7_p1' }],
  },
];

export default function CookiePolicy() {
  return (
    <LegalPage titleKey="cookies_title" introKey="cookies_intro" sections={sections} />
  );
}
