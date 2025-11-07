# website

[한국어 문서 보기](README.ko.md)

This is the Apilog marketing site built with Next.js.

## Local development

```bash
npm install
npm run dev
```

## Deploying with Docker & Nginx

The repository now includes everything needed to containerize the Next.js app and front it with Nginx.

- `Dockerfile` - multi-stage build that compiles the app and runs `next start` on port `3000`.
- `docker/nginx.conf` - reverse-proxy configuration that forwards traffic from port `80` to the app container and terminates TLS.
- `docker-compose.yml` - spins up the app, Nginx reverse-proxy, and a Certbot sidecar that renews certificates.
- `docker/nginx/ensure-certs.sh` - helper executed inside the Nginx container to create a temporary self-signed cert (on first boot) and to reload Nginx whenever renewed certificates are detected.
- `docker/letsencrypt/` - persisted Let's Encrypt account data and certificates (ignored by git, populated by Certbot).
- `docker/certbot/www/` - the ACME webroot shared between Certbot and Nginx for HTTP-01 challenges.

### Build & run

```bash
docker compose build
docker compose up -d
```

Nginx listens on ports `80` and `443`, automatically redirects HTTP to HTTPS, and proxies requests to the Next.js service. Update `server_name` in `docker/nginx.conf` with your real domain before deploying. Logs can be tailed via `docker compose logs -f nginx`.

### TLS issuance & automatic renewals

1. Ensure `apilog.kr` / `www.apilog.kr` point to the host running this stack.
2. Bring up the app + Nginx (this also mounts the ACME webroot):  
   ```bash
   docker compose up -d app nginx
   ```
3. Issue the initial certificate via webroot challenge (replace the email address as needed):  
   ```bash
   docker compose run --rm certbot certonly \
     --webroot -w /var/www/certbot \
     -d apilog.kr -d www.apilog.kr \
     -m you@example.com --agree-tos --no-eff-email
   ```
4. Reload Nginx once so it picks up the freshly issued cert:  
   ```bash
   docker compose exec nginx nginx -s reload
   ```
5. Start (or restart) all services, including the long-running Certbot renew loop:  
   ```bash
   docker compose up -d
   ```

The `certbot` service checks for renewals every 12 hours and writes updated certificates into `docker/letsencrypt/`. The helper script mounted into the Nginx container automatically reloads Nginx whenever the certificate hash changes, so renewed certificates are served without downtime.
