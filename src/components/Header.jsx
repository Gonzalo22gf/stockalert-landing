import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { LogoMark, IconMenu, IconClose } from './icons'

export default function Header() {
  const { lang, toggleLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#features', label: t.nav.features },
    { href: '#producto', label: t.nav.screenshots },
    { href: '#precios', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#05050a]/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-white">StockAlert</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:text-white"
            aria-label="Toggle language"
          >
            <span className={lang === 'es' ? 'text-white' : 'text-gray-500'}>ES</span>
            <span className="text-gray-600">/</span>
            <span className={lang === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
          </button>
          <a
            href="#precios"
            className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#05050a] px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center justify-between gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-gray-300"
            >
              <span className={lang === 'es' ? 'text-white' : 'text-gray-500'}>ES</span>
              <span className="text-gray-600">/</span>
              <span className={lang === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
            </button>
            <a
              href="#precios"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-indigo-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
