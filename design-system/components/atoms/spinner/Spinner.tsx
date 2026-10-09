import { cx } from '../../../lib/cx';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  label?: string;
  className?: string;
}

/** Atom · Indeterminate loading. Docs: ./Spinner.docs.md */
export function Spinner({ size = 'medium', label = 'Loading', className }: SpinnerProps) {
  return <span role="status" aria-label={label} className={cx('ds-spinner', `ds-spinner--${size}`, className)} />;
}
