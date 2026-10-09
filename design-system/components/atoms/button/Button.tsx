import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';
import type { IconName } from '../icon/icons';
import { Spinner } from '../spinner/Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFullWidth?: boolean;
  onPress?: () => void;
}

/** Atom · Triggers an action. Docs: ./Button.docs.md */
export function Button({
  children, variant = 'primary', size = 'medium', leadingIcon, trailingIcon,
  isDisabled = false, isLoading = false, isFullWidth = false, type = 'button', onPress, className, ...rest
}: ButtonProps) {
  const iconSize = size === 'small' ? 'sm' : 'md';
  return (
    <button
      {...rest}
      type={type}
      className={cx('ds-button', `ds-button--${variant}`, `ds-button--${size}`, isFullWidth && 'ds-button--full-width', className)}
      aria-disabled={isDisabled || isLoading || undefined}
      aria-busy={isLoading || undefined}
      onClick={isDisabled || isLoading ? undefined : onPress}
    >
      {isLoading ? <Spinner size="small" label="Loading" /> : leadingIcon && <Icon name={leadingIcon} size={iconSize} />}
      {children && <span className="ds-button__label">{children}</span>}
      {trailingIcon && <Icon name={trailingIcon} size={iconSize} />}
    </button>
  );
}
