# ResultState

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [ResultState](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=63-338)

## 1. Name and category
`ResultState` — Organism.

## 2. Purpose
Full-screen outcome of a task: success with a summary, or failure with a way to retry.

## 3. When to use
- Submission sent, Review sent, Account created.
- Submission failed, Upload failed.

## 4. When not to use
- Small confirmations that do not leave the screen: Notification.
- Empty lists: EmptyState.

## 5. Anatomy
1. IconTile circle with halo (check on solid, or alert on danger)
2. Title
3. Description
4. Optional summary slot (SummaryRow, StatGroup)
5. Optional hint
6. Primary and secondary full-width Buttons

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `tone` | `'success' \| 'danger'` | — | Yes | Outcome. |
| `title` | `string` | — | Yes | What happened ('Submission sent!'). |
| `description` | `ReactNode` | — | No | Next steps. |
| `hint` | `string` | — | No | Small line under the description. |
| `children` | `ReactNode` | — | No | Summary of what happened. |
| `primaryAction` | `{ label: string; onPress: () => void }` | — | Yes | Main next step ('Back to home', 'Try again'). |
| `secondaryAction` | `{ label: string; onPress: () => void }` | — | No | Alternative. |

## 7. Variants and states
- **tone:** `success`, `danger`
- **States:** `—`

## 8. Tokens used
- `icon-tile.*`
- `result-state.halo-success`
- `result-state.halo-danger`
- `typography.display`
- `typography.heading-large`
- `size.layout.form-width`
- `size.space.xl`

The component's own tokens live in [`ResultState.tokens.json`](./ResultState.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Only the buttons are interactive.

## 10. Accessibility
- The title is the h1 of the screen; the screen that shows the result moves focus to it so the outcome is announced.
- The icon is decorative: the title states the outcome.

## 11. Composition rules
- Centered in AuthTemplate or in the narrow DashboardTemplate column.
- Depends on: `IconTile`, `Heading`, `Text`, `Button`.

## 12. Code examples
```tsx
<ResultState tone="success" title="Submission sent!" description="Your coach will review your clips." primaryAction={{ label: "Back to home", onPress: goHome }}><SummaryRow icon="video" label="Clips" value="2 clips · 1:46" /></ResultState>
```
More examples in [`ResultState.examples.md`](./ResultState.examples.md).

## 13. Anti-patterns
- A success screen with no way forward.
- Error results that do not say how to fix it.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
