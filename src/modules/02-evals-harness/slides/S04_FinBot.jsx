import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Meet FinBot AI.',
    subtitle: 'We\'ll use this fictional pipeline throughout the module to make every concept concrete.',
    what: 'FinBot AI is a fictional financial assistant built on top of an LLM. It answers questions about transactions, generates expense summaries, and flags anomalies. It uses a RAG pipeline to retrieve data from a vector database of financial records.',
    pipeline: [
      { id: 'User', label: 'User', sub: 'asks a financial question', color: '#378ADD' },
      { id: 'RAG', label: 'RAG Retriever', sub: 'searches vector DB for relevant records', color: '#00B8D9' },
      { id: 'LLM', label: 'LLM', sub: 'generates the answer using context', color: '#6554C0' },
      { id: 'Output', label: 'Response', sub: 'delivered to user', color: '#36B37E' },
    ],
    evalPoints: [
      { target: 'RAG Retriever', question: 'Did it fetch the right records?', color: '#00B8D9' },
      { target: 'LLM Output', question: 'Is the answer correct, complete, and safe?', color: '#6554C0' },
      { target: 'Full pipeline', question: 'Latency, token cost, and reliability?', color: '#FF991F' },
    ],
    note: 'Each arrow in this pipeline is a potential eval point. We\'ll cover all of them.'
  },
  es: {
    title: 'Conocé a FinBot AI.',
    subtitle: 'Vamos a usar este pipeline ficticio a lo largo del módulo para hacer cada concepto concreto.',
    what: 'FinBot AI es un asistente financiero ficticio construido sobre un LLM. Responde preguntas sobre transacciones, genera resúmenes de gastos y detecta anomalías. Usa un pipeline RAG para recuperar datos de una base de datos vectorial de registros financieros.',
    pipeline: [
      { id: 'User', label: 'Usuario', sub: 'hace una pregunta financiera', color: '#378ADD' },
      { id: 'RAG', label: 'RAG Retriever', sub: 'busca registros relevantes en la BD vectorial', color: '#00B8D9' },
      { id: 'LLM', label: 'LLM', sub: 'genera la respuesta usando el contexto', color: '#6554C0' },
      { id: 'Output', label: 'Respuesta', sub: 'entregada al usuario', color: '#36B37E' },
    ],
    evalPoints: [
      { target: 'RAG Retriever', question: '¿Recuperó los registros correctos?', color: '#00B8D9' },
      { target: 'Output del LLM', question: '¿La respuesta es correcta, completa y segura?', color: '#6554C0' },
      { target: 'Pipeline completo', question: '¿Latencia, costo de tokens y confiabilidad?', color: '#FF991F' },
    ],
    note: 'Cada flecha en este pipeline es un punto de eval potencial. Los vamos a cubrir todos.'
  }
}

export default function S04_FinBot({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-2xl">{c.what}</p>

      {/* Pipeline diagram */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-10 overflow-x-auto pb-2">
        {c.pipeline.map((node, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.12 }}
            className="flex items-center gap-2">
            <div className="rounded-xl border px-4 py-3 text-center min-w-[110px]"
              style={{ borderColor: node.color + '60', background: node.color + '15' }}>
              <p className="text-xs font-bold" style={{ color: node.color }}>{node.label}</p>
              <p className="text-slate-500 text-xs mt-0.5 leading-tight">{node.sub}</p>
            </div>
            {i < c.pipeline.length - 1 && (
              <span className="text-slate-600 text-lg font-bold">›</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Eval points */}
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Eval points in this pipeline</p>
      <div className="flex flex-col gap-3 mb-6">
        {c.evalPoints.map((ep, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl border text-sm"
            style={{ borderColor: ep.color + '40', background: ep.color + '0D' }}>
            <span className="font-semibold text-xs" style={{ color: ep.color }}>{ep.target}</span>
            <span className="text-slate-400">—</span>
            <span className="text-slate-300">{ep.question}</span>
          </motion.div>
        ))}
      </div>
      <div className="text-xs text-slate-500 italic">{c.note}</div>
    </div>
  )
}
