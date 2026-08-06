import { useLanguage } from '../i18n/useLanguage'
import { buildWhatsAppLink, APP_URL } from '../config'
import { IconWhatsApp, IconBell, IconStore, IconChart } from './icons'


export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="glow pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {t.hero.badge}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="w-full rounded-full bg-indigo-500 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={buildWhatsAppLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              <IconWhatsApp className="h-4 w-4 text-[#25D366]" />
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">{t.hero.noCard}</p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-x-6 -inset-y-6 rounded-[2rem] bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b13] shadow-2xl shadow-black/50">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <img
              src="/images/hero.png"
              alt="Dashboard de StockAlert con resumen de inventario"
              className="w-full"
            />
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { Icon: IconBell, title: t.hero.pillar1Title, desc: t.hero.pillar1Desc },
            { Icon: IconStore, title: t.hero.pillar2Title, desc: t.hero.pillar2Desc },
            { Icon: IconChart, title: t.hero.pillar3Title, desc: t.hero.pillar3Desc },
          ].map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-sm font-semibold text-white">{title}</dt>
                <dd className="text-xs text-gray-500">{desc}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
