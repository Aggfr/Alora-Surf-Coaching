# ClipItem · Examples

## Do
```tsx
import { ClipItem } from '@alora/design-system';

<ClipItem title="Surf clip" meta="1 clip · 0:11" isPlayable action={{ label: "Delete clip", icon: "trash", tone: "danger", onPress: remove }} />
```

## Don't
```tsx
<div className="clip"><img src={t} /><a className="red">Delete</a></div>
```
Why: A whole clickable row with a nested action.
