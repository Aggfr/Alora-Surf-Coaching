# Notification

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [Notification](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-209)

## 1. Name and category
`Notification` — Molecule.

## 2. Purpose
Communicates a system message with a tone, an action and a dismiss button.

## 3. When to use
- Successful submission, approaching deadline, upload error, process info.

## 4. When not to use
- Field errors: FormField.
- Blocking decisions: Modal.

## 5. Anatomy
1. Icon in a tinted container
2. Title
3. Description
4. Optional action
5. Optional dismiss

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `tone` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | No | Tone. |
| `title` | `string` | — | Yes | Main message. |
| `description` | `string` | — | No | Detail. |
| `action` | `{ label: string; onPress: () => void }` | — | No | Action. |
| `onDismiss` | `() => void` | — | No | Shows a dismiss button. |

## 7. Variants and states
- **tone:** `info`, `success`, `warning`, `danger`
- **States:** `visible`, `dismissed`

## 8. Tokens used
- `notification.background`
- `notification.border`
- `notification.radius`
- `color.feedback.*`
- `typography.heading-small`
- `typography.body-small`

The component's own tokens live in [`Notification.tokens.json`](./Notification.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- info/success may auto-dismiss after 6s; warning/danger never do.

## 10. Accessibility
- info/success use `role=status`; danger uses `role=alert`.
- Dismiss is a button with `aria-label="Dismiss"`.

## 11. Composition rules
- Stacked in the top-right corner (`layer.toast`) or inline above the content.
- Depends on: `Icon`, `Heading`, `Text`, `Button`.

## 12. Code examples
```tsx
<Notification tone="success" title="Submission sent" description="Your coach has 48h to review your clip." />
```
More examples in [`Notification.examples.md`](./Notification.examples.md).

## 13. Anti-patterns
- More than 3 visible notifications.
- Error messages that disappear on their own.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
