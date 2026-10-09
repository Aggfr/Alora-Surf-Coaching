# Badge

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Badge](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-139)

## 1. Nombre y categoría
`Badge` — Atom.

## 2. Propósito
Etiqueta no interactiva que muestra un estado o un plan.

## 3. Cuándo usarlo
- Estado de un envío (Pending, In review, Review ready, Overdue).
- Plan del surfer (Pay as you go, Elite, Progression).

## 4. Cuándo no usarlo
- Información con icono o tiempo: Tag.
- Elementos seleccionables o eliminables: TagChip.

## 5. Anatomía
1. Contenedor (`badge.radius`, padding `badge.padding-*`)
2. Texto en mayúsculas (`typography.overline`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `children` | `string` | — | Sí | Texto del estado. |
| `tone` | `'pending' \| 'in-review' \| 'review-ready' \| 'overdue' \| 'neutral' \| 'plan-pay-as-you-go' \| 'plan-elite' \| 'plan-progression'` | `'neutral'` | No | Tono semántico. |

## 7. Variantes y estados
- **tone:** `pending`, `in-review`, `review-ready`, `overdue`, `neutral`, `plan-pay-as-you-go`, `plan-elite`, `plan-progression`
- **Estados:** `—`

## 8. Tokens utilizados
- `badge.radius`
- `badge.padding-horizontal`
- `badge.padding-vertical`
- `badge.typography`
- `color.status.*`
- `color.plan.*`
- `color.feedback.neutral.*`

Los tokens propios del componente están en [`Badge.tokens.json`](./Badge.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo.

## 10. Accesibilidad
- El texto nombra el estado; el color solo refuerza.
- Contraste ≥ 4.5:1 en todos los tonos.

## 11. Reglas de composición
- SubmissionCard (estado y plan), Sidebar futuro (contadores).

## 12. Ejemplos de código
```tsx
<Badge tone="in-review">In review</Badge>
```
Más ejemplos en [`Badge.examples.md`](./Badge.examples.md).

## 13. Anti-patrones
- Badge clicable.
- Inventar tonos fuera de la lista.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
