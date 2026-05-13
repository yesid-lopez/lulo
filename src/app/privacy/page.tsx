'use client';

import LegalPage, { type LegalSection } from '@/components/LegalPage';

const sections: LegalSection[] = [
  {
    titleKey: 'privacy_s1_title',
    blocks: [
      { type: 'p', key: 'privacy_s1_p1' },
      { type: 'p', key: 'privacy_s1_p2' },
    ],
  },
  {
    titleKey: 'privacy_s2_title',
    blocks: [
      { type: 'p', key: 'privacy_s2_p1' },
      {
        type: 'ul',
        keys: [
          'privacy_s2_l1',
          'privacy_s2_l2',
          'privacy_s2_l3',
          'privacy_s2_l4',
          'privacy_s2_l5',
        ],
      },
      { type: 'p', key: 'privacy_s2_p2' },
    ],
  },
  {
    titleKey: 'privacy_s3_title',
    blocks: [
      { type: 'p', key: 'privacy_s3_p1' },
      { type: 'ul', keys: ['privacy_s3_l1', 'privacy_s3_l2', 'privacy_s3_l3'] },
    ],
  },
  {
    titleKey: 'privacy_s4_title',
    blocks: [
      { type: 'p', key: 'privacy_s4_p1' },
      { type: 'ul', keys: ['privacy_s4_l1', 'privacy_s4_l2'] },
    ],
  },
  {
    titleKey: 'privacy_s5_title',
    blocks: [{ type: 'p', key: 'privacy_s5_p1' }],
  },
  {
    titleKey: 'privacy_s6_title',
    blocks: [{ type: 'p', key: 'privacy_s6_p1' }],
  },
  {
    titleKey: 'privacy_s7_title',
    blocks: [{ type: 'p', key: 'privacy_s7_p1' }],
  },
  {
    titleKey: 'privacy_s8_title',
    blocks: [
      { type: 'p', key: 'privacy_s8_p1' },
      {
        type: 'ul',
        keys: [
          'privacy_s8_l1',
          'privacy_s8_l2',
          'privacy_s8_l3',
          'privacy_s8_l4',
          'privacy_s8_l5',
        ],
      },
      { type: 'p', key: 'privacy_s8_p2' },
    ],
  },
  {
    titleKey: 'privacy_s9_title',
    blocks: [{ type: 'p', key: 'privacy_s9_p1' }],
  },
  {
    titleKey: 'privacy_s10_title',
    blocks: [{ type: 'p', key: 'privacy_s10_p1' }],
  },
  {
    titleKey: 'privacy_s11_title',
    blocks: [{ type: 'p', key: 'privacy_s11_p1' }],
  },
  {
    titleKey: 'privacy_s12_title',
    blocks: [{ type: 'p', key: 'privacy_s12_p1' }],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage titleKey="privacy_title" introKey="privacy_intro" sections={sections} />
  );
}
