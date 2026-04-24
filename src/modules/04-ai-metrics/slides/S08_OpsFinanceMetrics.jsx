import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Metrics for Operations & Finance.',
    subtitle: 'AI in ops and finance is about more than saving time. It\'s about decision quality, cost per outcome, and risk reduction.',
    sections: [
      {
        area: 'Operations', icon: '⚙️', color: '#0052CC',
        desc: 'Operations teams use AI to automate workflows, process documents, and manage exceptions. The risk is automating the wrong things at scale.',
        metrics: [
          { metric: 'Process automation rate', desc: 'What % of a workflow runs without human intervention? Track by process, not globally.', type: 'adopt' },
          { metric: 'Exception rate', desc: 'What % of automated tasks require human escalation? Rising exceptions = the automation is over-reaching.', type: 'adopt' },
          { metric: 'Cost per transaction (before vs after)', desc: 'Did AI actually reduce the cost to complete a unit of work, or did it just shift costs?', type: 'adopt' },
          { metric: 'Error rate in automated decisions', desc: 'How often does the AI make the wrong call? This needs a human review sample.', type: 'adopt' },
          { metric: 'SLA compliance (before vs after)', desc: 'Are you meeting commitments faster or slower? Volume processed isn\'t the point — commitments met is.', type: 'adopt' },
        ]
      },
      {
        area: 'Finance', icon: '💰', color: '#36B37E',
        desc: 'Finance teams need to track ROI on AI spend, but also the quality of AI-assisted financial analysis and decisions.',
        metrics: [
          { metric: 'AI ROI per use case', desc: 'What did this specific use case cost (implementation + tokens + time) vs. what value did it generate? 95% of retail/CPG companies report cost decreases from AI — are you measuring yours?', type: 'adopt' },
          { metric: 'Report accuracy rate', desc: 'What % of AI-generated financial reports are published without material corrections?', type: 'adopt' },
          { metric: 'Analysis cycle time', desc: 'How long from data available to decision-ready insight? AI should compress this significantly.', type: 'adopt' },
          { metric: 'Analyst time on interpretation vs. data processing', desc: 'Are your analysts spending more time thinking and less time pulling data? This is the real win.', type: 'adopt' },
          { metric: 'Forecast accuracy (before vs after)', desc: 'Is AI-assisted forecasting actually more accurate than manual? This needs baseline data.', type: 'adopt' },
        ]
      },
    ],
    tip: 'For both ops and finance: the most important question is not "how much faster" but "how many better decisions are we making per unit of time?" Speed of analysis is only valuable if it improves the decision.'
  },
  es: {
    title: 'Métricas para Operaciones y Finanzas.',
    subtitle: 'La IA en ops y finanzas va más allá de ahorrar tiempo. Se trata de calidad de decisiones, costo por resultado y reducción de riesgo.',
    sections: [
      {
        area: 'Operaciones', icon: '⚙️', color: '#0052CC',
        desc: 'Los equipos de operaciones usan IA para automatizar flujos de trabajo, procesar documentos y gestionar excepciones. El riesgo es automatizar las cosas equivocadas a escala.',
        metrics: [
          { metric: 'Tasa de automatización de procesos', desc: '¿Qué % de un flujo de trabajo corre sin intervención humana? Rastreló por proceso, no globalmente.', type: 'adopt' },
          { metric: 'Tasa de excepciones', desc: '¿Qué % de las tareas automatizadas requieren escalación humana? Las excepciones crecientes = la automatización está excediéndose.', type: 'adopt' },
          { metric: 'Costo por transacción (antes vs después)', desc: '¿La IA realmente redujo el costo de completar una unidad de trabajo, o solo desplazó costos?', type: 'adopt' },
          { metric: 'Tasa de error en decisiones automatizadas', desc: '¿Con qué frecuencia la IA toma la decisión incorrecta? Esto necesita una muestra de revisión humana.', type: 'adopt' },
          { metric: 'Cumplimiento de SLA (antes vs después)', desc: '¿Estás cumpliendo compromisos más rápido o más lento? El volumen procesado no es el punto — lo son los compromisos cumplidos.', type: 'adopt' },
        ]
      },
      {
        area: 'Finanzas', icon: '💰', color: '#36B37E',
        desc: 'Los equipos de finanzas necesitan rastrear el ROI del gasto en IA, pero también la calidad del análisis financiero y las decisiones asistidas por IA.',
        metrics: [
          { metric: 'ROI de IA por caso de uso', desc: '¿Cuánto costó este caso de uso específico (implementación + tokens + tiempo) vs. qué valor generó? El 95% de empresas de retail/CPG reportan reducción de costos por IA — ¿estás midiendo los tuyos?', type: 'adopt' },
          { metric: 'Tasa de precisión de reportes', desc: '¿Qué % de los reportes financieros generados por IA se publican sin correcciones materiales?', type: 'adopt' },
          { metric: 'Tiempo de ciclo de análisis', desc: '¿Cuánto tiempo desde que los datos están disponibles hasta el insight listo para decidir? La IA debería comprimir esto significativamente.', type: 'adopt' },
          { metric: 'Tiempo de analistas en interpretación vs. procesamiento de datos', desc: '¿Tus analistas están pasando más tiempo pensando y menos tiempo extrayendo datos? Esta es la ganancia real.', type: 'adopt' },
          { metric: 'Precisión de pronósticos (antes vs después)', desc: '¿Los pronósticos asistidos por IA son realmente más precisos que los manuales? Esto necesita datos de baseline.', type: 'adopt' },
        ]
      },
    ],
    tip: 'Para ops y finanzas: la pregunta más importante no es "cuánto más rápido" sino "¿cuántas mejores decisiones estamos tomando por unidad de tiempo?" La velocidad de análisis solo tiene valor si mejora la decisión.'
  }
}

export default function S08_OpsFinanceMetrics({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-6 mb-8">
        {c.sections.map((section, si) => (
          <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: section.color + '40', background: section.color + '0D' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{section.icon}</span>
              <p className="font-bold text-sm" style={{ color: section.color }}>{section.area}</p>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">{section.desc}</p>
            <div className="flex flex-col gap-2">
              {section.metrics.map((m, mi) => (
                <div key={mi} className="bg-slate-800/60 rounded-lg p-3">
                  <p className="text-white text-xs font-semibold mb-1">{m.metric}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
