# ListItem · Examples

## Do
```tsx
import { ListItem } from '@alora/design-system';

<ListItem type="definition" title="PLAN RENEWS" description="26 sept 2026" action={{ label: "Cancel your plan", tone: "danger", onPress: openCancel }} />
```

## Don't
```tsx
<div className="row">…</div>
```
Why: Mixing types within the same list.
