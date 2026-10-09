import { cloneElement, type ReactElement } from 'react';
import { cx } from '../../../lib/cx';
import { Label } from '../../atoms/label/Label';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';

export interface FormFieldProps {
  label: string;
  id: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  children: ReactElement;
  className?: string;
}

/** Molecule · Label + control + ayuda/error. Docs: ./FormField.docs.md */
export function FormField({ label, id, helperText, errorMessage, isRequired = false, isDisabled = false, children, className }: FormFieldProps) {
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const describedBy = [errorMessage && errorId, helperText && helperId].filter(Boolean).join(' ') || undefined;
  return (
    <div className={cx('ds-form-field', className)}>
      <Label htmlFor={id} isRequired={isRequired} isDisabled={isDisabled}>{label}</Label>
      {cloneElement(children, {
        id,
        hasError: Boolean(errorMessage),
        isDisabled,
        'aria-required': isRequired || undefined,
        'aria-describedby': describedBy,
      })}
      {errorMessage && (
        <p id={errorId} className="ds-form-field__error">
          <Icon name="warning" size="sm" />
          {errorMessage}
        </p>
      )}
      {helperText && <Text id={helperId} role="caption" tone="secondary">{helperText}</Text>}
    </div>
  );
}
