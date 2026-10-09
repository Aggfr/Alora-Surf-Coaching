# DashboardTemplate

> **Nivel:** template · **Estado:** stable · **Figma:** [14:511](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-511)

## Propósito
Estructura de todas las vistas autenticadas de Coach y Surfer: navegación fija a la izquierda y una única columna de contenido. Define dónde va cada cosa, no qué contenido lleva.

## Cuándo usarlo
- Home, Queue, Surfers, Calendar, Sessions, Profile: cualquier vista con Sidebar.

## Cuándo NO usarlo
- Login, registro, recuperación u onboarding: usar **AuthTemplate**.
- Vistas a pantalla completa (reproductor de vídeo de revisión): pendiente de template propio.

## Anatomía
```
┌──────────┬──────────────────────────────────────────┐
│          │  [Slot header] PageHeader                 │  gap: size.space.xl
│ Sidebar  │  ┌─────────────────────────────────────┐  │
│ 116px    │  │ [Slot content] máx. 810px           │  │  gap: size.space.large
│          │  │ Stats · filtros · lista / cards      │  │
│          │  └─────────────────────────────────────┘  │
└──────────┴──────────────────────────────────────────┘
          padding: size.space.page-gutter
```

## Props
| Prop | Tipo | Requerido | Descripción |
|---|---|---|---|
| `navigation` | `SidebarProps` | sí | `product` ('coach' \| 'surfer') y `activeHref`. |
| `header` | `ReactNode` | sí | Slot **Header**. Siempre un `PageHeader`. |
| `children` | `ReactNode` | sí | Slot **Content**. Organismos apilados en una columna. |

## Tokens
`color.background.canvas`, `size.space.page-gutter`, `size.space.xl`, `size.space.large`, `size.layout.content-width`, `size.layout.sidebar-width` (vía Sidebar).

## Reglas de composición
- El slot Content solo admite organismos o filas de moléculas (`ds-stat-row`, `ds-toolbar`, `ds-stack`). Nunca átomos sueltos.
- Una sola acción primaria por vista. Si el PageHeader tiene un Button primary, las cards usan secondary.
- No anidar un DashboardTemplate dentro de otro.

## Responsive
Por debajo de `breakpoint.lg` (1024px) la Sidebar se sustituirá por **NavigationBar** (planned). Mientras tanto la columna de contenido ocupa el 100% del ancho disponible.

## Accesibilidad
- `<nav aria-label="Main">` + `<main>`: landmarks únicos por vista.
- El `PageHeader` aporta el único `<h1>` de la página.
- Añadir un enlace "Skip to content" en la app si la Sidebar crece de 5 items.

## Ejemplo
```tsx
<DashboardTemplate
  navigation={{ product: 'coach', activeHref: '/queue' }}
  header={<PageHeader title="Welcome, Alejandro" subtitle="3 clips are waiting." />}
>
  <div className="ds-stat-row">…</div>
  <div className="ds-stack">{cards}</div>
</DashboardTemplate>
```
