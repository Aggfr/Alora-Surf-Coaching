import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CoachQueuePage } from '../../../design-system/pages/coach-queue/CoachQueuePage';
import docs from '../../../design-system/pages/coach-queue/CoachQueuePage.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Pages/CoachQueuePage',
  component: CoachQueuePage,
  parameters: { ...docsFrom(docs, 'pages/coach-queue'), layout: 'fullscreen' },
  args: { onOpenSubmission: fn() },
} satisfies Meta<typeof CoachQueuePage>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Search and filter work: try "Marco" or the Overdue chip. */
export const Default: Story = {};
