import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';
import type { IconName } from '../icon/icons';

export type BadgeTone =
  | 'pending' | 'in-review' | 'review-ready' | 'overdue' | 'neutral'
  | 'plan-pay-as-you-go' | 'plan-elite' | 'plan-progression' | 'plan-session' | 'plan-performance';

/** Solid badges exist for the four submission statuses, to sit on top of photos and video. */
export type BadgeSolidTone = 'pending' | 'in-review' | 'review-ready' | 'overdue';

export type BadgeProps = {
  children: string;
  icon?: IconName;
  className?: string;
} & (
  | { tone?: BadgeTone; appearance?: 'subtle' }
  | { tone: BadgeSolidTone; appearance: 'solid' }
);

/** Atom · Status or plan, not interactive. Docs: ./Badge.docs.md */
export function Badge({ children, tone = 'neutral', appearance = 'subtle', icon, className }: BadgeProps) {
  return (
    <span className={cx('ds-badge', `ds-badge--${tone}`, appearance === 'solid' && 'ds-badge--solid', className)}>
      {icon && <Icon name={icon} size="xs" />}
      {children}
    </span>
  );
}
