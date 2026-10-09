import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../../../design-system/components/atoms/avatar/Avatar';
import docs from '../../../design-system/components/atoms/avatar/Avatar.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: docsFrom(docs, 'components/atoms/avatar'),
  args: { name: 'Lucía Marín', size: 'medium', tone: 'brand' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      <Avatar {...args} size="small" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="large" />
      <Avatar {...args} size="xlarge" />
    </div>
  ),
};

export const Tones: Story = {
  render: (args) => (
    <div className="sb-row">
      {(['brand', 'elite', 'progression', 'session', 'performance', 'neutral'] as const).map((tone) => <Avatar key={tone} {...args} tone={tone} size="large" />)}
    </div>
  ),
};
