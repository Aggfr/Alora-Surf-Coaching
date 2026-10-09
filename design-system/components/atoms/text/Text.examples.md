# Text · Examples

## Do
```tsx
import { Text } from '@alora/design-system';

<Text role="body-small" tone="tertiary">Submitted 31 ago 2026, 18:01</Text>
```

## Don't
```tsx
<p style={{ fontSize: 12, color: "#4d6e87" }}>Submitted…</p>
```
Why: Combining size and weight by hand instead of `role`.
