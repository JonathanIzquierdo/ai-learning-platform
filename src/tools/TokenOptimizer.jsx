import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronRight, TrendingDown, BarChart3, ClipboardList } from 'lucide-react'

const STRATEGIES = [
  { id: 'model-routing', icon: String.fromCodePoint(0x1F3AF), title: { en: 'Choose the Right Model per Task', es: 'Elegir el Modelo Correcto por Tarea' }, impact: '40-90%', difficulty: { en: 'Easy', es: 'F\u00e1cil' }, diffColor: 'text-green-400', content: { en: 'The single highest-impact change. Most orgs use one model for everything.\n\n\u2022 Implement model routing: a cheap classifier decides which model handles each request\n\u2022 80/20 rule: 80% of tasks can be solved with economy/mid models. Only 20% need premium\n\u2022 Example: Switching from Claude Opus ($15/$75) to Haiku ($0.80/$4) for classification = 95% savings\n\u2022 A/B test cheaper models and measure if quality actually drops for each use case', es: 'El cambio con mayor impacto. La mayor\u00eda de las organizaciones usan un solo modelo para todo.\n\n\u2022 Implementar model routing: un clasificador barato decide qu\u00e9 modelo maneja cada request\n\u2022 Regla 80/20: el 80% de las tareas se resuelven con modelos economy/mid. Solo el 20% necesita premium\n\u2022 Ejemplo: Cambiar de Claude Opus ($15/$75) a Haiku ($0.80/$4) para clasificaci\u00f3n = 95% de ahorro\n\u2022 Hacer A/B test con modelos m\u00e1s baratos y medir si la calidad realmente baja' } },
  { id: 'prompt-caching', icon: String.fromCodePoint(0x1F4E6), title: { en: 'Prompt Caching', es: 'Prompt Caching' }, impact: '50-90%', difficulty: { en: 'Medium', es: 'Media' }, diffColor: 'text-yellow-400', content: { en: 'If your system prompt repeats between calls, caching slashes costs.\n\n\u2022 Anthropic: Cached tokens cost 10% of normal price\n\u2022 OpenAI: Automatic 50% discount for identical prompt prefixes\n\u2022 Google: Context caching with input discounts\n\u2022 Requirement: cached tokens must be an exact prefix\n\u2022 Tip: put system prompt and static context AT THE BEGINNING', es: 'Si el system prompt se repite entre llamadas, el caching reduce dr\u00e1sticamente el costo.\n\n\u2022 Anthropic: Tokens cacheados cuestan 10% del precio normal\n\u2022 OpenAI: Descuento autom\u00e1tico del 50% para prefijos id\u00e9nticos\n\u2022 Google: Context caching con descuento en inputs\n\u2022 Requisito: los tokens cacheados deben ser un prefijo exacto\n\u2022 Tip: poner system prompt y contexto est\u00e1tico AL PRINCIPIO' } },
  { id: 'reduce-input', icon: String.fromCodePoint(0x2702, 0xFE0F), title: { en: 'Reduce Input Tokens', es: 'Reducir Tokens de Input' }, impact: '20-50%', difficulty: { en: 'Easy', es: 'F\u00e1cil' }, diffColor: 'text-green-400', content: { en: 'Fewer tokens = lower cost. Every unnecessary token multiplies across thousands of calls.\n\n\u2022 Compact system prompts: remove redundancy, use bullet points\n\u2022 Don\u2019t send full code repos: use intelligent file selection\n\u2022 Structured output: JSON instead of free text reduces tokens\n\u2022 Truncate history: keep only the last N relevant turns\n\u2022 Preprocess data: clean and filter before sending to the model', es: 'Menos tokens = menos costo. Cada token innecesario se multiplica.\n\n\u2022 Compactar system prompts: eliminar redundancias, usar bullet points\n\u2022 No enviar repos completos: usar file selection inteligente\n\u2022 Structured output: JSON en vez de texto libre reduce tokens\n\u2022 Truncar historial: mantener solo los \u00faltimos N turnos relevantes\n\u2022 Preprocesar datos: limpiar y filtrar antes de enviar al modelo' } },
  { id: 'control-output', icon: String.fromCodePoint(0x1F4CF), title: { en: 'Control Output Tokens', es: 'Controlar Tokens de Output' }, impact: '30-60%', difficulty: { en: 'Easy', es: 'F\u00e1cil' }, diffColor: 'text-green-400', content: { en: 'Output tokens are 3-5x more expensive. Reducing them has the highest ROI.\n\n\u2022 max_tokens: set a reasonable limit on every API call\n\u2022 Explicit instructions: "respond in max 3 sentences"\n\u2022 Structured outputs: JSON schemas eliminate unnecessary tokens\n\u2022 Stop sequences: define stop tokens to cut generation\n\u2022 Streaming with cutoff: cut the stream when response is sufficient', es: 'Los tokens de output son 3-5x m\u00e1s caros. Reducirlos tiene el mayor ROI.\n\n\u2022 max_tokens: setear un l\u00edmite razonable en cada llamada API\n\u2022 Instrucciones expl\u00edcitas: "respond\u00e9 en m\u00e1ximo 3 oraciones"\n\u2022 Structured outputs: esquemas JSON reducen tokens innecesarios\n\u2022 Stop sequences: definir tokens de parada para cortar generaci\u00f3n\n\u2022 Streaming con corte: cortar el stream cuando la respuesta es suficiente' } },
  { id: 'memory-context', icon: String.fromCodePoint(0x1F9E0), title: { en: 'Memory & Context Management', es: 'Memory y Context Management' }, impact: '20-40%', difficulty: { en: 'Medium', es: 'Media' }, diffColor: 'text-yellow-400', content: { en: 'Intelligently manage what information stays in context.\n\n\u2022 Claude Memory: avoid repeating user context every message\n\u2022 Progressive summaries: summarize earlier turns in long conversations\n\u2022 Selective RAG: bring only the most relevant chunks\n\u2022 Sliding window: last N messages + summary of prior context', es: 'Gestionar inteligentemente qu\u00e9 informaci\u00f3n mantener en contexto.\n\n\u2022 Memory de Claude: no repetir contexto en cada mensaje\n\u2022 Res\u00famenes progresivos: resumir turnos anteriores en conversaciones largas\n\u2022 RAG selectivo: traer solo los chunks m\u00e1s relevantes\n\u2022 Sliding window: \u00faltimos N mensajes + resumen del contexto previo' } },
  { id: 'batching', icon: String.fromCodePoint(0x1F504), title: { en: 'Batching & API Optimization', es: 'Batching y Optimizaci\u00f3n de API' }, impact: '30-50%', difficulty: { en: 'Medium', es: 'Media' }, diffColor: 'text-yellow-400', content: { en: 'Use the API more efficiently.\n\n\u2022 Batch API (Anthropic/OpenAI): 50% discount processing in batches\n\u2022 Group requests: 1 call with 10 questions instead of 10 calls\n\u2022 Evaluate latency vs cost: use batch if no immediate response needed', es: 'Usar la API de forma m\u00e1s eficiente.\n\n\u2022 Batch API (Anthropic/OpenAI): 50% de descuento en lotes\n\u2022 Agrupar requests: 1 llamada con 10 preguntas en vez de 10 llamadas\n\u2022 Evaluar latencia vs costo: usar batch si no se necesita respuesta inmediata' } },
  { id: 'thinking', icon: String.fromCodePoint(0x26A1), title: { en: 'Extended Thinking Optimization', es: 'Optimizaci\u00f3n de Extended Thinking' }, impact: '20-50%', difficulty: { en: 'Medium', es: 'Media' }, diffColor: 'text-yellow-400', content: { en: 'Reasoning models use "thinking tokens" charged as output.\n\n\u2022 Thinking budget: use budget_tokens to limit how much the model thinks\n\u2022 Only when worth it: don\u2019t activate for simple tasks\n\u2022 Monitor thinking tokens to detect loops\n\u2022 Use o4-mini instead of o3 when reasoning isn\u2019t ultra-complex', es: 'Los modelos de razonamiento usan "thinking tokens" cobrados como output.\n\n\u2022 Budget de thinking: usar budget_tokens para limitar cu\u00e1nto piensa\n\u2022 Solo cuando vale la pena: no activar para tareas simples\n\u2022 Monitorear thinking tokens para detectar loops\n\u2022 Usar o4-mini en vez de o3 cuando no es ultra-complejo' } },
  { id: 'multi-provider', icon: String.fromCodePoint(0x1F310), title: { en: 'Multi-Provider Strategy', es: 'Estrategia Multi-Provider' }, impact: '15-30%', difficulty: { en: 'Advanced', es: 'Avanzada' }, diffColor: 'text-orange-400', content: { en: 'Don\u2019t marry a single provider.\n\n\u2022 Abstraction layer: LiteLLM, OpenRouter to switch models easily\n\u2022 Fallback chains: if a model fails, fall to an alternative\n\u2022 Price arbitrage: same model, different prices on different providers\n\u2022 Negotiate volume contracts for significant discounts', es: 'No casarse con un solo proveedor.\n\n\u2022 Abstraction layer: LiteLLM, OpenRouter para cambiar modelos\n\u2022 Fallback chains: si un modelo falla, caer a una alternativa\n\u2022 Arbitraje de precios: mismo modelo, distintos precios en proveedores\n\u2022 Negociar contratos por volumen para descuentos significativos' } },
]

