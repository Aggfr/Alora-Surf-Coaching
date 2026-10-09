# Logo

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Logo](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_Logo)

## 1. Name and category
`Logo` — Atom.

## 2. Purpose
Shows the Alora brand mark, with or without the ALORA wordmark.

## 3. When to use
- Top of the auth screens (log in, sign up, profile selector).
- Bottom of the Sidebar.

## 4. When not to use
- As decoration inside content.
- As a home link with no text: wrap it in a link with an accessible name.

## 5. Anatomy
1. Mark: mountains (`color.text.brand`) and sun (`color.text.highlight`)
2. Optional wordmark ALORA (`typography.overline`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | No | Mark height 24 / 36 / 56 px. |
| `hasWordmark` | `boolean` | `true` | No | Shows ALORA under the mark. |

## 7. Variants and states
- **size:** `small`, `medium`, `large`
- **hasWordmark:** `true`, `false`
- **States:** `—`

## 8. Tokens used
- `color.text.brand`
- `color.text.highlight`
- `color.text.primary`
- `typography.overline`
- `size.space.2xs`

The component's own tokens live in [`Logo.tokens.json`](./Logo.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- `role=img` with `aria-label="Alora"`; the SVG and the wordmark are hidden from screen readers.

## 11. Composition rules
- AuthTemplate (hasLogo) and Sidebar render it; screens do not place it by hand.

## 12. Code examples
```tsx
<Logo size="large" />
```
More examples in [`Logo.examples.md`](./Logo.examples.md).

## 13. Anti-patterns
- Recoloring the mark.
- Stretching it: change `size` instead.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
