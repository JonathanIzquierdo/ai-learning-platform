import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_ApprovedTools from './slides/S02_ApprovedTools'
import S03_DataSharing from './slides/S03_DataSharing'
import S04_Quiz1 from './slides/S04_Quiz1'
import S05_EmployeeMonitoring from './slides/S05_EmployeeMonitoring'
import S06_MeetingsProducts from './slides/S06_MeetingsProducts'
import S07_DevRules from './slides/S07_DevRules'
import S08_SecurityPractices from './slides/S08_SecurityPractices'
import S09_VerifyEthics from './slides/S09_VerifyEthics'
import S10_Quiz2 from './slides/S10_Quiz2'
import S11_Closing from './slides/S11_Closing'

export const module11 = {
  ...moduleConfig,
  totalSlides: 11,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_ApprovedTools },
    { type: 'content', component: S03_DataSharing },
    { type: 'quiz',    component: S04_Quiz1 },
    { type: 'content', component: S05_EmployeeMonitoring },
    { type: 'content', component: S06_MeetingsProducts },
    { type: 'content', component: S07_DevRules },
    { type: 'content', component: S08_SecurityPractices },
    { type: 'content', component: S09_VerifyEthics },
    { type: 'quiz',    component: S10_Quiz2 },
    { type: 'content', component: S11_Closing },
  ]
}
