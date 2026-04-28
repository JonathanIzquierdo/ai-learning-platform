import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_PromptPatterns from './slides/S02_PromptPatterns'
import S03_StructuredOutput from './slides/S03_StructuredOutput'
import S04_Quiz1 from './slides/S04_Quiz1'
import S05_ToolUse from './slides/S05_ToolUse'
import S06_Debugging from './slides/S06_Debugging'
import S07_Iteration from './slides/S07_Iteration'
import S08_Evaluation from './slides/S08_Evaluation'
import S09_Quiz2 from './slides/S09_Quiz2'
import S10_Closing from './slides/S10_Closing'

export const module10 = {
  ...moduleConfig,
  totalSlides: 10,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_PromptPatterns },
    { type: 'content', component: S03_StructuredOutput },
    { type: 'quiz',    component: S04_Quiz1 },
    { type: 'content', component: S05_ToolUse },
    { type: 'content', component: S06_Debugging },
    { type: 'content', component: S07_Iteration },
    { type: 'content', component: S08_Evaluation },
    { type: 'quiz',    component: S09_Quiz2 },
    { type: 'content', component: S10_Closing },
  ]
}
