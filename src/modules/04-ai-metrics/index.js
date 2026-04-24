import { moduleConfig } from './config'
import S01_Hook from './slides/S01_Hook'
import S02_QuantityTrap from './slides/S02_QuantityTrap'
import S03_NewQuestion from './slides/S03_NewQuestion'
import S04_Baseline from './slides/S04_Baseline'
import S05_Multipliers from './slides/S05_Multipliers'
import S06_EngineeringMetrics from './slides/S06_EngineeringMetrics'
import S07_Quiz1 from './slides/S07_Quiz1'
import S08_OpsFinanceMetrics from './slides/S08_OpsFinanceMetrics'
import S09_HRCustomerMetrics from './slides/S09_HRCustomerMetrics'
import S10_LeadingLagging from './slides/S10_LeadingLagging'
import S11_DesignYourKPIs from './slides/S11_DesignYourKPIs'
import S12_Quiz2 from './slides/S12_Quiz2'
import S13_Manifesto from './slides/S13_Manifesto'

export const module04 = {
  ...moduleConfig,
  totalSlides: 13,
  slides: [
    { type: 'content', component: S01_Hook },
    { type: 'content', component: S02_QuantityTrap },
    { type: 'content', component: S03_NewQuestion },
    { type: 'content', component: S04_Baseline },
    { type: 'content', component: S05_Multipliers },
    { type: 'content', component: S06_EngineeringMetrics },
    { type: 'quiz',    component: S07_Quiz1 },
    { type: 'content', component: S08_OpsFinanceMetrics },
    { type: 'content', component: S09_HRCustomerMetrics },
    { type: 'content', component: S10_LeadingLagging },
    { type: 'content', component: S11_DesignYourKPIs },
    { type: 'quiz',    component: S12_Quiz2 },
    { type: 'content', component: S13_Manifesto },
  ]
}
