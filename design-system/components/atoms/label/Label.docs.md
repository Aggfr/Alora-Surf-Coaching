# Label

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Label](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-11)

## 1. Nombre y categoría
`Label` — Atom.

## 2. Propósito
Nombra un control de formulario.

## 3. Cuándo usarlo
- Encima de Input, Textarea o a la derecha de Checkbox, Radio y Switch.

## 4. Cuándo no usarlo
- Como título de sección: usar Heading.
- Como texto de ayuda: usar Text dentro de FormField.

## 5. Anatomía
1. Texto (`typography.label`)
2. Marca de requerido opcional (*)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Sí | Nombre del campo. |
| `htmlFor` | `string` | — | Sí | id del control asociado. |
| `isRequired` | `boolean` | `false` | No | Añade * y requiere aria-required en el control. |
| `isDisabled` | `boolean` | `false` | No | Atenúa el label (`color.text.disabled`). |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `disabled`

## 8. Tokens utilizados
- `typography.label`
- `color.text.primary`
- `color.text.disabled`
- `color.feedback.danger.foreground`

Los tokens propios del componente están en [`Label.tokens.json`](./Label.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Clic en el label enfoca o activa el control.

## 10. Accesibilidad
- `<label for>` nativo.
- El asterisco es decorativo (`aria-hidden`); la obligatoriedad se comunica con `aria-required`.

## 11. Reglas de composición
- Solo dentro de FormField o junto a Checkbox / Radio / Switch.

## 12. Ejemplos de código
```tsx
<Label htmlFor="email" isRequired>Email</Label>
```
Más ejemplos en [`Label.examples.md`](./Label.examples.md).

## 13. Anti-patrones
- Usar el placeholder como label.
- Labels en mayúsculas: el estilo ya define la tipografía.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
