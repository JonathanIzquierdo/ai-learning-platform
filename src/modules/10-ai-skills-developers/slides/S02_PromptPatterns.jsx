import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Skill 1',
    title: 'Prompting Patterns',
    body: 'Three fundamental patterns. Each one is the right choice for different situations.',
    patterns: [
      {
        name: 'Zero-Shot',
        when: 'Simple, well-defined tasks',
        bad: 'Summarize this text',
        good: 'Summarize the following text in 3 bullet points, each under 15 words. Focus on actionable takeaways for a product manager.',
        insight: 'Zero-shot works when the task is unambiguous. The quality depends entirely on how specific your instruction is.',
      },
      {
        name: 'Few-Shot',
        when: 'Pattern matching, formatting, style consistency',
        bad: 'Write a commit message for this change',
        good: 'Write a commit message following these examples:\n- fix: resolve null pointer in UserService.getProfile()\n- feat: add CSV export to dashboard reports\n- refactor: extract payment validation into separate module\n\nChange: Added rate limiting to the /api/search endpoint',
        insight: 'Few-shot is powerful when you need consistent formatting or style. 2-4 examples is usually the sweet spot.',
      },
      {
        name: 'Chain-of-Thought (CoT)',
        when: 'Complex reasoning, math, multi-step analysis',
        bad: 'Is this architecture scalable?',
        good: 'Analyze this architecture for scalability. Think step by step:\n1. Identify the bottlenecks\n2. Estimate throughput at 10x current load\n3. List what would break first\n4. Propose specific changes',
        insight: 'CoT forces the model to show its work. This dramatically reduces errors on complex tasks and lets you catch wrong reasoning early.',
      },
    ],
  },
  es: {
    eyebrow: 'Skill 1',
    title: 'Patterns de Prompting',
    body: 'Tres patterns fundamentales. Cada uno es la elecci\u00f3n correcta para diferentes situaciones.',
    patterns: [
      {
        name: 'Zero-Shot',
        when: 'Tareas simples y bien definidas',
        bad: 'Resum\u00ed este texto',
        good: 'Resum\u00ed el siguiente texto en 3 bullet points, cada uno de menos de 15 palabras. Enfocate en takeaways accionables para un product manager.',
        insight: 'Zero-shot funciona cuando la tarea no es ambigua. La calidad depende enteramente de qu\u00e9 tan espec\u00edfica es tu instrucci\u00f3n.',
      },
      {
        name: 'Few-Shot',
        when: 'Pattern matching, formateo, consistencia de estilo',
        bad: 'Escrib\u00ed un commit message para este cambio',
        good: 'Escrib\u00ed un commit message siguiendo estos ejemplos:\n- fix: resolve null pointer in UserService.getProfile()\n- feat: add CSV export to dashboard reports\n- refactor: extract payment validation into separate module\n\nCambio: Se agreg\u00f3 rate limiting al endpoint /api/search',
        insight: 'Few-shot es poderoso cuando necesit\u00e1s formateo consistente o estilo. 2-4 ejemplos suele ser el sweet spot.',
      },
      {
        name: 'Chain-of-Thought (CoT)',
        when: 'Razonamiento complejo, matem\u00e1ticas, an\u00e1lisis multi-paso',
        bad: '\u00bfEsta arquitectura escala?',
        good: 'Analiz\u00e1 esta arquitectura para escalabilidad. Pens\u00e1 paso a paso:\n1. Identific\u00e1 los cuellos de botella\n2. Estim\u00e1 el throughput a 10x de la carga actual\n3. List\u00e1 qu\u00e9 se romper\u00eda primero\n4. Propon\u00e9 cambios espec\u00edficos',
        insight: 'CoT fuerza al modelo a mostrar su trabajo. Esto reduce dr\u00e1sticamente errores en tareas complejas y te permite detectar razonamiento incorrecto temprano.',
      },
    ],
  }
}

export default function S02_PromptPatterns({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="space-y-4">
        {c.patterns.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-sm font-bold">{p.name}</span>
              <span className="text-cyan-400 text-[10px] px-2 py-0.5 bg-cyan-500/10 rounded-full">{p.when}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-2">
                <p className="text-red-400 text-[10px] font-bold uppercase mb-1">{String.fromCodePoint(0x274C)} {lang === 'es' ? 'Vago' : 'Vague'}</p>
                <p className="text-slate-400 text-xs font-mono whitespace-pre-wrap">{p.bad}</p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-2">
                <p className="text-green-400 text-[10px] font-bold uppercase mb-1">{String.fromCodePoint(0x2705)} {lang === 'es' ? 'Preciso' : 'Precise'}</p>
                <p className="text-slate-400 text-xs font-mono whitespace-pre-wrap">{p.good}</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs italic">{String.fromCodePoint(0x1F4A1)} {p.insight}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
