import type { CaseStudySeed, CaseStudyTranslations } from './index'

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

export const translations: CaseStudyTranslations = {
  es: {
    title: 'Photofolio — Portafolio de fotografía de viajes',
    description:
      'Un portafolio personal de fotografía de viajes que reúne series curadas de fotos de recorridos por Austria, Colombia, República Checa, Alemania, Italia, Polonia, España y Suiza. Cada país se abre en una galería paginada de imágenes en alta resolución, optimizada para carga rápida y visualización inmersiva a pantalla completa en cualquier dispositivo.',
    keyFeatures: [
      {
        title: 'Colecciones por país',
        description:
          'Las fotos están organizadas por país, dándole a cada viaje su propia galería e imagen de portada para que los visitantes naveguen por destino en vez de hacer scroll por un feed infinito.',
      },
      {
        title: 'Galerías paginadas',
        description:
          'Cada país abre un visor paginado que mantiene los tiempos de carga cortos y permite recorrer una secuencia curada página por página, en lugar de mostrar todas las fotos de golpe.',
      },
      {
        title: 'Entrega de imágenes en alta resolución',
        description:
          'Las imágenes se sirven desde el almacenamiento en la nube Backblaze B2 y se redimensionan bajo demanda con Next.js Image, así cada visitante recibe la resolución adecuada para su dispositivo sin sacrificar calidad visual.',
      },
      {
        title: 'Portadas inmersivas',
        description:
          'Cada tarjeta de país lleva al frente una fotografía de portada grande y el nombre del país en tipografía contundente, convirtiendo la página índice en una tabla visual de contenidos.',
      },
      {
        title: 'Diseño responsivo y minimalista',
        description:
          'Una cuadrícula limpia y adaptable a móvil pone la fotografía en el centro sin elementos de UI que distraigan: la obra habla primero, la interfaz se hace a un lado.',
      },
      {
        title: 'Alojado en el edge con Vercel',
        description:
          'Desplegado en Vercel para caché global en el edge y arranques en frío instantáneos, así la galería se siente ágil sea visitada desde Bogotá, Berlín o Tokio.',
      },
    ],
    tags: [
      { tag: 'Portafolio' },
      { tag: 'Fotografía' },
      { tag: 'Viajes' },
      { tag: 'Galería' },
      { tag: 'Proyecto personal' },
    ],
  },
  de: {
    title: 'Photofolio — Reisefotografie-Portfolio',
    description:
      'Ein persönliches Reisefotografie-Portfolio, das kuratierte Bildserien von Reisen durch Österreich, Kolumbien, Tschechien, Deutschland, Italien, Polen, Spanien und die Schweiz zeigt. Jedes Land öffnet sich in einer paginierten Galerie hochauflösender Bilder, optimiert für schnelles Laden und vollflächiges, immersives Betrachten auf jedem Gerät.',
    keyFeatures: [
      {
        title: 'Sammlungen nach Land',
        description:
          'Die Fotos sind nach Land geordnet, sodass jede Reise eine eigene Galerie und ein Titelbild bekommt — Besucher stöbern nach Reiseziel, statt durch einen endlosen Feed zu scrollen.',
      },
      {
        title: 'Paginierte Galerien',
        description:
          'Jedes Land öffnet einen paginierten Viewer, der die Ladezeiten kurz hält und Besucher Seite für Seite durch eine kuratierte Bildreihenfolge führt, statt alle Aufnahmen auf einmal abzuladen.',
      },
      {
        title: 'Hochauflösende Bildauslieferung',
        description:
          'Die Bilder werden aus dem Cloud-Speicher Backblaze B2 geliefert und über Next.js Image bedarfsgerecht skaliert — jedes Gerät erhält die passende Auflösung ohne Qualitätsverlust.',
      },
      {
        title: 'Immersive Titelbilder',
        description:
          'Jede Länder-Kachel beginnt mit einem großen Titelfoto und dem Ländernamen in fetter Typografie und macht so die Indexseite selbst zu einem visuellen Inhaltsverzeichnis.',
      },
      {
        title: 'Responsives, minimalistisches Layout',
        description:
          'Ein klares, mobilfreundliches Raster rückt die Fotografie in den Mittelpunkt — kein störendes UI-Chrom: das Werk spricht zuerst, die Oberfläche tritt zurück.',
      },
      {
        title: 'Edge-Hosting auf Vercel',
        description:
          'Auf Vercel deployt für globales Edge-Caching und sofortige Cold Starts — die Galerie fühlt sich schnell an, egal ob aus Bogotá, Berlin oder Tokio aufgerufen.',
      },
    ],
    tags: [
      { tag: 'Portfolio' },
      { tag: 'Fotografie' },
      { tag: 'Reisen' },
      { tag: 'Galerie' },
      { tag: 'Privates Projekt' },
    ],
  },
}
