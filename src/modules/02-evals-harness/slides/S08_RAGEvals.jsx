import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'RAG evaluators: testing retrieval quality.',
    subtitle: 'FinBot uses a RAG pipeline. If the retriever fetches the wrong documents, the LLM will confidently answer with the wrong data. No amount of LLM quality fixes a bad retrieval.',
    metrics: [
      {
        name: 'Context Relevance',
        color: '#00B8D9',
        desc: 'Are the retrieved documents actually relevant to the question?',
        how: 'Score each retrieved chunk against the query using embedding similarity or LLM judge.',
        finbot: 'User asks about March expenses → retriever should NOT return January records'
      },
      {
        name: 'Context Recall',
        color: '#6554C0',
        desc: 'Did the retriever find ALL the relevant documents, not just some?',
        how: 'Compare retrieved chunks against a known ground truth set of relevant documents.',
        finbot: 'If 3 transactions are relevant, did the RAG retrieve all 3 or only 1?'
      },
      {
        name: 'Faithfulness / Groundedness',
        color: '#36B37E',
        desc: 'Is the LLM\'s answer actually based on the retrieved context, or did it hallucinate?',
        how: 'LLM judge: for each claim in the response, can it be traced back to the retrieved documents?',
        finbot: 'FinBot says €1,840 in travel costs → is that number actually in the retrieved records?'
      },
      {
        name: 'Answer Relevance',
        color: '#FF991F',
        desc: 'Does the final answer actually address what the user asked?',
        how: 'LLM judge or embedding similarity between the question and the final answer.',
        finbot: 'User asked why expenses increased → did FinBot answer that, or something adjacent?'
      },
    ],
    framework: 'This is the RAGAS framework — a widely used standard for RAG evaluation. You don\'t need to implement it from scratch; libraries like ragas, DeepEval, and LangSmith support it out of the box.',
  },
  es: {
    title: 'Evaluadores RAG: testeando la calidad del retrieval.',
    subtitle: 'FinBot usa un pipeline RAG. Si el retriever trae los documentos equivocados, el LLM va a responder con datos incorrectos con total confianza. Ningún nivel de calidad del LLM arregla un mal retrieval.',
    metrics: [
      {
        name: 'Relevancia del Contexto',
        color: '#00B8D9',
        desc: '¿Los documentos recuperados son realmente relevantes para la pregunta?',
        how: 'Puntuá cada chunk recuperado contra la query usando similitud de embeddings o juez LLM.',
        finbot: 'El usuario pregunta sobre gastos de marzo → el retriever NO debería devolver registros de enero'
      },
      {
        name: 'Recall del Contexto',
        color: '#6554C0',
        desc: '¿El retriever encontró TODOS los documentos relevantes, no solo algunos?',
        how: 'Compará los chunks recuperados contra un conjunto de documentos relevantes conocido.',
        finbot: 'Si 3 transacciones son relevantes, ¿el RAG recuperó las 3 o solo 1?'
      },
      {
        name: 'Fidelidad / Fundamentación',
        color: '#36B37E',
        desc: '¿La respuesta del LLM está realmente basada en el contexto recuperado, o aluminó?',
        how: 'Juez LLM: para cada afirmación en la respuesta, ¿se puede rastrear a los documentos recuperados?',
        finbot: 'FinBot dice €1.840 en gastos de viaje → ¿ese número está realmente en los registros recuperados?'
      },
      {
        name: 'Relevancia de la Respuesta',
        color: '#FF991F',
        desc: '¿La respuesta final realmente responde lo que preguntó el usuario?',
        how: 'Juez LLM o similitud de embeddings entre la pregunta y la respuesta final.',
        finbot: 'El usuario preguntó por qué aumentaron los gastos → ¿FinBot respondió eso o algo adyacente?'
      },
    ],
    framework: 'Este es el framework RAGAS — un estándar ampliamente usado para evaluación RAG. No necesitás implementarlo desde cero; librerías como ragas, DeepEval y LangSmith lo soportan out of the box.',
  }
}

export default function S08_RAGEvals({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="rounded-2xl border p-5" style={{ borderColor: m.color + '40', background: m.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: m.color }}>{m.name}</p>
            <p className="text-white text-sm font-medium mb-2">{m.desc}</p>
            <p className="text-slate-400 text-xs mb-2"><span className="text-slate-500">How: </span>{m.how}</p>
            <div className="bg-slate-900/50 rounded-lg px-3 py-2 text-xs text-slate-400">
              <span className="text-cyan-400 font-semibold">FinBot › </span>{m.finbot}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 text-sm text-blue-200 leading-relaxed">
        📚 {c.framework}
      </div>
    </div>
  )
}
