import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Tokens: the unit of everything.',
    subtitle: 'Every interaction with an LLM — every character you type, every word it generates — is measured in tokens. Tokens are the currency of AI.',
    whatIs: 'A token is roughly ¾ of a word. "Hello" is 1 token. "Unbelievable" is 3. A line of code is ~5-15 tokens. Tokenization splits text into chunks the model can process.',
    types: [
      { name: 'Input tokens', desc: 'Everything you send: your prompt, the conversation history, the system instructions, any documents or code you attach.', color: '#378ADD' },
      { name: 'Output tokens', desc: 'Everything the model generates back. Output tokens are typically 3-5× more expensive than input tokens.', color: '#6554C0' },
      { name: 'Cached tokens', desc: 'Repeated context (like a long system prompt) can be cached. Cached tokens cost ~10× less. This is how context-heavy apps stay affordable.', color: '#36B37E' },
    ],
    contextWindow: {
      label: 'The context window',
      text: 'The context window is the model\'s working memory — the maximum number of tokens it can "see" at once. Claude\'s context window is 200,000 tokens (~150,000 words). Everything outside the window is forgotten.',
      warning: 'This is why long agentic sessions are expensive: the entire conversation history stays in context, growing with every step.'
    },
    sizes: [
      { item: '1 tweet', tokens: '~30 tokens' },
      { item: '1 page of text', tokens: '~500 tokens' },
      { item: '1 avg code file', tokens: '~1,500 tokens' },
      { item: 'This entire module', tokens: '~8,000 tokens' },
      { item: 'Claude context window', tokens: '200,000 tokens' },
    ]
  },
  es: {
    title: 'Tokens: la unidad de todo.',
    subtitle: 'Cada interacción con un LLM — cada carácter que escribís, cada palabra que genera — se mide en tokens. Los tokens son la moneda de la IA.',
    whatIs: 'Un token es aproximadamente ¾ de una palabra. "Hola" es 1 token. "Increíble" son 3. Una línea de código son ~5-15 tokens. La tokenización divide el texto en fragmentos que el modelo puede procesar.',
    types: [
      { name: 'Tokens de input', desc: 'Todo lo que envías: tu prompt, el historial de conversación, las instrucciones del sistema, cualquier documento o código que adjuntés.', color: '#378ADD' },
      { name: 'Tokens de output', desc: 'Todo lo que el modelo genera. Los tokens de output son típicamente 3-5× más caros que los de input.', color: '#6554C0' },
      { name: 'Tokens cacheados', desc: 'El contexto repetido (como un prompt de sistema largo) puede cachearse. Los tokens cacheados cuestan ~10× menos. Así es como las apps con mucho contexto siguen siendo accesibles.', color: '#36B37E' },
    ],
    contextWindow: {
      label: 'La context window',
      text: 'La context window es la memoria de trabajo del modelo — el número máximo de tokens que puede "ver" a la vez. La context window de Claude es de 200.000 tokens (~150.000 palabras). Todo lo que está fuera de la ventana se olvida.',
      warning: 'Por eso las sesiones agénticas largas son caras: todo el historial de conversación permanece en contexto, creciendo en cada paso.'
    },
    sizes: [
      { item: '1 tweet', tokens: '~30 tokens' },
      { item: '1 página de texto', tokens: '~500 tokens' },
      { item: '1 archivo de código promedio', tokens: '~1.500 tokens' },
      { item: 'Este módulo completo', tokens: '~8.000 tokens' },
      { item: 'Context window de Claude', tokens: '200.000 tokens' },
    ]
  }
}

export default function S03_Tokens({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-2xl">{c.whatIs}</p>
      <div className="flex flex-col gap-3 mb-8">
        {c.types.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}
            className="rounded-xl border p-4" style={{ borderColor: t.color + '40', background: t.color + '0D' }}>
            <p className="text-xs font-bold mb-1" style={{ color: t.color }}>{t.name}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">{c.contextWindow.label}</p>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">{c.contextWindow.text}</p>
        <p className="text-amber-300 text-xs leading-relaxed">⚠️ {c.contextWindow.warning}</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {c.sizes.map((s, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-center">
            <p className="text-cyan-400 text-xs font-bold mb-1">{s.tokens}</p>
            <p className="text-slate-500 text-xs">{s.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
