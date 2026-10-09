import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Textarea, type TextareaProps } from '../../../design-system/components/atoms/textarea/Textarea';
import docs from '../../../design-system/components/atoms/textarea/Textarea.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: TextareaProps) {
  const [, updateArgs] = useArgs<TextareaProps>();
  return <Textarea {...args} onChange={(value) => { updateArgs({ value }); args.onChange?.(value); }} />;
}

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: docsFrom(docs, 'components/atoms/textarea'),
  args: { id: 'textarea-note', placeholder: 'Tell your coach what to look at', value: '', maxLength: 280, onChange: fn() },
  decorators: [(Story) => <div className="sb-medium"><Story /></div>],
  render: Controlled,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithError: Story = { args: { value: 'Too short', hasError: true } };

export const Disabled: Story = { args: { value: 'Submitted notes cannot be edited.', isDisabled: true } };
