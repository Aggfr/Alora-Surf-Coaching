# CoachQueuePage

> **Nivel:** page (ejemplo de referencia) · **Figma:** [Dark 14:558](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-558) · [Light 14:719](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-719)

## Propósito
Instancia real de **DashboardTemplate** con contenido de la cola de revisión del coach. Sirve como referencia de composición: si dudas de cómo combinar organismos, copia este patrón.

## Composición
| Zona | Componente | Notas |
|---|---|---|
| Navegación | `Sidebar product="coach"` | Item activo: Queue. |
| Slot Header | `PageHeader` + `Tag tone="highlight"` + `Avatar` | Saludo con el nombre del coach. |
| Métricas | `Stat` ×3 en `ds-stat-row` | Pending, In review, Reviewed this week (con trend). |
| Herramientas | `SearchField` + `TagChip` ×4 en `ds-toolbar` | Filtran la lista en cliente. |
| Lista | `SubmissionCard` ×n en `ds-stack` | Acción primaria por card: Start/Continue review. |
| Vacío | `EmptyState` | Cuando los filtros no devuelven resultados, con "Clear filters". |

## Decisiones
- La acción de cada SubmissionCard es primary porque el PageHeader no tiene acción primaria: cada card es una tarea independiente.
- El estado `overdue` usa Badge overdue **y** Tag danger: el color nunca es el único indicador (también el texto "Overdue 1 day").
- Los datos son de ejemplo; en producción la página recibe `submissions` desde la API.

## Variantes de tema
El frame Light de Figma (14:719) es la misma página con el modo **Light** de la colección Semantic. En código: `<html data-theme="light">`.
