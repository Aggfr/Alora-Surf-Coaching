import { cx } from '../../../lib/cx';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  isDecorative?: boolean;
  className?: string;
}

/** Atom · Content separator. Docs: ./Divider.docs.md */
export function Divider({ orientation = 'horizontal', isDecorative = true, className }: DividerProps) {
  return (
    <div
      className={cx('ds-divider', `ds-divider--${orientation}`, className)}
      role={isDecorative ? undefined : 'separator'}
      aria-orientation={isDecorative ? undefined : orientation}
      aria-hidden={isDecorative || undefined}
    />
  );
}
