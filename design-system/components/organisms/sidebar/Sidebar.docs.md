# Sidebar

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Sidebar](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-84)

## 1. Nombre y categoría
`Sidebar` — Organism.

## 2. Propósito
Navegación principal fija en escritorio.

## 3. Cuándo usarlo
- Todas las vistas autenticadas de Coach y Surfer en ≥ 1024px.

## 4. Cuándo no usarlo
- Móvil: NavigationBar inferior (planificado).

## 5. Anatomía
1. Lista de NavigationItem
2. Logo al pie

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `product` | `'coach' \| 'surfer'` | — | Sí | Define los items por defecto. |
| `activeHref` | `string` | — | Sí | Item activo. |
| `items` | `Array<NavigationItemProps>` | `según product` | No | Sobrescribe los items (máx. 5). |

## 7. Variantes y estados
- **product:** `coach`, `surfer`
- **Estados:** `—`

## 8. Tokens utilizados
- `sidebar.background`
- `sidebar.width`
- `navigation-item.*`

Los tokens propios del componente están en [`Sidebar.tokens.json`](./Sidebar.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Fijo al hacer scroll (`z-index.sticky`).

## 10. Accesibilidad
- `<nav aria-label="Main">`; un solo `aria-current`.

## 11. Reglas de composición
- Slot de items (máx. 5) + Logo.
- No personalizable: ancho, fondo, posición del logo.
- Depende de: `NavigationItem`.

## 12. Ejemplos de código
```tsx
<Sidebar product="coach" activeHref="/queue" />
```
Más ejemplos en [`Sidebar.examples.md`](./Sidebar.examples.md).

## 13. Anti-patrones
- Añadir acciones (botones) al Sidebar.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
