# DataList

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [DataList](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-224)

## 1. Nombre y categoría
`DataList` — Organism.

## 2. Propósito
Sección de datos de solo lectura con título y filas de definición.

## 3. Cuándo usarlo
- Account & Billing, Surf Profile, Legal.

## 4. Cuándo no usarlo
- Datos tabulares comparables: DataTable (planificado).

## 5. Anatomía
1. Título con icono (Heading medium)
2. Tarjeta con ListItem type=definition o navigation

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `title` | `string` | — | Sí | Título de sección. |
| `icon` | `IconName` | — | No | Icono del título. |
| `items` | `Array<ListItemProps>` | — | Sí | Filas. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `—`

## 8. Tokens utilizados
- `card.background`
- `card.border`
- `card.radius`
- `color.background.brand-subtle`
- `size.space.medium`

Los tokens propios del componente están en [`DataList.tokens.json`](./DataList.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Las acciones de fila son las únicas interactivas.

## 10. Accesibilidad
- `<section aria-labelledby>` con `<h2>` y `<dl>`.

## 11. Reglas de composición
- Apilar secciones con gap `size.space.xl`.
- Depende de: `ListItem`, `Heading`, `Icon`.

## 12. Ejemplos de código
```tsx
<DataList title="Account & Billing" icon="user" items={rows} />
```
Más ejemplos en [`DataList.examples.md`](./DataList.examples.md).

## 13. Anti-patrones
- Mezclar campos editables: usar FormSection.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
