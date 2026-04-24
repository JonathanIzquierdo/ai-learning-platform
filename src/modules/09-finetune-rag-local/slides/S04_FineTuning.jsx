import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Strategy 3: Fine-tuning.',
    subtitle: 'Fine-tuning teaches the model new behavior, style, or skills — not just new knowledge. It\'s the most powerful and most expensive strategy.',
    what: 'Fine-tuning adjusts the model\'s weights on a curated dataset of examples. After fine-tuning, the model has internalized the behavior — you don\'t need to demonstrate it in every prompt.',
    when: {
      label: 'Use fine-tuning when',
      items: [
        'You need a very specific output style or format that\'s too complex to reliably demonstrate with examples',
        'You want to train a specialized capability (e.g., financial document parsing, code in your proprietary language)',
        'You need to remove capabilities (fine-tune to refuse certain topics)',
        'The task is high-frequency and you need to reduce prompt tokens at scale for cost',
        'You\'ve exhausted prompting and RAG and quality is still insufficient',
      ]
    },
    dontUse: {
      label: 'Don\'t fine-tune when',
      items: [
        'The problem is missing knowledge (use RAG instead)',
        'You have fewer than 500-1000 high-quality training examples',
        'Your domain or requirements change frequently (re-training is expensive)',
        'You haven\'t proven the use case works with prompting first',
      ]
    },
    realCosts: {
      label: 'Real costs (2026)',
      items: [
        { item: 'Dataset preparation', cost: '2-8 weeks of curation for 1,000-10,000 quality examples. This is usually the bottleneck.' },
        { item: 'Training compute (Claude)', cost: 'Anthropic fine-tuning starts at ~$3/million tokens for training data.' },
        { item: 'Training compute (OpenAI)', cost: 'GPT-4o fine-tuning: ~$25/million tokens for training.' },
        { item: 'Open-source on cloud GPU', cost: 'Fine-tuning Llama on AWS/GCP: ~$50-500 for a training run depending on model size.' },
        { item: 'Evaluation', cost: 'A proper eval suite takes 1-2 weeks to build. Without evals, you can\'t measure if fine-tuning helped.' },
        { item: 'Maintenance', cost: 'Model drift as the base model updates. Re-training needed every 6-12 months.' },
      ]
    },
    lora: 'Most practical fine-tuning today uses LoRA (Low-Rank Adaptation) — a technique that only trains a small set of additional parameters rather than the full model. LoRA makes fine-tuning 10-100x cheaper and faster, with minimal quality loss versus full fine-tuning.',
  },
  es: {
    title: 'Estrategia 3: Fine-tuning.',
    subtitle: 'El fine-tuning le enseña al modelo nuevo comportamiento, estilo o habilidades — no solo nuevo conocimiento. Es la estrategia más poderosa y más cara.',
    what: 'El fine-tuning ajusta los pesos del modelo en un dataset curado de ejemplos. Después del fine-tuning, el modelo ha internalizado el comportamiento — no necesitás demostrarlo en cada prompt.',
    when: {
      label: 'Usá fine-tuning cuando',
      items: [
        'Necesitás un estilo o formato de output muy específico que es demasiado complejo para demostrar de forma confiable con ejemplos',
        'Querés entrenar una capacidad especializada (ej.: parséo de documentos financieros, código en tu lenguaje propietario)',
        'Necesitás eliminar capacidades (fine-tune para rechazar ciertos temas)',
        'La tarea es de alta frecuencia y necesitás reducir los tokens de prompt a escala por costo',
        'Agotaste prompting y RAG y la calidad sigue siendo insuficiente',
      ]
    },
    dontUse: {
      label: 'No hagas fine-tuning cuando',
      items: [
        'El problema es conocimiento faltante (usá RAG en su lugar)',
        'Tenés menos de 500-1000 ejemplos de entrenamiento de alta calidad',
        'Tu dominio o requisitos cambian frecuentemente (re-entrenar es caro)',
        'No probaste primero que el caso de uso funciona con prompting',
      ]
    },
    realCosts: {
      label: 'Costos reales (2026)',
      items: [
        { item: 'Preparación del dataset', cost: '2-8 semanas de curación para 1.000-10.000 ejemplos de calidad. Este suele ser el cuello de botella.' },
        { item: 'Cómputo de entrenamiento (Claude)', cost: 'El fine-tuning de Anthropic empieza en ~$3/millón de tokens para datos de entrenamiento.' },
        { item: 'Cómputo de entrenamiento (OpenAI)', cost: 'Fine-tuning de GPT-4o: ~$25/millón de tokens para entrenamiento.' },
        { item: 'Open-source en GPU cloud', cost: 'Fine-tuning de Llama en AWS/GCP: ~$50-500 por ejecución de entrenamiento según el tamaño del modelo.' },
        { item: 'Evaluación', cost: 'Un suite de eval adecuado toma 1-2 semanas de construir. Sin evals, no podés medir si el fine-tuning ayudó.' },
        { item: 'Mantenimiento', cost: 'Deriva del modelo a medida que se actualiza el modelo base. Re-entrenamiento necesario cada 6-12 meses.' },
      ]
    },
    lora: 'La mayoría del fine-tuning práctico hoy usa LoRA (Low-Rank Adaptation) — una técnica que solo entrena un pequeño conjunto de parámetros adicionales en lugar del modelo completo. LoRA hace el fine-tuning 10-100x más barato y rápido, con una pérdida mínima de calidad frente al fine-tuning completo.',
  }
}

export default function S04_FineTuning({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-purple-600/20 text-purple-400 text-xs font-black px-2 py-1 rounded">Strategy 3</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-4 max-w-xl leading-relaxed">{c.subtitle}</p>
      <p className="text-slate-400 text-sm mb-8 leading-relaxed">{c.what}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2">{c.when.label}</p>
          {c.when.items.map((item, i) => <p key={i} className="text-slate-300 text-xs mb-1 flex items-start gap-2"><span className="text-green-400">✓</span>{item}</p>)}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">{c.dontUse.label}</p>
          {c.dontUse.items.map((item, i) => <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-2"><span className="text-red-400">✗</span>{item}</p>)}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">{c.realCosts.label}</p>
        {c.realCosts.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 mb-2 pb-2 border-b border-slate-700/50 last:border-0">
            <p className="text-white text-xs font-semibold w-40 shrink-0">{item.item}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{item.cost}</p>
          </div>
        ))}
      </motion.div>
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-sm text-purple-200">
        💡 LoRA: {c.lora}
      </div>
    </div>
  )
}
