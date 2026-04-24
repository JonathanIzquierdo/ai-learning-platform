import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '⚙️ Module complete!',
    title: 'Choose the strategy that matches the problem.',
    subtitle: 'Not the most impressive one. Not the one your competitor is using. The one that solves your specific problem.',
    summary: [
      { strategy: 'Prompting', color: '#36B37E', solve: 'Behavior & consistency', cost: 'Cheapest', speed: 'Instant', startHere: true },
      { strategy: 'RAG', color: '#0052CC', solve: 'Missing knowledge', cost: 'Moderate', speed: 'Fast to deploy', startHere: false },
      { strategy: 'Fine-tuning', color: '#6554C0', solve: 'Complex style/format', cost: 'Expensive', speed: 'Weeks to build', startHere: false },
      { strategy: 'Local Models', color: '#DE350B', solve: 'Privacy & scale cost', cost: 'Hardware upfront', speed: '1-3 days to setup', startHere: false },
    ],
    principles: [
      'Always start with prompting. 80% of problems are prompting problems.',
      'RAG is for knowledge gaps. Fine-tuning is for behavior gaps. They\'re not interchangeable.',
      'Fine-tuning without a baseline is premature optimization. Prove the task works with prompting first.',
      'Local models are a cost/privacy play — not a quality play. Cloud frontier models are still better at hard tasks.',
      'The best strategy is the one that ships fastest and can be improved iteratively.',
      'In 2026: 40% of enterprise AI includes a local component. Open-source models are within 3-5% of frontier quality.',
    ],
    quickRef: {
      label: 'Quick reference card',
      items: [
        { trigger: 'Wrong answers / outdated info', strategy: 'Update RAG knowledge base' },
        { trigger: 'Inconsistent format / style', strategy: 'Add few-shot examples first, then fine-tune' },
        { trigger: 'Data can\'t leave your network', strategy: 'Local model (Llama, Qwen, Mistral)' },
        { trigger: 'Cost too high at scale', strategy: 'Local model or fine-tune to reduce prompt size' },
        { trigger: 'Proprietary domain behavior', strategy: 'Fine-tune on domain examples' },
        { trigger: 'Everything seems wrong', strategy: 'Start over with better instructions + examples (prompting)' },
      ]
    },
    closing: 'The difference between teams that build great AI products and teams that struggle is not which strategy they choose. It\'s how systematically they diagnose the problem before choosing.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '⚙️ ¡Módulo completado!',
    title: 'Elegí la estrategia que coincide con el problema.',
    subtitle: 'No la más impresionante. No la que está usando tu competidor. La que resuelve tu problema específico.',
    summary: [
      { strategy: 'Prompting', color: '#36B37E', solve: 'Comportamiento y consistencia', cost: 'Más barato', speed: 'Instantáneo', startHere: true },
      { strategy: 'RAG', color: '#0052CC', solve: 'Conocimiento faltante', cost: 'Moderado', speed: 'Rápido de deployar', startHere: false },
      { strategy: 'Fine-tuning', color: '#6554C0', solve: 'Estilo/formato complejo', cost: 'Caro', speed: 'Semanas para construir', startHere: false },
      { strategy: 'Modelos Locales', color: '#DE350B', solve: 'Privacidad y costo a escala', cost: 'Hardware por adelantado', speed: '1-3 días de setup', startHere: false },
    ],
    principles: [
      'Siempre empezá con prompting. El 80% de los problemas son problemas de prompting.',
      'RAG es para brechas de conocimiento. Fine-tuning es para brechas de comportamiento. No son intercambiables.',
      'Fine-tuning sin un baseline es optimización prematura. Probá primero que la tarea funciona con prompting.',
      'Los modelos locales son una jugada de costo/privacidad — no de calidad. Los modelos cloud frontier siguen siendo mejores en tareas difíciles.',
      'La mejor estrategia es la que se envía más rápido y puede mejorarse iterativamente.',
      'En 2026: el 40% del enterprise AI incluye un componente local. Los modelos open-source están dentro del 3-5% de la calidad frontier.',
    ],
    quickRef: {
      label: 'Tarjeta de referencia rápida',
      items: [
        { trigger: 'Respuestas incorrectas / información desactualizada', strategy: 'Actualizar base de conocimiento RAG' },
        { trigger: 'Formato / estilo inconsistente', strategy: 'Agregar ejemplos few-shot primero, luego fine-tune' },
        { trigger: 'Los datos no pueden salir de tu red', strategy: 'Modelo local (Llama, Qwen, Mistral)' },
        { trigger: 'Costo demasiado alto a escala', strategy: 'Modelo local o fine-tune para reducir el tamaño del prompt' },
        { trigger: 'Comportamiento de dominio propietario', strategy: 'Fine-tune en ejemplos del dominio' },
        { trigger: 'Todo parece incorrecto', strategy: 'Empezar de nuevo con mejores instrucciones + ejemplos (prompting)' },
      ]
    },
    closing: 'La diferencia entre los equipos que construyen grandes productos de IA y los que tienen dificultades no es qué estrategia eligen. Es cuán sistemáticamente diagnostican el problema antes de elegir.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S09_Closing({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-8">{c.subtitle}</p>
      <div className="flex flex-col gap-2 mb-8">
        {c.summary.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl border px-4 py-3" style={{ borderColor: s.color + '40', background: s.color + '0D' }}>
            <p className="text-xs font-bold w-28" style={{ color: s.color }}>{s.strategy}</p>
            <p className="text-slate-300 text-xs flex-1">{s.solve}</p>
            <p className="text-slate-500 text-xs whitespace-nowrap">{s.cost}</p>
            {s.startHere && <span className="text-green-400 text-xs font-bold whitespace-nowrap">Start here</span>}
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">{c.quickRef.label}</p>
        {c.quickRef.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 mb-2 pb-2 border-b border-slate-700/50 last:border-0">
            <p className="text-slate-400 text-xs flex-1">{item.trigger}</p>
            <p className="text-amber-400 text-xs font-semibold w-48 text-right">→ {item.strategy}</p>
          </div>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-6">
        {c.principles.map((p, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
            <p className="text-slate-300 text-sm leading-relaxed">{p}</p>
          </div>
        ))}
      </motion.div>
      <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-sm text-slate-200 leading-relaxed mb-4">
        {c.closing}
      </div>
      <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-4 text-center text-sm text-red-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
