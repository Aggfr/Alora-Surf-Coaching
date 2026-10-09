# SurferLoginPage

> **Level:** page (reference example) · **Figma:** [14:880](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-880)

## Purpose
An instance of **AuthTemplate** for the surfer log in. The reference for form validation.

## Composition
| Area | Component |
|---|---|
| Header | `AuthTemplate` title/subtitle |
| Form slot | `FormSection` with `FormField` + `Input` (email, password) |
| Actions | Primary "Log in" (with loading), ghost "Create an account" |

## Decisions
- Validation runs on submit, not while typing: errors appear under each field and, when there is more than one, a `Notification tone="danger"` summary appears on top.
- Error messages say how to fix the problem ("Enter a valid email, like name@example.com"), not just what failed.
- `autoComplete` on both fields for password managers.
