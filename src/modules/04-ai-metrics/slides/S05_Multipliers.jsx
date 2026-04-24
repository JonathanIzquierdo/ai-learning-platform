import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The 3 multipliers.',
    subtitle: 'AI doesn\'t just make you faster. It multiplies across three dimensions — and each one needs its own measurement strategy.',
    multipliers: [
      {
        icon: '⚡', name: 'Speed', color: '#0052CC',
        headline: 'How much faster can you move?',
        desc: 'The most obvious multiplier. AI reduces the time to produce first drafts, find information, write code, and respond to requests. But speed without quality is just faster mistakes.',
        metrics: [
          'Time-to-first-draft (before vs after)',
          'Cycle time per task (end-to-end)',
          'Time spent on low-value / repetitive work',
          'Throughput per person per week',
        ],
        trap: 'Speed is easy to measure and easy to game. Always pair it with a quality metric.'
      },
      {
        icon: '🎯', name: 'Quality', color: '#36B37E',
        headline: 'Is the output actually better?',
        desc: 'A 30% faster output that\'s wrong or gets reworked isn\'t a gain — it\'s a hidden cost. Quality metrics measure whether the faster output is also better, more accurate, and more useful.',
        metrics: [
          'Acceptance / approval rate of AI output',
          'Rework rate (% outputs requiring significant changes)',
          'Error or defect rate (before vs after)',
          'Customer satisfaction (CSAT/NPS)',
          'Code churn rate (reverted within 2 weeks)',
        ],
        trap: 'Harder to measure but more important. Without quality data, you can\'t tell if you\'re going faster toward a better place or faster off a cliff.'
      },
      {
        icon: '😊', name: 'Happiness', color: '#FF991F',
        headline: 'Do people actually enjoy working this way?',
        desc: 'The most underrated multiplier. Teams that feel AI is helping them grow are 3x more likely to use it effectively. Teams that feel AI is threatening them resist, misuse, or quietly abandon it. Happiness is not soft — it\'s the adoption driver.',
        metrics: [
          'Employee satisfaction with AI tools (pulse survey)',
          'Time spent on work people find meaningful',
          'Skill development trajectory (are people learning or atrophying?)',
          'AI tool adoption rate and retention over 90 days',
          'Confidence index: do people trust AI output?',
        ],
        trap: 'Most organizations measure this last, if at all. But it\'s often the leading indicator of whether the other two multipliers will materialize.'
      }
    ],
    compound: {
      label: 'The compound effect',
      text: 'Speed × Quality × Happiness = True organizational impact. A team that\'s 2x faster, producing 1.5x better output, and 1.4x happier delivers roughly 4x the real-world value. But if any one multiplier is negative — fast but low quality, high quality but miserable, happy but slow — the compound breaks down.'
    }
  },
  es: {
    title: 'Los 3 multiplicadores.',
    subtitle: 'La IA no solo te hace más rápido. Multiplica en tres dimensiones — y cada una necesita su propia estrategia de medición.',
    multipliers: [
      {
        icon: '⚡', name: 'Velocidad', color: '#0052CC',
        headline: '¿Cuánto más rápido podés moverte?',
        desc: 'El multiplicador más obvio. La IA reduce el tiempo para producir primeros borradores, encontrar información, escribir código y responder solicitudes. Pero la velocidad sin calidad es solo cometer errores más rápido.',
        metrics: [
          'Tiempo hasta el primer borrador (antes vs después)',
          'Tiempo de ciclo por tarea (de punta a punta)',
          'Tiempo en trabajo de bajo valor / repetitivo',
          'Throughput por persona por semana',
        ],
        trap: 'La velocidad es fácil de medir y fácil de manipular. Siempre emparelála con una métrica de calidad.'
      },
      {
        icon: '🎯', name: 'Calidad', color: '#36B37E',
        headline: '¿El output es realmente mejor?',
        desc: 'Un output 30% más rápido pero incorrecto o que necesita retrabajo no es una ganancia — es un costo oculto. Las métricas de calidad miden si el output más rápido también es mejor, más preciso y más útil.',
        metrics: [
          'Tasa de aceptación / aprobación del output de IA',
          'Tasa de retrabajo (% de outputs que requieren cambios significativos)',
          'Tasa de errores o defectos (antes vs después)',
          'Satisfacción del cliente (CSAT/NPS)',
          'Tasa de churn de código (revertido dentro de 2 semanas)',
        ],
        trap: 'Más difícil de medir pero más importante. Sin datos de calidad, no podés saber si vas más rápido hacia un mejor lugar o más rápido hacia un precipicio.'
      },
      {
        icon: '😊', name: 'Felicidad', color: '#FF991F',
        headline: '¿A la gente le gusta trabajar de esta manera?',
        desc: 'El multiplicador más subestimado. Los equipos que sienten que la IA los ayuda a crecer tienen 3x más probabilidades de usarla efectivamente. Los equipos que sienten que la IA los amenaza resisten, mal usan o la abandonan silenciosamente. La felicidad no es soft — es el driver de adopción.',
        metrics: [
          'Satisfacción de empleados con herramientas de IA (encuesta de pulso)',
          'Tiempo en trabajo que la gente encuentra significativo',
          'Trayectoria de desarrollo de habilidades (¿la gente está aprendiendo o atrofiándose?)',
          'Tasa de adopción y retención de herramientas de IA en 90 días',
          'Índice de confianza: ¿la gente confía en el output de IA?',
        ],
        trap: 'La mayoría de las organizaciones miden esto último, si es que lo miden. Pero a menudo es el indicador adelantado de si los otros dos multiplicadores se van a materializar.'
      }
    ],
    compound: {
      label: 'El efecto compuesto',
      text: 'Velocidad × Calidad × Felicidad = Impacto organizacional real. Un equipo que es 2x más rápido, produce output 1.5x mejor y es 1.4x más feliz entrega aproximadamente 4x el valor real. Pero si alguno de los multiplicadores es negativo — rápido pero mala calidad, alta calidad pero miserable, feliz pero lento — el efecto compuesto se rompe.'
    }
  }
}

export default function S05_Multipliers({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5 mb-8">
        {c.multipliers.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="rounded-2xl border p-5" style={{ borderColor: m.color + '40', background: m.color + '0D' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{m.icon}</span>
              <p className="font-bold text-sm" style={{ color: m.color }}>{m.name}</p>
              <p className="text-slate-300 text-sm italic ml-1">— {m.headline}</p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{m.desc}</p>
            <div className="flex flex-col gap-1 mb-3">
              {m.metrics.map((met, j) => (
                <p key={j} className="text-xs flex items-center gap-2" style={{ color: m.color }}>
                  <span>‣</span><span className="text-slate-300">{met}</span>
                </p>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic">⚠️ {m.trap}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{c.compound.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.compound.text}</p>
      </motion.div>
    </div>
  )
}
