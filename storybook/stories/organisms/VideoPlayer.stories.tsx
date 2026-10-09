import type { Meta, StoryObj } from '@storybook/react-vite';
import { VideoPlayer } from '../../../design-system/components/organisms/video-player/VideoPlayer';
import docs from '../../../design-system/components/organisms/video-player/VideoPlayer.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/VideoPlayer',
  component: VideoPlayer,
  parameters: docsFrom(docs, 'components/organisms/video-player'),
  args: { src: '', title: 'Frontside snap' },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-medium"><Story /></div>] };
