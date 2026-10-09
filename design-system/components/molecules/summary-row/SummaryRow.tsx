import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { IconTile } from '../../atoms/icon-tile/IconTile';
import type { IconName } from '../../atoms/icon/icons';

export interface SummaryRowProps {
  icon: IconName;
  label: string;
  value: ReactNode;
  className?: string;
}

/** Molecule · One fact of a summary: icon, small label, value (result screens). Docs: ./SummaryRow.docs.md */
export function SummaryRow({ icon, label, value, className }: SummaryRowProps) {
  return (
    <div className={cx('ds-summary-row', className)}>
      <IconTile icon={icon} size="medium" />
      <dl className="ds-summary-row__text">
        <dt className="ds-summary-row__label">{label}</dt>
        <dd className="ds-summary-row__value">{value}</dd>
      </dl>
    </div>
  );
}
