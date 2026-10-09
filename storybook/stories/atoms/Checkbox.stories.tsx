import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Checkbox, type CheckboxProps } from '../../../design-system/components/atoms/checkbox/Checkbox';
import docs from '../../../design-system/components/atoms/checkbox/Checkbox.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: CheckboxProps) {
  const [, updateArgs] = useArgs<CheckboxProps>();
  return <Checkbox {...args} onChange={(checked) => { updateArgs({ isChecked: checked }); args.onChange?.(checked); }} />;
}

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: docsFrom(docs, 'components/atoms/checkbox'),
  args: { label: 'Email me when my clip is reviewed', isChecked: false, onChange: fn() },
  argTypes: { isChecked: { control: 'inline-radio', options: [false, true, 'indeterminate'] } },
  render: Controlled,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="sb-column">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" isChecked />
      <Checkbox label="Indeterminate" isChecked="indeterminate" />
      <Checkbox label="Disabled" isDisabled />
      <Checkbox label="Disabled and checked" isChecked isDisabled />
    </div>
  ),
};
