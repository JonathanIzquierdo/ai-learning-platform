// Centralized metadata for module tags displayed on cards
// Fields: difficulty (beginner/intermediate/advanced), area (all/technical/leadership/business), badge (optional: visma-policy)

export const MODULE_METADATA = {
  '00-ai-fundamentals':       { difficulty: 'beginner',     area: 'all',        badge: null },
  '01-token-awareness':       { difficulty: 'beginner',     area: 'all',        badge: null },
  '02-evals-harness':         { difficulty: 'intermediate', area: 'technical',  badge: null },
  '03-ai-maturity':           { difficulty: 'intermediate', area: 'leadership', badge: null },
  '04-ai-metrics':            { difficulty: 'intermediate', area: 'all',        badge: null },
  '05-ai-non-technical':      { difficulty: 'beginner',     area: 'business',   badge: null },
  '06-ai-security':           { difficulty: 'intermediate', area: 'all',        badge: null },
  '07-multi-agent':           { difficulty: 'intermediate', area: 'technical',  badge: null },
  '08-context-engineering':   { difficulty: 'intermediate', area: 'all',        badge: null },
  '09-finetune-rag-local':    { difficulty: 'advanced',     area: 'technical',  badge: null },
  '10-ai-skills-developers':  { difficulty: 'intermediate', area: 'technical',  badge: null },
  '11-visma-ai-code-of-conduct': { difficulty: 'beginner', area: 'all',        badge: 'visma-policy' },
}

export const DIFFICULTY_CONFIG = {
  beginner:     { en: 'Beginner',     es: 'Principiante',  color: 'bg-green-500/20 text-green-300' },
  intermediate: { en: 'Intermediate', es: 'Intermedio',    color: 'bg-blue-500/20 text-blue-300' },
  advanced:     { en: 'Advanced',     es: 'Avanzado',      color: 'bg-orange-500/20 text-orange-300' },
}

export const AREA_CONFIG = {
  all:        { en: 'All Roles',   es: 'Todos',       color: 'bg-slate-500/20 text-slate-300' },
  technical:  { en: 'Technical',   es: 'T\u00e9cnico',      color: 'bg-purple-500/20 text-purple-300' },
  leadership: { en: 'Leadership',  es: 'Liderazgo',   color: 'bg-amber-500/20 text-amber-300' },
  business:   { en: 'Business',    es: 'Negocio',     color: 'bg-cyan-500/20 text-cyan-300' },
}

export const getMetadata = (moduleId) => MODULE_METADATA[moduleId] || { difficulty: 'beginner', area: 'all', badge: null }
