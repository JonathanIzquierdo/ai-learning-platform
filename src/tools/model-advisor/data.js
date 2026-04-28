/**
 * ============================================================================
 * AI MODEL ADVISOR — DATA SOURCE
 * ============================================================================
 *
 * PRICING DATA SOURCES (for future updates, ask Claude to verify these URLs):
 *
 *   OpenAI:
 *     https://openai.com/api/pricing/
 *     Models: GPT-4o, GPT-4o-mini, GPT-4.1, GPT-4.1-mini, GPT-4.1-nano, o3, o3-mini, o4-mini
 *
 *   Anthropic (Claude):
 *     https://www.anthropic.com/pricing
 *     Models: Claude Opus 4, Claude Sonnet 4, Claude Haiku 3.5
 *
 *   Google (Gemini):
 *     https://ai.google.dev/pricing
 *     Models: Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.0 Flash, Gemini 2.0 Flash Lite
 *
 *   Meta (Llama — Open Source):
 *     Pricing varies by provider (Together AI, Fireworks, Groq, etc.)
 *     https://together.ai/pricing  |  https://fireworks.ai/pricing
 *     Models: Llama 4 Maverick, Llama 4 Scout, Llama 3.3 70B, Llama 3.1 8B
 *
 *   Mistral:
 *     https://mistral.ai/products/pricing/
 *     Models: Mistral Large, Mistral Small, Codestral
 *
 *   Amazon (Nova):
 *     https://aws.amazon.com/bedrock/pricing/
 *     Models: Nova Pro, Nova Lite, Nova Micro
 *
 *   DeepSeek:
 *     https://platform.deepseek.com/api-docs/pricing
 *     Models: DeepSeek-V3, DeepSeek-R1
 *
 *   xAI (Grok):
 *     https://docs.x.ai/docs/models#models-and-pricing
 *     Models: Grok 3, Grok 3 mini
 *
 *   Cohere:
 *     https://cohere.com/pricing
 *     Models: Command R+, Command R
 *
 * LAST VERIFIED: April 2025
 * TO UPDATE: Ask Claude to check each URL above and update the prices in this file.
 * ============================================================================
 */

export const PROVIDERS = [
  { id: 'openai', name: 'OpenAI', color: '#10A37F' },
  { id: 'anthropic', name: 'Anthropic', color: '#D97706' },
  { id: 'google', name: 'Google', color: '#4285F4' },
  { id: 'meta', name: 'Meta', color: '#0668E1' },
  { id: 'mistral', name: 'Mistral', color: '#F97316' },
  { id: 'amazon', name: 'Amazon', color: '#FF9900' },
  { id: 'deepseek', name: 'DeepSeek', color: '#5B6EF5' },
  { id: 'xai', name: 'xAI', color: '#1D9BF0' },
  { id: 'cohere', name: 'Cohere', color: '#39D353' },
]

export const CATEGORIES = [
  { id: 'general-premium', en: 'General Premium', es: 'General Premium' },
  { id: 'general-budget', en: 'General Budget', es: 'General Económico' },
  { id: 'coding', en: 'Coding', es: 'Coding' },
  { id: 'coding-budget', en: 'Coding Budget', es: 'Coding Económico' },
  { id: 'reasoning-premium', en: 'Reasoning Premium', es: 'Razonamiento Premium' },
  { id: 'reasoning', en: 'Reasoning', es: 'Razonamiento' },
  { id: 'reasoning-budget', en: 'Reasoning Budget', es: 'Razonamiento Económico' },
  { id: 'ultra-budget', en: 'Ultra Budget', es: 'Ultra Económico' },
  { id: 'enterprise', en: 'Enterprise', es: 'Empresarial' },
  { id: 'context-massive', en: 'Massive Context', es: 'Contexto Masivo' },
]

