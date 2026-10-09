# Atomic Design en Alora

```
tokens ─► atoms ─► molecules ─► organisms ─► templates ─► pages
```
Cada nivel solo puede usar el nivel inmediatamente inferior **o cualquiera por debajo** (un organismo puede usar átomos directamente). Nunca hacia arriba ni en horizontal entre organismos. `scripts/build_docs.py` falla si una dependencia rompe esta regla.

## Criterios de clasificación
| Nivel | Pregunta que lo define | Puede contener | No puede contener |
|---|---|---|---|
| **Tokens** | ¿Es una decisión de valor reutilizable? | Valores y referencias | Comportamiento, markup |
| **Atom** | ¿Es la pieza mínima con significado propio en la UI? | Solo tokens (y otro átomo como Icon o Spinner) | Lógica de negocio, layout de página |
| **Molecule** | ¿Combina átomos para **una** única tarea? | Átomos | Llamadas a API, contexto de aplicación, otras moléculas complejas |
| **Organism** | ¿Es una sección de interfaz reconocible y reutilizable? | Moléculas y átomos, slots | Datos reales, rutas concretas |
| **Template** | ¿Define la estructura de una vista sin contenido? | Organismos y slots | Texto o datos reales |
| **Page** | ¿Es una instancia concreta con contenido real? | Un template relleno | Estilos propios |

**Regla de desempate:** si dudas entre dos niveles, elige el más bajo. Es más fácil promover un componente que dividirlo.

## Tokens
Ver [tokens/README.md](../tokens/README.md). 198 primitivos, 130 semánticos (72 con valor claro), 86 de componente.

## Atoms (16)
| Componente | Propósito | Consume |
|---|---|---|
| [Button](../components/atoms/button/Button.docs.md) | Dispara una acción en la vista actual. | Icon, Spinner |
| [Icon](../components/atoms/icon/Icon.docs.md) | Muestra un pictograma de línea del set de Alora. | — |
| [Label](../components/atoms/label/Label.docs.md) | Nombra un control de formulario. | — |
| [Text](../components/atoms/text/Text.docs.md) | Muestra texto de lectura y metadatos con un rol tipográfico y un tono semántico. | — |
| [Heading](../components/atoms/heading/Heading.docs.md) | Titula una vista, sección o tarjeta respetando la jerarquía del documento. | — |
| [Input](../components/atoms/input/Input.docs.md) | Recoge una línea de texto. | Icon |
| [Textarea](../components/atoms/textarea/Textarea.docs.md) | Recoge texto de varias líneas. | — |
| [Checkbox](../components/atoms/checkbox/Checkbox.docs.md) | Permite marcar una o varias opciones independientes. | Icon, Label |
| [Radio](../components/atoms/radio/Radio.docs.md) | Permite elegir una sola opción dentro de un grupo. | Label |
| [Switch](../components/atoms/switch/Switch.docs.md) | Activa o desactiva un ajuste con efecto inmediato. | Label |
| [Avatar](../components/atoms/avatar/Avatar.docs.md) | Representa a una persona con sus iniciales. | — |
| [Badge](../components/atoms/badge/Badge.docs.md) | Etiqueta no interactiva que muestra un estado o un plan. | — |
| [Tag](../components/atoms/tag/Tag.docs.md) | Píldora informativa con icono opcional. | Icon |
| [Spinner](../components/atoms/spinner/Spinner.docs.md) | Indica una espera de duración indeterminada. | — |
| [Divider](../components/atoms/divider/Divider.docs.md) | Separa grupos de contenido. | — |
| [Tooltip](../components/atoms/tooltip/Tooltip.docs.md) | Describe brevemente un control al hacer hover o focus. | — |

