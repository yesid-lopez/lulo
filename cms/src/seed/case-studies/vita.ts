import type { CaseStudySeed } from './index'

export const slug = 'vita'

export const data: CaseStudySeed = {
  type: 'hackathon',
  title: 'Vita',
  slug,
  description:
    'Vita is an AI-powered personal health assistant that uses advanced natural language processing to provide personalized wellness recommendations, lifestyle tracking, and intelligent health insights.',
  category: 'health-wellness',
  platform: 'web',
  award: {
    title: 'Winner (2nd Place)',
    event: 'Redpanda AI Hackathon',
    position: 'second',
  },
  keyFeatures: [
    {
      number: '01',
      title: 'AI Health Assistant',
      description:
        'Conversational AI that understands health context and delivers personalized wellness recommendations through natural language.',
    },
    {
      number: '02',
      title: 'Lifestyle Tracking',
      description:
        'Monitors daily habits and lifestyle patterns to surface actionable insights over time.',
    },
    {
      number: '03',
      title: 'Intelligent Health Insights',
      description:
        'Applies NLP-driven analysis to surface relevant health trends and proactive recommendations.',
    },
  ],
  tags: [
    { tag: 'AI Health Assistant' },
    { tag: 'Natural Language Processing' },
    { tag: 'Wellness' },
  ],
  links: {
    other: [
      {
        label: 'LinkedIn post',
        url: 'https://www.linkedin.com/posts/yesid-lopez-sierra_the-future-is-not-gonna-be-built-in-batches-activity-7265122984590290944-3qGg?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
  status: 'draft',
  featured: false,
}
