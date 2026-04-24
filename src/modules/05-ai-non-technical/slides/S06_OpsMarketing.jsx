import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'AI workflows for Operations & Marketing.',
    subtitle: 'Two very different functions — both with massive AI leverage when applied to the right tasks.',
    ops: {
      label: 'Operations',
      color: '#FF991F',
      useCases: [
        { icon: '📋', title: 'Process documentation', desc: 'Describe a process verbally or paste messy notes → AI structures it into a clear SOP with steps, decision points, and owners.' },
        { icon: '📧', title: 'Vendor & supplier communication', desc: 'Describe the situation → AI drafts professional negotiation emails, follow-ups, or escalation messages adapted to your tone.' },
        { icon: '🔍', title: 'Meeting preparation', desc: 'Paste the agenda and context → AI generates a briefing doc, key questions to raise, and a summary template to fill in after.' },
        { icon: '📊', title: 'Status reports & updates', desc: 'Paste your raw notes or data → AI structures them into a clean executive update with headline, details, and next steps.' },
        { icon: '🔄', title: 'Process improvement brainstorming', desc: 'Describe a workflow that\'s slow or painful → AI suggests 5-7 improvements, both quick wins and structural changes.' },
      ]
    },
    marketing: {
      label: 'Marketing',
      color: '#6554C0',
      useCases: [
        { icon: '✏️', title: 'Content first drafts', desc: 'Briefs, blog posts, LinkedIn updates, email campaigns — AI drafts at full speed, you edit for voice and accuracy.' },
        { icon: '🎯', title: 'Audience adaptation', desc: 'Write once for one audience → ask AI to rewrite for 3 different segments in seconds. Same message, different language.' },
        { icon: '📊', title: 'Campaign brief creation', desc: 'Describe the campaign goal, audience, and budget → AI generates a structured brief with objectives, key messages, channels, and KPIs.' },
        { icon: '🔍', title: 'Competitor & market research', desc: 'Ask AI to summarize what it knows about a competitor, trend, or market segment. Not real-time data, but fast and structured.' },
        { icon: '📝', title: 'Copy variations for A/B testing', desc: 'Write the original → ask AI for 5 variations with different angles. Instant A/B test material.' },
      ]
    },
    tip: 'Marketing teams using AI for content save 3-5 hours per week per person on first drafts alone. The secret: never publish AI output verbatim. Always add your brand voice, local context, and fact-check claims.'
  },
  es: {
    title: 'Flujos de trabajo de IA para Operaciones y Marketing.',
    subtitle: 'Dos funciones muy diferentes — ambas con enorme apalancamiento de IA cuando se aplica a las tareas correctas.',
    ops: {
      label: 'Operaciones',
      color: '#FF991F',
      useCases: [
        { icon: '📋', title: 'Documentación de procesos', desc: 'Describí un proceso verbalmente o pegá notas desordenadas → la IA lo estructura en un SOP claro con pasos, puntos de decisión y dueños.' },
        { icon: '📧', title: 'Comunicación con proveedores', desc: 'Describí la situación → la IA redacta emails profesionales de negociación, seguimiento o escalación adaptados a tu tono.' },
        { icon: '🔍', title: 'Preparación de reuniones', desc: 'Pegá la agenda y el contexto → la IA genera un documento de briefing, preguntas clave para plantear y una plantilla de resumen para completar después.' },
        { icon: '📊', title: 'Reportes de estado y actualizaciones', desc: 'Pegá tus notas brutas o datos → la IA los estructura en una actualización ejecutiva limpia con titular, detalles y próximos pasos.' },
        { icon: '🔄', title: 'Brainstorming de mejora de procesos', desc: 'Describí un flujo de trabajo que es lento o doloroso → la IA sugiere 5-7 mejoras, tanto quick wins como cambios estructurales.' },
      ]
    },
    marketing: {
      label: 'Marketing',
      color: '#6554C0',
      useCases: [
        { icon: '✏️', title: 'Primeros borradores de contenido', desc: 'Briefs, posts de blog, actualizaciones de LinkedIn, campañas de email — la IA redacta a toda velocidad, vos editás para voz y precisión.' },
        { icon: '🎯', title: 'Adaptación de audiencia', desc: 'Escribí una vez para una audiencia → pedíl a la IA que lo reescriba para 3 segmentos diferentes en segundos. El mismo mensaje, lenguaje diferente.' },
        { icon: '📊', title: 'Creación de brief de campaña', desc: 'Describí el objetivo de la campaña, audiencia y presupuesto → la IA genera un brief estructurado con objetivos, mensajes clave, canales y KPIs.' },
        { icon: '🔍', title: 'Investigación de competidores y mercado', desc: 'Pedíl a la IA que resuma lo que sabe sobre un competidor, tendencia o segmento de mercado. No son datos en tiempo real, pero son rápidos y estructurados.' },
        { icon: '📝', title: 'Variaciones de copy para A/B testing', desc: 'Escribí el original → pedí a la IA 5 variaciones con diferentes ángulos. Material de A/B test instantáneo.' },
      ]
    },
    tip: 'Los equipos de Marketing que usan IA para contenido ahorran 3-5 horas por semana por persona solo en primeros borradores. El secreto: nunca publicás el output de la IA literalmente. Siempre agrégale tu voz de marca, contexto local y verificá los hechos.'
  }
}

export default function S06_OpsMarketing({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      {[c.ops, c.marketing].map((section, si) => (
        <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.2 }}
          className="rounded-2xl border p-5 mb-6" style={{ borderColor: section.color + '40', background: section.color + '0D' }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: section.color }}>{section.label}</p>
          <div className="flex flex-col gap-2">
            {section.useCases.map((uc, i) => (
              <div key={i} className="bg-slate-800/60 rounded-xl p-3 flex gap-3">
                <span className="text-lg shrink-0">{uc.icon}</span>
                <div>
                  <p className="text-white text-xs font-semibold mb-1">{uc.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
