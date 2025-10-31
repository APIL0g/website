"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Analytics that runs",
      titleHighlight: "on your terms",
      subtitle:
        "Open-source analytics platform that runs locally. Collect, analyze, and visualize your data with complete privacy and control.",
      getStarted: "Get Started",
      viewDemo: "View Demo",
      openSource: "Open Source",
      selfHosted: "Self-Hosted",
      privacy: "Privacy First",
    },
    ko: {
      title: "당신의 방식대로",
      titleHighlight: "작동하는 분석 도구",
      subtitle:
        "로컬에서 실행되는 오픈소스 분석 플랫폼. 완전한 프라이버시와 제어권으로 데이터를 수집, 분석, 시각화하세요.",
      getStarted: "시작하기",
      viewDemo: "데모 보기",
      openSource: "오픈소스",
      selfHosted: "자체 호스팅",
      privacy: "프라이버시 우선",
    },
  }

  const t = translations[language]

  const demoUrl = "https://apilog.kr:8080"

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {t.openSource}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            {t.title}
            <br />
            <span className="text-accent">{t.titleHighlight}</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/docs">
                <Download className="h-5 w-5" />
                {t.getStarted}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                {t.viewDemo}
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              {t.selfHosted}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              {t.privacy}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              {t.openSource}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
