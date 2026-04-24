import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const terms = {
  en: [
    { term: 'LLM', full: 'Large Language Model', def: 'An AI model trained on vast amounts of text to predict and generate human-like language. The engine behind ChatGPT, Claude, and Gemini.' },
    { term: 'Token', full: '', def: 'The basic unit of text an LLM processes. Roughly ¾ of a word. Both input and output are measured and priced in tokens.' },
    { term: 'Context window', full: '', def: 'The model\'s working memory — the max tokens it can process at once. Everything outside the window is forgotten.' },
    { term: 'Prompt', full: '', def: 'The text input you give to an LLM. The quality of the prompt directly determines the quality of the output.' },
    { term: 'System prompt', full: '', def: 'Hidden instructions that define the model\'s behavior, persona, and rules. Set by the developer, not visible to the user.' },
    { term: 'Temperature', full: '', def: 'Controls output randomness (0 = deterministic, 1.5+ = creative). Use 0 for factual tasks, higher for creative ones.' },
    { term: 'Hallucination', full: '', def: 'When an LLM generates confident but factually incorrect output. Happens because it pattern-matches rather than retrieves verified facts.' },
    { term: 'Agent', full: '', def: 'An LLM that can use tools, take actions, and run multi-step workflows autonomously. Acts in the world, not just responds.' },
    { term: 'Agent loop', full: '', def: 'The repeated cycle of Plan → Act → Observe → Decide that agents use to complete complex tasks.' },
    { term: 'Tool / Function call', full: '', def: 'A function the model can invoke to take actions (search, create, run code). The model requests it; your app executes it.' },
    { term: 'MCP', full: 'Model Context Protocol', def: 'The open standard for connecting AI models to external tools and services. Like USB, but for AI integrations.' },
    { term: 'MCP Server', full: '', def: 'A service that exposes tools via the MCP protocol (e.g., GitHub MCP, Slack MCP, Google Calendar MCP).' },
    { term: 'RAG', full: 'Retrieval Augmented Generation', def: 'A pattern where relevant documents are retrieved from a database and added to the model\'s context before generating a response.' },
    { term: 'Embedding', full: '', def: 'A numerical vector that represents the semantic meaning of text. Similar meanings = similar vectors. Used in vector databases for semantic search.' },
    { term: 'Vector database', full: '', def: 'A database that stores embeddings and enables semantic similarity search. The backbone of RAG systems.' },
    { term: 'Fine-tuning', full: '', def: 'Retraining a pre-trained model on specific data to specialize its behavior. Expensive and often unnecessary when RAG or prompting works.' },
    { term: 'RLHF', full: 'Reinforcement Learning from Human Feedback', def: 'Training technique where human raters score model outputs to teach it to be helpful and safe.' },
    { term: 'Skill', full: '', def: 'A reusable, modular instruction set for a specific task. Packaged so any agent can load and use it without duplicating instructions.' },
    { term: 'Agentic workflow', full: '', def: 'A multi-step AI task where an agent plans, acts, and iterates autonomously to complete a complex goal.' },
    { term: 'Prompt caching', full: '', def: 'Storing repeated context (like a long system prompt) so it only needs to be processed once. Reduces cost ~10x for cached tokens.' },
    { term: 'Inference', full: '', def: 'The process of running a trained model to generate output. When you call the API, you\'re doing inference.' },
    { term: 'Grounding', full: '', def: 'Ensuring an LLM\'s response is based on real, verifiable data rather than generated from training patterns alone. RAG is a grounding technique.' },
    { term: 'TTFT', full: 'Time To First Token', def: 'Latency from request to when the model starts streaming output. Key metric for interactive AI features.' },
    { term: 'p95 / p99', full: '', def: 'Percentile metrics. p95 latency = 95% of requests are faster than this value. Used to measure worst-case performance, not just averages.' },
    { term: 'Claude Code', full: '', def: 'Anthropic\'s agentic coding assistant. An agent that reads codebases, writes code, runs tests, and opens PRs autonomously.' },
  ],
  es: [
    { term: 'LLM', full: 'Large Language Model', def: 'Un modelo de IA entrenado en grandes cantidades de texto para predecir y generar lenguaje similar al humano. El motor detrás de ChatGPT, Claude y Gemini.' },
    { term: 'Token', full: '', def: 'La unidad básica de texto que procesa un LLM. Aproximadamente ¾ de una palabra. El input y el output se miden y se cobran en tokens.' },
    { term: 'Context window', full: '', def: 'La memoria de trabajo del modelo — los tokens máximos que puede procesar a la vez. Todo lo que está fuera de la ventana se olvida.' },
    { term: 'Prompt', full: '', def: 'El texto que le das a un LLM como input. La calidad del prompt determina directamente la calidad del output.' },
    { term: 'System prompt', full: '', def: 'Instrucciones ocultas que definen el comportamiento, personalidad y reglas del modelo. Las establece el desarrollador, no son visibles para el usuario.' },
    { term: 'Temperatura', full: '', def: 'Controla la aleatoriedad del output (0 = determinístico, 1.5+ = creativo). Usá 0 para tareas factuales, más alto para creativas.' },
    { term: 'Alucinación', full: '', def: 'Cuando un LLM genera output incorrecto pero con total confianza. Ocurre porque hace pattern-matching en lugar de recuperar hechos verificados.' },
    { term: 'Agente', full: '', def: 'Un LLM que puede usar tools, tomar acciones y correr flujos de trabajo multi-paso de forma autónoma. Actúa en el mundo, no solo responde.' },
    { term: 'Loop de agente', full: '', def: 'El ciclo repetido de Planificar → Actuar → Observar → Decidir que los agentes usan para completar tareas complejas.' },
    { term: 'Tool / Function call', full: '', def: 'Una función que el modelo puede invocar para tomar acciones (buscar, crear, correr código). El modelo la solicita; tu app la ejecuta.' },
    { term: 'MCP', full: 'Model Context Protocol', def: 'El estándar abierto para conectar modelos de IA a herramientas y servicios externos. Como USB, pero para integraciones de IA.' },
    { term: 'Servidor MCP', full: '', def: 'Un servicio que expone tools via el protocolo MCP (ej. GitHub MCP, Slack MCP, Google Calendar MCP).' },
    { term: 'RAG', full: 'Retrieval Augmented Generation', def: 'Un patrón donde se recuperan documentos relevantes de una base de datos y se agregan al contexto del modelo antes de generar una respuesta.' },
    { term: 'Embedding', full: '', def: 'Un vector numérico que representa el significado semántico del texto. Significados similares = vectores similares. Usado en bases de datos vectoriales para búsqueda semántica.' },
    { term: 'Base de datos vectorial', full: '', def: 'Una base de datos que almacena embeddings y permite búsqueda por similitud semántica. La columna vertebral de los sistemas RAG.' },
    { term: 'Fine-tuning', full: '', def: 'Reentrenar un modelo preentrenado en datos específicos para especializar su comportamiento. Caro y a menudo innecesario cuando RAG o prompting funciona.' },
    { term: 'RLHF', full: 'Reinforcement Learning from Human Feedback', def: 'Técnica de entrenamiento donde humanos puntuan outputs del modelo para enseñarle a ser útil y seguro.' },
    { term: 'Skill', full: '', def: 'Un conjunto de instrucciones modular y reutilizable para una tarea específica. Empaquetado para que cualquier agente pueda cargarlo sin duplicar instrucciones.' },
    { term: 'Flujo agéntico', full: '', def: 'Una tarea de IA multi-paso donde un agente planifica, actúa e itera de forma autónoma para completar un objetivo complejo.' },
    { term: 'Prompt caching', full: '', def: 'Almacenar contexto repetido (como un system prompt largo) para que solo necesite procesarse una vez. Reduce el costo ~10x para tokens cacheados.' },
    { term: 'Inferencia', full: '', def: 'El proceso de correr un modelo entrenado para generar output. Cuando llamás a la API, estás haciendo inferencia.' },
    { term: 'Fundamentación (Grounding)', full: '', def: 'Asegurar que la respuesta de un LLM esté basada en datos reales y verificables. RAG es una técnica de fundamentación.' },
    { term: 'TTFT', full: 'Time To First Token', def: 'Latencia desde la solicitud hasta que el modelo empieza a generar output. Métrica clave para features de IA interactivas.' },
    { term: 'p95 / p99', full: '', def: 'Métricas de percentil. Latencia p95 = el 95% de los requests son más rápidos que este valor. Se usa para medir el peor caso, no solo el promedio.' },
    { term: 'Claude Code', full: '', def: 'El asistente de código agéntico de Anthropic. Un agente que lee codebases, escribe código, corre tests y abre PRs de forma autónoma.' },
  ]
}

