# Modal

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Modal](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-348)

## 1. Nombre y categoría
`Modal` — Organism.

## 2. Propósito
Diálogo para una decisión o tarea corta que interrumpe el flujo.

## 3. Cuándo usarlo
- Cancelar plan, pedir cambio de coach, confirmar acciones destructivas.

## 4. Cuándo no usarlo
- Información no bloqueante: Notification.
- Formularios largos: página propia.

## 5. Anatomía
1. Título + botón cerrar
2. Descripción
3. Slot Content
4. Pie: acción secundaria + principal

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `isOpen` | `boolean` | — | Sí | Visibilidad. |
| `title` | `string` | — | Sí | Título. |
| `description` | `string` | — | No | Contexto. |
| `tone` | `'default' \| 'danger'` | `'default'` | No | danger usa Button danger. |
| `primaryAction` | `{ label: string; onPress: () => void }` | — | Sí | Acción principal. |
| `secondaryAction` | `{ label: string; onPress: () => void }` | — | No | Cancelar. |
| `onClose` | `() => void` | — | Sí | Cierre (X, Escape, overlay). |
| `children` | `ReactNode` | — | No | Slot Content. |

## 7. Variantes y estados
- **tone:** `default`, `danger`
- **Estados:** `open`, `closed`

## 8. Tokens utilizados
- `modal.background`
- `modal.overlay`
- `modal.radius`
- `modal.padding`
- `modal.shadow`
- `z-index.modal`
- `motion.transition-enter`

Los tokens propios del componente están en [`Modal.tokens.json`](./Modal.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Entra con `motion.transition-enter`; Escape y overlay cierran (salvo tone=danger, donde el overlay no cierra).

## 10. Accesibilidad
- `role=dialog`, `aria-modal=true`, `aria-labelledby` al título.
- Foco atrapado; vuelve al disparador al cerrar.
- El primer foco va al primer campo o a la acción secundaria en danger.

## 11. Reglas de composición
- Slot Content admite FormField, Text y listas cortas.
- Depende de: `Heading`, `Text`, `Button`, `Icon`, `FormField`.

## 12. Ejemplos de código
```tsx
<Modal isOpen tone="danger" title="Cancel your plan?" primaryAction={{ label: "Cancel plan", onPress: cancel }} secondaryAction={{ label: "Keep my plan", onPress: close }} onClose={close} />
```
Más ejemplos en [`Modal.examples.md`](./Modal.examples.md).

## 13. Anti-patrones
- Modales encadenados.
- Modal sin forma de cerrar.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
