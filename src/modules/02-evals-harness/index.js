import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_Concepts from './slides/S02_Concepts'
import S03_Spectrum from './slides/S03_Spectrum'
import S04_FinBot from './slides/S04_FinBot'
import S05_Deterministic from './slides/S05_Deterministic'
import S06_LLMJudge from './slides/S06_LLMJudge'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_RAGEvals from './slides/S08_RAGEvals'
import S09_Performance from './slides/S09_Performance'
import S10_ModelComparison from './slides/S10_ModelComparison'
import S11_Quiz2 from './slides/S11_Quiz2'
import S12_Checklist from './slides/S12_Checklist'

export const module02 = {
  ...moduleConfig,
  totalSlides: 12,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_Concepts },
    { type: 'content', component: S03_Spectrum },
    { type: 'content', component: S04_FinBot },
    { type: 'content', component: S05_Deterministic },
    { type: 'content', component: S06_LLMJudge },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_RAGEvals },
    { type: 'content', component: S09_Performance },
    { type: 'content', component: S10_ModelComparison },
    { type: 'quiz',    component: S11_Quiz2 },
    { type: 'content', component: S12_Checklist },
  ]
}
