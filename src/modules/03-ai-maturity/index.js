import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_Map from './slides/S02_Map'
import S03_Assistance from './slides/S03_Assistance'
import S04_Supervision from './slides/S04_Supervision'
import S05_Delegation from './slides/S05_Delegation'
import S06_DelegationMoment from './slides/S06_DelegationMoment'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_Orchestration from './slides/S08_Orchestration'
import S09_ContextEngineering from './slides/S09_ContextEngineering'
import S10_DontSkip from './slides/S10_DontSkip'
import S11_Measure from './slides/S11_Measure'
import S12_Quiz2 from './slides/S12_Quiz2'
import S13_WhereVisma from './slides/S13_WhereVisma'

export const module03 = {
  ...moduleConfig,
  totalSlides: 13,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_Map },
    { type: 'content', component: S03_Assistance },
    { type: 'content', component: S04_Supervision },
    { type: 'content', component: S05_Delegation },
    { type: 'content', component: S06_DelegationMoment },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_Orchestration },
    { type: 'content', component: S09_ContextEngineering },
    { type: 'content', component: S10_DontSkip },
    { type: 'content', component: S11_Measure },
    { type: 'quiz',    component: S12_Quiz2 },
    { type: 'content', component: S13_WhereVisma },
  ]
}
