# Logo

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Logo](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=54-37)

## 1. Name and category
`Logo` — Atom.

## 2. Purpose
Shows the Alora brand image: mountains, sun and the ALORA wordmark.

## 3. When to use
- Top of the auth screens (log in, sign up, profile selector).
- Bottom of the Sidebar.

## 4. When not to use
- As decoration inside content.
- As a home link with no text: wrap it in a link with an accessible name.

## 5. Anatomy
1. Brand image `assets/logo-alora.png` (372 × 372 px PNG, mark and wordmark), used exactly as delivered

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | No | Image height 40 / 56 / 96 px; width follows the square image. |
| `hasWordmark` | `boolean` | — | No | Deprecated: the image always includes the wordmark, so this has no effect. |

## 7. Variants and states
- **size:** `small`, `medium`, `large`
- **States:** `—`

## 8. Tokens used
- `size.layout.logo-small`
- `size.layout.logo-medium`
- `size.layout.logo-large`

The component's own tokens live in [`Logo.tokens.json`](./Logo.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- `<img>` with `alt="Alora"`.

## 11. Composition rules
- AuthTemplate (hasLogo) and Sidebar render it; screens do not place it by hand.

## 12. Code examples
```tsx
<Logo size="large" />
```
More examples in [`Logo.examples.md`](./Logo.examples.md).

## 13. Anti-patterns
- Recoloring, cropping, vectorizing or redrawing the image.
- Stretching it: change `size` instead.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
- 2026-10-09 · 1.1.0 · The mark is the brand PNG, unaltered, instead of a hand-drawn SVG. Sizes follow the Figma component (40 / 56 / 96 px) and `hasWordmark` is deprecated.
