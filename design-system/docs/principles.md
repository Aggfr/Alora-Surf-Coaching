# Principles

Seven principles, in priority order. When two conflict, the higher one wins.

## 1. Accessible by default
Every component meets WCAG 2.2 AA with no extra setup: text contrast ≥ 4.5:1 (≥ 3:1 for large text and control borders), visible focus, touch targets ≥ 44px and correct HTML semantics.
**Resulting decision:** the primary button gradient and the tertiary gray were darkened compared with the original designs because they did not reach 4.5:1 (see `docs/accessibility.md`).

## 2. A single source of truth
Every visual value exists once, in `tokens/`. Figma (variables), CSS (`--ds-*`) and any other platform are generated or synced from there. If a value is not in the tokens, it does not exist.

## 3. Layers that do not mix
- **Primitives** say *what values exist*.
- **Semantic tokens** say *what they are for*.
- **Component tokens** say *where they apply*.
A component never reads a primitive; a page never defines its own styles. `scripts/check_hardcoded.py` enforces this.

## 4. Reuse before creating
Search order for a new need: existing component → variant or prop of an existing component → composition of existing components → new component (only if the case repeats and is documented).

## 5. Clarity over brevity
`color.background.surface-raised` rather than `bg2`. `isDisabled` rather than `dis`. A long, obvious name costs less than a conversation to understand it.

## 6. States and variants are props, not components
`<Button variant="danger" isLoading />`, never `<DangerButton>` or `<LoadingButton>`. The same in Figma: one component set with variant properties.

## 7. Documented for people and for AI
Every component has a purpose, when to use, when not to use, anatomy, API, tokens, accessibility, composition, examples, anti-patterns and a changelog. `MANIFEST.json` indexes everything in a format an AI can read without opening every folder.

## Where the decisions come from
The system was extracted from two product files:
- **Coach Platform** (`9JVeHRxUaDyilE6aLVFpQp`): review queue, surfer profiles, calendar.
- **Surfer Platform** (`MfvlEJ8gZ4WPdNDXETjHRD`): log in, clip upload, sessions and history.

Both share a dark navy theme, an ocean accent, Outfit for display text and a card language with a 16px radius. Where the two files differed, the most frequent value was chosen; where both failed accessibility, the value was fixed and documented in the token's `$description`.
