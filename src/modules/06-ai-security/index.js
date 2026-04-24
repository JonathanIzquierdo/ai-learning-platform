import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_DataPrivacy from './slides/S02_DataPrivacy'
import S03_WhatNot from './slides/S03_WhatNot'
import S04_PromptInjection from './slides/S04_PromptInjection'
import S05_MCPRisks from './slides/S05_MCPRisks'
import S06_Credentials from './slides/S06_Credentials'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_GDPR from './slides/S08_GDPR'
import S09_BestPractices from './slides/S09_BestPractices'
import S10_Quiz2 from './slides/S10_Quiz2'
import S11_Closing from './slides/S11_Closing'

export const module06 = {
  ...moduleConfig,
  totalSlides: 11,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_DataPrivacy },
    { type: 'content', component: S03_WhatNot },
    { type: 'content', component: S04_PromptInjection },
    { type: 'content', component: S05_MCPRisks },
    { type: 'content', component: S06_Credentials },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_GDPR },
    { type: 'content', component: S09_BestPractices },
    { type: 'quiz',    component: S10_Quiz2 },
    { type: 'content', component: S11_Closing },
  ]
}
