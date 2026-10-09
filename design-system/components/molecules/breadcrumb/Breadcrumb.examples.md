# Breadcrumb · Ejemplos

## Correcto
```tsx
import { Breadcrumb } from '@alora/design-system';

<Breadcrumb items={[{ label: "Surfers", href: "/surfers" }, { label: "Alejandro García" }]} />
```

## Incorrecto
```tsx
<p>Surfers / Alejandro</p>
```
Por qué: Breadcrumb como sustituto del Sidebar.
