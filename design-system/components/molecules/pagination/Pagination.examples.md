# Pagination · Examples

## Do
```tsx
import { Pagination } from '@alora/design-system';

<Pagination page={2} pageCount={8} onPageChange={setPage} />
```

## Don't
```tsx
<a>Next</a>
```
Why: Pagination with a single page.
