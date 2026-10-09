# Dropzone · Examples

## Do
```tsx
import { Dropzone } from '@alora/design-system';

<Dropzone label="Tap to add surf clips" hint="MP4 or MOV · Max 2:30 per clip" accept="video/*" isMultiple onFiles={addClips} />
```

## Don't
```tsx
<div onDrop={drop}>Drop here</div>
```
Why: Drag and drop as the only way to add files.
