import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Input } from '../../../design-system/components/atoms/input/Input';
import { FormField } from '../../../design-system/components/molecules/form-field/FormField';
import { FormSection } from '../../../design-system/components/organisms/form-section/FormSection';
import docs from '../../../design-system/components/organisms/form-section/FormSection.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/FormSection',
  component: FormSection,
  parameters: docsFrom(docs, 'components/organisms/form-section'),
  args: {
    onSubmit: fn(),
    primaryAction: { label: 'Log in', icon: 'log-in' },
    secondaryAction: { label: 'Create an account', onPress: fn() },
    children: (
      <>
        <FormField label="Email" id="form-email" isRequired>
          <Input id="form-email" type="email" leadingIcon="mail" placeholder="name@example.com" />
        </FormField>
        <FormField label="Password" id="form-password" isRequired helperText="At least 8 characters.">
          <Input id="form-password" type="password" leadingIcon="lock" />
        </FormField>
      </>
    ),
  },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="sb-narrow"><Story /></div>],
} satisfies Meta<typeof FormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Loading: Story = { args: { primaryAction: { label: 'Log in', icon: 'log-in', isLoading: true } } };

export const WithErrorSummary: Story = {
  args: {
    errorSummary: ['Enter a valid email, like name@example.com.', 'Password must have at least 8 characters.'],
    children: (
      <>
        <FormField label="Email" id="form-email-error" isRequired errorMessage="Enter a valid email, like name@example.com.">
          <Input id="form-email-error" type="email" leadingIcon="mail" value="lucia@" />
        </FormField>
        <FormField label="Password" id="form-password-error" isRequired errorMessage="Password must have at least 8 characters.">
          <Input id="form-password-error" type="password" leadingIcon="lock" value="1234" />
        </FormField>
      </>
    ),
  },
};
