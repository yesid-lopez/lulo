import type { CaseStudySeed } from './index'

const demos = [
  ['Daniela Rivas', 'daniela-rivas', 'Psicología clínica'],
  ['Jenny Psiquiatra', 'jenny-psiquiatra', 'Psiquiatría'],
  ['Mariana Toro', 'mariana-toro', 'Acompañamiento terapéutico'],
  ['Jenny Florez', 'jenny-florez', 'Psicoterapia'],
  ['María Fernanda España', 'maria-fernanda-espana', 'Terapia individual'],
  ['Katerin Osorio', 'katerin-osorio', 'Salud mental'],
  ['Verónica Mejía', 'veronica-mejia', 'Consulta online y presencial'],
  ['Catalina Rocha', 'catalina-rocha', 'Psicología para adultos'],
  ['Psicmariaqm', 'psicmariaqm', 'Marca profesional'],
  ['Juanita Gómez', 'juanita-gomez', 'Psicología clínica'],
  ['María Elvira', 'maria-elvira', 'Bienestar emocional'],
  ['Jim Ballester', 'jim-ballester', 'Servicios terapéuticos'],
  ['Laura Galeano Psicóloga', 'laura-galeano-psicologa', 'Psicología profesional'],
  ['Camila Duque', 'camila-duque', 'Terapia y acompañamiento'],
] as const

export const data: CaseStudySeed[] = demos.map(([title, slug, specialty]) => ({
  type: 'psychologist-demo',
  title,
  slug,
  description:
    'Demo de sitio web para profesional de salud mental, pensado para transmitir confianza, explicar servicios con claridad y facilitar que nuevos pacientes soliciten una consulta sin promesas exageradas.',
  category: 'health-wellness',
  platform: 'web',
  keyFeatures: [
    {
      number: '01',
      title: 'Presentación profesional',
      description:
        'Hero, biografía breve y secciones de confianza para explicar quién atiende, cuál es su enfoque y qué puede esperar una persona antes de escribir.',
    },
    {
      number: '02',
      title: 'Servicios claros',
      description:
        'Bloques adaptables para especialidades, modalidad online o presencial, población atendida y preguntas frecuentes relevantes.',
    },
    {
      number: '03',
      title: 'Ruta de contacto visible',
      description:
        'Llamados a la acción para WhatsApp, agenda o formulario, ubicados para reducir fricción sin presionar al visitante.',
    },
  ],
  technologies: [
    { name: 'Next.js', category: 'framework' },
    { name: 'React', category: 'framework' },
    { name: 'Tailwind CSS', category: 'framework' },
  ],
  tags: [
    { tag: specialty },
    { tag: 'Psicología' },
    { tag: 'Sitio profesional' },
    { tag: 'Agenda de consultas' },
  ],
  links: {
    demo: `https://${slug}.demo.luloai.com`,
  },
  status: 'published',
  featured: false,
}))
