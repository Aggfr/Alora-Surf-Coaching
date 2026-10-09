# FormSection

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [FormSection](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-349)

## 1. Name and category
`FormSection` — Organism.

## 2. Purpose
Complete form with fields and actions.

## 3. When to use
- Log in, Create account, onboarding steps, edit profile.

## 4. When not to use
- A single inline field: FormField.

## 5. Anatomy
1. Error summary (Notification) when there is more than one error
2. Stacked FormFields
3. Full-width primary action
4. Optional ghost secondary action

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `onSubmit` | `(event: FormEvent) => void` | — | Yes | Submit. |
| `children` | `ReactNode` | — | Yes | FormFields. |
| `primaryAction` | `{ label: string; icon?: IconName; isLoading?: boolean }` | — | Yes | Submit. |
| `secondaryAction` | `{ label: string; onPress: () => void }` | — | No | Alternative. |
| `errorSummary` | `string[]` | — | No | Summary shown when there is more than one error. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `submitting`, `error`

## 8. Tokens used
- `card.*`
- `size.layout.form-width`
- `size.space.large`
- `size.space.medium`

The component's own tokens live in [`FormSection.tokens.json`](./FormSection.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Enter submits; the button shows its loading state while submitting.

## 10. Accessibility
- `<form noValidate>`; the error summary uses `role=alert` and focus goes to the first error.

## 11. Composition rules
- AuthTemplate Form slot or the content column.
- Depends on: `FormField`, `Button`, `Notification`.

## 12. Code examples
```tsx
<FormSection onSubmit={login} primaryAction={{ label: "Login", icon: "log-in" }} secondaryAction={{ label: "Create new account", onPress: goSignup }}>…</FormSection>
```
More examples in [`FormSection.examples.md`](./FormSection.examples.md).

## 13. Anti-patterns
- Two primary actions.
- Validating while the user types.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
