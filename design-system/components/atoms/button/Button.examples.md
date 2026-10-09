# Button · Examples

## Do
```tsx
import { Button } from '@alora/design-system';

<Button variant="primary" leadingIcon="eye" onPress={openReview}>View & Download</Button>
```

## Don't
```tsx
<Button style={{ background: "#3b8eaa" }}>OK</Button>
```
Why: Two primary buttons in the same view.
