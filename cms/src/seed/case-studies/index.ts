import type { CaseStudy } from '../../payload-types'

export type CaseStudySeed = Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt'>

import { data as deuLebenInDeutschland2026 } from './deu-leben-in-deutschland-2026'
import { data as artikelDerDieDas } from './artikel-der-die-das'
import { data as resumelo } from './resumelo'
import { data as vita } from './vita'
import { data as clever } from './clever'
import { data as medivise } from './medivise'
import { data as studyBuddy } from './study-buddy'

export const caseStudies: CaseStudySeed[] = [
  deuLebenInDeutschland2026,
  artikelDerDieDas,
  resumelo,
  vita,
  clever,
  medivise,
  studyBuddy,
]
