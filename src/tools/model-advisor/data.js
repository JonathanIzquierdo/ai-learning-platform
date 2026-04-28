/**
 * ============================================================================
 * AI MODEL ADVISOR — DATA SOURCE
 * ============================================================================
 *
 * PRICING DATA SOURCES (for future updates, ask Claude to verify these URLs):
 *
 *   OpenAI:
 *     https://developers.openai.com/api/docs/pricing
 *     Models: GPT-5.5, GPT-5.4, GPT-5.4-mini, GPT-5.4-nano, o3
 *     Legacy still available: GPT-4.1, GPT-4.1-mini, GPT-4.1-nano
 *
 *   Anthropic (Claude):
 *     https://platform.claude.com/docs/en/about-claude/pricing
 *     Models: Claude Opus 4.7, Claude Sonnet 4.6, Claude Haiku 4.5
 *
 *   Google (Gemini):
 *     https://ai.google.dev/gemini-api/docs/pricing
 *     Models: Gemini 3.1 Pro, Gemini 3 Flash, Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.5 Flash-Lite
 *     Deprecated (June 1 2026): Gemini 2.0 Flash, Gemini 2.0 Flash-Lite
 *
 *   Meta (Llama):
 *     Pricing varies by provider (Together AI, Fireworks, OpenRouter, etc.)
 *     https://openrouter.ai  |  https://together.ai/pricing
 *     Models: Llama 4 Scout, Llama 4 Maverick
 *
 *   DeepSeek:
 *     https://api-docs.deepseek.com/quick_start/pricing
 *     Models: DeepSeek V4 Flash, DeepSeek V4 Pro, DeepSeek R1
 *
 *   Alibaba (Qwen):
 *     https://openrouter.ai (multiple providers)
 *     Models: Qwen3.5 397B A17B
 *
 *   xAI (Grok):
 *     https://docs.x.ai/docs/models#models-and-pricing
 *     Models: Grok 4.20, Grok 4.1 Fast
 *
 *   Mistral:
 *     https://mistral.ai/products/pricing/
 *     Models: Mistral Large, Codestral
 *
 *   Amazon (Nova):
 *     https://aws.amazon.com/bedrock/pricing/
 *     Models: Nova 2.0 Pro, Nova 2.0 Lite
 *
 * LAST VERIFIED: April 28, 2026
 * TO UPDATE: Ask Claude to check each URL above and update the prices in this file.
 *
 * REFERENCE SITES FOR LIVE PRICING:
 *   - https://artificialanalysis.ai/models (intelligence + speed + price charts)
 *   - https://pricepertoken.com (300+ models, daily updates)
 *   - https://costgoat.com/compare/llm-api (value score rankings)
 * ============================================================================
 */

export const PROVIDERS = [
  { id: 'openai', name: 'OpenAI', color: '#10A37F' },
  { id: 'anthropic', name: 'Anthropic', color: '#D97706' },
  { id: 'google', name: 'Google', color: '#4285F4' },
  { id: 'deepseek', name: 'DeepSeek', color: '#5B6EF5' },
  { id: 'meta', name: 'Meta', color: '#0668E1' },
  { id: 'alibaba', name: 'Alibaba', color: '#FF6A00' },
  { id: 'xai', name: 'xAI', color: '#1D9BF0' },
  { id: 'mistral', name: 'Mistral', color: '#F97316' },
  { id: 'amazon', name: 'Amazon', color: '#FF9900' },
]

export const CATEGORIES = [
  { id: 'frontier', en: 'Frontier', es: 'Frontera' },
  { id: 'general-premium', en: 'General Premium', es: 'General Premium' },
  { id: 'general-budget', en: 'General Budget', es: 'General Econ\u00f3mico' },
  { id: 'coding', en: 'Coding', es: 'Coding' },
  { id: 'reasoning', en: 'Reasoning', es: 'Razonamiento' },
  { id: 'ultra-budget', en: 'Ultra Budget', es: 'Ultra Econ\u00f3mico' },
  { id: 'context-massive', en: 'Massive Context', es: 'Contexto Masivo' },
]

