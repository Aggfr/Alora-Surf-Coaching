# Textarea · Examples

## Do
```tsx
import { Textarea } from '@alora/design-system';

<Textarea id="note" maxLength={280} value={note} onChange={setNote} />
```

## Don't
```tsx
<textarea style={{ height: 112 }} />
```
Why: Using it for a single short value.
