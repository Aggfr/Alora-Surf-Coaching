import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Input, type InputProps } from '../../../design-system/components/atoms/input/Input';
import { icons } from '../../../design-system/components/atoms/icon/icons';
import docs from '../../../design-system/components/atoms/input/Input.docs.md?raw';
import { docsFrom } from '../docs';

const iconOptions = [undefined, ...Object.keys(icons)];

function Controlled(args: InputProps) {
  const [, updateArgs] = useArgs<InputProps>();
  return <Input {...args} onChange={(value) => { updateArgs({ value }); args.onChange?.(value); }} />;
}

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: docsFrom(docs, 'components/atoms/input'),
  args: { id: 'input-email', type: 'email', placeholder: 'name@example.com', value: '', onChange: fn() },
  argTypes: {
    leadingIcon: { control: 'select', options: iconOptions },
    trailingIcon: { control: 'select', options: iconOptions },
  },
  decorators: [(Story) => <div className="sb-narrow"><Story /></div>],
  render: Controlled,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { leadingIcon: 'mail' } };

export const WithError: Story = { args: { leadingIcon: 'mail', value: 'lucia@', hasError: true } };

export const Disabled: Story = { args: { leadingIcon: 'lock', type: 'password', value: 'secret-pass', isDisabled: true } };
