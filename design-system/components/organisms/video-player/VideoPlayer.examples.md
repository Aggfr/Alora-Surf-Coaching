# VideoPlayer · Examples

## Do
```tsx
import { VideoPlayer } from '@alora/design-system';

<VideoPlayer src={clip.url} title="Frontside snap" poster={clip.thumbnail} />
```

## Don't
```tsx
<video src={url} autoPlay />
```
Why: Autoplay with sound.