const MONITORING = [
  { icon: String.fromCodePoint(0x1F4CA), title: { en: 'Usage Dashboard per API', es: 'Dashboard de Uso por API' }, items: { en: ['Anthropic Console \u2192 Usage', 'OpenAI Platform \u2192 Usage', 'Google AI Studio \u2192 Billing', 'Set budget alerts at 70% and 90%'], es: ['Anthropic Console \u2192 Usage', 'OpenAI Platform \u2192 Usage', 'Google AI Studio \u2192 Billing', 'Setear alertas al 70% y 90%'] } },
  { icon: String.fromCodePoint(0x1F4DD), title: { en: 'Per-Request Logging', es: 'Logging por Request' }, items: { en: ['Input/output tokens per request', 'Model, latency, status', 'User/team/project attribution', 'Tools: LangFuse, Helicone, W&B'], es: ['Tokens input/output por request', 'Modelo, latencia, status', 'Usuario/equipo/proyecto', 'Tools: LangFuse, Helicone, W&B'] } },
  { icon: String.fromCodePoint(0x1F3F7, 0xFE0F), title: { en: 'Tags & Attribution', es: 'Tags y Attribution' }, items: { en: ['metadata.user_id on every API call', 'Tags per project/feature/team', 'Weekly reports by tag', 'Identify top consumers'], es: ['metadata.user_id en cada API call', 'Tags por proyecto/feature/equipo', 'Reportes semanales por tag', 'Identificar top consumers'] } },
  { icon: String.fromCodePoint(0x1F6A8), title: { en: 'Anomaly Alerts', es: 'Alertas de Anomal\u00edas' }, items: { en: ['Alert if user exceeds X tokens/day', 'Alert if endpoint exceeds mean+2\u03c3', 'Alert on retry loops (broken prompts)', 'Grafana/Datadog dashboards'], es: ['Alerta si usuario supera X tokens/d\u00eda', 'Alerta si endpoint supera media+2\u03c3', 'Alerta en retry loops (prompts rotos)', 'Dashboards en Grafana/Datadog'] } },
  { icon: String.fromCodePoint(0x1F4B0), title: { en: 'Budget per Team', es: 'Budget por Equipo' }, items: { en: ['Monthly quotas per team', 'Rate limiting per user', 'Approval workflow for premium models', 'Review top 10 costliest requests'], es: ['Cuotas mensuales por equipo', 'Rate limiting por usuario', 'Approval para modelos premium', 'Review top 10 requests m\u00e1s caros'] } },
  { icon: String.fromCodePoint(0x1F50D), title: { en: 'Prompt Audit', es: 'Auditor\u00eda de Prompts' }, items: { en: ['Top 10 longest system prompts', 'Prompts with excessive history', 'Prompts not using caching', 'Duplicate or redundant templates'], es: ['Top 10 system prompts m\u00e1s largos', 'Prompts con historial excesivo', 'Prompts sin caching', 'Templates duplicados'] } },
]

