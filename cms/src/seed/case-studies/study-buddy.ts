import type { CaseStudySeed } from './index'

export const slug = 'study-buddy'

export const data: CaseStudySeed = {
  type: 'hackathon',
  title: 'Study Buddy',
  slug,
  description:
    'Study Buddy is an AI agent-based application that revolutionizes learning through intelligent document analysis, interactive tutoring, and personalized study plan generation.',
  category: 'education',
  platform: 'web',
  award: {
    title: 'Winner (3rd Place)',
    event: 'Google x TruEra AI Hackathon',
    position: 'third',
  },
  keyFeatures: [
    {
      number: '01',
      title: 'Intelligent Document Analysis',
      description:
        'Parses uploaded documents and extracts key concepts to build a personalized knowledge base for the student.',
    },
    {
      number: '02',
      title: 'Interactive AI Tutoring',
      description:
        'AI agent engages students in Socratic dialogue, adapting explanations to their level of understanding.',
    },
    {
      number: '03',
      title: 'Personalized Study Plans',
      description:
        'Generates custom study schedules and topic breakdowns based on the student\'s goals and available time.',
    },
  ],
  tags: [
    { tag: 'AI Tutoring' },
    { tag: 'Document Analysis' },
    { tag: 'Study Planning' },
  ],
  links: {
    other: [
      {
        label: 'LinkedIn post',
        url: 'https://www.linkedin.com/posts/yesid-lopez-sierra_teamwork-innovation-hackathonsuccess-activity-7143566767397801984-Pvr_?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
  status: 'draft',
  featured: false,
}
