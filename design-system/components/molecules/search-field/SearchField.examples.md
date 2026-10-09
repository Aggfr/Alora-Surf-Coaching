# SearchField · Examples

## Do
```tsx
import { SearchField } from '@alora/design-system';

<SearchField value={q} onChange={setQ} placeholder="Search surfers" />
```

## Don't
```tsx
<Input placeholder="Search…" />
```
Why: Search without an accessible label.
