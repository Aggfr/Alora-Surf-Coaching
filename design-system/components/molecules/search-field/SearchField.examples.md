# SearchField · Ejemplos

## Correcto
```tsx
import { SearchField } from '@alora/design-system';

<SearchField value={q} onChange={setQ} placeholder="Search surfers" />
```

## Incorrecto
```tsx
<Input placeholder="Search…" />
```
Por qué: Búsqueda sin label accesible.
