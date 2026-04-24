import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Context window management.',
    subtitle: 'Every token in the context window costs money and affects quality. Not all context is equal. Learn to manage it deliberately.',
    window: {
      label: 'What the context window contains',
      items: [
        { part: 'System prompt', approx: '500-5000 tokens', note: 'Your instructions, persona, rules. Always present.' },
        { part: 'Memory', approx: '100-2000 tokens', note: 'User facts, preferences, history summaries.' },
        { part: 'Retrieved documents (RAG)', approx: '1000-10000 tokens', note: 'The chunks most relevant to this query.' },
        { part: 'Conversation history', approx: 'Grows with turns', note: 'Previous messages in this conversation.' },
        { part: 'Examples', approx: '500-3000 tokens', note: 'Few-shot demonstrations.' },
        { part: 'Current user message', approx: '10-500 tokens', note: 'What the user just asked.' },
      ]
    },
    problems: [
      { problem: 'Context overflow', desc: 'When total tokens exceed the model\'s limit, older context gets dropped or the call fails. Priority: keep what matters most.', fix: 'Summarize old conversation turns instead of keeping them verbatim. Compress memory. Only retrieve the top N chunks.' },
      { problem: 'Context pollution', desc: 'Irrelevant documents in context confuse the model. It tries to use everything you give it, even if unrelated.', fix: 'Retrieval precision matters as much as retrieval recall. Better to retrieve 3 highly relevant chunks than 10 mediocre ones.' },
      { problem: 'Context staleness', desc: 'Cached context (from a previous session or old document version) makes the model answer outdated questions correctly.', fix: 'Version your documents. Add "as of [date]" annotations. Implement a document freshness check in your retrieval pipeline.' },
    ],
    hierarchy: {
      label: 'Priority order when context is tight',
      items: [
        '1. Instructions (always needed)',
        '2. Current user message (obviously)',
        '3. Directly relevant retrieved docs',
        '4. Key memory facts',
        '5. Examples (can be reduced)',
        '6. Conversation history (compress or drop oldest)',
      ]
    }
  },
  es: {
    title: 'Gestión de la ventana de contexto.',
    subtitle: 'Cada token en la ventana de contexto cuesta dinero y afecta la calidad. No todo el contexto es igual. Aprendé a gestionarlo deliberadamente.',
    window: {
      label: 'Qué contiene la ventana de contexto',
      items: [
        { part: 'System prompt', approx: '500-5000 tokens', note: 'Tus instrucciones, persona, reglas. Siempre presente.' },
        { part: 'Memoria', approx: '100-2000 tokens', note: 'Hechos del usuario, preferencias, resúmenes de historial.' },
        { part: 'Documentos recuperados (RAG)', approx: '1000-10000 tokens', note: 'Los chunks más relevantes para esta consulta.' },
        { part: 'Historial de conversación', approx: 'Crece con los turnos', note: 'Mensajes anteriores en esta conversación.' },
        { part: 'Ejemplos', approx: '500-3000 tokens', note: 'Demostraciones few-shot.' },
        { part: 'Mensaje actual del usuario', approx: '10-500 tokens', note: 'Lo que el usuario acaba de preguntar.' },
      ]
    },
    problems: [
      { problem: 'Desbordamiento de contexto', desc: 'Cuando el total de tokens supera el límite del modelo, el contexto más antiguo se descarta o la llamada falla. Prioridad: mantené lo que más importa.', fix: 'Resumeá los turnos de conversación anteriores en lugar de mantenerlos literalmente. Comprimí la memoria. Solo recuperá los top N chunks.' },
      { problem: 'Contaminación de contexto', desc: 'Los documentos irrelevantes en el contexto confunden al modelo. Intenta usar todo lo que le das, incluso si no está relacionado.', fix: 'La precisión de la recuperación importa tanto como el recall. Mejor recuperar 3 chunks altamente relevantes que 10 mediocres.' },
      { problem: 'Contexto obsoleto', desc: 'El contexto en caché (de una sesión anterior o versión de documento vieja) hace que el modelo responda correctamente preguntas desactualizadas.', fix: 'Versiona tus documentos. Agréga anotaciones "a partir de [fecha]". Implementá una verificación de frescura de documentos en tu pipeline de recuperación.' },
    ],
    hierarchy: {
      label: 'Orden de prioridad cuando el contexto es limitado',
      items: [
        '1. Instrucciones (siempre necesarias)',
        '2. Mensaje actual del usuario (obviamente)',
        '3. Docs recuperados directamente relevantes',
        '4. Hechos clave de memoria',
        '5. Ejemplos (se pueden reducir)',
        '6. Historial de conversación (comprimir o descartar los más antiguos)',
      ]
    }
  }
}

export default function S07_WindowManagement({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">{c.window.label}</p>
        <div className="flex flex-col gap-2">
          {c.window.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-1.5 border-b border-slate-700/50 last:border-0">
              <p className="text-white text-xs font-semibold w-40 shrink-0">{item.part}</p>
              <p className="text-amber-400 text-xs w-28 shrink-0">{item.approx}</p>
              <p className="text-slate-500 text-xs">{item.note}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex flex-col gap-3 mb-6">
        {c.problems.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <p className="text-red-400 text-xs font-bold mb-1">⚠️ {p.problem}</p>
            <p className="text-slate-400 text-xs mb-2 leading-relaxed">{p.desc}</p>
            <p className="text-green-400 text-xs">→ Fix: {p.fix}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.hierarchy.label}</p>
        {c.hierarchy.items.map((item, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1">{item}</p>
        ))}
      </motion.div>
    </div>
  )
}
