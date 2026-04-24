import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The decision framework.',
    subtitle: 'Use this flowchart every time you need to choose a strategy. The sequence matters — always try the cheaper option first.',
    flow: [
      {
        q: 'Is the model producing outputs with wrong facts or missing information?',
        yes: { answer: 'Use RAG', detail: 'Add the missing information to a knowledge base. The model doesn\'t need retraining — it needs better data.' },
        no: 'Go to next question'
      },
      {
        q: 'Is the model\'s output style or format inconsistent with what you need?',
        yes: { answer: 'Try few-shot prompting first', detail: 'Add 5-10 examples of correct input/output pairs. If still inconsistent after 20+ examples, consider fine-tuning.' },
        no: 'Go to next question'
      },
      {
        q: 'Are you running the same high-volume task at scale and token cost is prohibitive?',
        yes: { answer: 'Fine-tune or local model', detail: 'Fine-tuning lets you encode behavior into weights (smaller prompts). Local models eliminate per-token costs entirely.' },
        no: 'Go to next question'
      },
      {
        q: 'Does the data need to stay inside your network (GDPR, IP, classified)?',
        yes: { answer: 'Local model', detail: 'Your data never leaves your hardware. Choose model based on available RAM and task requirements.' },
        no: 'Go to next question'
      },
      {
        q: 'Is nothing working with prompting after 5+ serious iterations?',
        yes: { answer: 'Fine-tune', detail: 'Last resort. You\'ve proven the task is possible (prompting gives partial results), now encode the behavior into weights.' },
        no: 'Default: keep improving your prompting'
      },
    ],
    comparison: {
      label: 'Side-by-side comparison',
      cols: ['', 'Prompting', 'RAG', 'Fine-tuning', 'Local'],
      rows: [
        ['Cost', '$', '$$', '$$$', 'HW upfront'],
        ['Setup time', 'Minutes', '1-4 weeks', '4-12 weeks', '1-3 days'],
        ['Solves', 'Behavior', 'Knowledge', 'Behavior+Style', 'Privacy+Cost'],
        ['Updates', 'Instant', 'Near-instant', 'Weeks', 'Model swap'],
        ['Complexity', 'Low', 'Medium', 'High', 'High'],
      ]
    }
  },
  es: {
    title: 'El framework de decisión.',
    subtitle: 'Usá este flowchart cada vez que necesités elegir una estrategia. La secuencia importa — siempre intentá la opción más barata primero.',
    flow: [
      {
        q: '¿El modelo produce outputs con hechos incorrectos o información faltante?',
        yes: { answer: 'Usá RAG', detail: 'Agréga la información faltante a una base de conocimiento. El modelo no necesita reentrenamiento — necesita mejores datos.' },
        no: 'Ir a la siguiente pregunta'
      },
      {
        q: '¿El estilo o formato de output del modelo es inconsistente con lo que necesitás?',
        yes: { answer: 'Intentá few-shot prompting primero', detail: 'Agréga 5-10 ejemplos de pares input/output correctos. Si sigue inconsistente después de 20+ ejemplos, considerá fine-tuning.' },
        no: 'Ir a la siguiente pregunta'
      },
      {
        q: '¿Estás corriendo la misma tarea de alto volumen a escala y el costo de tokens es prohibitivo?',
        yes: { answer: 'Fine-tune o modelo local', detail: 'El fine-tuning te permite codificar el comportamiento en los pesos (prompts más pequeños). Los modelos locales eliminan los costos por token completamente.' },
        no: 'Ir a la siguiente pregunta'
      },
      {
        q: '¿Los datos necesitan quedarse dentro de tu red (GDPR, IP, clasificados)?',
        yes: { answer: 'Modelo local', detail: 'Tus datos nunca salen de tu hardware. Elegí el modelo basado en la RAM disponible y los requisitos de la tarea.' },
        no: 'Ir a la siguiente pregunta'
      },
      {
        q: '¿Nada funciona con prompting después de 5+ iteraciones serias?',
        yes: { answer: 'Fine-tune', detail: 'Último recurso. Probaste que la tarea es posible (el prompting da resultados parciales), ahora codificá el comportamiento en los pesos.' },
        no: 'Por defecto: seguí mejorando tu prompting'
      },
    ],
    comparison: {
      label: 'Comparación lado a lado',
      cols: ['', 'Prompting', 'RAG', 'Fine-tuning', 'Local'],
      rows: [
        ['Costo', '$', '$$', '$$$', 'HW por adelantado'],
        ['Tiempo de setup', 'Minutos', '1-4 semanas', '4-12 semanas', '1-3 días'],
        ['Resuelve', 'Comportamiento', 'Conocimiento', 'Comportamiento+Estilo', 'Privacidad+Costo'],
        ['Actualizaciones', 'Instantáneo', 'Casi instantáneo', 'Semanas', 'Swap de modelo'],
        ['Complejidad', 'Baja', 'Media', 'Alta', 'Alta'],
      ]
    }
  }
}

export default function S07_DecisionFramework({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.flow.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-2">❓ {step.q}</p>
            <div className="flex gap-2">
              <div className="flex-1 bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                <p className="text-green-400 text-xs font-bold mb-0.5">Yes → {step.yes.answer}</p>
                <p className="text-slate-400 text-xs">{step.yes.detail}</p>
              </div>
              <div className="flex-1 bg-slate-700/40 rounded-lg p-2">
                <p className="text-slate-500 text-xs italic">No → {step.no}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 overflow-x-auto">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">{c.comparison.label}</p>
        <table className="w-full min-w-max">
          <thead>
            <tr>{c.comparison.cols.map((col, i) => <th key={i} className="text-xs text-left text-slate-500 font-bold pb-2 pr-4">{col}</th>)}</tr>
          </thead>
          <tbody>
            {c.comparison.rows.map((row, ri) => (
              <tr key={ri} className="border-t border-slate-700/50">
                {row.map((cell, ci) => (
                  <td key={ci} className={`text-xs py-1.5 pr-4 ${ci === 0 ? 'text-white font-semibold' : 'text-slate-400'}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
