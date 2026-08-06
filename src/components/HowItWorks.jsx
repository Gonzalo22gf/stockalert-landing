import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'

export default function HowItWorks() {
  const { lang } = useLanguage()

  const content = {
    es: {
      eyebrow: 'Cómo funciona',
      title: 'Empezá en 3 pasos simples',
      subtitle: 'Sin instalación, sin configuración compleja. Desde el registro hasta las alertas en menos de 10 minutos.',
      steps: [
        { num: '01', title: 'Creá tu empresa', desc: 'Registrá tu negocio y sumá a tu equipo con un código de acceso único. Cada sucursal tiene su propio encargado.' },
        { num: '02', title: 'Cargá tu inventario', desc: 'Agregá productos con EAN, lote, categoría y fecha de vencimiento. Importación masiva desde Excel disponible.' },
        { num: '03', title: 'Recibí alertas automáticas', desc: 'StockAlert monitorea tu stock 24/7 y te avisa por email antes de que algo venza o se agote.' },
      ]
    },
    en: {
      eyebrow: 'How it works',
      title: 'Get started in 3 simple steps',
      subtitle: 'No installation, no complex setup. From sign-up to alerts in under 10 minutes.',
      steps: [
        { num: '01', title: 'Create your company', desc: 'Register your business and add your team with a unique access code. Each branch has its own manager.' },
        { num: '02', title: 'Load your inventory', desc: 'Add products with EAN, batch, category and expiration date. Bulk import from Excel available.' },
        { num: '03', title: 'Get automatic alerts', desc: 'StockAlert monitors your stock 24/7 and notifies you by email before anything expires or runs out.' },
      ]
    }
  }

  const c = content[lang]

  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-indigo-400"
          >
            {c.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-400"
          >
            {c.subtitle}
          </motion.p>
        </div>

        <div className="relative mt-16">
          {/* Linea conectora desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {c.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-2xl font-bold text-indigo-300">
                  {step.num}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-indigo-400/20 to-transparent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
