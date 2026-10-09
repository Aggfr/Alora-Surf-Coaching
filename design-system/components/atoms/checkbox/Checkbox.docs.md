# Checkbox

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Checkbox](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-44)

## 1. Name and category
`Checkbox` — Atom.

## 2. Purpose
Lets the user check one or more independent options.

## 3. When to use
- Accept terms, 'Remember me', select several items.

## 4. When not to use
- One option among several: Radio.
- Setting with immediate effect: Switch.

## 5. Anatomy
1. 18×18 box (`checkbox.radius`)
2. Check mark or dash (indeterminate)
3. Label

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `ReactNode` | — | Yes | Visible text. |
| `isChecked` | `boolean \| 'indeterminate'` | `false` | No | State. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `onChange` | `(checked: boolean) => void` | — | No | Change. |

## 7. Variants and states
- **checked:** `false`, `true`, `indeterminate`
- **States:** `default`, `focus`, `disabled`

## 8. Tokens used
- `checkbox.border`
- `checkbox.background-checked`
- `checkbox.foreground-checked`
- `checkbox.radius`
- `color.border.focus`

The component's own tokens live in [`Checkbox.tokens.json`](./Checkbox.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Clicking the box or label toggles it.
- Space toggles it when focused.

## 10. Accessibility
- Native `<input type=checkbox>`.
- Indeterminate uses `aria-checked=mixed`.
- Clickable area ≥ 24×24 including the label.

## 11. Composition rules
- Groups go inside a `<fieldset>` with a `<legend>`.
- Depends on: `Icon`, `Label`.

## 12. Code examples
```tsx
<Checkbox label="Remember me" isChecked={remember} onChange={setRemember} />
```
More examples in [`Checkbox.examples.md`](./Checkbox.examples.md).

## 13. Anti-patterns
- A checkbox that triggers an immediate action.
- No visible label.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
