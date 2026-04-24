import { motion } from 'framer-motion'

const content = {
  en: {
    badge: '🧠 Module complete!',
    title: 'The full map.',
    subtitle: 'Here\'s how everything connects. This is your mental model for all AI discussions at Visma.',
    map: [
      {
        layer: 'Foundation', color: '#378ADD',
        items: [
          { label: 'LLM', desc: 'The prediction engine' },
          { label: 'Tokens', desc: 'The unit of everything' },
          { label: 'Context window', desc: 'The working memory' },
        ]
      },
      {
        layer: 'Interaction', color: '#6554C0',
        items: [
          { label: 'Prompt', desc: 'Your input' },
          { label: 'System prompt', desc: 'The rules layer' },
          { label: 'Temperature', desc: 'The creativity dial' },
        ]
      },
      {
        layer: 'Intelligence', color: '#00B8D9',
        items: [
          { label: 'RAG', desc: 'External knowledge' },
          { label: 'Skills', desc: 'Reusable behavior' },
          { label: 'Fine-tuning', desc: 'Specialized models' },
        ]
      },
      {
        layer: 'Action', color: '#36B37E',
        items: [
          { label: 'Agent', desc: 'Acts autonomously' },
          { label: 'Tools', desc: 'Real-world actions' },
          { label: 'MCP', desc: 'The connector standard' },
        ]
      },
      {
        layer: 'Quality', color: '#FF991F',
        items: [
          { label: 'Evals', desc: 'Measure quality' },
          { label: 'Harness', desc: 'Run tests at scale' },
          { label: 'Cost optimization', desc: 'Use tokens wisely' },
        ]
      },
    ],
    next: [
      { module: 'Module 01', title: 'Token Awareness & Cost Optimization', desc: 'Now that you know what tokens are, learn how to use them efficiently.' },
      { module: 'Module 02', title: 'AI Evals & Harness', desc: 'Now that you know what agents and RAG are, learn how to test them.' },
    ],
    closing: 'You now speak the language of AI at Visma. Every conversation, every decision, every line of code will be clearer with this foundation.'
  },
  es: {
    badge: '🧠 ¡Módulo completado!',
    title: 'El mapa completo.',
    subtitle: 'Así es como todo se conecta. Este es tu modelo mental para todas las conversaciones de IA en Visma.',
    map: [
      {
        layer: 'Fundamento', color: '#378ADD',
        items: [
          { label: 'LLM', desc: 'El motor de predicción' },
          { label: 'Tokens', desc: 'La unidad de todo' },
          { label: 'Context window', desc: 'La memoria de trabajo' },
        ]
      },
      {
        layer: 'Interacción', color: '#6554C0',
        items: [
          { label: 'Prompt', desc: 'Tu input' },
          { label: 'System prompt', desc: 'La capa de reglas' },
          { label: 'Temperatura', desc: 'El dial de creatividad' },
        ]
      },
      {
        layer: 'Inteligencia', color: '#00B8D9',
        items: [
          { label: 'RAG', desc: 'Conocimiento externo' },
          { label: 'Skills', desc: 'Comportamiento reutilizable' },
          { label: 'Fine-tuning', desc: 'Modelos especializados' },
        ]
      },
      {
        layer: 'Acción', color: '#36B37E',
        items: [
          { label: 'Agente', desc: 'Actúa autónomamente' },
          { label: 'Tools', desc: 'Acciones en el mundo real' },
          { label: 'MCP', desc: 'El estándar conector' },
        ]
      },
      {
        layer: 'Calidad', color: '#FF991F',
        items: [
          { label: 'Evals', desc: 'Medir calidad' },
          { label: 'Harness', desc: 'Correr tests a escala' },
          { label: 'Optimización de costo', desc: 'Usar tokens con sabiduría' },
        ]
      },
    ],
    next: [
      { module: 'Módulo 01', title: 'Conciencia de Tokens y Optimización de Costos', desc: 'Ahora que sabés qué son los tokens, aprendé a usarlos eficientemente.' },
      { module: 'Módulo 02', title: 'Evals y Harness de IA', desc: 'Ahora que sabés qué son los agentes y el RAG, aprendé a testearlos.' },
    ],
    closing: 'Ahora hablás el idioma de la IA en Visma. Cada conversación, cada decisión, cada línea de código será más clara con esta base.'
  }
}

export default function S15_Map({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-400 text-base mb-10 max-w-xl">{c.subtitle}</p>
      <div className="flex flex-col gap-3 mb-10">
        {c.map.map((layer, li) => (
          <motion.div key={li} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: li * 0.1 }}
            className="flex items-start gap-4">
            <div className="w-24 shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: layer.color }}>{layer.layer}</span>
            </div>
            <div className="flex flex-wrap gap-2 flex-1">
              {layer.items.map((item, ii) => (
                <div key={ii} className="rounded-lg border px-3 py-2 text-center min-w-[90px]"
                  style={{ borderColor: layer.color + '40', background: layer.color + '12' }}>
                  <p className="text-xs font-bold" style={{ color: layer.color }}>{item.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
          {lang === 'en' ? 'Recommended next' : 'Siguiente recomendado'}
        </p>
        <div className="flex flex-col gap-3">
          {c.next.map((n, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-cyan-400 text-xs font-bold whitespace-nowrap">{n.module}</span>
              <div>
                <p className="text-white text-sm font-medium">{n.title}</p>
                <p className="text-slate-500 text-xs">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center text-sm text-cyan-200 font-medium">
        {c.closing}
      </div>
    </div>
  )
}
