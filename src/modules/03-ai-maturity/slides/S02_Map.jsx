import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The 4 maturity levels.',
    subtitle: 'Think of these as gears, not stages. You don\'t retire Level 1 when you reach Level 4 — you use all of them, for the right tasks.',
    levels: [
      {
        n: '1', name: 'Assistance', color: '#378ADD',
        tagline: 'AI completes your thoughts',
        who: 'Everyone using Copilot, Claude, or ChatGPT today',
        what: 'You drive every step. AI suggests, you decide. Autocomplete, drafting, explaining, summarizing.',
        output: 'You wrote it. AI helped.',
        measure: 'Hard to measure — the human output is indistinguishable from AI-assisted output.',
        risk: 'Low. You review everything before it ships.',
      },
      {
        n: '2', name: 'Supervision', color: '#6554C0',
        tagline: 'AI executes your instructions',
        who: 'Devs writing CLAUDE.md files, system prompts, and agent rules',
        what: 'You write instructions (skills, rules, context). The agent runs tasks. You supervise the output and correct course.',
        output: 'AI wrote it. You reviewed and approved every output.',
        measure: 'Output quality tracks with your instruction quality. Measurable via evals.',
        risk: 'Medium. Agent can misinterpret instructions. Evals catch regressions.',
      },
      {
        n: '3', name: 'Delegation', color: '#FF991F',
        tagline: 'AI owns the execution, you own the outcome',
        who: 'Teams using Claude Code or Copilot to open PRs autonomously',
        what: 'You define the goal. The agent plans, executes, tests, and delivers. You review the result, not each step.',
        output: 'AI wrote it, planned it, tested it. You signed off on the result.',
        measure: 'PR quality, test pass rate, cost per feature. Evals are essential.',
        risk: 'High if done without evals. The agent can confidently deliver wrong things.',
      },
      {
        n: '4', name: 'Orchestration', color: '#36B37E',
        tagline: 'Agents manage agents',
        who: 'Where Visma is heading',
        what: 'An orchestrator agent receives a high-level goal, breaks it into sub-tasks, assigns them to specialized agents, monitors progress, and synthesizes results.',
        output: 'A network of agents produced it. A human set the goal and reviewed the final output.',
        measure: 'End-to-end workflow metrics: time, cost, quality, reliability.',
        risk: 'Very high without robust evals, observability, and circuit breakers.',
      },
    ]
  },
  es: {
    title: 'Los 4 niveles de madurez.',
    subtitle: 'Pensá en estos como marchas, no como etapas. No retirás el Nivel 1 cuando llegás al Nivel 4 — usás todos, para las tareas correctas.',
    levels: [
      {
        n: '1', name: 'Asistencia', color: '#378ADD',
        tagline: 'La IA completa tus pensamientos',
        who: 'Todos los que usan Copilot, Claude o ChatGPT hoy',
        what: 'Vos manejás cada paso. La IA sugiere, vos decídis. Autocompletado, redacción, explicación, resumen.',
        output: 'Vos lo escribiste. La IA ayudó.',
        measure: 'Difícil de medir — el output humano es indistinguible del output asistido por IA.',
        risk: 'Bajo. Vos revisás todo antes de que llegue a producción.',
      },
      {
        n: '2', name: 'Supervisión', color: '#6554C0',
        tagline: 'La IA ejecuta tus instrucciones',
        who: 'Devs que escriben archivos CLAUDE.md, system prompts y reglas de agentes',
        what: 'Vos escribís las instrucciones (skills, reglas, contexto). El agente corre las tareas. Vos supervisión el output y corrigís el rumbo.',
        output: 'La IA lo escribió. Vos revisaste y aprobaste cada output.',
        measure: 'La calidad del output va con la calidad de tus instrucciones. Medible vía evals.',
        risk: 'Medio. El agente puede malinterpretar instrucciones. Los evals detectan regresiones.',
      },
      {
        n: '3', name: 'Delegación', color: '#FF991F',
        tagline: 'La IA es dueña de la ejecución, vos del resultado',
        who: 'Equipos que usan Claude Code o Copilot para abrir PRs de forma autónoma',
        what: 'Vos definís el objetivo. El agente planifica, ejecuta, testea y entrega. Vos revisás el resultado, no cada paso.',
        output: 'La IA lo escribió, lo planificó, lo testeó. Vos firmás el resultado.',
        measure: 'Calidad del PR, tasa de tests que pasan, costo por feature. Los evals son esenciales.',
        risk: 'Alto sin evals. El agente puede entregar cosas incorrectas con total confianza.',
      },
      {
        n: '4', name: 'Orquestación', color: '#36B37E',
        tagline: 'Agentes gestionan agentes',
        who: 'A dónde se dirige Visma',
        what: 'Un agente orquestador recibe un objetivo de alto nivel, lo divide en sub-tareas, las asigna a agentes especializados, monitorea el progreso y sintetiza los resultados.',
        output: 'Una red de agentes lo produjo. Un humano definió el objetivo y revisó el output final.',
        measure: 'Métricas de flujo end-to-end: tiempo, costo, calidad, confiabilidad.',
        risk: 'Muy alto sin evals robustos, observabilidad y circuit breakers.',
      },
    ]
  }
}

export default function S02_Map({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-5">
        {c.levels.map((lv, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="rounded-2xl border p-5" style={{ borderColor: lv.color + '40', background: lv.color + '0C' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: lv.color + '25', color: lv.color }}>{lv.n}</div>
              <div>
                <p className="font-bold text-white text-sm">{lv.name}</p>
                <p className="text-xs italic" style={{ color: lv.color }}>{lv.tagline}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-slate-500 mb-1">Who</p>
                <p className="text-slate-300">{lv.who}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">What</p>
                <p className="text-slate-300">{lv.what}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Output ownership</p>
                <p className="text-slate-300">{lv.output}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Risk</p>
                <p className="text-slate-300">{lv.risk}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
