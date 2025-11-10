"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "kr"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LANGUAGE_STORAGE_KEY = "apilog-language"
const LANGUAGE_COOKIE_KEY = "apilog-language"

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  useEffect(() => {
    if (typeof window === "undefined") return

    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === "en" || saved === "kr") {
      setLanguageState(saved)
      persistLanguage(saved)
      return
    }

    const browserFallback = getBrowserPreferredLanguage(initialLanguage)
    setLanguageState(browserFallback)
    persistLanguage(browserFallback)
  }, [initialLanguage])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    persistLanguage(lang)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

function persistLanguage(lang: Language) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
  }
  if (typeof document !== "undefined") {
    document.cookie = `${LANGUAGE_COOKIE_KEY}=${lang}; path=/; max-age=31536000`
  }
}

function getBrowserPreferredLanguage(initial: Language): Language {
  if (typeof navigator !== "undefined") {
    const preferredLocales = [...(navigator.languages ?? []), navigator.language].filter(Boolean) as string[]
    if (preferredLocales.some((locale) => locale.toLowerCase().includes("kr") || locale.toLowerCase().includes("ko"))) {
      return "kr"
    }
  }

  if (typeof Intl !== "undefined") {
    const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions()
    if (locale?.toLowerCase().includes("kr") || locale?.toLowerCase().includes("ko") || timeZone === "Asia/Seoul") {
      return "kr"
    }
  }

  return initial
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
