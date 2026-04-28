import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Skill 6',
    title: 'Evaluating AI Output',
    body: 'The hardest skill: knowing when the output is good enough. Most people either trust blindly or reject everything. The truth is in between.',
    levels: [
      { level: 'Syntax check', detail: 'Does it compile? Does the JSON parse? Are the types correct? This is the minimum bar.', color: 'border-green-500/40' },
      { level: 'Logic check', detail: 'Does the logic actually solve the problem? Walk through edge cases mentally. What happens with empty input? Null values? Concurrent access?', color: 'border-blue-500/40' },
      { level: 'Quality check', detail: 'Is this code you\u2019d approve in a PR? Is it maintainable? Does it follow your team\u2019s conventions? Would a junior developer understand it?', color: 'border-purple-500/40' },
      { level: 'Security check', detail: 'Does it sanitize inputs? Does it handle auth correctly? Does it expose sensitive data in logs? AI-generated code often has subtle security holes.', color: 'border-red-500/40' },
    ],
    rule: 'The golden rule: never use output you don\u2019t understand. If you can\u2019t explain what the code does to a colleague, you shouldn\u2019t ship it.',
    tools: 'For systematic evaluation at scale, use tools like Promptfoo (open source) or Braintrust. They let you run the same prompt against multiple models and compare results automatically.',
  },
  es: {
    eyebrow: 'Skill 6',
    title: 'Evaluando Output de IA',
    body: 'La habilidad m\u00e1s dif\u00edcil: saber cu\u00e1ndo el output es suficientemente bueno. La mayor\u00eda conf\u00eda ciegamente o rechaza todo. La verdad est\u00e1 en el medio.',
    levels: [
      { level: 'Check de sintaxis', detail: '\u00bfCompila? \u00bfEl JSON parsea? \u00bfLos tipos son correctos? Esta es la barra m\u00ednima.', color: 'border-green-500/40' },
      { level: 'Check de l\u00f3gica', detail: '\u00bfLa l\u00f3gica realmente resuelve el problema? Recorr\u00e9 edge cases mentalmente. \u00bfQu\u00e9 pasa con input vac\u00edo? \u00bfValores null? \u00bfAcceso concurrente?', color: 'border-blue-500/40' },
      { level: 'Check de calidad', detail: '\u00bfEste c\u00f3digo lo aprobar\u00edas en un PR? \u00bfEs mantenible? \u00bfSigue las convenciones de tu equipo? \u00bfUn dev junior lo entender\u00eda?', color: 'border-purple-500/40' },
      { level: 'Check de seguridad', detail: '\u00bfSanitiza inputs? \u00bfManeja auth correctamente? \u00bfExpone datos sensibles en logs? El c\u00f3digo generado por IA frecuentemente tiene agujeros de seguridad sutiles.', color: 'border-red-500/40' },
    ],
    rule: 'La regla de oro: nunca uses output que no entiendas. Si no pod\u00e9s explicar qu\u00e9 hace el c\u00f3digo a un colega, no deber\u00edas shippearlo.',
    tools: 'Para evaluaci\u00f3n sistem\u00e1tica a escala, us\u00e1 herramientas como Promptfoo (open source) o Braintrust. Te permiten correr el mismo prompt contra m\u00faltiples modelos y comparar resultados autom\u00e1ticamente.',
  }
}

export default function S08_Evaluation({ lang }) {
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
        {c.levels.map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
            className={`${l.color} bg-slate-800/50 rounded-r-xl p-4 border-l-2`}>
            <p className="text-white text-sm font-semibold mb-1">{l.level}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{l.detail}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4 text-sm text-amber-200">
        {String.fromCodePoint(0x2B50)} {c.rule}
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="text-slate-500 text-xs">{String.fromCodePoint(0x1F6E0, 0xFE0F)} {c.tools}</motion.p>
    </div>
  )
}
