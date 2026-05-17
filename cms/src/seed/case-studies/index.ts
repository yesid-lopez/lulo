import type { CaseStudy } from '../../payload-types'

export type CaseStudySeed = Omit<CaseStudy, 'id' | 'createdAt' | 'updatedAt'>

export type LocaleCode = 'es' | 'de'

// Subset of CaseStudySeed limited to fields marked `localized: true` on the
// `case-studies` collection. Array entries align by index with the English
// `data` arrays; only the localized inner fields need to be provided.
export type LocalizedFields = {
  title?: string
  description?: string
  award?: {
    title?: string
    event?: string
  }
  keyFeatures?: Array<{
    title?: string
    description?: string
  }>
  tags?: Array<{
    tag: string
  }>
}

export type CaseStudyTranslations = Partial<Record<LocaleCode, LocalizedFields>>

export type CaseStudyEntry = {
  data: CaseStudySeed
  translations?: CaseStudyTranslations
}

import * as deuLebenInDeutschland2026 from './deu-leben-in-deutschland-2026'
import * as artikelDerDieDas from './artikel-der-die-das'
import * as photofolio from './photofolio'
import * as resumelo from './resumelo'
import * as yesidPlatformLab from './yesid-platform-lab'
import * as yesidPortfolio from './yesid-portfolio'

export const caseStudies: CaseStudyEntry[] = [
  { data: deuLebenInDeutschland2026.data, translations: deuLebenInDeutschland2026.translations },
  { data: artikelDerDieDas.data, translations: artikelDerDieDas.translations },
  { data: photofolio.data, translations: photofolio.translations },
  { data: resumelo.data, translations: resumelo.translations },
  { data: yesidPlatformLab.data, translations: yesidPlatformLab.translations },
  { data: yesidPortfolio.data, translations: yesidPortfolio.translations },
]
