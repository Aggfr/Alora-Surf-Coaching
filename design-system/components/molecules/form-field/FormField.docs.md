# FormField

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [FormField](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-54)

## 1. Name and category
`FormField` — Molecule.

## 2. Purpose
Groups a field's Label, Input, helper text and error message.

## 3. When to use
- Any form field (log in, onboarding, profile).

## 4. When not to use
- Search: SearchField.

## 5. Anatomy
1. Label
2. Input or Textarea
3. Optional helper text
4. Error message with icon

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Label text. |
| `id` | `string` | — | Yes | Control id. |
| `helperText` | `string` | — | No | Help below the field. |
| `errorMessage` | `string` | — | No | When set, the field switches to the error state. |
| `isRequired` | `boolean` | `false` | No | Required. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `children` | `ReactElement<Input \| Textarea>` | — | Yes | The control. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `error`, `disabled`

## 8. Tokens used
- `size.space.small`
- `typography.body-small`
- `color.text.tertiary`
- `color.feedback.danger.foreground`

The component's own tokens live in [`FormField.tokens.json`](./FormField.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- The error appears on blur or on submit, not while typing.

## 10. Accessibility
- Connects `aria-describedby` to the helper and error text.
- The error is announced with `role=alert` the first time.

## 11. Composition rules
- Inside FormSection or the Modal Content slot.
- Depends on: `Label`, `Input`, `Textarea`, `Text`, `Icon`.

## 12. Code examples
```tsx
<FormField id="email" label="Email" errorMessage={error}>
  <Input id="email" type="email" />
</FormField>
```
More examples in [`FormField.examples.md`](./FormField.examples.md).

## 13. Anti-patterns
- Showing helper text and an error at the same time.
- Error messages that do not say how to fix the problem.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
