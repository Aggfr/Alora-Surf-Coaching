# PageHeader · Examples

## Do
```tsx
import { PageHeader } from '@alora/design-system';

<PageHeader title="Welcome, Alejandro" subtitle="Connect with your surfers" actions={<Avatar name="Coach" tone="elite" />} />
```

## Don't
```tsx
<h1 style={{ fontSize: 40 }}>Welcome</h1>
```
Why: More than two actions; use a menu.
