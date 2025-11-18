"use client"

import React from "react"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { Book, Code, Cog, Rocket, Blocks, FileText, HelpCircle } from "lucide-react"

interface SidebarChild {
  title: string
  href: string
}

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
  children?: SidebarChild[]
}

export function DocsSidebar() {
  const { language } = useLanguage()

  const translations = {
    en: {
      quickStart: "Quick Start",
      step1: "Clone the repository",
      step2: "Configure environment variables",
      step3: "Run with Docker",
      step4: "Add tracking script",
      configuration: "Configuration",
      envVars: "Environment Variables",
      features: "Features",
      troubleshooting: "Troubleshooting",
    },
    kr: {
      quickStart: "빠른 시작",
      step1: "저장소 복제",
      step2: "환경 변수 설정",
      step3: "Docker로 실행",
      step4: "웹사이트에 추적 코드 추가",
      configuration: "설정",
      envVars: "환경 변수",
      features: "기능",
      troubleshooting: "문제 해결",
    },
  }

  const t = translations[language]
  const [openSection, setOpenSection] = React.useState<string | null>(null)

  const sections: SidebarItem[] = [
    {
      title: t.quickStart,
      href: "#quick-start",
      icon: <Rocket className="h-4 w-4" />,
      children: [
        { title: `1. ${t.step1}`, href: "#quick-start-step-1" },
        { title: `2. ${t.step2}`, href: "#quick-start-step-2" },
        { title: `3. ${t.step3}`, href: "#quick-start-step-3" },
        { title: `4. ${t.step4}`, href: "#quick-start-step-4" },
      ],
    },
    {
      title: t.configuration,
      href: "#configuration",
      icon: <Cog className="h-4 w-4" />,
      children: [{ title: t.envVars, href: "#configuration-env-vars" }],
    },
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
    <aside className="mb-6 w-full flex-shrink-0 rounded-2xl border border-border/70 bg-background/95 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:mb-0 lg:w-64 lg:rounded-none lg:border-0 lg:border-r lg:p-0 lg:shadow-none">
      <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:px-4 lg:py-6">
        <nav className="space-y-3">
          {sections.map((item) => {
            const hasChildren = Boolean(item.children?.length)
            const isOpen = openSection === item.href

            return (
              <div key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleClick(e, item.href)
                    if (hasChildren) {
                      setOpenSection((prev) => (prev === item.href ? null : item.href))
                    } else {
                      setOpenSection(null)
                    }
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  )}
                >
                  {item.icon}
                  {item.title}
                </a>
                {hasChildren && isOpen ? (
                  <div className="mt-1 space-y-1 border-l pl-3 ml-4 border-border/60">
                    {item.children!.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={(e) => handleClick(e, child.href)}
                        className={cn(
                          "block rounded-md px-3 py-1 text-xs text-muted-foreground transition-colors",
                          "hover:text-foreground hover:bg-muted/40",
                        )}
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
