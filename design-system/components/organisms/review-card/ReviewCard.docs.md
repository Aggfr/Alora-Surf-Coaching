# ReviewCard

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [ReviewCard](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=63-400)

## 1. Name and category
`ReviewCard` — Organism.

## 2. Purpose
Delivered review in History, collapsed to a summary and expanded to show the coach note.

## 3. When to use
- Surfer History: each reviewed submission.

## 4. When not to use
- Submissions still waiting: SubmissionCard.

## 5. Anatomy
1. Toggle row: play IconTile, clip title, dates, status Badge, chevron
2. Panel: coach IconTile initial, coach name, note, primary Button

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `clipTitle` | `string` | — | Yes | Clip or submission title. |
| `submittedAt` | `string` | — | Yes | Submission date. |
| `reviewedAt` | `string` | — | Yes | Review date. |
| `statusLabel` | `string` | `'Reviewed'` | No | Badge text. |
| `coach` | `{ name: string }` | — | Yes | Coach who reviewed it. |
| `note` | `string` | — | Yes | Coach summary. |
| `action` | `{ label: string; icon?: IconName; onPress: () => void }` | — | Yes | Main action ('Watch review'). |
| `isExpanded` | `boolean` | — | No | Controlled open state. |
| `defaultExpanded` | `boolean` | `false` | No | Initial state when uncontrolled. |
| `onToggle` | `(isExpanded: boolean) => void` | — | No | Toggle callback. |

## 7. Variants and states
- **expanded:** `false`, `true`
- **States:** `collapsed`, `expanded`, `hover`, `focus`

## 8. Tokens used
- `card.*`
- `icon-tile.*`
- `color.action.highlight.*`
- `typography.heading-small`
- `typography.body-small`
- `motion.transition-fast`

The component's own tokens live in [`ReviewCard.tokens.json`](./ReviewCard.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Clicking the row, Enter or Space toggles the panel.

## 10. Accessibility
- Disclosure pattern: the toggle is a `<button aria-expanded aria-controls>` inside the h3.
- The collapsed panel is `hidden`, so it leaves the tab order.

## 11. Composition rules
- Stacked list in History with a `size.space.medium` gap.
- Depends on: `IconTile`, `Badge`, `Button`, `Icon`, `Text`.

## 12. Code examples
```tsx
<ReviewCard clipTitle="Frontside snap" submittedAt="Sep 2" reviewedAt="Sep 3" coach={{ name: "Alejandro" }} note="Great speed, open your shoulders earlier." action={{ label: "Watch review", icon: "play-circle", onPress: open }} />
```
More examples in [`ReviewCard.examples.md`](./ReviewCard.examples.md).

## 13. Anti-patterns
- Nesting links inside the toggle button.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
