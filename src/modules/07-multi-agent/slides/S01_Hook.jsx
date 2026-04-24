import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Module 07 · Multi-Agent Systems',
    title: 'One agent is rarely enough.',
    body: 'A single AI agent is powerful. But the most valuable AI systems in production today are composed of multiple agents working together — each specialized, each responsible for a slice of the work, orchestrated to produce results no single agent could achieve alone.',
    why: {
      label: 'Why multi-agent?',
      reasons: [
        { icon: '🧠', title: 'Context limits', desc: 'A single agent can only hold so much in its context window. Multi-agent systems break large tasks into pieces that fit.' },
        { icon: '⚡', title: 'Parallelism', desc: 'Multiple agents working simultaneously cut end-to-end time dramatically. Sequential = slow. Parallel = fast.' },
        { icon: '🎯', title: 'Specialization', desc: 'A code-review agent, a security-scan agent, and a documentation agent each do their job better than one agent trying to do all three.' },
        { icon: '🔄', title: 'Verification loops', desc: 'One agent generates, another verifies. This catches errors that a single agent would both produce and miss.' },
      ]
    },
    patterns: [
      { n: '01', name: 'Sequential', color: '#0052CC', desc: 'Agents in a chain, each passing output to the next' },
      { n: '02', name: 'Parallel', color: '#36B37E', desc: 'Agents running simultaneously, results merged' },
      { n: '03', name: 'Hierarchical', color: '#6554C0', desc: 'Orchestrator delegates to specialized sub-agents' },
      { n: '04', name: 'Loop / Feedback', color: '#FF991F', desc: 'Agent iterates until quality threshold is met' },
      { n: '05', name: 'Handoff', color: '#00B8D9', desc: 'Agent transfers control to a specialized peer' },
    ],
    note: 'This module focuses on practical patterns, not theory. Every pattern includes a Visma use case you can build today.'
  },
  es: {
    eyebrow: 'Módulo 07 · Sistemas Multi-Agente',
    title: 'Un solo agente rara vez es suficiente.',
    body: 'Un solo agente de IA es poderoso. Pero los sistemas de IA más valiosos en producción hoy están compuestos por múltiples agentes trabajando juntos — cada uno especializado, cada uno responsable de una parte del trabajo, orquestados para producir resultados que ningún agente solo podría lograr.',
    why: {
      label: '¿Por qué multi-agente?',
      reasons: [
        { icon: '🧠', title: 'Límites de contexto', desc: 'Un solo agente solo puede mantener tanto en su ventana de contexto. Los sistemas multi-agente dividen tareas grandes en piezas que encajan.' },
        { icon: '⚡', title: 'Paralelismo', desc: 'Múltiples agentes trabajando simultáneamente reducen dramáticamente el tiempo de extremo a extremo. Secuencial = lento. Paralelo = rápido.' },
        { icon: '🎯', title: 'Especialización', desc: 'Un agente de revisión de código, uno de escaneo de seguridad y uno de documentación cada uno hace su trabajo mejor que un solo agente intentando hacer los tres.' },
        { icon: '🔄', title: 'Loops de verificación', desc: 'Un agente genera, otro verifica. Esto captura errores que un solo agente produciría y perdería a la vez.' },
      ]
    },
    patterns: [
      { n: '01', name: 'Secuencial', color: '#0052CC', desc: 'Agentes en cadena, cada uno pasa el output al siguiente' },
      { n: '02', name: 'Paralelo', color: '#36B37E', desc: 'Agentes corriendo simultáneamente, resultados fusionados' },
      { n: '03', name: 'Jerárquico', color: '#6554C0', desc: 'Orquestador delega a sub-agentes especializados' },
      { n: '04', name: 'Loop / Feedback', color: '#FF991F', desc: 'Agente itera hasta alcanzar el umbral de calidad' },
      { n: '05', name: 'Handoff', color: '#00B8D9', desc: 'Agente transfiere el control a un par especializado' },
    ],
    note: 'Este módulo se enfoca en patrones prácticos, no en teoría. Cada patrón incluye un caso de uso de Visma que podés construir hoy.'
  }
}

export default function S01_Hook({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">{c.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.body}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">{c.why.label}</p>
        <div className="grid grid-cols-2 gap-3">
          {c.why.reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-xl shrink-0">{r.icon}</span>
              <div>
                <p className="text-white text-xs font-semibold mb-0.5">{r.title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex flex-col gap-2 mb-6">
        {c.patterns.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.07 }}
            className="flex items-center gap-3 px-4 py-2 rounded-xl border" style={{ borderColor: p.color + '40', background: p.color + '0D' }}>
            <span className="text-xs font-black w-6" style={{ color: p.color }}>{p.n}</span>
            <span className="text-white text-xs font-semibold w-24">{p.name}</span>
            <span className="text-slate-400 text-xs">{p.desc}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-sm text-purple-200">
        💡 {c.note}
      </div>
    </div>
  )
}
