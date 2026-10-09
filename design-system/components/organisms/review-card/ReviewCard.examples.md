# ReviewCard · Examples

## Do
```tsx
import { ReviewCard } from '@alora/design-system';

<ReviewCard clipTitle="Frontside snap" submittedAt="Sep 2" reviewedAt="Sep 3" coach={{ name: "Alejandro" }} note="Great speed, open your shoulders earlier." action={{ label: "Watch review", icon: "play-circle", onPress: open }} />
```

## Don't
```tsx
<details><summary>Frontside snap</summary>…</details>
```
Why: Nesting links inside the toggle button.
