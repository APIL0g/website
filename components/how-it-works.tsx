"use client"

import { Card } from "@/components/ui/card"
import { Download, Settings, BarChart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Get started in minutes",
      steps: [
        {
          icon: Download,
          title: "Install Apilog",
          description: "Download and install Apilog on your local server or infrastructure.",
        },
        {
          icon: Settings,
          title: "Configure & Integrate",
          description: "Add the tracking script to your website and configure your data collection.",
        },
        {
          icon: BarChart,
          title: "Analyze & Visualize",
          description: "Start collecting data and build custom dashboards with our widget system.",
        },
      ],
    },
    ko: {
      title: "몇 분 안에 시작하세요",
      steps: [
        {
          icon: Download,
          title: "Apilog 설치",
          description: "로컬 서버 또는 인프라에 Apilog를 다운로드하고 설치하세요.",
        },
        {
          icon: Settings,
          title: "구성 및 통합",
          description: "웹사이트에 추적 스크립트를 추가하고 데이터 수집을 구성하세요.",
        },
        {
          icon: BarChart,
          title: "분석 및 시각화",
          description: "데이터 수집을 시작하고 위젯 시스템으로 맞춤형 대시보드를 구축하세요.",
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
              {index < t.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
