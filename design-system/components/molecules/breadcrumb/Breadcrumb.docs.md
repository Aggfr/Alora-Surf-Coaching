# Breadcrumb

**Categoría Atomic Design:** Molecule · **Estado:** `beta` · **Versión:** 1.0.0
**Figma:** [Breadcrumb](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-210)

## 1. Nombre y categoría
`Breadcrumb` — Molecule.

## 2. Propósito
Muestra la posición del usuario dentro de una jerarquía.

## 3. Cuándo usarlo
- Vistas de detalle de 3+ niveles (Surfers › Surfer › Clip).

## 4. Cuándo no usarlo
- Vistas de primer nivel del Sidebar.

## 5. Anatomía
1. Enlaces
2. Separadores chevron
3. Elemento actual

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `items` | `Array<{ label: string; href?: string }>` | — | Sí | El último es la página actual. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `—`

## 8. Tokens utilizados
- `color.text.brand`
- `color.text.primary`
- `color.icon.secondary`
- `typography.body-small`
- `size.space.small`

Los tokens propios del componente están en [`Breadcrumb.tokens.json`](./Breadcrumb.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Enlaces navegan; el actual no es enlace.

## 10. Accesibilidad
- `<nav aria-label="Breadcrumb">` + `<ol>`; actual con `aria-current=page`.

## 11. Reglas de composición
- Encima de PageHeader en vistas de detalle.
- Depende de: `Text`, `Icon`.

## 12. Ejemplos de código
```tsx
<Breadcrumb items={[{ label: "Surfers", href: "/surfers" }, { label: "Alejandro García" }]} />
```
Más ejemplos en [`Breadcrumb.examples.md`](./Breadcrumb.examples.md).

## 13. Anti-patrones
- Breadcrumb como sustituto del Sidebar.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `beta`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