## Molecules (9)
| Componente | Propósito | Consume |
|---|---|---|
| [FormField](../components/molecules/form-field/FormField.docs.md) | Agrupa Label, Input, texto de ayuda y mensaje de error de un campo. | Label, Input, Textarea, Text, Icon |
| [SearchField](../components/molecules/search-field/SearchField.docs.md) | Campo de búsqueda con icono y botón de limpiar. | Input, Icon, Button |
| [ListItem](../components/molecules/list-item/ListItem.docs.md) | Fila de una lista con tres formatos: persona, definición o navegación. | Avatar, Heading, Text, Button, Icon, Divider |
| [TagChip](../components/molecules/tag-chip/TagChip.docs.md) | Chip seleccionable o eliminable. | Text, Icon |
| [Stat](../components/molecules/stat/Stat.docs.md) | Muestra una métrica con su etiqueta y una tendencia opcional. | Text, Icon |
| [Notification](../components/molecules/notification/Notification.docs.md) | Comunica un mensaje del sistema con tono, acción y cierre. | Icon, Heading, Text, Button |
| [Breadcrumb](../components/molecules/breadcrumb/Breadcrumb.docs.md) | Muestra la posición del usuario dentro de una jerarquía. | Text, Icon |
| [Pagination](../components/molecules/pagination/Pagination.docs.md) | Navega entre páginas de una lista larga. | Button, Text |
| [NavigationItem](../components/molecules/navigation-item/NavigationItem.docs.md) | Entrada de navegación principal con icono y etiqueta. | Icon, Text |

Regla: una molécula no tiene lógica de negocio, no llama a APIs ni lee contexto de aplicación. Todo llega por props.

## Organisms (7)
| Componente | Propósito | Consume |
|---|---|---|
| [Sidebar](../components/organisms/sidebar/Sidebar.docs.md) | Navegación principal fija en escritorio. | NavigationItem |
| [PageHeader](../components/organisms/page-header/PageHeader.docs.md) | Cabecera de cada vista con título, subtítulo y acciones. | Heading, Text, Tag, Avatar |
| [SubmissionCard](../components/organisms/submission-card/SubmissionCard.docs.md) | Resume un clip enviado para revisión y su acción principal. | Avatar, Heading, Text, Badge, Tag, Button |
| [DataList](../components/organisms/data-list/DataList.docs.md) | Sección de datos de solo lectura con título y filas de definición. | ListItem, Heading, Icon |
| [EmptyState](../components/organisms/empty-state/EmptyState.docs.md) | Explica por qué una zona está vacía y ofrece la siguiente acción. | Icon, Text, Button |
| [Modal](../components/organisms/modal/Modal.docs.md) | Diálogo para una decisión o tarea corta que interrumpe el flujo. | Heading, Text, Button, Icon, FormField |
| [FormSection](../components/organisms/form-section/FormSection.docs.md) | Formulario completo con campos y acciones. | FormField, Button, Notification |

### Correspondencia con la lista de organismos solicitada
| Solicitado | En Alora | Estado |
|---|---|---|
| Header | **PageHeader** (saludo + acciones de la vista) | stable |
| Sidebar | **Sidebar** | stable |
| FormSection | **FormSection** | stable |
| EmptyState | **EmptyState** | stable |
| Modal | **Modal** | stable |
| ProductCardGrid | **SubmissionCard** + `ds-stack` (el "producto" de Alora es el clip enviado) y **DataList** | stable |
| NavigationBar | Navegación inferior móvil | planned |
| DataTable | Tabla con orden y paginación | planned |
| CommandPalette | Búsqueda global ⌘K | planned |
| Footer | Pie de vistas públicas | planned |

Los organismos *planned* están en `MANIFEST.json → planned` para que nadie los invente con otro nombre. Ninguno de los dos productos los necesita todavía.

### Slots y límites de personalización
- **Sidebar:** `items` sobrescribe la navegación (máx. 5). No admite contenido libre.
- **PageHeader:** slot `actions` para máx. 2 elementos (Tag, Avatar o Button).
- **SubmissionCard:** sin slots; la estructura es fija para que la cola sea escaneable.
- **DataList:** filas solo de tipo `ListItem`.
- **EmptyState:** un mensaje y como mucho una acción.
- **Modal:** slot `children` (Content) para FormField o texto; acciones fijas en el pie.
- **FormSection:** slot `children` solo para FormField; acciones fijas.

## Templates (2)
| Template | Slots | Figma |
|---|---|---|
| [DashboardTemplate](../templates/dashboard/DashboardTemplate.docs.md) | header, content | 14:511 |
| [AuthTemplate](../templates/auth/AuthTemplate.docs.md) | form | 14:550 |

## Pages (2, ejemplos)
| Página | Template | Figma |
|---|---|---|
| [CoachQueuePage](../pages/coach-queue/CoachQueuePage.docs.md) | DashboardTemplate | 14:558 (dark) · 14:719 (light) |
| [SurferLoginPage](../pages/surfer-login/SurferLoginPage.docs.md) | AuthTemplate | 14:880 |

Una página no se convierte en componente reutilizable salvo que el patrón se repita en varias vistas; entonces se extrae el organismo, no la página.
