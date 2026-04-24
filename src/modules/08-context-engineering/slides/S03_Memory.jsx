import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Layer 2: Memory.',
    subtitle: 'Without memory, every conversation starts from zero. With memory, the model knows your context, preferences, and history — and the quality compounds.',
    types: [
      {
        type: 'In-context memory', color: '#36B37E',
        desc: 'Information pasted or included directly in the current conversation. Temporary — disappears when the conversation ends.',
        examples: ['"My name is Jona, I work at Visma LATAM as a Finance BP"', 'Pasting previous meeting notes into the prompt', 'Copying in relevant emails before asking for a draft reply'],
        best: 'For one-time context that is only relevant for this conversation.'
      },
      {
        type: 'External memory', color: '#0052CC',
        desc: 'A database or vector store that retrieves relevant information at runtime and injects it into the context. Persistent across sessions.',
        examples: ['A knowledge base that retrieves relevant documents when you ask a question', 'A CRM integration that pulls customer history into every support conversation', 'Claude\'s memory feature that stores facts about you across conversations'],
        best: 'For information that should persist and be accessible across multiple sessions.'
      },
      {
        type: 'System prompt memory', color: '#6554C0',
        desc: 'Facts and preferences written directly into the system prompt. Always present. Updated manually or via a memory management agent.',
        examples: ['"The user\'s name is Jona, they prefer responses in Spanish"', '"The user\'s company is Visma, their team is LATAM Finance"', '"The user prefers concise responses under 200 words"'],
        best: 'For stable, high-value facts that should always be in context.'
      },
    ],
    whatToRemember: {
      label: 'What\'s worth putting in memory',
      items: [
        'Who the user is: name, role, company, team',
        'Communication preferences: language, tone, format, length',
        'Domain context: key terms, products, processes specific to their world',
        'Recurring task formats: how their status update should be structured',
        'What NOT to do: things the model has gotten wrong before',
      ]
    },
    tip: 'The best memory systems are selective. Storing everything creates noise. Storing the right things creates a model that feels like it truly knows the user.'
  },
  es: {
    title: 'Capa 2: Memoria.',
    subtitle: 'Sin memoria, cada conversación empieza desde cero. Con memoria, el modelo conoce tu contexto, preferencias e historial — y la calidad se compone.',
    types: [
      {
        type: 'Memoria en contexto', color: '#36B37E',
        desc: 'Información pegada o incluida directamente en la conversación actual. Temporal — desaparece cuando termina la conversación.',
        examples: ['"Mi nombre es Jona, trabajo en Visma LATAM como Finance BP"', 'Pegar notas de reuniones anteriores en el prompt', 'Copiar emails relevantes antes de pedir un borrador de respuesta'],
        best: 'Para contexto de una sola vez que solo es relevante para esta conversación.'
      },
      {
        type: 'Memoria externa', color: '#0052CC',
        desc: 'Una base de datos o vector store que recupera información relevante en tiempo de ejecución y la inyecta en el contexto. Persistente entre sesiones.',
        examples: ['Una base de conocimiento que recupera documentos relevantes cuando preguntás algo', 'Una integración de CRM que trae el historial del cliente a cada conversación de soporte', 'La función de memoria de Claude que almacena hechos sobre vos entre conversaciones'],
        best: 'Para información que debe persistir y ser accesible en múltiples sesiones.'
      },
      {
        type: 'Memoria en system prompt', color: '#6554C0',
        desc: 'Hechos y preferencias escritos directamente en el system prompt. Siempre presentes. Actualizados manualmente o vía un agente de gestión de memoria.',
        examples: ['"El nombre del usuario es Jona, prefiere respuestas en español"', '"La empresa del usuario es Visma, su equipo es LATAM Finance"', '"El usuario prefiere respuestas concisas de menos de 200 palabras"'],
        best: 'Para hechos estables y de alto valor que siempre deberían estar en contexto.'
      },
    ],
    whatToRemember: {
      label: 'Qué vale la pena poner en memoria',
      items: [
        'Quién es el usuario: nombre, rol, empresa, equipo',
        'Preferencias de comunicación: idioma, tono, formato, longitud',
        'Contexto de dominio: términos clave, productos, procesos específicos de su mundo',
        'Formatos de tareas recurrentes: cómo debe estructurarse su actualización de estado',
        'Qué NO hacer: cosas que el modelo hizo mal antes',
      ]
    },
    tip: 'Los mejores sistemas de memoria son selectivos. Almacenar todo crea ruido. Almacenar las cosas correctas crea un modelo que parece que realmente conoce al usuario.'
  }
}

export default function S03_Memory({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-blue-600/20 text-blue-400 text-xs font-black px-2 py-1 rounded">Layer 2</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.types.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: t.color + '40', background: t.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: t.color }}>{t.type}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{t.desc}</p>
            <div className="flex flex-col gap-1 mb-3">
              {t.examples.map((ex, j) => (
                <p key={j} className="text-slate-400 text-xs flex items-start gap-2">
                  <span style={{ color: t.color }}>‣</span>{ex}
                </p>
              ))}
            </div>
            <p className="text-slate-500 text-xs italic">📍 Best for: {t.best}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">{c.whatToRemember.label}</p>
        {c.whatToRemember.items.map((item, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1.5 flex items-start gap-2">
            <span className="text-green-400">‣</span>{item}
          </p>
        ))}
      </motion.div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
