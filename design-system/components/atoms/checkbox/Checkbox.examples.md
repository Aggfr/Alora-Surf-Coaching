# Checkbox · Examples

## Do
```tsx
import { Checkbox } from '@alora/design-system';

<Checkbox label="Remember me" isChecked={remember} onChange={setRemember} />
```

## Don't
```tsx
<div onClick={toggle} className="box" />
```
Why: A checkbox that triggers an immediate action.
