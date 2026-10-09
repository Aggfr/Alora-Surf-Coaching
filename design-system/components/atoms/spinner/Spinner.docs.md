# Spinner

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Spinner](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-180)

## 1. Name and category
`Spinner` — Atom.

## 2. Purpose
Indicates a wait of unknown duration.

## 3. When to use
- Video upload, review submission, loading the queue.

## 4. When not to use
- Measurable progress: ProgressBar.
- Loading a whole view: skeletons (planned).

## 5. Anatomy
1. Circular track (`spinner.track`)
2. Animated arc (`spinner.indicator`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `size` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | No | 16 / 24 / 32 / 80 px. xlarge is the full-screen wait (Sending your submission). |
| `label` | `string` | `'Loading'` | No | Text for screen readers. |

## 7. Variants and states
- **size:** `small`, `medium`, `large`, `xlarge`
- **States:** `—`

## 8. Tokens used
- `spinner.track`
- `spinner.indicator`
- `size.border.focus`
- `size.border.heavy`
- `size.layout.avatar-xlarge`
- `motion.loop-duration`

The component's own tokens live in [`Spinner.tokens.json`](./Spinner.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Rotates continuously; with `prefers-reduced-motion` the animation stops.

## 10. Accessibility
- `role=status` with `aria-label`.
- Respects `prefers-reduced-motion`.

## 11. Composition rules
- Inside Button (isLoading) or centered in a loading EmptyState.

## 12. Code examples
```tsx
<Spinner size="small" label="Uploading video" />
```
More examples in [`Spinner.examples.md`](./Spinner.examples.md).

## 13. Anti-patterns
- Several spinners at once in one view.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the xlarge size.
