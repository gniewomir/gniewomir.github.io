#!/bin/bash

set -e

PORT=3000
FILE="static/gniewomir-swiechowski-cv-latest.pdf"

if [[ "$OSTYPE" == "darwin"* ]]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  CHROME="google-chrome"
fi

if ! command -v "$CHROME" &>/dev/null && [ ! -x "$CHROME" ]; then
  echo "[PDF] Chrome not found at: $CHROME"
  exit 1
fi

EXISTING_PID=$(lsof -ti tcp:$PORT 2>/dev/null || true)
if [ -n "$EXISTING_PID" ]; then
  echo "[PDF] Port $PORT is in use (PID $EXISTING_PID), killing..."
  kill -15 $EXISTING_PID 2>/dev/null || true
  sleep 1
fi

echo "[PDF] Starting server..."
node ./node_modules/http-server/bin/http-server ./dist -p $PORT 1>/dev/null &
SERVER_PID=$!

echo "[PDF] Waiting for server..."
sleep 10

if kill -0 $SERVER_PID 2>/dev/null; then
  echo "[PDF] Server is alive under PID $SERVER_PID"
  echo "[PDF] Printing page as PDF..."
  "$CHROME" --headless=new --no-pdf-header-footer --run-all-compositor-stages-before-draw --timeout=10000 --virtual-time-budget=42000 --print-to-pdf="$FILE" http://localhost:$PORT 1>/dev/null
else
  echo "[PDF] Server failed to start under PID $SERVER_PID"
  exit 1
fi

echo "[PDF] Cleaning up..."
kill -15 $SERVER_PID 2>/dev/null || true
echo "[PDF] Done."
