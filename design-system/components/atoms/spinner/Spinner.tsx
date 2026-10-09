import { cx } from '../../../lib/cx';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

/** Atom · Carga indeterminada. Docs: ./Spinner.docs.md */
export function Spinner({ size = 'medium', label = 'Loading', className }: SpinnerProps) {
  return <span role="status" aria-label={label} className={cx('ds-spinner', `ds-spinner--${size}`, className)} />;
}
