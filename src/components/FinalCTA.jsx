import { useLanguage } from '../i18n/useLanguage'
import { buildWhatsAppLink, APP_URL } from '../config'
import { IconWhatsApp } from './icons'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 via-[#0b0b13] to-[#0b0b13] px-8 py-14 text-center sm:px-16">
          <div className="glow pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 opacity-60 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.finalCta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-gray-400">
            {t.finalCta.subtitle}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="w-full rounded-full bg-indigo-500 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 sm:w-auto"
            >
              {t.finalCta.cta}
            </a>
            <a
              href={buildWhatsAppLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              <IconWhatsApp className="h-4 w-4 text-[#25D366]" />
              {t.finalCta.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
