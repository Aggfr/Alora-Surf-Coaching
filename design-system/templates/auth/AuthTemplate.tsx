import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Heading } from '../../components/atoms/heading/Heading';
import { Illustration } from '../../components/atoms/illustration/Illustration';
import { Logo } from '../../components/atoms/logo/Logo';
import { Text } from '../../components/atoms/text/Text';

export interface AuthTemplateProps {
  /** Optional: the log in form has no title. */
  title?: string;
  subtitle?: string;
  /** Shows the Alora logo above the title. */
  hasLogo?: boolean;
  /** illustrated: night sky, mountains and waves behind the panel (log in, profile selector). */
  background?: 'plain' | 'illustrated';
  /** Slot Form: a FormSection. */
  children: ReactNode;
  className?: string;
}

/** Template · Centered panel for log in, sign up and password recovery. Docs: ./AuthTemplate.docs.md */
export function AuthTemplate({ title, subtitle, hasLogo = false, background = 'plain', children, className }: AuthTemplateProps) {
  return (
    <main className={cx('ds-auth-template', `ds-auth-template--${background}`, className)}>
      {background === 'illustrated' && <Illustration name="auth-background" className="ds-auth-template__background" />}
      <div className="ds-auth-template__panel">
        {(hasLogo || title) && (
          <div className="ds-auth-template__brand">
            {hasLogo && <Logo size="large" />}
            {title && <Heading level="large" as="h1">{title}</Heading>}
            {subtitle && <Text role="body-medium" tone="secondary">{subtitle}</Text>}
          </div>
        )}
        {children}
      </div>
    </main>
  );
}
