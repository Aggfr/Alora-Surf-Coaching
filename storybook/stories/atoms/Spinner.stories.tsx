import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../../../design-system/components/atoms/spinner/Spinner';
import docs from '../../../design-system/components/atoms/spinner/Spinner.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: docsFrom(docs, 'components/atoms/spinner'),
  args: { size: 'medium', label: 'Loading' },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      <Spinner {...args} size="small" />
      <Spinner {...args} size="medium" />
      <Spinner {...args} size="large" />
    </div>
  ),
};
