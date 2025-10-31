"use client"

import { useLanguage } from "@/lib/language-context"
import { Card } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { Settings, BarChart3, Puzzle, Shield, Code, Database, Globe, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function DocsContent() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Documentation",
      subtitle: "Complete guide to building with Apilog",
      gettingStarted: "Getting Started",
      installation: "Installation",
      configuration: "Configuration",
      features: "Features",
      installTitle: "Installation",
      installDesc: "Get Apilog up and running in minutes",
      prerequisites: "Prerequisites",
      prerequisitesItems: [
        "Docker and Docker Compose",
        "Git",
        "A domain or server to host Apilog",
      ],
      installSteps: "Installation Steps",
      step1: "Clone the repository",
      step2: "Configure environment variables",
      step3: "Run with Docker",
      step4: "Add tracking code to your website",
      step5: "Start the development server",
      configTitle: "Configuration",
      configDesc: "Configure Apilog to match your needs",
      envVars: "Environment Variables",
      databaseUrl: "Database connection string",
      port: "Server port (default: 3000)",
      secretKey: "Secret key for session encryption",
      corsOrigin: "Allowed CORS origins",
      featuresTitle: "Core Features",
      featuresDesc: "Explore what Apilog can do",
      feature1Title: "Real-time Analytics",
      feature1Desc: "Track page views, user sessions, and events in real-time with low latency data processing.",
      feature2Title: "Custom Dashboards",
      feature2Desc:
        "Build personalized dashboards using our flexible portlet system. Drag, drop, and arrange widgets to suit your workflow.",
      feature3Title: "Privacy-First",
      feature3Desc: "All data stays on your infrastructure. No third-party tracking, complete GDPR compliance.",
      feature4Title: "Event Tracking",
      feature4Desc: "Track custom events, conversions, and user interactions with our simple JavaScript SDK.",
      feature5Title: "Data Export",
      feature5Desc: "Export your analytics data in multiple formats (CSV, JSON, SQL) for further analysis.",
      feature6Title: "Self-Hosted",
      feature6Desc: "Deploy on your own servers or cloud infrastructure. You own and control all your data.",
      apiDesc: "Integrate Apilog into your applications",
      trackingApi: "Tracking API",
      trackingApiDesc: "Send events and page views to Apilog",
      endpoint: "Endpoint",
      method: "Method",
      headers: "Headers",
      body: "Request Body",
      response: "Response",
      queryApi: "Query API",
      queryApiDesc: "Retrieve analytics data programmatically",
      quickStart: "Quick Start Guide",
      quickStartDesc: "Get started with Apilog in 5 minutes",
      quickStep1: "Clone the repository",
      quickStep2: "Configure environment variables",
      quickStep3: "Run with Docker",
      quickStep4: "Inject tracking code snippet",
      quickStep5: "Start tracking events",
      quickStep6: "View your analytics dashboard",
      sdkTitle: "SDK Reference",
      sdkDesc: "JavaScript SDK for tracking events",
      sdkInstall: "Installation",
      sdkInit: "Initialization",
      sdkTracking: "Tracking Events",
      sdkIdentify: "Identify Users",
      examplesTitle: "Examples & Tutorials",
      examplesDesc: "Learn by example",
      example1Title: "Basic Page Tracking",
      example1Desc: "Track page views automatically",
      example2Title: "Custom Event Tracking",
      example2Desc: "Track button clicks and user interactions",
      example3Title: "E-commerce Tracking",
      example3Desc: "Track purchases and conversions",
      troubleshootingTitle: "Troubleshooting",
      troubleshootingDesc: "Common issues and solutions",
      issue1Title: "Events not appearing in dashboard",
      issue1Solution: "Check that your API key is correct and the tracking script is loaded before any tracking calls.",
      issue2Title: "CORS errors",
      issue2Solution: "Add your domain to the CORS_ORIGIN environment variable in your Apilog configuration.",
      issue3Title: "High latency",
      issue3Solution: "Consider deploying Apilog closer to your users or using a CDN for the tracking script.",
      note: "Note",
      warning: "Warning",
      tip: "Tip",
      bestPractices: "Best Practices",
      bestPractice1: "Always use environment variables for sensitive configuration",
      bestPractice2: "Enable HTTPS in production for secure data transmission",
      bestPractice3: "Regularly backup your analytics database",
      bestPractice4: "Monitor your Apilog instance performance and scale as needed",
      tipDescription: "This documentation is for Apilog v1.0. For older versions, see the version selector above.",
      quickStartTitle: "Quick Start",
      installSetupTitle: "Installation & Setup",
      envCopyDescription: "Copy the example environment file and configure your settings",
      envEditComment: "Edit .env with your configuration:",
      dockerDescription:
        "Start Apilog using Docker Compose. This will set up the database and application automatically.",
      dockerCheckServices: "Check if services are running:",
      dockerViewLogs: "View logs:",
      dockerNote:
        "Apilog will be available at http://localhost:8080 by default. Access the dashboard to get your API key.",
      addScriptDescription:
        "Add the Apilog tracking script to your website's HTML, just before the closing </head> tag:",
      replaceApiKeyNotice:
        "Replace '<Public IP or Domain>' with your Public Ip or Domain",
      installSuccessTitle: "Success!",
      installSuccessDescription:
        "Your analytics are now being collected! Visit your Apilog dashboard to see real-time data.",
      helpTitle: "Need more help?",
      helpDescription: "Join our community on GitHub Discussions or open an issue for bug reports.",
    },
    ko: {
      title: "문서",
      subtitle: "Apilog로 구축하기 위한 완벽한 가이드",
      gettingStarted: "시작하기",
      installation: "설치",
      configuration: "설정",
      features: "기능",
      api: "API 레퍼런스",
      installTitle: "설치",
      installDesc: "몇 분 안에 Apilog를 실행하세요",
      prerequisites: "사전 요구사항",
      prerequisitesItems: [
        "Docker 및 Docker Compose",
        "Git",
        "Apilog를 호스팅할 도메인 또는 서버",
      ],
      installSteps: "설치 단계",
      step1: "저장소 복제",
      step2: "환경 변수 설정",
      step3: "Docker로 실행",
      step4: "웹사이트에 추적 코드 추가",
      step5: "개발 서버 시작",
      configTitle: "설정",
      configDesc: "필요에 맞게 Apilog를 설정하세요",
      envVars: "환경 변수",
      databaseUrl: "데이터베이스 연결 문자열",
      port: "서버 포트 (기본값: 3000)",
      secretKey: "세션 암호화를 위한 비밀 키",
      corsOrigin: "허용된 CORS 출처",
      featuresTitle: "핵심 기능",
      featuresDesc: "Apilog가 할 수 있는 일을 살펴보세요",
      feature1Title: "실시간 분석",
      feature1Desc: "낮은 지연 시간의 데이터 처리로 페이지 조회수, 사용자 세션, 이벤트를 실시간으로 추적합니다.",
      feature2Title: "커스텀 대시보드",
      feature2Desc:
        "유연한 포틀릿 시스템을 사용하여 개인화된 대시보드를 구축하세요. 위젯을 드래그, 드롭하고 워크플로우에 맞게 배치하세요.",
      feature3Title: "프라이버시 우선",
      feature3Desc: "모든 데이터는 귀하의 인프라에 보관됩니다. 제3자 추적 없음, 완전한 GDPR 준수.",
      feature4Title: "이벤트 추적",
      feature4Desc: "간단한 JavaScript SDK로 커스텀 이벤트, 전환, 사용자 상호작용을 추적하세요.",
      feature5Title: "데이터 내보내기",
      feature5Desc: "추가 분석을 위해 분석 데이터를 여러 형식(CSV, JSON, SQL)으로 내보내세요.",
      feature6Title: "자체 호스팅",
      feature6Desc: "자체 서버 또는 클라우드 인프라에 배포하세요. 모든 데이터를 소유하고 제어합니다.",
      apiTitle: "API 레퍼런스",
      apiDesc: "애플리케이션에 Apilog를 통합하세요",
      trackingApi: "추적 API",
      trackingApiDesc: "Apilog에 이벤트 및 페이지 조회수 전송",
      endpoint: "엔드포인트",
      method: "메서드",
      headers: "헤더",
      body: "요청 본문",
      response: "응답",
      queryApi: "쿼리 API",
      queryApiDesc: "프로그래밍 방식으로 분석 데이터 검색",
      quickStart: "빠른 시작 가이드",
      quickStartDesc: "5분 안에 Apilog 시작하기",
      quickStep1: "저장소 복제",
      quickStep2: "환경 변수 설정",
      quickStep3: "Docker로 실행",
      quickStep4: "웹사이트에 추적 코드 추가",
      quickStep5: "이벤트 추적 시작",
      quickStep6: "분석 대시보드 보기",
      sdkTitle: "SDK 레퍼런스",
      sdkDesc: "이벤트 추적을 위한 JavaScript SDK",
      sdkInstall: "설치",
      sdkInit: "초기화",
      sdkTracking: "이벤트 추적",
      sdkIdentify: "사용자 식별",
      examplesTitle: "예제 및 튜토리얼",
      examplesDesc: "예제로 배우기",
      example1Title: "기본 페이지 추적",
      example1Desc: "페이지 조회수 자동 추적",
      example2Title: "커스텀 이벤트 추적",
      example2Desc: "버튼 클릭 및 사용자 상호작용 추적",
      example3Title: "전자상거래 추적",
      example3Desc: "구매 및 전환 추적",
      troubleshootingTitle: "문제 해결",
      troubleshootingDesc: "일반적인 문제 및 해결 방법",
      issue1Title: "대시보드에 이벤트가 표시되지 않음",
      issue1Solution: "API 키가 올바른지 확인하고 추적 스크립트가 추적 호출 전에 로드되는지 확인하세요.",
      issue2Title: "CORS 오류",
      issue2Solution: "Apilog 설정의 CORS_ORIGIN 환경 변수에 도메인을 추가하세요.",
      issue3Title: "높은 지연 시간",
      issue3Solution: "사용자에게 더 가까운 곳에 Apilog를 배포하거나 추적 스크립트에 CDN을 사용하는 것을 고려하세요.",
      note: "참고",
      warning: "경고",
      tip: "팁",
      bestPractices: "모범 사례",
      bestPractice1: "민감한 설정에는 항상 환경 변수를 사용하세요",
      bestPractice2: "프로덕션에서는 안전한 데이터 전송을 위해 HTTPS를 활성화하세요",
      bestPractice3: "분석 데이터베이스를 정기적으로 백업하세요",
      bestPractice4: "Apilog 인스턴스 성능을 모니터링하고 필요에 따라 확장하세요",
      tipDescription: "이 문서는 Apilog v1.0 버전용입니다. 이전 버전은 위의 버전 선택기를 참고하세요.",
      quickStartTitle: "빠른 시작",
      installSetupTitle: "설치 및 설정",
      envCopyDescription: "예시 환경 변수 파일을 복사하고 설정을 구성하세요.",
      envEditComment: ".env 파일을 열어 설정을 수정하세요:",
      dockerDescription: "Docker Compose로 Apilog를 실행합니다. 데이터베이스와 애플리케이션이 자동으로 준비됩니다.",
      dockerCheckServices: "서비스가 실행 중인지 확인:",
      dockerViewLogs: "로그 보기:",
      dockerNote: "기본적으로 Apilog는 http://localhost:8080에서 제공됩니다. 대시보드에 접속해 API 키를 받아가세요.",
      addScriptDescription: "웹사이트의 HTML에서 </head> 직전에 Apilog 추적 스크립트를 추가하세요:",
      replaceApiKeyNotice: "당신의 퍼블릭 IP 혹은 도메인 이름으로 '<Public IP or Domain>'를 교체하세요.",
      installSuccessTitle: "성공!",
      installSuccessDescription: "이제 분석 데이터가 수집되고 있습니다. Apilog 대시보드에서 실시간 데이터를 확인하세요.",
      helpTitle: "더 도움이 필요하신가요?",
      helpDescription: "GitHub Discussions 커뮤니티에 참여하거나 버그 제보를 위해 이슈를 등록하세요.",
    },
  }

  const t = translations[language]

  return (
    <div className="flex-1 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {/* Quick Start */}
        <section id="quick-start" className="scroll-mt-24 mb-16">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t.subtitle}</p>

          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t.tip}</AlertTitle>
            <AlertDescription>
              {t.tipDescription}
            </AlertDescription>
          </Alert>

          <h2 className="text-3xl font-bold mb-4">{t.quickStartTitle}</h2>
          <p className="text-muted-foreground mb-6">
            {t.quickStartDesc}
          </p>

          <h3 className="text-xl font-semibold mb-3">{t.prerequisites}</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            {t.prerequisitesItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4">{t.installSetupTitle}</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">{t.step1}</h4>
                <CodeBlock
                  code={`git clone https://github.com/APIL0g/APILog.git
cd apilog`}
                  language="bash"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">
                  {t.step2}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.envCopyDescription}
                </p>
                <CodeBlock
                  code={`
cp .env.example .env

# ${t.envEditComment}
# DATABASE_URL=postgresql://user:password@db:5432/apilog
# SECRET_KEY=your-secret-key-here
# CORS_ORIGIN=https://yourdomain.com`
                      }
                  language="bash"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">{t.step3}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.dockerDescription}
                </p>
                <CodeBlock
                  code={
                        `docker compose up -d --build

# ${t.dockerCheckServices}
docker compose ps

# ${t.dockerViewLogs}
docker compose logs -f`
                      }
                  language="bash"
                />
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{t.note}</AlertTitle>
                  <AlertDescription>
                    {t.dockerNote}
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">
                  {t.step4}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.addScriptDescription}
                </p>
                <CodeBlock
                  code={`<!-- Add this to your website's <head> section -->
<script>
  src="http://<Public IP or Domain>:8080/apilog/embed.js"
  data-site-id="main"
  data-ingest-url="http://<Public IP or Domain>:8080/api/ingest/events"
  strategy="beforeInteractive"
</script>`
                        }
                  language="html"
                />
                <p className="text-sm text-muted-foreground mt-3">
                  {t.replaceApiKeyNotice}
                </p>
              </div>
            </div>
          </div>

          <Alert className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t.installSuccessTitle}</AlertTitle>
            <AlertDescription>
              {t.installSuccessDescription}
            </AlertDescription>
          </Alert>

        </section>

        {/* Configuration */}
        <section id="configuration" className="scroll-mt-24 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">{t.configTitle}</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            {t.configDesc}
          </p>

          <h3 className="text-xl font-semibold mb-4">{t.envVars}</h3>

          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-4">
              <code className="font-mono text-sm font-semibold">DATABASE_URL</code>
              <p className="text-sm text-muted-foreground mt-1">
                {t.databaseUrl}
              </p>
              <CodeBlock code="postgresql://user:password@localhost:5432/apilog" language="bash" />
            </div>

            <div className="border-l-4 border-accent pl-4">
              <code className="font-mono text-sm font-semibold">PORT</code>
              <p className="text-sm text-muted-foreground mt-1">
                {t.port}
              </p>
              <CodeBlock code="3000" language="bash" />
            </div>

            <div className="border-l-4 border-accent pl-4">
              <code className="font-mono text-sm font-semibold">SECRET_KEY</code>
              <p className="text-sm text-muted-foreground mt-1">
                {t.secretKey}
              </p>
              <CodeBlock code="your-secret-key-here" language="bash" />
            </div>

            <div className="border-l-4 border-accent pl-4">
              <code className="font-mono text-sm font-semibold">CORS_ORIGIN</code>
              <p className="text-sm text-muted-foreground mt-1">
                {t.corsOrigin}
              </p>
              <CodeBlock code="https://yourdomain.com,https://app.yourdomain.com" language="bash" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">{t.bestPractices}</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>{t.bestPractice1}</li>
            <li>{t.bestPractice2}</li>
            <li>{t.bestPractice3}</li>
            <li>{t.bestPractice4}</li>
          </ul>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.featuresTitle}</h2>
          <p className="text-muted-foreground mb-6">
            {t.featuresDesc}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{t.feature1Title}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.feature1Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Puzzle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{t.feature2Title}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.feature2Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{t.feature3Title}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.feature3Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Code className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{t.feature4Title}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.feature4Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Database className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{t.feature5Title}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.feature5Desc}
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">{t.feature6Title}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.feature6Desc}
              </p>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="scroll-mt-24 mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.troubleshootingTitle}</h2>
          <p className="text-muted-foreground mb-6">{t.troubleshootingDesc}</p>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">{t.issue1Title}</h3>
              <p className="text-muted-foreground">{t.issue1Solution}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">{t.issue2Title}</h3>
              <p className="text-muted-foreground">{t.issue2Solution}</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">{t.issue3Title}</h3>
              <p className="text-muted-foreground">{t.issue3Solution}</p>
            </Card>
          </div>

          <Alert className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t.helpTitle}</AlertTitle>
            <AlertDescription>
              {t.helpDescription}
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  )
}
