import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { IconButton } from '../../../design-system/components/atoms/icon-button/IconButton';
import docs from '../../../design-system/components/atoms/icon-button/IconButton.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: docsFrom(docs, 'components/atoms/icon-button'),
  args: { icon: 'chevron-left', label: 'Back', onPress: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="sb-row">
      <IconButton {...args} variant="secondary" />
      <IconButton {...args} variant="ghost" />
      <IconButton {...args} size="small" />
      <IconButton {...args} isDisabled />
    </div>
  ),
};
