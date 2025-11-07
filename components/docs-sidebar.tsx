"use client"

import type React from "react"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { Book, Code, Cog, Rocket, Blocks, FileText, HelpCircle } from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function DocsSidebar() {
  const { language } = useLanguage()

  const translations = {
    en: {
      quickStart: "Quick Start",
      configuration: "Configuration",
      features: "Features",
      troubleshooting: "Troubleshooting",
    },
    kr: {
      quickStart: "빠른 시작",
      configuration: "설정",
      features: "기능",
      troubleshooting: "문제 해결",
    },
  }

  const t = translations[language]

  const sections: SidebarItem[] = [
    { title: t.quickStart, href: "#quick-start", icon: <Rocket className="h-4 w-4" /> },
    { title: t.configuration, href: "#configuration", icon: <Cog className="h-4 w-4" /> },
    { title: t.features, href: "#features", icon: <Blocks className="h-4 w-4" /> },
    { title: t.troubleshooting, href: "#troubleshooting", icon: <HelpCircle className="h-4 w-4" /> },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground cursor-pointer",
              )}
            >
              {item.icon}
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
