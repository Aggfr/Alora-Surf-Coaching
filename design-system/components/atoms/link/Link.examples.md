# Link · Examples

## Do
```tsx
import { Link } from '@alora/design-system';

<Link tone="danger" size="small" onPress={openCancel}>Cancel your plan</Link>
```

## Don't
```tsx
<span className="red" onClick={cancel}>Cancel</span>
```
Why: Using Link for the main call to action.