// Badges for special capabilities
// multimodal = can process images/audio, openSource = weights available, reasoning = chain-of-thought
export const MODELS = [
  // ── OpenAI ──
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'openai',
    inputPrice: 2.50,
    outputPrice: 10.00,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'general-premium',
    badges: ['multimodal'],
    useCase: {
      en: 'Advanced conversation, images, complex coding',
      es: 'Conversación avanzada, imágenes, coding complejo',
    },
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o-mini',
    provider: 'openai',
    inputPrice: 0.15,
    outputPrice: 0.60,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: ['multimodal'],
    useCase: {
      en: 'Everyday tasks, chatbots, classification',
      es: 'Tareas cotidianas, chatbots, clasificación',
    },
  },
  {
    id: 'gpt-4.1',
    name: 'GPT-4.1',
    provider: 'openai',
    inputPrice: 2.00,
    outputPrice: 8.00,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'coding',
    badges: [],
    useCase: {
      en: 'Long coding, complex instructions, huge context',
      es: 'Coding largo, instrucciones complejas, contexto enorme',
    },
  },
  {
    id: 'gpt-4.1-mini',
    name: 'GPT-4.1-mini',
    provider: 'openai',
    inputPrice: 0.40,
    outputPrice: 1.60,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'coding-budget',
    badges: [],
    useCase: {
      en: 'Everyday coding, good balance',
      es: 'Coding cotidiano, buen balance',
    },
  },
  {
    id: 'gpt-4.1-nano',
    name: 'GPT-4.1-nano',
    provider: 'openai',
    inputPrice: 0.10,
    outputPrice: 0.40,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Very Fast', es: 'Muy rápida' },
    category: 'ultra-budget',
    badges: [],
    useCase: {
      en: 'Simple tasks, classification, extraction, high volume',
      es: 'Tareas simples, clasificación, extracción, alto volumen',
    },
  },
  {
    id: 'o3',
    name: 'o3',
    provider: 'openai',
    inputPrice: 10.00,
    outputPrice: 40.00,
    context: '200K',
    contextNum: 200000,
    speed: { en: 'Slow', es: 'Lenta' },
    category: 'reasoning-premium',
    badges: ['reasoning'],
    useCase: {
      en: 'Math, science, complex problems, deep analysis',
      es: 'Matemáticas, ciencia, problemas complejos, análisis profundo',
    },
  },
  {
    id: 'o3-mini',
    name: 'o3-mini',
    provider: 'openai',
    inputPrice: 1.10,
    outputPrice: 4.40,
    context: '200K',
    contextNum: 200000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'reasoning-budget',
    badges: ['reasoning'],
    useCase: {
      en: 'Reasoning with good cost balance',
      es: 'Razonamiento con buen balance de costo',
    },
  },
  {
    id: 'o4-mini',
    name: 'o4-mini',
    provider: 'openai',
    inputPrice: 1.10,
    outputPrice: 4.40,
    context: '200K',
    contextNum: 200000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'reasoning',
    badges: ['reasoning'],
    useCase: {
      en: 'Reasoning, tool use, coding with thinking',
      es: 'Razonamiento, tool use, coding con pensamiento',
    },
  },

  // ── Anthropic ──
  {
    id: 'claude-opus-4',
    name: 'Claude Opus 4',
    provider: 'anthropic',
    inputPrice: 15.00,
    outputPrice: 75.00,
    context: '200K',
    contextNum: 200000,
    speed: { en: 'Slow', es: 'Lenta' },
    category: 'reasoning-premium',
    badges: ['reasoning'],
    useCase: {
      en: 'Long autonomous tasks, complex coding, SWE agents',
      es: 'Tareas autónomas largas, coding complejo, SWE agentes',
    },
  },
  {
    id: 'claude-sonnet-4',
    name: 'Claude Sonnet 4',
    provider: 'anthropic',
    inputPrice: 3.00,
    outputPrice: 15.00,
    context: '200K',
    contextNum: 200000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'general-premium',
    badges: [],
    useCase: {
      en: 'Advanced coding, reasoning, best premium value',
      es: 'Coding avanzado, razonamiento, mejor relación calidad/precio premium',
    },
  },
  {
    id: 'claude-haiku-3.5',
    name: 'Claude Haiku 3.5',
    provider: 'anthropic',
    inputPrice: 0.80,
    outputPrice: 4.00,
    context: '200K',
    contextNum: 200000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: [],
    useCase: {
      en: 'Quick tasks, classification, volume',
      es: 'Tareas rápidas, clasificación, volumen',
    },
  },

  // ── Google ──
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'google',
    inputPrice: 1.88,
    outputPrice: 12.50,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'reasoning',
    badges: ['multimodal', 'reasoning'],
    useCase: {
      en: 'Advanced reasoning, coding, multimodal',
      es: 'Razonamiento avanzado, coding, multimodal',
    },
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    provider: 'google',
    inputPrice: 0.23,
    outputPrice: 2.05,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: ['multimodal'],
    useCase: {
      en: 'Speed/cost balance, activatable thinking',
      es: 'Balance velocidad/costo, thinking activable',
    },
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'google',
    inputPrice: 0.10,
    outputPrice: 0.40,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Very Fast', es: 'Muy rápida' },
    category: 'ultra-budget',
    badges: ['multimodal'],
    useCase: {
      en: 'Max speed, agents, multimodal',
      es: 'Velocidad máxima, agentes, multimodal',
    },
  },
  {
    id: 'gemini-2.0-flash-lite',
    name: 'Gemini 2.0 Flash Lite',
    provider: 'google',
    inputPrice: 0.075,
    outputPrice: 0.30,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Very Fast', es: 'Muy rápida' },
    category: 'ultra-budget',
    badges: [],
    useCase: {
      en: "Google's cheapest, high volume",
      es: 'El más barato de Google, alto volumen',
    },
  },

  // ── Meta ──
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick',
    provider: 'meta',
    inputPrice: 0.35,
    outputPrice: 0.35,
    context: '1M',
    contextNum: 1000000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'general-budget',
    badges: ['multimodal', 'openSource'],
    useCase: {
      en: 'Multimodal, multilingual, efficient',
      es: 'Multimodal, multilingüe, eficiente',
    },
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    provider: 'meta',
    inputPrice: 0.20,
    outputPrice: 0.20,
    context: '10M',
    contextNum: 10000000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'context-massive',
    badges: ['openSource'],
    useCase: {
      en: 'Huge document analysis',
      es: 'Análisis de documentos enormes',
    },
  },
  {
    id: 'llama-3.3-70b',
    name: 'Llama 3.3 70B',
    provider: 'meta',
    inputPrice: 0.25,
    outputPrice: 0.25,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: ['openSource'],
    useCase: {
      en: 'General use, good cost/quality ratio',
      es: 'Uso general, buena relación costo/calidad',
    },
  },
  {
    id: 'llama-3.1-8b',
    name: 'Llama 3.1 8B',
    provider: 'meta',
    inputPrice: 0.06,
    outputPrice: 0.06,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Very Fast', es: 'Muy rápida' },
    category: 'ultra-budget',
    badges: ['openSource'],
    useCase: {
      en: 'Simple tasks, ultra cheap',
      es: 'Tareas simples, ultra barato',
    },
  },

  // ── Mistral ──
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    provider: 'mistral',
    inputPrice: 2.00,
    outputPrice: 6.00,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'general-premium',
    badges: [],
    useCase: {
      en: 'Complex reasoning, multilingual',
      es: 'Razonamiento complejo, multilingüe',
    },
  },
  {
    id: 'mistral-small',
    name: 'Mistral Small',
    provider: 'mistral',
    inputPrice: 0.10,
    outputPrice: 0.30,
    context: '32K',
    contextNum: 32000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: [],
    useCase: {
      en: 'Low cost, high volume',
      es: 'Bajo costo, alto volumen',
    },
  },
  {
    id: 'codestral',
    name: 'Codestral',
    provider: 'mistral',
    inputPrice: 0.30,
    outputPrice: 0.90,
    context: '256K',
    contextNum: 256000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'coding',
    badges: [],
    useCase: {
      en: 'Code specialist',
      es: 'Especializado en código',
    },
  },

  // ── Amazon ──
  {
    id: 'nova-pro',
    name: 'Nova Pro',
    provider: 'amazon',
    inputPrice: 0.80,
    outputPrice: 3.20,
    context: '300K',
    contextNum: 300000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'general-budget',
    badges: ['multimodal'],
    useCase: {
      en: 'Multimodal, good cost/quality ratio',
      es: 'Multimodal, buena relación costo/calidad',
    },
  },
  {
    id: 'nova-lite',
    name: 'Nova Lite',
    provider: 'amazon',
    inputPrice: 0.06,
    outputPrice: 0.24,
    context: '300K',
    contextNum: 300000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'ultra-budget',
    badges: ['multimodal'],
    useCase: {
      en: 'Ultra cheap, multimodal',
      es: 'Ultra económico, multimodal',
    },
  },
  {
    id: 'nova-micro',
    name: 'Nova Micro',
    provider: 'amazon',
    inputPrice: 0.035,
    outputPrice: 0.14,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Very Fast', es: 'Muy rápida' },
    category: 'ultra-budget',
    badges: [],
    useCase: {
      en: 'Text only, cheapest',
      es: 'Solo texto, el más barato',
    },
  },

  // ── DeepSeek ──
  {
    id: 'deepseek-v3',
    name: 'DeepSeek-V3',
    provider: 'deepseek',
    inputPrice: 0.27,
    outputPrice: 1.10,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: ['openSource'],
    useCase: {
      en: 'General use, very competitive pricing',
      es: 'Uso general, muy competitivo en precio',
    },
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek-R1',
    provider: 'deepseek',
    inputPrice: 0.55,
    outputPrice: 2.19,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'reasoning',
    badges: ['reasoning', 'openSource'],
    useCase: {
      en: 'Reasoning, math, code',
      es: 'Razonamiento, matemáticas, código',
    },
  },

  // ── xAI ──
  {
    id: 'grok-3',
    name: 'Grok 3',
    provider: 'xai',
    inputPrice: 3.00,
    outputPrice: 15.00,
    context: '131K',
    contextNum: 131000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'reasoning-premium',
    badges: ['reasoning'],
    useCase: {
      en: 'Reasoning, coding, math',
      es: 'Razonamiento, coding, matemáticas',
    },
  },
  {
    id: 'grok-3-mini',
    name: 'Grok 3 mini',
    provider: 'xai',
    inputPrice: 0.30,
    outputPrice: 0.50,
    context: '131K',
    contextNum: 131000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'reasoning-budget',
    badges: ['reasoning'],
    useCase: {
      en: 'Light reasoning, budget-friendly',
      es: 'Razonamiento liviano, económico',
    },
  },

  // ── Cohere ──
  {
    id: 'command-r-plus',
    name: 'Command R+',
    provider: 'cohere',
    inputPrice: 2.50,
    outputPrice: 10.00,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Medium', es: 'Media' },
    category: 'enterprise',
    badges: [],
    useCase: {
      en: 'RAG, tools, enterprise tasks',
      es: 'RAG, herramientas, tareas empresariales',
    },
  },
  {
    id: 'command-r',
    name: 'Command R',
    provider: 'cohere',
    inputPrice: 0.15,
    outputPrice: 0.60,
    context: '128K',
    contextNum: 128000,
    speed: { en: 'Fast', es: 'Rápida' },
    category: 'general-budget',
    badges: [],
    useCase: {
      en: 'Light RAG, summaries',
      es: 'RAG liviano, resúmenes',
    },
  },
]

