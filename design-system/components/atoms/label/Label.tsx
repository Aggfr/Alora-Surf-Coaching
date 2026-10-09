import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';

export interface LabelProps {
  children: ReactNode;
  htmlFor: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
}

/** Atom · Nombra un control de formulario. Docs: ./Label.docs.md */
export function Label({ children, htmlFor, isRequired = false, isDisabled = false, className }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cx('ds-label', isDisabled && 'ds-label--disabled', className)}>
      {children}
      {isRequired && <span className="ds-label__required" aria-hidden="true">*</span>}
    </label>
  );
}
