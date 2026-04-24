import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 05 · AI for Everyone',
    title: 'AI is not just for developers.',
    body: 'If you work in Finance, HR, Operations, Marketing, or any other business function — this module is for you. You don\'t need to write code, understand machine learning, or know what a token is. You just need to know how to put AI to work on the tasks you do every day.',
    reality: {
      label: 'The reality in 2026',
      stats: [
        { value: '40-60', label: 'minutes saved per worker per day using AI tools', source: 'McKinsey 2025' },
        { value: '30-40%', label: 'salary premium for non-technical workers who combine AI skills with domain expertise', source: 'PwC Global AI Jobs Barometer' },
        { value: '63%', label: 'of service professionals say AI helps them work faster', source: 'Salesforce 2025' },
        { value: '50%', label: 'of companies now using AI to rethink how work is done — not just speed it up', source: 'Deloitte 2026' },
      ]
    },
    whatYouWillLearn: [
      'How to use AI as your personal work assistant — daily',
      'Workflows for Finance, HR, Ops, and Marketing that work today',
      'How to build your own AI assistant with a system prompt',
      'How to redesign your BAU tasks with AI in the loop',
      'What to delegate to AI and what to keep for yourself',
    ],
    note: 'No code. No APIs. No technical setup. Everything in this module works with Claude, ChatGPT, or Gemini — tools you probably already have access to.'
  },
  es: {
    eyebrow: 'Módulo 05 · IA para Todos',
    title: 'La IA no es solo para desarrolladores.',
    body: 'Si trabajas en Finanzas, RRHH, Operaciones, Marketing o cualquier otra función de negocio — este módulo es para vos. No necesitás escribir código, entender machine learning ni saber qué es un token. Solo necesitás saber cómo poner la IA a trabajar en las tareas que hacés todos los días.',
    reality: {
      label: 'La realidad en 2026',
      stats: [
        { value: '40-60', label: 'minutos ahorrados por trabajador por día usando herramientas de IA', source: 'McKinsey 2025' },
        { value: '30-40%', label: 'de prima salarial para no-técnicos que combinan habilidades de IA con experiencia de dominio', source: 'PwC Global AI Jobs Barometer' },
        { value: '63%', label: 'de profesionales de servicios dicen que la IA les ayuda a trabajar más rápido', source: 'Salesforce 2025' },
        { value: '50%', label: 'de las empresas ya usan IA para repensar cómo se trabaja — no solo para acelerarlo', source: 'Deloitte 2026' },
      ]
    },
    whatYouWillLearn: [
      'Cómo usar la IA como tu asistente de trabajo personal — todos los días',
      'Flujos de trabajo para Finanzas, RRHH, Ops y Marketing que funcionan hoy',
      'Cómo construir tu propio asistente de IA con un system prompt',
      'Cómo rediseñar tus tareas de BAU con IA en el flujo',
      'Qué delegar a la IA y qué conservar para vos mismo',
    ],
    note: 'Sin código. Sin APIs. Sin configuración técnica. Todo en este módulo funciona con Claude, ChatGPT o Gemini — herramientas a las que probablemente ya tenés acceso.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">{c.reality.label}</p>
        <div className="grid grid-cols-2 gap-3">
          {c.reality.stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-2xl font-bold text-cyan-400 mb-1">{s.value}</p>
              <p className="text-slate-300 text-xs leading-snug mb-1">{s.label}</p>
              <p className="text-slate-500 text-xs italic">{s.source}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-4">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">What you\'ll learn</p>
        {c.whatYouWillLearn.map((item, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1.5 flex items-center gap-2">
            <span className="text-cyan-400">‣</span>{item}
          </p>
        ))}
      </motion.div>
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-sm text-cyan-200">
        💡 {c.note}
      </div>
    </div>
  )
}
