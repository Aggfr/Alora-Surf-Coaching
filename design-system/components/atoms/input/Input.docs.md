# Input

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [Input](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-161)

## 1. Name and category
`Input` — Atom.

## 2. Purpose
Collects one line of text.

## 3. When to use
- Email, password, name, search (through SearchField).

## 4. When not to use
- Long text: use Textarea.
- Fixed options: use Radio or a Select (planned).

## 5. Anatomy
1. Container (background `input.background`, border `input.border.*`, radius `input.radius`)
2. Optional leading icon
3. Value or placeholder
4. Optional trailing icon (show password)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | — | Yes | Links the Label and messages. |
| `value` | `string` | — | No | Controlled value. |
| `placeholder` | `string` | — | No | Format example; never replaces the Label. |
| `type` | `'text' \| 'email' \| 'password' \| 'search' \| 'tel'` | `'text'` | No | HTML type. |
| `leadingIcon` | `IconName` | — | No | Icon before the value. |
| `trailingIcon` | `IconName` | — | No | Icon or action after the value. |
| `hasError` | `boolean` | `false` | No | Error border and `aria-invalid`. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `onChange` | `(value: string) => void` | — | No | Value change. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `hover`, `focus`, `error`, `disabled`, `filled`

## 8. Tokens used
- `input.background`
- `input.foreground`
- `input.placeholder`
- `input.border.default`
- `input.border.hover`
- `input.border.focus`
- `input.border.error`
- `input.radius`
- `input.padding-horizontal`
- `input.typography`
- `size.layout.control-height`
- `size.border.focus`

The component's own tokens live in [`Input.tokens.json`](./Input.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Focus: 2px `input.border.focus` border.
- Error: 2px `input.border.error` border; FormField renders the message.

## 10. Accessibility
- Always with an associated Label (FormField guarantees it).
- `aria-invalid` and `aria-describedby` pointing to helper and error text.
- Correct `autocomplete` (email, current-password).

## 11. Composition rules
- Use inside FormField. Outside a form, only through SearchField.
- Depends on: `Icon`.

## 12. Code examples
```tsx
<Input id="email" type="email" value={email} onChange={setEmail} />
```
More examples in [`Input.examples.md`](./Input.examples.md).

## 13. Anti-patterns
- Placeholder as the only label.
- Red borders with no error message.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
