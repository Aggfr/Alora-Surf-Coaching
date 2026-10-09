# Button

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Button](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=8-425)

## 1. Nombre y categoría
`Button` — Atom.

## 2. Propósito
Dispara una acción en la vista actual.

## 3. Cuándo usarlo
- Enviar un formulario, confirmar o cancelar una decisión.
- Abrir un flujo (Send new submission, View & Download).
- Una sola variante primary por vista: la acción principal.

## 4. Cuándo no usarlo
- Para navegar a otra URL: usar un enlace (`as="a"`) o `ListItem` type=navigation.
- Para alternar un ajuste: usar `Switch`.
- Para filtros seleccionables: usar `TagChip`.

## 5. Anatomía
1. Contenedor (fondo, borde, radio `button.radius`)
2. Icono inicial opcional (`Icon`)
3. Label (estilo `typography.button`)
4. Icono final opcional (`Icon`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Sí | Texto visible del botón. Verbo + objeto: 'Send request'. |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | No | Jerarquía visual de la acción. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | No | Altura 32 / 44 / 52 px. |
| `leadingIcon` | `IconName` | — | No | Icono antes del texto. |
| `trailingIcon` | `IconName` | — | No | Icono después del texto. |
| `isDisabled` | `boolean` | `false` | No | Deshabilita el botón (aria-disabled). |
| `isLoading` | `boolean` | `false` | No | Sustituye el icono inicial por Spinner y bloquea clics. |
| `isFullWidth` | `boolean` | `false` | No | Ocupa el ancho del contenedor (formularios). |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | No | Tipo HTML. |
| `onPress` | `() => void` | — | No | Acción al pulsar (click, Enter, Espacio). |

## 7. Variantes y estados
- **variant:** `primary`, `secondary`, `ghost`, `danger`
- **size:** `small`, `medium`, `large`
- **Estados:** `default`, `hover`, `pressed`, `focus`, `disabled`, `loading`

## 8. Tokens utilizados
- `button.primary.*`
- `button.secondary.*`
- `button.ghost.*`
- `button.danger.*`
- `button.disabled.*`
- `button.radius`
- `button.gap`
- `button.padding-horizontal.*`
- `button.typography`
- `elevation.focus`
- `size.layout.control-height*`

Los tokens propios del componente están en [`Button.tokens.json`](./Button.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Hover y pressed cambian el fondo con `motion.transition-fast`.
- Enter y Espacio disparan `onPress`.
- En loading el ancho no cambia y `aria-busy=true`.

## 10. Accesibilidad
- Elemento `<button>` nativo; si navega, `<a>` con el mismo estilo.
- Foco visible: borde 2px `color.border.focus` por fuera.
- Botones solo con icono requieren `aria-label` y un `Tooltip`.
- Contraste del texto ≥ 4.5:1 en todas las variantes (por eso primary usa ocean 700→600).
- Disabled usa `aria-disabled` para seguir siendo descubrible por lector de pantalla.

## 11. Reglas de composición
- Máximo un primary por vista o por Modal.
- En un grupo, la acción principal va a la derecha (Modal) o arriba y a ancho completo (FormSection).
- No anidar elementos interactivos dentro.
- Depende de: `Icon`, `Spinner`.

## 12. Ejemplos de código
```tsx
<Button variant="primary" leadingIcon="eye" onPress={openReview}>View & Download</Button>
```
Más ejemplos en [`Button.examples.md`](./Button.examples.md).

## 13. Anti-patrones
- Dos botones primary en la misma vista.
- Cambiar colores con estilos sueltos en lugar de `variant`.
- Usar `ghost` para acciones destructivas.
- Texto genérico ('Click here', 'OK').

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
