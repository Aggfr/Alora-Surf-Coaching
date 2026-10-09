# AvailabilityGrid

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [AvailabilityGrid](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=63-450)

## 1. Name and category
`AvailabilityGrid` — Organism.

## 2. Purpose
Weekly grid where a coach marks the hours they are available.

## 3. When to use
- Coach Schedule: weekly availability.

## 4. When not to use
- Picking one date or time: date or time picker (planned).

## 5. Anatomy
1. Day header row
2. Hour column
3. Toggle cells (`availability-grid.*`)
4. Footer: legend + actions

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Accessible name ('Weekly availability'). |
| `value` | `string[]` | — | Yes | Selected slots, as `slotId(day, hour)`. |
| `onChange` | `(value: string[]) => void` | — | Yes | New selection. |
| `days` | `Array<{ short: string; long: string }>` | `Mon–Sun` | No | Columns. |
| `hours` | `number[]` | `6–21` | No | Start hours of the rows, 24-hour clock. |
| `actions` | `ReactNode` | — | No | Footer buttons (Save availability, Clear all). |
| `legend` | `{ selected: string; unselected: string }` | `Available / Unavailable` | No | Legend texts. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `hover`, `focus`, `selected`

## 8. Tokens used
- `availability-grid.cell`
- `availability-grid.cell-alternate`
- `availability-grid.cell-selected`
- `availability-grid.line`
- `availability-grid.header`
- `typography.overline`
- `typography.caption`

The component's own tokens live in [`AvailabilityGrid.tokens.json`](./AvailabilityGrid.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Click toggles a cell; dragging paints every cell it crosses with the first cell's new state.
- Arrow keys move between cells, Home and End jump in a row, Enter or Space toggles.

## 10. Accessibility
- `role=grid` table; each cell is a `<button aria-pressed>` named 'Monday 9:00'.
- Roving tabindex: one Tab stop for the whole grid.
- Selected cells change fill, not just color hue, and the legend explains them.

## 11. Composition rules
- Under a SectionHeader and a PeriodStepper in Schedule.

## 12. Code examples
```tsx
<AvailabilityGrid label="Weekly availability" value={slots} onChange={setSlots} actions={<Button onPress={save}>Save availability</Button>} />
```
More examples in [`AvailabilityGrid.examples.md`](./AvailabilityGrid.examples.md).

## 13. Anti-patterns
- Saving on every click: keep an explicit Save action.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
