import type { CaseStudy } from '../../payload-types'

export type CaseStudySeed = Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt'>

import { data as deuLebenInDeutschland2026 } from './deu-leben-in-deutschland-2026'
import { data as artikelDerDieDas } from './artikel-der-die-das'
import { data as resumelo } from './resumelo'
import { data as yesidPlatformLab } from './yesid-platform-lab'
import { data as yesidPortfolio } from './yesid-portfolio'

export const caseStudies: CaseStudySeed[] = [
  deuLebenInDeutschland2026,
  artikelDerDieDas,
  resumelo,
  yesidPlatformLab,
  yesidPortfolio,
]
