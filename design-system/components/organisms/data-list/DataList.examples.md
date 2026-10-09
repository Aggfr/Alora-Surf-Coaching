# DataList · Ejemplos

## Correcto
```tsx
import { DataList } from '@alora/design-system';

<DataList title="Account & Billing" icon="user" items={rows} />
```

## Incorrecto
```tsx
<table>…</table>
```
Por qué: Mezclar campos editables: usar FormSection.
