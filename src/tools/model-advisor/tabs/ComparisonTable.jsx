import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpDown, Filter, Eye, EyeOff } from 'lucide-react'
import { MODELS, PROVIDERS, CATEGORIES, getProvider } from '../data'

const BADGE_CONFIG = {
  multimodal: { label: { en: '\uD83D\uDC41 Multimodal', es: '\uD83D\uDC41 Multimodal' }, color: 'bg-purple-500/20 text-purple-300' },
  openSource: { label: { en: '\uD83D\uDD13 Open Source', es: '\uD83D\uDD13 Open Source' }, color: 'bg-green-500/20 text-green-300' },
  reasoning: { label: { en: '\uD83E\uDDE0 Reasoning', es: '\uD83E\uDDE0 Razonamiento' }, color: 'bg-amber-500/20 text-amber-300' },
}

function costTier(price) {
  if (price <= 0.30) return { label: '$', color: 'text-green-400' }
  if (price <= 2.00) return { label: '$$', color: 'text-yellow-400' }
  if (price <= 10.00) return { label: '$$$', color: 'text-orange-400' }
  return { label: '$$$$', color: 'text-red-400' }
}

export default function ComparisonTable({ lang }) {
  const [providerFilter, setProviderFilter] = useState([])
  const [categoryFilter, setCategoryFilter] = useState([])
  const [sortKey, setSortKey] = useState('inputPrice')
  const [sortDir, setSortDir] = useState('asc')
  const [showFilters, setShowFilters] = useState(false)

  const toggleProvider = (id) => {
    setProviderFilter(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id])
  }
  const toggleCategory = (id) => {
    setCategoryFilter(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id])
  }

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const filtered = useMemo(() => {
    let list = [...MODELS]
    if (providerFilter.length > 0) list = list.filter(m => providerFilter.includes(m.provider))
    if (categoryFilter.length > 0) list = list.filter(m => categoryFilter.includes(m.category))
    list.sort((a, b) => {
      let va = a[sortKey], vb = b[sortKey]
      if (sortKey === 'contextNum') { va = a.contextNum; vb = b.contextNum }
      if (typeof va === 'string') va = va.toLowerCase()
      if (typeof vb === 'string') vb = vb.toLowerCase()
      if (va < vb) return sortDir === 'asc' ? -1 : 1
      if (va > vb) return sortDir === 'asc' ? 1 : -1
      return 0
    })
    return list
  }, [providerFilter, categoryFilter, sortKey, sortDir])

  const SortBtn = ({ label, field }) => (
    <button onClick={() => handleSort(field)}
      className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wide ${
        sortKey === field ? 'text-blue-400' : 'text-slate-500'
      } hover:text-blue-300 transition-colors`}>
      {label}
      <ArrowUpDown size={12} className={sortKey === field ? 'opacity-100' : 'opacity-40'} />
    </button>
  )

  return (
    <div>
      {/* Filter Toggle */}
      <button onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-4 transition-colors">
        {showFilters ? <EyeOff size={14} /> : <Filter size={14} />}
        {showFilters
          ? (lang === 'es' ? 'Ocultar filtros' : 'Hide filters')
          : (lang === 'es' ? 'Mostrar filtros' : 'Show filters')}
        {(providerFilter.length > 0 || categoryFilter.length > 0) && (
          <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            {providerFilter.length + categoryFilter.length}
          </span>
        )}
      </button>

      {/* Filters */}
      {showFilters && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
          className="bg-slate-800/50 rounded-xl p-4 mb-4 space-y-3 border border-slate-700/50">
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase mb-2">
              {lang === 'es' ? 'Proveedores' : 'Providers'}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {PROVIDERS.map(p => (
                <button key={p.id} onClick={() => toggleProvider(p.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    providerFilter.includes(p.id)
                      ? 'text-white shadow-sm'
                      : 'bg-slate-700/50 text-slate-400 hover:text-white'
                  }`}
                  style={providerFilter.includes(p.id) ? { background: p.color } : {}}>
                  {p.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold uppercase mb-2">
              {lang === 'es' ? 'Categorías' : 'Categories'}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map(c => (
                <button key={c.id} onClick={() => toggleCategory(c.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    categoryFilter.includes(c.id)
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-slate-400 hover:text-white'
                  }`}>
                  {c[lang]}
                </button>
              ))}
            </div>
          </div>
          {(providerFilter.length > 0 || categoryFilter.length > 0) && (
            <button onClick={() => { setProviderFilter([]); setCategoryFilter([]) }}
              className="text-xs text-red-400 hover:text-red-300 transition-colors">
              {lang === 'es' ? '\u2715 Limpiar filtros' : '\u2715 Clear filters'}
            </button>
          )}
        </motion.div>
      )}

      {/* Results count */}
      <p className="text-xs text-slate-500 mb-3">
        {filtered.length} {lang === 'es' ? 'modelos' : 'models'}
      </p>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-700/50">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-800/80 border-b border-slate-700/50">
              <th className="px-4 py-3 min-w-[180px]">
                <SortBtn label={lang === 'es' ? 'Modelo' : 'Model'} field="name" />
              </th>
              <th className="px-3 py-3">
                <span className="text-xs text-slate-500 font-semibold uppercase">
                  {lang === 'es' ? 'Proveedor' : 'Provider'}
                </span>
              </th>
              <th className="px-3 py-3">
                <SortBtn label="Input $/MTok" field="inputPrice" />
              </th>
              <th className="px-3 py-3">
                <SortBtn label="Output $/MTok" field="outputPrice" />
              </th>
              <th className="px-3 py-3">
                <SortBtn label={lang === 'es' ? 'Contexto' : 'Context'} field="contextNum" />
              </th>
              <th className="px-3 py-3">
                <span className="text-xs text-slate-500 font-semibold uppercase">
                  {lang === 'es' ? 'Velocidad' : 'Speed'}
                </span>
              </th>
              <th className="px-3 py-3 min-w-[120px]">
                <span className="text-xs text-slate-500 font-semibold uppercase">
                  {lang === 'es' ? 'Capacidades' : 'Capabilities'}
                </span>
              </th>
              <th className="px-3 py-3 min-w-[200px]">
                <span className="text-xs text-slate-500 font-semibold uppercase">
                  {lang === 'es' ? 'Caso de Uso' : 'Use Case'}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((model, i) => {
              const prov = getProvider(model.provider)
              const inputTier = costTier(model.inputPrice)
              const outputTier = costTier(model.outputPrice)
              return (
                <tr key={model.id}
                  className={`border-b border-slate-800/50 transition-colors hover:bg-slate-800/40 ${
                    i % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/10'
                  }`}>
                  <td className="px-4 py-3">
                    <span className="text-white font-medium text-sm">{model.name}</span>
                  </td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: prov.color + '20', color: prov.color }}>
                      {prov.name}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <span className={`font-mono text-sm ${inputTier.color}`}>
                      ${model.inputPrice.toFixed(2)}
                    </span>
                    <span className={`ml-1 text-xs ${inputTier.color} opacity-60`}>{inputTier.label}</span>
                  </td>
                  <td className="px-3 py-3">
                    <span className={`font-mono text-sm ${outputTier.color}`}>
                      ${model.outputPrice.toFixed(2)}
                    </span>
                    <span className={`ml-1 text-xs ${outputTier.color} opacity-60`}>{outputTier.label}</span>
                  </td>
                  <td className="px-3 py-3 text-slate-300 text-sm font-mono">{model.context}</td>
                  <td className="px-3 py-3 text-slate-400 text-xs">{model.speed[lang]}</td>
                  <td className="px-3 py-3">
                    <div className="flex flex-wrap gap-1">
                      {model.badges.map(b => (
                        <span key={b} className={`text-[10px] px-1.5 py-0.5 rounded-full ${BADGE_CONFIG[b].color}`}>
                          {BADGE_CONFIG[b].label[lang]}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-slate-400 text-xs leading-relaxed">{model.useCase[lang]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