// ── Task Recommendations ──
export const TASK_RECOMMENDATIONS = [
  {
    id: 'chatbot',
    icon: '💬',
    title: { en: 'Customer Support Chatbot', es: 'Chatbot Atención al Cliente' },
    models: ['gpt-4o-mini', 'gemini-2.0-flash', 'nova-lite'],
    budget: 'nova-lite',
    premium: 'gpt-4o',
    reason: {
      en: 'High volume, fast response, low cost per query',
      es: 'Alto volumen, respuesta rápida, bajo costo por consulta',
    },
  },
  {
    id: 'code-gen',
    icon: '💻',
    title: { en: 'Code Generation', es: 'Generación de Código' },
    models: ['gpt-4.1', 'claude-sonnet-4', 'codestral'],
    budget: 'codestral',
    premium: 'claude-opus-4',
    reason: {
      en: 'Code quality, instruction following, large context',
      es: 'Calidad de código, seguimiento de instrucciones, contexto grande',
    },
  },
  {
    id: 'code-review',
    icon: '🔍',
    title: { en: 'Code Review', es: 'Revisión de Código' },
    models: ['gpt-4.1-mini', 'claude-haiku-3.5', 'deepseek-v3'],
    budget: 'deepseek-v3',
    premium: 'claude-sonnet-4',
    reason: {
      en: 'Fast, precise, cost-effective for reviews',
      es: 'Rápido, preciso, económico para revisiones',
    },
  },
  {
    id: 'long-docs',
    icon: '📄',
    title: { en: 'Long Document Analysis', es: 'Análisis de Documentos Largos' },
    models: ['gemini-2.5-pro', 'gpt-4.1', 'llama-4-scout'],
    budget: 'llama-4-scout',
    premium: 'gemini-2.5-pro',
    reason: {
      en: 'Massive context window, strong comprehension',
      es: 'Ventana de contexto masiva, buena comprensión',
    },
  },
  {
    id: 'summaries',
    icon: '📝',
    title: { en: 'Text Summarization', es: 'Resúmenes de Texto' },
    models: ['gpt-4.1-nano', 'gemini-2.0-flash-lite', 'mistral-small'],
    budget: 'gemini-2.0-flash-lite',
    premium: 'gpt-4o',
    reason: {
      en: 'Budget-friendly, fast turnaround',
      es: 'Económico, respuesta rápida',
    },
  },
  {
    id: 'classification',
    icon: '🏷️',
    title: { en: 'Classification / Categorization', es: 'Clasificación / Categorización' },
    models: ['gpt-4.1-nano', 'nova-micro', 'llama-3.1-8b'],
    budget: 'nova-micro',
    premium: 'gpt-4o-mini',
    reason: {
      en: 'Ultra cheap per call, high throughput',
      es: 'Ultra barato por llamada, alto rendimiento',
    },
  },
  {
    id: 'translation',
    icon: '🌐',
    title: { en: 'Translation', es: 'Traducción' },
    models: ['mistral-large', 'gpt-4o', 'gemini-2.5-flash'],
    budget: 'gemini-2.5-flash',
    premium: 'gpt-4o',
    reason: {
      en: 'Multilingual strength, nuance preservation',
      es: 'Fortaleza multilingüe, preservación de matices',
    },
  },
  {
    id: 'content',
    icon: '✍️',
    title: { en: 'Content Generation (Marketing, Emails)', es: 'Generación de Contenido (Marketing, Emails)' },
    models: ['gpt-4o', 'claude-sonnet-4', 'gemini-2.5-pro'],
    budget: 'gemini-2.5-flash',
    premium: 'claude-sonnet-4',
    reason: {
      en: 'Creative quality, tone control, brand voice',
      es: 'Calidad creativa, control de tono, voz de marca',
    },
  },
  {
    id: 'data-analysis',
    icon: '📊',
    title: { en: 'Data / Table Analysis', es: 'Análisis de Datos / Tablas' },
    models: ['gpt-4o', 'claude-sonnet-4', 'deepseek-v3'],
    budget: 'deepseek-v3',
    premium: 'gpt-4o',
    reason: {
      en: 'Reasoning + structured output',
      es: 'Razonamiento + output estructurado',
    },
  },
  {
    id: 'reasoning',
    icon: '🧠',
    title: { en: 'Complex Reasoning / Math', es: 'Razonamiento Complejo / Matemáticas' },
    models: ['o3', 'claude-opus-4', 'deepseek-r1'],
    budget: 'deepseek-r1',
    premium: 'o3',
    reason: {
      en: 'Chain-of-thought, deep analysis',
      es: 'Cadena de pensamiento, análisis profundo',
    },
  },
  {
    id: 'agents',
    icon: '🤖',
    title: { en: 'Autonomous Agents', es: 'Agentes Autónomos' },
    models: ['claude-opus-4', 'claude-sonnet-4', 'o4-mini'],
    budget: 'o4-mini',
    premium: 'claude-opus-4',
    reason: {
      en: 'Tool use, autonomy, long-running tasks',
      es: 'Tool use, autonomía, tareas de larga duración',
    },
  },
  {
    id: 'images',
    icon: '🖼️',
    title: { en: 'Image Processing', es: 'Procesamiento de Imágenes' },
    models: ['gpt-4o', 'gemini-2.5-pro', 'nova-pro'],
    budget: 'nova-pro',
    premium: 'gpt-4o',
    reason: {
      en: 'Multimodal vision capabilities',
      es: 'Capacidades de visión multimodal',
    },
  },
  {
    id: 'extraction',
    icon: '🗃️',
    title: { en: 'Structured Data Extraction', es: 'Extracción de Datos Estructurados' },
    models: ['gpt-4.1-nano', 'mistral-small', 'nova-micro'],
    budget: 'nova-micro',
    premium: 'gpt-4.1-mini',
    reason: {
      en: 'Structured output, low cost',
      es: 'Output estructurado, bajo costo',
    },
  },
]

