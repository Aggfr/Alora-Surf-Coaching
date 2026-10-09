# StatGroup

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [StatGroup](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_StatGroup)

## 1. Name and category
`StatGroup` — Molecule.

## 2. Purpose
Two to four small metrics side by side inside one card.

## 3. When to use
- Plan usage (Submissions left, Clip time), Surfer profile numbers, coach earnings summary.

## 4. When not to use
- A single highlighted metric: Stat featured.
- Metrics with trends: Stat.

## 5. Anatomy
1. Row of items: value (`typography.metric`) over label (`typography.overline`)
2. Vertical dividers between items

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `items` | `Array<{ label: string; value: string \| number; tone?: 'primary' \| 'brand' \| 'highlight' }>` | — | Yes | 2–4 metrics. |
| `size` | `'small' \| 'medium'` | `'medium'` | No | Value size. |

## 7. Variants and states
- **size:** `small`, `medium`
- **States:** `—`

## 8. Tokens used
- `stat.background`
- `stat.label`
- `stat.value`
- `color.text.brand`
- `color.text.highlight`
- `divider.color`
- `typography.metric`

The component's own tokens live in [`StatGroup.tokens.json`](./StatGroup.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- `<dl>`: each label is a `<dt>` read before its value, even though the value is shown on top.

## 11. Composition rules
- Inside a card, ResultState or under a SectionHeader.

## 12. Code examples
```tsx
<StatGroup items={[{ label: "Submissions left", value: 3, tone: "brand" }, { label: "Clip time", value: "2:30" }]} />
```
More examples in [`StatGroup.examples.md`](./StatGroup.examples.md).

## 13. Anti-patterns
- More than four items; use a DataList.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
