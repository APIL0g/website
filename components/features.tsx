"use client"

import { Card } from "@/components/ui/card"
import { Database, Lock, Zap, Layout, Code, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Features() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Built for privacy and control",
      subtitle: "Everything you need to understand your users without compromising their privacy",
      features: [
        {
          icon: Database,
          title: "Local Data Storage",
          description: "All data stays on your infrastructure. No third-party servers, no data leaks.",
        },
        {
          icon: Layout,
          title: "Customizable Widgets",
          description: "Drag, drop, and arrange analytics widgets to create your perfect dashboard.",
        },
        {
          icon: Lock,
          title: "Privacy First",
          description: "GDPR compliant by design. Your users' data never leaves your control.",
        },
        {
          icon: Zap,
          title: "Real-time Analytics",
          description: "Get instant insights with real-time data processing and visualization.",
        },
        {
          icon: Code,
          title: "Developer Friendly",
          description: "Simple API, extensive documentation, and easy integration with any stack.",
        },
        {
          icon: Shield,
          title: "Self-Hosted",
          description: "Deploy on your own servers. Full control over your analytics infrastructure.",
        },
      ],
    },
    kr: {
      title: "프라이버시와 제어를 위해 설계됨",
      subtitle: "사용자의 프라이버시를 침해하지 않으면서 이해하는 데 필요한 모든 것",
      features: [
        {
          icon: Database,
          title: "로컬 데이터 저장",
          description: "모든 데이터는 귀하의 인프라에 보관됩니다. 제3자 서버 없음, 데이터 유출 없음.",
        },
        {
          icon: Layout,
          title: "커스터마이징 가능한 위젯",
          description: "분석 위젯을 드래그, 드롭, 배치하여 완벽한 대시보드를 만드세요.",
        },
        {
          icon: Lock,
          title: "프라이버시 우선",
          description: "설계부터 GDPR 준수. 사용자 데이터는 절대 귀하의 통제를 벗어나지 않습니다.",
        },
        {
          icon: Zap,
          title: "실시간 분석",
          description: "실시간 데이터 처리 및 시각화로 즉각적인 인사이트를 얻으세요.",
        },
        {
          icon: Code,
          title: "개발자 친화적",
          description: "간단한 API, 광범위한 문서, 모든 스택과의 쉬운 통합.",
        },
        {
          icon: Shield,
          title: "자체 호스팅",
          description: "자체 서버에 배포하세요. 분석 인프라에 대한 완전한 제어.",
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section id="features" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
