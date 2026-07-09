import { createContext, useContext, useState } from 'react'
import { en, ru } from './translations'

const dicts = { en, ru }

export const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('lang') || 'en'
  )

  function setLang(l) {
    localStorage.setItem('lang', l)
    setLangState(l)
  }

  function t(key, vars = {}) {
    const dict = dicts[lang] || dicts.en
    let str = dict[key] ?? dicts.en[key] ?? key
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, String(v))
    })
    return str
  }

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
