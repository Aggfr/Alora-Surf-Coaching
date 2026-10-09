# OptionCard · Examples

## Do
```tsx
import { OptionCard } from '@alora/design-system';

<OptionCard name="level" value="intermediate" title="Intermediate" description="I catch green waves and trim along them." isSelected={level === "intermediate"} onChange={setLevel} />
```

## Don't
```tsx
<div className={selected ? "card active" : "card"} onClick={select}>Intermediate</div>
```
Why: Mixing OptionCard and Checkbox in the same question.
