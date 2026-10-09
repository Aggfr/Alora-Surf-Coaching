# Link

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Link](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_Link)

## 1. Name and category
`Link` — Atom.

## 2. Purpose
Text action that navigates or triggers a light, secondary action.

## 3. When to use
- Forgot your password?, Log in / Sign up switches, Terms and Privacy.
- Row actions in lists (Cancel your plan, Delete clip, Change coach).
- Talk to your coach next to a section title.

## 4. When not to use
- The main action of a view or form: Button.
- An action that needs weight next to other buttons: Button secondary.

## 5. Anatomy
1. Optional leading icon
2. Underlined-on-hover text
3. Optional trailing icon

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Yes | Link text: says where it goes or what it does. |
| `href` | `string` | — | No | Destination. Without it, Link renders a `<button>`. |
| `onPress` | `() => void` | — | No | Action when there is no href. |
| `tone` | `'brand' \| 'danger' \| 'neutral'` | `'brand'` | No | danger for destructive row actions (Delete clip, Cancel your plan). |
| `size` | `'small' \| 'medium'` | `'medium'` | No | body-small or body-medium. |
| `leadingIcon` | `IconName` | — | No | Icon before the text. |
| `trailingIcon` | `IconName` | — | No | Icon after the text. |

## 7. Variants and states
- **tone:** `brand`, `danger`, `neutral`
- **size:** `small`, `medium`
- **States:** `default`, `hover`, `focus`

## 8. Tokens used
- `color.text.brand`
- `color.feedback.danger.foreground`
- `color.text.primary`
- `typography.label`
- `typography.body-small`
- `size.space.2xs`

The component's own tokens live in [`Link.tokens.json`](./Link.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Hover underlines the text.
- Enter activates it; a button-link also responds to Space.

## 10. Accessibility
- `<a href>` when it navigates, `<button type=button>` when it acts: never a clickable `<span>`.
- Visible focus ring.
- Text alone must describe the destination; avoid 'Click here'.

## 11. Composition rules
- Inline in Text, in ListItem and ClipItem actions, in SectionHeader actions, under FormSection.
- Depends on: `Icon`.

## 12. Code examples
```tsx
<Link tone="danger" size="small" onPress={openCancel}>Cancel your plan</Link>
```
More examples in [`Link.examples.md`](./Link.examples.md).

## 13. Anti-patterns
- Using Link for the main call to action.
- A red Button for a row action: use Link tone=danger.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
