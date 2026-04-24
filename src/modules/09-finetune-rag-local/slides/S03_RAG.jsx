import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Strategy 2: RAG.',
    subtitle: 'Use RAG when the model needs to know things it wasn\'t trained on: your internal docs, current data, or proprietary knowledge.',
    when: {
      label: 'Use RAG when',
      items: [
        'The model needs access to information that changes frequently (pricing, policies, product features)',
        'You have a large knowledge base of internal documents the model should draw from',
        'You need the model to cite sources for trust and verification',
        'The knowledge domain is too large to fit in a fine-tuning dataset',
        'You want to update knowledge without retraining',
      ]
    },
    dontUse: {
      label: 'Don\'t use RAG when',
      items: [
        'The problem is behavioral (the model acts wrong, not that it doesn\'t know enough)',
        'You need a specific output style that\'s hard to demonstrate in documents',
        'The knowledge fits easily in the system prompt',
        'The documents are too poorly structured to retrieve meaningfully',
      ]
    },
    pipeline: [
      { step: '1. Ingest', desc: 'Split documents into chunks (512-1024 tokens), embed each chunk as a vector, store in vector database' },
      { step: '2. Query', desc: 'User asks a question, embed the query, find the most similar chunks by cosine similarity' },
      { step: '3. Retrieve', desc: 'Pull top-k most relevant chunks (typically 3-10)' },
      { step: '4. Inject', desc: 'Add retrieved chunks to the context window before the user\'s message' },
      { step: '5. Generate', desc: 'Model answers based on retrieved context + instructions' },
    ],
    cost: {
      label: 'RAG cost model',
      items: [
        'Setup: 2-4 weeks for a production-quality RAG system',
        'Infrastructure: vector database ($50-500/month for managed solutions like Pinecone, Weaviate)',
        'Embedding: ~$0.10-0.50 per million tokens to embed your corpus',
        'Runtime: adds 1000-5000 tokens per query (the retrieved chunks) to your token cost',
        'Maintenance: document freshness, quality monitoring, retrieval evaluation',
      ]
    }
  },
  es: {
    title: 'Estrategia 2: RAG.',
    subtitle: 'Usá RAG cuando el modelo necesita saber cosas para las que no fue entrenado: tus docs internos, datos actuales o conocimiento propietario.',
    when: {
      label: 'Usá RAG cuando',
      items: [
        'El modelo necesita acceso a información que cambia frecuentemente (precios, políticas, características de productos)',
        'Tenés una gran base de conocimiento de documentos internos de los que el modelo debería nutrirse',
        'Necesitás que el modelo cite fuentes para confianza y verificación',
        'El dominio de conocimiento es demasiado grande para caber en un dataset de fine-tuning',
        'Querés actualizar el conocimiento sin re-entrenar',
      ]
    },
    dontUse: {
      label: 'No uses RAG cuando',
      items: [
        'El problema es de comportamiento (el modelo actúa mal, no que no sabe suficiente)',
        'Necesitás un estilo de output específico que es difícil de demostrar en documentos',
        'El conocimiento cabe fácilmente en el system prompt',
        'Los documentos están demasiado mal estructurados para recuperarlos de forma significativa',
      ]
    },
    pipeline: [
      { step: '1. Ingestar', desc: 'Dividir documentos en chunks (512-1024 tokens), embebber cada chunk como vector, almacenar en base de datos vectorial' },
      { step: '2. Consultar', desc: 'El usuario hace una pregunta, embebber la consulta, encontrar los chunks más similares por similitud de coseno' },
      { step: '3. Recuperar', desc: 'Obtener los top-k chunks más relevantes (tipicamente 3-10)' },
      { step: '4. Inyectar', desc: 'Agregar los chunks recuperados a la ventana de contexto antes del mensaje del usuario' },
      { step: '5. Generar', desc: 'El modelo responde basado en el contexto recuperado + instrucciones' },
    ],
    cost: {
      label: 'Modelo de costos de RAG',
      items: [
        'Setup: 2-4 semanas para un sistema RAG de calidad productiva',
        'Infraestructura: base de datos vectorial ($50-500/mes para soluciones gestionadas como Pinecone, Weaviate)',
        'Embedding: ~$0.10-0.50 por millón de tokens para embebber tu corpus',
        'Runtime: agrega 1000-5000 tokens por consulta (los chunks recuperados) a tu costo de tokens',
        'Mantenimiento: frescura de documentos, monitoreo de calidad, evaluación de recuperación',
      ]
    }
  }
}

export default function S03_RAG({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-blue-600/20 text-blue-400 text-xs font-black px-2 py-1 rounded">Strategy 2</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.when.label}</p>
          {c.when.items.map((item, i) => <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2"><span className="text-green-400">✓</span>{item}</p>)}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.dontUse.label}</p>
          {c.dontUse.items.map((item, i) => <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-2"><span className="text-red-400">✗</span>{item}</p>)}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">The RAG pipeline</p>
        <div className="flex flex-col gap-2">
          {c.pipeline.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xs w-20 shrink-0">{s.step}</span>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.cost.label}</p>
        {c.cost.items.map((item, i) => <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2"><span className="text-amber-400">‣</span>{item}</p>)}
      </motion.div>
    </div>
  )
}
