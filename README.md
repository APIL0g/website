# ApiLog Analytics Platform

> Privacy-first, self-hosted analytics with FastAPI, InfluxDB, and a React dashboard.

Prefer Korean? [README.ko.md](README.ko.md)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs) ![FastAPI](https://img.shields.io/badge/FastAPI-uptime-green?logo=fastapi) ![Docker](https://img.shields.io/badge/Docker-ready-0db7ed?logo=docker) ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

<p align="center">
  <img src="./public/media/apilog-dashboard.gif" alt="ApiLog dashboard walkthrough" width="820">
</p>

ApiLog ingests browser events through a FastAPI pipeline, stores them in InfluxDB, and visualizes traffic in a lightweight React + Vite dashboard. A Rollup-powered collector SDK ships a tiny loader you can drop into any site.

## Table of Contents

1. [Overview](#overview)
2. [Feature Highlights](#feature-highlights)
3. [Architecture](#architecture)
4. [Getting Started](#getting-started)
5. [Development Workflow](#development-workflow)
6. [Configuration](#configuration)
7. [SDK & API](#sdk--api)
8. [Testing & Quality](#testing--quality)
9. [Deployment (Docker + Nginx)](#deployment-docker--nginx)
10. [Project Structure](#project-structure)
11. [Contributing](#contributing)
12. [License](#license)

## Overview

- Lightweight ingestion service powered by FastAPI with endpoints for `/api/ingest/events` and `/api/query/top-pages`.
- InfluxDB time-series backend keeps storage efficient and queries fast.
- Collector SDK bundles an embeddable snippet, ESM module, and IIFE runtime for zero-dependency installs.
- React + Vite dashboard ships charts, funnels, and session insights out of the box.
- Docker and Nginx recipes make it simple to deploy the entire stack on your own domain.

## Feature Highlights

- **Real-time analytics** - Live metrics for page views, user sessions, and custom events with low-latency ingestion.
- **Customisable dashboards** - Drag-and-drop widgets built on a modular portlet system.
- **Privacy-first controls** - Keep all traffic data on infrastructure you control (GDPR-friendly setup).
- **Event + conversion tracking** - Use the JS SDK to capture clicks, conversions, and identity traits.
- **Data portability** - Export aggregated metrics to CSV, JSON, or SQL for offline analysis.
- **Self-hosted edge** - Ship the dashboard, collector bundles, and API behind the same nginx edge.

## Architecture

```
Browser SDK --> FastAPI (back/apps/api) --> InfluxDB
        |                                      ^
        |                                      |
        +--> Dashboard (front/apps/dashboard) --|
                   served via nginx reverse proxy
```

- **Backend** - `back/apps/api` handles ingestion and reporting, exposes health checks, and streams metrics to InfluxDB.
- **Collector** - `front/apps/collector-js` compiles with Rollup, ships ESM + IIFE bundles, and exposes a drop-in loader.
- **Dashboard** - `front/apps/dashboard` is a Vite-based React app that queries the API for aggregated stats.
- **Edge** - `infra/nginx` distribution proxies `/api/*`, serves static dashboards, and hosts the collector CDN.

## Getting Started

1. **Clone & install**

   ```bash
   git clone https://github.com/APIL0g/APILog.git
   cd APILog
   npm install
   pip install -r back/apps/api/requirements.txt
   ```

2. **Compose the stack**

   ```bash
   docker compose up --build
   ```

3. **Validate services**
   - Dashboard: <http://localhost:8080>
   - API health: <http://localhost:8080/api/health>

4. **Inject the loader snippet** into your product and watch events appear in minutes.

## Development Workflow

- `front/apps/collector-js`
  - `npm run dev` - Rollup watch mode for the SDK.
  - `npm run build` - Emits distributable ESM/IIFE bundles.
- `front/apps/dashboard`
  - `npm run dev` - Hot reloads the Vite UI.
  - `npm run build` - Produces static assets consumed by nginx.
- `back/apps/api`
  - `uvicorn app.main:app --reload --port 8000` - Local FastAPI server with autoreload.

## Configuration

Update your `.env` (or environment variables) before launching Docker Compose.

| Variable | Description | Example |
| --- | --- | --- |
| `DATABASE_URL` | InfluxDB connection string | `influxdb://user:pass@influx:8086/apilog` |
| `PORT` | API service port (defaults to `3000`) | `3000` |
| `SECRET_KEY` | Session / signing secret | `super-secret-key` |
| `CORS_ORIGIN` | Allowed origins for dashboard + SDK | `https://apilog.kr` |

These map 1:1 with the `.env` template referenced in the docs component.

## SDK & API

**Tracking API**

```bash
POST /api/ingest/events
Content-Type: application/json

{
  "sessionId": "abc123",
  "event": "page_view",
  "path": "/pricing",
  "userAgent": "...",
  "metadata": { "plan": "pro" }
}
```

**JavaScript SDK**

```ts
import { createApilog } from "@apilog/collector"

const apilog = createApilog({
  endpoint: "https://apilog.kr/api/ingest/events",
  siteId: "apilog-demo",
})

apilog.track("cta_click", { placement: "hero" })
apilog.identify("user-42", { plan: "Business" })
```

## Testing & Quality

- **Backend** - add test suites under `back/apps/api/tests` and run `pytest`.
- **Collector / Dashboard** - lint and type-check with `npm run lint` (where configured) and adopt your preferred component test runner.
- **Infra** - run `docker compose up --build` to validate production images locally before deploying.

## Deployment (Docker + Nginx)

The repo includes production-ready manifests:

- `Dockerfile` - multi-stage Next.js build running `next start` on port `3000`.
- `docker/nginx.conf` - forwards `80/443` traffic to the app container, includes TLS boilerplate.
- `docker-compose.yml` - orchestrates the app, nginx reverse proxy, and Certbot renewal loop.
- `docker/nginx/ensure-certs.sh` - reloads nginx whenever certificates change, bootstraps self-signed certs.
- `docker/letsencrypt/` - persisted ACME data written by Certbot.
- `docker/certbot/www/` - shared webroot for HTTP-01 challenges.

```bash
docker compose build
docker compose up -d
```

### TLS Bootstrapping

1. Point `apilog.kr` and `www.apilog.kr` to your server.
2. Bring up the app + nginx (mounts the ACME webroot):

   ```bash
   docker compose up -d app nginx
   ```

3. Issue certificates:

   ```bash
   docker compose run --rm certbot certonly \
     --webroot -w /var/www/certbot \
     -d apilog.kr -d www.apilog.kr \
     -m you@example.com --agree-tos --no-eff-email
   ```

4. Reload nginx and start the renewal loop:

   ```bash
   docker compose exec nginx nginx -s reload
   docker compose up -d
   ```

Certbot checks every 12h and updated keys are hot-reloaded by `ensure-certs.sh`.

## Project Structure

```
back/
  apps/api/            # FastAPI ingestion + reporting service
front/
  apps/collector-js/   # Browser SDK (Rollup + TypeScript)
  apps/dashboard/      # React dashboard (Vite)
infra/
  nginx/               # Multi-stage nginx build & config
```

## Contributing

ApiLog welcomes pull requests! Please review the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md), open an issue for major changes, and ensure linters/tests are green before submitting.

## License

ApiLog is released under the [MIT License](LICENSE).
