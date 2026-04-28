import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Users, MessageSquare, Hash, Calendar, TrendingDown, Award } from 'lucide-react'
import { MODELS, getProvider } from '../data'

function Slider({ label, icon: Icon, value, onChange, min, max, step, suffix }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-300">
          <Icon size={14} className="text-blue-400" />
          {label}
        </label>
        <span className="text-white font-mono text-sm font-semibold">
          {value.toLocaleString()}{suffix || ''}
        </span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none bg-slate-700 cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500
          [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-500/30
          [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:border-0" />
      <div className="flex justify-between text-[10px] text-slate-600">
        <span>{min.toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default function CostCalculator({ lang }) {
  const [users, setUsers] = useState(10)
  const [queriesPerDay, setQueriesPerDay] = useState(20)
  const [inputTokens, setInputTokens] = useState(500)
  const [outputTokens, setOutputTokens] = useState(1000)
  const [workDays, setWorkDays] = useState(22)

  const results = useMemo(() => {
    const totalQueriesMonth = users * queriesPerDay * workDays
    const totalInputTokensMonth = totalQueriesMonth * inputTokens
    const totalOutputTokensMonth = totalQueriesMonth * outputTokens

    return MODELS.map(model => {
      const inputCost = (totalInputTokensMonth / 1_000_000) * model.inputPrice
      const outputCost = (totalOutputTokensMonth / 1_000_000) * model.outputPrice
      const totalCost = inputCost + outputCost
      const costPerUser = totalCost / users

      return {
        ...model,
        totalCost,
        costPerUser,
        totalInputTokensMonth,
        totalOutputTokensMonth,
      }
    }).sort((a, b) => a.totalCost - b.totalCost)
  }, [users, queriesPerDay, inputTokens, outputTokens, workDays])

  const cheapest = results[0]
  const maxCost = results[results.length - 1]?.totalCost || 1

  const sweetSpot = results.find(m =>
    ['general-premium', 'coding', 'reasoning'].includes(m.category) && m.totalCost < maxCost * 0.3
  ) || results[Math.floor(results.length * 0.3)]

  const totalQueries = users * queriesPerDay * workDays

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5 space-y-5">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
          <Hash size={14} className="text-blue-400" />
          {lang === 'es' ? 'Parámetros de Uso' : 'Usage Parameters'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Slider icon={Users}
            label={lang === 'es' ? 'Usuarios' : 'Users'}
            value={users} onChange={setUsers} min={1} max={500} step={1} />
          <Slider icon={MessageSquare}
            label={lang === 'es' ? 'Consultas/usuario/día' : 'Queries/user/day'}
            value={queriesPerDay} onChange={setQueriesPerDay} min={1} max={200} step={1} />
          <Slider icon={Hash}
            label={lang === 'es' ? 'Tokens input/consulta' : 'Input tokens/query'}
            value={inputTokens} onChange={setInputTokens} min={100} max={5000} step={50} />
          <Slider icon={Hash}
            label={lang === 'es' ? 'Tokens output/consulta' : 'Output tokens/query'}
            value={outputTokens} onChange={setOutputTokens} min={100} max={5000} step={50} />
          <Slider icon={Calendar}
            label={lang === 'es' ? 'Días laborales/mes' : 'Work days/month'}
            value={workDays} onChange={setWorkDays} min={1} max={31} step={1} />
        </div>
        <div className="pt-3 border-t border-slate-700/50 flex flex-wrap gap-4 text-xs text-slate-400">
          <span>{lang === 'es' ? 'Total consultas/mes' : 'Total queries/month'}: <strong className="text-white">{totalQueries.toLocaleString()}</strong></span>
          <span>{lang === 'es' ? 'Tokens input/mes' : 'Input tokens/month'}: <strong className="text-white">{(totalQueries * inputTokens).toLocaleString()}</strong></span>
          <span>{lang === 'es' ? 'Tokens output/mes' : 'Output tokens/month'}: <strong className="text-white">{(totalQueries * outputTokens).toLocaleString()}</strong></span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        <h3 className="text-white font-semibold text-sm flex items-center gap-2">
          <TrendingDown size={14} className="text-green-400" />
          {lang === 'es' ? 'Ranking por Costo Mensual (menor a mayor)' : 'Ranked by Monthly Cost (low to high)'}
        </h3>

        <div className="space-y-1.5">
          {results.map((model, i) => {
            const prov = getProvider(model.provider)
            const isCheapest = model.id === cheapest?.id
            const isSweet = model.id === sweetSpot?.id
            const barWidth = maxCost > 0 ? (model.totalCost / maxCost) * 100 : 0

            return (
              <motion.div key={model.id}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.02 }}
                className={`relative bg-slate-800/40 rounded-lg px-4 py-3 border transition-all ${
                  isCheapest ? 'border-green-500/40 bg-green-500/5' :
                  isSweet ? 'border-amber-500/40 bg-amber-500/5' :
                  'border-slate-700/30'
                }`}>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-slate-600 text-xs font-mono w-6 text-right shrink-0">
                      {i + 1}.
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-white font-medium text-sm">{model.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                          style={{ background: prov.color + '20', color: prov.color }}>
                          {prov.name}
                        </span>
                        {isCheapest && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-300 font-medium flex items-center gap-1">
                            <TrendingDown size={10} /> {lang === 'es' ? 'Más barato' : 'Cheapest'}
                          </span>
                        )}
                        {isSweet && !isCheapest && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium flex items-center gap-1">
                            <Award size={10} /> Sweet Spot
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-white font-mono text-sm font-semibold">
                      ${model.totalCost.toFixed(2)}
                    </div>
                    <div className="text-slate-500 text-[10px]">
                      ${model.costPerUser.toFixed(2)}/{lang === 'es' ? 'usuario' : 'user'}
                    </div>
                  </div>
                </div>
                {/* Bar */}
                <div className="absolute inset-y-0 left-0 rounded-lg opacity-10"
                  style={{
                    width: `${barWidth}%`,
                    background: isCheapest ? '#22c55e' : isSweet ? '#f59e0b' : prov.color,
                  }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
