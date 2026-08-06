import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/useLanguage'
import { APP_URL } from '../config'

export default function AppBanner() {
  const { lang } = useLanguage()
  const title = lang === 'es' ? 'Disponible en cualquier dispositivo' : 'Available on any device'
  const subtitle = lang === 'es'
    ? 'StockAlert funciona en Android, iPhone, tablet y computadora como app instalable.'
    : 'StockAlert works on Android, iPhone, tablet and desktop as an installable app.'
  const cta = lang === 'es' ? 'Abrir la app' : 'Open the app'
  const badge = lang === 'es' ? 'Sin instalacion requerida' : 'No installation required'
  return (
    <section className='py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col items-center justify-between gap-6 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-transparent p-8 sm:flex-row'
        >
          <div>
            <p className='text-xl font-semibold text-indigo-300'>Android · iOS · Web</p>
            <h3 className='mt-1 text-base font-bold text-white'>{title}</h3>
            <p className='mt-1 max-w-md text-sm text-gray-400'>{subtitle}</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <a href={APP_URL} target='_blank' rel='noopener noreferrer' className='whitespace-nowrap rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400'>
              {cta}
            </a>
            <span className='text-xs text-gray-600'>{badge}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}