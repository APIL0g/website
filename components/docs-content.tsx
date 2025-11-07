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
      envSnippet: `# Rename this file to .env and customize the values for your deployment.

# InfluxDB bootstrap credentials (used on first launch only)
INFLUX_USERNAME=username            # Admin username created during setup
INFLUX_PASSWORD=password            # Strong admin password
INFLUX_ORG=your_organization        # Logical org name for compatibility APIs
INFLUX_DATABASE=your-database-name  # Bucket/database that stores analytics events
INFLUX_TOKEN=replace-with-random-string   # Root token shared with apilog-api

# CORS settings for apilog-api (comma-separated list or *)
CORS_ALLOW_ORIGIN=*

# Internal URL that apilog-api uses to reach InfluxDB
INFLUX_URL=http://influxdb3-core:8181

# LLM (Ollama) configuration for insights feature
LLM_PROVIDER=ollama                 # Keep 'ollama' unless you swap providers
LLM_ENDPOINT=http://ollama:11434    # Docker service name so apilog-api can reach Ollama
LLM_MODEL=llama3:8b                 # Model tag exactly as downloaded in Ollama
LLM_TEMPERATURE=0.2                 # Lower = more deterministic replies
LLM_TIMEOUT_S=60                    # Seconds before timing out LLM requests
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0     # Cache TTL in seconds (0 disables caching)
`,
      dockerDescription:
        "Start Apilog using Docker Compose. This will set up the database and application automatically.",
      dockerCheckServices: "Check if services are running:",
      dockerViewLogs: "View logs:",
      dockerNote:
        "Apilog will be available at http://localhost:8080 by default. Access the dashboard to get your API key.",
      composeReferenceSummary: "Need the docker-compose reference?",
      composeReferenceDescription:
        "Expand to review how each service is wired. Comment out the Ollama port mapping if you do not need external access, and un-comment the GPU block when you want to pass through a GPU.",
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
      - "8080:80"    # Change this if 8080 is already in use

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
      dockerNote: "기본적으로 Apilog는 http://localhost:8080에서 제공됩니다. 대시보드에 접속해 API 키를 받아가세요.",
      addScriptDescription: "웹사이트의 HTML에서 </head> 직전에 Apilog 추적 스크립트를 추가하세요:",
      composeReferenceSummary: "docker-compose 참고 보기",
      composeReferenceDescription: "각 서비스가 어떻게 연결되어 있는지 확인할 수 있습니다. Ollama 포트(11434)를 외부에 노출할 필요가 없다면 ports 항목을 주석 처리하고, GPU가 있으면 deploy.resources 블록의 주석을 해제하세요.",
      replaceApiKeyNotice: "당신의 퍼블릭 IP 혹은 도메인 이름으로 '<Public IP or Domain>'를 교체하세요.",
      installSuccessTitle: "성공!",
      installSuccessDescription: "이제 분석 데이터가 수집되고 있습니다. Apilog 대시보드에서 실시간 데이터를 확인하세요.",
      helpTitle: "더 도움이 필요하신가요?",
      helpDescription: "GitHub Discussions 커뮤니티에 참여하거나 버그 제보를 위해 이슈를 등록하세요.",
    },
  }
  const envSnippets = {
    en: `# Rename this file to .env and edit each variable for your deployment.

# InfluxDB bootstrap credentials (used only on first launch)
INFLUX_USERNAME=username            # Admin username created during init
INFLUX_PASSWORD=password            # Strong password for the admin user
INFLUX_ORG=your_organization        # Logical org name for compatibility APIs
INFLUX_DATABASE=your-database-name  # Bucket/database that stores analytics events
INFLUX_ADMIN_TOKEN=replace-with-random-string   # Root token shared with apilog-api

# CORS settings for apilog-api (comma separated list or *)
CORS_ALLOW_ORIGIN=*

# Internal URL that apilog-api uses to reach InfluxDB
INFLUX_URL=http://influxdb3-core:8181

# LLM (Ollama) configuration for insights feature
LLM_PROVIDER=ollama                 # Keep 'ollama' unless you swap providers
LLM_ENDPOINT=http://ollama:11434    # Docker service name so the API can reach Ollama
LLM_MODEL=llama3:8b                 # Model tag exactly as pulled in Ollama
LLM_TEMPERATURE=0.2                 # Lower = more deterministic replies
LLM_TIMEOUT_S=60                    # Seconds to wait before aborting a request
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0     # Cache TTL in seconds (0 disables caching)
`,
    kr: `# 이 파일을 .env로 이름을 바꾸고 환경에 맞게 각 변수를 수정하세요.

# InfluxDB 초기 부트스트랩 계정 (최초 실행 시에만 사용)
INFLUX_USERNAME=username            # 생성할 관리자 계정 사용자 이름
INFLUX_PASSWORD=password            # 관리자 계정 비밀번호 (충분히 복잡하게 설정)
INFLUX_ORG=your_organization        # 호환 API 용 논리적 조직 이름
INFLUX_DATABASE=your-database-name  # 분석 이벤트가 저장될 데이터베이스/버킷 이름
INFLUX_ADMIN_TOKEN=replace-with-random-string   # apilog-api와 공유할 루트 토큰

# apilog-api 에서 허용할 CORS 도메인 (쉼표 구분 또는 *)
CORS_ALLOW_ORIGIN=*

# apilog-api가 InfluxDB에 접속할 내부 URL
INFLUX_URL=http://influxdb3-core:8181

# LLM (Ollama) 설정 - 인사이트 기능에 사용
LLM_PROVIDER=ollama                 # 다른_PROVIDER를 쓰지 않는다면 그대로 유지
LLM_ENDPOINT=http://ollama:11434    # Docker 서비스 이름(ollama)으로 접근
LLM_MODEL=llama3:8b                 # Ollama에 설치한 모델 태그
LLM_TEMPERATURE=0.2                 # 낮을수록 답변이 일정해짐
LLM_TIMEOUT_S=60                    # 요청 타임아웃(초)
AI_INSIGHTS_EXPLAIN_CACHE_TTL=0     # 인사이트 캐시 TTL(초). 0이면 비활성화
`,
  }
  const envSnippet = envSnippets[language as "en" | "kr"] ?? envSnippets.en
  const dockerComposeReferences = {
    en: `version: "3.9"

services:
  influxdb3-core:
    image: quay.io/influxdb/influxdb3:latest
    container_name: influxdb3-core

    # Run as root so mounted folders stay writable (tighten for hardened deployments)
    user: "0:0"

    environment:
      # Bootstrap the database the first time the container runs
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
      - "8181:8181"   # Expose the Flight/gRPC API locally; restrict via firewall in production

    volumes:
      - influx-data:/var/lib/influxdb3/data
      - influx-plugins:/var/lib/influxdb3/plugins

    restart: unless-stopped

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
    # Uncomment if the API must be reachable directly from your host network
    # ports:
    #   - "8000:8000"

    volumes:
      - snapshots:/snapshots

    restart: unless-stopped

  apilog-nginx:
    container_name: apilog-nginx
    build:
      context: .
      dockerfile: infra/nginx/Dockerfile

    ports:
      - "8080:80"    # Change the host port if 8080 is already taken

    depends_on:
      - apilog-api

    restart: unless-stopped

  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=1h
    ports:
      - "11434:11434"   # Comment out if you only call Ollama from inside the compose network
    volumes:
      - ollama-data:/root/.ollama
    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://localhost:11434/api/tags"]
      interval: 10s
      timeout: 5s
      retries: 20
    restart: unless-stopped
    # Enable this when a GPU is available and nvidia-container-toolkit is configured
    # deploy:
    #   resources:
    #     reservations:
    #       devices:
    #         - capabilities: ["gpu"]

# Persistent named volumes
volumes:
  influx-data:
  influx-plugins:
  snapshots:
  ollama-data:`,
    kr: `version: "3.9"

services:
  influxdb3-core:
    image: quay.io/influxdb/influxdb3:latest
    container_name: influxdb3-core

    # 루트 권한으로 실행해 마운트 경로 쓰기 가능 (배포 환경에 맞춰 권한 조정)
    user: "0:0"

    environment:
      # 컨테이너 최초 실행 시 한 번만 데이터베이스를 초기화
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
      - "8181:8181"   # Flight/gRPC API를 로컬에만 노출하고 운영에서는 방화벽/보안그룹으로 제한

    volumes:
      - influx-data:/var/lib/influxdb3/data
      - influx-plugins:/var/lib/influxdb3/plugins

    restart: unless-stopped

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
    # 호스트 네트워크에서 직접 API를 호출해야 한다면 주석을 해제하세요
    # ports:
    #   - "8000:8000"

    volumes:
      - snapshots:/snapshots

    restart: unless-stopped

  apilog-nginx:
    container_name: apilog-nginx
    build:
      context: .
      dockerfile: infra/nginx/Dockerfile

    ports:
      - "8080:80"    # 8080을 이미 쓰고 있다면 원하는 호스트 포트로 변경

    depends_on:
      - apilog-api

    restart: unless-stopped

  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=1h
    ports:
      - "11434:11434"   # Compose 네트워크 내부에서만 호출하면 이 포트 매핑을 주석 처리
    volumes:
      - ollama-data:/root/.ollama
    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://localhost:11434/api/tags"]
      interval: 10s
      timeout: 5s
      retries: 20
    restart: unless-stopped
    # GPU와 nvidia-container-toolkit이 준비됐다면 아래 주석을 해제해 사용
    # deploy:
    #   resources:
    #     reservations:
    #       devices:
    #         - capabilities: ["gpu"]

# 지속적으로 보관할 데이터를 위한 볼륨 정의
volumes:
  influx-data:
  influx-plugins:
  snapshots:
  ollama-data:`,
  }
  const dockerComposeReference = dockerComposeReferences[language as "en" | "kr"] ?? dockerComposeReferences.en
  const configVariables: Record<
    "en" | "kr",
    Array<{
      key: string
      description: string
      example: string
    }>
  > = {
    en: [
      { key: "INFLUX_USERNAME", description: "Admin username created during the initial InfluxDB setup.", example: "apilog-admin" },
      { key: "INFLUX_PASSWORD", description: "Strong password for the Influx admin user. Rotate it regularly.", example: "ChangeMeSuperSecure!" },
      { key: "INFLUX_ORG", description: "Logical organization label required by the Influx API.", example: "apilog" },
      { key: "INFLUX_DATABASE", description: "Bucket/database that stores every analytics event.", example: "analytics" },
      {
        key: "INFLUX_TOKEN",
        description: "Root API token shared with apilog-api. Generate a long random string and keep it secret.",
        example: "bd0d653a6a2c4a468e6f68958c4f1c9a",
      },
      {
        key: "CORS_ALLOW_ORIGIN",
        description: "Comma-separated list of origins allowed to call apilog-api.",
        example: "https://apilog.yourcompany.com,https://app.yourcompany.com",
      },
      {
        key: "INFLUX_URL",
        description: "Internal URL apilog-api uses to reach InfluxDB. Keep the service name when using Docker.",
        example: "http://influxdb3-core:8181",
      },
      { key: "LLM_PROVIDER", description: "LLM provider identifier. Keep \"ollama\" unless you swap providers.", example: "ollama" },
      {
        key: "LLM_ENDPOINT",
        description: "Base URL for the LLM provider inside the docker-compose network.",
        example: "http://ollama:11434",
      },
      { key: "LLM_MODEL", description: "Exact Ollama model tag used for insights.", example: "llama3:8b" },
      { key: "LLM_TEMPERATURE", description: "Controls randomness of AI insights (lower = more deterministic).", example: "0.2" },
      { key: "LLM_TIMEOUT_S", description: "Seconds to wait before cancelling an LLM request.", example: "60" },
      {
        key: "AI_INSIGHTS_EXPLAIN_CACHE_TTL",
        description: "Cache duration for AI explanations in seconds. Set to 0 to disable caching.",
        example: "0",
      },
    ],
    kr: [
      { key: "INFLUX_USERNAME", description: "InfluxDB 최초 설정 시 생성되는 관리자 계정 이름입니다.", example: "apilog-admin" },
      { key: "INFLUX_PASSWORD", description: "관리자 계정에 사용할 강력한 비밀번호입니다. 주기적으로 변경하세요.", example: "ChangeMeSuperSecure!" },
      { key: "INFLUX_ORG", description: "Influx API에서 요구하는 논리적 조직 이름입니다.", example: "apilog" },
      { key: "INFLUX_DATABASE", description: "분석 이벤트가 저장되는 버킷(데이터베이스) 이름입니다.", example: "analytics" },
      {
        key: "INFLUX_TOKEN",
        description: "apilog-api와 공유하는 루트 API 토큰입니다. 충분히 긴 무작위 문자열로 생성하세요.",
        example: "bd0d653a6a2c4a468e6f68958c4f1c9a",
      },
      {
        key: "CORS_ALLOW_ORIGIN",
        description: "apilog-api 호출을 허용할 출처 목록입니다. 콤마로 구분하세요.",
        example: "https://apilog.yourcompany.com,https://app.yourcompany.com",
      },
      {
        key: "INFLUX_URL",
        description: "apilog-api가 InfluxDB에 접속할 내부 URL입니다. Docker를 쓰면 서비스 이름을 유지하세요.",
        example: "http://influxdb3-core:8181",
      },
      { key: "LLM_PROVIDER", description: "LLM 제공자 식별자입니다. 교체하지 않는 이상 \"ollama\"로 둡니다.", example: "ollama" },
      {
        key: "LLM_ENDPOINT",
        description: "docker-compose 네트워크 안에서 접근하는 LLM 엔드포인트입니다.",
        example: "http://ollama:11434",
      },
      { key: "LLM_MODEL", description: "인사이트 생성을 위해 사용할 Ollama 모델 태그입니다.", example: "llama3:8b" },
      { key: "LLM_TEMPERATURE", description: "AI 응답의 무작위성을 제어합니다. 값이 낮을수록 일관성이 높습니다.", example: "0.2" },
      { key: "LLM_TIMEOUT_S", description: "LLM 요청을 대기할 최대 시간(초)입니다.", example: "60" },
      {
        key: "AI_INSIGHTS_EXPLAIN_CACHE_TTL",
        description: "AI 설명을 캐시할 시간(초)입니다. 0으로 두면 캐시를 비활성화합니다.",
        example: "0",
      },
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
                <CodeBlock code={envSnippet} language="bash" />
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
          <p className="text-sm text-muted-foreground mb-4">{t.envVarsDescription}</p>

          <div className="space-y-6">
            {selectedConfigVars.map((variable) => (
              <div key={variable.key} className="border-l-4 border-accent pl-4">
                <code className="font-mono text-sm font-semibold">{variable.key}</code>
                <p className="text-sm text-muted-foreground mt-1">{variable.description}</p>
                {variable.example ? <CodeBlock code={variable.example} language="bash" /> : null}
              </div>
            ))}
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
