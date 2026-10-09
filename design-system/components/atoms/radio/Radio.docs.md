# Radio

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [Radio](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-71)

## 1. Name and category
`Radio` — Atom.

## 2. Purpose
Lets the user pick one option within a group.

## 3. When to use
- 2–5 visible mutually exclusive options (Regular/Goofy stance, level).

## 4. When not to use
- More than 5 options: Select (planned).
- Multiple choices: Checkbox.

## 5. Anatomy
1. 18×18 circle
2. Inner dot when selected
3. Label

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `ReactNode` | — | Yes | Visible text. |
| `value` | `string` | — | Yes | Option value. |
| `name` | `string` | — | Yes | Group name. |
| `isSelected` | `boolean` | `false` | No | Selected. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |

## 7. Variants and states
- **selected:** `false`, `true`
- **States:** `default`, `focus`, `disabled`

## 8. Tokens used
- `radio.border`
- `radio.border-checked`
- `radio.dot`
- `color.border.focus`

The component's own tokens live in [`Radio.tokens.json`](./Radio.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Arrow keys move the selection within the group.

## 10. Accessibility
- `<input type=radio>` inside a `<fieldset>` with a `<legend>`, or a named `role=radiogroup`.

## 11. Composition rules
- Always in a group of at least 2.
- Depends on: `Label`.

## 12. Code examples
```tsx
<Radio name="stance" value="goofy" label="Goofy" isSelected={stance === "goofy"} />
```
More examples in [`Radio.examples.md`](./Radio.examples.md).

## 13. Anti-patterns
- A lone radio button.
- A group with no default option when the value is required.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
