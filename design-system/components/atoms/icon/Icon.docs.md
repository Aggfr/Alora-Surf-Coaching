# Icon

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Icon](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=7-6)

## 1. Name and category
`Icon` — Atom.

## 2. Purpose
Shows a line pictogram from the Alora icon set.

## 3. When to use
- Reinforce the meaning of a text (buttons, tags, navigation).
- Icon-only buttons when space is tight and the meaning is universal (close, search).

## 4. When not to use
- As the only way to communicate a state: add text.
- For illustrations or logos: use images or the Sidebar logo.

## 5. Anatomy
1. 24×24 box
2. 2px stroke with round caps (Lucide style)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `name` | `IconName` | — | Yes | home, list, user, users, calendar, play-circle, bell, eye, clock, check, close, chevron-right, chevron-left, search, info, plus, upload, log-in, log-out, edit, repeat, warning, check-circle, star, trending-up, mail, lock, trash, video, trending-down, download, play, pause, volume, maximize, shield, alert-circle, file-text, plus-circle, x-circle. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | No | 12 / 16 / 20 / 24 / 32 px (`size.icon.*`). |
| `tone` | `'primary' \| 'secondary' \| 'brand' \| 'inherit'` | `'inherit'` | No | Color `color.icon.*`; inherit uses currentColor. |
| `label` | `string` | — | No | When set, the icon is meaningful (`role=img` + `aria-label`). Otherwise `aria-hidden`. |

## 7. Variants and states
- **size:** `xs`, `sm`, `md`, `lg`, `xl`
- **tone:** `primary`, `secondary`, `brand`, `inherit`
- **States:** `—`

## 8. Tokens used
- `color.icon.primary`
- `color.icon.secondary`
- `color.icon.brand`
- `size.icon.*`

The component's own tokens live in [`Icon.tokens.json`](./Icon.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive on its own.

## 10. Accessibility
- Decorative by default (`aria-hidden=true`).
- With `label` it becomes `role=img`.
- Contrast ≥ 3:1 against the background when it carries information.

## 11. Composition rules
- Inside Button, Tag, NavigationItem, Notification, Input.
- The parent component decides the color (`tone=inherit`).

## 12. Code examples
```tsx
<Icon name="clock" size="sm" tone="inherit" />
```
More examples in [`Icon.examples.md`](./Icon.examples.md).

## 13. Anti-patterns
- Icons from other libraries mixed with the set.
- Changing the stroke width.
- An icon with no text or aria-label on a control.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added download, play, pause, volume, maximize, shield, alert-circle, file-text, plus-circle and x-circle.