// ── Optimization Strategies ──
export const OPTIMIZATION_STRATEGIES = [
  {
    id: 'model-routing',
    icon: '🔀',
    savings: '40–70%',
    title: { en: 'Model Routing', es: 'Model Routing' },
    description: {
      en: 'Use a cheap model for simple tasks, expensive one only when needed. Route by complexity.',
      es: 'Usar un modelo barato para tareas simples y uno caro solo cuando se necesita. Rutear por complejidad.',
    },
    example: {
      en: 'GPT-4.1-nano classifies incoming requests ($0.10/MTok). Only complex ones go to Claude Sonnet 4 ($3.00/MTok). If 80% of requests are simple, you save ~60%.',
      es: 'GPT-4.1-nano clasifica las solicitudes entrantes ($0.10/MTok). Solo las complejas van a Claude Sonnet 4 ($3.00/MTok). Si el 80% de las solicitudes son simples, ahorrás ~60%.',
    },
  },
  {
    id: 'prompt-caching',
    icon: '💾',
    savings: '50–90%',
    title: { en: 'Prompt Caching', es: 'Prompt Caching' },
    description: {
      en: 'If you send the same system prompt repeatedly, use caching. Cached tokens cost a fraction.',
      es: 'Si mandás el mismo system prompt muchas veces, usá caching. Los tokens cacheados cuestan una fracción.',
    },
    example: {
      en: 'Anthropic: $0.30/MTok cached vs $3.00 normal on Sonnet (90% off). OpenAI: 50% discount on cached tokens.',
      es: 'Anthropic: $0.30/MTok cacheado vs $3.00 normal en Sonnet (90% de descuento). OpenAI: 50% de descuento en tokens cacheados.',
    },
  },
  {
    id: 'batch-api',
    icon: '📦',
    savings: '50%',
    title: { en: 'Batch API', es: 'Batch API' },
    description: {
      en: "For tasks that don't need instant response (nightly analysis, bulk processing), use Batch API at half price.",
      es: 'Para tareas que no necesitan respuesta inmediata (análisis nocturno, procesamiento masivo), usar Batch API que cobra la mitad.',
    },
    example: {
      en: '10K documents to classify overnight? Batch API: $0.05/MTok instead of $0.10 on GPT-4.1-nano. Save $50 on a 1B token job.',
      es: '¿10K documentos para clasificar de noche? Batch API: $0.05/MTok en vez de $0.10 en GPT-4.1-nano. Ahorrás $50 en un trabajo de 1B tokens.',
    },
  },
  {
    id: 'prompt-optimization',
    icon: '✂️',
    savings: '20–40%',
    title: { en: 'Prompt Optimization', es: 'Optimización de Prompts' },
    description: {
      en: 'Shorter, direct prompts = fewer tokens = less cost. Remove redundancy, use few-shot only when needed.',
      es: 'Prompts más cortos y directos = menos tokens = menos costo. Eliminar redundancias, usar few-shot solo cuando es necesario.',
    },
    example: {
      en: 'A 2000-token system prompt trimmed to 800 tokens saves 60% on input per call. At 100K calls/month with GPT-4o ($2.50/MTok), that\'s $300/month saved.',
      es: 'Un system prompt de 2000 tokens reducido a 800 tokens ahorra 60% en input por llamada. Con 100K llamadas/mes con GPT-4o ($2.50/MTok), son $300/mes de ahorro.',
    },
  },
  {
    id: 'context-management',
    icon: '📋',
    savings: '15–30%',
    title: { en: 'Context Window Management', es: 'Manejo de Ventana de Contexto' },
    description: {
      en: "Don't send the full conversation every time. Use history summaries. Every context token costs.",
      es: 'No mandar toda la conversación cada vez. Usar resúmenes del historial. Cada token de contexto cuesta.',
    },
    example: {
      en: 'Instead of sending 50 messages of history (avg 8K tokens), summarize to 1K tokens. Save ~87% on input tokens for ongoing conversations.',
      es: 'En vez de mandar 50 mensajes de historial (promedio 8K tokens), resumir a 1K tokens. Ahorrás ~87% en tokens de input para conversaciones largas.',
    },
  },
  {
    id: 'eval-tools',
    icon: '📈',
    savings: 'variable',
    title: { en: 'Continuous Evaluation', es: 'Evaluación Continua' },
    description: {
      en: 'Monitor cost and quality over time to catch waste and optimize routing.',
      es: 'Monitorear costo y calidad en el tiempo para detectar desperdicio y optimizar ruteo.',
    },
    tools: [
      { name: 'Promptfoo', desc: { en: 'Open source — Evaluate quality across models', es: 'Open source — Evaluar calidad entre modelos' } },
      { name: 'Helicone', desc: { en: 'Open source — Real-time cost logging', es: 'Open source — Logging de costos en tiempo real' } },
      { name: 'LiteLLM', desc: { en: 'Open source — Multi-provider proxy', es: 'Open source — Proxy para múltiples proveedores' } },
      { name: 'LangSmith', desc: { en: 'Traces and evaluations', es: 'Traces y evaluaciones' } },
      { name: 'Braintrust', desc: { en: 'Evaluation with cost logging', es: 'Evaluación con logging de costos' } },
    ],
  },
]

export const getModel = (id) => MODELS.find(m => m.id === id)
export const getProvider = (id) => PROVIDERS.find(p => p.id === id)
