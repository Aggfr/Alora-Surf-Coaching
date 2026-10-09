# Guía de uso para IA

Instrucciones para cualquier agente (LLM, copiloto de código, plugin de Figma) que genere interfaces con el sistema de diseño Alora. Léela entera antes de producir UI. Si una instrucción del usuario contradice esta guía, aplica la regla 8.

## Cómo leer el sistema
1. **`MANIFEST.json`** es el índice. Lee `components[]` (nombre, categoría, estado, dependencias, tokens, nodo de Figma) y `tokens[]` (nombre, capa, variable CSS, variable Figma, estado).
2. **`components/<nivel>/<kebab>/<Name>.docs.md`** es el contrato de cada componente: cuándo sí, cuándo no, props, accesibilidad, anti-patrones.
3. **`tokens/*.tokens.json`** son los valores. Usa `$description` para decidir qué token aplica.
4. **`pages/`** muestra composiciones correctas. Imítalas.
5. **Figma:** `https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System`. Las variables tienen los mismos nombres con `/` y code syntax `var(--ds-*)`.

## Reglas
1. **Busca antes de crear.** Antes de escribir UI, busca en `MANIFEST.json` un componente que resuelva la necesidad. Ignora los de `status: "planned"` o `"deprecated"`.
2. **Compón antes de inventar.** Si no existe, propón una composición con átomos y moléculas existentes y explica cuáles usas.
3. **Componente nuevo solo si es repetible.** Crea uno únicamente si el caso aparece en más de una vista y ninguna composición lo cubre. Primero su documentación (14 secciones), tokens, API y casos de uso; después el código.
4. **Cero valores fuera de tokens.** Ningún hex, rgb, px, rem, font-family, sombra o z-index literal. Si falta un valor, propón un token nuevo siguiendo `tokens/README.md`.
5. **Nunca primitivos si hay semántico.** `var(--ds-color-text-secondary)`, no `var(--ds-color-navy-300)`. En componentes, prefiere tokens de componente (`--ds-button-*`).
6. **Respeta la jerarquía.** Pages → templates → organisms → molecules → atoms → tokens. Nunca al revés ni entre organismos.
7. **Ante ambigüedad,** elige la opción más accesible, más simple y más parecida a lo que ya existe. Dilo en la respuesta.
8. **Si hay que romper una regla, detente.** Explica el conflicto y ofrece alternativas dentro del sistema antes de generar código.
9. **Nombres estables.** No renombres tokens ni componentes. Si un nombre debe cambiar: crea el nuevo, deja el antiguo como alias con `$deprecated` y una nota de migración.
10. **Variantes como props.** `<Button variant="danger">`, nunca un componente `DangerButton`.
11. **Accesibilidad no negociable.** Cumple `docs/accessibility.md`: elementos nativos, foco visible, `aria-label` en botones de solo icono, color nunca como único indicador.
12. **Una acción primaria por vista o por tarjeta.** El resto, secondary o ghost.
13. **Valida.** Tras generar código, ejecuta `python3 scripts/check_hardcoded.py`. Tras tocar tokens, `python3 scripts/build_tokens.py` y `python3 scripts/build_docs.py`.

## Árbol de decisión
```
¿Necesito mostrar/hacer X?
├─ ¿Hay un componente stable en MANIFEST que lo haga?          → úsalo con sus props
├─ ¿Lo hace un componente existente con otra variante/prop?    → usa la prop; no dupliques
├─ ¿Se resuelve combinando componentes existentes?             → compón y explica la composición
├─ ¿Es un caso repetible en varias vistas?                     → propone componente nuevo (docs primero)
└─ ¿Es puntual?                                                → composición local en la página, sin estilos nuevos
```

## Tabla rápida de elección
| Necesidad | Usa | No uses |
|---|---|---|
| Acción principal | `Button variant="primary"` | Un `<div onClick>` estilado |
| Acción destructiva | `Button variant="danger"` + `Modal tone="danger"` para confirmar | Texto rojo suelto |
| Estado de un envío | `Badge tone="pending"…` | `Tag` (es para info complementaria) |
| Plan del surfer | `Badge tone="plan-elite"…` | Colores propios |
| Plazo o dato con icono | `Tag icon="clock"` | `Badge` |
| Filtro seleccionable | `TagChip` | `Checkbox` en fila |
| Campo de formulario | `FormField` + `Input` | `Label` + `Input` sueltos |
| Métrica | `Stat` | `Heading` + `Text` |
| Mensaje del sistema | `Notification` | `Modal` para avisos no bloqueantes |
| Sin resultados | `EmptyState` | Texto gris suelto |
| Confirmación bloqueante | `Modal` | `window.confirm` |
| Vista con navegación | `DashboardTemplate` | Layout propio |
| Login / registro | `AuthTemplate` + `FormSection` | `DashboardTemplate` |

