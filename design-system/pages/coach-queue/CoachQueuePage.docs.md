# CoachQueuePage

> **Level:** page (reference example) · **Figma:** [Dark 14:558](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-558) · [Light 14:719](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-719)

## Purpose
A real instance of **DashboardTemplate** with the coach's review queue content. It serves as the composition reference: if you are unsure how to combine organisms, copy this pattern.

## Composition
| Area | Component | Notes |
|---|---|---|
| Navigation | `Sidebar product="coach"` | Active item: Queue. |
| Header slot | `PageHeader` + `Tag tone="highlight"` + `Avatar` | Greeting with the coach's name. |
| Metrics | `Stat` ×3 in `ds-stat-row` | Pending, In review, Reviewed this week (with trend). |
| Tools | `SearchField` + `TagChip` ×4 in `ds-toolbar` | Filter the list on the client. |
| List | `SubmissionCard` ×n in `ds-stack` | Primary action per card: Start/Continue review. |
| Empty | `EmptyState` | When the filters return nothing, with "Clear filters". |

## Decisions
- Each SubmissionCard action is primary because the PageHeader has no primary action: each card is an independent task.
- The `overdue` status uses an overdue Badge **and** a danger Tag: color is never the only signal (the text "Overdue 1 day" is there too).
- The data is sample data; in production the page receives `submissions` from the API.

## Theme variants
The Light frame in Figma (14:719) is the same page with the **Light** mode of the Semantic collection. In code: `<html data-theme="light">`.
