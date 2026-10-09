# AuthTemplate

> **Nivel:** template · **Estado:** stable · **Figma:** [14:550](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-550)

## Propósito
Panel centrado para flujos sin sesión: log in, sign up, recuperación de contraseña y pasos de onboarding.

## Cuándo usarlo
- Cualquier vista previa a la autenticación o con un único formulario como foco.

## Cuándo NO usarlo
- Vistas autenticadas con navegación: usar **DashboardTemplate**.
- Formularios dentro de una vista existente: usar **FormSection** o **Modal**.

## Anatomía
```
┌──────────────────────────────────────────┐
│               Heading (h1)                │
│               Text secundario             │  gap: size.space.xl
│        ┌────────────────────────┐         │
│        │ [Slot form] máx. 400px │         │
│        └────────────────────────┘         │
└──────────────────────────────────────────┘
   centrado vertical y horizontal · fondo color.background.canvas
```

## Props
| Prop | Tipo | Requerido | Descripción |
|---|---|---|---|
| `title` | `string` | sí | Título del paso ("Welcome back"). |
| `subtitle` | `string` | no | Qué consigue el usuario al completar el formulario. |
| `children` | `ReactNode` | sí | Slot **Form**. Siempre un `FormSection`. |

## Tokens
`color.background.canvas`, `size.layout.form-width`, `size.space.page-gutter`, `size.space.xl`.

## Reglas de composición
- Un único FormSection por vista. Los enlaces secundarios ("Create an account") van como `secondaryAction` del FormSection.
- Sin Sidebar ni PageHeader.

## Accesibilidad
- `<main>` como landmark y `<h1>` único.
- El foco inicial va al primer campo del formulario.

## Ejemplo
Ver [SurferLoginPage](../../pages/surfer-login/SurferLoginPage.docs.md).
