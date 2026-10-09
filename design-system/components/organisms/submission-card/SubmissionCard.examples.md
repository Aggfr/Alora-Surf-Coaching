# SubmissionCard · Examples

## Do
```tsx
import { SubmissionCard } from '@alora/design-system';

<SubmissionCard surfer={{ name: "Khata Kraiwan", plan: "elite" }} status="in-review" clipTitle="Frontside snap" submittedAt="Aug 31, 2026, 18:01" deadline={{ label: "1h 9m left", tone: "due-soon" }} action={{ label: "View & Download", icon: "eye", onPress }} />
```

## Don't
```tsx
<Card><b>Frontside snap</b><button className="blue">View</button></Card>
```
Why: Two primary buttons in the card.
