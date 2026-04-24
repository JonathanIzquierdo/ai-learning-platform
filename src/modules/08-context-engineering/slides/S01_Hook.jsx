import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 08 · Context Engineering',
    title: 'The model is only as good as what you give it.',
    body: 'Most people think AI quality is about finding the magic words. It isn\'t. It\'s about designing the complete information environment the model operates in. That\'s Context Engineering: the deliberate design of everything in the context window.',
    shift: {
      label: 'From Prompt Engineering to Context Engineering',
      old: { label: 'Prompt Engineering (2022 thinking)', items: ['Find the magic words', 'One clever sentence changes everything', 'Tricks and jailbreaks', 'Focused on the user message'] },
      new: { label: 'Context Engineering (2025+ thinking)', items: ['Design the full information environment', 'Every layer of context shapes the output', 'Architecture, not tricks', 'Spans system prompt, memory, tools, data, examples'] },
    },
    analogy: 'Think of the model as a brilliant contractor. The context window is the complete project brief you hand them: your instructions, examples of past work, the tools they have access to, and all relevant background. A vague brief gets mediocre work. A precise, complete brief gets excellent work. Context Engineering is the discipline of writing that brief.',
    five: [
      { n: '1', layer: 'Instructions', desc: 'What the model should do, how, and in what format', color: '#36B37E' },
      { n: '2', layer: 'Memory', desc: 'What the model knows about the user and past interactions', color: '#0052CC' },
      { n: '3', layer: 'Knowledge', desc: 'Documents, data, and retrieved content injected at runtime', color: '#6554C0' },
      { n: '4', layer: 'Tools', desc: 'Functions and integrations the model can call', color: '#FF991F' },
      { n: '5', layer: 'Examples', desc: 'Demonstrations of the desired input-output behavior', color: '#00B8D9' },
    ],
    note: 'This module applies to everyone who uses AI — not just developers. Even a simple chat prompt benefits from better context design.'
  },
  es: {
    eyebrow: 'Módulo 08 · Context Engineering',
    title: 'El modelo es tan bueno como lo que le das.',
    body: 'La mayoría de la gente cree que la calidad de la IA tiene que ver con encontrar las palabras mágicas. No es así. Se trata de diseñar el entorno de información completo en el que opera el modelo. Eso es Context Engineering: el diseño deliberado de todo lo que está en la ventana de contexto.',
    shift: {
      label: 'De Prompt Engineering a Context Engineering',
      old: { label: 'Prompt Engineering (mentalidad 2022)', items: ['Encontrar las palabras mágicas', 'Una frase inteligente cambia todo', 'Trucos y jailbreaks', 'Enfocado en el mensaje del usuario'] },
      new: { label: 'Context Engineering (mentalidad 2025+)', items: ['Diseñar el entorno de información completo', 'Cada capa de contexto da forma al output', 'Arquitectura, no trucos', 'Abarca system prompt, memoria, herramientas, datos, ejemplos'] },
    },
    analogy: 'Pensá en el modelo como un contratista brillante. La ventana de contexto es el briefing de proyecto completo que le entés: tus instrucciones, ejemplos de trabajo pasado, las herramientas a las que tiene acceso y todo el contexto relevante. Un briefing vago produce trabajo mediocre. Un briefing preciso y completo produce trabajo excelente. Context Engineering es la disciplina de escribir ese briefing.',
    five: [
      { n: '1', layer: 'Instrucciones', desc: 'Qué debe hacer el modelo, cómo y en qué formato', color: '#36B37E' },
      { n: '2', layer: 'Memoria', desc: 'Lo que el modelo sabe sobre el usuario e interacciones pasadas', color: '#0052CC' },
      { n: '3', layer: 'Conocimiento', desc: 'Documentos, datos y contenido recuperado inyectado en tiempo de ejecución', color: '#6554C0' },
      { n: '4', layer: 'Herramientas', desc: 'Funciones e integraciones que el modelo puede llamar', color: '#FF991F' },
      { n: '5', layer: 'Ejemplos', desc: 'Demostraciones del comportamiento de input-output deseado', color: '#00B8D9' },
    ],
    note: 'Este módulo aplica a todos los que usan IA — no solo a desarrolladores. Incluso un prompt simple de chat se beneficia de un mejor diseño de contexto.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-red-500/8 border border-red-500/20 rounded-2xl p-4">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.shift.old.label}</p>
          {c.shift.old.items.map((item, i) => (
            <p key={i} className="text-slate-400 text-xs mb-1 flex items-center gap-2"><span className="text-red-400">✗</span>{item}</p>
          ))}
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.shift.new.label}</p>
          {c.shift.new.items.map((item, i) => (
            <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2"><span className="text-green-400">✓</span>{item}</p>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <p className="text-slate-300 text-sm leading-relaxed italic">{c.analogy}</p>
      </motion.div>
      <div className="flex flex-col gap-2 mb-4">
        {c.five.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + i * 0.07 }}
            className="flex items-center gap-3 px-4 py-2 rounded-xl border" style={{ borderColor: f.color + '40', background: f.color + '0D' }}>
            <span className="text-xs font-black w-4" style={{ color: f.color }}>{f.n}</span>
            <span className="text-white text-xs font-semibold w-28">{f.layer}</span>
            <span className="text-slate-400 text-xs">{f.desc}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-sm text-green-200">
        💡 {c.note}
      </div>
    </div>
  )
}
