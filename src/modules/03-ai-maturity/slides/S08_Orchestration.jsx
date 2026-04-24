import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Level 4: Orchestration.',
    tagline: 'Agents managing agents.',
    desc: 'Orchestration is the target. It\'s not a single agent doing more — it\'s a system of agents, each specialized, each accountable, coordinated by an orchestrator that plans and delegates like a project manager.',
    how: {
      label: 'How it works',
      steps: [
        { role: 'Human', action: 'Sets a high-level goal: "Build the reporting feature for Q2, including tests, docs, and a migration script."' },
        { role: 'Orchestrator agent', action: 'Breaks the goal into sub-tasks. Assigns each to the right specialist agent. Monitors progress. Re-plans if something fails.' },
        { role: 'Coding agent', action: 'Implements the feature, following the codebase conventions from its skill file. Opens a PR when done.' },
        { role: 'Testing agent', action: 'Writes and runs tests for the feature. Reports coverage and any failures back to the orchestrator.' },
        { role: 'Docs agent', action: 'Reads the code and generates documentation. Updates the changelog.' },
        { role: 'Review agent', action: 'Runs evals on all outputs. Flags anything below the quality threshold for human review.' },
        { role: 'Human', action: 'Reviews the final result, approves, and merges.' },
      ]
    },
    why: {
      label: 'Why this is transformative',
      items: [
        'A single engineer can oversee work equivalent to a small team',
        'Specialized agents outperform generalist agents on their specific domain',
        'Failures in one agent don\'t collapse the whole workflow',
        'The orchestrator can replan and recover autonomously from most failures',
        'Context is scoped per agent — cheaper, more focused, less hallucination',
      ]
    },
    prereqs: {
      label: 'Prerequisites for Level 4',
      items: [
        'Mature eval suite covering all agents and the full pipeline',
        'Well-crafted skills for each specialist agent',
        'Observability: you can see what every agent did and why',
        'Circuit breakers: agents stop and escalate when something is wrong',
        'Cost controls: per-agent token budgets with alerts',
      ]
    },
    honest: 'Most teams are 12-24 months away from stable Level 4 orchestration. That\'s not a failure — it\'s the honest timeline. The teams that will get there are the ones building Level 2 and Level 3 foundations right now.'
  },
  es: {
    title: 'Nivel 4: Orquestación.',
    tagline: 'Agentes gestionando agentes.',
    desc: 'La orquestación es el objetivo. No es un solo agente haciendo más — es un sistema de agentes, cada uno especializado, cada uno responsable, coordinados por un orquestador que planifica y delega como un project manager.',
    how: {
      label: 'Cómo funciona',
      steps: [
        { role: 'Humano', action: 'Define un objetivo de alto nivel: "Construir la feature de reportes para el Q2, incluyendo tests, docs y un script de migración."' },
        { role: 'Agente orquestador', action: 'Divide el objetivo en sub-tareas. Asigna cada una al agente especialista correcto. Monitorea el progreso. Replanifica si algo falla.' },
        { role: 'Agente de código', action: 'Implementa la feature siguiendo las convenciones del codebase de su archivo de skill. Abre un PR cuando termina.' },
        { role: 'Agente de testing', action: 'Escribe y corre tests para la feature. Reporta cobertura y fallos al orquestador.' },
        { role: 'Agente de docs', action: 'Lee el código y genera documentación. Actualiza el changelog.' },
        { role: 'Agente de revisión', action: 'Corre evals en todos los outputs. Marca lo que esté por debajo del umbral de calidad para revisión humana.' },
        { role: 'Humano', action: 'Revisa el resultado final, aprueba y hace merge.' },
      ]
    },
    why: {
      label: 'Por qué esto es transformador',
      items: [
        'Un solo ingeniero puede supervisar trabajo equivalente al de un equipo pequeño',
        'Los agentes especializados superan a los generalistas en su dominio específico',
        'Los fallos en un agente no colapsan todo el flujo de trabajo',
        'El orquestador puede replanificar y recuperarse autónomamente de la mayoría de los fallos',
        'El contexto está acotado por agente — más barato, más enfocado, menos alucinación',
      ]
    },
    prereqs: {
      label: 'Prerequisitos para el Nivel 4',
      items: [
        'Suite de evals madura que cubra todos los agentes y el pipeline completo',
        'Skills bien elaboradas para cada agente especialista',
        'Observabilidad: podés ver qué hizo cada agente y por qué',
        'Circuit breakers: los agentes se detienen y escalan cuando algo está mal',
        'Controles de costo: presupuestos de tokens por agente con alertas',
      ]
    },
    honest: 'La mayoría de los equipos están a 12-24 meses de una orquestación estable en el Nivel 4. Eso no es un fracaso — es el timeline honesto. Los equipos que van a llegar son los que están construyendo las bases del Nivel 2 y Nivel 3 ahora mismo.'
  }
}

export default function S08_Orchestration({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-bold text-sm">4</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
          <p className="text-green-400 text-sm italic">{c.tagline}</p>
        </div>
      </div>
      <p className="text-slate-300 text-base mb-8 max-w-xl leading-relaxed mt-4">{c.desc}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-green-500/20 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-4">{c.how.label}</p>
        <div className="flex flex-col gap-3">
          {c.how.steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`text-xs font-bold w-28 shrink-0 mt-0.5 ${
                s.role === 'Human' || s.role === 'Humano' ? 'text-cyan-400' : 'text-green-400'
              }`}>{s.role}</span>
              <p className="text-slate-300 text-xs leading-relaxed">{s.action}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.why.label}</p>
          {c.why.items.map((item, i) => (
            <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
              <span className="text-green-400">✓</span>{item}
            </p>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.prereqs.label}</p>
          {c.prereqs.items.map((item, i) => (
            <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
              <span className="text-amber-400">‣</span>{item}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 text-sm text-slate-300 leading-relaxed">
        💬 {c.honest}
      </div>
    </div>
  )
}
