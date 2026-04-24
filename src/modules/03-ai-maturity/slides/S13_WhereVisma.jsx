import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '🚀 Module complete!',
    title: 'Where is Visma now. Where are we going.',
    now: {
      label: 'Where most Visma teams are today',
      text: 'The honest picture: most teams are between Level 1 and Level 2. Copilot and Claude are widely used for assistance. A growing number of engineers are writing CLAUDE.md files and experimenting with agent mode. A handful of teams are running Level 3 delegation workflows. Very few are at Level 4.',
      distribution: [
        { level: 'L1 — Assistance', pct: '~60%', color: '#378ADD' },
        { level: 'L2 — Supervision', pct: '~30%', color: '#6554C0' },
        { level: 'L3 — Delegation', pct: '~8%', color: '#FF991F' },
        { level: 'L4 — Orchestration', pct: '~2%', color: '#36B37E' },
      ]
    },
    goal: {
      label: 'Where Visma is going',
      text: 'The target is a Visma where the majority of engineering teams are operating at Level 3, with leading teams experimenting at Level 4. That\'s not a 3-month goal — it\'s an 18-month trajectory. And it starts with every engineer understanding what level they\'re at today and what one step forward looks like.'
    },
    yourNextStep: {
      label: 'Your next step from here',
      steps: [
        { from: 'At L1', to: 'Write your first CLAUDE.md or skill file for a repeated task' },
        { from: 'At L2', to: 'Add one automated eval to a workflow you already supervise' },
        { from: 'At L3', to: 'Set up token monitoring and a cost-per-PR baseline' },
        { from: 'At L3+', to: 'Design a two-agent pipeline with a reviewer agent checking the coder\'s output' },
      ]
    },
    closing: 'The teams that figure this out first won\'t just be faster — they\'ll be operating at a fundamentally different capacity. That\'s the Visma we\'re building toward.',
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '🚀 ¡Módulo completado!',
    title: 'Dónde está Visma hoy. A dónde vamos.',
    now: {
      label: 'Dónde está la mayoría de los equipos Visma hoy',
      text: 'El panorama honesto: la mayoría de los equipos están entre el Nivel 1 y el Nivel 2. Copilot y Claude se usan ampliamente para asistencia. Un número creciente de ingenieros escribe archivos CLAUDE.md y experimenta con el agent mode. Un puñado de equipos corre flujos de delegación de Nivel 3. Muy pocos están en el Nivel 4.',
      distribution: [
        { level: 'L1 — Asistencia', pct: '~60%', color: '#378ADD' },
        { level: 'L2 — Supervisión', pct: '~30%', color: '#6554C0' },
        { level: 'L3 — Delegación', pct: '~8%', color: '#FF991F' },
        { level: 'L4 — Orquestación', pct: '~2%', color: '#36B37E' },
      ]
    },
    goal: {
      label: 'A dónde va Visma',
      text: 'El objetivo es una Visma donde la mayoría de los equipos de ingeniería estén operando en el Nivel 3, con los equipos líder experimentando en el Nivel 4. Eso no es un objetivo de 3 meses — es una trayectoria de 18 meses. Y empieza con cada ingeniero entendiendo en qué nivel está hoy y cómo es un paso adelante.'
    },
    yourNextStep: {
      label: 'Tu próximo paso desde acá',
      steps: [
        { from: 'En L1', to: 'Escribí tu primer CLAUDE.md o archivo de skill para una tarea repetida' },
        { from: 'En L2', to: 'Agregá un eval automatizado a un flujo de trabajo que ya supervisión' },
        { from: 'En L3', to: 'Configurá monitoreo de tokens y un baseline de costo por PR' },
        { from: 'En L3+', to: 'Diseñá un pipeline de dos agentes con un agente revisor chequeando el output del agente coder' },
      ]
    },
    closing: 'Los equipos que descifren esto primero no solo serán más rápidos — operarán con una capacidad fundamentalmente diferente. Eso es la Visma que estamos construyendo.',
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S13_WhereVisma({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{c.title}</h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{c.now.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-5">{c.now.text}</p>
        <div className="flex flex-col gap-2">
          {c.now.distribution.map((d, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs font-semibold w-36 shrink-0" style={{ color: d.color }}>{d.level}</span>
              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: d.pct }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="h-full rounded-full"
                  style={{ background: d.color }}
                />
              </div>
              <span className="text-xs text-slate-400 w-8 text-right">{d.pct}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 mb-6">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.goal.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed">{c.goal.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">{c.yourNextStep.label}</p>
        <div className="flex flex-col gap-3">
          {c.yourNextStep.steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <span className="text-cyan-400 text-xs font-bold">{s.from}: </span>
                <span className="text-slate-300 text-xs leading-relaxed">{s.to}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-sm text-slate-200 leading-relaxed mb-4">
        {c.closing}
      </div>
      <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-4 text-center text-sm text-green-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
