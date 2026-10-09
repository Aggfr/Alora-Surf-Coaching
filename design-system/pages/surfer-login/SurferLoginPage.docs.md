# SurferLoginPage

> **Nivel:** page (ejemplo de referencia) · **Figma:** [14:880](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-880)

## Propósito
Instancia de **AuthTemplate** para el log in del surfer. Referencia de validación de formularios.

## Composición
| Zona | Componente |
|---|---|
| Cabecera | `AuthTemplate` title/subtitle |
| Slot Form | `FormSection` con `FormField` + `Input` (email, password) |
| Acciones | Primary "Log in" (con loading), ghost "Create an account" |

## Decisiones
- Validación al enviar, no al teclear: los errores aparecen bajo cada campo y, si hay más de uno, un resumen `Notification tone="danger"` arriba.
- Los mensajes de error dicen cómo corregir ("Enter a valid email, like name@example.com"), no solo qué falló.
- `autoComplete` en ambos campos para gestores de contraseñas.
