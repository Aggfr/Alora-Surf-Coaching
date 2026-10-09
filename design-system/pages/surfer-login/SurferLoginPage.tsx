import { useState } from 'react';
import { Input } from '../../components/atoms/input/Input';
import { FormField } from '../../components/molecules/form-field/FormField';
import { FormSection } from '../../components/organisms/form-section/FormSection';
import { AuthTemplate } from '../../templates/auth/AuthTemplate';

/** Page · Login del surfer. */
export function SurferLoginPage({ onLogIn, onSignUp }: { onLogIn: (email: string, password: string) => Promise<void>; onSignUp: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    const next = {
      email: email.includes('@') ? undefined : 'Enter a valid email, like name@example.com.',
      password: password.length >= 8 ? undefined : 'Password must have at least 8 characters.',
    };
    setErrors(next);
    if (next.email || next.password) return;
    setIsLoading(true);
    try { await onLogIn(email, password); } finally { setIsLoading(false); }
  };

  return (
    <AuthTemplate title="Welcome back" subtitle="Log in to see your coach's feedback.">
      <FormSection
        onSubmit={submit}
        primaryAction={{ label: 'Log in', icon: 'log-in', isLoading }}
        secondaryAction={{ label: 'Create an account', onPress: onSignUp }}
        errorSummary={[errors.email, errors.password].filter((e): e is string => Boolean(e))}
      >
        <FormField label="Email" id="email" isRequired errorMessage={errors.email}>
          <Input id="email" type="email" leadingIcon="mail" placeholder="name@example.com" value={email} onChange={setEmail} autoComplete="email" />
        </FormField>
        <FormField label="Password" id="password" isRequired errorMessage={errors.password} helperText="At least 8 characters.">
          <Input id="password" type="password" leadingIcon="lock" value={password} onChange={setPassword} autoComplete="current-password" />
        </FormField>
      </FormSection>
    </AuthTemplate>
  );
}
