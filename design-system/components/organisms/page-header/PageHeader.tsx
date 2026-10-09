import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Heading } from '../../atoms/heading/Heading';
import { Text } from '../../atoms/text/Text';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  className?: string;
}

/** Organism · Cabecera de página con saludo y acciones. Docs: ./PageHeader.docs.md */
export function PageHeader({ title, subtitle, actions, className }: PageHeaderProps) {
  return (
    <header className={cx('ds-page-header', className)}>
      <div className="ds-page-header__titles">
        <Heading level="large" as="h1">{title}</Heading>
        {subtitle && <Text role="body-medium" tone="secondary">{subtitle}</Text>}
      </div>
      {actions && <div className="ds-page-header__actions">{actions}</div>}
    </header>
  );
}
