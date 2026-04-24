import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Layer 3: Knowledge & RAG.',
    subtitle: 'A model only knows what it was trained on. Knowledge injection — retrieving and inserting relevant documents at runtime — is what makes AI actually useful for your specific domain.',
    whatIsRAG: {
      label: 'What is RAG?',
      text: 'Retrieval Augmented Generation (RAG): instead of asking the model to answer from memory, you retrieve relevant documents from a knowledge base and inject them into the context. The model answers based on your documents, not general training data.'
    },
    withWithout: [
      {
        scenario: 'Without RAG: "What is our refund policy?"',
        bad: 'The model invents a plausible-sounding refund policy based on what it\'s seen in training. It sounds confident. It\'s wrong.',
        good: 'With RAG: The model retrieves your actual refund policy document, reads it, and answers based on exactly what it says.'
      },
      {
        scenario: 'Without RAG: "Summarize the Q3 results for VismaEmpresa"',
        bad: 'The model has no access to your internal data. It either refuses or hallucinates.',
        good: 'With RAG: The model retrieves the Q3 report from your knowledge base, reads it, and produces an accurate summary.'
      },
    ],
    ragQuality: {
      label: 'What makes RAG work well',
      items: [
        { factor: 'Chunk size', desc: 'Too big = noisy context. Too small = missing context. 512-1024 tokens is usually the sweet spot.' },
        { factor: 'Retrieval quality', desc: 'The right documents must be retrieved. Garbage retrieval = garbage context = garbage answer.' },
        { factor: 'Source freshness', desc: 'Stale documents produce stale answers. Your knowledge base needs a refresh cadence.' },
        { factor: 'Citation in output', desc: 'Always have the model cite which document it used. This makes verification fast.' },
      ]
    },
    visma: 'Visma example: a customer support bot backed by RAG over your product documentation and release notes will always give current, accurate answers — and automatically updates when you update the docs.'
  },
  es: {
    title: 'Capa 3: Conocimiento y RAG.',
    subtitle: 'Un modelo solo sabe lo que fue entrenado para saber. La inyección de conocimiento — recuperar e insertar documentos relevantes en tiempo de ejecución — es lo que hace que la IA sea realmente útil para tu dominio específico.',
    whatIsRAG: {
      label: '¿Qué es RAG?',
      text: 'Retrieval Augmented Generation (RAG): en lugar de pedirle al modelo que responda desde la memoria, recuperás documentos relevantes de una base de conocimiento y los inyectás en el contexto. El modelo responde basándose en tus documentos, no en datos generales de entrenamiento.'
    },
    withWithout: [
      {
        scenario: 'Sin RAG: "¿Cuál es nuestra política de reembolso?"',
        bad: 'El modelo inventa una política de reembolso que suena plausible basada en lo que vio en el entrenamiento. Suena confiado. Está equivocado.',
        good: 'Con RAG: El modelo recupera tu documento real de política de reembolso, lo lee y responde basado exactamente en lo que dice.'
      },
      {
        scenario: 'Sin RAG: "Resume los resultados de Q3 de VismaEmpresa"',
        bad: 'El modelo no tiene acceso a tus datos internos. O se niega o alucina.',
        good: 'Con RAG: El modelo recupera el reporte de Q3 de tu base de conocimiento, lo lee y produce un resumen preciso.'
      },
    ],
    ragQuality: {
      label: 'Qué hace que RAG funcione bien',
      items: [
        { factor: 'Tamaño de chunk', desc: 'Muy grande = contexto ruidoso. Muy pequeño = contexto incompleto. 512-1024 tokens suele ser el punto dulce.' },
        { factor: 'Calidad de recuperación', desc: 'Los documentos correctos deben ser recuperados. Recuperación basura = contexto basura = respuesta basura.' },
        { factor: 'Frescura de las fuentes', desc: 'Los documentos obsoletos producen respuestas obsoletas. Tu base de conocimiento necesita una cadencia de actualización.' },
        { factor: 'Cita en el output', desc: 'Siempre hacé que el modelo cite qué documento usó. Esto hace que la verificación sea rápida.' },
      ]
    },
    visma: 'Ejemplo Visma: un bot de soporte al cliente respaldado por RAG sobre tu documentación de producto y notas de versión siempre dará respuestas actuales y precisas — y se actualiza automáticamente cuando actualizas los docs.'
  }
}

export default function S04_Knowledge({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-purple-600/20 text-purple-400 text-xs font-black px-2 py-1 rounded">Layer 3</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.whatIsRAG.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.whatIsRAG.text}</p>
      </motion.div>
      <div className="flex flex-col gap-3 mb-6">
        {c.withWithout.map((ww, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
            <p className="text-slate-400 text-xs font-semibold mb-3">{ww.scenario}</p>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="bg-red-500/8 rounded-lg p-2">
                <p className="text-red-400 text-xs font-semibold mb-1">Without RAG</p>
                <p className="text-slate-400 text-xs leading-relaxed">{ww.bad}</p>
              </div>
              <div className="bg-green-500/8 rounded-lg p-2">
                <p className="text-green-400 text-xs font-semibold mb-1">With RAG</p>
                <p className="text-slate-300 text-xs leading-relaxed">{ww.good}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">{c.ragQuality.label}</p>
        {c.ragQuality.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 mb-2">
            <p className="text-purple-400 text-xs font-semibold w-32 shrink-0">{item.factor}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200">
        📍 {c.visma}
      </div>
    </div>
  )
}
