import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The delegation moment.',
    subtitle: 'When you merge a PR you didn\'t write line by line, something important has shifted. Most teams haven\'t fully processed what that means.',
    signing: {
      label: 'Signing the PR',
      text: 'In traditional development, merging a PR means: "I understand this code. I\'ve reviewed it. I\'m accountable for it." At Level 3, it means something different: "I reviewed the outcome. I trust the process that produced it. I\'m accountable for the result." That\'s a fundamentally different kind of ownership.'
    },
    invisible: {
      label: 'The visibility problem',
      text: 'At Level 1, it\'s easy to tell what the AI wrote — it\'s right there in the diff, and you accepted or modified it. At Level 3, the entire diff is AI-written. You can\'t easily attribute lines to "human thinking" vs. "model output." This makes it hard to:\n\nMeasure how much of your codebase is AI-generated\nIdentify where context engineering needs improvement\nDebug failures that come from model behavior vs. instruction quality'
    },
    whatToTrack: {
      label: 'What to track at Level 3',
      items: [
        { metric: 'PR pass rate', desc: 'What % of agent PRs pass all automated checks without human fixes?' },
        { metric: 'First-pass merge rate', desc: 'What % of agent PRs get merged without change requests?' },
        { metric: 'Eval regression rate', desc: 'Did quality drop after a context/prompt change?' },
        { metric: 'Cost per feature', desc: 'Tokens consumed per successfully merged PR' },
        { metric: 'Rework rate', desc: 'How often does a human need to rewrite what the agent delivered?' },
      ]
    },
    mindset: {
      label: 'The mindset shift',
      text: 'You are no longer a writer of code. You are a director of output quality. Your craft moves from implementation to context engineering, instruction design, and outcome review. The better your instructions, the less you need to rework the output.'
    }
  },
  es: {
    title: 'El momento de la delegación.',
    subtitle: 'Cuando hacés merge de un PR que no escribiste línea por línea, algo importante ha cambiado. La mayoría de los equipos no han procesado completamente qué significa eso.',
    signing: {
      label: 'Firmar el PR',
      text: 'En el desarrollo tradicional, hacer merge de un PR significa: "Entiendo este código. Lo revisé. Soy responsable de él." En el Nivel 3, significa algo diferente: "Revisé el resultado. Confío en el proceso que lo produjo. Soy responsable del resultado." Eso es un tipo de ownership fundamentalmente diferente.'
    },
    invisible: {
      label: 'El problema de visibilidad',
      text: 'En el Nivel 1, es fácil saber qué escribió la IA — está ahí en el diff, y vos lo aceptaste o modificaste. En el Nivel 3, todo el diff fue escrito por la IA. No podés fácilmente atribuir líneas a "pensamiento humano" vs. "output del modelo." Esto hace difícil:\n\nMedir qué porcentaje de tu codebase fue generado por IA\nIdentificar dónde necesita mejorar la ingeniería de contexto\nDebugear fallos que vienen del comportamiento del modelo vs. calidad de las instrucciones'
    },
    whatToTrack: {
      label: 'Qué rastrear en el Nivel 3',
      items: [
        { metric: 'Tasa de éxito de PRs', desc: '¿Qué % de los PRs del agente pasan todos los checks automáticos sin correcciones humanas?' },
        { metric: 'Tasa de merge en primera revisión', desc: '¿Qué % de los PRs del agente se mergean sin change requests?' },
        { metric: 'Tasa de regresión en evals', desc: '¿Bajó la calidad después de un cambio de contexto/prompt?' },
        { metric: 'Costo por feature', desc: 'Tokens consumidos por PR mergeado exitosamente' },
        { metric: 'Tasa de retrabajo', desc: '¿Con qué frecuencia necesita un humano reescribir lo que entregó el agente?' },
      ]
    },
    mindset: {
      label: 'El cambio de mentalidad',
      text: 'Ya no sos un escritor de código. Sos un director de calidad de output. Tu oficio pasa de la implementación a la ingeniería de contexto, el diseño de instrucciones y la revisión de resultados. Cuanto mejores sean tus instrucciones, menos necesitás retrabajar el output.'
    }
  }
}

export default function S06_DelegationMoment({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{c.signing.label}</p>
        <p className="text-slate-200 text-sm leading-relaxed">{c.signing.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.invisible.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{c.invisible.text}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">{c.whatToTrack.label}</p>
        <div className="flex flex-col gap-3">
          {c.whatToTrack.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-xs w-36 shrink-0 mt-0.5">{item.metric}</span>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-sm text-green-200">
        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.mindset.label}</p>
        {c.mindset.text}
      </motion.div>
    </div>
  )
}
