import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Build your own AI assistant.',
    subtitle: 'A system prompt turns a generic AI into your personal work assistant. It takes 10 minutes to set up and pays dividends every day.',
    what: {
      label: 'What is a system prompt?',
      text: 'A system prompt is a set of hidden instructions you give the AI before your conversation starts. It tells the AI who it is, what it knows about you, how it should respond, and what rules it must follow. You write it once — and every conversation benefits from it.'
    },
    anatomy: {
      label: 'Anatomy of a good personal assistant prompt',
      sections: [
        { section: 'Your role & context', example: 'You are a work assistant for [Name], a Finance Business Partner at Visma LATAM. They work across multiple companies in the region and report to the CFO.', why: 'Grounds every response in your actual work context.' },
        { section: 'How to communicate', example: 'Always respond in Spanish unless asked otherwise. Be concise and direct. Use bullet points for lists. Never use corporate buzzwords.', why: 'Shapes the tone and format to match how you actually work.' },
        { section: 'Your priorities & constraints', example: 'Prioritize accuracy over speed. When making financial estimates, always state assumptions. Never share specific numbers without noting they require verification.', why: 'Adds the guardrails that matter for your role.' },
        { section: 'Standing knowledge', example: 'Visma is a Nordic software company with operations across LATAM. Key tools: SAP, Salesforce, Google Workspace. Fiscal year ends December 31.', why: 'Saves you from re-explaining context every single conversation.' },
        { section: 'Recurring tasks', example: 'When asked to draft a meeting summary, always include: date, attendees, decisions made, action items with owners and due dates.', why: 'Automates your most repeated output formats.' },
      ]
    },
    tip: 'Start small. Write a 5-line system prompt today. Add to it as you discover what you need. In two weeks you\'ll have a personalized assistant that knows your job as well as you do.'
  },
  es: {
    title: 'Armá tu propio asistente de IA.',
    subtitle: 'Un system prompt convierte una IA genérica en tu asistente personal de trabajo. Lleva 10 minutos configurarlo y te da dividendos todos los días.',
    what: {
      label: '¿Qué es un system prompt?',
      text: 'Un system prompt es un conjunto de instrucciones ocultas que le das a la IA antes de que empiece la conversación. Le dice a la IA quién es, qué sabe de vos, cómo debe responder y qué reglas debe seguir. Lo escribís una vez — y cada conversación se beneficia de él.'
    },
    anatomy: {
      label: 'Anatomía de un buen prompt de asistente personal',
      sections: [
        { section: 'Tu rol y contexto', example: 'Sos un asistente de trabajo para [Nombre], un Finance Business Partner en Visma LATAM. Trabaja en múltiples empresas de la región y reporta al CFO.', why: 'Fundamenta cada respuesta en tu contexto de trabajo real.' },
        { section: 'Cómo comunicarse', example: 'Siempre respondé en español salvo que se indique lo contrario. Sé conciso y directo. Usá bullets para listas. Nunca uses jerga corporativa.', why: 'Da forma al tono y formato para que coincida con cómo trabajas realmente.' },
        { section: 'Tus prioridades y restricciones', example: 'Priorizala precisión sobre la velocidad. Al hacer estimaciones financieras, siempre declara los supuestos. Nunca compartas números específicos sin notar que requieren verificación.', why: 'Agrega las barreras de seguridad que importan para tu rol.' },
        { section: 'Conocimiento permanente', example: 'Visma es una empresa de software nórdica con operaciones en toda LATAM. Herramientas clave: SAP, Salesforce, Google Workspace. El año fiscal termina el 31 de diciembre.', why: 'Te ahorra re-explicar el contexto en cada conversación.' },
        { section: 'Tareas recurrentes', example: 'Cuando se te pida redactar un resumen de reunión, siempre incluí: fecha, asistentes, decisiones tomadas, ítems de acción con dueños y fechas límite.', why: 'Automatiza tus formatos de output más repetidos.' },
      ]
    },
    tip: 'Empezá simple. Escribí un system prompt de 5 líneas hoy. Agrégale cosas a medida que descubrís lo que necesitás. En dos semanas vas a tener un asistente personalizado que conoce tu trabajo tan bien como vos.'
  }
}

export default function S03_PersonalAssistant({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.what.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.what.text}</p>
      </motion.div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.anatomy.label}</p>
      <div className="flex flex-col gap-3 mb-6">
        {c.anatomy.sections.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <p className="text-cyan-400 text-xs font-bold mb-2">{s.section}</p>
            <div className="bg-slate-900 rounded-lg px-3 py-2 mb-2">
              <p className="text-slate-300 text-xs italic leading-relaxed">"{s.example}"</p>
            </div>
            <p className="text-slate-500 text-xs">→ {s.why}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-sm text-amber-200">
        💡 {c.tip}
      </div>
    </div>
  )
}
