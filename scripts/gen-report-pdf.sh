#!/usr/bin/env bash
# Prints the /report page to public/downloads/state-of-trial-enrollment-2026.pdf
# using headless Chrome. Needs a production build: npm run build first.
#
#   bash scripts/gen-report-pdf.sh
set -euo pipefail
cd "$(dirname "$0")/.."

PORT="${PORT:-3131}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="public/downloads/state-of-trial-enrollment-2026.pdf"

npx next start -p "$PORT" > /tmp/bond-report-server.log 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT

for _ in $(seq 1 60); do
  curl -s -o /dev/null "http://localhost:$PORT/report" && break
  sleep 1
done

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 --print-to-pdf="$OUT" \
  "http://localhost:$PORT/report" 2>/dev/null

echo "wrote $OUT ($(du -h "$OUT" | cut -f1))"
