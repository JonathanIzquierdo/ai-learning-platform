import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Skill 3',
    title: 'Tool Use & Function Calling',
    body: 'The model doesn\u2019t just generate text \u2014 it can call functions, query databases, search the web, and execute code. This is what makes agents possible.',
    concepts: [
      { name: 'What it is', detail: 'You define tools (functions with parameters). The model decides when to call them and with what arguments. You execute the function and return the result.' },
      { name: 'Why it matters', detail: 'Without tools, the model is limited to its training data. With tools, it can access real-time data, perform calculations, interact with APIs, and take actions in the real world.' },
      { name: 'MCP (Model Context Protocol)', detail: 'A standard protocol that lets models connect to external tools and data sources through a unified interface. Think of it as USB for AI \u2014 one protocol, many tools.' },
    ],
    bestPractices: [
      'Define clear, descriptive tool schemas \u2014 the model uses descriptions to decide when to call them',
      'Validate tool arguments before executing \u2014 never trust model output blindly',
      'Use tool_choice: "auto" to let the model decide, "required" when you know a tool is needed',
      'Limit the number of tools exposed \u2014 too many confuse the model (8-12 is a good max)',
      'Always handle tool errors gracefully \u2014 the model should know when a call failed',
    ],
    warning: 'Tool use = real-world side effects. A model calling a delete API is not the same as generating text about deleting. Always add confirmation steps for destructive operations.',
  },
  es: {
    eyebrow: 'Skill 3',
    title: 'Tool Use y Function Calling',
    body: 'El modelo no solo genera texto \u2014 puede llamar funciones, consultar bases de datos, buscar en la web y ejecutar c\u00f3digo. Esto es lo que hace posible los agentes.',
    concepts: [
      { name: 'Qu\u00e9 es', detail: 'Defin\u00eds tools (funciones con par\u00e1metros). El modelo decide cu\u00e1ndo llamarlas y con qu\u00e9 argumentos. Vos ejecut\u00e1s la funci\u00f3n y devolv\u00e9s el resultado.' },
      { name: 'Por qu\u00e9 importa', detail: 'Sin tools, el modelo est\u00e1 limitado a sus datos de entrenamiento. Con tools, puede acceder a datos en tiempo real, hacer c\u00e1lculos, interactuar con APIs y tomar acciones en el mundo real.' },
      { name: 'MCP (Model Context Protocol)', detail: 'Un protocolo est\u00e1ndar que permite a los modelos conectarse a herramientas externas y fuentes de datos a trav\u00e9s de una interfaz unificada. Pens\u00e1 en USB para IA \u2014 un protocolo, muchas herramientas.' },
    ],
    bestPractices: [
      'Defin\u00ed schemas de tools claros y descriptivos \u2014 el modelo usa las descripciones para decidir cu\u00e1ndo llamarlos',
      'Valid\u00e1 los argumentos del tool antes de ejecutar \u2014 nunca conf\u00edes ciegamente en el output del modelo',
      'Us\u00e1 tool_choice: "auto" para dejar que el modelo decida, "required" cuando sab\u00e9s que un tool es necesario',
      'Limit\u00e1 la cantidad de tools expuestos \u2014 demasiados confunden al modelo (8-12 es un buen m\u00e1ximo)',
      'Siempre manej\u00e1 errores de tools gracefully \u2014 el modelo debe saber cuando una llamada fall\u00f3',
    ],
    warning: 'Tool use = efectos secundarios reales. Un modelo llamando una API de delete no es lo mismo que generar texto sobre borrar. Siempre agreg\u00e1 pasos de confirmaci\u00f3n para operaciones destructivas.',
  }
}

export default function S05_ToolUse({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-slate-300 text-base mb-6 max-w-xl">{c.body}</motion.p>
      <div className="space-y-3 mb-6">
        {c.concepts.map((concept, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <p className="text-white text-sm font-semibold mb-1">{concept.name}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{concept.detail}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-cyan-500/30 rounded-xl p-4 mb-4">
        <p className="text-cyan-400 text-xs font-bold uppercase mb-3">Best Practices</p>
        <div className="space-y-2">
          {c.bestPractices.map((bp, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-cyan-400 text-xs mt-1">{String.fromCodePoint(0x25B6, 0xFE0F)}</span>
              <p className="text-slate-300 text-sm">{bp}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-200">
        {String.fromCodePoint(0x26A0, 0xFE0F)} {c.warning}
      </motion.div>
    </div>
  )
}
