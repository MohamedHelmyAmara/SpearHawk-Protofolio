import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

export const LANG_STORAGE_KEY = 'spearhawk-lang'

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to English.
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = translations[lang].meta.title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', translations[lang].meta.description)
    }
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      // Ignore persistence failures.
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      isRTL: lang === 'ar',
      dict: translations[lang],
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'ar' : 'en')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useI18n must be used inside a LanguageProvider')
  }
  return context
}
