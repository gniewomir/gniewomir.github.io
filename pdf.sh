#!/bin/bash

set -e

PORT=3000
FILE="static/gniewomir-swiechowski-cv-latest.pdf"

echo "[PDF] Starting dev server..."
node ./node_modules/http-server/bin/http-server ./dist -p $PORT 1>/dev/null &
SERVER_PID=$!

echo "[PDF] Waiting for server..."
sleep 10

if kill -0 $SERVER_PID 2>/dev/null; then
  echo "[PDF] Server is alive under PID $SERVER_PID"
  echo "[PDF] Printing page as PDF..."
  google-chrome --headless=new --no-pdf-header-footer --no-margins --run-all-compositor-stages-before-draw --timeout=10000 --virtual-time-budget=42000 --print-to-pdf="$FILE" http://localhost:$PORT 1>/dev/null
else
  echo "[PDF] Server is not present under PID $SERVER_PID"
fi

echo "[PDF] Cleaning up..."
kill -15 $SERVER_PID
echo "[PDF] Done."
