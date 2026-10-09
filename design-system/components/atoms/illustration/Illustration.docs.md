# Illustration

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Illustration](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_Illustration)

## 1. Name and category
`Illustration` — Atom.

## 2. Purpose
Draws one of the Alora illustrations with theme colors.

## 3. When to use
- Auth background (auth-background).
- Empty states (surfers, nothing-reviewed).

## 4. When not to use
- Icons inside controls: Icon.
- Photos: an `<img>` with alt text.

## 5. Anatomy
1. SVG that uses `color.*` tokens, so it follows the theme

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `name` | `'auth-background' \| 'surfers' \| 'nothing-reviewed'` | — | Yes | Illustration. |
| `label` | `string` | — | No | Makes the illustration meaningful (`role=img`). |

## 7. Variants and states
- **name:** `auth-background`, `surfers`, `nothing-reviewed`
- **States:** `—`

## 8. Tokens used
- `color.background.*`
- `color.text.brand`
- `color.text.highlight`
- `size.layout.illustration-small`
- `size.layout.illustration-medium`

The component's own tokens live in [`Illustration.tokens.json`](./Illustration.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- Decorative by default (`aria-hidden`).

## 11. Composition rules
- AuthTemplate background=illustrated, EmptyState illustration.

## 12. Code examples
```tsx
<Illustration name="nothing-reviewed" />
```
More examples in [`Illustration.examples.md`](./Illustration.examples.md).

## 13. Anti-patterns
- Exporting illustrations as PNG: colors would not follow the theme.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
