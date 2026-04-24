import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'Strategy 4: Local Models.',
    subtitle: 'Running AI on your own hardware is no longer a hobbyist curiosity. In 2026, it\'s a legitimate production strategy.',
    headline: 'Over 40% of enterprise AI workloads now include a local inference component. Open-source model downloads on HuggingFace grew 320% year-over-year. The top local models are within 3-5% of frontier cloud models on most benchmarks.',
    whyLocal: [
      { reason: 'Privacy & compliance', desc: 'Your data never leaves your network. Critical for GDPR, regulated industries, and confidential IP.' },
      { reason: 'Cost at scale', desc: 'Local inference is 30-150x cheaper per token than cloud APIs once hardware is amortized. At high volume, the math inverts dramatically.' },
      { reason: 'No rate limits', desc: 'No API throttling, no per-user limits, no usage caps. Run as many queries as your hardware supports.' },
      { reason: 'Offline capability', desc: 'Works without internet. Critical for air-gapped environments, field operations, or latency-sensitive use cases.' },
      { reason: 'Customization freedom', desc: 'Fine-tune, modify, chain models without vendor restrictions.' },
    ],
    models2026: {
      label: 'Top local models in 2026',
      models: [
        { name: 'Llama 3.3 70B', maker: 'Meta', params: '70B', minRam: '48GB', strength: 'Best all-around. Follows system prompts precisely. Flagship open-source.' },
        { name: 'DeepSeek R1', maker: 'DeepSeek', params: '7B-671B', minRam: '8-400GB', strength: 'Reasoning specialist. Shows its thinking. Excellent for debugging & analysis.' },
        { name: 'Qwen 3.5 32B', maker: 'Alibaba', params: '32B', minRam: '20GB', strength: 'Best multilingual (incl. Spanish). Strong coding. Best non-English model.' },
        { name: 'Mistral Small 4', maker: 'Mistral', params: '24B', minRam: '16GB', strength: 'Fastest at its size. Best for latency-sensitive apps. European model (GDPR-friendly).' },
        { name: 'Phi-4', maker: 'Microsoft', params: '14B', minRam: '10GB', strength: 'Best reasoning at small size. Runs on modest hardware. Great for edge deployment.' },
        { name: 'Gemma 4 26B', maker: 'Google', params: '26B', minRam: '14GB', strength: '85 tokens/sec on consumer hardware. GPT-4 level intelligence. 256K context.' },
      ]
    },
    hardware: {
      label: 'Hardware reality check',
      tiers: [
        { tier: '8GB RAM laptop', models: 'Phi-4 Mini (3.8B), Mistral 7B', speed: 'Slow — demo only', verdict: 'Too limited for real work' },
        { tier: '16GB RAM', models: 'Phi-4 (14B), Mistral Small (7B)', speed: 'Moderate', verdict: 'Entry level for real work' },
        { tier: '32-48GB RAM / Mac M3+', models: 'Qwen 32B, DeepSeek R1 32B', speed: 'Good', verdict: 'Professional sweet spot' },
        { tier: '64GB+ RAM / Mac Studio M4', models: 'Llama 70B, Qwen 72B', speed: 'Very good', verdict: 'No cloud subscription needed' },
        { tier: 'NVIDIA RTX 4090 (24GB VRAM)', models: 'Up to 40B quant', speed: 'Fastest local inference', verdict: 'Developer workstation standard' },
      ]
    },
    cons: [
      'Upfront hardware cost: $1,500-$5,000+ for serious local inference',
      'Setup complexity: Ollama, LM Studio, or llama.cpp required',
      'Maintenance: you manage updates, security, and model versioning',
      'Quality ceiling: still 3-5% below frontier models on hard tasks',
      'Energy cost: continuous inference consumes power',
    ]
  },
  es: {
    title: 'Estrategia 4: Modelos Locales.',
    subtitle: 'Correr IA en tu propio hardware ya no es una curiosidad de hobbyistas. En 2026, es una estrategia de producción legítima.',
    headline: 'Más del 40% de las cargas de trabajo enterprise de IA ahora incluyen un componente de inferencia local. Las descargas de modelos open-source en HuggingFace crecieron un 320% año tras año. Los mejores modelos locales están dentro del 3-5% de los modelos cloud frontier en la mayoría de los benchmarks.',
    whyLocal: [
      { reason: 'Privacidad y cumplimiento', desc: 'Tus datos nunca salen de tu red. Crítico para GDPR, industrias reguladas e IP confidencial.' },
      { reason: 'Costo a escala', desc: 'La inferencia local es 30-150x más barata por token que las APIs cloud una vez que se amortiza el hardware. A alto volumen, la matemática se invierte dramáticamente.' },
      { reason: 'Sin límites de tasa', desc: 'Sin throttling de API, sin límites por usuario, sin caps de uso. Corré tantas consultas como soporte tu hardware.' },
      { reason: 'Capacidad offline', desc: 'Funciona sin internet. Crítico para entornos air-gapped, operaciones de campo o casos de uso sensibles a la latencia.' },
      { reason: 'Libertad de personalización', desc: 'Hacé fine-tune, modificá, encadená modelos sin restricciones del proveedor.' },
    ],
    models2026: {
      label: 'Mejores modelos locales en 2026',
      models: [
        { name: 'Llama 3.3 70B', maker: 'Meta', params: '70B', minRam: '48GB', strength: 'El mejor para todo. Sigue system prompts con precisión. Flagship open-source.' },
        { name: 'DeepSeek R1', maker: 'DeepSeek', params: '7B-671B', minRam: '8-400GB', strength: 'Especialista en razonamiento. Muestra su proceso. Excelente para debugging y análisis.' },
        { name: 'Qwen 3.5 32B', maker: 'Alibaba', params: '32B', minRam: '20GB', strength: 'Mejor multilinguaje (incl. español). Fuerte en código. Mejor modelo no inglés.' },
        { name: 'Mistral Small 4', maker: 'Mistral', params: '24B', minRam: '16GB', strength: 'El más rápido en su tamaño. Mejor para apps sensibles a latencia. Modelo europeo (GDPR-friendly).' },
        { name: 'Phi-4', maker: 'Microsoft', params: '14B', minRam: '10GB', strength: 'Mejor razonamiento en tamaño pequeño. Corre en hardware modesto. Ideal para despliegue en edge.' },
        { name: 'Gemma 4 26B', maker: 'Google', params: '26B', minRam: '14GB', strength: '85 tokens/seg en hardware consumer. Inteligencia de nivel GPT-4. Contexto de 256K.' },
      ]
    },
    hardware: {
      label: 'La realidad del hardware',
      tiers: [
        { tier: 'Laptop 8GB RAM', models: 'Phi-4 Mini (3.8B), Mistral 7B', speed: 'Lento — solo demos', verdict: 'Demasiado limitado para trabajo real' },
        { tier: '16GB RAM', models: 'Phi-4 (14B), Mistral Small (7B)', speed: 'Moderado', verdict: 'Nivel de entrada para trabajo real' },
        { tier: '32-48GB RAM / Mac M3+', models: 'Qwen 32B, DeepSeek R1 32B', speed: 'Bueno', verdict: 'Sweet spot profesional' },
        { tier: '64GB+ RAM / Mac Studio M4', models: 'Llama 70B, Qwen 72B', speed: 'Muy bueno', verdict: 'Sin necesidad de suscripción cloud' },
        { tier: 'NVIDIA RTX 4090 (24GB VRAM)', models: 'Hasta 40B quant', speed: 'Inferencia local más rápida', verdict: 'Estándar de workstation de desarrollador' },
      ]
    },
    cons: [
      'Costo de hardware por adelantado: $1.500-$5.000+ para inferencia local seria',
      'Complejidad de setup: se requiere Ollama, LM Studio o llama.cpp',
      'Mantenimiento: vos gestionás actualizaciones, seguridad y versionado de modelos',
      'Techo de calidad: todavía 3-5% por debajo de los modelos frontier en tareas difíciles',
      'Costo energético: la inferencia continua consume energía',
    ]
  }
}

