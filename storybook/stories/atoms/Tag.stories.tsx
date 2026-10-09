import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '../../../design-system/components/atoms/tag/Tag';
import { icons } from '../../../design-system/components/atoms/icon/icons';
import docs from '../../../design-system/components/atoms/tag/Tag.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: docsFrom(docs, 'components/atoms/tag'),
  args: { children: 'Head coach', tone: 'highlight', icon: 'star' },
  argTypes: { icon: { control: 'select', options: [undefined, ...Object.keys(icons)] } },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="sb-row">
      <Tag tone="brand" icon="video">Video</Tag>
      <Tag tone="highlight" icon="star">Head coach</Tag>
      <Tag tone="warning" icon="clock">Due in 6h</Tag>
      <Tag tone="danger" icon="clock">Overdue 1 day</Tag>
      <Tag tone="neutral" icon="clock">Due tomorrow</Tag>
    </div>
  ),
};
