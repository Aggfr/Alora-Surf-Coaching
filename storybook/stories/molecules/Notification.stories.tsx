import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Notification } from '../../../design-system/components/molecules/notification/Notification';
import docs from '../../../design-system/components/molecules/notification/Notification.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/Notification',
  component: Notification,
  parameters: docsFrom(docs, 'components/molecules/notification'),
  args: { tone: 'info', title: 'Your coach is reviewing your clip', description: 'You will get feedback within 24 hours.', onDismiss: fn() },
  decorators: [(Story) => <div className="sb-medium"><Story /></div>],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="sb-column">
      <Notification tone="info" title="Your coach is reviewing your clip" />
      <Notification tone="success" title="Review ready" description="Alejandro left 3 comments on Frontside snap." action={{ label: 'Open', onPress: fn() }} />
      <Notification tone="warning" title="Clip due in 6 hours" description="Lucía Marín is waiting for feedback." />
      <Notification tone="danger" title="Upload failed" description="Check your connection and try again." action={{ label: 'Retry', onPress: fn() }} onDismiss={fn()} />
    </div>
  ),
};
