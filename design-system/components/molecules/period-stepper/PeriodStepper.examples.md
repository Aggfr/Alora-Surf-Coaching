# PeriodStepper · Examples

## Do
```tsx
import { PeriodStepper } from '@alora/design-system';

<PeriodStepper label="Pay period" value="Sep 15 - Sep 30" onPrevious={prev} onNext={next} isNextDisabled />
```

## Don't
```tsx
<span>‹ Sep 15 - Sep 30 ›</span>
```
Why: Arrows without labels.