const CHECKLIST = [
  { phase: { en: 'Week 1-2: Quick Wins', es: 'Semana 1-2: Quick Wins' }, color: '#6ee7b7', items: { en: ['Audit which models are used and for what', 'Identify simple tasks on premium models', 'Activate prompt caching for repetitive system prompts', 'Set max_tokens on all API calls', 'Configure spend alerts on all providers'], es: ['Auditar qu\u00e9 modelos se usan y para qu\u00e9', 'Identificar tareas simples en modelos premium', 'Activar prompt caching para system prompts repetitivos', 'Setear max_tokens en todas las llamadas', 'Configurar alertas de gasto en todos los proveedores'] } },
  { phase: { en: 'Week 3-4: Core Optimizations', es: 'Semana 3-4: Optimizaciones Core' }, color: '#60a5fa', items: { en: ['Implement model routing classifier', 'Migrate classification/extraction to economy models', 'Reduce system prompts by -30%', 'Implement per-request token logging', 'Create evals for top 5 use cases'], es: ['Implementar clasificador de model routing', 'Migrar clasificaci\u00f3n/extracci\u00f3n a modelos economy', 'Reducir system prompts en -30%', 'Implementar logging de tokens por request', 'Crear evals para top 5 casos de uso'] } },
  { phase: { en: 'Month 2: Architecture', es: 'Mes 2: Arquitectura' }, color: '#a78bfa', items: { en: ['Implement sliding window for long conversations', 'Use Batch API for non-urgent tasks', 'Test alternative models for mid-tier tasks', 'Implement structured outputs (JSON schema)', 'Configure monitoring dashboards'], es: ['Implementar sliding window para conversaciones largas', 'Usar Batch API para tareas no urgentes', 'Probar modelos alternativos para tareas mid-tier', 'Implementar structured outputs (JSON schema)', 'Configurar dashboards de monitoreo'] } },
  { phase: { en: 'Month 3+: Advanced', es: 'Mes 3+: Avanzado' }, color: '#fb923c', items: { en: ['Multi-provider setup with fallback chains', 'Continuous A/B model evaluation', 'Negotiate volume contracts', 'Budget allocation per team', 'Quarterly model strategy review'], es: ['Multi-provider con fallback chains', 'Evaluaci\u00f3n A/B continua de modelos', 'Negociar contratos por volumen', 'Budget allocation por equipo', 'Review trimestral de estrategia de modelos'] } },
]

