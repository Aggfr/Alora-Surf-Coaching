# SubmissionCard

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [SubmissionCard](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-223)

## 1. Nombre y categoría
`SubmissionCard` — Organism.

## 2. Propósito
Resume un clip enviado para revisión y su acción principal.

## 3. Cuándo usarlo
- Cola del coach, lista de envíos del surfer.

## 4. Cuándo no usarlo
- Revisión ya entregada en History: ReviewCard (planificado).

## 5. Anatomía
1. Cabecera: Avatar + nombre + Badge de plan + Badge de estado
2. Título del clip + fecha + metadatos
3. Nota del surfer (opcional)
4. Pie: Tag de plazo + Button primary

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `surfer` | `{ name: string; plan: 'pay-as-you-go' \| 'elite' \| 'progression' }` | — | Sí | Quién envía. |
| `status` | `'pending' \| 'in-review' \| 'review-ready' \| 'overdue'` | — | Sí | Estado. |
| `clipTitle` | `string` | — | Sí | Maniobra. |
| `submittedAt` | `string` | — | Sí | Fecha formateada. |
| `meta` | `string` | — | No | Stance · nivel · spot. |
| `note` | `string` | — | No | Mensaje del surfer. |
| `deadline` | `{ label: string; tone: 'on-track' \| 'due-soon' \| 'overdue' }` | — | Sí | Plazo. |
| `action` | `{ label: string; icon?: IconName; onPress: () => void }` | — | Sí | Acción principal. |

## 7. Variantes y estados
- **deadline:** `on-track`, `due-soon`, `overdue`
- **Estados:** `—`

## 8. Tokens utilizados
- `card.background`
- `card.border`
- `card.radius`
- `card.padding`
- `card.gap`
- `color.background.surface-sunken`
- `size.layout.content-width`

Los tokens propios del componente están en [`SubmissionCard.tokens.json`](./SubmissionCard.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Solo el botón es interactivo; la tarjeta no es clicable entera.

## 10. Accesibilidad
- `<article>` con el título como h3 y `aria-labelledby`.

## 11. Reglas de composición
- En lista: columna con gap `size.space.large`.
- Personalizable: textos, tonos y acción. No personalizable: orden de bloques.
- Depende de: `Avatar`, `Heading`, `Text`, `Badge`, `Tag`, `Button`.

## 12. Ejemplos de código
```tsx
<SubmissionCard surfer={{ name: "Khata Kraiwan", plan: "elite" }} status="in-review" clipTitle="Frontside snap" submittedAt="31 ago 2026, 18:01" deadline={{ label: "1h 9m left", tone: "due-soon" }} action={{ label: "View & Download", icon: "eye", onPress }} />
```
Más ejemplos en [`SubmissionCard.examples.md`](./SubmissionCard.examples.md).

## 13. Anti-patrones
- Dos botones primary en la tarjeta.
- Ocultar el estado.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
