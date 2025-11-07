"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function WidgetShowcase() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Your dashboard, your way",
      subtitle: "Build custom dashboards with our flexible portlet system",
      description:
        "Arrange analytics widgets exactly how you want them. Drag, drop, resize, and customize to create the perfect view for your needs.",
      pageViews: "Page Views",
      pageViewsValue: "24,583",
      activeUsers: "Active Users",
      activeUsersValue: "1,429",
      clickRate: "Click Rate",
      clickRateValue: "3.24%",
      conversion: "Conversion",
      conversionValue: "12.5%",
    },
    kr: {
      title: "당신의 대시보드, 당신의 방식",
      subtitle: "유연한 포틀릿 시스템으로 맞춤형 대시보드 구축",
      description:
        "원하는 대로 분석 위젯을 정확하게 배치하세요. 드래그, 드롭, 크기 조정 및 사용자 정의하여 필요에 맞는 완벽한 뷰를 만드세요.",
      pageViews: "페이지 조회수",
      pageViewsValue: "24,583",
      activeUsers: "활성 사용자",
      activeUsersValue: "1,429",
      clickRate: "클릭률",
      clickRateValue: "3.24%",
      conversion: "전환율",
      conversionValue: "12.5%",
    },
  }

  const t = translations[language]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{t.subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-border">
            <Image
              src="/example.gif"
              alt="Apilog Widget Customization Demo"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        

        <p className="text-center text-muted-foreground text-balance max-w-2xl mx-auto">{t.description}</p>
      </div>
    </section>
  )
}
