import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_WhatIsLLM from './slides/S02_WhatIsLLM'
import S03_Tokens from './slides/S03_Tokens'
import S04_Prompts from './slides/S04_Prompts'
import S05_ModelLandscape from './slides/S05_ModelLandscape'
import S06_Temperature from './slides/S06_Temperature'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_Agents from './slides/S08_Agents'
import S09_Tools from './slides/S09_Tools'
import S10_MCP from './slides/S10_MCP'
import S11_Skills from './slides/S11_Skills'
import S12_RAG from './slides/S12_RAG'
import S13_Quiz2 from './slides/S13_Quiz2'
import S14_Glossary from './slides/S14_Glossary'
import S15_Map from './slides/S15_Map'

export const module00 = {
  ...moduleConfig,
  totalSlides: 15,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_WhatIsLLM },
    { type: 'content', component: S03_Tokens },
    { type: 'content', component: S04_Prompts },
    { type: 'content', component: S05_ModelLandscape },
    { type: 'content', component: S06_Temperature },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_Agents },
    { type: 'content', component: S09_Tools },
    { type: 'content', component: S10_MCP },
    { type: 'content', component: S11_Skills },
    { type: 'content', component: S12_RAG },
    { type: 'quiz',    component: S13_Quiz2 },
    { type: 'content', component: S14_Glossary },
    { type: 'content', component: S15_Map },
  ]
}
