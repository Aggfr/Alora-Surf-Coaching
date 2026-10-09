# Checkbox

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Checkbox](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-44)

## 1. Nombre y categoría
`Checkbox` — Atom.

## 2. Propósito
Permite marcar una o varias opciones independientes.

## 3. Cuándo usarlo
- Aceptar términos, 'Remember me', seleccionar varios elementos.

## 4. Cuándo no usarlo
- Opción única entre varias: Radio.
- Ajuste con efecto inmediato: Switch.

## 5. Anatomía
1. Caja 18×18 (`checkbox.radius`)
2. Marca check o guion (indeterminate)
3. Label

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `ReactNode` | — | Sí | Texto visible. |
| `isChecked` | `boolean \| 'indeterminate'` | `false` | No | Estado. |
| `isDisabled` | `boolean` | `false` | No | Deshabilitado. |
| `onChange` | `(checked: boolean) => void` | — | No | Cambio. |

## 7. Variantes y estados
- **checked:** `false`, `true`, `indeterminate`
- **Estados:** `default`, `focus`, `disabled`

## 8. Tokens utilizados
- `checkbox.border`
- `checkbox.background-checked`
- `checkbox.foreground-checked`
- `checkbox.radius`
- `color.border.focus`

Los tokens propios del componente están en [`Checkbox.tokens.json`](./Checkbox.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Clic en caja o label alterna.
- Espacio alterna con foco.

## 10. Accesibilidad
- `<input type=checkbox>` nativo.
- Indeterminate con `aria-checked=mixed`.
- Área clicable ≥ 24×24 incluyendo label.

## 11. Reglas de composición
- Grupos dentro de `<fieldset>` con `<legend>`.
- Depende de: `Icon`, `Label`.

## 12. Ejemplos de código
```tsx
<Checkbox label="Remember me" isChecked={remember} onChange={setRemember} />
```
Más ejemplos en [`Checkbox.examples.md`](./Checkbox.examples.md).

## 13. Anti-patrones
- Checkbox que dispara una acción inmediata.
- Sin label visible.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
