import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'RAG — Retrieval Augmented Generation.',
    subtitle: 'RAG is how you give an LLM access to specific, up-to-date knowledge it wasn\'t trained on. It\'s one of the most important patterns in production AI.',
    problem: {
      label: 'The problem',
      text: 'LLMs are trained up to a cutoff date and know nothing about your company\'s internal data, your product docs, your customer history, or anything that happened last week. Without RAG, the model either makes things up or says \'I don\'t know\'.'
    },
    howItWorks: {
      label: 'How RAG works',
      steps: [
        { n: '1', label: 'Index', desc: 'Your documents are split into chunks and converted to embeddings (numerical vectors) stored in a vector database.' },
        { n: '2', label: 'Retrieve', desc: 'When a user asks a question, it\'s converted to an embedding and the most similar chunks are retrieved from the database.' },
        { n: '3', label: 'Augment', desc: 'The retrieved chunks are added to the model\'s context alongside the user\'s question.' },
        { n: '4', label: 'Generate', desc: 'The model answers using both its training knowledge AND the retrieved context. It can now say \'According to your Q1 report...\'.' },
      ]
    },
    embeddings: {
      label: 'What is an embedding?',
      text: 'An embedding is a list of numbers (a vector) that represents the meaning of a piece of text. Similar meanings = similar vectors. This is how the vector database can find "semantically similar" content — not just exact keyword matches.'
    },
    vismaUse: [
      'Internal knowledge bases for support agents',
      'Code search across large repositories',
      'Document Q&A for finance and HR teams',
      'Customer data retrieval for product features',
    ],
    tip: 'RAG is not magic. If the retrieval step fetches the wrong documents, the model will confidently answer with wrong data. This is why RAG evaluation (covered in Module 02) is critical.'
  },
  es: {
    title: 'RAG — Retrieval Augmented Generation.',
    subtitle: 'RAG es cómo le das a un LLM acceso a conocimiento específico y actualizado para el que no fue entrenado. Es uno de los patrones más importantes en IA en producción.',
    problem: {
      label: 'El problema',
      text: 'Los LLMs se entrenan hasta una fecha límite y no saben nada de los datos internos de tu empresa, tu documentación de producto, el historial de clientes ni nada que haya pasado la semana pasada. Sin RAG, el modelo o inventa cosas o dice \'No sé\'.'
    },
    howItWorks: {
      label: 'Cómo funciona RAG',
      steps: [
        { n: '1', label: 'Indexar', desc: 'Tus documentos se dividen en fragmentos y se convierten en embeddings (vectores numéricos) almacenados en una base de datos vectorial.' },
        { n: '2', label: 'Recuperar', desc: 'Cuando un usuario hace una pregunta, se convierte en un embedding y los fragmentos más similares se recuperan de la base de datos.' },
        { n: '3', label: 'Aumentar', desc: 'Los fragmentos recuperados se agregan al contexto del modelo junto con la pregunta del usuario.' },
        { n: '4', label: 'Generar', desc: 'El modelo responde usando tanto su conocimiento de entrenamiento COMO el contexto recuperado. Ahora puede decir \'Según tu reporte del Q1...\'.'},
      ]
    },
    embeddings: {
      label: '¿Qué es un embedding?',
      text: 'Un embedding es una lista de números (un vector) que representa el significado de un trozo de texto. Significados similares = vectores similares. Así es como la base de datos vectorial puede encontrar contenido \'semánticamente similar\' — no solo coincidencias exactas de palabras.'
    },
    vismaUse: [
      'Bases de conocimiento internas para agentes de soporte',
      'Búsqueda de código en repositorios grandes',
      'Q&A sobre documentos para equipos de finanzas y RRHH',
      'Recuperación de datos de clientes para features de producto',
    ],
    tip: 'RAG no es magia. Si el paso de recuperación trae los documentos incorrectos, el modelo va a responder con datos incorrectos con total confianza. Por eso la evaluación RAG (cubierta en el Módulo 02) es crítica.'
  }
}

export default function S12_RAG({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.problem.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.problem.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-4">{c.howItWorks.label}</p>
        <div className="flex flex-col gap-3">
          {c.howItWorks.steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-xs font-bold shrink-0">{s.n}</div>
              <div>
                <p className="text-white text-sm font-semibold">{s.label}</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.embeddings.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.embeddings.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Visma use cases</p>
        {c.vismaUse.map((u, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span className="text-cyan-400">‣</span>{u}
          </p>
        ))}
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        ⚠️ {c.tip}
      </div>
    </div>
  )
}
