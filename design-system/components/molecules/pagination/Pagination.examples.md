# Pagination · Ejemplos

## Correcto
```tsx
import { Pagination } from '@alora/design-system';

<Pagination page={2} pageCount={8} onPageChange={setPage} />
```

## Incorrecto
```tsx
<a>Next</a>
```
Por qué: Paginación con 1 página.