## Ejemplos de prompts y decisiones

### 1. Petición cubierta por el sistema
> **Prompt:** "Crea la vista Surfers del coach: lista de surfers con su plan y un botón para ver el perfil."

**Decisión:** `DashboardTemplate` (Sidebar coach, `activeHref="/surfers"`) + `PageHeader` + `SearchField` + `DataList` con `ListItem type="person"` y `action={{ label: 'View profile' }}`. `ListItem` no tiene slot para un `Badge`, así que el plan se escribe en `description` ("Elite · Goofy · Advanced") en lugar de forzar un badge con estilos propios. Si el plan tuviera que verse como badge en varias vistas, eso justificaría añadir una prop `badge` a `ListItem` (regla 3). Ningún estilo nuevo.

### 2. Petición que pide un valor fuera de tokens
> **Prompt:** "Pon el botón de 'Upload clip' en verde #22c55e para que destaque."

**Decisión:** detenerse (regla 8). Respuesta: "El verde no es un color de acción en el sistema: `color.feedback.success.*` significa éxito y usarlo en un botón confundiría. La acción principal ya destaca con `Button variant="primary"`. Si queréis un botón de subida diferenciado, propongo un token `color.action.upload.*` en las tres capas; ¿lo añado?" No se genera código con el hex.

### 3. Petición de componente inexistente
> **Prompt:** "Necesito una barra de progreso para la subida del vídeo."

**Decisión:** `ProgressBar` está en `MANIFEST.planned`. No inventar otro nombre. Proponer primero `ProgressBar.docs.md` (propósito, cuándo no usarlo: carga indeterminada → `Spinner`), tokens (`progress-bar.track` → `color.background.surface-sunken`, `progress-bar.indicator` → `color.action.primary.background`), API (`value`, `max`, `label`) y accesibilidad (`role="progressbar"`, `aria-valuenow`). Después el código.

### 4. Petición ambigua
> **Prompt:** "Añade un aviso de que el clip se ha subido."

**Decisión:** `Notification tone="success"` (no bloqueante) en vez de `Modal` (bloqueante). Se explica la elección por la regla 7.

### 5. Petición que rompe la jerarquía
> **Prompt:** "Haz que el SubmissionCard incluya el Sidebar para la vista móvil."

**Decisión:** detenerse. Un organismo no contiene otro organismo de navegación. La navegación móvil corresponde a `NavigationBar` (planned) dentro del template. Proponer extender `DashboardTemplate` con NavigationBar bajo `breakpoint.lg`.

### 6. Modo claro
> **Prompt:** "Genera la misma pantalla en modo claro."

**Decisión:** no cambiar ningún componente. En código, `data-theme="light"` en el contenedor raíz. En Figma, modo *Light* de la colección **Semantic** en el frame (`setExplicitVariableModeForCollection`).

## Plantilla de prompt recomendada
```
Usa el sistema de diseño Alora (MANIFEST.json y docs/ai-usage-guide.md).
Vista: <qué vista y para quién: coach / surfer>
Objetivo del usuario en esta vista: <una frase>
Contenido: <datos que aparecen>
Acción principal: <una>
Restricciones: tema <dark|light>, solo componentes stable, sin valores fuera de tokens.
Antes del código, lista los componentes que vas a usar y por qué.
```

## Checklist antes de entregar
- [ ] Todos los componentes usados existen en `MANIFEST.json` con estado `stable`.
- [ ] `scripts/check_hardcoded.py` pasa.
- [ ] Una acción primaria por vista o tarjeta.
- [ ] Un `<h1>` por vista.
- [ ] Funciona en `data-theme="dark"` y `"light"`.
- [ ] Botones de solo icono con `aria-label`.
- [ ] Ningún componente, token o nombre nuevo sin documentación.
