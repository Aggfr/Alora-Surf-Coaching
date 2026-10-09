# Label

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [Label](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-11)

## 1. Name and category
`Label` — Atom.

## 2. Purpose
Names a form control.

## 3. When to use
- Above Input or Textarea, or to the right of Checkbox, Radio and Switch.

## 4. When not to use
- As a section title: use Heading.
- As helper text: use Text inside FormField.

## 5. Anatomy
1. Text (`typography.label`)
2. Optional required mark (*)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Yes | Field name. |
| `htmlFor` | `string` | — | Yes | id of the associated control. |
| `isRequired` | `boolean` | `false` | No | Adds * and requires aria-required on the control. |
| `isDisabled` | `boolean` | `false` | No | Dims the label (`color.text.disabled`). |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `disabled`

## 8. Tokens used
- `typography.label`
- `color.text.primary`
- `color.text.disabled`
- `color.feedback.danger.foreground`

The component's own tokens live in [`Label.tokens.json`](./Label.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Clicking the label focuses or toggles the control.

## 10. Accessibility
- Native `<label for>`.
- The asterisk is decorative (`aria-hidden`); required state is conveyed with `aria-required`.

## 11. Composition rules
- Only inside FormField or next to Checkbox / Radio / Switch.

## 12. Code examples
```tsx
<Label htmlFor="email" isRequired>Email</Label>
```
More examples in [`Label.examples.md`](./Label.examples.md).

## 13. Anti-patterns
- Using the placeholder as the label.
- Typing labels in uppercase: the style already defines the typography.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
