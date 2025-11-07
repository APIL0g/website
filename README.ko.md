# website (한국어)

Apilog 서비스를 위한 Next.js 기반 마케팅 사이트입니다.

## 로컬 개발

```bash
npm install
npm run dev
```

## Docker & Nginx 배포

이 저장소에는 Next.js 앱을 컨테이너화하고 Nginx로 프록시하기 위한 모든 구성이 포함되어 있습니다.

- `Dockerfile` - 멀티 스테이지 빌드로 앱을 컴파일하고 `next start`를 통해 3000번 포트에서 서비스합니다.
- `docker/nginx.conf` - 앱 컨테이너 앞단에서 포트 80/443을 처리하고 TLS를 종료합니다.
- `docker-compose.yml` - 앱, Nginx 리버스 프록시, 증명서 자동 갱신용 Certbot 사이드카를 실행합니다.
- `docker/nginx/ensure-certs.sh` - 최초 부팅 시 임시 self-signed 인증서를 만들고, 갱신된 인증서를 감지하면 Nginx를 재로드합니다.
- `docker/letsencrypt/` - Let’s Encrypt 계정 데이터와 인증서가 저장되는 디렉터리(깃 무시).
- `docker/certbot/www/` - Certbot과 Nginx가 공유하는 ACME webroot.

### 빌드 & 실행

```bash
docker compose build
docker compose up -d
```

Nginx는 80/443 포트를 리슨하며, HTTP 요청을 HTTPS로 리다이렉트한 뒤 Next.js 서비스로 프록시합니다. 배포 전에 `docker/nginx.conf`의 `server_name`을 실제 도메인으로 바꿔주세요. 로그는 `docker compose logs -f nginx`로 확인합니다.

### TLS 발급 & 자동 갱신

1. `apilog.kr`, `www.apilog.kr` DNS A 레코드가 이 서버의 퍼블릭 IP를 가리키는지 확인합니다.
2. 앱과 Nginx를 먼저 띄워 ACME webroot를 준비합니다.
   ```bash
   docker compose up -d app nginx
   ```
3. 웹루트 챌린지 방식으로 최초 인증서를 발급합니다(이메일 주소는 실제로 사용하는 것으로 교체하세요).
   ```bash
   docker compose run --rm --entrypoint certbot certbot \
     certonly --webroot -w /var/www/certbot \
     -d apilog.kr -d www.apilog.kr \
     -m you@example.com --agree-tos --no-eff-email
   ```
4. 발급이 끝나면 Nginx를 재로드합니다.
   ```bash
   docker compose exec nginx nginx -s reload
   ```
5. Certbot 갱신 루프까지 포함해 다시 띄웁니다.
   ```bash
   docker compose up -d
   ```

`certbot` 서비스는 12시간마다 `certbot renew`를 실행해 `docker/letsencrypt/`에 저장된 인증서를 갱신합니다. `docker/nginx/ensure-certs.sh`가 인증서 해시 변화를 감지하면 자동으로 `nginx -s reload`를 호출하므로 다운타임 없이 새 인증서가 적용됩니다.