export default function S05_LocalModels({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-red-600/20 text-red-400 text-xs font-black px-2 py-1 rounded">Strategy 4</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">{c.title}</h2>
      </div>
      <p className="text-slate-300 text-lg mb-4 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-6">
        <p className="text-red-200 text-xs leading-relaxed">📊 {c.headline}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-2 mb-6">
        {c.whyLocal.map((w, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3">
            <p className="text-red-400 text-xs font-semibold mb-1">{w.reason}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{w.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">{c.models2026.label}</p>
        <div className="flex flex-col gap-2">
          {c.models2026.models.map((m, i) => (
            <div key={i} className="flex items-start gap-3 py-1.5 border-b border-slate-700/50 last:border-0">
              <p className="text-white text-xs font-semibold w-28 shrink-0">{m.name}</p>
              <p className="text-slate-500 text-xs w-16 shrink-0">{m.params}</p>
              <p className="text-amber-400 text-xs w-16 shrink-0">{m.minRam}</p>
              <p className="text-slate-400 text-xs leading-snug">{m.strength}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">{c.hardware.label}</p>
        {c.hardware.tiers.map((t, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <p className="text-white text-xs font-semibold w-36 shrink-0">{t.tier}</p>
            <p className="text-slate-500 text-xs w-32 shrink-0">{t.models}</p>
            <p className="text-green-400 text-xs">{t.verdict}</p>
          </div>
        ))}
      </motion.div>
      <div className="bg-slate-700/40 border border-slate-600/40 rounded-xl p-4">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Cons to consider</p>
        {c.cons.map((con, i) => <p key={i} className="text-slate-400 text-xs mb-1 flex items-start gap-2"><span className="text-slate-500">✗</span>{con}</p>)}
      </div>
    </div>
  )
}
