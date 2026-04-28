import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, TrendingDown, Crown, DollarSign, Percent } from 'lucide-react'
import { TASK_RECOMMENDATIONS, getModel, getProvider } from '../data'

function ModelRecommendation({ modelId, rank, lang, label }) {
  const model = getModel(modelId)
  if (!model) return null
  const prov = getProvider(model.provider)

  const costPer1K = ((500 / 1_000_000) * model.inputPrice + (1000 / 1_000_000) * model.outputPrice) * 1000

  return (
    <div className="flex items-center gap-3 py-2">
      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
        rank === 1 ? 'bg-amber-500/20 text-amber-300' :
        rank === 2 ? 'bg-slate-500/20 text-slate-300' :
        'bg-slate-700/30 text-slate-500'
      }`}>
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white font-medium text-sm">{model.name}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
            style={{ background: prov.color + '20', color: prov.color }}>
            {prov.name}
          </span>
          {label && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
              label === 'budget' ? 'bg-green-500/20 text-green-300' : 'bg-purple-500/20 text-purple-300'
            }`}>
              {label === 'budget' ? '\uD83D\uDCB0 Budget' : '\uD83D\uDC51 Premium'}
            </span>
          )}
        </div>
        <p className="text-slate-500 text-xs mt-0.5">{model.useCase[lang]}</p>
      </div>
      <div className="text-right shrink-0">
        <div className="text-slate-300 font-mono text-xs">
          ${costPer1K.toFixed(2)}
        </div>
        <div className="text-slate-600 text-[10px]">
          /1K {lang === 'es' ? 'consultas' : 'queries'}
        </div>
      </div>
    </div>
  )
}

export default function TaskRecommender({ lang }) {
  const [selectedTask, setSelectedTask] = useState(null)
  const [searchText, setSearchText] = useState('')

  const KEYWORD_MAP = {
    'chatbot': ['chat', 'bot', 'customer', 'support', 'atención', 'cliente', 'soporte'],
    'code-gen': ['code', 'coding', 'programming', 'develop', 'código', 'programar', 'generar código'],
    'code-review': ['review', 'pr', 'pull request', 'revisar', 'revisión'],
    'long-docs': ['document', 'pdf', 'long', 'analysis', 'documento', 'análisis', 'largo'],
    'summaries': ['summary', 'summarize', 'resumen', 'resumir', 'tldr'],
    'classification': ['classify', 'categorize', 'label', 'tag', 'clasificar', 'categorizar', 'etiquetar'],
    'translation': ['translate', 'language', 'traducir', 'idioma', 'traducción'],
    'content': ['content', 'marketing', 'email', 'blog', 'copy', 'write', 'contenido', 'escribir', 'redactar'],
    'data-analysis': ['data', 'table', 'csv', 'excel', 'analysis', 'datos', 'tabla', 'análisis'],
    'reasoning': ['reason', 'math', 'logic', 'complex', 'think', 'razonar', 'matemática', 'lógica', 'complejo'],
    'agents': ['agent', 'autonomous', 'automate', 'tool', 'agente', 'autónomo', 'automatizar'],
    'images': ['image', 'vision', 'photo', 'picture', 'imagen', 'foto', 'visual'],
    'extraction': ['extract', 'structured', 'json', 'parse', 'extraer', 'estructurado', 'parsear'],
  }

  const matchedTasks = useMemo(() => {
    if (!searchText.trim()) return []
    const lower = searchText.toLowerCase()
    const scores = TASK_RECOMMENDATIONS.map(task => {
      const keywords = KEYWORD_MAP[task.id] || []
      const titleMatch = task.title.en.toLowerCase().includes(lower) || task.title.es.toLowerCase().includes(lower)
      const keywordMatch = keywords.some(k => lower.includes(k) || k.includes(lower))
      return { task, score: (titleMatch ? 2 : 0) + (keywordMatch ? 1 : 0) }
    })
    return scores.filter(s => s.score > 0).sort((a, b) => b.score - a.score).map(s => s.task)
  }, [searchText])

  const displayTask = selectedTask || (matchedTasks.length > 0 ? matchedTasks[0] : null)

  const getSavings = (task) => {
    const budgetModel = getModel(task.budget)
    const premiumModel = getModel(task.premium)
    if (!budgetModel || !premiumModel) return 0
    const budgetCost = (500 / 1e6) * budgetModel.inputPrice + (1000 / 1e6) * budgetModel.outputPrice
    const premiumCost = (500 / 1e6) * premiumModel.inputPrice + (1000 / 1e6) * premiumModel.outputPrice
    if (premiumCost === 0) return 0
    return Math.round(((premiumCost - budgetCost) / premiumCost) * 100)
  }

  return (
    <div className="space-y-6">
      {/* Free text search */}
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={searchText}
          onChange={e => { setSearchText(e.target.value); setSelectedTask(null) }}
          placeholder={lang === 'es' ? 'Describí qué necesitás hacer...' : 'Describe what you need to do...'}
          className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white text-sm
            placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all" />
      </div>

      {/* Task grid */}
      <div>
        <p className="text-xs text-slate-500 font-semibold uppercase mb-3">
          {lang === 'es' ? 'O seleccioná un tipo de tarea' : 'Or select a task type'}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {TASK_RECOMMENDATIONS.map(task => (
            <button key={task.id} onClick={() => { setSelectedTask(task); setSearchText('') }}
              className={`text-left px-3 py-2.5 rounded-xl text-sm transition-all border ${
                displayTask?.id === task.id
                  ? 'bg-blue-600/10 border-blue-500/40 text-white'
                  : 'bg-slate-800/30 border-slate-700/30 text-slate-400 hover:text-white hover:border-slate-600'
              }`}>
              <span className="text-lg">{task.icon}</span>
              <p className="text-xs mt-1 leading-snug">{task.title[lang]}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recommendation Result */}
      <AnimatePresence mode="wait">
        {displayTask && (
          <motion.div key={displayTask.id}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-5 space-y-4">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  {displayTask.icon} {displayTask.title[lang]}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{displayTask.reason[lang]}</p>
              </div>
              <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5">
                <Percent size={14} className="text-green-400" />
                <span className="text-green-300 text-sm font-semibold">
                  {getSavings(displayTask)}% {lang === 'es' ? 'ahorro' : 'savings'}
                </span>
                <span className="text-green-500/60 text-xs">
                  budget vs premium
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase mb-2">
                Top 3 {lang === 'es' ? 'Recomendados' : 'Recommended'}
              </p>
              <div className="divide-y divide-slate-700/30">
                {displayTask.models.map((modelId, i) => (
                  <ModelRecommendation key={modelId} modelId={modelId} rank={i + 1} lang={lang} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                <p className="text-[10px] text-green-500 font-semibold uppercase flex items-center gap-1 mb-1">
                  <DollarSign size={10} /> {lang === 'es' ? 'Opción Budget' : 'Budget Option'}
                </p>
                <ModelRecommendation modelId={displayTask.budget} rank={0} lang={lang} label="budget" />
              </div>
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
                <p className="text-[10px] text-purple-500 font-semibold uppercase flex items-center gap-1 mb-1">
                  <Crown size={10} /> {lang === 'es' ? 'Opción Premium' : 'Premium Option'}
                </p>
                <ModelRecommendation modelId={displayTask.premium} rank={0} lang={lang} label="premium" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
