import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'The Skills Layer',
    title: 'SKILL.md: Modular Agent Capabilities',
    body: 'Skills are the breakthrough concept. Instead of stuffing everything into one file, you create modular capability packages that load on-demand. The agent reads only what it needs.',
    what: 'A SKILL.md file is a markdown document inside a skill directory. It contains instructions, metadata, and pointers to resources (scripts, templates, schemas). When triggered, the agent reads the SKILL.md and follows its instructions.',
    howItWorks: [
      'User asks: "Extract text from this PDF"',
      'Agent sees the PDF skill is available (from its tool registry)',
      'Agent reads pdf-skill/SKILL.md into context',
      'SKILL.md references extract.py \u2014 agent runs it via bash',
      'Only the relevant skill consumed context. Other skills stayed unloaded.',
    ],
    structure: '.claude/skills/\n  deploy/\n    SKILL.md       # Instructions for deployment\n    deploy.sh      # Executable script\n  test/\n    SKILL.md       # Testing standards & commands\n  review/\n    SKILL.md       # Code review checklist',
    keyInsight: 'Progressive disclosure: files don\u2019t consume context until accessed. A skill can include 100 pages of API docs with zero context cost \u2014 the agent reads only the sections it needs.',
    preBuilt: 'Anthropic provides pre-built skills for common tasks: pptx, xlsx, pdf, docx, data-analysis, and more. You can also create and share custom skills across your organization via the Skills API.',
  },
  es: {
    eyebrow: 'La Capa de Skills',
    title: 'SKILL.md: Capacidades Modulares del Agente',
    body: 'Los skills son el concepto revolucionario. En vez de meter todo en un archivo, cre\u00e1s paquetes de capacidades modulares que se cargan on-demand. El agente lee solo lo que necesita.',
    what: 'Un archivo SKILL.md es un documento markdown dentro de un directorio de skill. Contiene instrucciones, metadata y punteros a recursos (scripts, templates, schemas). Cuando se activa, el agente lee el SKILL.md y sigue sus instrucciones.',
    howItWorks: [
      'El usuario pide: "Extra\u00e9 texto de este PDF"',
      'El agente ve que el skill de PDF est\u00e1 disponible (de su registro de herramientas)',
      'El agente lee pdf-skill/SKILL.md al contexto',
      'SKILL.md referencia extract.py \u2014 el agente lo ejecuta via bash',
      'Solo el skill relevante consumi\u00f3 contexto. Los otros skills quedaron sin cargar.',
    ],
    structure: '.claude/skills/\n  deploy/\n    SKILL.md       # Instrucciones para deploy\n    deploy.sh      # Script ejecutable\n  test/\n    SKILL.md       # Est\u00e1ndares y comandos de testing\n  review/\n    SKILL.md       # Checklist de code review',
    keyInsight: 'Progressive disclosure: los archivos no consumen contexto hasta que se acceden. Un skill puede incluir 100 p\u00e1ginas de docs de API con cero costo de contexto \u2014 el agente lee solo las secciones que necesita.',
    preBuilt: 'Anthropic provee skills pre-construidos para tareas comunes: pptx, xlsx, pdf, docx, data-analysis, y m\u00e1s. Tambi\u00e9n pod\u00e9s crear y compartir skills custom en tu organizaci\u00f3n via la Skills API.',
  }
}

export default function S03_SkillMd({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-4 max-w-xl">{c.body}</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-slate-400 text-sm mb-6">{c.what}</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-violet-500/30 rounded-xl p-4 mb-4">
        <p className="text-violet-400 text-xs font-bold uppercase mb-3">{lang === 'es' ? 'C\u00f3mo funciona' : 'How it works'}</p>
        <div className="space-y-2">
          {c.howItWorks.map((step, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="bg-violet-500/20 text-violet-300 text-xs font-bold w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-slate-300 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-900/50 rounded-lg p-3 mb-4">
        <p className="text-violet-300 text-xs font-mono whitespace-pre-wrap">{c.structure}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 mb-3 text-sm text-green-200">
        {String.fromCodePoint(0x1F4A1)} {c.keyInsight}
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="text-slate-500 text-xs">{String.fromCodePoint(0x1F4E6)} {c.preBuilt}</motion.p>
    </div>
  )
}
