import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from '../../../design-system/components/organisms/sidebar/Sidebar';
import docs from '../../../design-system/components/organisms/sidebar/Sidebar.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: { ...docsFrom(docs, 'components/organisms/sidebar'), layout: 'fullscreen' },
  args: { product: 'coach', activeHref: '/' },
  argTypes: { activeHref: { control: 'select', options: ['/', '/surfers', '/schedule', '/history', '/profile'] } },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Coach: Story = {};

export const Surfer: Story = { args: { product: 'surfer', activeHref: '/history' } };