function StrategyCard({ strategy, lang, isOpen, onToggle }) {
  const c = strategy
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden mb-3">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/50 transition-colors">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xl">{c.icon}</span>
          <span className="text-white text-sm font-semibold">{c.title[lang]}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-300">{lang === 'es' ? 'Ahorro' : 'Savings'}: {c.impact}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${c.diffColor}`}>{c.difficulty[lang]}</span>
        </div>
        {isOpen ? <ChevronDown size={16} className="text-emerald-400 shrink-0" /> : <ChevronRight size={16} className="text-slate-500 shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <div className="bg-slate-900/50 rounded-lg p-4 text-slate-400 text-sm whitespace-pre-wrap leading-relaxed">{c.content[lang]}</div>
        </div>
      )}
    </div>
  )
}

function ChecklistPhase({ phase, lang }) {
  const [checked, setChecked] = useState({})
  const toggle = (i) => setChecked(prev => ({ ...prev, [i]: !prev[i] }))
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-4" style={{ borderLeftColor: phase.color, borderLeftWidth: 3 }}>
      <p className="font-bold text-sm mb-3" style={{ color: phase.color }}>{phase.phase[lang]}</p>
      <div className="space-y-2">
        {phase.items[lang].map((item, i) => (
          <label key={i} className={`flex items-start gap-3 cursor-pointer text-sm transition-opacity ${checked[i] ? 'opacity-40 line-through' : 'text-slate-300'}`}>
            <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="mt-1 accent-emerald-400 shrink-0" />
            {item}
          </label>
        ))}
      </div>
    </div>
  )
}

