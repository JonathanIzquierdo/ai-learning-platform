import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { OPTIMIZATION_STRATEGIES } from '../data'

function StrategyCard({ strategy, lang, index }) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-slate-800/50 transition-colors">
        <span className="text-2xl shrink-0">{strategy.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-semibold text-sm">{strategy.title[lang]}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 font-semibold">
              {lang === 'es' ? 'Ahorro' : 'Savings'}: {strategy.savings}
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1 line-clamp-1">{strategy.description[lang]}</p>
        </div>
        <ChevronDown size={16} className={`text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden">
            <div className="px-5 pb-5 pt-0 space-y-4">
              <div className="pl-10">
                <p className="text-slate-300 text-sm leading-relaxed">{strategy.description[lang]}</p>
              </div>

              {strategy.example && (
                <div className="ml-10 bg-slate-900/50 border border-slate-700/30 rounded-lg p-4">
                  <p className="text-[10px] text-blue-400 font-semibold uppercase mb-2">
                    {lang === 'es' ? 'Ejemplo con números' : 'Example with numbers'}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">{strategy.example[lang]}</p>
                </div>
              )}

              {strategy.tools && (
                <div className="ml-10 space-y-2">
                  <p className="text-[10px] text-blue-400 font-semibold uppercase mb-2">
                    {lang === 'es' ? 'Herramientas Recomendadas' : 'Recommended Tools'}
                  </p>
                  {strategy.tools.map(tool => (
                    <div key={tool.name}
                      className="flex items-center gap-3 bg-slate-900/30 border border-slate-700/30 rounded-lg px-3 py-2.5">
                      <ExternalLink size={12} className="text-slate-600 shrink-0" />
                      <div>
                        <span className="text-white text-sm font-medium">{tool.name}</span>
                        <span className="text-slate-500 text-xs ml-2">{tool.desc[lang]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function OptimizationGuide({ lang }) {
  const totalSavings = '60\u201380%'

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl p-5">
        <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
          \uD83D\uDCA1 {lang === 'es'
            ? 'Combinando estas estrategias podés ahorrar '
            : 'Combining these strategies can save you '}
          <span className="text-green-400 font-bold">{totalSavings}</span>
          {lang === 'es' ? ' en costos de IA' : ' on AI costs'}
        </h3>
        <p className="text-slate-400 text-sm">
          {lang === 'es'
            ? 'Cada estrategia se puede aplicar de forma independiente. El mayor impacto viene de Model Routing + Prompt Caching.'
            : 'Each strategy can be applied independently. The biggest impact comes from Model Routing + Prompt Caching.'}
        </p>
      </div>

      {/* Strategy Cards */}
      <div className="space-y-2">
        {OPTIMIZATION_STRATEGIES.map((strategy, i) => (
          <StrategyCard key={strategy.id} strategy={strategy} lang={lang} index={i} />
        ))}
      </div>

      {/* Quick reference summary */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5">
        <h4 className="text-white font-semibold text-sm mb-3">
          {lang === 'es' ? '\u26A1 Referencia Rápida — \u00BFPor dónde empezar?' : '\u26A1 Quick Reference — Where to Start?'}
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-3">
            <span className="bg-green-500/20 text-green-300 text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5">1</span>
            <p className="text-slate-300">
              {lang === 'es'
                ? 'Empezá por Model Routing: usá un modelo barato (GPT-4.1-nano o Gemini Flash) para el 80% del tráfico simple.'
                : 'Start with Model Routing: use a cheap model (GPT-4.1-nano or Gemini Flash) for 80% of simple traffic.'}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-green-500/20 text-green-300 text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5">2</span>
            <p className="text-slate-300">
              {lang === 'es'
                ? 'Activá Prompt Caching en Anthropic/OpenAI si tenés system prompts grandes.'
                : 'Enable Prompt Caching on Anthropic/OpenAI if you have large system prompts.'}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-green-500/20 text-green-300 text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5">3</span>
            <p className="text-slate-300">
              {lang === 'es'
                ? 'Medí todo con Helicone o LiteLLM para ver dónde se va la plata.'
                : 'Measure everything with Helicone or LiteLLM to see where the money goes.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
