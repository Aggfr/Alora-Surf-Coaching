# PeriodStepper

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [PeriodStepper](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_PeriodStepper)

## 1. Name and category
`PeriodStepper` — Molecule.

## 2. Purpose
Moves backward and forward between periods (weeks, pay periods).

## 3. When to use
- Coach schedule week, earnings pay period.

## 4. When not to use
- Picking an arbitrary date: date picker (planned).
- Pages of a list: Pagination.

## 5. Anatomy
1. Previous IconButton
2. Caption + current period
3. Next IconButton

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Caption ('Pay period'). |
| `value` | `string` | — | Yes | Current period ('Sep 15 - Sep 30'). |
| `onPrevious` | `() => void` | — | No | Previous period. |
| `onNext` | `() => void` | — | No | Next period. |
| `isPreviousDisabled` | `boolean` | `false` | No | No earlier period. |
| `isNextDisabled` | `boolean` | `false` | No | No later period. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `first`, `last`

## 8. Tokens used
- `button.secondary.*`
- `typography.overline`
- `typography.heading-small`
- `size.space.small`

The component's own tokens live in [`PeriodStepper.tokens.json`](./PeriodStepper.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Buttons change the period; the value is announced politely.

## 10. Accessibility
- Buttons are labelled 'Previous {label}' and 'Next {label}'.
- `role=group` named by the caption; the value lives in an `aria-live=polite` region.

## 11. Composition rules
- Above the data that belongs to the period (AvailabilityGrid, earnings).
- Depends on: `IconButton`.

## 12. Code examples
```tsx
<PeriodStepper label="Pay period" value="Sep 15 - Sep 30" onPrevious={prev} onNext={next} isNextDisabled />
```
More examples in [`PeriodStepper.examples.md`](./PeriodStepper.examples.md).

## 13. Anti-patterns
- Arrows without labels.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
