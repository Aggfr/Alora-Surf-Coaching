# Textarea

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Textarea](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-177)

## 1. Nombre y categoría
`Textarea` — Atom.

## 2. Propósito
Recoge texto de varias líneas.

## 3. Cuándo usarlo
- Nota del surfer al coach, motivo de cambio de coach.

## 4. Cuándo no usarlo
- Valores de una línea: usar Input.

## 5. Anatomía
1. Contenedor (tokens `input.*`)
2. Valor o placeholder
3. Contador opcional

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `id` | `string` | — | Sí | Para asociar Label. |
| `value` | `string` | — | No | Valor controlado. |
| `maxLength` | `number` | — | No | Muestra contador 'n / max'. |
| `rows` | `number` | `4` | No | Altura inicial. |
| `hasError` | `boolean` | `false` | No | Estado de error. |
| `isDisabled` | `boolean` | `false` | No | Deshabilitado. |
| `onChange` | `(value: string) => void` | — | No | Cambio de valor. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `focus`, `error`, `disabled`

## 8. Tokens utilizados
- `input.*`
- `typography.body-medium`
- `typography.caption`
- `color.text.tertiary`

Los tokens propios del componente están en [`Textarea.tokens.json`](./Textarea.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Crece con el contenido hasta 8 filas y luego hace scroll.

## 10. Accesibilidad
- Contador enlazado con `aria-describedby` y anunciado al llegar al límite.

## 11. Reglas de composición
- Dentro de FormField o del slot Content de Modal.

## 12. Ejemplos de código
```tsx
<Textarea id="note" maxLength={280} value={note} onChange={setNote} />
```
Más ejemplos en [`Textarea.examples.md`](./Textarea.examples.md).

## 13. Anti-patrones
- Usarlo para un único dato corto.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
