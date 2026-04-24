import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Level 3: Delegation.',
    tagline: 'AI owns the execution. You own the outcome.',
    desc: 'This is the level that changes everything. You stop reviewing every step and start reviewing results. The agent plans, writes code, runs tests, fixes failures, and opens the PR. You decide whether to merge.',
    whatChanges: {
      label: 'What fundamentally changes at Level 3',
      items: [
        { icon: '🔄', title: 'Your job is goal-setting, not execution', desc: 'You define what done looks like. The agent figures out how to get there.' },
        { icon: '🔍', title: 'You review outcomes, not keystrokes', desc: 'You read the PR diff, the test results, and the eval scores — not the intermediate steps.' },
        { icon: '📅', title: 'You can work in parallel', desc: 'While one agent is building feature A, you\'re designing feature B. Or sleeping. Actual parallelism.' },
        { icon: '📊', title: 'Quality tracking becomes critical', desc: 'If you\'re not reviewing each line, evals are your quality signal. Without them you\'re flying blind.' },
      ]
    },
    parallel: {
      label: 'The parallelism unlock',
      text: 'This is the first level where AI genuinely multiplies your output capacity — not just your speed. One engineer can run 3-5 agent sessions simultaneously on different tasks. The bottleneck shifts from execution to context quality and review capacity.'
    },
    risk: {
      label: 'The risks of Level 3 without guardrails',
      items: [
        'Agent confidently ships incorrect behavior nobody reviewed',
        'Token costs explode from long, unmonitored agent sessions',
        'Agent loops retry indefinitely on a failing test, burning compute',
        'No way to know if a regression was introduced — without evals',
      ]
    }
  },
  es: {
    title: 'Nivel 3: Delegación.',
    tagline: 'La IA es dueña de la ejecución. Vos del resultado.',
    desc: 'Este es el nivel que cambia todo. Dejás de revisar cada paso y empezás a revisar resultados. El agente planifica, escribe código, corre tests, arregla fallos y abre el PR. Vos decídis si hacés merge.',
    whatChanges: {
      label: 'Qué cambia fundamentalmente en el Nivel 3',
      items: [
        { icon: '🔄', title: 'Tu trabajo es definir objetivos, no ejecutar', desc: 'Vos definís cómo se ve el resultado final. El agente descubre cómo llegar.' },
        { icon: '🔍', title: 'Revisás resultados, no teclas', desc: 'Leés el diff del PR, los resultados de los tests y los scores de evals — no los pasos intermedios.' },
        { icon: '📅', title: 'Podés trabajar en paralelo', desc: 'Mientras un agente construye la feature A, vos estás diseñando la feature B. O durmiendo. Paralelismo real.' },
        { icon: '📊', title: 'El control de calidad se vuelve crítico', desc: 'Si no revisás cada línea, los evals son tu señal de calidad. Sin ellos volás a ciegas.' },
      ]
    },
    parallel: {
      label: 'El unlock del paralelismo',
      text: 'Este es el primer nivel donde la IA genuinamente multiplica tu capacidad de output — no solo tu velocidad. Un ingeniero puede correr 3-5 sesiones de agente simultáneamente en diferentes tareas. El cuello de botella pasa de la ejecución a la calidad del contexto y la capacidad de revisión.'
    },
    risk: {
      label: 'Los riesgos del Nivel 3 sin guardrails',
      items: [
        'El agente deploya comportamiento incorrecto que nadie revisó',
        'Los costos de tokens explotan por sesiones largas sin monitor',
        'El agente reintenta indefinidamente un test que falla, quemando compute',
        'No hay forma de saber si se introdujo una regresión — sin evals',
      ]
    }
  }
}

export default function S05_Delegation({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">3</div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
          <p className="text-amber-400 text-sm italic">{c.tagline}</p>
        </div>
      </div>
      <p className="text-slate-300 text-base mb-8 max-w-xl leading-relaxed mt-4">{c.desc}</p>
      <div className="flex flex-col gap-3 mb-6">
        {c.whatChanges.items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-amber-500/20 rounded-xl p-4 flex gap-3">
            <span className="text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.parallel.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.parallel.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.risk.label}</p>
        {c.risk.items.map((item, i) => (
          <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-2">
            <span className="text-red-400">‣</span>{item}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
