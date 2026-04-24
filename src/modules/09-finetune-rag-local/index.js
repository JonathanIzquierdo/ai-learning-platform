import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_Prompting from './slides/S02_Prompting'
import S03_RAG from './slides/S03_RAG'
import S04_FineTuning from './slides/S04_FineTuning'
import S05_LocalModels from './slides/S05_LocalModels'
import S06_Quiz1 from './slides/S06_Quiz1'
import S07_DecisionFramework from './slides/S07_DecisionFramework'
import S08_Quiz2 from './slides/S08_Quiz2'
import S09_Closing from './slides/S09_Closing'

export const module09 = {
  ...moduleConfig,
  totalSlides: 9,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_Prompting },
    { type: 'content', component: S03_RAG },
    { type: 'content', component: S04_FineTuning },
    { type: 'content', component: S05_LocalModels },
    { type: 'quiz',    component: S06_Quiz1 },
    { type: 'content', component: S07_DecisionFramework },
    { type: 'quiz',    component: S08_Quiz2 },
    { type: 'content', component: S09_Closing },
  ]
}
