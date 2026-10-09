# DataList · Examples

## Do
```tsx
import { DataList } from '@alora/design-system';

<DataList title="Account & Billing" icon="user" items={rows} />
```

## Don't
```tsx
<table>…</table>
```
Why: Mixing in editable fields: use FormSection.