// Badges: multimodal = images/audio, openSource = weights available, reasoning = chain-of-thought
export const MODELS = [
  // OpenAI
  { id: 'gpt-5.5', name: 'GPT-5.5', provider: 'openai', inputPrice: 5.00, outputPrice: 30.00, context: '922K', contextNum: 922000, speed: { en: 'Medium', es: 'Media' }, category: 'frontier', badges: ['multimodal', 'reasoning'], useCase: { en: 'Most capable OpenAI model, agentic, complex reasoning', es: 'Modelo m\u00e1s capaz de OpenAI, ag\u00e9ntico, razonamiento complejo' } },
  { id: 'gpt-5.4', name: 'GPT-5.4', provider: 'openai', inputPrice: 2.50, outputPrice: 15.00, context: '1M', contextNum: 1050000, speed: { en: 'Medium', es: 'Media' }, category: 'general-premium', badges: ['multimodal', 'reasoning'], useCase: { en: 'Best value frontier, coding, agents, 1M context', es: 'Mejor relaci\u00f3n calidad/precio frontier, coding, agentes, 1M contexto' } },
  { id: 'gpt-5.4-mini', name: 'GPT-5.4 mini', provider: 'openai', inputPrice: 0.75, outputPrice: 3.00, context: '400K', contextNum: 400000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'general-budget', badges: ['multimodal', 'reasoning'], useCase: { en: 'Everyday tasks, chatbots, strong and cheap', es: 'Tareas cotidianas, chatbots, potente y barato' } },
  { id: 'gpt-5.4-nano', name: 'GPT-5.4 nano', provider: 'openai', inputPrice: 0.20, outputPrice: 1.25, context: '400K', contextNum: 400000, speed: { en: 'Very Fast', es: 'Muy r\u00e1pida' }, category: 'ultra-budget', badges: ['reasoning'], useCase: { en: 'Classification, extraction, high volume, ultra cheap', es: 'Clasificaci\u00f3n, extracci\u00f3n, alto volumen, ultra barato' } },
  { id: 'o3', name: 'o3', provider: 'openai', inputPrice: 2.00, outputPrice: 8.00, context: '200K', contextNum: 200000, speed: { en: 'Medium', es: 'Media' }, category: 'reasoning', badges: ['reasoning'], useCase: { en: 'Dedicated reasoning, math, science, analysis', es: 'Razonamiento dedicado, matem\u00e1ticas, ciencia, an\u00e1lisis' } },
  { id: 'gpt-4.1', name: 'GPT-4.1', provider: 'openai', inputPrice: 2.00, outputPrice: 8.00, context: '1M', contextNum: 1000000, speed: { en: 'Medium', es: 'Media' }, category: 'coding', badges: [], useCase: { en: 'Legacy coding model, still great for long context code', es: 'Modelo legacy de coding, excelente para c\u00f3digo con contexto largo' } },
  { id: 'gpt-4.1-nano', name: 'GPT-4.1 nano', provider: 'openai', inputPrice: 0.10, outputPrice: 0.40, context: '1M', contextNum: 1000000, speed: { en: 'Very Fast', es: 'Muy r\u00e1pida' }, category: 'ultra-budget', badges: [], useCase: { en: 'Cheapest OpenAI option, simple tasks, 1M context', es: 'Opci\u00f3n m\u00e1s barata de OpenAI, tareas simples, 1M contexto' } },

  // Anthropic
  { id: 'claude-opus-4.7', name: 'Claude Opus 4.7', provider: 'anthropic', inputPrice: 5.00, outputPrice: 25.00, context: '1M', contextNum: 1000000, speed: { en: 'Slow', es: 'Lenta' }, category: 'frontier', badges: ['multimodal', 'reasoning'], useCase: { en: 'Top coding (SWE-bench 87.6%), autonomous agents, 1M ctx', es: 'Mejor coding (SWE-bench 87.6%), agentes aut\u00f3nomos, 1M ctx' } },
  { id: 'claude-sonnet-4.6', name: 'Claude Sonnet 4.6', provider: 'anthropic', inputPrice: 3.00, outputPrice: 15.00, context: '1M', contextNum: 1000000, speed: { en: 'Medium', es: 'Media' }, category: 'general-premium', badges: ['reasoning'], useCase: { en: 'Best balance: coding, reasoning, writing, 1M context', es: 'Mejor balance: coding, razonamiento, escritura, 1M contexto' } },
  { id: 'claude-haiku-4.5', name: 'Claude Haiku 4.5', provider: 'anthropic', inputPrice: 1.00, outputPrice: 5.00, context: '200K', contextNum: 200000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'general-budget', badges: [], useCase: { en: 'Fast, cheap Claude for production volume', es: 'Claude r\u00e1pido y econ\u00f3mico para producci\u00f3n en volumen' } },

  // Google
  { id: 'gemini-3.1-pro', name: 'Gemini 3.1 Pro', provider: 'google', inputPrice: 2.00, outputPrice: 12.00, context: '1M', contextNum: 1000000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'frontier', badges: ['multimodal', 'reasoning'], useCase: { en: 'Google flagship, fast for its tier, multimodal', es: 'Flagship de Google, r\u00e1pido para su tier, multimodal' } },
  { id: 'gemini-3-flash', name: 'Gemini 3 Flash', provider: 'google', inputPrice: 0.50, outputPrice: 3.00, context: '1M', contextNum: 1000000, speed: { en: 'Very Fast', es: 'Muy r\u00e1pida' }, category: 'general-budget', badges: ['multimodal', 'reasoning'], useCase: { en: 'Near-Pro quality, great speed, agentic workflows', es: 'Calidad cercana a Pro, excelente velocidad, workflows ag\u00e9nticos' } },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'google', inputPrice: 1.25, outputPrice: 10.00, context: '1M', contextNum: 1000000, speed: { en: 'Medium', es: 'Media' }, category: 'coding', badges: ['multimodal', 'reasoning'], useCase: { en: 'Strong coding model, great value, 1M context', es: 'Modelo fuerte de coding, excelente valor, 1M contexto' } },
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'google', inputPrice: 0.15, outputPrice: 0.60, context: '1M', contextNum: 1000000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'ultra-budget', badges: ['multimodal'], useCase: { en: 'Hybrid reasoning, very cheap, thinking mode available', es: 'Razonamiento h\u00edbrido, muy barato, modo thinking disponible' } },
  { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash-Lite', provider: 'google', inputPrice: 0.10, outputPrice: 0.40, context: '1M', contextNum: 1000000, speed: { en: 'Very Fast', es: 'Muy r\u00e1pida' }, category: 'ultra-budget', badges: [], useCase: { en: "Google's cheapest, high volume, 1M context", es: 'El m\u00e1s barato de Google, alto volumen, 1M contexto' } },

  // DeepSeek
  { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', provider: 'deepseek', inputPrice: 0.14, outputPrice: 0.28, context: '1M', contextNum: 1000000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'ultra-budget', badges: ['openSource'], useCase: { en: 'Cheapest serious model, 1M context, great value', es: 'Modelo serio m\u00e1s barato, 1M contexto, excelente valor' } },
  { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', provider: 'deepseek', inputPrice: 1.74, outputPrice: 3.48, context: '1M', contextNum: 1000000, speed: { en: 'Medium', es: 'Media' }, category: 'reasoning', badges: ['reasoning', 'openSource'], useCase: { en: 'Deep reasoning, 1.6T params, open weights', es: 'Razonamiento profundo, 1.6T params, open weights' } },
  { id: 'deepseek-r1', name: 'DeepSeek R1', provider: 'deepseek', inputPrice: 0.55, outputPrice: 2.19, context: '128K', contextNum: 128000, speed: { en: 'Medium', es: 'Media' }, category: 'reasoning', badges: ['reasoning', 'openSource'], useCase: { en: 'Chain-of-thought reasoning, math, code analysis', es: 'Razonamiento paso a paso, matem\u00e1ticas, an\u00e1lisis de c\u00f3digo' } },

  // Meta
  { id: 'llama-4-scout', name: 'Llama 4 Scout', provider: 'meta', inputPrice: 0.20, outputPrice: 0.20, context: '10M', contextNum: 10000000, speed: { en: 'Medium', es: 'Media' }, category: 'context-massive', badges: ['openSource'], useCase: { en: '10M context window, largest in the industry', es: 'Ventana de 10M tokens, la m\u00e1s grande de la industria' } },
  { id: 'llama-4-maverick', name: 'Llama 4 Maverick', provider: 'meta', inputPrice: 0.35, outputPrice: 0.35, context: '1M', contextNum: 1000000, speed: { en: 'Medium', es: 'Media' }, category: 'general-budget', badges: ['multimodal', 'openSource'], useCase: { en: 'Open source multimodal, multilingual, efficient', es: 'Open source multimodal, multiling\u00fce, eficiente' } },

  // Alibaba
  { id: 'qwen3.5-397b', name: 'Qwen3.5 397B', provider: 'alibaba', inputPrice: 1.35, outputPrice: 1.35, context: '262K', contextNum: 262000, speed: { en: 'Medium', es: 'Media' }, category: 'general-premium', badges: ['reasoning', 'openSource'], useCase: { en: 'Strong open-source alternative, reasoning, MoE', es: 'Alternativa open-source fuerte, razonamiento, MoE' } },

  // xAI
  { id: 'grok-4.20', name: 'Grok 4.20', provider: 'xai', inputPrice: 3.00, outputPrice: 15.00, context: '2M', contextNum: 2000000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'reasoning', badges: ['reasoning'], useCase: { en: 'Reasoning, 2M context, fast output (100 t/s)', es: 'Razonamiento, 2M contexto, output r\u00e1pido (100 t/s)' } },
  { id: 'grok-4.1-fast', name: 'Grok 4.1 Fast', provider: 'xai', inputPrice: 0.28, outputPrice: 0.28, context: '2M', contextNum: 2000000, speed: { en: 'Very Fast', es: 'Muy r\u00e1pida' }, category: 'ultra-budget', badges: ['reasoning'], useCase: { en: 'Ultra cheap reasoning, 2M context, 116 t/s', es: 'Razonamiento ultra econ\u00f3mico, 2M contexto, 116 t/s' } },

  // Mistral
  { id: 'mistral-large', name: 'Mistral Large', provider: 'mistral', inputPrice: 2.00, outputPrice: 6.00, context: '128K', contextNum: 128000, speed: { en: 'Medium', es: 'Media' }, category: 'general-premium', badges: [], useCase: { en: 'Complex reasoning, multilingual, European provider', es: 'Razonamiento complejo, multiling\u00fce, proveedor europeo' } },
  { id: 'codestral', name: 'Codestral', provider: 'mistral', inputPrice: 0.30, outputPrice: 0.90, context: '256K', contextNum: 256000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'coding', badges: [], useCase: { en: 'Code specialist, 256K context, affordable', es: 'Especialista en c\u00f3digo, 256K contexto, econ\u00f3mico' } },

  // Amazon
  { id: 'nova-2.0-pro', name: 'Nova 2.0 Pro', provider: 'amazon', inputPrice: 3.44, outputPrice: 13.76, context: '256K', contextNum: 256000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'reasoning', badges: ['multimodal', 'reasoning'], useCase: { en: 'AWS native, reasoning, multimodal', es: 'Nativo de AWS, razonamiento, multimodal' } },
  { id: 'nova-2.0-lite', name: 'Nova 2.0 Lite', provider: 'amazon', inputPrice: 0.85, outputPrice: 3.40, context: '1M', contextNum: 1000000, speed: { en: 'Fast', es: 'R\u00e1pida' }, category: 'general-budget', badges: ['reasoning'], useCase: { en: 'AWS budget option, reasoning capable, 1M context', es: 'Opci\u00f3n econ\u00f3mica de AWS, con razonamiento, 1M contexto' } },
]

// Task Recommendations
export const TASK_RECOMMENDATIONS = [
  { id: 'chatbot', icon: String.fromCodePoint(0x1F4AC), title: { en: 'Customer Support Chatbot', es: 'Chatbot Atenci\u00f3n al Cliente' }, models: ['gpt-5.4-mini', 'gemini-3-flash', 'deepseek-v4-flash'], budget: 'deepseek-v4-flash', premium: 'gpt-5.4', reason: { en: 'High volume, fast response, low cost per query', es: 'Alto volumen, respuesta r\u00e1pida, bajo costo por consulta' } },
  { id: 'code-gen', icon: String.fromCodePoint(0x1F4BB), title: { en: 'Code Generation', es: 'Generaci\u00f3n de C\u00f3digo' }, models: ['claude-sonnet-4.6', 'gpt-5.4', 'gemini-2.5-pro'], budget: 'codestral', premium: 'claude-opus-4.7', reason: { en: 'Code quality, instruction following, SWE-bench leaders', es: 'Calidad de c\u00f3digo, seguimiento de instrucciones, l\u00edderes SWE-bench' } },
  { id: 'code-review', icon: String.fromCodePoint(0x1F50D), title: { en: 'Code Review', es: 'Revisi\u00f3n de C\u00f3digo' }, models: ['gpt-5.4-mini', 'claude-haiku-4.5', 'deepseek-v4-flash'], budget: 'deepseek-v4-flash', premium: 'claude-sonnet-4.6', reason: { en: 'Fast, precise, cost-effective for reviews', es: 'R\u00e1pido, preciso, econ\u00f3mico para revisiones' } },
  { id: 'long-docs', icon: String.fromCodePoint(0x1F4C4), title: { en: 'Long Document Analysis', es: 'An\u00e1lisis de Documentos Largos' }, models: ['gemini-3.1-pro', 'gpt-5.4', 'llama-4-scout'], budget: 'llama-4-scout', premium: 'gemini-3.1-pro', reason: { en: 'Massive context window, strong comprehension', es: 'Ventana de contexto masiva, buena comprensi\u00f3n' } },
  { id: 'summaries', icon: String.fromCodePoint(0x1F4DD), title: { en: 'Text Summarization', es: 'Res\u00famenes de Texto' }, models: ['gpt-5.4-nano', 'gemini-2.5-flash-lite', 'deepseek-v4-flash'], budget: 'deepseek-v4-flash', premium: 'gpt-5.4-mini', reason: { en: 'Budget-friendly, fast turnaround', es: 'Econ\u00f3mico, respuesta r\u00e1pida' } },
  { id: 'classification', icon: String.fromCodePoint(0x1F3F7, 0xFE0F), title: { en: 'Classification / Categorization', es: 'Clasificaci\u00f3n / Categorizaci\u00f3n' }, models: ['gpt-4.1-nano', 'gpt-5.4-nano', 'deepseek-v4-flash'], budget: 'gpt-4.1-nano', premium: 'gpt-5.4-mini', reason: { en: 'Ultra cheap per call, high throughput', es: 'Ultra barato por llamada, alto rendimiento' } },
  { id: 'translation', icon: String.fromCodePoint(0x1F310), title: { en: 'Translation', es: 'Traducci\u00f3n' }, models: ['gpt-5.4', 'claude-sonnet-4.6', 'gemini-3-flash'], budget: 'gemini-3-flash', premium: 'gpt-5.4', reason: { en: 'Multilingual strength, nuance preservation', es: 'Fortaleza multiling\u00fce, preservaci\u00f3n de matices' } },
  { id: 'content', icon: String.fromCodePoint(0x270D, 0xFE0F), title: { en: 'Content Generation (Marketing, Emails)', es: 'Generaci\u00f3n de Contenido (Marketing, Emails)' }, models: ['claude-sonnet-4.6', 'gpt-5.4', 'gemini-3.1-pro'], budget: 'gemini-3-flash', premium: 'claude-sonnet-4.6', reason: { en: 'Creative quality, tone control, brand voice', es: 'Calidad creativa, control de tono, voz de marca' } },
  { id: 'data-analysis', icon: String.fromCodePoint(0x1F4CA), title: { en: 'Data / Table Analysis', es: 'An\u00e1lisis de Datos / Tablas' }, models: ['gpt-5.4', 'claude-sonnet-4.6', 'deepseek-v4-flash'], budget: 'deepseek-v4-flash', premium: 'gpt-5.4', reason: { en: 'Reasoning + structured output', es: 'Razonamiento + output estructurado' } },
  { id: 'reasoning', icon: String.fromCodePoint(0x1F9E0), title: { en: 'Complex Reasoning / Math', es: 'Razonamiento Complejo / Matem\u00e1ticas' }, models: ['gpt-5.5', 'claude-opus-4.7', 'deepseek-v4-pro'], budget: 'deepseek-r1', premium: 'gpt-5.5', reason: { en: 'Chain-of-thought, deep analysis, frontier intelligence', es: 'Cadena de pensamiento, an\u00e1lisis profundo, inteligencia frontier' } },
  { id: 'agents', icon: String.fromCodePoint(0x1F916), title: { en: 'Autonomous Agents', es: 'Agentes Aut\u00f3nomos' }, models: ['claude-opus-4.7', 'gpt-5.5', 'gpt-5.4'], budget: 'gpt-5.4-mini', premium: 'claude-opus-4.7', reason: { en: 'Tool use, autonomy, long-running tasks, SWE agents', es: 'Tool use, autonom\u00eda, tareas de larga duraci\u00f3n, SWE agentes' } },
  { id: 'images', icon: String.fromCodePoint(0x1F5BC, 0xFE0F), title: { en: 'Image Processing', es: 'Procesamiento de Im\u00e1genes' }, models: ['gpt-5.4', 'gemini-3.1-pro', 'claude-sonnet-4.6'], budget: 'gemini-3-flash', premium: 'gpt-5.4', reason: { en: 'Multimodal vision capabilities', es: 'Capacidades de visi\u00f3n multimodal' } },
  { id: 'extraction', icon: String.fromCodePoint(0x1F5C3, 0xFE0F), title: { en: 'Structured Data Extraction', es: 'Extracci\u00f3n de Datos Estructurados' }, models: ['gpt-5.4-nano', 'deepseek-v4-flash', 'gpt-4.1-nano'], budget: 'gpt-4.1-nano', premium: 'gpt-5.4-mini', reason: { en: 'Structured output, low cost, high throughput', es: 'Output estructurado, bajo costo, alto rendimiento' } },
]

// Optimization Strategies
export const OPTIMIZATION_STRATEGIES = [
  { id: 'model-routing', icon: String.fromCodePoint(0x1F500), savings: '40\u201370%', title: { en: 'Model Routing', es: 'Model Routing' }, description: { en: 'Use a cheap model for simple tasks, expensive one only when needed. Route by complexity.', es: 'Usar un modelo barato para tareas simples y uno caro solo cuando se necesita. Rutear por complejidad.' }, example: { en: 'GPT-5.4 nano classifies requests ($0.20/MTok). Only complex ones go to Claude Sonnet 4.6 ($3/MTok). If 80% are simple, you save ~60%.', es: 'GPT-5.4 nano clasifica solicitudes ($0.20/MTok). Solo las complejas van a Claude Sonnet 4.6 ($3/MTok). Si el 80% son simples, ahorr\u00e1s ~60%.' } },
  { id: 'prompt-caching', icon: String.fromCodePoint(0x1F4BE), savings: '50\u201390%', title: { en: 'Prompt Caching', es: 'Prompt Caching' }, description: { en: 'If you send the same system prompt repeatedly, use caching. Cached tokens cost 10% of normal.', es: 'Si mand\u00e1s el mismo system prompt muchas veces, us\u00e1 caching. Los tokens cacheados cuestan 10% de lo normal.' }, example: { en: 'Anthropic: $0.30/MTok cached vs $3.00 normal on Sonnet 4.6 (90% off). OpenAI: 90% discount on cached input. DeepSeek: 90% off cache hits.', es: 'Anthropic: $0.30/MTok cacheado vs $3.00 normal en Sonnet 4.6 (90% off). OpenAI: 90% descuento en input cacheado. DeepSeek: 90% off en cache hits.' } },
  { id: 'batch-api', icon: String.fromCodePoint(0x1F4E6), savings: '50%', title: { en: 'Batch API', es: 'Batch API' }, description: { en: "For tasks that don't need instant response (nightly analysis, bulk processing), use Batch API at half price.", es: 'Para tareas que no necesitan respuesta inmediata (an\u00e1lisis nocturno, procesamiento masivo), usar Batch API que cobra la mitad.' }, example: { en: 'GPT-5.5 batch: $2.50/$15 instead of $5/$30. Same as GPT-5.4 standard pricing but with GPT-5.5 quality.', es: 'GPT-5.5 batch: $2.50/$15 en vez de $5/$30. Mismo precio que GPT-5.4 est\u00e1ndar pero con calidad de GPT-5.5.' } },
  { id: 'prompt-optimization', icon: String.fromCodePoint(0x2702, 0xFE0F), savings: '20\u201340%', title: { en: 'Prompt Optimization', es: 'Optimizaci\u00f3n de Prompts' }, description: { en: 'Shorter, direct prompts = fewer tokens = less cost. Remove redundancy, use few-shot only when needed.', es: 'Prompts m\u00e1s cortos y directos = menos tokens = menos costo. Eliminar redundancias, usar few-shot solo cuando es necesario.' }, example: { en: "A 2000-token system prompt trimmed to 800 saves 60% on input. At 100K calls/month with GPT-5.4 ($2.50/MTok), that's $300/month saved.", es: 'Un system prompt de 2000 tokens reducido a 800 ahorra 60% en input. Con 100K llamadas/mes con GPT-5.4 ($2.50/MTok), son $300/mes de ahorro.' } },
  { id: 'context-management', icon: String.fromCodePoint(0x1F4CB), savings: '15\u201330%', title: { en: 'Context Window Management', es: 'Manejo de Ventana de Contexto' }, description: { en: "Don't send the full conversation every time. Use history summaries. Every context token costs.", es: 'No mandar toda la conversaci\u00f3n cada vez. Usar res\u00famenes del historial. Cada token de contexto cuesta.' }, example: { en: 'Instead of 50 messages of history (avg 8K tokens), summarize to 1K tokens. Save ~87% on input tokens.', es: 'En vez de 50 mensajes de historial (promedio 8K tokens), resumir a 1K tokens. Ahorr\u00e1s ~87% en tokens de input.' } },
  { id: 'eval-tools', icon: String.fromCodePoint(0x1F4C8), savings: 'variable', title: { en: 'Continuous Evaluation', es: 'Evaluaci\u00f3n Continua' }, description: { en: 'Monitor cost and quality over time to catch waste and optimize routing.', es: 'Monitorear costo y calidad en el tiempo para detectar desperdicio y optimizar ruteo.' }, tools: [ { name: 'Promptfoo', desc: { en: 'Open source \u2014 Evaluate quality across models', es: 'Open source \u2014 Evaluar calidad entre modelos' } }, { name: 'Helicone', desc: { en: 'Open source \u2014 Real-time cost logging', es: 'Open source \u2014 Logging de costos en tiempo real' } }, { name: 'LiteLLM', desc: { en: 'Open source \u2014 Multi-provider proxy', es: 'Open source \u2014 Proxy para m\u00faltiples proveedores' } }, { name: 'LangSmith', desc: { en: 'Traces and evaluations', es: 'Traces y evaluaciones' } }, { name: 'Braintrust', desc: { en: 'Evaluation with cost logging', es: 'Evaluaci\u00f3n con logging de costos' } } ] },
]

export const getModel = (id) => MODELS.find(m => m.id === id)
export const getProvider = (id) => PROVIDERS.find(p => p.id === id)
