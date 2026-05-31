import type { PsychologistDemo } from '../payload-types'

export type PsychologistDemoSeed = Omit<PsychologistDemo, 'id' | 'createdAt' | 'updatedAt' | '_order'>

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

export const psychologistDemos: PsychologistDemoSeed[] = demos.map(([title, slug, specialty]) => ({
  title,
  slug,
  specialty,
  summary:
    'Demo de sitio web para profesional de salud mental, pensado para transmitir confianza, explicar servicios con claridad y facilitar que nuevos pacientes soliciten una consulta sin promesas exageradas.',
  demoUrl: `https://${slug}.demo.luloai.com`,
  status: 'published',
}))
