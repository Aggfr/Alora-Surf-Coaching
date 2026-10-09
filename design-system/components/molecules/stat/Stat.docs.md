# Stat

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Stat](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-154)

## 1. Name and category
`Stat` — Molecule.

## 2. Purpose
Shows a metric with its label and an optional trend.

## 3. When to use
- Queue summary (Pending, Reviewed) and plan summary (Cycle submissions, Renews).

## 4. When not to use
- Time series: chart (planned).

## 5. Anatomy
1. Label
2. Value (`typography.metric`)
3. Optional trend (icon + text)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | What is measured. |
| `value` | `string \| number` | — | Yes | Formatted value. |
| `trend` | `{ direction: 'up' \| 'down'; label: string }` | — | No | Change. |
| `caption` | `string` | — | No | Line under the label (“Paid on Oct 1”). |
| `variant` | `'default' \| 'featured' \| 'compact'` | `'default'` | No | featured: big centered total (earnings). compact: label and value on one row. |

## 7. Variants and states
- **trend:** `none`, `up`
- **variant:** `default`, `featured`, `compact`
- **States:** `—`

## 8. Tokens used
- `stat.background`
- `stat.label`
- `stat.value`
- `card.radius`
- `size.space.xl`
- `typography.metric`
- `color.feedback.success.foreground`
- `color.background.brand-subtle`
- `typography.display`

The component's own tokens live in [`Stat.tokens.json`](./Stat.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- Label and value in the same `<div role=group>` with `aria-label`.
- The trend is read as text.

## 11. Composition rules
- Grid of stats that wraps at `size.layout.stat-min-width`.
- Depends on: `Text`, `Icon`.

## 12. Code examples
```tsx
<Stat label="Pending" value={3} />
```
More examples in [`Stat.examples.md`](./Stat.examples.md).

## 13. Anti-patterns
- Trend shown only with color.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added caption and the featured and compact variants.
