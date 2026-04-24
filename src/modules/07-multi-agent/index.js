import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_Sequential from './slides/S02_Sequential'
import S03_Parallel from './slides/S03_Parallel'
import S04_Hierarchical from './slides/S04_Hierarchical'
import S05_Loop from './slides/S05_Loop'
import S06_Handoff from './slides/S06_Handoff'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_Combining from './slides/S08_Combining'
import S09_Observability from './slides/S09_Observability'
import S10_Quiz2 from './slides/S10_Quiz2'
import S11_Closing from './slides/S11_Closing'

export const module07 = {
  ...moduleConfig,
  totalSlides: 11,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_Sequential },
    { type: 'content', component: S03_Parallel },
    { type: 'content', component: S04_Hierarchical },
    { type: 'content', component: S05_Loop },
    { type: 'content', component: S06_Handoff },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_Combining },
    { type: 'content', component: S09_Observability },
    { type: 'quiz',    component: S10_Quiz2 },
    { type: 'content', component: S11_Closing },
  ]
}
