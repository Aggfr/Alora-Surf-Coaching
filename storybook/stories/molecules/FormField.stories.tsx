import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../../design-system/components/atoms/input/Input';
import { Textarea } from '../../../design-system/components/atoms/textarea/Textarea';
import { FormField } from '../../../design-system/components/molecules/form-field/FormField';
import docs from '../../../design-system/components/molecules/form-field/FormField.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: docsFrom(docs, 'components/molecules/form-field'),
  args: {
    label: 'Email',
    id: 'field-email',
    helperText: 'We send review notifications here.',
    isRequired: true,
    children: <Input id="field-email" type="email" leadingIcon="mail" placeholder="name@example.com" />,
  },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="sb-narrow"><Story /></div>],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithError: Story = {
  args: { errorMessage: 'Enter a valid email, like name@example.com.', helperText: undefined },
};

export const Disabled: Story = { args: { isDisabled: true } };

export const WithTextarea: Story = {
  args: {
    label: 'Note for your coach',
    id: 'field-note',
    isRequired: false,
    helperText: 'Optional. What should the coach focus on?',
    children: <Textarea id="field-note" maxLength={280} />,
  },
};
