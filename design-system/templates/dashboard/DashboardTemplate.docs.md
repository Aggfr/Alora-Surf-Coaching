# DashboardTemplate

> **Level:** template · **Status:** stable · **Figma:** [14:511](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-511)

## Purpose
Structure of every authenticated Coach and Surfer view: fixed navigation on the left and a single content column. It defines where things go, not what content they hold.

## When to use
- Home, Queue, Surfers, Calendar, Sessions, Profile: any view with a Sidebar.

## When not to use
- Log in, sign up, password recovery or onboarding: use **AuthTemplate**.
- Full-screen views (review video player): a dedicated template is pending.

## Anatomy
```
┌──────────┬──────────────────────────────────────────┐
│          │  [Header slot] PageHeader                 │  gap: size.space.xl
│ Sidebar  │  ┌─────────────────────────────────────┐  │
│ 116px    │  │ [Content slot] max. 810px           │  │  gap: size.space.large
│          │  │ Stats · filters · list / cards       │  │
│          │  └─────────────────────────────────────┘  │
└──────────┴──────────────────────────────────────────┘
          padding: size.space.page-gutter
```

## Props
| Prop | Type | Required | Description |
|---|---|---|---|
| `navigation` | `SidebarProps` | yes | `product` ('coach' \| 'surfer') and `activeHref`. |
| `header` | `ReactNode` | yes | **Header** slot: a `PageHeader`, a `TopBar` (detail screens) or a `SectionHeader` (simple pages). |
| `children` | `ReactNode` | yes | **Content** slot. Organisms stacked in one column. |
| `width` | `'narrow' \| 'wide'` | no | `narrow` keeps the 810px column (default). `wide` uses the full width (Schedule, Surfers). |

## Tokens
`color.background.canvas`, `size.space.page-gutter`, `size.space.xl`, `size.space.large`, `size.layout.content-width`, `size.layout.sidebar-width` (through Sidebar).

## Composition rules
- The Content slot only accepts organisms or rows of molecules (`ds-stat-row`, `ds-toolbar`, `ds-stack`). Never loose atoms.
- One primary action per view. If the PageHeader has a primary Button, cards use secondary.
- Do not nest a DashboardTemplate inside another.

## Responsive
Below `breakpoint.lg` (1024px) the Sidebar will be replaced by **NavigationBar** (planned). Until then, the content column takes 100% of the available width.

## Accessibility
- `<nav aria-label="Main">` + `<main>`: one landmark of each per view.
- The `PageHeader` provides the page's only `<h1>`.
- Add a "Skip to content" link in the app if the Sidebar grows beyond 5 items.

## Example
```tsx
<DashboardTemplate
  navigation={{ product: 'coach', activeHref: '/' }}
  header={<PageHeader title="Welcome, Alejandro" subtitle="3 clips are waiting." />}
>
  <div className="ds-stat-row">…</div>
  <div className="ds-stack">{cards}</div>
</DashboardTemplate>
```
