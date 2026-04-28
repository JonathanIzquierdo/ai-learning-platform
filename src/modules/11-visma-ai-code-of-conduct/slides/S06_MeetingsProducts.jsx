import { motion } from 'framer-motion'

const content = {
  en: {
    eyebrow: 'Principles 4 & 5',
    title: 'Meetings & AI in Products',
    meetingTitle: 'AI-Powered Meeting Tools',
    meetingBody: 'Recording, transcription, and summarization can drive efficiency, but require care.',
    meetingSteps: [
      { num: '1', text: 'Decide if the meeting should be captured at all' },
      { num: '2', text: 'Choose the least invasive format \u2014 summary > transcript > recording' },
      { num: '3', text: 'Notify participants in advance (in the calendar invite)' },
      { num: '4', text: 'Confirm at the start \u2014 check for objections before enabling' },
      { num: '5', text: 'Store output securely, share only with those who need it, delete when done' },
    ],
    meetingWarn: 'Do NOT use Otter.ai or Fireflies \u2014 they are not on the Visma reviewed list. Do not connect personal transcription accounts to company meetings.',
    productsTitle: 'Building AI into Visma Products',
    productsRules: [
      'Complete the Legal AI assessment for compliance',
      'Add all AI initiatives to the AI Product Initiatives Mapping (AIPM) in Hubble',
      'Design with Privacy and Security by design principles',
      'Run all AI-generated code through CI/CD pipeline with SAST/SCA tools',
      'Contact your security team for threat modeling (SSA)',
      'Beware of prompt injection attacks \u2014 test with the offensive playbook',
    ],
  },
  es: {
    eyebrow: 'Principios 4 y 5',
    title: 'Reuniones e IA en Productos',
    meetingTitle: 'Herramientas de IA para Reuniones',
    meetingBody: 'Grabaci\u00f3n, transcripci\u00f3n y resumen pueden impulsar la eficiencia, pero requieren cuidado.',
    meetingSteps: [
      { num: '1', text: 'Decid\u00ed si la reuni\u00f3n debe ser capturada en absoluto' },
      { num: '2', text: 'Eleg\u00ed el formato menos invasivo \u2014 resumen > transcripci\u00f3n > grabaci\u00f3n' },
      { num: '3', text: 'Notific\u00e1 a los participantes con anticipaci\u00f3n (en la invitaci\u00f3n)' },
      { num: '4', text: 'Confirm\u00e1 al inicio \u2014 verific\u00e1 que no haya objeciones antes de activar' },
      { num: '5', text: 'Almacen\u00e1 el output de forma segura, compart\u00ed solo con quienes lo necesiten, elimin\u00e1 cuando ya no haga falta' },
    ],
    meetingWarn: 'NO uses Otter.ai o Fireflies \u2014 no est\u00e1n en la lista revisada de Visma. No conectes cuentas personales de transcripci\u00f3n a reuniones de la empresa.',
    productsTitle: 'Construyendo IA en Productos Visma',
    productsRules: [
      'Completar la evaluaci\u00f3n Legal de IA para cumplimiento',
      'Agregar todas las iniciativas de IA al AI Product Initiatives Mapping (AIPM) en Hubble',
      'Dise\u00f1ar con principios de Privacy y Security by design',
      'Pasar todo el c\u00f3digo generado por IA por el pipeline CI/CD con herramientas SAST/SCA',
      'Contactar al equipo de seguridad para threat modeling (SSA)',
      'Cuidado con prompt injection \u2014 testear con el offensive playbook',
    ],
  }
}

export default function S06_MeetingsProducts({ lang }) {
  const c = content[lang]
  return (
    <div className="flex flex-col justify-center min-h-[70vh] py-12">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">{c.eyebrow}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8">{c.title}</motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-4">
        <p className="text-white text-sm font-semibold mb-2">{String.fromCodePoint(0x1F3A4)} {c.meetingTitle}</p>
        <p className="text-slate-400 text-sm mb-4">{c.meetingBody}</p>
        <div className="space-y-2">
          {c.meetingSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="bg-purple-500/20 text-purple-300 text-xs font-bold w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">{s.num}</span>
              <p className="text-slate-300 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6 text-sm text-red-200">
        {String.fromCodePoint(0x1F6A8)} {c.meetingWarn}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-white text-sm font-semibold mb-3">{String.fromCodePoint(0x1F3D7, 0xFE0F)} {c.productsTitle}</p>
        <div className="space-y-2">
          {c.productsRules.map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-purple-400 text-xs mt-1">{String.fromCodePoint(0x25B6, 0xFE0F)}</span>
              <p className="text-slate-300 text-sm">{r}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
