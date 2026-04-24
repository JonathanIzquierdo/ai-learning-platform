import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '💼 Module complete!',
    title: 'Your AI-powered work week starts now.',
    subtitle: 'You don\'t need to be a developer to get 10x value from AI. You just need to start.',
    actions: [
      { when: 'Today', action: 'Write your personal assistant system prompt — even 5 lines. Save it somewhere accessible.', icon: '✏️' },
      { when: 'This week', action: 'Identify 3 BAU tasks you do every week. Try using AI for the first draft of each one.', icon: '📋' },
      { when: 'This month', action: 'Build a prompt library: save the prompts that work well. You\'ll reuse them forever.', icon: '📚' },
      { when: 'Ongoing', action: 'Treat every AI interaction as practice. The more specific your input, the better your output.', icon: '🔄' },
    ],
    principles: [
      'AI does the draft. You do the judgment.',
      'Better brief = better output. Context is everything.',
      'Never share confidential or personal data without anonymizing first.',
      'Always review before publishing, sending, or presenting.',
      'The goal is to free your time for the work that needs you.',
    ],
    closing: 'The biggest barrier to getting value from AI is not technical. It\'s the habit. Start today — even with one task. In 30 days, you won\'t remember how you worked without it.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '💼 ¡Módulo completado!',
    title: 'Tu semana de trabajo potenciada por IA empieza ahora.',
    subtitle: 'No necesitás ser desarrollador para obtener 10x de valor de la IA. Solo necesitás empezar.',
    actions: [
      { when: 'Hoy', action: 'Escribí tu system prompt de asistente personal — aunque sean 5 líneas. Guardálo en algún lugar accesible.', icon: '✏️' },
      { when: 'Esta semana', action: 'Identificá 3 tareas de BAU que hacés cada semana. Intentá usar IA para el primer borrador de cada una.', icon: '📋' },
      { when: 'Este mes', action: 'Construí una biblioteca de prompts: guardá los prompts que funcionan bien. Los vas a reusar para siempre.', icon: '📚' },
      { when: 'De forma continua', action: 'Tratá cada interacción con IA como práctica. Cuanto más específico sea tu input, mejor será tu output.', icon: '🔄' },
    ],
    principles: [
      'La IA hace el borrador. Vos hacés el juicio.',
      'Mejor briefing = mejor output. El contexto lo es todo.',
      'Nunca compartas datos confidenciales o personales sin anonimizar primero.',
      'Siempre revisá antes de publicar, enviar o presentar.',
      'El objetivo es liberar tu tiempo para el trabajo que te necesita a vos.',
    ],
    closing: 'La mayor barrera para obtener valor de la IA no es técnica. Es el hábito. Empezá hoy — aunque sea con una tarea. En 30 días, no vas a recordar cómo trabajabas sin ella.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S11_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-10">{c.subtitle}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.actions.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-xl shrink-0">{a.icon}</span>
            <div>
              <p className="text-cyan-400 text-xs font-bold mb-1">{a.when}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{a.action}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">5 principles to take with you</p>
        {c.principles.map((p, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle size={14} className="text-cyan-400 mt-0.5 shrink-0" />
            <p className="text-slate-300 text-sm">{p}</p>
          </div>
        ))}
      </motion.div>
      <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-sm text-slate-200 leading-relaxed mb-4">
        {c.closing}
      </div>
      <div className="bg-cyan-600/10 border border-cyan-600/30 rounded-xl p-4 text-center text-sm text-cyan-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
