import type { FormEvent, ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import type { IconName } from '../../atoms/icon/icons';
import { Notification } from '../../molecules/notification/Notification';

export interface FormSectionProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  primaryAction: { label: string; icon?: IconName; isLoading?: boolean };
  secondaryAction?: { label: string; onPress: () => void };
  errorSummary?: string[];
  className?: string;
}

/** Organism · Formulario con campos apilados y acciones. Docs: ./FormSection.docs.md */
export function FormSection({ onSubmit, children, primaryAction, secondaryAction, errorSummary, className }: FormSectionProps) {
  return (
    <form noValidate className={cx('ds-form-section', className)} onSubmit={(event) => { event.preventDefault(); onSubmit(event); }}>
      {errorSummary && errorSummary.length > 1 && (
        <Notification tone="danger" title={`${errorSummary.length} fields need attention`} description={errorSummary.join(' · ')} />
      )}
      <div className="ds-form-section__fields">{children}</div>
      <div className="ds-form-section__actions">
        <Button type="submit" variant="primary" size="large" isFullWidth leadingIcon={primaryAction.icon} isLoading={primaryAction.isLoading}>
          {primaryAction.label}
        </Button>
        {secondaryAction && <Button variant="ghost" isFullWidth onPress={secondaryAction.onPress}>{secondaryAction.label}</Button>}
      </div>
    </form>
  );
}
