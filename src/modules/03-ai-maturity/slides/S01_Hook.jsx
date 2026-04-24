import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 03 · AI Maturity',
    title: '"We\'re already using AI." Are you sure?',
    body: 'Across Visma, teams say they\'re using AI. And they are. But there\'s a massive difference between using AI as a smarter autocomplete and running autonomous agent workflows that work while you sleep.',
    reality: {
      label: 'The uncomfortable truth',
      text: 'Most teams are at Level 1. They use Copilot to finish sentences, Claude to draft emails, ChatGPT to explain code. That\'s real value — but it\'s not the transformation Visma is aiming for. It\'s the equivalent of getting a Formula 1 car and only driving it in first gear.'
    },
    vismaGoal: {
      label: 'Where Visma wants to go',
      text: 'Visma\'s goal is agentic orchestration — where specialized AI agents autonomously plan, execute, and verify complex workflows, with humans setting direction and reviewing outcomes, not executing every step. That\'s Level 4. And the path there goes through Levels 1, 2, and 3 — in order.'
    },
    levels: [
      { n: '1', label: 'Assistance', color: '#378ADD' },
      { n: '2', label: 'Supervision', color: '#6554C0' },
      { n: '3', label: 'Delegation', color: '#FF991F' },
      { n: '4', label: 'Orchestration', color: '#36B37E' },
    ],
    note: 'This module is about understanding where you are, where you\'re going, and what it takes to move forward — without skipping steps.'
  },
  es: {
    eyebrow: 'Módulo 03 · Madurez de IA',
    title: '"Ya estamos usando IA." ¿Estás seguro?',
    body: 'En toda Visma, los equipos dicen que usan IA. Y es cierto. Pero hay una diferencia enorme entre usar IA como un autocompletado más inteligente y correr flujos de trabajo agénticos autónomos que funcionan mientras dormís.',
    reality: {
      label: 'La verdad incómoda',
      text: 'La mayoría de los equipos están en el Nivel 1. Usan Copilot para completar frases, Claude para redactar emails, ChatGPT para explicar código. Eso tiene valor real — pero no es la transformación que busca Visma. Es el equivalente de conseguir un auto de Fórmula 1 y manejarlo solo en primera marcha.'
    },
    vismaGoal: {
      label: 'A dónde quiere llegar Visma',
      text: 'El objetivo de Visma es la orquestación agéntica — donde agentes de IA especializados planifican, ejecutan y verifican flujos de trabajo complejos de forma autónoma, con humanos marcando la dirección y revisando resultados, no ejecutando cada paso. Ese es el Nivel 4. Y el camino pasa por los Niveles 1, 2 y 3 — en orden.'
    },
    levels: [
      { n: '1', label: 'Asistencia', color: '#378ADD' },
      { n: '2', label: 'Supervisión', color: '#6554C0' },
      { n: '3', label: 'Delegación', color: '#FF991F' },
      { n: '4', label: 'Orquestación', color: '#36B37E' },
    ],
    note: 'Este módulo trata de entender dónde estás, a dónde vas, y qué se necesita para avanzar — sin saltarse pasos.'
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
        className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.reality.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.reality.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 mb-8">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.vismaGoal.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.vismaGoal.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="flex gap-2">
        {c.levels.map((lv, i) => (
          <div key={i} className="flex-1 rounded-xl border px-3 py-3 text-center"
            style={{ borderColor: lv.color + '50', background: lv.color + '12' }}>
            <p className="text-lg font-bold" style={{ color: lv.color }}>{lv.n}</p>
            <p className="text-xs text-slate-400 mt-0.5">{lv.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
