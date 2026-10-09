# AuthTemplate

> **Level:** template · **Status:** stable · **Figma:** [70:1073](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=70-1073)

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
│          Logo (optional, hasLogo)         │
│               Heading (h1)                │
│               Secondary text              │  gap: size.space.xl
│        ┌────────────────────────┐         │
│        │ [Form slot] max. 400px │         │
│        └────────────────────────┘         │
└──────────────────────────────────────────┘
   centered vertically and horizontally · canvas background, or the auth-background
   Illustration behind the panel when background="illustrated"
```

## Props
| Prop | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | no | Step title ("Welcome back"). Leave it out when the slot brings its own title (Stepper steps, ResultState). |
| `subtitle` | `string` | no | What the user gets by completing the form. |
| `hasLogo` | `boolean` | no | Shows the Logo above the title (log in, sign up, profile selector). |
| `background` | `'plain' \| 'illustrated'` | no | `illustrated` draws the mountains and sun Illustration behind the panel. Default `plain`. |
| `children` | `ReactNode` | yes | **Form** slot: a `FormSection`, an onboarding step (Stepper + OptionCards) or a `ResultState`. |

## Tokens
`color.background.canvas`, `color.background.surface`, `size.layout.form-width`, `size.space.page-gutter`, `size.space.xl`.

## Composition rules
- One FormSection, onboarding step or ResultState per view. Secondary links ("Create an account") go in the FormSection's `secondaryAction`.
- No Sidebar or PageHeader.

## Accessibility
- `<main>` landmark and a single `<h1>`.
- The Logo is an image named "Alora"; the illustration is decorative.
- Initial focus goes to the first form field.

## Example
See [SurferLoginPage](../../pages/surfer-login/SurferLoginPage.docs.md).
