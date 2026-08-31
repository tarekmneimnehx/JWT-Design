#!/usr/bin/env bash
# Auto-commit and push whenever Claude finishes a turn (Stop hook).
# Safety net: if changes were left uncommitted, snapshot them; then push the
# current branch. Any manual commits made during the turn keep their own
# messages — this only sweeps up stragglers and guarantees the push.
set -uo pipefail

# Hooks run with $CLAUDE_PROJECT_DIR set to the repo root; fall back to cwd.
cd "${CLAUDE_PROJECT_DIR:-$PWD}" 2>/dev/null || exit 0

# Only act inside a git work tree.
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
[ -z "$branch" ] || [ "$branch" = "HEAD" ] && exit 0   # skip detached HEAD

# Commit only if something actually changed (tracked edits or new files).
if ! git diff --quiet || ! git diff --cached --quiet \
   || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  git add -A
  git commit -m "Auto-save: $(date '+%Y-%m-%d %H:%M')" >/dev/null 2>&1 || true
fi

# Push the current branch (retry a couple of times for transient network blips).
for attempt in 1 2 3; do
  if git push origin "$branch" >/dev/null 2>&1; then
    break
  fi
  sleep $((attempt * 2))
done

exit 0
