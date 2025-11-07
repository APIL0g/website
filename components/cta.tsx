"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function CTA() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Ready to take control of your analytics?",
      subtitle: "Join thousands of developers who trust Apilog for privacy-first analytics.",
      getStarted: "Get Started",
      readDocs: "Read Documentation",
      viewGithub: "View on GitHub",
    },
    kr: {
      title: "분석을 제어할 준비가 되셨나요?",
      subtitle: "프라이버시 우선 분석을 위해 Apilog를 신뢰하는 수천 명의 개발자와 함께하세요.",
      getStarted: "시작하기",
      readDocs: "문서 읽기",
      viewGithub: "GitHub에서 보기",
    },
  }

  const t = translations[language]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-accent/5 rounded-2xl p-12 text-center space-y-6 border border-accent/20">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground text-balance">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/docs">
              <Button size="lg" className="gap-2">
                {t.getStarted}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <BookOpen className="h-5 w-5" />
                {t.readDocs}
              </Button>
            </Link>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
              <a href="https://github.com/APIL0g/APILog" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                {t.viewGithub}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
