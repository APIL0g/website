"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, MessageSquare, BookOpen, Users, Heart, Code, Bug, Lightbulb } from "lucide-react"

export function CommunityContent() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Join the Apilog Community",
      subtitle: "Help us build the future of privacy-focused analytics",
      contribute: {
        title: "How to Contribute",
        description: "We welcome contributions from everyone! Here's how you can get involved:",
        ways: [
          {
            icon: Code,
            title: "Code Contributions",
            description: "Submit pull requests to improve features, fix bugs, or add new functionality.",
          },
          {
            icon: Bug,
            title: "Report Issues",
            description: "Found a bug? Report it on GitHub Issues to help us improve Apilog.",
          },
          {
            icon: BookOpen,
            title: "Improve Documentation",
            description: "Help us make our docs better by fixing typos, adding examples, or clarifying concepts.",
          },
          {
            icon: Lightbulb,
            title: "Share Ideas",
            description: "Have a feature request or improvement idea? We'd love to hear it!",
          },
        ],
      },
      guidelines: {
        title: "Contribution Guidelines",
        intro: "To ensure a smooth contribution process, please follow these guidelines:",
        steps: [
          {
            title: "1. Fork the Repository",
            description: "Start by forking the Apilog repository to your GitHub account.",
          },
          {
            title: "2. Create a Branch",
            description: "Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name",
          },
          {
            title: "3. Make Your Changes",
            description:
              "Write clean, well-documented code following our coding standards. Include tests for new features.",
          },
          {
            title: "4. Commit Your Changes",
            description:
              "Use clear, descriptive commit messages: git commit -m 'Add: new widget customization feature'",
          },
          {
            title: "5. Push and Create PR",
            description: "Push your changes and create a pull request with a detailed description of your changes.",
          },
          {
            title: "6. Code Review",
            description: "Our maintainers will review your PR. Be responsive to feedback and make requested changes.",
          },
        ],
      },
      codeOfConduct: {
        title: "Code of Conduct",
        intro: "We are committed to providing a welcoming and inclusive environment for everyone.",
        principles: [
          {
            title: "Be Respectful",
            description:
              "Treat everyone with respect. Harassment, discrimination, and offensive behavior will not be tolerated.",
          },
          {
            title: "Be Collaborative",
            description: "Work together constructively. Provide helpful feedback and be open to receiving it.",
          },
          {
            title: "Be Professional",
            description: "Keep discussions focused and professional. Avoid personal attacks and inflammatory language.",
          },
          {
            title: "Be Inclusive",
            description: "Welcome newcomers and help them get started. Everyone was a beginner once.",
          },
        ],
        enforcement: "Violations of this code of conduct may result in temporary or permanent ban from the community.",
      },
      support: {
        title: "Get Support",
        description: "Need help? Here's where you can get assistance:",
        channels: [
          {
            icon: Github,
            title: "GitHub Issues",
            description: "Report bugs and request features",
            link: "https://github.com",
          },
          {
            icon: MessageSquare,
            title: "Discussions",
            description: "Ask questions and share ideas",
            link: "https://github.com",
          },
          {
            icon: BookOpen,
            title: "Documentation",
            description: "Read our comprehensive guides",
            link: "/docs",
          },
        ],
      },
      cta: {
        title: "Ready to Contribute?",
        description: "Join hundreds of developers building the future of analytics",
        button: "View on GitHub",
      },
    },
    kr: {
      title: "Apilog 커뮤니티에 참여하세요",
      subtitle: "프라이버시 중심 분석 도구의 미래를 함께 만들어가요",
      contribute: {
        title: "기여 방법",
        description: "모든 분의 기여를 환영합니다! 다음과 같은 방법으로 참여하실 수 있습니다:",
        ways: [
          {
            icon: Code,
            title: "코드 기여",
            description: "기능 개선, 버그 수정, 새로운 기능 추가를 위한 풀 리퀘스트를 제출하세요.",
          },
          {
            icon: Bug,
            title: "이슈 제보",
            description: "버그를 발견하셨나요? GitHub Issues에 제보하여 Apilog 개선에 도움을 주세요.",
          },
          {
            icon: BookOpen,
            title: "문서 개선",
            description: "오타 수정, 예제 추가, 개념 설명 개선 등으로 문서를 더 좋게 만들어주세요.",
          },
          {
            icon: Lightbulb,
            title: "아이디어 공유",
            description: "기능 요청이나 개선 아이디어가 있으신가요? 언제든 공유해주세요!",
          },
        ],
      },
      guidelines: {
        title: "기여 가이드라인",
        intro: "원활한 기여 프로세스를 위해 다음 가이드라인을 따라주세요:",
        steps: [
          {
            title: "1. 저장소 포크하기",
            description: "Apilog 저장소를 본인의 GitHub 계정으로 포크하는 것부터 시작하세요.",
          },
          {
            title: "2. 브랜치 생성",
            description: "기능이나 버그 수정을 위한 새 브랜치를 생성하세요: git checkout -b feature/기능-이름",
          },
          {
            title: "3. 변경사항 작성",
            description: "코딩 표준을 따라 깔끔하고 잘 문서화된 코드를 작성하세요. 새 기능에는 테스트를 포함하세요.",
          },
          {
            title: "4. 커밋하기",
            description:
              "명확하고 설명적인 커밋 메시지를 사용하세요: git commit -m 'Add: 새로운 위젯 커스터마이징 기능'",
          },
          {
            title: "5. 푸시 및 PR 생성",
            description: "변경사항을 푸시하고 상세한 설명과 함께 풀 리퀘스트를 생성하세요.",
          },
          {
            title: "6. 코드 리뷰",
            description: "메인테이너가 PR을 리뷰합니다. 피드백에 적극적으로 응답하고 요청된 변경사항을 반영하세요.",
          },
        ],
      },
      codeOfConduct: {
        title: "행동 강령",
        intro: "우리는 모든 사람에게 환영받고 포용적인 환경을 제공하기 위해 노력합니다.",
        principles: [
          {
            title: "존중하기",
            description: "모든 사람을 존중하세요. 괴롭힘, 차별, 공격적인 행동은 용납되지 않습니다.",
          },
          {
            title: "협력하기",
            description: "건설적으로 협력하세요. 도움이 되는 피드백을 제공하고 받아들이는 데 열린 자세를 가지세요.",
          },
          {
            title: "전문성 유지",
            description: "토론을 집중적이고 전문적으로 유지하세요. 인신공격과 선동적인 언어를 피하세요.",
          },
          {
            title: "포용하기",
            description: "새로운 사람들을 환영하고 시작하는 데 도움을 주세요. 누구나 처음에는 초보자였습니다.",
          },
        ],
        enforcement: "이 행동 강령을 위반하면 커뮤니티에서 일시적 또는 영구적으로 제재될 수 있습니다.",
      },
      support: {
        title: "지원 받기",
        description: "도움이 필요하신가요? 다음 채널을 통해 지원을 받으실 수 있습니다:",
        channels: [
          {
            icon: Github,
            title: "GitHub Issues",
            description: "버그 제보 및 기능 요청",
            link: "https://github.com",
          },
          {
            icon: MessageSquare,
            title: "토론",
            description: "질문하고 아이디어 공유하기",
            link: "https://github.com",
          },
          {
            icon: BookOpen,
            title: "문서",
            description: "포괄적인 가이드 읽기",
            link: "/docs",
          },
        ],
      },
      cta: {
        title: "기여할 준비가 되셨나요?",
        description: "수백 명의 개발자와 함께 분석 도구의 미래를 만들어가세요",
        button: "GitHub에서 보기",
      },
    },
  }

  const t = translations[language]

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* How to Contribute */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">{t.contribute.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t.contribute.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.contribute.ways.map((way, index) => (
              <Card key={index} className="p-6">
                <way.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{way.title}</h3>
                <p className="text-muted-foreground">{way.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contribution Guidelines */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">{t.guidelines.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t.guidelines.intro}</p>
          <div className="space-y-6">
            {t.guidelines.steps.map((step, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Code of Conduct */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">{t.codeOfConduct.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t.codeOfConduct.intro}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {t.codeOfConduct.principles.map((principle, index) => (
              <Card key={index} className="p-6">
                <Heart className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
          <Card className="p-6 bg-muted">
            <p className="text-sm text-muted-foreground">{t.codeOfConduct.enforcement}</p>
          </Card>
        </section>

        {/* Get Support */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">{t.support.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t.support.description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.support.channels.map((channel, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <channel.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                <Button variant="outline" asChild>
                  <a
                    href={channel.link}
                    target={channel.link.startsWith("http") ? "_blank" : undefined}
                    rel={channel.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {language === "en" ? "Learn More" : "자세히 보기"}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-br from-accent/10 to-accent/5">
            <Users className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
            <Button size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                {t.cta.button}
              </a>
            </Button>
          </Card>
        </section>
      </div>
    </main>
  )
}
