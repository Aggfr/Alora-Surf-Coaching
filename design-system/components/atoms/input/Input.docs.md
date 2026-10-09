# Input

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Input](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-161)

## 1. Nombre y categoría
`Input` — Atom.

## 2. Propósito
Recoge una línea de texto.

## 3. Cuándo usarlo
- Email, contraseña, nombre, búsqueda (a través de SearchField).

## 4. Cuándo no usarlo
- Texto largo: usar Textarea.
- Opciones cerradas: usar Radio o un Select (planificado).

## 5. Anatomía
1. Contenedor (fondo `input.background`, borde `input.border.*`, radio `input.radius`)
2. Icono inicial opcional
3. Valor o placeholder
4. Icono final opcional (mostrar contraseña)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `id` | `string` | — | Sí | Para asociar Label y mensajes. |
| `value` | `string` | — | No | Valor controlado. |
| `placeholder` | `string` | — | No | Ejemplo de formato, nunca sustituye al Label. |
| `type` | `'text' \| 'email' \| 'password' \| 'search' \| 'tel'` | `'text'` | No | Tipo HTML. |
| `leadingIcon` | `IconName` | — | No | Icono antes del valor. |
| `trailingIcon` | `IconName` | — | No | Icono o acción después del valor. |
| `hasError` | `boolean` | `false` | No | Borde de error y `aria-invalid`. |
| `isDisabled` | `boolean` | `false` | No | Deshabilitado. |
| `onChange` | `(value: string) => void` | — | No | Cambio de valor. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `hover`, `focus`, `error`, `disabled`, `filled`

## 8. Tokens utilizados
- `input.background`
- `input.foreground`
- `input.placeholder`
- `input.border.default`
- `input.border.hover`
- `input.border.focus`
- `input.border.error`
- `input.radius`
- `input.padding-horizontal`
- `input.typography`
- `size.layout.control-height`
- `size.border.focus`

Los tokens propios del componente están en [`Input.tokens.json`](./Input.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Focus: borde 2px `input.border.focus`.
- Error: borde 2px `input.border.error`; el mensaje lo pinta FormField.

## 10. Accesibilidad
- Siempre con Label asociado (lo garantiza FormField).
- `aria-invalid` y `aria-describedby` hacia ayuda y error.
- `autocomplete` correcto (email, current-password).

## 11. Reglas de composición
- Usar dentro de FormField. Fuera de un formulario, solo a través de SearchField.
- Depende de: `Icon`.

## 12. Ejemplos de código
```tsx
<Input id="email" type="email" value={email} onChange={setEmail} />
```
Más ejemplos en [`Input.examples.md`](./Input.examples.md).

## 13. Anti-patrones
- Placeholder como única etiqueta.
- Bordes rojos sin mensaje de error.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
