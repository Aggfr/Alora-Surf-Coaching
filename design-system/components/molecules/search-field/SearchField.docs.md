# SearchField

**Categoría Atomic Design:** Molecule · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [SearchField](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-92)

## 1. Nombre y categoría
`SearchField` — Molecule.

## 2. Propósito
Campo de búsqueda con icono y botón de limpiar.

## 3. Cuándo usarlo
- Buscar surfers, clips o spots en listas largas.

## 4. Cuándo no usarlo
- Filtros de valores cerrados: TagChip.

## 5. Anatomía
1. Input con icono search
2. Botón limpiar (visible con texto)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `value` | `string` | — | Sí | Texto de búsqueda. |
| `onChange` | `(value: string) => void` | — | Sí | Cambio. |
| `placeholder` | `string` | `'Search'` | No | Qué se busca: 'Search surfers'. |
| `onClear` | `() => void` | — | No | Limpia y devuelve el foco. |

## 7. Variantes y estados
- **filled:** `false`, `true`
- **Estados:** `default`, `focus`

## 8. Tokens utilizados
- `input.*`
- `color.icon.secondary`

Los tokens propios del componente están en [`SearchField.tokens.json`](./SearchField.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Escape limpia el texto.
- Los resultados se filtran con debounce de 200ms.

## 10. Accesibilidad
- Contenedor `role=search`; Input `type=search` con label oculto.
- El botón limpiar tiene `aria-label="Clear search"`.

## 11. Reglas de composición
- Encima de listas (Surfers).
- Depende de: `Input`, `Icon`, `Button`.

## 12. Ejemplos de código
```tsx
<SearchField value={q} onChange={setQ} placeholder="Search surfers" />
```
Más ejemplos en [`SearchField.examples.md`](./SearchField.examples.md).

## 13. Anti-patrones
- Búsqueda sin label accesible.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
