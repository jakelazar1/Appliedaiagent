#!/usr/bin/env bash
# Deploy: mirror live-website/ (canonical source) to the repo root,
# which is what GitHub Pages serves. Run from repo root, then commit + push.
set -euo pipefail
cd "$(dirname "$0")"

SITE_FILES=(index.html work.html contact.html style.css main.js demo-engine.js CNAME)

for f in "${SITE_FILES[@]}"; do
  cp "live-website/$f" "$f"
done

mkdir -p assets
rsync -a --delete live-website/assets/ assets/

echo "Mirrored live-website/ -> repo root. Review with: git status"
