# FormField · Examples

## Do
```tsx
import { FormField } from '@alora/design-system';

<FormField id="email" label="Email" errorMessage={error}>
  <Input id="email" type="email" />
</FormField>
```

## Don't
```tsx
<Label>Email</Label><Input /><span className="red">Error</span>
```
Why: Showing helper text and an error at the same time.
