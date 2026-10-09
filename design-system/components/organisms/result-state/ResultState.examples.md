# ResultState · Examples

## Do
```tsx
import { ResultState } from '@alora/design-system';

<ResultState tone="success" title="Submission sent!" description="Your coach will review your clips." primaryAction={{ label: "Back to home", onPress: goHome }}><SummaryRow icon="video" label="Clips" value="2 clips · 1:46" /></ResultState>
```

## Don't
```tsx
<div><h1>Done</h1></div>
```
Why: A success screen with no way forward.
