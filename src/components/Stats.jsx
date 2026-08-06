import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'

export default function Stats() {
  const { lang } = useLanguage()

  const stats = lang === 'es' ? [
    { valor: '6', label: 'idiomas soportados' },
    { valor: '35', label: 'tests automáticos' },
    { valor: '24/7', label: 'monitoreo en tiempo real' },
    { valor: '0', label: 'planillas de Excel necesarias' },
  ] : [
    { valor: '6', label: 'supported languages' },
    { valor: '35', label: 'automated tests' },
    { valor: '24/7', label: 'real-time monitoring' },
    { valor: '0', label: 'Excel spreadsheets needed' },
  ]

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <dt className="text-4xl font-bold text-white">{s.valor}</dt>
              <dd className="mt-1 text-sm text-gray-500">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
