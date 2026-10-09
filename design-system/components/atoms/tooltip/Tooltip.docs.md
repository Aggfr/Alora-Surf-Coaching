# Tooltip

**Atomic Design category:** Atom · **Status:** `beta` · **Version:** 1.1.0
**Figma:** [Tooltip](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-200)

## 1. Name and category
`Tooltip` — Atom.

## 2. Purpose
Briefly describes a control on hover or focus.

## 3. When to use
- Icon-only buttons, abbreviations.

## 4. When not to use
- Essential information or actions: use visible text or Notification.

## 5. Anatomy
1. Bubble (`tooltip.background`, `tooltip.radius`)
2. Arrow
3. Text (`typography.body-small`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `content` | `string` | — | Yes | Short text (≤ 60 characters). |
| `placement` | `'top' \| 'bottom'` | `'top'` | No | Placement. |
| `children` | `ReactElement` | — | Yes | Focusable trigger element. |

## 7. Variants and states
- **placement:** `top`, `bottom`
- **States:** `hidden`, `visible`

## 8. Tokens used
- `tooltip.background`
- `tooltip.foreground`
- `tooltip.radius`
- `tooltip.padding`
- `layer.tooltip`

The component's own tokens live in [`Tooltip.tokens.json`](./Tooltip.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Appears after 300ms of hover, or instantly on focus; Escape closes it.

## 10. Accessibility
- `role=tooltip` linked with `aria-describedby`.
- Does not disappear while the pointer is over it (WCAG 1.4.13).

## 11. Composition rules
- Wraps an icon-only Button.

## 12. Code examples
```tsx
<Tooltip content="Close"><Button variant="ghost" leadingIcon="close" aria-label="Close" /></Tooltip>
```
More examples in [`Tooltip.examples.md`](./Tooltip.examples.md).

## 13. Anti-patterns
- Tooltips containing links or buttons.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `beta`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
