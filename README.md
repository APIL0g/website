# website

This is the Apilog marketing site built with Next.js.

## Local development

```bash
npm install
npm run dev
```

## Deploying with Docker & Nginx

The repository now includes everything needed to containerize the Next.js app and front it with Nginx.

- `Dockerfile` - multi-stage build that compiles the app and runs `next start` on port `3000`.
- `docker/nginx.conf` - reverse-proxy configuration that forwards traffic from port `80` to the app container.
- `docker-compose.yml` - spins up both the app and Nginx services on a shared network.

### Build & run

```bash
docker compose build
docker compose up -d
```

Nginx listens on `http://localhost` (port `80`) and proxies requests to the Next.js service. Logs can be tailed via `docker compose logs -f nginx`.
