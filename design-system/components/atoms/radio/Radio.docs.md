# Radio

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Radio](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-71)

## 1. Nombre y categoría
`Radio` — Atom.

## 2. Propósito
Permite elegir una sola opción dentro de un grupo.

## 3. Cuándo usarlo
- 2–5 opciones excluyentes visibles (stance Regular/Goofy, nivel).

## 4. Cuándo no usarlo
- Más de 5 opciones: Select (planificado).
- Opciones múltiples: Checkbox.

## 5. Anatomía
1. Círculo 18×18
2. Punto interior al seleccionar
3. Label

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `ReactNode` | — | Sí | Texto visible. |
| `value` | `string` | — | Sí | Valor de la opción. |
| `name` | `string` | — | Sí | Nombre del grupo. |
| `isSelected` | `boolean` | `false` | No | Seleccionado. |
| `isDisabled` | `boolean` | `false` | No | Deshabilitado. |

## 7. Variantes y estados
- **selected:** `false`, `true`
- **Estados:** `default`, `focus`, `disabled`

## 8. Tokens utilizados
- `radio.border`
- `radio.border-checked`
- `radio.dot`
- `color.border.focus`

Los tokens propios del componente están en [`Radio.tokens.json`](./Radio.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Flechas mueven la selección dentro del grupo.

## 10. Accesibilidad
- `<input type=radio>` en `<fieldset>` con `<legend>` o `role=radiogroup` con nombre.

## 11. Reglas de composición
- Siempre en grupo de al menos 2.
- Depende de: `Label`.

## 12. Ejemplos de código
```tsx
<Radio name="stance" value="goofy" label="Goofy" isSelected={stance === "goofy"} />
```
Más ejemplos en [`Radio.examples.md`](./Radio.examples.md).

## 13. Anti-patrones
- Un radio suelto.
- Grupo sin opción por defecto cuando el dato es obligatorio.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
