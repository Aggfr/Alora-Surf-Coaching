# Accessibility

Target: **WCAG 2.2 level AA** in both themes, with no setup required from whoever uses the component.

## Verified contrast
Measured on `color.background.surface-raised` (cards), compositing translucent backgrounds. Recalculate after changing any color.

| Pair | Dark | Light | Minimum |
|---|---|---|---|
| `text.primary` | 15.6:1 | 19.0:1 | 4.5 |
| `text.secondary` | 5.9:1 | 8.0:1 | 4.5 |
| `text.tertiary` | 4.6:1 | 5.4:1 | 4.5 |
| `text.brand` | 6.2:1 | 5.5:1 | 4.5 |
| Primary button: white on the `ocean.800 → ocean.700` gradient | 8.1 → 5.5:1 | same | 4.5 |
| Danger button: white on `coral.600` | 6.5:1 | 6.5:1 | 4.5 |
| Status badges (pending / in review / ready / overdue) | 7.4 · 5.3 · 6.7 · 5.2 | 4.9 · 5.0 · 5.2 · 5.8 | 4.5 |
| Plan badges (elite / progression / pay as you go) | 5.3 · 4.7 · 4.9 | 4.8 · 6.5 · 6.9 | 4.5 |
| `border.focus` on `background.canvas` | 7.5:1 | 3.3:1 | 3.0 |

### Changes from the original designs
| Element | Original | Now | Reason |
|---|---|---|---|
| Primary button gradient | `#3b8eaa → #5aaec8` (2.5–3.7:1) | `ocean.800 → ocean.700` (≥ 5.4:1) | 14px white text needs 4.5:1 |
| Tertiary text (dark) | lighter | `navy.400 #6b8fa9` (4.6:1) | Metadata was unreadable |
| Error text | base coral | `coral.300 #ea8282` | 4.5:1 on dark cards |
| Danger button background | base coral | `coral.600` | 4.5:1 with white text |

## Focus
- Every interactive element shows a `size.border.focus` (2px) outline in `color.border.focus` with a 2px offset, for keyboard users only (`:focus-visible`).
- Never `outline: none` without a replacement. In Figma, each component's `focus` state shows it.

## Keyboard
| Component | Keys |
|---|---|
| Button, TagChip, NavigationItem | Tab · Enter / Space |
| Checkbox, Switch | Tab · Space |
| Radio | Tab into the group · arrow keys between options |
| SearchField | Escape clears and keeps focus |
| Tooltip | Appears on focus, Escape closes it |
| Modal | Trapped focus (native `<dialog>`), Escape closes, focus returns to the trigger |

## Semantics
- Use the native HTML element before ARIA: `<button>`, `<a>`, `<input type="checkbox">`, `<dialog>`, `<nav>`.
- One `<h1>` per view (set by `PageHeader` or `AuthTemplate`).
- Decorative icons get `aria-hidden`; meaningful icons get a `label`.
- Icon-only buttons need an `aria-label`.
- `Notification` uses `role="status"`, or `role="alert"` for the danger tone.
- Form errors are linked with `aria-describedby` and `aria-invalid` (`FormField` does this).

## Color is never the only signal
Statuses and plans always carry text (`Overdue`, `Elite`). An overdue deadline combines a Badge, a Tag with a clock icon and text.

## Motion
With `prefers-reduced-motion: reduce`, every transition uses `motion.reduced-duration` (0ms).

## Touch targets
Minimum control height `size.layout.control-height` = 44px. The `small` variants (32px) are only for dense desktop areas, never as the only control on a mobile card.
