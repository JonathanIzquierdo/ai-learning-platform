import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Layers 4 & 5: Tools & Examples.',
    subtitle: 'Tools give the model agency. Examples give the model taste. Together, they complete the context.',
    tools: {
      label: 'Layer 4: Tools',
      desc: 'Tools are functions the model can call to take actions or retrieve real-time information. Without tools, the model can only generate text. With tools, it can act.',
      examples: [
        { tool: 'Web search', what: 'Lets model access current information beyond training cutoff' },
        { tool: 'Code interpreter', what: 'Lets model execute code and return real results' },
        { tool: 'Database query', what: 'Lets model retrieve live data from your systems' },
        { tool: 'Calendar/email', what: 'Lets model create events, send messages, take workflow actions' },
        { tool: 'File read/write', what: 'Lets model access and create documents' },
      ],
      key: 'Tool design principle: give the model exactly the tools it needs for the task. More tools = more confusion and more attack surface. Minimum viable toolset per task.'
    },
    examples: {
      label: 'Layer 5: Examples (Few-Shot Learning)',
      desc: 'Examples are the most underused context layer. Showing the model what good output looks like — rather than describing it — dramatically improves quality.',
      zero: {
        label: 'Zero-shot (no examples)',
        prompt: 'Classify this customer feedback as positive, neutral, or negative: "The product took 3 weeks to arrive."',
        problem: 'The model must guess your classification criteria. Borderline cases will be inconsistent.'
      },
      few: {
        label: 'Few-shot (with examples)',
        prompt: 'Classify customer feedback. Examples: \n"Fast delivery!" → positive\n"It arrived, nothing special" → neutral\n"Took 3 weeks, unacceptable" → negative\n\nNow classify: "The product took 3 weeks to arrive."',
        result: 'The model now has calibration examples. It classifies consistently with your criteria, not generic criteria.'
      },
      whenToUse: [
        'When format precision matters — show the exact output structure you want',
        'When you have domain-specific definitions that differ from general usage',
        'When zero-shot results are inconsistent on edge cases',
        'When tone calibration is critical — show voice, not just describe it',
      ]
    }
  },
  es: {
    title: 'Capas 4 y 5: Herramientas y Ejemplos.',
    subtitle: 'Las herramientas le dan agencia al modelo. Los ejemplos le dan gusto. Juntos, completan el contexto.',
    tools: {
      label: 'Capa 4: Herramientas',
      desc: 'Las herramientas son funciones que el modelo puede llamar para tomar acciones o recuperar información en tiempo real. Sin herramientas, el modelo solo puede generar texto. Con herramientas, puede actuar.',
      examples: [
        { tool: 'Búsqueda web', what: 'Permite al modelo acceder a información actual más allá del corte de entrenamiento' },
        { tool: 'Intérprete de código', what: 'Permite al modelo ejecutar código y devolver resultados reales' },
        { tool: 'Consulta de base de datos', what: 'Permite al modelo recuperar datos en vivo de tus sistemas' },
        { tool: 'Calendario/email', what: 'Permite al modelo crear eventos, enviar mensajes, tomar acciones de flujo de trabajo' },
        { tool: 'Leer/escribir archivos', what: 'Permite al modelo acceder y crear documentos' },
      ],
      key: 'Principio de diseño de herramientas: dale al modelo exactamente las herramientas que necesita para la tarea. Más herramientas = más confusión y mayor superficie de ataque. Conjunto mínimo viable de herramientas por tarea.'
    },
    examples: {
      label: 'Capa 5: Ejemplos (Few-Shot Learning)',
      desc: 'Los ejemplos son la capa de contexto más subutilizada. Mostrarle al modelo cómo se ve un buen output — en lugar de describirlo — mejora dramáticamente la calidad.',
      zero: {
        label: 'Zero-shot (sin ejemplos)',
        prompt: 'Clasificar este feedback de cliente como positivo, neutral o negativo: "El producto tardó 3 semanas en llegar."',
        problem: 'El modelo debe adivinar tus criterios de clasificación. Los casos límite serán inconsistentes.'
      },
      few: {
        label: 'Few-shot (con ejemplos)',
        prompt: 'Clasificar feedback de clientes. Ejemplos: \n"¡Entrega rápida!" → positivo\n"Llegó, nada especial" → neutral\n"Tardó 3 semanas, inaceptable" → negativo\n\nAhora clasificar: "El producto tardó 3 semanas en llegar."',
        result: 'El modelo ahora tiene ejemplos de calibración. Clasifica consistentemente según tus criterios, no criterios genéricos.'
      },
      whenToUse: [
        'Cuando la precisión del formato importa — mostrá la estructura exacta de output que querés',
        'Cuando tenés definiciones específicas del dominio que difieren del uso general',
        'Cuando los resultados zero-shot son inconsistentes en casos extremos',
        'Cuando la calibración del tono es crítica — mostrá la voz, no solo la describás',
      ]
    }
  }
}

export default function S05_ToolsExamples({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-orange-600/20 text-orange-400 text-xs font-black px-2 py-1 rounded">Layer 4+5</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5 mb-6">
        <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">{c.tools.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{c.tools.desc}</p>
        <div className="grid md:grid-cols-2 gap-2 mb-3">
          {c.tools.examples.map((t, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-orange-400 text-xs">‣</span>
              <div><span className="text-white text-xs font-semibold">{t.tool}: </span><span className="text-slate-400 text-xs">{t.what}</span></div>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs italic">🔑 {c.tools.key}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.examples.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{c.examples.desc}</p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-3">
            <p className="text-red-400 text-xs font-bold mb-2">{c.examples.zero.label}</p>
            <div className="bg-slate-900/50 rounded px-2 py-1 mb-2">
              <p className="text-slate-400 text-xs font-mono">{c.examples.zero.prompt}</p>
            </div>
            <p className="text-slate-500 text-xs italic">{c.examples.zero.problem}</p>
          </div>
          <div className="bg-green-500/8 border border-green-500/20 rounded-xl p-3">
            <p className="text-green-400 text-xs font-bold mb-2">{c.examples.few.label}</p>
            <div className="bg-slate-900/50 rounded px-2 py-1 mb-2">
              <p className="text-slate-400 text-xs font-mono whitespace-pre-line">{c.examples.few.prompt}</p>
            </div>
            <p className="text-green-300 text-xs">✓ {c.examples.few.result}</p>
          </div>
        </div>
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">When to use few-shot</p>
        {c.examples.whenToUse.map((w, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2">
            <span className="text-cyan-400">‣</span>{w}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
