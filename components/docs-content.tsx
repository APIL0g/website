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
      envVarsDescription: "These values map directly to the .env template above. Update them before running docker-compose.",
      envOptionalSummary: "Optional settings",
      envOptionalDescription: "Toggle to view the optional CORS/LLM/AI cache configuration.",
      optionalDetailItems: [
        {
          key: "CORS_ALLOW_ORIGIN",
          title: "CORS_ALLOW_ORIGIN",
          description: "Comma-separated origins that are allowed to call apilog-api.",
        },
        {
          key: "LLM_PROVIDER",
          title: "LLM_PROVIDER",
          description: "LLM provider identifier. Keep 'ollama' unless you swap providers.",
        },
        {
          key: "LLM_ENDPOINT",
          title: "LLM_ENDPOINT",
          description: "Internal URL apilog-api uses to reach the LLM service.",
        },
        {
          key: "LLM_MODEL",
          title: "LLM_MODEL",
          description: "Exact Ollama model tag used for generating insights.",
        },
        {
          key: "LLM_TEMPERATURE",
          title: "LLM_TEMPERATURE",
          description: "Controls randomness of AI responses (lower values are more deterministic).",
        },
        {
          key: "LLM_TIMEOUT_S",
          title: "LLM_TIMEOUT_S",
          description: "Seconds to wait before timing out LLM requests.",
        },
        {
          key: "AI_INSIGHTS_CACHE_TTL",
          title: "AI_INSIGHTS_CACHE_TTL",
          description: "Cache duration for AI insights in seconds.",
        },
        {
          key: "AI_INSIGHTS_EXPLAIN_CACHE_TTL",
          title: "AI_INSIGHTS_EXPLAIN_CACHE_TTL",
          description: "Cache TTL for AI explanations (0 disables caching).",
        },
        {
          key: "AI_REPORT_FETCH_BASE",
          title: "AI_REPORT_FETCH_BASE",
          description: "Internal API endpoint used by the AI widgets.",
        },
      ],
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
      envSnippet: `# Rename this file to .env and update the values for your environment.
# 이 파일을 .env 로 이름을 바꾸고, 환경에 맞게 값을 수정하세요.

############################################################
# Required Settings (필수 설정)
############################################################

# InfluxDB authentication token used by both ingestion and query APIs.
# InfluxDB 인증 토큰 (수집/조회 API 모두에서 사용) → 운영용 안전한 값으로 교체하세요.
INFLUX_TOKEN=<your-influxdb-token>

# InfluxDB database name where APILog writes/reads analytics events.
# APILog이 데이터를 저장/조회할 InfluxDB 데이터베이스 이름.
INFLUX_DATABASE=<your-database-name>

# Public base URL of the site you want to snapshot/analyze.
# 스냅샷·분석 대상 실서비스의 기본 URL (예: https://example.com).
TARGET_SITE_BASE_URL=<https://your-site.com>

############################################################
# Optional Settings (선택 설정) — 필요한 경우에만 수정
############################################################

# InfluxDB endpoint (override only when not using docker-compose defaults)
# 기본 docker-compose 구성에서 바꾸지 않았다면 그대로 두세요.
INFLUX_URL=http://influxdb3-core:8181

# CORS allow list (comma separated or * for all origins)
# CORS 허용 도메인 (쉼표로 구분하거나 * 를 사용하여 모두 허용)
CORS_ALLOW_ORIGIN=*

# LLM (Ollama) Settings
# LLM (Ollama) 설정
LLM_PROVIDER=ollama
# Use Docker service name so apilog-api can reach the Ollama container
# apilog-api에서 Ollama 컨테이너에 연결할 수 있도록 Docker 서비스 이름 사용
LLM_ENDPOINT=http://ollama:11434
# Trimmed model tag (no trailing spaces)
# Ollama에서 다운로드한 모델 태그 (뒤에 공백 없음)
LLM_MODEL=llama3:8b
LLM_TEMPERATURE=0.2
LLM_TIMEOUT_S=60

# AI caching / internal API endpoints
# AI 캐싱 / 내부 API 엔드포인트
AI_INSIGHTS_CACHE_TTL=60
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0
AI_REPORT_FETCH_BASE=http://apilog-api:8000

# Optional settings reference (선택 설정 안내)
# - LLM_*: Adjust only for advanced LLM tuning / LLM 동작을 세밀히 조정할 때만 변경
# - AI_INSIGHTS_* / AI_REPORT_FETCH_BASE: Modify when 캐시 정책이나 내부 API 주소를 바꿔야 할 때만 변경하세요.
`,
      dockerDescription:
        "Start Apilog using Docker Compose. This will set up the database and application automatically.",
      dockerCheckServices: "Check if services are running:",
      dockerViewLogs: "View logs:",
      dockerNote:
        "Apilog is available at http://localhost:10000 by default to grab your API key; only open host port 10000 to your own IP when exposing it externally.",
      composeReferenceSummary: "Need the docker-compose reference?",
      composeReferenceDescription:
        "Expand to review how each service is wired. Un-comment the gpus:all block when you want to pass through a GPU.",
      envOptionalNote: "Expand the optional settings below to view the CORS/LLM/AI cache configuration.",
      dockerComposeReference: `version: "3.9"

services:
  ############################################################
  # 1) InfluxDB 3 Core
  # Time-series DB exposing the API on port 8181
  ############################################################
  influxdb3-core:
    image: quay.io/influxdb/influxdb3:latest
    container_name: influxdb3-core

    # Run as root to avoid permission issues on local volumes
    user: "0:0"

    environment:
      # Automatically provision database + tokens on first start
      INFLUXDB_INIT_MODE: setup
      INFLUXDB_INIT_USERNAME: \${INFLUX_USERNAME}
      INFLUXDB_INIT_PASSWORD: \${INFLUX_PASSWORD}
      INFLUXDB_INIT_ORG: \${INFLUX_ORG}
      INFLUXDB_INIT_DATABASE: \${INFLUX_DATABASE}
      INFLUXDB_INIT_RETENTION: autogen
      INFLUXDB_INIT_ADMIN_TOKEN: \${INFLUX_TOKEN}

    command:
      - serve
      - --host-id=influx-node0
      - --object-store=file
      - --data-dir=/var/lib/influxdb3/data
      - --plugin-dir=/var/lib/influxdb3/plugins

    ports:
      - "8181:8181"   # Expose locally for development; restrict in production

    volumes:
      - influx-data:/var/lib/influxdb3/data
      - influx-plugins:/var/lib/influxdb3/plugins

    restart: unless-stopped

  ############################################################
  # 2) apilog-api (FastAPI)
  ############################################################
  apilog-api:
    container_name: apilog-api
    build: ./back/app

    environment:
      INFLUX_URL: http://influxdb3-core:8181
      INFLUX_TOKEN: \${INFLUX_TOKEN}
      INFLUX_ORG: \${INFLUX_ORG}
      INFLUX_BUCKET: \${INFLUX_DATABASE}
      CORS_ALLOW_ORIGIN: \${CORS_ALLOW_ORIGIN}
      LLM_PROVIDER: \${LLM_PROVIDER}
      LLM_ENDPOINT: \${LLM_ENDPOINT}
      LLM_MODEL: \${LLM_MODEL}
      LLM_TEMPERATURE: \${LLM_TEMPERATURE}
      LLM_TIMEOUT_S: \${LLM_TIMEOUT_S}

    depends_on:
      - influxdb3-core
      - ollama

    expose:
      - "8000"
    # Uncomment below to expose the API on the host
    # ports:
    #   - "8000:8000"

    volumes:
      - snapshots:/snapshots

    restart: unless-stopped

  ############################################################
  # 3) apilog-nginx (frontend + reverse proxy)
  ############################################################
  apilog-nginx:
    container_name: apilog-nginx
    build:
      context: .
      dockerfile: infra/nginx/Dockerfile

    ports:
      - "10000:80"    # Change this if 10000 is already in use

    depends_on:
      - apilog-api

    restart: unless-stopped

  ############################################################
  # 4) Ollama (LLM server)
  ############################################################
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=1h
    ports:
      - "11434:11434"   # Comment out if the host shouldn't access Ollama directly
    volumes:
      - ollama-data:/root/.ollama
    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://localhost:11434/api/tags"]
      interval: 10s
      timeout: 5s
      retries: 20
    restart: unless-stopped
    # Uncomment if you can passthrough a GPU (requires NVIDIA tooling)
    # deploy:
    #   resources:
    #     reservations:
    #       devices:
    #         - capabilities: ["gpu"]

##############################################################
# Named Volumes
##############################################################
volumes:
  influx-data:
  influx-plugins:
  explorer-data:
  explorer-config:
  snapshots:
  ollama-data:
`,
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
    kr: {
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
      envVarsDescription: ".env 템플릿과 1:1로 대응되는 값입니다. docker-compose를 실행하기 전에 환경에 맞게 수정하세요.",
      envOptionalSummary: "선택 설정 보기",
      envOptionalDescription: "아래 섹션을 펼치면 CORS/LLM/AI 캐시 선택 구성을 확인할 수 있습니다.",
      optionalDetailItems: [
        {
          key: "CORS_ALLOW_ORIGIN",
          title: "CORS_ALLOW_ORIGIN",
          description: "apilog-api 호출을 허용할 출처 목록입니다. 쉼표로 구분해 주세요.",
        },
        {
          key: "LLM_PROVIDER",
          title: "LLM_PROVIDER",
          description: "LLM 제공자 식별자입니다. 교체하지 않으면 'ollama'를 사용하세요.",
        },
        {
          key: "LLM_ENDPOINT",
          title: "LLM_ENDPOINT",
          description: "apilog-api가 LLM과 통신할 내부 URL입니다.",
        },
        {
          key: "LLM_MODEL",
          title: "LLM_MODEL",
          description: "인사이트 생성을 위한 Ollama 모델 태그입니다.",
        },
        {
          key: "LLM_TEMPERATURE",
          title: "LLM_TEMPERATURE",
          description: "AI 응답의 무작위성을 제어합니다. 값이 낮을수록 일관성이 증가합니다.",
        },
        {
          key: "LLM_TIMEOUT_S",
          title: "LLM_TIMEOUT_S",
          description: "LLM 요청을 대기할 최대 시간(초)입니다.",
        },
        {
          key: "AI_INSIGHTS_CACHE_TTL",
          title: "AI_INSIGHTS_CACHE_TTL",
          description: "AI 인사이트 캐시 지속 시간을 초 단위로 설정합니다.",
        },
        {
          key: "AI_INSIGHTS_EXPLAIN_CACHE_TTL",
          title: "AI_INSIGHTS_EXPLAIN_CACHE_TTL",
          description: "AI 설명 캐시 TTL입니다. 0이면 캐시를 끕니다.",
        },
        {
          key: "AI_REPORT_FETCH_BASE",
          title: "AI_REPORT_FETCH_BASE",
          description: "AI 위젯에서 사용하는 내부 API 엔드포인트입니다.",
        },
      ],
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
      envSnippet: `# 이 파일을 .env로 바꾸고 환경에 맞게 변수를 수정하세요.

# InfluxDB 초기 부트스트랩 계정 (최초 실행 시에만 사용)
INFLUX_USERNAME=username            # 생성할 관리자 계정 사용자 이름
INFLUX_PASSWORD=password            # 관리자 계정 비밀번호 (복잡하게 설정)
INFLUX_ORG=your_organization        # 호환 API에서 사용하는 조직 이름
INFLUX_DATABASE=your-database-name  # 분석 데이터가 저장될 데이터베이스/버킷 이름
INFLUX_TOKEN=복잡한-무작위-문자열   # apilog-api와 공유할 루트 토큰

# apilog-api에서 허용할 CORS 도메인 (* 또는 콤마로 구분)
CORS_ALLOW_ORIGIN=*

# apilog-api가 InfluxDB에 접속할 내부 URL
INFLUX_URL=http://influxdb3-core:8181

# LLM (Ollama) 설정 - 인사이트 기능에 사용
LLM_PROVIDER=ollama                 # 다른 제공자를 쓰지 않는 한 그대로 유지
LLM_ENDPOINT=http://ollama:11434    # Docker 서비스 이름으로 접근
LLM_MODEL=llama3:8b                 # Ollama에 설치한 모델 태그
LLM_TEMPERATURE=0.2                 # 낮을수록 더 일관된 응답
LLM_TIMEOUT_S=60                    # 요청 타임아웃(초)
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0     # 인사이트 캐시 TTL(초). 0이면 비활성화
`,
      dockerDescription: "Docker Compose로 Apilog를 실행합니다. 데이터베이스와 애플리케이션이 자동으로 준비됩니다.",
      dockerCheckServices: "서비스가 실행 중인지 확인:",
      dockerViewLogs: "로그 보기:",
      dockerNote:
        "기본적으로 Apilog는 http://localhost:10000에서 제공됩니다. 외부에서 접속해야 한다면 10000포트를 자신의 IP에만 허용하세요.",
      addScriptDescription: "웹사이트의 HTML에서 </head> 직전에 Apilog 추적 스크립트를 추가하세요:",
      composeReferenceSummary: "docker-compose 참고 보기",
      composeReferenceDescription: "각 서비스가 어떻게 연결되어 있는지 확인할 수 있습니다. GPU가 있으면 gpus: all 블록의 주석을 해제하세요.",
      envOptionalNote: "아래 섹션을 펼치면 CORS/LLM/AI 캐시 선택 설정을 확인할 수 있습니다.",
      replaceApiKeyNotice: "당신의 퍼블릭 IP 혹은 도메인 이름으로 '<Public IP or Domain>'를 교체하세요.",
      installSuccessTitle: "성공!",
      installSuccessDescription: "이제 분석 데이터가 수집되고 있습니다. Apilog 대시보드에서 실시간 데이터를 확인하세요.",
      helpTitle: "더 도움이 필요하신가요?",
      helpDescription: "GitHub Discussions 커뮤니티에 참여하거나 버그 제보를 위해 이슈를 등록하세요.",
    },
  }
  const envSnippets = {
    en: `# Rename this file to .env and customize the values for your deployment.

############################################################
# Required Settings
############################################################

# InfluxDB authentication token used by both ingestion and query APIs.
INFLUX_TOKEN=<your-influxdb-token>

# InfluxDB database name where APILog writes/reads analytics events.
INFLUX_DATABASE=<your-database-name>

# Public base URL of the site you want to snapshot/analyze.
TARGET_SITE_BASE_URL=<https://your-site.com>

############################################################
# Optional Settings — edit only when needed
############################################################

# InfluxDB endpoint (override only when not using docker-compose defaults)
INFLUX_URL=http://influxdb3-core:8181

# CORS allow list (comma separated or * for all origins)
CORS_ALLOW_ORIGIN=*

# LLM (Ollama) Settings
LLM_PROVIDER=ollama
LLM_ENDPOINT=http://ollama:11434
LLM_MODEL=llama3:8b
LLM_TEMPERATURE=0.2
LLM_TIMEOUT_S=60

# AI caching / internal API endpoints
AI_INSIGHTS_CACHE_TTL=60
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0
AI_REPORT_FETCH_BASE=http://apilog-api:8000
`,
    kr: `# 이 파일을 .env로 이름을 바꾸고, 환경에 맞게 값을 수정하세요.

############################################################
# 필수 설정
############################################################

# 수집·조회 API 모두에서 사용하는 InfluxDB 인증 토큰입니다.
INFLUX_TOKEN=<your-influxdb-token>

# Apilog이 데이터를 기록·조회할 데이터베이스 이름입니다.
INFLUX_DATABASE=<your-database-name>

# 스냅샷·분석 대상으로 삼을 사이트의 기본 URL입니다.
TARGET_SITE_BASE_URL=<https://your-site.com>

############################################################
# 선택 설정 (필요한 경우에만 수정)
############################################################

# 기본 docker-compose 구성에서 벗어난다면 커스텀 InfluxDB 엔드포인트를 지정하세요.
INFLUX_URL=http://influxdb3-core:8181

# apilog-api 호출을 허용할 출처 (콤마 구분 또는 * )
CORS_ALLOW_ORIGIN=*

# LLM (Ollama) 설정
LLM_PROVIDER=ollama
# apilog-api가 Ollama 컨테이너에 연결할 수 있도록 Docker 서비스 이름을 사용하세요.
LLM_ENDPOINT=http://ollama:11434
# Ollama에서 설치한 모델 태그를 정확히 적으세요.
LLM_MODEL=llama3:8b
LLM_TEMPERATURE=0.2
LLM_TIMEOUT_S=60

# AI 캐싱 / 내부 API 엔드포인트
AI_INSIGHTS_CACHE_TTL=60
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0
AI_REPORT_FETCH_BASE=http://apilog-api:8000
`,
  }
  const envSnippet = envSnippets[language as "en" | "kr"] ?? envSnippets.en
  const optionalEnvSnippets = {
    en: `# Optional settings (CORS, LLM, AI cache) — configure only if needed.
CORS_ALLOW_ORIGIN=*
LLM_PROVIDER=ollama
LLM_ENDPOINT=http://ollama:11434
LLM_MODEL=llama3:8b
LLM_TEMPERATURE=0.2
LLM_TIMEOUT_S=60
AI_INSIGHTS_CACHE_TTL=60
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0
AI_REPORT_FETCH_BASE=http://apilog-api:8000
`,
    kr: `# 선택 설정 (필요한 경우)
CORS_ALLOW_ORIGIN=*
LLM_PROVIDER=ollama
LLM_ENDPOINT=http://ollama:11434
LLM_MODEL=llama3:8b
LLM_TEMPERATURE=0.2
LLM_TIMEOUT_S=60
AI_INSIGHTS_CACHE_TTL=60
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0
AI_REPORT_FETCH_BASE=http://apilog-api:8000
`,
  }
  const optionalEnvSnippet = optionalEnvSnippets[language as "en" | "kr"] ?? optionalEnvSnippets.en
  const dockerComposeReferences = {
    en: `# Docker Compose for APILog Production Environment
# APILog 운영 배포용 Docker Compose 구성 (Prod)
############################################################

services:
  ############################################################
  # 1) InfluxDB 3 Core
  #    Time-series DB (HTTP API on port 8181, local-only access)
  #    시간 기반 데이터 저장소 (8181 포트, 내부 전용)
  ############################################################
  influxdb3-core:
    image: influxdb:3-core
    container_name: influxdb3-core

    environment:
      # Storage type: local filesystem
      # 스토리지 타입: 로컬 파일 시스템
      INFLUXDB3_OBJECT_STORE: file

      # Data directory (persisted to volume)
      # 데이터 디렉터리 (볼륨에 영속 저장)
      INFLUXDB3_DB_DIR: /var/lib/influxdb3

      # Node ID (required argument)
      # 노드 ID (필수 인자)
      INFLUXDB3_NODE_ID: influx-node0

      # Disable auth for self-contained deployments
      # 단일 배포 구성에서는 인증 비활성화
      INFLUXDB3_START_WITHOUT_AUTH: "true"

    command:
      # Entry command with explicit parameters / 필수 인자 명시
      - influxdb3
      - serve
      - --log-filter
      - info
      - --object-store
      - file
      - --plugin-dir
      - /plugins
      - --node-id
      - influx-node0

    # Expose port 8181 only inside the compose network (no host binding)
    # compose 네트워크 내부에서만 8181 포트를 노출 (호스트 포트 사용 안 함)
    expose:
      - "8181"

    volumes:
      # Database / catalog / parquet storage
      # DB / 카탈로그 / Parquet 데이터 저장
      - influx-data:/var/lib/influxdb3
      # Home metadata for influxdb3 user
      # influxdb3 사용자 홈 메타데이터
      - influx-meta:/home/influxdb3/.influxdb3
      # Plugins directory (rollups, custom scripts)
      # 플러그인/커스텀 스크립트 디렉터리
      - influx-plugins:/plugins

    restart: unless-stopped


  ############################################################
  # 2) apilog-api (FastAPI backend)
  #    Event ingestion & query API
  #    이벤트 수집/조회 API
  ############################################################
  apilog-api:
    container_name: apilog-api
    build: ./back/app

    environment:
      # Backend <-> InfluxDB connection info
      # API와 InfluxDB 연결 정보
      INFLUX_URL: \${INFLUX_URL}
      INFLUX_TOKEN: \${INFLUX_TOKEN}
      INFLUX_DATABASE: \${INFLUX_DATABASE}

      # Web API behavior (CORS & LLM)
      # 웹 API 동작 (CORS, LLM)
      CORS_ALLOW_ORIGIN: \${CORS_ALLOW_ORIGIN}
      LLM_PROVIDER: \${LLM_PROVIDER}
      LLM_ENDPOINT: \${LLM_ENDPOINT}
      LLM_MODEL: \${LLM_MODEL}

      # AI widgets' knobs (cache/internal API/snapshot target)
      # AI 위젯 설정 (캐시/내부 API/스냅샷 대상)
      AI_INSIGHTS_CACHE_TTL: \${AI_INSIGHTS_CACHE_TTL}
      AI_INSIGHTS_EXPLAIN_CACHE_TTL: \${AI_INSIGHTS_EXPLAIN_CACHE_TTL}
      AI_REPORT_FETCH_BASE: \${AI_REPORT_FETCH_BASE}
      TARGET_SITE_BASE_URL: \${TARGET_SITE_BASE_URL}

    depends_on:
      - influxdb3-core
      - ollama

    # Expose backend port internally (reverse proxy consumes it)
    # 내부에서만 8000 포트를 노출 (Nginx가 프록시)
    expose:
      - "8000"

    volumes:
      # Persisted snapshot images mounted at /api/snapshots
      # 히트맵 스냅샷 저장용 볼륨
      - snapshots:/snapshots

    restart: unless-stopped


  ############################################################
  # 3) apilog-nginx (Frontend + Reverse Proxy)
  #    Serves static dashboard + proxies API
  #    프런트 대시보드 및 API 리버스 프록시
  ############################################################
  apilog-nginx:
    container_name: apilog-nginx
    build:
      context: .
      dockerfile: infra/nginx/Dockerfile

    # Map host 10000 -> container 80 (adjust if port conflict occurs)
    # 호스트 10000 포트를 컨테이너 80에 매핑 (충돌 시 수정)
    ports:
      - "10000:80"

    depends_on:
      - apilog-api

    restart: unless-stopped


  ############################################################
  # 4) ollama (Local LLM Server)
  #    Provides local LLM endpoint for AI widgets
  #    AI 위젯에 필요한 로컬 LLM 서버
  ############################################################
  ollama:
    image: ollama/ollama:latest
    container_name: ollama

    environment:
      # Network binding for the Ollama service
      # LLM 서비스 바인딩
      OLLAMA_HOST: 0.0.0.0
      OLLAMA_KEEP_ALIVE: 1h
      # If not provided via .env it falls back to llama3:8b
      # .env에 없으면 기본값(laama3:8b) 사용
      LLM_MODEL: \${LLM_MODEL:-llama3:8b}

    # Only expose internally; FastAPI calls it via service name.
    # 내부에서만 노출, FastAPI가 서비스 이름으로 접근
    expose:
      - "11434"

    volumes:
      # Cache downloaded models
      # 다운로드 모델 캐시
      - ollama-data:/root/.ollama

    entrypoint:
      - /bin/sh
      - -c
      - |
        echo "Bootstrapping Ollama model: $LLM_MODEL"
        ollama serve &
        PID=$!
        sleep 10
        if [ -n "$LLM_MODEL" ]; then
          ollama pull "$LLM_MODEL" || echo "Warning: failed to pull $LLM_MODEL"
        fi
        wait $PID

    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://localhost:11434/api/tags"]
      interval: 10s
      timeout: 5s
      retries: 20

    restart: unless-stopped

    # gpus: all


##############################################################
# Named Volumes (Persistent storage)
# 영속 데이터를 위한 볼륨 정의
##############################################################
volumes:
  influx-data:
  influx-meta:
  influx-plugins:
  snapshots:
  ollama-data:
`,
    kr: `# Docker Compose for APILog Production Environment
# APILog 운영 배포용 Docker Compose 구성 (Prod)
############################################################

services:
  ############################################################
  # 1) InfluxDB 3 Core
  #    Time-series DB (HTTP API on port 8181, local-only access)
  #    시간 기반 데이터 저장소 (8181 포트, 내부 전용)
  ############################################################
  influxdb3-core:
    image: influxdb:3-core
    container_name: influxdb3-core

    environment:
      # Storage type: local filesystem
      # 스토리지 타입: 로컬 파일 시스템
      INFLUXDB3_OBJECT_STORE: file

      # Data directory (persisted to volume)
      # 데이터 디렉터리 (볼륨에 영속 저장)
      INFLUXDB3_DB_DIR: /var/lib/influxdb3

      # Node ID (required argument)
      # 노드 ID (필수 인자)
      INFLUXDB3_NODE_ID: influx-node0

      # Disable auth for self-contained deployments
      # 단일 배포 구성에서는 인증 비활성화
      INFLUXDB3_START_WITHOUT_AUTH: "true"

    command:
      # Entry command with explicit parameters / 필수 인자 명시
      - influxdb3
      - serve
      - --log-filter
      - info
      - --object-store
      - file
      - --plugin-dir
      - /plugins
      - --node-id
      - influx-node0

    # Expose port 8181 only inside the compose network (no host binding)
    # compose 네트워크 내부에서만 8181 포트를 노출 (호스트 포트 사용 안 함)
    expose:
      - "8181"

    volumes:
      # Database / catalog / parquet storage
      # DB / 카탈로그 / Parquet 데이터 저장
      - influx-data:/var/lib/influxdb3
      # Home metadata for influxdb3 user
      # influxdb3 사용자 홈 메타데이터
      - influx-meta:/home/influxdb3/.influxdb3
      # Plugins directory (rollups, custom scripts)
      # 플러그인/커스텀 스크립트 디렉터리
      - influx-plugins:/plugins

    restart: unless-stopped


  ############################################################
  # 2) apilog-api (FastAPI backend)
  #    Event ingestion & query API
  #    이벤트 수집/조회 API
  ############################################################
  apilog-api:
    container_name: apilog-api
    build: ./back/app

    environment:
      # Backend <-> InfluxDB connection info
      # API와 InfluxDB 연결 정보
      INFLUX_URL: \${INFLUX_URL}
      INFLUX_TOKEN: \${INFLUX_TOKEN}
      INFLUX_DATABASE: \${INFLUX_DATABASE}

      # Web API behavior (CORS & LLM)
      # 웹 API 동작 (CORS, LLM)
      CORS_ALLOW_ORIGIN: \${CORS_ALLOW_ORIGIN}
      LLM_PROVIDER: \${LLM_PROVIDER}
      LLM_ENDPOINT: \${LLM_ENDPOINT}
      LLM_MODEL: \${LLM_MODEL}

      # AI widgets' knobs (cache/internal API/snapshot target)
      # AI 위젯 설정 (캐시/내부 API/스냅샷 대상)
      AI_INSIGHTS_CACHE_TTL: \${AI_INSIGHTS_CACHE_TTL}
      AI_INSIGHTS_EXPLAIN_CACHE_TTL: \${AI_INSIGHTS_EXPLAIN_CACHE_TTL}
      AI_REPORT_FETCH_BASE: \${AI_REPORT_FETCH_BASE}
      TARGET_SITE_BASE_URL: \${TARGET_SITE_BASE_URL}

    depends_on:
      - influxdb3-core
      - ollama

    # Expose backend port internally (reverse proxy consumes it)
    # 내부에서만 8000 포트를 노출 (Nginx가 프록시)
    expose:
      - "8000"

    volumes:
      # Persisted snapshot images mounted at /api/snapshots
      # 히트맵 스냅샷 저장용 볼륨
      - snapshots:/snapshots

    restart: unless-stopped


  ############################################################
  # 3) apilog-nginx (Frontend + Reverse Proxy)
  #    Serves static dashboard + proxies API
  #    프런트 대시보드 및 API 리버스 프록시
  ############################################################
  apilog-nginx:
    container_name: apilog-nginx
    build:
      context: .
      dockerfile: infra/nginx/Dockerfile

    # Map host 10000 -> container 80 (adjust if port conflict occurs)
    # 호스트 10000 포트를 컨테이너 80에 매핑 (충돌 시 수정)
    ports:
      - "10000:80"

    depends_on:
      - apilog-api

    restart: unless-stopped


  ############################################################
  # 4) ollama (Local LLM Server)
  #    Provides local LLM endpoint for AI widgets
  #    AI 위젯에 필요한 로컬 LLM 서버
  ############################################################
  ollama:
    image: ollama/ollama:latest
    container_name: ollama

    environment:
      # Network binding for the Ollama service
      # LLM 서비스 바인딩
      OLLAMA_HOST: 0.0.0.0
      OLLAMA_KEEP_ALIVE: 1h
      # If not provided via .env it falls back to llama3:8b
      # .env에 없으면 기본값(laama3:8b) 사용
      LLM_MODEL: \${LLM_MODEL:-llama3:8b}

    # Only expose internally; FastAPI calls it via service name.
    # 내부에서만 노출, FastAPI가 서비스 이름으로 접근
    expose:
      - "11434"

    volumes:
      # Cache downloaded models
      # 다운로드 모델 캐시
      - ollama-data:/root/.ollama

    entrypoint:
      - /bin/sh
      - -c
      - |
        echo "Bootstrapping Ollama model: $LLM_MODEL"
        ollama serve &
        PID=$!
        sleep 10
        if [ -n "$LLM_MODEL" ]; then
          ollama pull "$LLM_MODEL" || echo "Warning: failed to pull $LLM_MODEL"
        fi
        wait $PID

    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://localhost:11434/api/tags"]
      interval: 10s
      timeout: 5s
      retries: 20

    restart: unless-stopped

    # gpus: all


##############################################################
# Named Volumes (Persistent storage)
# 영속 데이터를 위한 볼륨 정의
##############################################################
volumes:
  influx-data:
  influx-meta:
  influx-plugins:
  snapshots:
  ollama-data:
`,
  }
  const dockerComposeReference = dockerComposeReferences[language as "en" | "kr"] ?? dockerComposeReferences.en
  const configVariables: Record<"en" | "kr", Array<{ key: string; description: string; example?: string }>> = {
    en: [
      {
        key: "INFLUX_TOKEN",
        description: "Root API token shared with apilog-api. Generate a long random string and keep it secret.",
        example: "bd0d653a6a2c4a468e6f68958c4f1c9a",
      },
      { key: "INFLUX_DATABASE", description: "Bucket/database that stores every analytics event.", example: "analytics" },
      { key: "TARGET_SITE_BASE_URL", description: "Public base URL of the site you want to snapshot/analyze.", example: "https://example.com" },
    ],
    kr: [
      {
        key: "INFLUX_TOKEN",
        description: "apilog-api와 공유하는 루트 API 토큰입니다. 충분히 긴 무작위 문자열로 생성하세요.",
        example: "bd0d653a6a2c4a468e6f68958c4f1c9a",
      },
      { key: "INFLUX_DATABASE", description: "분석 이벤트가 저장되는 버킷(데이터베이스) 이름입니다.", example: "analytics" },
      { key: "TARGET_SITE_BASE_URL", description: "스냅샷·분석 대상으로 삼을 사이트의 기본 URL입니다.", example: "https://example.com" },
    ],
  }
  const selectedConfigVars = configVariables[language as "en" | "kr"] ?? configVariables.en

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
            <div id="quick-start-step-1" className="flex gap-4 scroll-mt-24">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">{t.step1}</h4>
                <CodeBlock
                  code={`git clone https://github.com/APIL0g/APILog.git
cd APILog`}
                  language="bash"
                />
              </div>
            </div>

            <div id="quick-start-step-2" className="flex gap-4 scroll-mt-24">
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
                <CodeBlock code={envSnippet} language="bash" />
              </div>
            </div>

            <div id="quick-start-step-3" className="flex gap-4 scroll-mt-24">
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
                <details className="mt-4 rounded-md border border-border/60 bg-muted/30 p-4">
                  <summary className="cursor-pointer font-semibold">
                    {t.composeReferenceSummary}
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3">
                    {t.composeReferenceDescription}
                  </p>
                  <CodeBlock code={dockerComposeReference} language="yaml" />
                </details>
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{t.note}</AlertTitle>
                  <AlertDescription>
                    {t.dockerNote}
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div id="quick-start-step-4" className="flex gap-4 scroll-mt-24">
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
  src="http://<Public IP or Domain>:10000/apilog/embed.js"
  data-site-id="main"
  data-ingest-url="http://<Public IP or Domain>:10000/api/ingest/events"
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

          <div id="configuration-env-vars" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">{t.envVars}</h3>
            <p className="text-sm text-muted-foreground mb-4">{t.envVarsDescription}</p>
          </div>

          <div className="space-y-6">
            {selectedConfigVars.map((variable) => (
              <div key={variable.key} className="border-l-4 border-accent pl-4">
                <code className="font-mono text-sm font-semibold">{variable.key}</code>
                <p className="text-sm text-muted-foreground mt-1">{variable.description}</p>
                {variable.example ? <CodeBlock code={variable.example} language="bash" /> : null}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">{t.envOptionalNote}</p>
          <details className="group mt-4 rounded-2xl border border-border bg-muted/40 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-muted-foreground">
              {t.envOptionalSummary}
            </summary>
            <p className="text-xs text-muted-foreground mt-2">{t.envOptionalDescription}</p>
            {t.optionalDetailItems ? (
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.optionalDetailItems.map((item) => (
                  <li key={item.key}>
                    <span className="font-semibold">{item.title}</span>: {item.description}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-3">
              <CodeBlock code={optionalEnvSnippet} language="bash" />
            </div>
          </details>

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
