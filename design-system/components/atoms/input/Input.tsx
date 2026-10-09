import type { InputHTMLAttributes } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';
import type { IconName } from '../icon/icons';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'> {
  id: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel';
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

/** Atom · Campo de texto de una línea. Usar dentro de FormField. Docs: ./Input.docs.md */
export function Input({ id, type = 'text', leadingIcon, trailingIcon, hasError = false, isDisabled = false, onChange, className, ...rest }: InputProps) {
  return (
    <div className={cx('ds-input', hasError && 'ds-input--error', isDisabled && 'ds-input--disabled', className)}>
      {leadingIcon && <Icon name={leadingIcon} size="sm" tone="secondary" />}
      <input
        {...rest}
        id={id}
        type={type}
        className="ds-input__control"
        disabled={isDisabled}
        aria-invalid={hasError || undefined}
        onChange={(event) => onChange?.(event.target.value)}
      />
      {trailingIcon && <Icon name={trailingIcon} size="sm" tone="secondary" />}
    </div>
  );
}
