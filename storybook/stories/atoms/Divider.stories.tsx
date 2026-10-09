import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '../../../design-system/components/atoms/divider/Divider';
import { Text } from '../../../design-system/components/atoms/text/Text';
import docs from '../../../design-system/components/atoms/divider/Divider.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: docsFrom(docs, 'components/atoms/divider'),
  args: { orientation: 'horizontal', isDecorative: true },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="sb-column sb-medium">
      <Text>Session details</Text>
      <Divider {...args} />
      <Text tone="secondary">Coach notes</Text>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="sb-row">
      <Text>Zurriola</Text>
      <Divider {...args} />
      <Text>Intermediate</Text>
      <Divider {...args} />
      <Text>Goofy</Text>
    </div>
  ),
};
