# Input · Examples

## Do
```tsx
import { Input } from '@alora/design-system';

<Input id="email" type="email" value={email} onChange={setEmail} />
```

## Don't
```tsx
<input style={{ border: "1px solid red" }} placeholder="Email" />
```
Why: Placeholder as the only label.
