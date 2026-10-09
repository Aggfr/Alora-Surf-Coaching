# SubmissionCard · Ejemplos

## Correcto
```tsx
import { SubmissionCard } from '@alora/design-system';

<SubmissionCard surfer={{ name: "Khata Kraiwan", plan: "elite" }} status="in-review" clipTitle="Frontside snap" submittedAt="31 ago 2026, 18:01" deadline={{ label: "1h 9m left", tone: "due-soon" }} action={{ label: "View & Download", icon: "eye", onPress }} />
```

## Incorrecto
```tsx
<Card><b>Frontside snap</b><button className="blue">View</button></Card>
```
Por qué: Dos botones primary en la tarjeta.
