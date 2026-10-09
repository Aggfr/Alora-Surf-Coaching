# Alora Design System

Sistema de diseño de las plataformas **Coach** y **Surfer** de Alora Surf Coaching. Fuente de verdad para diseñadores, desarrolladores y agentes de IA: tokens W3C/DTCG, 32 componentes React documentados, templates, páginas de ejemplo y la librería en Figma.

**Figma:** [Design System](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System) · **Versión:** 1.0.0 · **Temas:** oscuro (por defecto) y claro

## Empezar
| Si eres… | Lee |
|---|---|
| Agente de IA | [docs/ai-usage-guide.md](docs/ai-usage-guide.md) y [MANIFEST.json](MANIFEST.json) |
| Diseñador | La librería en Figma y [docs/principles.md](docs/principles.md) |
| Desarrollador | Este README, [tokens/README.md](tokens/README.md) y la `.docs.md` de cada componente |

```tsx
import './dist/tokens.css';
import './styles/components.css';
import { Button, FormField, Input } from './index';

<html data-theme="dark">   {/* o "light" */}
  <Button variant="primary" leadingIcon="upload" onPress={upload}>Upload clip</Button>
</html>
```

## Estructura
```
design-system/
├── MANIFEST.json                 Índice de tokens y componentes (esquema: docs/manifest.schema.json)
├── index.ts                      API pública
├── tokens/
│   ├── primitives.tokens.json    Capa 1 · valores base (198)
│   ├── semantic.tokens.json      Capa 2 · intención, tema oscuro (130)
│   ├── semantic.light.tokens.json         tema claro (72 overrides de color)
│   ├── component.tokens.json     Capa 3 · por componente (86)
│   └── README.md
├── dist/                         Generado: tokens.css, tokens.resolved.json
├── styles/components.css         Clases ds-* que solo leen var(--ds-*)
├── components/
│   ├── atoms/<kebab>/            Name.tsx · Name.tokens.json · Name.docs.md · Name.examples.md
│   ├── molecules/<kebab>/
│   └── organisms/<kebab>/
├── templates/                    DashboardTemplate, AuthTemplate
├── pages/                        CoachQueuePage, SurferLoginPage (ejemplos)
├── lib/cx.ts
├── docs/
│   ├── principles.md
│   ├── naming-conventions.md
│   ├── atomic-design.md
│   ├── accessibility.md
│   ├── ai-usage-guide.md
│   └── manifest.schema.json
└── scripts/
    ├── build_tokens.py           Valida capas y referencias, genera dist/
    ├── component_specs.py        Especificación de los 32 componentes
    ├── build_docs.py             Genera .docs.md, .examples.md, .tokens.json y MANIFEST.json
    └── check_hardcoded.py        Falla si hay valores fuera de tokens
```

## Inventario
- **Atoms (16):** Button, Icon, Label, Text, Heading, Input, Textarea, Checkbox, Radio, Switch, Avatar, Badge, Tag, Spinner, Divider, Tooltip
- **Molecules (9):** FormField, SearchField, ListItem, TagChip, Stat, Notification, Breadcrumb, Pagination, NavigationItem
- **Organisms (7):** Sidebar, PageHeader, SubmissionCard, DataList, EmptyState, Modal, FormSection
- **Templates (2):** DashboardTemplate, AuthTemplate
- **Pages (2):** CoachQueuePage (oscuro y claro), SurferLoginPage
- **Planned:** NavigationBar, DataTable, CommandPalette, Footer, Select, ProgressBar, ReviewCard

## Figma
| Página | Contenido |
|---|---|
| 📘 Cover | Portada y versión |
| 🎨 Foundations | Colores, tipografía, espaciado, radios, elevación |
| ⚛️ Atoms · 🧬 Molecules · 🦠 Organisms | Component sets con variantes y propiedades, todo enlazado a variables |
| 📐 Templates | Dashboard y Auth con slots |
| 📄 Pages | Coach · Queue (Dark y Light) y Surfer · Log in |

Variables: colecciones **Primitives** (oculta al publicar), **Semantic** (modos Dark / Light) y **Component**. Cada variable tiene code syntax `var(--ds-…)` para que Dev Mode muestre el token correcto. 12 estilos de texto y 4 de efecto.

## Flujo de trabajo
```bash
python3 scripts/build_tokens.py     # tras editar tokens/*.json
python3 scripts/build_docs.py       # tras editar scripts/component_specs.py
python3 scripts/check_hardcoded.py  # antes de cada commit
```
Los `.docs.md`, `.examples.md` y `.tokens.json` de componentes se generan desde `scripts/component_specs.py`: edita la especificación, no los archivos generados.

## Decisiones abiertas
1. ~~Degradado del botón primario~~ **Decidido (2026-10-09):** se mantiene `ocean.800 → ocean.700` por contraste AA (el original daba 2.5–3.7:1).
2. **Tipografía de lectura:** Inter sustituye a Apple SD Gothic Neo (fuente de sistema de macOS, no disponible en web ni Windows); se mantiene como fallback.
3. **Color del plan Progression:** Coach lo pinta violeta y Surfer en amarillo sol. El sistema usa violeta en el Badge de plan y deja el amarillo para el Tag `highlight` del surfer.
4. **Tema claro:** propuesto por el sistema; los diseños originales solo son oscuros.

## Changelog
- **1.0.0** (2026-10-09): versión inicial extraída de Coach Platform y Surfer Platform.
