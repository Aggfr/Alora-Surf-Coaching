# SummaryRow

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [SummaryRow](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=62-324)

## 1. Name and category
`SummaryRow` — Molecule.

## 2. Purpose
Labelled fact with a leading icon, used to summarize what happened.

## 3. When to use
- Submission sent: clips, coach, expected review.
- Short receipts and confirmations.

## 4. When not to use
- Editable data or long lists: DataList.

## 5. Anatomy
1. IconTile medium
2. Label (`typography.overline`)
3. Value (`typography.body-medium`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `icon` | `IconName` | — | Yes | Icon. |
| `label` | `string` | — | Yes | What the value is. |
| `value` | `ReactNode` | — | Yes | The fact. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `—`

## 8. Tokens used
- `icon-tile.*`
- `typography.overline`
- `typography.body-medium`
- `color.text.tertiary`
- `color.text.primary`
- `size.space.medium`

The component's own tokens live in [`SummaryRow.tokens.json`](./SummaryRow.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- `<dl>` with `<dt>` label and `<dd>` value; the icon is decorative.

## 11. Composition rules
- Stacked inside ResultState.
- Depends on: `IconTile`.

## 12. Code examples
```tsx
<SummaryRow icon="video" label="Clips" value="2 clips · 1:46" />
```
More examples in [`SummaryRow.examples.md`](./SummaryRow.examples.md).

## 13. Anti-patterns
- Using SummaryRow for actions.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
