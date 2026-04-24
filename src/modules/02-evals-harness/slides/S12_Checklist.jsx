import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '🧪 Module complete!',
    title: 'Your eval checklist.',
    subtitle: 'Before shipping any AI feature, run through this list.',
    checklist: [
      { category: 'Deterministic', color: '#36B37E', items: [
        'Output schema / format validation',
        'Required fields present',
        'No PII or forbidden content (regex)',
        'Exact match on factual outputs',
      ]},
      { category: 'RAG Quality', color: '#00B8D9', items: [
        'Context relevance (retrieved docs match query)',
        'Context recall (all relevant docs retrieved)',
        'Faithfulness (answer grounded in context)',
        'Answer relevance (response addresses the question)',
      ]},
      { category: 'LLM Quality', color: '#6554C0', items: [
        'LLM judge with clear rubric and examples',
        'Human validation sample on judge outputs',
        'Randomized order to avoid position bias',
      ]},
      { category: 'Performance', color: '#FF991F', items: [
        'Latency thresholds (p95 defined per use case)',
        'Token consumption baseline per feature',
        'Cost per query tracked and alerted',
        'Error rate regression threshold set',
        'Consistency check (multi-run variance)',
      ]},
    ],
    closing: 'Evals are not a one-time thing. They are your ongoing contract with production quality. Automate them, run them on every change, and use them to make confident decisions about models, prompts, and pipelines.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '🧪 ¡Módulo completado!',
    title: 'Tu checklist de evals.',
    subtitle: 'Antes de publicar cualquier feature de IA, revisá esta lista.',
    checklist: [
      { category: 'Determinísticos', color: '#36B37E', items: [
        'Validación de schema / formato de output',
        'Campos requeridos presentes',
        'Sin PII ni contenido prohibido (regex)',
        'Exact match en outputs factuales',
      ]},
      { category: 'Calidad RAG', color: '#00B8D9', items: [
        'Relevancia del contexto (docs recuperados coinciden con la query)',
        'Recall del contexto (todos los docs relevantes recuperados)',
        'Fidelidad (respuesta fundamentada en el contexto)',
        'Relevancia de la respuesta (responde la pregunta)',
      ]},
      { category: 'Calidad del LLM', color: '#6554C0', items: [
        'Juez LLM con rúbrica clara y ejemplos',
        'Validación humana en muestra de outputs del juez',
        'Orden aleatorio para evitar sesgo de posición',
      ]},
      { category: 'Performance', color: '#FF991F', items: [
        'Umbrales de latencia (p95 definido por caso de uso)',
        'Baseline de consumo de tokens por feature',
        'Costo por consulta rastreado y alertado',
        'Umbral de regresión de tasa de error definido',
        'Check de consistencia (varianza multi-run)',
      ]},
    ],
    closing: 'Los evals no son algo de una sola vez. Son tu contrato continuo con la calidad en producción. Automátizalos, corrélos en cada cambio y usálos para tomar decisiones con confianza sobre modelos, prompts y pipelines.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S12_Checklist({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-10">{c.subtitle}</p>
      <div className="flex flex-col gap-6 mb-8">
        {c.checklist.map((section, si) => (
          <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.12 }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: section.color }}>{section.category}</p>
            <div className="flex flex-col gap-2">
              {section.items.map((item, ii) => (
                <div key={ii} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: section.color }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 leading-relaxed mb-4">
        {c.closing}
      </div>
      <div className="bg-purple-600/10 border border-purple-600/30 rounded-xl p-4 text-center text-sm text-purple-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
