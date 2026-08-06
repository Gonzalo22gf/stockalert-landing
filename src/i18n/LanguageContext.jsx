import { useEffect, useMemo, useState } from 'react'
import { translations } from './translations'
import { LanguageContext } from './context'

const STORAGE_KEY = 'stockalert_lang'

function detectDefaultLang() {
  // Español por defecto siempre (mercado principal), salvo que el visitante
  // ya haya elegido inglés manualmente en una visita anterior.
  if (typeof window !== 'undefined') {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === 'es' || saved === 'en') return saved
    } catch {
      // localStorage unavailable (e.g. private browsing) — fall back silently
    }
  }
  return 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectDefaultLang)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore write errors
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
      t: translations[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
