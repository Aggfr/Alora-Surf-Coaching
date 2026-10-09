# Notification

**Categoría Atomic Design:** Molecule · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Notification](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-209)

## 1. Nombre y categoría
`Notification` — Molecule.

## 2. Propósito
Comunica un mensaje del sistema con tono, acción y cierre.

## 3. Cuándo usarlo
- Éxito de un envío, plazo cercano, error de subida, info de proceso.

## 4. Cuándo no usarlo
- Errores de un campo: FormField.
- Decisiones bloqueantes: Modal.

## 5. Anatomía
1. Icono en contenedor tintado
2. Título
3. Descripción
4. Acción opcional
5. Cerrar opcional

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `tone` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | No | Tono. |
| `title` | `string` | — | Sí | Mensaje principal. |
| `description` | `string` | — | No | Detalle. |
| `action` | `{ label: string; onPress: () => void }` | — | No | Acción. |
| `onDismiss` | `() => void` | — | No | Muestra botón cerrar. |

## 7. Variantes y estados
- **tone:** `info`, `success`, `warning`, `danger`
- **Estados:** `visible`, `dismissed`

## 8. Tokens utilizados
- `notification.background`
- `notification.border`
- `notification.radius`
- `color.feedback.*`
- `typography.heading-small`
- `typography.body-small`

Los tokens propios del componente están en [`Notification.tokens.json`](./Notification.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- info/success se pueden autocerrar a los 6s; warning/danger no.

## 10. Accesibilidad
- info/success `role=status`; warning/danger `role=alert`.
- El cierre es un botón con `aria-label="Dismiss"`.

## 11. Reglas de composición
- Pila en la esquina superior derecha (`z-index.toast`) o en línea sobre el contenido.
- Depende de: `Icon`, `Heading`, `Text`, `Button`.

## 12. Ejemplos de código
```tsx
<Notification tone="success" title="Submission sent" description="Your coach has 48h to review your clip." />
```
Más ejemplos en [`Notification.examples.md`](./Notification.examples.md).

## 13. Anti-patrones
- Más de 3 notificaciones visibles.
- Mensajes de error que desaparecen solos.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
