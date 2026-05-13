import type { CaseStudy } from '../../payload-types'

export type CaseStudySeed = Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt'>

import { data as deuLebenInDeutschland2026 } from './deu-leben-in-deutschland-2026'
import { data as artikelDerDieDas } from './artikel-der-die-das'

export const caseStudies: CaseStudySeed[] = [deuLebenInDeutschland2026, artikelDerDieDas]
