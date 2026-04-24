import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Why you can\'t skip phases.',
    subtitle: 'Every team that jumps from Level 1 to Level 3 without building Level 2 foundations eventually pays the same tax.',
    costs: [
      {
        skip: 'Skipping Level 2 (Supervision)',
        consequence: 'Agents with no clear instructions, no skills, no eval suite. They deliver inconsistent output. You spend more time fixing than if you\'d done it manually. You can\'t improve what you can\'t measure.',
        icon: '💥'
      },
      {
        skip: 'Skipping evals before delegation',
        consequence: 'You merge PRs you can\'t fully review. Quality regressions ship to production undetected. One bad prompt change silently degrades your product for weeks before someone notices.',
        icon: '👀'
      },
      {
        skip: 'Skipping observability before orchestration',
        consequence: 'A multi-agent pipeline fails and you have no idea which agent failed, why it failed, or how to fix it. Debugging becomes archaeology.',
        icon: '🕳️'
      },
      {
        skip: 'Skipping cost controls at any level',
        consequence: 'A runaway agent loop, a context window that keeps growing, or a missing budget alert. Token costs spike 10x before anyone notices. You\'re now explaining to finance why AI costs tripled this month.',
        icon: '💸'
      },
    ],
    jcurve: {
      label: 'The J-curve is real',
      text: 'Moving from Level 1 to Level 2 actually slows you down at first. Writing skills, building evals, setting up context files — it takes time. That\'s the bottom of the J. The teams that push through that dip are the ones who compound velocity over the next 6-12 months. The teams that skip it stay fast for one sprint and plateau.'
    },
    advice: 'The fastest path to Level 4 goes through Level 2. Not around it.'
  },
  es: {
    title: 'Por qué no podés saltarte fases.',
    subtitle: 'Todo equipo que salta del Nivel 1 al Nivel 3 sin construir las bases del Nivel 2 termina pagando el mismo impuesto.',
    costs: [
      {
        skip: 'Saltarse el Nivel 2 (Supervisión)',
        consequence: 'Agentes sin instrucciones claras, sin skills, sin suite de evals. Entregan output inconsistente. Gasás más tiempo arreglando que si lo hubieras hecho manualmente. No podés mejorar lo que no podés medir.',
        icon: '💥'
      },
      {
        skip: 'Saltarse los evals antes de delegar',
        consequence: 'Mergeás PRs que no podés revisar completamente. Regresiones de calidad llegan a producción sin detectar. Un cambio de prompt malo degrada silenciosamente tu producto por semanas antes de que alguien lo note.',
        icon: '👀'
      },
      {
        skip: 'Saltarse la observabilidad antes de orquestar',
        consequence: 'Un pipeline multi-agente falla y no tenés idea de qué agente falló, por qué falló ni cómo arreglarlo. El debugging se vuelve arqueología.',
        icon: '🕳️'
      },
      {
        skip: 'Saltarse los controles de costo en cualquier nivel',
        consequence: 'Un loop de agente descontrolado, una context window que crece indefinidamente, o una alerta de presupuesto faltante. Los costos de tokens se multiplican por 10 antes de que alguien lo note. Ahora tenés que explicarle a finanzas por qué los costos de IA se triplicaron este mes.',
        icon: '💸'
      },
    ],
    jcurve: {
      label: 'La curva J es real',
      text: 'Pasar del Nivel 1 al Nivel 2 en realidad te hace más lento al principio. Escribir skills, construir evals, configurar archivos de contexto — lleva tiempo. Ese es el fondo de la J. Los equipos que superan ese bache son los que componen velocidad en los próximos 6-12 meses. Los que lo saltean siguen rápidos por un sprint y se estancan.'
    },
    advice: 'El camino más rápido al Nivel 4 pasa por el Nivel 2. No lo rodea.'
  }
}

export default function S10_DontSkip({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.costs.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="bg-red-500/8 border border-red-500/30 rounded-2xl p-5 flex gap-4">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{item.skip}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{item.consequence}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-4">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.jcurve.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.jcurve.text}</p>
      </motion.div>
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center text-base font-bold text-green-300">
        {c.advice}
      </div>
    </div>
  )
}
