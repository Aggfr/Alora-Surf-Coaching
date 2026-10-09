# TopBar · Examples

## Do
```tsx
import { TopBar } from '@alora/design-system';

<TopBar title="New submission" onBack={goBack} />
```

## Don't
```tsx
<div><a href="..">‹</a> New submission</div>
```
Why: A back button that loses unsaved changes without asking.
