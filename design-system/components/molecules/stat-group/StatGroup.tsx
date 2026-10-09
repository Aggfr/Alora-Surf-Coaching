import { cx } from '../../../lib/cx';

export interface StatGroupItem {
  label: string;
  value: string | number;
  /** Color of the value. */
  tone?: 'primary' | 'brand' | 'highlight';
}

export interface StatGroupProps {
  items: StatGroupItem[];
  size?: 'small' | 'medium';
  className?: string;
}

/** Molecule · Two to four short metrics in one panel, split by dividers. Docs: ./StatGroup.docs.md */
export function StatGroup({ items, size = 'medium', className }: StatGroupProps) {
  return (
    <dl className={cx('ds-stat-group', `ds-stat-group--${size}`, className)}>
      {items.map((item) => (
        <div key={item.label} className="ds-stat-group__item">
          <dt className="ds-stat-group__label">{item.label}</dt>
          <dd className={cx('ds-stat-group__value', `ds-stat-group__value--${item.tone ?? 'primary'}`)}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
