#!/bin/bash
# promptoptimizer100 — Install into a Claude Code project
# Usage: bash bin/install.sh [target-dir]
# If no target-dir given, installs in current directory.

set -e

TARGET="${1:-$(pwd)}"
CLAUDE_DIR="$TARGET/.claude"
SKILL_DIR="$CLAUDE_DIR/skills"
STYLES_DIR="$CLAUDE_DIR/promptoptimizer100"

if [ ! -d "$TARGET/.claude" ]; then
  echo "Creating $CLAUDE_DIR..."
  mkdir -p "$SKILL_DIR"
fi

# Symlink or copy based on what's available
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Installing promptoptimizer100 into $TARGET..."

# Install skill directory
mkdir -p "$SKILL_DIR/promptoptimizer100"
cp "$SCRIPT_DIR/.claude/skills/promptoptimizer100/SKILL.md" "$SKILL_DIR/promptoptimizer100/SKILL.md"
echo "  ✓ Skill: .claude/skills/promptoptimizer100/SKILL.md"

# Install styles directory
mkdir -p "$STYLES_DIR"
cp -r "$SCRIPT_DIR/.claude/promptoptimizer100/index.json" "$STYLES_DIR/index.json" 2>/dev/null || true
cp -r "$SCRIPT_DIR/.claude/promptoptimizer100/additions.json" "$STYLES_DIR/additions.json" 2>/dev/null || true

if [ -d "$SCRIPT_DIR/.claude/promptoptimizer100/styles" ]; then
  mkdir -p "$STYLES_DIR/styles"
  cp -r "$SCRIPT_DIR/.claude/promptoptimizer100/styles/"* "$STYLES_DIR/styles/"
  echo "  ✓ Styles: $(find "$STYLES_DIR/styles" -name '*.md' | wc -l | tr -d ' ') style files"
fi

echo ""
echo "Done! Use /promptoptimizer100 in your project to start optimizing prompts."
echo ""
echo "Quick start:"
echo "  /promptoptimizer100 write a CRUD API in FastAPI"
echo "  /promptoptimizer100 review this PR for security issues"
echo "  /promptoptimizer100 explain this Go concurrency pattern"
