import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../../design-system/components/atoms/input/Input';
import { Label } from '../../../design-system/components/atoms/label/Label';
import docs from '../../../design-system/components/atoms/label/Label.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: docsFrom(docs, 'components/atoms/label'),
  args: { children: 'Email', htmlFor: 'email' },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Required: Story = { args: { isRequired: true } };

/** A disabled label always names a disabled control. Inactive controls are exempt from the contrast minimum. */
export const Disabled: Story = {
  args: { isDisabled: true },
  render: (args) => (
    <div className="sb-column sb-narrow">
      <Label {...args} />
      <Input id="email" isDisabled placeholder="name@example.com" />
    </div>
  ),
};
