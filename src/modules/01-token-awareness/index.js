import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_WhatIsAToken from './slides/S02_WhatIsAToken'
import S03_ModelPyramid from './slides/S03_ModelPyramid'
import S04_Quiz1 from './slides/S04_Quiz1'
import S05_AgentCostExplode from './slides/S05_AgentCostExplode'
import S06_BestPractices from './slides/S06_BestPractices'
import S07_Quiz2 from './slides/S07_Quiz2'
import S08_Summary from './slides/S08_Summary'

export const module01 = {
  ...moduleConfig,
  totalSlides: 8,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_WhatIsAToken },
    { type: 'content', component: S03_ModelPyramid },
    { type: 'quiz',    component: S04_Quiz1 },
    { type: 'content', component: S05_AgentCostExplode },
    { type: 'content', component: S06_BestPractices },
    { type: 'quiz',    component: S07_Quiz2 },
    { type: 'content', component: S08_Summary },
  ]
}
