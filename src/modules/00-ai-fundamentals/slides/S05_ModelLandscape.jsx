import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'The model landscape.',
    subtitle: 'There are many LLMs available today. Here\'s the practical guide to who\'s who — and how Visma uses them.',
    models: [
      {
        family: 'Claude (Anthropic)', color: '#D97706',
        models: ['Opus — frontier reasoning, complex tasks', 'Sonnet — balanced, daily workhorse', 'Haiku — fast, cheap, lightweight tasks'],
        vismaUse: 'Primary model for Claude Code, AI coding assistant, and internal tooling. Strong on long-context tasks and instruction-following.',
        strengths: 'Long context, safety, code, instruction following'
      },
      {
        family: 'GPT / o-series (OpenAI)', color: '#10B981',
        models: ['GPT-5 — frontier', 'GPT-4.1 — balanced', 'GPT-4.1 mini — fast/cheap', 'o3/o4 — deep reasoning (slow, expensive)'],
        vismaUse: 'Available via GitHub Copilot. Strong ecosystem, widely used in Visma Copilot deployments.',
        strengths: 'Broad capability, strong ecosystem, reasoning models'
      },
      {
        family: 'Gemini (Google)', color: '#4285F4',
        models: ['Gemini 2.5 Pro — frontier', 'Gemini 2.0 Flash — fast/cheap'],
        vismaUse: 'Available via Google Cloud / Vertex AI. Strong multimodal capabilities.',
        strengths: 'Multimodal, Google Workspace integration, long context'
      },
      {
        family: 'Open source (DeepSeek, Llama, Mistral)', color: '#888780',
        models: ['DeepSeek V4 — strong coding', 'Llama 4 — Meta\'s open model', 'Mistral — European, lightweight'],
        vismaUse: 'Being evaluated via AWS Bedrock as cost-reduction alternative for lower-stakes tasks.',
        strengths: 'Cost, data privacy, customizability, no vendor lock-in'
      },
    ],
    note: 'No single model is best for everything. The skill is knowing which model to use for which task — covered in Module 01.'
  },
  es: {
    title: 'El panorama de modelos.',
    subtitle: 'Hay muchos LLMs disponibles hoy. Acá está la guía práctica de quién es quién — y cómo los usa Visma.',
    models: [
      {
        family: 'Claude (Anthropic)', color: '#D97706',
        models: ['Opus — razonamiento frontier, tareas complejas', 'Sonnet — balanceado, el caballo de batalla diario', 'Haiku — rápido, barato, tareas livianas'],
        vismaUse: 'Modelo principal para Claude Code, asistente de código IA y herramientas internas. Fuerte en tareas de contexto largo y seguimiento de instrucciones.',
        strengths: 'Contexto largo, seguridad, código, seguimiento de instrucciones'
      },
      {
        family: 'GPT / serie-o (OpenAI)', color: '#10B981',
        models: ['GPT-5 — frontier', 'GPT-4.1 — balanceado', 'GPT-4.1 mini — rápido/barato', 'o3/o4 — razonamiento profundo (lento, caro)'],
        vismaUse: 'Disponible vía GitHub Copilot. Ecosistema sólido, ampliamente usado en los despliegues de Copilot en Visma.',
        strengths: 'Capacidad amplia, ecosistema sólido, modelos de razonamiento'
      },
      {
        family: 'Gemini (Google)', color: '#4285F4',
        models: ['Gemini 2.5 Pro — frontier', 'Gemini 2.0 Flash — rápido/barato'],
        vismaUse: 'Disponible vía Google Cloud / Vertex AI. Capacidades multimodales sólidas.',
        strengths: 'Multimodal, integración con Google Workspace, contexto largo'
      },
      {
        family: 'Open source (DeepSeek, Llama, Mistral)', color: '#888780',
        models: ['DeepSeek V4 — código sólido', 'Llama 4 — modelo abierto de Meta', 'Mistral — europeo, liviano'],
        vismaUse: 'Siendo evaluado vía AWS Bedrock como alternativa de reducción de costos para tareas de menor riesgo.',
        strengths: 'Costo, privacidad de datos, personalización, sin vendor lock-in'
      },
    ],
    note: 'Ningún modelo es el mejor para todo. La habilidad está en saber qué modelo usar para cada tarea — cubierto en el Módulo 01.'
  }
}

export default function S05_ModelLandscape({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">{c.subtitle}</p>
      <div className="flex flex-col gap-4 mb-8">
        {c.models.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
              <p className="text-white font-semibold text-sm">{m.family}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {m.models.map((mod, j) => (
                <span key={j} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">{mod}</span>
              ))}
            </div>
            <p className="text-slate-400 text-xs mb-2"><span className="text-slate-500">Visma use: </span>{m.vismaUse}</p>
            <p className="text-xs" style={{ color: m.color }}>✓ {m.strengths}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 text-sm text-slate-300">
        💡 {c.note}
      </div>
    </div>
  )
}
