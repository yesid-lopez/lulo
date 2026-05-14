#!/usr/bin/env bash
#
# One-command local dev: Postgres + CMS + seeds + landing.
#
# Boots the Payload CMS against a local Postgres (via docker-compose),
# waits until it responds, seeds the case-studies collection, then
# launches the landing in the foreground pointed at the local CMS.
#
# Ctrl-C stops the foreground landing and also tears down the CMS
# dev server it spawned in the background. Postgres is left running
# (it's cheap and other tools may rely on it); stop it with:
#   (cd cms && docker-compose down)
#
# Usage:
#   ./scripts/dev-local.sh            # seed only missing entries
#   ./scripts/dev-local.sh --force    # overwrite existing seeded entries
#   ./scripts/dev-local.sh --no-seed  # skip seeding entirely

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CMS_DIR="$ROOT/cms"
LANDING_DIR="$ROOT"
CMS_PORT="${CMS_PORT:-3000}"
LANDING_PORT="${LANDING_PORT:-3001}"
CMS_URL="http://localhost:${CMS_PORT}"
CMS_LOG="$CMS_DIR/dev.log"

SEED_FORCE=""
SKIP_SEED=""
for arg in "$@"; do
  case "$arg" in
    --force) SEED_FORCE="--force" ;;
    --no-seed) SKIP_SEED="1" ;;
    -h|--help)
      sed -n '2,16p' "$0"
      exit 0
      ;;
    *) echo "[dev-local] unknown arg: $arg" >&2; exit 1 ;;
  esac
done

# Use `docker compose` (v2 subcommand) when available, fall back to legacy `docker-compose`.
if docker compose version >/dev/null 2>&1; then
  DC=(docker compose)
elif command -v docker-compose >/dev/null 2>&1; then
  DC=(docker-compose)
else
  echo "[dev-local] error: neither 'docker compose' nor 'docker-compose' is available" >&2
  exit 1
fi

CMS_PID=""
cleanup() {
  echo
  if [ -n "$CMS_PID" ] && kill -0 "$CMS_PID" 2>/dev/null; then
    echo "[dev-local] stopping CMS dev server (pid $CMS_PID)..."
    kill "$CMS_PID" 2>/dev/null || true
    wait "$CMS_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

log() { printf '[dev-local] %s\n' "$*"; }

# 1. Postgres
log "starting Postgres via ${DC[*]}..."
(cd "$CMS_DIR" && "${DC[@]}" up -d postgres)

log "waiting for Postgres to accept connections..."
pg_ready=""
for _ in $(seq 1 60); do
  if (cd "$CMS_DIR" && "${DC[@]}" exec -T postgres pg_isready -U postgres) >/dev/null 2>&1; then
    pg_ready="1"
    log "Postgres ready."
    break
  fi
  sleep 1
done
if [ -z "$pg_ready" ]; then
  echo "[dev-local] Postgres never became ready. Last 30 lines of container logs:" >&2
  (cd "$CMS_DIR" && "${DC[@]}" logs --tail 30 postgres) >&2 || true
  exit 1
fi

# 2. Run pending Payload migrations (push: false in payload.config.ts means no auto-sync).
log "running Payload migrations..."
(cd "$CMS_DIR" && pnpm payload migrate)

# 3. CMS dev server
log "starting CMS dev server on :$CMS_PORT (logs: $CMS_LOG)..."
( cd "$CMS_DIR" && exec pnpm dev ) > "$CMS_LOG" 2>&1 &
CMS_PID=$!

log "waiting for CMS to respond at $CMS_URL/api/case-studies..."
ready=""
for _ in $(seq 1 120); do
  if curl -fsS "${CMS_URL}/api/case-studies?limit=0" >/dev/null 2>&1; then
    ready="1"
    break
  fi
  if ! kill -0 "$CMS_PID" 2>/dev/null; then
    echo "[dev-local] CMS process exited unexpectedly. Last 40 log lines:" >&2
    tail -n 40 "$CMS_LOG" >&2 || true
    exit 1
  fi
  sleep 2
done
if [ -z "$ready" ]; then
  echo "[dev-local] timed out waiting for CMS to respond. Last 40 log lines:" >&2
  tail -n 40 "$CMS_LOG" >&2 || true
  exit 1
fi
log "CMS ready."

# 4. Seed (Local API — no admin user required)
if [ -z "$SKIP_SEED" ]; then
  log "seeding case studies${SEED_FORCE:+ (force)}..."
  if [ -n "$SEED_FORCE" ]; then
    (cd "$CMS_DIR" && pnpm seed --force)
  else
    (cd "$CMS_DIR" && pnpm seed)
  fi
else
  log "skipping seed (--no-seed)."
fi

# 5. Landing (foreground)
DEV_EMAIL="${CMS_DEV_EMAIL:-admin@admin.com}"
DEV_PASSWORD="${CMS_DEV_PASSWORD:-admin}"

log "starting landing on :$LANDING_PORT (CMS_URL=$CMS_URL)..."
log "  CMS admin:   $CMS_URL/admin"
log "  CMS login:   $DEV_EMAIL / $DEV_PASSWORD"
log "  Landing:     http://localhost:$LANDING_PORT/case-studies"
log "Ctrl-C to stop both the landing and the CMS dev server."

cd "$LANDING_DIR"
CMS_URL="$CMS_URL" PORT="$LANDING_PORT" exec pnpm dev
