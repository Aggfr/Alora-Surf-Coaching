import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export interface StatProps {
  label: string;
  value: string | number;
  /** Line under the value ("0 clips reviewed", "€1 / clip"). */
  caption?: string;
  trend?: { direction: 'up' | 'down'; label: string };
  /** default: centered card. featured: larger value on a brand-tinted card. compact: one row, label left and value right. */
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

/** Molecule · Highlighted metric. Docs: ./Stat.docs.md */
export function Stat({ label, value, caption, trend, variant = 'default', className }: StatProps) {
  return (
    <div className={cx('ds-stat', `ds-stat--${variant}`, className)}>
      <div className="ds-stat__text">
        <Text role="overline" tone="secondary">{label}</Text>
        {caption && variant === 'compact' && <Text role="caption" tone="tertiary">{caption}</Text>}
      </div>
      <span className="ds-stat__value">{value}</span>
      {caption && variant !== 'compact' && <Text role="caption" tone="tertiary">{caption}</Text>}
      {trend && (
        <span className={cx('ds-stat__trend', `ds-stat__trend--${trend.direction}`)}>
          <Icon name={trend.direction === 'up' ? 'trending-up' : 'trending-down'} size="xs" />
          {trend.label}
        </span>
      )}
    </div>
  );
}
