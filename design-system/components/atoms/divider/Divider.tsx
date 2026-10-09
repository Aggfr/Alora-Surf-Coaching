import { cx } from '../../../lib/cx';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  /** Centered caption on a horizontal divider ("CURRENT PAYOUT"). Makes the divider a labelled separator. */
  label?: string;
  isDecorative?: boolean;
  className?: string;
}

/** Atom · Content separator. Docs: ./Divider.docs.md */
export function Divider({ orientation = 'horizontal', label, isDecorative = true, className }: DividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div role="separator" aria-label={label} className={cx('ds-divider-labelled', className)}>
        <span className="ds-divider ds-divider--horizontal" aria-hidden="true" />
        <span className="ds-divider-labelled__label" aria-hidden="true">{label}</span>
        <span className="ds-divider ds-divider--horizontal" aria-hidden="true" />
      </div>
    );
  }
  return (
    <div
      className={cx('ds-divider', `ds-divider--${orientation}`, className)}
      role={isDecorative ? undefined : 'separator'}
      aria-orientation={isDecorative ? undefined : orientation}
      aria-hidden={isDecorative || undefined}
    />
  );
}
