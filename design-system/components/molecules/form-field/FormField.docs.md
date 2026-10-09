# FormField

**Categoría Atomic Design:** Molecule · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [FormField](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-54)

## 1. Nombre y categoría
`FormField` — Molecule.

## 2. Propósito
Agrupa Label, Input, texto de ayuda y mensaje de error de un campo.

## 3. Cuándo usarlo
- Cualquier campo de formulario (log in, onboarding, perfil).

## 4. Cuándo no usarlo
- Búsqueda: SearchField.

## 5. Anatomía
1. Label
2. Input o Textarea
3. Texto de ayuda opcional
4. Mensaje de error con icono

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `string` | — | Sí | Texto del Label. |
| `id` | `string` | — | Sí | id del control. |
| `helperText` | `string` | — | No | Ayuda bajo el campo. |
| `errorMessage` | `string` | — | No | Si existe, el campo pasa a error. |
| `isRequired` | `boolean` | `false` | No | Obligatorio. |
| `isDisabled` | `boolean` | `false` | No | Deshabilitado. |
| `children` | `ReactElement<Input \| Textarea>` | — | Sí | Control. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `error`, `disabled`

## 8. Tokens utilizados
- `size.space.small`
- `typography.body-small`
- `color.text.tertiary`
- `color.feedback.danger.foreground`

Los tokens propios del componente están en [`FormField.tokens.json`](./FormField.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- El error aparece al salir del campo o al enviar, no mientras se escribe.

## 10. Accesibilidad
- Conecta `aria-describedby` con ayuda y error.
- El error se anuncia con `role=alert` la primera vez.

## 11. Reglas de composición
- Dentro de FormSection o del slot Content de Modal.
- Depende de: `Label`, `Input`, `Textarea`, `Text`, `Icon`.

## 12. Ejemplos de código
```tsx
<FormField id="email" label="Email" errorMessage={error}>
  <Input id="email" type="email" />
</FormField>
```
Más ejemplos en [`FormField.examples.md`](./FormField.examples.md).

## 13. Anti-patrones
- Mostrar ayuda y error a la vez.
- Mensajes de error que no dicen cómo corregir.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
