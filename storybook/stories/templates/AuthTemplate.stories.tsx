import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Input } from '../../../design-system/components/atoms/input/Input';
import { FormField } from '../../../design-system/components/molecules/form-field/FormField';
import { FormSection } from '../../../design-system/components/organisms/form-section/FormSection';
import { AuthTemplate } from '../../../design-system/templates/auth/AuthTemplate';
import docs from '../../../design-system/templates/auth/AuthTemplate.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Templates/AuthTemplate',
  component: AuthTemplate,
  parameters: { ...docsFrom(docs, 'templates/auth'), layout: 'fullscreen' },
  args: {
    title: 'Reset your password',
    subtitle: 'We will email you a link to choose a new one.',
    children: (
      <FormSection onSubmit={fn()} primaryAction={{ label: 'Send link', icon: 'mail' }} secondaryAction={{ label: 'Back to log in', onPress: fn() }}>
        <FormField label="Email" id="auth-email" isRequired>
          <Input id="auth-email" type="email" leadingIcon="mail" placeholder="name@example.com" />
        </FormField>
      </FormSection>
    ),
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof AuthTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordRecovery: Story = {};

export const IllustratedWithLogo: Story = {
  args: {
    title: 'Welcome back',
    subtitle: 'Log in to keep improving your surfing.',
    hasLogo: true,
    background: 'illustrated',
    children: (
      <FormSection onSubmit={fn()} primaryAction={{ label: 'Log in', icon: 'log-in' }} secondaryAction={{ label: 'Create new account', onPress: fn() }}>
        <FormField label="Email" id="login-email" isRequired>
          <Input id="login-email" type="email" leadingIcon="mail" placeholder="name@example.com" />
        </FormField>
      </FormSection>
    ),
  },
};
