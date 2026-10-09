import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconTile } from '../../../design-system/components/atoms/icon-tile/IconTile';
import docs from '../../../design-system/components/atoms/icon-tile/IconTile.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/IconTile',
  component: IconTile,
  parameters: docsFrom(docs, 'components/atoms/icon-tile'),
  args: { icon: 'video' },
} satisfies Meta<typeof IconTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: (args) => (
    <div className="sb-row">
      {(['brand', 'highlight', 'danger', 'neutral', 'solid'] as const).map((tone) => <IconTile key={tone} {...args} tone={tone} size="large" />)}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => <IconTile key={size} {...args} size={size} />)}
    </div>
  ),
};

export const Result: Story = {
  render: () => (
    <div className="sb-row">
      <IconTile icon="check" tone="solid" shape="circle" size="xlarge" hasHalo />
      <IconTile icon="alert-circle" tone="danger" shape="circle" size="large" hasHalo />
      <IconTile tone="highlight">A</IconTile>
    </div>
  ),
};
