import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_Instructions from './slides/S02_Instructions'
import S03_Memory from './slides/S03_Memory'
import S04_Knowledge from './slides/S04_Knowledge'
import S05_ToolsExamples from './slides/S05_ToolsExamples'
import S06_Quiz1 from './slides/S06_Quiz1'
import S07_WindowManagement from './slides/S07_WindowManagement'
import S08_InPractice from './slides/S08_InPractice'
import S09_Quiz2 from './slides/S09_Quiz2'
import S10_Closing from './slides/S10_Closing'

export const module08 = {
  ...moduleConfig,
  totalSlides: 10,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_Instructions },
    { type: 'content', component: S03_Memory },
    { type: 'content', component: S04_Knowledge },
    { type: 'content', component: S05_ToolsExamples },
    { type: 'quiz',    component: S06_Quiz1 },
    { type: 'content', component: S07_WindowManagement },
    { type: 'content', component: S08_InPractice },
    { type: 'quiz',    component: S09_Quiz2 },
    { type: 'content', component: S10_Closing },
  ]
}
