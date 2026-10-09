import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';
import type { IconName } from '../icon/icons';

export interface IconButtonProps {
  icon: IconName;
  /** Accessible name. Required: the button has no visible text. */
  label: string;
  variant?: 'secondary' | 'ghost';
  size?: 'small' | 'medium';
  isDisabled?: boolean;
  onPress?: () => void;
  className?: string;
}

/** Atom · Square button with only an icon (back, previous, next). Docs: ./IconButton.docs.md */
export function IconButton({ icon, label, variant = 'secondary', size = 'small', isDisabled = false, onPress, className }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-disabled={isDisabled || undefined}
      className={cx('ds-icon-button', `ds-icon-button--${variant}`, `ds-icon-button--${size}`, className)}
      onClick={isDisabled ? undefined : onPress}
    >
      <Icon name={icon} size={size === 'small' ? 'sm' : 'md'} />
    </button>
  );
}
