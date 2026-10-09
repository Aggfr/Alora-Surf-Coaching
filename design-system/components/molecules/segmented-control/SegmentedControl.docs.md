# SegmentedControl

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [SegmentedControl](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=62-184)

## 1. Name and category
`SegmentedControl` — Molecule.

## 2. Purpose
Row of mutually exclusive options shown side by side.

## 3. When to use
- Short choices: gender, board type, frequency.
- Switching a list filter with 2–5 options.

## 4. When not to use
- Options that need a description: OptionCard.
- Several answers at once: TagChip.

## 5. Anatomy
1. Group container (`segmented-control.background`, border)
2. Options (pill per option)
3. Selected option fill (brand or highlight)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Accessible name of the group ('Gender'). |
| `options` | `Array<{ label: string; value: string }>` | — | Yes | 2–6 options. |
| `value` | `string` | — | No | Selected value. |
| `onChange` | `(value: string) => void` | — | No | Selection. |
| `tone` | `'brand' \| 'highlight'` | `'brand'` | No | Color of the selected option. |
| `layout` | `'fill' \| 'hug'` | `'fill'` | No | fill shares the width; hug sizes pills to their text and wraps. |
| `size` | `'small' \| 'medium'` | `'medium'` | No | Height. |

## 7. Variants and states
- **tone:** `brand`, `highlight`
- **layout:** `fill`, `hug`
- **size:** `small`, `medium`
- **States:** `default`, `hover`, `focus`, `selected`

## 8. Tokens used
- `segmented-control.background`
- `segmented-control.border`
- `segmented-control.selected-brand`
- `segmented-control.on-selected-brand`
- `segmented-control.selected-highlight`
- `segmented-control.on-selected-highlight`
- `size.radius.pill`
- `typography.label`

The component's own tokens live in [`SegmentedControl.tokens.json`](./SegmentedControl.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Click selects; arrow keys move and select (radio group).

## 10. Accessibility
- `role=radiogroup` with `aria-label`; each option is a native radio.
- The selected option has a filled background and higher-contrast text.

## 11. Composition rules
- Inside FormField-like groups in onboarding and Edit profile.

## 12. Code examples
```tsx
<SegmentedControl label="Gender" tone="highlight" options={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }, { label: "Other", value: "other" }]} value={gender} onChange={setGender} />
```
More examples in [`SegmentedControl.examples.md`](./SegmentedControl.examples.md).

## 13. Anti-patterns
- More than 6 options.
- Using it to trigger actions.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
