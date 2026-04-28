import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_ClaudeMdAgentsMd from './slides/S02_ClaudeMdAgentsMd'
import S03_SkillMd from './slides/S03_SkillMd'
import S04_Quiz1 from './slides/S04_Quiz1'
import S05_MemoryMd from './slides/S05_MemoryMd'
import S06_Subagents from './slides/S06_Subagents'
import S07_Quiz2 from './slides/S07_Quiz2'
import S08_Closing from './slides/S08_Closing'

export const module12 = {
  ...moduleConfig,
  totalSlides: 8,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_ClaudeMdAgentsMd },
    { type: 'content', component: S03_SkillMd },
    { type: 'quiz',    component: S04_Quiz1 },
    { type: 'content', component: S05_MemoryMd },
    { type: 'content', component: S06_Subagents },
    { type: 'quiz',    component: S07_Quiz2 },
    { type: 'content', component: S08_Closing },
  ]
}
