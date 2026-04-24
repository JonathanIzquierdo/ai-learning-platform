import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_MentalModel from './slides/S02_MentalModel'
import S03_PersonalAssistant from './slides/S03_PersonalAssistant'
import S04_Finance from './slides/S04_Finance'
import S05_HR from './slides/S05_HR'
import S06_OpsMarketing from './slides/S06_OpsMarketing'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_BAU from './slides/S08_BAU'
import S09_DelegateKeep from './slides/S09_DelegateKeep'
import S10_Quiz2 from './slides/S10_Quiz2'
import S11_Closing from './slides/S11_Closing'

export const module05 = {
  ...moduleConfig,
  totalSlides: 11,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_MentalModel },
    { type: 'content', component: S03_PersonalAssistant },
    { type: 'content', component: S04_Finance },
    { type: 'content', component: S05_HR },
    { type: 'content', component: S06_OpsMarketing },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_BAU },
    { type: 'content', component: S09_DelegateKeep },
    { type: 'quiz',    component: S10_Quiz2 },
    { type: 'content', component: S11_Closing },
  ]
}
