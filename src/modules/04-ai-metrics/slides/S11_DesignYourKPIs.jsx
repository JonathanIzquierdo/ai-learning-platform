import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Design your own KPIs.',
    subtitle: 'A framework for any team, any role, any AI use case.',
    intro: 'The best metrics for your team are not the ones in this module — they\'re the ones you design yourself using these questions. Generic KPIs produce generic insights.',
    steps: [
      {
        n: '01', color: '#FF991F',
        title: 'Start with the outcome, not the activity',
        question: 'What does success look like for our users / customers / stakeholders — not for us?',
        example: 'Bad: "We want to increase AI usage." Good: "We want customers to resolve issues without calling support."',
        why: 'AI can inflate any activity metric. Only outcome metrics are inflation-proof.'
      },
      {
        n: '02', color: '#0052CC',
        title: 'Capture the before',
        question: 'What is the current baseline for this outcome, and how will we measure it the same way after?',
        example: 'Current FCR: 62%. Current average handle time: 8.4 min. Current CSAT: 3.9. Measurement date: May 1.',
        why: 'You cannot prove AI impact without a baseline. There are no shortcuts here.'
      },
      {
        n: '03', color: '#36B37E',
        title: 'Define the attribution window',
        question: 'How long will we wait before measuring impact? What other factors could explain the change?',
        example: '90-day attribution window. Confounders: new product launch, team size change, seasonal patterns.',
        why: 'Without attribution rules, any improvement gets credited to AI and any decline gets explained away.'
      },
      {
        n: '04', color: '#6554C0',
        title: 'Pick one metric per dimension',
        question: 'For Speed, Quality, and Happiness — what is the single most important metric for our context?',
        example: 'Speed: cycle time. Quality: defect rate per release. Happiness: developer time on interesting work.',
        why: 'Three well-chosen metrics beat twelve mediocre ones. Fewer metrics = more focus = better decisions.'
      },
      {
        n: '05', color: '#00B8D9',
        title: 'Build in the review cadence',
        question: 'Who reviews these metrics, when, and what decision do they make based on the data?',
        example: 'Weekly review by team lead. Monthly review by leadership. If acceptance rate drops below 65%, we audit the context files.',
        why: 'A metric nobody acts on is just a number. The review cadence is what turns data into decisions.'
      },
    ],
    template: {
      label: 'Your KPI design template',
      fields: [
        'Outcome we\'re measuring:',
        'Current baseline value:',
        'Measurement method (same before and after):',
        'Attribution window:',
        'Speed metric:',
        'Quality metric:',
        'Happiness metric:',
        'Review cadence and owner:',
        'Decision that will be made based on this data:',
      ]
    }
  },
  es: {
    title: 'Diseñá tus propios KPIs.',
    subtitle: 'Un framework para cualquier equipo, rol y caso de uso de IA.',
    intro: 'Las mejores métricas para tu equipo no son las de este módulo — son las que diseñás vos mismo usando estas preguntas. Los KPIs genéricos producen insights genéricos.',
    steps: [
      {
        n: '01', color: '#FF991F',
        title: 'Empezá con el resultado, no la actividad',
        question: '¿Cómo se ve el éxito para nuestros usuarios / clientes / stakeholders — no para nosotros?',
        example: 'Malo: "Queremos aumentar el uso de IA." Bueno: "Queremos que los clientes resuelvan problemas sin llamar al soporte."',
        why: 'La IA puede inflar cualquier métrica de actividad. Solo las métricas de resultado son resistentes a la inflación.'
      },
      {
        n: '02', color: '#0052CC',
        title: 'Capturá el antes',
        question: '¿Cuál es el baseline actual para este resultado y cómo lo vamos a medir de la misma forma después?',
        example: 'FCR actual: 62%. Tiempo promedio de resolución: 8.4 min. CSAT: 3.9. Fecha de medición: 1 de mayo.',
        why: 'No podés demostrar el impacto de la IA sin un baseline. No hay atajos.'
      },
      {
        n: '03', color: '#36B37E',
        title: 'Definí la ventana de atribución',
        question: '¿Cuánto tiempo esperamos antes de medir el impacto? ¿Qué otros factores podrían explicar el cambio?',
        example: 'Ventana de atribución de 90 días. Factores de confusión: nuevo lanzamiento de producto, cambio en el tamaño del equipo, patrones estacionales.',
        why: 'Sin reglas de atribución, cualquier mejora se le acredita a la IA y cualquier decaimiento se explica con otra cosa.'
      },
      {
        n: '04', color: '#6554C0',
        title: 'Elegí una métrica por dimensión',
        question: 'Para Velocidad, Calidad y Felicidad — ¿cuál es la métrica más importante para nuestro contexto?',
        example: 'Velocidad: tiempo de ciclo. Calidad: tasa de defectos por release. Felicidad: tiempo de desarrolladores en trabajo interesante.',
        why: 'Tres métricas bien elegidas superan a doce mediocres. Menos métricas = más foco = mejores decisiones.'
      },
      {
        n: '05', color: '#00B8D9',
        title: 'Incorporá la cadencia de revisión',
        question: '¿Quién revisa estas métricas, cuándo y qué decisión toma basándose en los datos?',
        example: 'Revisión semanal por team lead. Revisión mensual por liderazgo. Si la tasa de aceptación cae por debajo del 65%, auditamos los archivos de contexto.',
        why: 'Una métrica sobre la que nadie actúa es solo un número. La cadencia de revisión es lo que convierte datos en decisiones.'
      },
    ],
    template: {
      label: 'Tu plantilla de diseño de KPIs',
      fields: [
        'Resultado que estamos midiendo:',
        'Valor de baseline actual:',
        'Método de medición (igual antes y después):',
        'Ventana de atribución:',
        'Métrica de velocidad:',
        'Métrica de calidad:',
        'Métrica de felicidad:',
        'Cadencia de revisión y dueño:',
        'Decisión que se tomará basada en estos datos:',
      ]
    }
  }
}

export default function S11_DesignYourKPIs({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-4 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">{c.intro}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="rounded-xl border p-4" style={{ borderColor: step.color + '40', background: step.color + '0D' }}>
            <div className="flex items-start gap-3">
              <span className="text-lg font-black shrink-0" style={{ color: step.color }}>{step.n}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold mb-1">{step.title}</p>
                <p className="text-xs italic mb-2" style={{ color: step.color }}>“{step.question}”</p>
                <p className="text-slate-400 text-xs mb-2 leading-relaxed">{step.example}</p>
                <p className="text-slate-500 text-xs italic">{step.why}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">{c.template.label}</p>
        <div className="flex flex-col gap-2">
          {c.template.fields.map((f, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b border-slate-700/50 last:border-0">
              <p className="text-slate-400 text-xs">{f}</p>
              <div className="flex-1 h-px bg-slate-700/30" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
