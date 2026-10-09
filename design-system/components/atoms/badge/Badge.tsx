import { cx } from '../../../lib/cx';

export type BadgeTone =
  | 'pending' | 'in-review' | 'review-ready' | 'overdue' | 'neutral'
  | 'plan-pay-as-you-go' | 'plan-elite' | 'plan-progression';

export interface BadgeProps {
  children: string;
  tone?: BadgeTone;
  className?: string;
}

/** Atom · Status or plan, not interactive. Docs: ./Badge.docs.md */
export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return <span className={cx('ds-badge', `ds-badge--${tone}`, className)}>{children}</span>;
}
