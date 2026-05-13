import type { CaseStudySeed } from './index'

export const slug = 'artikel-der-die-das'

export const data: CaseStudySeed = {
  type: 'featured-project',
  title: 'Artikel: Der, Die, Das',
  slug,
  description:
    'An iOS app that helps German learners master noun articles (der/die/das) through a curated vocabulary of 1,000+ words across 50+ categories, complete with plurals, example sentences, and native-speaker audio pronunciation. No account, no subscription — fully free.',
  category: 'education',
  keyFeatures: [
    {
      number: '01',
      title: '1,000+ Words with Articles',
      description:
        'A rich vocabulary organized into intuitive categories with articles, plurals, and example sentences for real-world context.',
    },
    {
      number: '02',
      title: 'Audio Pronunciation',
      description:
        'Native-speaker audio and text-to-speech for accent training and confident pronunciation of every word.',
    },
    {
      number: '03',
      title: 'Smart Categories',
      description:
        '50+ categories and subcategories — from Wohnung and Essen to Natur — let learners navigate to exactly the words they need.',
    },
    {
      number: '04',
      title: 'Quick Search',
      description: 'Find any word instantly across all categories with smart, responsive search.',
    },
    {
      number: '05',
      title: 'Favorites & Custom Lists',
      description:
        'Build personalized study lists from preferred categories to focus practice on what matters most.',
    },
    {
      number: '06',
      title: 'Practice Mode',
      description: 'Built-in quizzes test article retention and reinforce learning through active recall.',
    },
    {
      number: '07',
      title: 'Dark Mode',
      description: 'Comfortable studying in any lighting condition — day or night.',
    },
    {
      number: '08',
      title: 'Free & Account-Free',
      description: 'No sign-up, no subscription — the full experience is available to every learner for free.',
    },
  ],
  tags: [
    { tag: 'iOS App' },
    { tag: 'German' },
    { tag: 'Language Learning' },
    { tag: 'Vocabulary' },
    { tag: 'Education' },
  ],
  links: {
    demo: 'https://apps.apple.com/de/app/artikel-der-die-das/id6752939441',
    website: 'https://derdiedas.luloai.com/',
  },
  status: 'published',
  featured: false,
}
