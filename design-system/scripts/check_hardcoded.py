#!/usr/bin/env python3
"""Lint styles and components for values that bypass the token system.

Checks
  1. No hex / rgb() / hsl() colors in .css or .tsx.
  2. No px / rem / em literals in .css or .tsx (except 0-free calc with tokens).
  3. Every var(--ds-*) used in CSS exists in dist/tokens.css.
  4. CSS never reads primitive tokens (only semantic or component tokens).
  5. TSX never uses inline style={{ ... }}.

Run after scripts/build_tokens.py:  python3 scripts/check_hardcoded.py
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

COLOR = re.compile(r"#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(")
LENGTH = re.compile(r"(?<![\w-])\d*\.?\d+(px|rem|em)\b")
VAR = re.compile(r"var\((--ds-[a-z0-9-]+)\)")
INLINE_STYLE = re.compile(r"style=\{\{")


def flatten(node, prefix=()):
    for key, value in node.items():
        if key.startswith("$"):
            continue
        if isinstance(value, dict) and "$value" in value:
            yield prefix + (key,)
        elif isinstance(value, dict):
            yield from flatten(value, prefix + (key,))


def css_var(path):
    return "--ds-" + "-".join(path)


def main():
    defined = set(re.findall(r"(--ds-[a-z0-9-]+):", (ROOT / "dist/tokens.css").read_text()))
    primitives = {css_var(p) for p in flatten(json.loads((ROOT / "tokens/primitives.tokens.json").read_text()))}
    errors = []

    css_files = sorted((ROOT / "styles").glob("*.css"))
    tsx_files = sorted(ROOT.glob("components/**/*.tsx")) + sorted(ROOT.glob("templates/**/*.tsx")) + sorted(ROOT.glob("pages/**/*.tsx"))

    for file in css_files + tsx_files:
        rel = file.relative_to(ROOT)
        for number, line in enumerate(file.read_text().splitlines(), 1):
            code = line.split("//")[0] if file.suffix == ".tsx" else line
            if code.strip().startswith(("/*", "*")):
                continue
            if COLOR.search(code):
                errors.append(f"{rel}:{number} hardcoded color: {line.strip()}")
            if LENGTH.search(code):
                errors.append(f"{rel}:{number} hardcoded length: {line.strip()}")
            if file.suffix == ".tsx" and INLINE_STYLE.search(code):
                errors.append(f"{rel}:{number} inline style: {line.strip()}")
            if file.suffix == ".css":
                for name in VAR.findall(code):
                    if name not in defined:
                        errors.append(f"{rel}:{number} unknown token {name}")
                    elif name in primitives:
                        errors.append(f"{rel}:{number} primitive token {name} used in a component (use a semantic or component token)")

    if errors:
        print("\n".join(errors))
        print(f"FAIL: {len(errors)} issue(s)")
        sys.exit(1)
    print(f"OK: {len(css_files)} CSS and {len(tsx_files)} TSX files use tokens only")


if __name__ == "__main__":
    main()
