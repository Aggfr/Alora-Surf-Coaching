import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Heading } from '../../components/atoms/heading/Heading';
import { Text } from '../../components/atoms/text/Text';

export interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  /** Slot Form: a FormSection. */
  children: ReactNode;
  className?: string;
}

/** Template · Panel centrado para login, registro y recuperación. Docs: ./AuthTemplate.docs.md */
export function AuthTemplate({ title, subtitle, children, className }: AuthTemplateProps) {
  return (
    <main className={cx('ds-auth-template', className)}>
      <div className="ds-auth-template__panel">
        <div className="ds-auth-template__brand">
          <Heading level="large" as="h1">{title}</Heading>
          {subtitle && <Text role="body-medium" tone="secondary">{subtitle}</Text>}
        </div>
        {children}
      </div>
    </main>
  );
}
