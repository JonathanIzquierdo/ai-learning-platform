import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Table2, Calculator, Zap, Lightbulb } from 'lucide-react'
import ComparisonTable from './tabs/ComparisonTable'
import CostCalculator from './tabs/CostCalculator'
import TaskRecommender from './tabs/TaskRecommender'
import OptimizationGuide from './tabs/OptimizationGuide'

const TABS = [
  { id: 'compare', icon: Table2, en: 'Model Comparison', es: 'Comparativa de Modelos' },
  { id: 'calculator', icon: Calculator, en: 'Cost Calculator', es: 'Calculadora de Costos' },
  { id: 'recommend', icon: Zap, en: 'Task Recommender', es: 'Recomendador por Tarea' },
  { id: 'optimize', icon: Lightbulb, en: 'Optimization Guide', es: 'Guía de Optimización' },
]

export default function ModelAdvisor({ onBack }) {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const [activeTab, setActiveTab] = useState('compare')

  const renderTab = () => {
    switch (activeTab) {
      case 'compare': return <ComparisonTable lang={lang} />
      case 'calculator': return <CostCalculator lang={lang} />
      case 'recommend': return <TaskRecommender lang={lang} />
      case 'optimize': return <OptimizationGuide lang={lang} />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6">
          <button onClick={onBack}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            {lang === 'es' ? 'Volver' : 'Back'}
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            \uD83E\uDDED AI Model Advisor
          </h1>
          <p className="text-slate-400 text-base">
            {lang === 'es'
              ? 'Compará modelos, estimá costos y elegí el modelo correcto para cada tarea.'
              : 'Compare models, estimate costs, and pick the right model for every task.'}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}>
                <Icon size={16} />
                {tab[lang]}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}>
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
