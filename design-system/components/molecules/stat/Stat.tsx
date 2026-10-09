import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export interface StatProps {
  label: string;
  value: string | number;
  trend?: { direction: 'up' | 'down'; label: string };
  className?: string;
}

/** Molecule · Highlighted metric. Docs: ./Stat.docs.md */
export function Stat({ label, value, trend, className }: StatProps) {
  return (
    <div className={cx('ds-stat', className)}>
      <Text role="overline" tone="secondary">{label}</Text>
      <span className="ds-stat__value">{value}</span>
      {trend && (
        <span className={cx('ds-stat__trend', `ds-stat__trend--${trend.direction}`)}>
          <Icon name={trend.direction === 'up' ? 'trending-up' : 'trending-down'} size="xs" />
          {trend.label}
        </span>
      )}
    </div>
  );
}
