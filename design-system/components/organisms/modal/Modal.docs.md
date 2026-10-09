# Modal

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Modal](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-348)

## 1. Name and category
`Modal` — Organism.

## 2. Purpose
Dialog for a decision or short task that interrupts the flow.

## 3. When to use
- Cancel a plan, request a coach change, confirm destructive actions.

## 4. When not to use
- Non-blocking information: Notification.
- Long forms: a page of their own.

## 5. Anatomy
1. Optional IconTile (centered layout)
2. Title + close button
3. Description
4. Content slot
5. Footer: secondary + primary action (stacked at full width when centered)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `isOpen` | `boolean` | — | Yes | Visibility. |
| `title` | `string` | — | Yes | Title. |
| `description` | `string` | — | No | Context. |
| `tone` | `'default' \| 'danger'` | `'default'` | No | danger uses a danger Button. |
| `icon` | `IconName` | — | No | Centers the dialog under a large IconTile (Cancel your plan?). |
| `primaryAction` | `{ label: string; onPress: () => void }` | — | Yes | Main action. |
| `secondaryAction` | `{ label: string; onPress: () => void }` | — | No | Cancel. |
| `onClose` | `() => void` | — | Yes | Close (X, Escape, overlay). |
| `children` | `ReactNode` | — | No | Content slot. |

## 7. Variants and states
- **tone:** `default`, `danger`
- **icon:** `false`, `true`
- **States:** `open`, `closed`

## 8. Tokens used
- `modal.background`
- `modal.overlay`
- `modal.radius`
- `modal.padding`
- `modal.shadow`
- `layer.modal`
- `motion.transition-enter`

The component's own tokens live in [`Modal.tokens.json`](./Modal.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Enters with `motion.transition-enter`; Escape and the overlay close it.

## 10. Accessibility
- Native `<dialog>` opened with `showModal()` and `aria-labelledby` pointing to the title.
- Focus is trapped and returns to the trigger on close.
- Initial focus goes to the first field, or to the secondary action when tone is danger.

## 11. Composition rules
- The Content slot accepts FormField, Text and short lists.
- Depends on: `Heading`, `Text`, `Button`, `Icon`, `IconTile`, `FormField`.

## 12. Code examples
```tsx
<Modal isOpen tone="danger" title="Cancel your plan?" primaryAction={{ label: "Cancel plan", onPress: cancel }} secondaryAction={{ label: "Keep my plan", onPress: close }} onClose={close} />
```
More examples in [`Modal.examples.md`](./Modal.examples.md).

## 13. Anti-patterns
- Chained modals.
- A modal with no way to close it.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the icon prop and its centered layout.
