# Divider

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Divider](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-186)

## 1. Name and category
`Divider` — Atom.

## 2. Purpose
Separates groups of content.

## 3. When to use
- Between the stats block and the submissions list; between list rows.
- With a label, between alternatives (OR between sign-in methods).

## 4. When not to use
- To create space: use `size.space.*` tokens.

## 5. Anatomy
1. 1px line (`divider.color`)
2. Optional centered label (`typography.overline`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No | Direction. |
| `isDecorative` | `boolean` | `true` | No | When false, `role=separator`. |
| `label` | `string` | — | No | Centered text (“OR”); the divider becomes a labelled separator. |

## 7. Variants and states
- **orientation:** `horizontal`, `vertical`
- **States:** `—`

## 8. Tokens used
- `divider.color`
- `size.border.default`
- `typography.overline`
- `color.text.tertiary`

The component's own tokens live in [`Divider.tokens.json`](./Divider.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- Decorative by default (`aria-hidden`).
- With a label it is a `role=separator` named by the label.

## 11. Composition rules
- Free to use.

## 12. Code examples
```tsx
<Divider />
```
More examples in [`Divider.examples.md`](./Divider.examples.md).

## 13. Anti-patterns
- Hand-drawn borders in other colors.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the optional label.
