# Stepper · Examples

## Do
```tsx
import { Stepper } from '@alora/design-system';

<Stepper steps={["Skill level", "Stance", "Goal", "Approach", "About you"]} currentStep={1} />
```

## Don't
```tsx
<p>Step 2/5</p>
```
Why: Clickable markers that skip validation.
