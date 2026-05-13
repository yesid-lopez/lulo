'use client';

import LegalPage, { type LegalSection } from '@/components/LegalPage';

const sections: LegalSection[] = [
  {
    titleKey: 'terms_s1_title',
    blocks: [{ type: 'p', key: 'terms_s1_p1' }],
  },
  {
    titleKey: 'terms_s2_title',
    blocks: [{ type: 'p', key: 'terms_s2_p1' }],
  },
  {
    titleKey: 'terms_s3_title',
    blocks: [
      { type: 'p', key: 'terms_s3_p1' },
      {
        type: 'ul',
        keys: ['terms_s3_l1', 'terms_s3_l2', 'terms_s3_l3', 'terms_s3_l4'],
      },
    ],
  },
  {
    titleKey: 'terms_s4_title',
    blocks: [{ type: 'p', key: 'terms_s4_p1' }],
  },
  {
    titleKey: 'terms_s5_title',
    blocks: [{ type: 'p', key: 'terms_s5_p1' }],
  },
  {
    titleKey: 'terms_s6_title',
    blocks: [{ type: 'p', key: 'terms_s6_p1' }],
  },
  {
    titleKey: 'terms_s7_title',
    blocks: [{ type: 'p', key: 'terms_s7_p1' }],
  },
  {
    titleKey: 'terms_s8_title',
    blocks: [{ type: 'p', key: 'terms_s8_p1' }],
  },
  {
    titleKey: 'terms_s9_title',
    blocks: [{ type: 'p', key: 'terms_s9_p1' }],
  },
  {
    titleKey: 'terms_s10_title',
    blocks: [{ type: 'p', key: 'terms_s10_p1' }],
  },
];

export default function TermsOfService() {
  return <LegalPage titleKey="terms_title" introKey="terms_intro" sections={sections} />;
}
