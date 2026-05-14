import type { CaseStudySeed } from './index'

export const slug = 'photofolio'

export const data: CaseStudySeed = {
  type: 'real-implementation',
  title: 'Photofolio — Travel Photography Portfolio',
  slug,
  description:
    'A personal travel photography portfolio that showcases curated photo series from trips across Austria, Colombia, Czech Republic, Germany, Italy, Poland, Spain, and Switzerland. Each country opens into a paginated gallery of high-resolution images, optimized for fast loading and immersive full-bleed viewing on any device.',
  category: 'entertainment',
  platform: 'web',
  keyFeatures: [
    {
      number: '01',
      title: 'Country-Based Collections',
      description:
        'Photos are organized by country, giving each trip its own dedicated gallery and cover image so visitors can browse by destination rather than scrolling through a single endless feed.',
    },
    {
      number: '02',
      title: 'Paginated Galleries',
      description:
        'Each country opens into a paginated viewer that keeps load times short and lets visitors step through a curated sequence one page at a time instead of dumping every shot at once.',
    },
    {
      number: '03',
      title: 'High-Resolution Image Delivery',
      description:
        'Images are served from Backblaze B2 cloud storage and resized on demand through Next.js Image, so visitors get the right resolution for their device without sacrificing visual quality.',
    },
    {
      number: '04',
      title: 'Immersive Cover Art',
      description:
        'Each country tile leads with a large cover photograph and the country name in bold typography, turning the index page itself into a visual table of contents.',
    },
    {
      number: '05',
      title: 'Responsive, Minimal Layout',
      description:
        'A clean, mobile-friendly grid puts the photography front and center with no distracting chrome — the work speaks first, the UI gets out of the way.',
    },
    {
      number: '06',
      title: 'Edge-Hosted on Vercel',
      description:
        'Deployed to Vercel for global edge caching and instant cold starts, so the gallery feels snappy whether visited from Bogotá, Berlin, or Tokyo.',
    },
  ],
  technologies: [
    { name: 'Next.js', category: 'framework' },
    { name: 'React', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Tailwind CSS', category: 'framework' },
    { name: 'Vercel', category: 'platform' },
    { name: 'Backblaze B2', category: 'service' },
  ],
  tags: [
    { tag: 'Portfolio' },
    { tag: 'Photography' },
    { tag: 'Travel' },
    { tag: 'Gallery' },
    { tag: 'Personal Project' },
  ],
  links: {
    website: 'https://photofolio-oz6pi414b-yesid-lopez.vercel.app',
    other: [
      {
        label: 'Browse trips',
        url: 'https://photofolio-oz6pi414b-yesid-lopez.vercel.app/trips',
      },
    ],
  },
  status: 'published',
  featured: false,
}
