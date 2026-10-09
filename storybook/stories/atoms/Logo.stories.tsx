import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from '../../../design-system/components/atoms/logo/Logo';
import docs from '../../../design-system/components/atoms/logo/Logo.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: docsFrom(docs, 'components/atoms/logo'),
  args: { size: 'medium', hasWordmark: true },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      <Logo {...args} size="small" />
      <Logo {...args} size="medium" />
      <Logo {...args} size="large" />
    </div>
  ),
};

export const MarkOnly: Story = { args: { hasWordmark: false } };
