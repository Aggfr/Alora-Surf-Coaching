# EmptyState

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [EmptyState](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-277)

## 1. Name and category
`EmptyState` — Organism.

## 2. Purpose
Explains why an area is empty and offers the next action.

## 3. When to use
- Empty queue, empty history, no surfers.

## 4. When not to use
- Errors: danger Notification.

## 5. Anatomy
1. Decorative icon or Illustration
2. Optional title
3. Message
4. Optional hint
5. Optional action (Button)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | No | Short headline (“Nothing reviewed yet”). |
| `message` | `string` | — | Yes | Current state in the user's language. |
| `hint` | `string` | — | No | Small line with the next step. |
| `icon` | `IconName` | `'info'` | No | Icon. |
| `illustration` | `IllustrationName` | — | No | Illustration instead of the icon. |
| `variant` | `'card' \| 'inline'` | `'card'` | No | inline: no card, left aligned, inside another section. |
| `action` | `{ label: string; icon?: IconName; variant?: 'primary' \| 'secondary'; onPress: () => void }` | — | No | Next step. |

## 7. Variants and states
- **action:** `false`, `true`
- **variant:** `card`, `inline`
- **States:** `—`

## 8. Tokens used
- `card.background`
- `card.radius`
- `color.background.canvas`
- `color.text.tertiary`
- `size.space.xl`

The component's own tokens live in [`EmptyState.tokens.json`](./EmptyState.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Only the action is interactive.

## 10. Accessibility
- Icon is `aria-hidden`; the message is real text.

## 11. Composition rules
- Takes the place of the empty list.
- Depends on: `Icon`, `Illustration`, `Text`, `Button`.

## 12. Code examples
```tsx
<EmptyState message="No submissions waiting for review." />
```
More examples in [`EmptyState.examples.md`](./EmptyState.examples.md).

## 13. Anti-patterns
- Messages that blame the user.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added title, hint, illustration, the inline variant and the action variant.
