#!/bin/sh
set -e

CERT_DOMAIN="apilog.kr"
CERT_DIR="/etc/letsencrypt/live/${CERT_DOMAIN}"
mkdir -p "$CERT_DIR"

if [ ! -f "$CERT_DIR/fullchain.pem" ] || [ ! -f "$CERT_DIR/privkey.pem" ]; then
  echo "[nginx] No certificate found for ${CERT_DOMAIN}, generating a temporary self-signed cert."
  openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -subj "/CN=${CERT_DOMAIN}" \
    -keyout "$CERT_DIR/privkey.pem" \
    -out "$CERT_DIR/fullchain.pem" >/dev/null 2>&1
fi

watch_certificates() {
  PREV_SUM="$(sha256sum "$CERT_DIR/fullchain.pem" 2>/dev/null || echo '')"
  while true; do
    sleep 43200 &
    wait $!
    CURR_SUM="$(sha256sum "$CERT_DIR/fullchain.pem" 2>/dev/null || echo '')"
    if [ -n "$CURR_SUM" ] && [ "$CURR_SUM" != "$PREV_SUM" ]; then
      echo "[nginx] Certificate updated, reloading nginx..."
      nginx -s reload || true
      PREV_SUM="$CURR_SUM"
    fi
  done
}

watch_certificates &
