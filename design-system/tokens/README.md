# Tokens

Fuente de verdad de todas las decisiones visuales de Alora. Formato [W3C Design Tokens (DTCG)](https://design-tokens.github.io/community-group/format/): cada token tiene `$type`, `$value` y `$description`; las referencias se escriben `{ruta.del.token}`.

## Jerarquía

```
primitives.tokens.json      Capa 1 · QUÉ valores existen          color.ocean.700 = #2f7189
        ▲ referencia
semantic.tokens.json        Capa 2 · PARA QUÉ sirven (tema oscuro) color.action.primary.background → {color.ocean.700}
semantic.light.tokens.json            mismas rutas, tema claro     color.text.primary → {color.navy.950}
        ▲ referencia
component.tokens.json       Capa 3 · DÓNDE se aplican            button.primary.background → {color.action.primary.background}
```

| Capa | Archivo | Contiene | Quién la usa |
|---|---|---|---|
| Primitiva | `primitives.tokens.json` | Escalas sin intención: colores 50–950, `size.space.100` (= 4px), `typography.size.md`, sombras, motion, z-index, breakpoints. | **Solo** la capa semántica. |
| Semántica | `semantic.tokens.json` + `semantic.light.tokens.json` | Intención de uso: `color.background.surface`, `color.text.secondary`, `color.feedback.danger.*`, `size.space.medium`, roles tipográficos, `elevation.*`, `layer.*`. | Componentes y layouts. |
| Componente | `component.tokens.json` | Decisiones de un componente concreto: `button.radius`, `input.border.focus`, `card.padding`. | Solo ese componente. |

### Cuándo usar cada capa
- **Construyendo un componente nuevo:** consume tokens de componente si existen; si no, semánticos. Nunca primitivos.
- **Componiendo una página o layout:** solo semánticos (`size.space.*`, `size.layout.*`, `color.background.*`).
- **Cambiando la marca o el tema:** solo se tocan primitivas o el mapeo semántico. Los componentes no cambian.
- **Excepción documentada:** ninguna en v1.0.0. `scripts/check_hardcoded.py` falla si el CSS lee un primitivo.

## Temas
- **Oscuro** es el tema por defecto (los diseños de Coach y Surfer son oscuros): `:root` o `[data-theme="dark"]`.
- **Claro** redefine únicamente las rutas `color.*` de la capa semántica: `[data-theme="light"]`.
- Los tokens de componente no cambian por tema: apuntan a semánticos y heredan el tema automáticamente.
- En Figma: colección **Semantic** con modos *Dark* y *Light*; colección **Component** con un único modo.

## Escalas
| Escala | Regla | Ejemplo |
|---|---|---|
| `size.space.*` | Número = múltiplo de 4px × 100 | `size.space.400` = 16px |
| `size.radius.*` | Igual que space; `full` = 9999px | `size.radius.300` = 12px |
| `color.<tono>.*` | 50 (más claro) → 950 (más oscuro) | `color.navy.900` |
| `color.alpha.<tono>.<pct>` | Opacidad en % | `color.alpha.ocean.18` |
| `typography.size.*` | Talla de camiseta 2xs → 4xl | `typography.size.md` = 16px |

Los nombres semánticos usan palabras (`small`, `medium`, `large`) para que la intención no dependa del valor.

## Cómo añadir un token sin romper nada
1. **¿Existe ya?** Busca en `MANIFEST.json` (`tokens[].name`) y en las tres capas. Reutilizar siempre gana.
2. **Primitiva solo si falta el valor.** Añádela en su escala (no inventes `size.space.350` si `300` o `400` sirven).
3. **Semántico con intención.** Nombre `categoria.propiedad.elemento.estado`, sin abreviaturas (`background`, no `bg`). Escribe un `$description` que diga *cuándo* usarlo.
4. **Si es de color, defínelo en ambos temas** (`semantic.tokens.json` y `semantic.light.tokens.json`) y verifica contraste AA (ver `docs/accessibility.md`).
5. **Token de componente solo si el componente necesita desviarse del semántico** o si quieres un punto de ajuste estable para él. Debe referenciar un semántico.
6. Ejecuta `python3 scripts/build_tokens.py` (valida referencias y capas, genera `dist/`) y `python3 scripts/build_docs.py` (actualiza `MANIFEST.json`).
7. Añade la variable en Figma en la colección equivalente, con el mismo nombre usando `/` (`color/text/primary`) y code syntax `var(--ds-color-text-primary)`.

## Renombrar o eliminar (deprecación)
Nunca borres ni renombres un token publicado en una sola versión:
1. Crea el token nuevo.
2. Convierte el antiguo en alias del nuevo y añade `$deprecated` con la instrucción de migración:
   ```json
   "muted": {
     "$type": "color",
     "$value": "{color.text.tertiary}",
     "$deprecated": "Usar color.text.tertiary. 'muted' era el nombre en Coach Platform; se mantiene como alias hasta la v2.0.0."
   }
   ```
3. `MANIFEST.json` lo marca `status: "deprecated"`. Elimínalo en la siguiente versión mayor.

## Salidas generadas (`dist/`, no editar a mano)
- `dist/tokens.css`: variables `--ds-*` para web, con bloques de tema.
- `dist/tokens.resolved.json`: todos los tokens con su valor final por tema, para otras plataformas.
