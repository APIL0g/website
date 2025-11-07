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
- `docker/certs/` - place your TLS certificate (`fullchain.pem`) and private key (`privkey.pem`) here for HTTPS.

### Build & run

```bash
docker compose build
docker compose up -d
```

Nginx listens on ports `80` and `443`, automatically redirects HTTP to HTTPS, and proxies requests to the Next.js service. Update `server_name` in `docker/nginx.conf` with your real domain and drop your cert/key files into `docker/certs/` before running. Logs can be tailed via `docker compose logs -f nginx`.
