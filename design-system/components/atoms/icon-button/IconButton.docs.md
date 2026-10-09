# IconButton

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [IconButton](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=54-129)

## 1. Name and category
`IconButton` — Atom.

## 2. Purpose
Square button that shows only an icon.

## 3. When to use
- Back in a TopBar, previous and next in PeriodStepper, video controls.

## 4. When not to use
- When the action needs words to be understood: Button with a leading icon.

## 5. Anatomy
1. Square container (`button.radius`)
2. Icon (`Icon`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `icon` | `IconName` | — | Yes | Pictogram. |
| `label` | `string` | — | Yes | Accessible name (`aria-label`); also the tooltip text. |
| `variant` | `'secondary' \| 'ghost'` | `'secondary'` | No | secondary has a border; ghost is transparent. |
| `size` | `'small' \| 'medium'` | `'medium'` | No | 32 / 44 px. |
| `isDisabled` | `boolean` | `false` | No | aria-disabled. |
| `onPress` | `() => void` | — | No | Action. |

## 7. Variants and states
- **variant:** `secondary`, `ghost`
- **size:** `small`, `medium`
- **States:** `default`, `hover`, `focus`, `disabled`

## 8. Tokens used
- `button.secondary.*`
- `button.ghost.*`
- `button.disabled.*`
- `button.radius`
- `size.layout.control-height`
- `size.layout.control-height-small`

The component's own tokens live in [`IconButton.tokens.json`](./IconButton.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Same feedback as Button: hover background, Enter and Space activate.

## 10. Accessibility
- `aria-label` is required.
- Disabled uses `aria-disabled` and ignores presses.
- Target size ≥ 32px.

## 11. Composition rules
- TopBar, PeriodStepper. Pair with Tooltip when the icon is not universal.
- Depends on: `Icon`.

## 12. Code examples
```tsx
<IconButton icon="chevron-left" label="Back" onPress={goBack} />
```
More examples in [`IconButton.examples.md`](./IconButton.examples.md).

## 13. Anti-patterns
- An icon-only Button without `label`.
- Icons that need explaining.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