export default function S14_Glossary({ lang }) {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)
  const list = terms[lang]
  const filtered = list.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.def.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">
        {lang === 'en' ? 'Visma AI Dictionary' : 'Diccionario de IA Visma'}
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white mb-2">
        {lang === 'en' ? 'Key terminology.' : 'Terminología clave.'}
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="text-slate-400 text-sm mb-6">
        {lang === 'en'
          ? `${list.length} terms. Tap any to expand. Bookmark this slide — it\'s your reference.`
          : `${list.length} términos. Tapá para expandir. Guardá esta slide — es tu referencia.`}
      </motion.p>
      <input
        type="text"
        placeholder={lang === 'en' ? 'Search terms...' : 'Buscar términos...'}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm mb-6 outline-none focus:border-cyan-500 transition-colors"
      />
      <div className="flex flex-col gap-2">
        {filtered.map((t, i) => (
          <motion.div key={t.term} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === t.term ? null : t.term)}
              className="w-full flex items-center justify-between px-4 py-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold text-sm">{t.term}</span>
                {t.full && <span className="text-slate-500 text-xs hidden md:block">{t.full}</span>}
              </div>
              <span className="text-slate-500 text-xs">{expanded === t.term ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expanded === t.term && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-slate-700 px-4 py-3">
                  <p className="text-slate-300 text-sm leading-relaxed">{t.def}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <p className="text-slate-500 text-sm text-center py-8">
            {lang === 'en' ? 'No terms match your search.' : 'Ningún término coincide con tu búsqueda.'}
          </p>
        )}
      </div>
    </div>
  )
}
