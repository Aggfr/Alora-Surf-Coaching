# Textarea

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [Textarea](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-177)

## 1. Name and category
`Textarea` — Atom.

## 2. Purpose
Collects multiple lines of text.

## 3. When to use
- Surfer note to the coach, reason for changing coach.

## 4. When not to use
- Single-line values: use Input.

## 5. Anatomy
1. Container (`input.*` tokens)
2. Value or placeholder
3. Optional counter

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | — | Yes | Links the Label. |
| `value` | `string` | — | No | Controlled value. |
| `maxLength` | `number` | — | No | Shows an 'n / max' counter. |
| `rows` | `number` | `4` | No | Initial height. |
| `hasError` | `boolean` | `false` | No | Error state. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `onChange` | `(value: string) => void` | — | No | Value change. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `focus`, `error`, `disabled`

## 8. Tokens used
- `input.*`
- `typography.body-medium`
- `typography.caption`
- `color.text.tertiary`

The component's own tokens live in [`Textarea.tokens.json`](./Textarea.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Grows with the content up to 8 rows, then scrolls.

## 10. Accessibility
- Counter linked with `aria-describedby` and announced when the limit is reached.

## 11. Composition rules
- Inside FormField or the Modal Content slot.

## 12. Code examples
```tsx
<Textarea id="note" maxLength={280} value={note} onChange={setNote} />
```
More examples in [`Textarea.examples.md`](./Textarea.examples.md).

## 13. Anti-patterns
- Using it for a single short value.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