export default function TokenOptimizer() {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'
  const [activeTab, setActiveTab] = useState('strategies')
  const [openStrategy, setOpenStrategy] = useState(null)

  const tabs = [
    { id: 'strategies', icon: <TrendingDown size={14} />, label: { en: 'Optimization Strategies', es: 'Estrategias de Optimizaci\u00f3n' } },
    { id: 'monitoring', icon: <BarChart3 size={14} />, label: { en: 'Monitoring & Governance', es: 'Monitoreo y Gobernanza' } },
    { id: 'checklist', icon: <ClipboardList size={14} />, label: { en: 'Implementation Checklist', es: 'Checklist de Implementaci\u00f3n' } },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10">
        <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
          {String.fromCodePoint(0x25C6)} {lang === 'es' ? 'Gu\u00eda de Optimizaci\u00f3n' : 'Optimization Guide'}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 mt-2 leading-tight">
          {lang === 'es' ? 'Optimizaci\u00f3n de ' : 'Token '}
          <span className="text-emerald-400">{lang === 'es' ? 'Tokens' : 'Optimization'}</span>
          {lang === 'es' ? ' y Costos LLM' : ' & LLM Costs'}
        </h1>
        <p className="text-slate-400 text-base max-w-2xl">
          {lang === 'es'
            ? 'Estrategias, monitoreo y plan de acci\u00f3n para reducir costos de tokens sin perder calidad.'
            : 'Strategies, monitoring, and action plan to reduce token costs without losing quality.'}
        </p>
        <div className="mt-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 text-sm text-emerald-200 max-w-2xl">
          {String.fromCodePoint(0x1F4A1)} {lang === 'es'
            ? 'Regla de oro: los tokens de output son 3-5x m\u00e1s caros que los de input. Optimizar respuestas tiene m\u00e1s impacto que reducir prompts.'
            : 'Golden rule: output tokens are 3-5x more expensive than input. Optimizing responses has more impact than reducing prompts.'}
        </div>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${activeTab === tab.id ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300'}`}>
            {tab.icon} {tab.label[lang]}
          </button>
        ))}
      </div>

      {activeTab === 'strategies' && (
        <div>
          <p className="text-slate-500 text-sm mb-4">{lang === 'es' ? 'Clic en cada estrategia para ver detalles.' : 'Click each strategy for details.'}</p>
          {STRATEGIES.map((s, i) => (
            <StrategyCard key={s.id} strategy={s} lang={lang} isOpen={openStrategy === i} onToggle={() => setOpenStrategy(openStrategy === i ? null : i)} />
          ))}
        </div>
      )}

      {activeTab === 'monitoring' && (
        <div>
          <p className="text-slate-500 text-sm mb-4">{lang === 'es' ? 'Sin visibilidad no hay optimizaci\u00f3n.' : 'Without visibility there\u2019s no optimization.'}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MONITORING.map((m, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
                <span className="text-2xl mb-2 block">{m.icon}</span>
                <p className="text-white text-sm font-semibold mb-2">{m.title[lang]}</p>
                <div className="space-y-1">
                  {m.items[lang].map((item, j) => (
                    <p key={j} className="text-slate-400 text-xs flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 shrink-0">{String.fromCodePoint(0x25B8)}</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
            {String.fromCodePoint(0x26A0, 0xFE0F)} {lang === 'es'
              ? 'Error com\u00fan: mirar solo el costo total sin desglosar por usuario, modelo, o caso de uso.'
              : 'Common mistake: looking only at total cost without breaking down by user, model, or use case.'}
          </div>
        </div>
      )}

      {activeTab === 'checklist' && (
        <div>
          <p className="text-slate-500 text-sm mb-4">{lang === 'es' ? 'Marc\u00e1 los pasos que ya completaste.' : 'Check off completed steps.'}</p>
          {CHECKLIST.map((phase, i) => (
            <ChecklistPhase key={i} phase={phase} lang={lang} />
          ))}
        </div>
      )}
    </div>
  )
}
