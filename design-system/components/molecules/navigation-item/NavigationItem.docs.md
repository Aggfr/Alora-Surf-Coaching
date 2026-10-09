# NavigationItem

**Categoría Atomic Design:** Molecule · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [NavigationItem](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-293)

## 1. Nombre y categoría
`NavigationItem` — Molecule.

## 2. Propósito
Entrada de navegación principal con icono y etiqueta.

## 3. Cuándo usarlo
- Dentro de Sidebar.

## 4. Cuándo no usarlo
- Acciones: Button.

## 5. Anatomía
1. Icono 28px
2. Etiqueta
3. Divisor inferior

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `string` | — | Sí | Destino. |
| `icon` | `IconName` | — | Sí | Icono. |
| `href` | `string` | — | Sí | URL. |
| `isActive` | `boolean` | `false` | No | Página actual. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `hover`, `active`

## 8. Tokens utilizados
- `navigation-item.*`
- `color.action.ghost.background-hover`
- `size.space.large`

Los tokens propios del componente están en [`NavigationItem.tokens.json`](./NavigationItem.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Hover tinta el fondo.

## 10. Accesibilidad
- `<a>` con `aria-current=page` si está activo.
- Activo se distingue por color y por icono relleno de marca, no solo por color de texto.

## 11. Reglas de composición
- Solo dentro de Sidebar.
- Depende de: `Icon`, `Text`.

## 12. Ejemplos de código
```tsx
<NavigationItem label="Queue" icon="play-circle" href="/queue" isActive />
```
Más ejemplos en [`NavigationItem.examples.md`](./NavigationItem.examples.md).

## 13. Anti-patrones
- Más de un activo a la vez.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
