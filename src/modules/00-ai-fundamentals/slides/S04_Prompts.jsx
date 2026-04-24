import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Prompts, context & memory.',
    subtitle: 'How you talk to an LLM determines what you get back. Understanding the structure of a conversation is foundational.',
    parts: [
      {
        name: 'System prompt', color: '#6554C0',
        desc: 'Hidden instructions that define the model\'s persona, rules, and behavior. Set by the developer. The user usually never sees this.',
        example: '"You are a helpful financial assistant for Visma. Always respond in the user\'s language. Never provide investment advice."'
      },
      {
        name: 'User message', color: '#378ADD',
        desc: 'The actual input from the person using the tool. This is what the model responds to.',
        example: '"Summarize my Q1 expenses and flag anything over €5,000."'
      },
      {
        name: 'Assistant message', color: '#36B37E',
        desc: 'The model\'s response. In multi-turn conversations, previous assistant messages are included in the context for continuity.',
        example: '"Your Q1 expenses totalled €48,200. Three items exceeded €5,000: travel (€8,100), software (€6,400), consulting (€5,800)."'
      },
    ],
    memory: {
      label: 'The memory problem',
      text: 'LLMs have NO persistent memory between conversations. Every new conversation starts from scratch. What feels like "memory" is just the conversation history being included in the context window each time.',
      workarounds: [
        'Memory systems: summarize past conversations and inject them as context',
        'RAG: retrieve relevant past data from a database and add it to the prompt',
        'User profiles: store preferences explicitly and include them in the system prompt',
      ]
    },
    tip: 'The quality of your output is directly proportional to the quality of your input. A vague prompt gets a vague answer. A specific, well-structured prompt gets a precise, useful answer.'
  },
  es: {
    title: 'Prompts, contexto y memoria.',
    subtitle: 'Cómo le hablás a un LLM determina lo que recibes. Entender la estructura de una conversación es fundamental.',
    parts: [
      {
        name: 'System prompt', color: '#6554C0',
        desc: 'Instrucciones ocultas que definen la personalidad, reglas y comportamiento del modelo. Las establece el desarrollador. El usuario generalmente nunca las ve.',
        example: '"Sos un asistente financiero útil para Visma. Siempre respondé en el idioma del usuario. Nunca des consejos de inversión."'
      },
      {
        name: 'Mensaje del usuario', color: '#378ADD',
        desc: 'El input real de la persona que usa la herramienta. Esto es a lo que el modelo responde.',
        example: '"Resumí mis gastos del Q1 y marcá cualquier cosa por encima de €5.000."'
      },
      {
        name: 'Mensaje del asistente', color: '#36B37E',
        desc: 'La respuesta del modelo. En conversaciones multi-turno, los mensajes anteriores del asistente se incluyen en el contexto para continuidad.',
        example: '"Tus gastos del Q1 totalizaron €48.200. Tres ítems superaron €5.000: viajes (€8.100), software (€6.400), consultoría (€5.800)."'
      },
    ],
    memory: {
      label: 'El problema de la memoria',
      text: 'Los LLMs NO tienen memoria persistente entre conversaciones. Cada nueva conversación empieza desde cero. Lo que parece "memoria" es solo el historial de conversación que se incluye en la context window cada vez.',
      workarounds: [
        'Sistemas de memoria: resumir conversaciones pasadas e inyectarlas como contexto',
        'RAG: recuperar datos relevantes del pasado de una base de datos y agregarlos al prompt',
        'Perfiles de usuario: guardar preferencias explícitamente e incluirlas en el system prompt',
      ]
    },
    tip: 'La calidad de tu output es directamente proporcional a la calidad de tu input. Un prompt vago obtiene una respuesta vaga. Un prompt específico y bien estructurado obtiene una respuesta precisa y útil.'
  }
}

export default function S04_Prompts({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.parts.map((part, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="rounded-2xl border p-5" style={{ borderColor: part.color + '40', background: part.color + '0D' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: part.color }}>{part.name}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{part.desc}</p>
            <div className="bg-slate-900/60 rounded-lg px-3 py-2 text-xs text-slate-400 italic">"{part.example}"</div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.memory.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{c.memory.text}</p>
        <div className="flex flex-col gap-2">
          {c.memory.workarounds.map((w, i) => (
            <p key={i} className="text-slate-400 text-xs flex items-start gap-2">
              <span className="text-cyan-400">›</span>{w}
            </p>
          ))}
        </div>
      </motion.div>
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
