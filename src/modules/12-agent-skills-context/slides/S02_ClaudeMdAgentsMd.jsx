import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'The Project Layer',
    title: 'CLAUDE.md & AGENTS.md',
    body: 'These files are the identity of your project. They load into every session before you type a single word.',
    claudeMd: {
      title: 'CLAUDE.md',
      what: 'Anthropic\u2019s proprietary format for Claude Code. Supports @imports, path-scoped rules, hierarchical memory (user/project/local scopes).',
      bestFor: 'Teams using Claude Code exclusively.',
      structure: '# Project identity (1 line)\n# Code conventions (style, tooling)\n# Testing commands\n# What NOT to do\n# Pointers to detailed docs (not the docs themselves)',
      golden: 'Keep it under 300 lines. Everything in CLAUDE.md competes for attention with the actual work. Only include what Claude would get wrong without it.',
    },
    agentsMd: {
      title: 'AGENTS.md',
      what: 'Open cross-tool standard backed by the Linux Foundation. Supported by Cursor, Copilot, Windsurf, Cline, and most major AI coding tools.',
      bestFor: 'Teams using multiple AI tools, or wanting portability.',
      tip: 'Claude Code doesn\u2019t natively read AGENTS.md yet. Standard workaround: write AGENTS.md and create a symlink: ln -s AGENTS.md CLAUDE.md',
    },
    hierarchy: {
      title: 'The Loading Hierarchy',
      levels: [
        { level: 'Enterprise', file: '~/.claude/CLAUDE.md', detail: 'Company-wide rules. Applied to all projects.' },
        { level: 'User', file: '~/.claude/CLAUDE.md (user scope)', detail: 'Your personal preferences.' },
        { level: 'Project root', file: './CLAUDE.md', detail: 'Project identity and conventions.' },
        { level: 'Subdirectory', file: './src/api/CLAUDE.md', detail: 'Directory-specific overrides. Most specific wins.' },
      ],
    },
    antiPattern: 'Don\u2019t put everything in CLAUDE.md. Claude Code\u2019s system prompt already has ~50 instructions. Keep task-specific docs in separate files and point to them.',
  },
  es: {
    eyebrow: 'La Capa de Proyecto',
    title: 'CLAUDE.md y AGENTS.md',
    body: 'Estos archivos son la identidad de tu proyecto. Se cargan en cada sesi\u00f3n antes de que escribas una sola palabra.',
    claudeMd: {
      title: 'CLAUDE.md',
      what: 'Formato propietario de Anthropic para Claude Code. Soporta @imports, reglas por path, memoria jer\u00e1rquica (scopes user/project/local).',
      bestFor: 'Equipos usando Claude Code exclusivamente.',
      structure: '# Identidad del proyecto (1 l\u00ednea)\n# Convenciones de c\u00f3digo (estilo, tooling)\n# Comandos de testing\n# Qu\u00e9 NO hacer\n# Punteros a docs detallados (no los docs mismos)',
      golden: 'Mantenelo bajo 300 l\u00edneas. Todo en CLAUDE.md compite por atenci\u00f3n con el trabajo real. Solo inclu\u00ed lo que Claude har\u00eda mal sin el archivo.',
    },
    agentsMd: {
      title: 'AGENTS.md',
      what: 'Est\u00e1ndar abierto cross-tool respaldado por la Linux Foundation. Soportado por Cursor, Copilot, Windsurf, Cline y la mayor\u00eda de herramientas de IA.',
      bestFor: 'Equipos usando m\u00faltiples herramientas de IA, o que quieren portabilidad.',
      tip: 'Claude Code no lee AGENTS.md nativamente a\u00fan. Workaround est\u00e1ndar: escrib\u00ed AGENTS.md y cre\u00e1 un symlink: ln -s AGENTS.md CLAUDE.md',
    },
    hierarchy: {
      title: 'La Jerarqu\u00eda de Carga',
      levels: [
        { level: 'Enterprise', file: '~/.claude/CLAUDE.md', detail: 'Reglas de toda la empresa.' },
        { level: 'Usuario', file: '~/.claude/CLAUDE.md (scope usuario)', detail: 'Tus preferencias personales.' },
        { level: 'Ra\u00edz del proyecto', file: './CLAUDE.md', detail: 'Identidad y convenciones del proyecto.' },
        { level: 'Subdirectorio', file: './src/api/CLAUDE.md', detail: 'Overrides por directorio. El m\u00e1s espec\u00edfico gana.' },
      ],
    },
    antiPattern: 'No pongas todo en CLAUDE.md. El system prompt de Claude Code ya tiene ~50 instrucciones. Manten\u00e9 docs espec\u00edficos en archivos separados y apunt\u00e1 a ellos.',
  }
}

export default function S02_ClaudeMdAgentsMd({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-violet-500/30 rounded-xl p-4">
          <p className="text-white text-sm font-bold mb-1">{c.claudeMd.title}</p>
          <p className="text-slate-400 text-xs mb-2">{c.claudeMd.what}</p>
          <div className="bg-slate-900/50 rounded-lg p-2 mb-2">
            <p className="text-violet-300 text-[10px] font-mono whitespace-pre-wrap">{c.claudeMd.structure}</p>
          </div>
          <p className="text-amber-300 text-xs">{String.fromCodePoint(0x2B50)} {c.claudeMd.golden}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4">
          <p className="text-white text-sm font-bold mb-1">{c.agentsMd.title}</p>
          <p className="text-slate-400 text-xs mb-2">{c.agentsMd.what}</p>
          <div className="bg-blue-500/10 rounded-lg p-2">
            <p className="text-blue-200 text-xs">{String.fromCodePoint(0x1F517)} {c.agentsMd.tip}</p>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-4">
        <p className="text-white text-xs font-bold mb-2">{c.hierarchy.title}</p>
        {c.hierarchy.levels.map((l, i) => (
          <div key={i} className="flex items-center gap-2 text-xs mb-1">
            <span className="text-violet-400 font-bold w-24 shrink-0">{l.level}</span>
            <span className="text-cyan-300 font-mono text-[10px] w-48 shrink-0">{l.file}</span>
            <span className="text-slate-500 hidden sm:block">{l.detail}</span>
          </div>
        ))}
      </motion.div>
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-sm text-red-200">
        {String.fromCodePoint(0x26A0, 0xFE0F)} {c.antiPattern}
      </div>
    </div>
  )
}
