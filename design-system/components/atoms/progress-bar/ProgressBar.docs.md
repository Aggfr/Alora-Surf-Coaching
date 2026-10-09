# ProgressBar

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [ProgressBar](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=54-303)

## 1. Name and category
`ProgressBar` — Atom.

## 2. Purpose
Shows measurable progress or how much of a limit is used.

## 3. When to use
- Onboarding progress under the Stepper.
- Clip time used against the plan limit.
- Upload progress.

## 4. When not to use
- Unknown duration: Spinner.

## 5. Anatomy
1. Track (`progress-bar.track`)
2. Indicator (`progress-bar.indicator`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `value` | `number` | — | Yes | Current value. |
| `max` | `number` | `100` | No | Maximum value. |
| `label` | `string` | — | Yes | Accessible name ('Clip time used'). |
| `valueText` | `string` | — | No | Readable value ('0:11 of 2:30') instead of a percentage. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `empty`, `partial`, `complete`

## 8. Tokens used
- `progress-bar.track`
- `progress-bar.indicator`
- `progress-bar.height`
- `size.radius.pill`

The component's own tokens live in [`ProgressBar.tokens.json`](./ProgressBar.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive; the indicator width animates with `motion.transition-fast`.

## 10. Accessibility
- Native `<progress>` with `aria-label` and `aria-valuetext`.

## 11. Composition rules
- Stepper, ClipItem lists, upload screens.

## 12. Code examples
```tsx
<ProgressBar value={11} max={150} label="Clip time used" valueText="0:11 of 2:30" />
```
More examples in [`ProgressBar.examples.md`](./ProgressBar.examples.md).

## 13. Anti-patterns
- Using it for unknown durations.
- Showing it with no text nearby that states the value.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
