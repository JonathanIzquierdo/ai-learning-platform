import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Context engineering: the invisible work.',
    subtitle: 'When an agentic workflow fails, people blame the model. Usually, the model is fine. The context is broken.',
    what: {
      label: 'What is context engineering?',
      text: 'Context engineering is the practice of deliberately designing everything the agent receives as input: instructions, examples, tools, memory, retrieved data, conversation history. It\'s the difference between an agent that works reliably and one that works sometimes.'
    },
    layers: [
      {
        name: 'Instructions layer', color: '#6554C0',
        desc: 'System prompt, CLAUDE.md, skill files. Defines what the agent is, what it should do, and how.',
        bad: 'Vague: "Be helpful and write good code"',
        good: 'Specific: "You are a backend engineer. Use TypeScript. Write tests first. Never push directly to main. Ask before deleting files."'
      },
      {
        name: 'Memory layer', color: '#378ADD',
        desc: 'What the agent knows about past interactions, user preferences, and project state.',
        bad: 'No memory: agent asks the same clarifying questions every session',
        good: 'Structured memory: "User prefers functional patterns. Project uses PostgreSQL. Last session completed the auth module."'
      },
      {
        name: 'Knowledge layer', color: '#00B8D9',
        desc: 'RAG-retrieved documents, codebase context, API docs. What the agent knows about your specific domain.',
        bad: 'No retrieval: agent guesses at your API patterns and gets them wrong',
        good: 'Targeted retrieval: agent pulls relevant files and docs before starting'
      },
      {
        name: 'Tools layer', color: '#36B37E',
        desc: 'What actions the agent can take. Fewer, well-defined tools beat many poorly-described ones.',
        bad: 'Agent has access to 40 tools with one-line descriptions',
        good: 'Agent has 8 tools with detailed descriptions, examples, and edge case handling'
      },
      {
        name: 'Examples layer', color: '#FF991F',
        desc: 'Few-shot examples showing what good and bad output looks like for this specific task.',
        bad: 'No examples: agent infers output format from the instruction alone',
        good: 'Concrete examples: "A good PR description looks like this. A bad one looks like this."'
      },
    ],
    principle: 'The quality of your output is a function of the quality of your context. Better context = better agents. This is the core skill of Level 2 and 3.'
  },
  es: {
    title: 'Ingeniería de contexto: el trabajo invisible.',
    subtitle: 'Cuando un flujo agéntico falla, la gente culpa al modelo. Generalmente, el modelo está bien. El contexto está roto.',
    what: {
      label: '¿Qué es la ingeniería de contexto?',
      text: 'La ingeniería de contexto es la práctica de diseñar deliberadamente todo lo que el agente recibe como input: instrucciones, ejemplos, tools, memoria, datos recuperados, historial de conversación. Es la diferencia entre un agente que funciona de forma confiable y uno que funciona a veces.'
    },
    layers: [
      {
        name: 'Capa de instrucciones', color: '#6554C0',
        desc: 'System prompt, CLAUDE.md, archivos de skill. Define qué es el agente, qué debe hacer y cómo.',
        bad: 'Vago: "Sé útil y escribí buen código"',
        good: 'Específico: "Sos un ingeniero backend. Usá TypeScript. Escribí tests primero. Nunca hagas push directo a main. Preguntá antes de eliminar archivos."'
      },
      {
        name: 'Capa de memoria', color: '#378ADD',
        desc: 'Lo que el agente sabe sobre interacciones pasadas, preferencias del usuario y estado del proyecto.',
        bad: 'Sin memoria: el agente hace las mismas preguntas de aclaración en cada sesión',
        good: 'Memoria estructurada: "El usuario prefiere patrones funcionales. El proyecto usa PostgreSQL. La última sesión completó el módulo de auth."'
      },
      {
        name: 'Capa de conocimiento', color: '#00B8D9',
        desc: 'Documentos recuperados vía RAG, contexto del codebase, docs de API. Lo que el agente sabe de tu dominio específico.',
        bad: 'Sin retrieval: el agente adivina tus patrones de API y se equivoca',
        good: 'Retrieval dirigido: el agente trae archivos y docs relevantes antes de empezar'
      },
      {
        name: 'Capa de tools', color: '#36B37E',
        desc: 'Qué acciones puede tomar el agente. Pocas tools bien definidas superan a muchas mal descritas.',
        bad: 'El agente tiene acceso a 40 tools con descripciones de una línea',
        good: 'El agente tiene 8 tools con descripciones detalladas, ejemplos y manejo de casos borde'
      },
      {
        name: 'Capa de ejemplos', color: '#FF991F',
        desc: 'Ejemplos few-shot mostrando cómo se ve un output bueno y malo para esta tarea específica.',
        bad: 'Sin ejemplos: el agente infiere el formato de output solo de la instrucción',
        good: 'Ejemplos concretos: "Una buena descripción de PR se ve así. Una mala, así."'
      },
    ],
    principle: 'La calidad de tu output es función de la calidad de tu contexto. Mejor contexto = mejores agentes. Esta es la habilidad central del Nivel 2 y 3.'
  }
}

export default function S09_ContextEngineering({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-8">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.what.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.what.text}</p>
      </motion.div>
      <div className="flex flex-col gap-4 mb-8">
        {c.layers.map((layer, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="rounded-xl border p-4" style={{ borderColor: layer.color + '40', background: layer.color + '0C' }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: layer.color }}>{layer.name}</p>
            <p className="text-slate-300 text-xs mb-3 leading-relaxed">{layer.desc}</p>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="bg-red-500/10 rounded-lg px-3 py-2">
                <p className="text-red-400 text-xs font-semibold mb-1">✗ Bad</p>
                <p className="text-slate-400 text-xs italic">{layer.bad}</p>
              </div>
              <div className="bg-green-500/10 rounded-lg px-3 py-2">
                <p className="text-green-400 text-xs font-semibold mb-1">✓ Good</p>
                <p className="text-slate-400 text-xs italic">{layer.good}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-sm text-purple-200">
        💡 {c.principle}
      </div>
    </div>
  )
}
