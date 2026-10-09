# AuthTemplate

> **Level:** template · **Status:** stable · **Figma:** [14:550](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-550)

## Purpose
Centered panel for signed-out flows: log in, sign up, password recovery and onboarding steps.

## When to use
- Any view before authentication, or any view whose single focus is one form.

## When not to use
- Authenticated views with navigation: use **DashboardTemplate**.
- Forms inside an existing view: use **FormSection** or **Modal**.

## Anatomy
```
┌──────────────────────────────────────────┐
│               Heading (h1)                │
│               Secondary text              │  gap: size.space.xl
│        ┌────────────────────────┐         │
│        │ [Form slot] max. 400px │         │
│        └────────────────────────┘         │
└──────────────────────────────────────────┘
   centered vertically and horizontally · color.background.canvas background
```

## Props
| Prop | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | yes | Step title ("Welcome back"). |
| `subtitle` | `string` | no | What the user gets by completing the form. |
| `children` | `ReactNode` | yes | **Form** slot. Always a `FormSection`. |

## Tokens
`color.background.canvas`, `size.layout.form-width`, `size.space.page-gutter`, `size.space.xl`.

## Composition rules
- One FormSection per view. Secondary links ("Create an account") go in the FormSection's `secondaryAction`.
- No Sidebar or PageHeader.

## Accessibility
- `<main>` landmark and a single `<h1>`.
- Initial focus goes to the first form field.

## Example
See [SurferLoginPage](../../pages/surfer-login/SurferLoginPage.docs.md).
