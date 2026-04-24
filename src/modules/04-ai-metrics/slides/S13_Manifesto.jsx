import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const content = {
  en: {
    badge: '📊 Module complete!',
    title: 'Your metrics manifesto.',
    subtitle: 'Redefining what success looks like in an AI-powered organization.',
    manifesto: [
      { icon: '🚫', title: 'Stop counting what AI produces', desc: 'Volume metrics are dead. Lines of code, emails sent, documents generated — AI inflates all of them. Stop reporting these as productivity.' },
      { icon: '✅', title: 'Start measuring what gets accepted and used', desc: 'Acceptance rate, rework rate, outcome impact. These are inflation-proof because they require human judgment or real-world validation.' },
      { icon: '📸', title: 'Always capture a baseline first', desc: 'Before any AI deployment, document your current state. Without a before, your after means nothing. This is non-negotiable.' },
      { icon: '⚡🎯😊', title: 'Measure all three multipliers', desc: 'Speed, Quality, and Happiness. If you only track one, you\'re missing two thirds of the story — and probably gaming the one you do track.' },
      { icon: '🔮', title: 'Invest in leading indicators', desc: 'Adoption rate, acceptance rate trend, confidence index. These tell you where you\'re going, not just where you\'ve been.' },
      { icon: '💬', title: 'Ask: what decision does this metric enable?', desc: 'If no one can name a decision they\'ll make with a given metric, cut it. Metrics are for deciding, not reporting.' },
      { icon: '🌍', title: 'This applies to every team', desc: 'Not just engineering. HR, finance, ops, customer success — every team using AI needs to redesign their KPIs for the post-volume era.' },
    ],
    solow: {
      label: 'The Solow Paradox, revisited',
      text: 'In 1987, economist Robert Solow said: "You can see the computer age everywhere but in the productivity statistics." The same thing is happening with AI today. 80% of firms report no measurable gains — not because AI isn\'t working, but because they\'re measuring the wrong things. The teams that will win are the ones that change what they measure — not just what they use.'
    },
    cta: 'Share this module with your team 🔗'
  },
  es: {
    badge: '📊 ¡Módulo completado!',
    title: 'Tu manifiesto de métricas.',
    subtitle: 'Redefiniendo qué significa el éxito en una organización potenciada por IA.',
    manifesto: [
      { icon: '🚫', title: 'Dejá de contar lo que produce la IA', desc: 'Las métricas de volumen están muertas. Líneas de código, emails enviados, documentos generados — la IA infla todo esto. Dejá de reportar esto como productividad.' },
      { icon: '✅', title: 'Empezá a medir lo que se acepta y se usa', desc: 'Tasa de aceptación, tasa de retrabajo, impacto en resultados. Estas son resistentes a la inflación porque requieren juicio humano o validación del mundo real.' },
      { icon: '📸', title: 'Siempre capturá un baseline primero', desc: 'Antes de cualquier despliegue de IA, documentá tu estado actual. Sin un antes, tu después no significa nada. Esto es innegociable.' },
      { icon: '⚡🎯😊', title: 'Medí los tres multiplicadores', desc: 'Velocidad, Calidad y Felicidad. Si solo rastreas uno, te estás perdiendo dos tercios de la historia — y probablemente manipulando el que sí rastreas.' },
      { icon: '🔮', title: 'Invertí en indicadores adelantados', desc: 'Tasa de adopción, tendencia de tasa de aceptación, índice de confianza. Estos te dicen hacia dónde vas, no solo dónde estuviste.' },
      { icon: '💬', title: 'Preguntá: ¿qué decisión habilita esta métrica?', desc: 'Si nadie puede nombrar una decisión que tomará con una métrica dada, eliminála. Las métricas son para decidir, no para reportar.' },
      { icon: '🌍', title: 'Esto aplica a todos los equipos', desc: 'No solo a ingeniería. RRHH, finanzas, ops, éxito del cliente — todos los equipos que usan IA necesitan rediseñar sus KPIs para la era post-volumen.' },
    ],
    solow: {
      label: 'La Paradoja de Solow, revisitada',
      text: 'En 1987, el economista Robert Solow dijo: "Puedes ver la era de las computadoras en todas partes menos en las estadísticas de productividad." Lo mismo está pasando con la IA hoy. El 80% de las empresas reportan cero ganancias medibles — no porque la IA no esté funcionando, sino porque están midiendo las cosas equivocadas. Los equipos que van a ganar son los que cambien lo que miden — no solo lo que usan.'
    },
    cta: 'Compartí este módulo con tu equipo 🔗'
  }
}

export default function S13_Manifesto({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="text-4xl mb-4">{c.badge}</motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h2>
      <p className="text-slate-400 text-base mb-10">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.manifesto.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4">
            <span className="text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.solow.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.solow.text}</p>
      </motion.div>
      <div className="bg-orange-600/10 border border-orange-600/30 rounded-xl p-4 text-center text-sm text-orange-400 font-semibold">
        {c.cta}
      </div>
    </div>
  )
}
