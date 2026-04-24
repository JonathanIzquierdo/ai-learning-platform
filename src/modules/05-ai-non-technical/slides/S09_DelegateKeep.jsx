import { motion } from 'framer-motion'

const content = {
  en: {
    title: 'What to delegate. What to keep.',
    subtitle: 'Not everything should go to AI. The skill is knowing the difference — and protecting the work that actually makes you valuable.',
    delegate: {
      label: 'Delegate to AI — high confidence',
      color: '#36B37E',
      items: [
        { task: 'First drafts of any written communication', why: 'Structure and language generation is AI\'s strength' },
        { task: 'Summarizing long documents, reports, meeting notes', why: 'Pattern extraction at scale' },
        { task: 'Generating options, alternatives, and ideas', why: 'Breadth of knowledge for brainstorming' },
        { task: 'Formatting and restructuring existing content', why: 'Zero cognitive effort for AI' },
        { task: 'Research summaries on known topics', why: 'Fast synthesis of available information' },
        { task: 'Creating templates and checklists', why: 'Structure generation from your specs' },
        { task: 'Translating between audiences or languages', why: 'Tone and language adaptation' },
      ]
    },
    keep: {
      label: 'Keep for yourself — human judgment required',
      color: '#FF991F',
      items: [
        { task: 'Final approval of anything going external', why: 'Your name, your reputation, your responsibility' },
        { task: 'Sensitive conversations with people', why: 'Empathy, context, and relationship matter' },
        { task: 'Strategic decisions with incomplete information', why: 'Judgment under ambiguity is irreplaceable' },
        { task: 'Ethical judgments and values-based choices', why: 'AI has no values — you do' },
        { task: 'Anything that requires knowing your specific people', why: 'AI doesn\'t know your team, your culture, your history' },
        { task: 'Verification of critical facts and numbers', why: 'AI can hallucinate with confidence' },
      ]
    },
    caution: {
      label: 'Use with caution — human review essential',
      color: '#6554C0',
      items: [
        'Legal or compliance-sensitive content',
        'Financial projections or analysis presented to leadership',
        'Performance feedback for specific individuals',
        'Any content involving personal or confidential data',
      ]
    }
  },
  es: {
    title: 'Qué delegar. Qué conservar.',
    subtitle: 'No todo debería ir a la IA. La habilidad está en conocer la diferencia — y proteger el trabajo que realmente te hace valioso.',
    delegate: {
      label: 'Delegá a la IA — alta confianza',
      color: '#36B37E',
      items: [
        { task: 'Primeros borradores de cualquier comunicación escrita', why: 'La generación de estructura y lenguaje es la fortaleza de la IA' },
        { task: 'Resumir documentos largos, reportes, notas de reuniones', why: 'Extracción de patrones a escala' },
        { task: 'Generar opciones, alternativas e ideas', why: 'Amplitud de conocimiento para brainstorming' },
        { task: 'Formatear y reestructurar contenido existente', why: 'Cero esfuerzo cognitivo para la IA' },
        { task: 'Resúmenes de investigación sobre temas conocidos', why: 'Síntesis rápida de información disponible' },
        { task: 'Crear plantillas y checklists', why: 'Generación de estructura desde tus especificaciones' },
        { task: 'Traducir entre audiencias o idiomas', why: 'Adaptación de tono y lenguaje' },
      ]
    },
    keep: {
      label: 'Conservá para vos — se requiere juicio humano',
      color: '#FF991F',
      items: [
        { task: 'Aprobación final de cualquier cosa que vaya al exterior', why: 'Tu nombre, tu reputación, tu responsabilidad' },
        { task: 'Conversaciones sensibles con personas', why: 'La empatía, el contexto y la relación importan' },
        { task: 'Decisiones estratégicas con información incompleta', why: 'El juicio bajo ambigüedad es irremplazable' },
        { task: 'Juicios éticos y elecciones basadas en valores', why: 'La IA no tiene valores — vos sí' },
        { task: 'Cualquier cosa que requiera conocer a tus personas específicas', why: 'La IA no conoce tu equipo, tu cultura, tu historia' },
        { task: 'Verificación de hechos y números críticos', why: 'La IA puede alucinar con confianza' },
      ]
    },
    caution: {
      label: 'Usar con precaución — revisión humana esencial',
      color: '#6554C0',
      items: [
        'Contenido sensible desde el punto de vista legal o de cumplimiento',
        'Proyecciones financieras o análisis presentados al liderazgo',
        'Feedback de desempeño para individuos específicos',
        'Cualquier contenido que involucre datos personales o confidenciales',
      ]
    }
  }
}

export default function S09_DelegateKeep({ lang }) {
  const c = content[lang]
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-xl leading-relaxed">{c.subtitle}</p>
      {[c.delegate, c.keep].map((section, si) => (
        <motion.div key={si} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.15 }}
          className="rounded-2xl border p-5 mb-5" style={{ borderColor: section.color + '40', background: section.color + '0D' }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: section.color }}>{section.label}</p>
          <div className="flex flex-col gap-2">
            {section.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-xs font-bold mt-0.5" style={{ color: section.color }}>‣</span>
                <div>
                  <span className="text-white text-xs font-medium">{item.task}</span>
                  <span className="text-slate-500 text-xs"> — {item.why}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
        className="rounded-xl border p-4" style={{ borderColor: c.caution.color + '40', background: c.caution.color + '0D' }}>
        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: c.caution.color }}>{c.caution.label}</p>
        {c.caution.items.map((item, i) => (
          <p key={i} className="text-slate-300 text-xs mb-1 flex items-center gap-2">
            <span style={{ color: c.caution.color }}>⚠️</span>{item}
          </p>
        ))}
      </motion.div>
    </div>
  )
}
