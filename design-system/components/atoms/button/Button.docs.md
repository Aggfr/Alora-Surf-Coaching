# Button

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Button](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=8-425)

## 1. Name and category
`Button` — Atom.

## 2. Purpose
Triggers an action in the current view.

## 3. When to use
- Submit a form, confirm or cancel a decision.
- Start a flow (Send new submission, View & Download).
- Only one primary variant per view: the main action.

## 4. When not to use
- To navigate to another URL: use a link (`as="a"`) or `ListItem` type=navigation.
- To toggle a setting: use `Switch`.
- For selectable filters: use `TagChip`.

## 5. Anatomy
1. Container (background, border, radius `button.radius`)
2. Optional leading icon (`Icon`)
3. Label (`typography.button` style)
4. Optional trailing icon (`Icon`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Yes | Visible button text. Verb + object: 'Send request'. |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger' \| 'highlight'` | `'primary'` | No | Visual hierarchy of the action. highlight is the warm secondary (Change coach, Get more submissions). |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | No | Height 32 / 44 / 52 px. |
| `leadingIcon` | `IconName` | — | No | Icon before the text. |
| `trailingIcon` | `IconName` | — | No | Icon after the text. |
| `isDisabled` | `boolean` | `false` | No | Disables the button (aria-disabled). |
| `isLoading` | `boolean` | `false` | No | Replaces the leading icon with a Spinner and blocks clicks. |
| `isFullWidth` | `boolean` | `false` | No | Fills the container width (forms). |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | No | HTML type. |
| `onPress` | `() => void` | — | No | Action on press (click, Enter, Space). |

## 7. Variants and states
- **variant:** `primary`, `secondary`, `ghost`, `danger`, `highlight`
- **size:** `small`, `medium`, `large`
- **States:** `default`, `hover`, `pressed`, `focus`, `disabled`, `loading`

## 8. Tokens used
- `button.primary.*`
- `button.secondary.*`
- `button.ghost.*`
- `button.danger.*`
- `button.highlight.*`
- `button.disabled.*`
- `button.primary.opacity-disabled`
- `button.radius`
- `button.gap`
- `button.padding-horizontal.*`
- `button.typography`
- `elevation.focus`
- `size.layout.control-height*`

The component's own tokens live in [`Button.tokens.json`](./Button.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Hover and pressed change the background with `motion.transition-fast`.
- Enter and Space trigger `onPress`.
- While loading the width does not change and `aria-busy=true`.

## 10. Accessibility
- Native `<button>` element; if it navigates, an `<a>` with the same style.
- Visible focus: 2px `color.border.focus` outline outside the button.
- Icon-only buttons need an `aria-label` and a `Tooltip`.
- Primary keeps the Coach Platform CTA gradient (ocean 600→400, #3b8eaa → #5aaec8). White text on it is 3.7–2.5:1, below WCAG AA 4.5:1: a known exception chosen by product design. Secondary, ghost and danger meet 4.5:1.
- Disabled uses `aria-disabled` so screen readers can still find it. A disabled primary keeps its gradient at 50% opacity (Create account before the form is valid); the other variants use `button.disabled.*`.

## 11. Composition rules
- At most one primary per view or per Modal.
- In a group, the main action goes on the right (Modal) or on top at full width (FormSection).
- Do not nest interactive elements inside.
- Depends on: `Icon`, `Spinner`.

## 12. Code examples
```tsx
<Button variant="primary" leadingIcon="eye" onPress={openReview}>View & Download</Button>
```
More examples in [`Button.examples.md`](./Button.examples.md).

## 13. Anti-patterns
- Two primary buttons in the same view.
- Changing colors with ad-hoc styles instead of `variant`.
- Using `ghost` for destructive actions.
- A red text-only action: use Link tone=danger.
- Generic text ('Click here', 'OK').

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the highlight variant.
- 2026-10-09 · 1.1.0 · A disabled primary now keeps its faded brand gradient.
