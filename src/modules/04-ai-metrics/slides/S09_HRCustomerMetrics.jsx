import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Metrics for HR, People & Customer teams.',
    subtitle: 'These teams interact with humans daily. AI changes what\'s possible — but the metrics must stay human-centered.',
    sections: [
      {
        area: 'HR & People', icon: '👥', color: '#6554C0',
        desc: 'HR teams using AI for recruiting, L&D, and employee experience face a unique challenge: the output is always a human interaction, not a document. Measuring the quality of that interaction is harder than measuring speed.',
        data: '73% of HR directors adopted AI by 2025. Top metrics for AI success in HR: productivity, cost savings, decision quality, and employee satisfaction (SHRM 2026).',
        metrics: [
          { metric: 'Time-to-hire (before vs after)', desc: 'AI in recruiting should compress this. But pair it with quality-of-hire at 90 days — faster bad hires are worse than slow good ones.' },
          { metric: 'Quality of hire at 90/180 days', desc: 'Are AI-assisted recruiting decisions leading to better-performing, longer-staying employees?' },
          { metric: 'L&D completion and application rate', desc: 'Not just who completed training, but who applied what they learned. AI can personalize learning — measure the personalization impact.' },
          { metric: 'Employee AI confidence index', desc: 'How confident are employees in using AI tools? ManpowerGroup found confidence fell 18% even as usage jumped 13%. This gap is a risk.' },
          { metric: 'Skills gap closure rate', desc: 'Is AI-assisted learning actually reducing skill gaps, or just generating certificates?' },
        ]
      },
      {
        area: 'Customer Success & Support', icon: '🎧', color: '#00B8D9',
        desc: 'Customer-facing AI is where quality failures are most visible. A bad AI response damages trust faster than any other failure mode.',
        data: 'Goldman Sachs found a 30% productivity boost in customer service from AI. But this only held when paired with quality controls.',
        metrics: [
          { metric: 'CSAT / NPS (before vs after AI deployment)', desc: 'The definitive customer quality metric. If this doesn\'t improve, the productivity gains are hollow.' },
          { metric: 'AI containment rate', desc: 'What % of interactions are fully resolved by AI without human escalation? Higher is better — but only if CSAT stays up.' },
          { metric: 'Escalation quality rate', desc: 'When AI escalates to a human, is the handoff context-rich and accurate? Or do customers have to repeat themselves?' },
          { metric: 'First contact resolution (FCR)', desc: 'Is the problem resolved in one interaction? AI should improve this. Track it.' },
          { metric: 'Agent time on complex vs. routine cases', desc: 'Are human agents now handling more interesting, high-value cases? This is the satisfaction multiplier.' },
        ]
      },
    ]
  },
  es: {
    title: 'Métricas para RRHH, Personas y Equipos de Clientes.',
    subtitle: 'Estos equipos interactúan con humanos a diario. La IA cambia lo que es posible — pero las métricas deben mantenerse centradas en el ser humano.',
    sections: [
      {
        area: 'RRHH y Personas', icon: '👥', color: '#6554C0',
        desc: 'Los equipos de RRHH que usan IA para reclutamiento, L&D y experiencia del empleado enfrentan un desafío único: el output siempre es una interacción humana, no un documento. Medir la calidad de esa interacción es más difícil que medir la velocidad.',
        data: 'El 73% de los directores de RRHH adoptaron IA en 2025. Las principales métricas para el éxito de IA en RRHH: productividad, ahorro de costos, calidad de decisiones y satisfacción de empleados (SHRM 2026).',
        metrics: [
          { metric: 'Tiempo de contratación (antes vs después)', desc: 'La IA en reclutamiento debería comprimir esto. Pero emparejálo con la calidad de contratación a los 90 días — contrataciones malas más rápidas son peores que buenas lentas.' },
          { metric: 'Calidad de contratación a los 90/180 días', desc: '¿Las decisiones de reclutamiento asistidas por IA llevan a empleados con mejor rendimiento y mayor permanencia?' },
          { metric: 'Tasa de completación y aplicación de L&D', desc: 'No solo quién completó la capacitación, sino quién aplicó lo que aprendió. La IA puede personalizar el aprendizaje — medil el impacto de esa personalización.' },
          { metric: 'Índice de confianza de empleados en IA', desc: '¿Qué tan confiados están los empleados en usar herramientas de IA? ManpowerGroup encontró que la confianza bajó 18% aunque el uso subió 13%. Esta brecha es un riesgo.' },
          { metric: 'Tasa de cierre de brechas de habilidades', desc: '¿El aprendizaje asistido por IA realmente está reduciendo las brechas de habilidades, o solo generando certificados?' },
        ]
      },
      {
        area: 'Éxito del Cliente y Soporte', icon: '🎧', color: '#00B8D9',
        desc: 'La IA cara al cliente es donde los fallos de calidad son más visibles. Una mala respuesta de IA daña la confianza más rápido que cualquier otro modo de fallo.',
        data: 'Goldman Sachs encontró un aumento de productividad del 30% en servicio al cliente por IA. Pero esto solo se mantuvo cuando se combinaba con controles de calidad.',
        metrics: [
          { metric: 'CSAT / NPS (antes vs después del despliegue de IA)', desc: 'La métrica definitiva de calidad del cliente. Si esto no mejora, las ganancias de productividad son huecas.' },
          { metric: 'Tasa de contención de IA', desc: '¿Qué % de las interacciones son resueltas completamente por IA sin escalación humana? Más alto es mejor — pero solo si el CSAT se mantiene.' },
          { metric: 'Tasa de calidad de escalación', desc: 'Cuando la IA escala a un humano, ¿la transición es rica en contexto y precisa? ¿O los clientes tienen que repetirse?' },
          { metric: 'Resolución en primer contacto (FCR)', desc: '¿Se resuelve el problema en una interacción? La IA debería mejorar esto. Rastreló.' },
          { metric: 'Tiempo de agentes en casos complejos vs. rutinarios', desc: '¿Los agentes humanos están manejando ahora casos más interesantes y de mayor valor? Este es el multiplicador de satisfacción.' },
        ]
      },
    ]
  }
}

export default function S09_HRCustomerMetrics({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-6">
        {c.sections.map((section, si) => (
          <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: section.color + '40', background: section.color + '0D' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{section.icon}</span>
              <p className="font-bold text-sm" style={{ color: section.color }}>{section.area}</p>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mb-2">{section.desc}</p>
            <p className="text-xs italic mb-4" style={{ color: section.color }}>📊 {section.data}</p>
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
    </div>
  )
}
