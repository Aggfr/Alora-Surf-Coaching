import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Heading } from '../../atoms/heading/Heading';
import { IconTile } from '../../atoms/icon-tile/IconTile';
import type { IconName } from '../../atoms/icon/icons';

export interface SectionHeaderProps {
  title: string;
  /** Count or explanation under the title. Accepts emphasis ("<strong>9 slots selected</strong>, tap or drag…"). */
  subtitle?: ReactNode;
  icon?: IconName;
  /** large: page section (Assigned surfers). small: group inside a page (Account & Billing). */
  size?: 'small' | 'large';
  as?: 'h1' | 'h2' | 'h3';
  /** Link or button on the right ("Talk to your coach"). */
  action?: ReactNode;
  id?: string;
  className?: string;
}

/** Molecule · Title of a page section with an icon tile and an optional action. Docs: ./SectionHeader.docs.md */
export function SectionHeader({ title, subtitle, icon, size = 'large', as, action, id, className }: SectionHeaderProps) {
  return (
    <header className={cx('ds-section-header', `ds-section-header--${size}`, className)}>
      {icon && <IconTile icon={icon} size={size === 'large' ? 'medium' : 'small'} />}
      <div className="ds-section-header__titles">
        <Heading level={size === 'large' ? 'large' : 'small'} as={as ?? (size === 'large' ? 'h1' : 'h2')} id={id}>{title}</Heading>
        {subtitle && <p className="ds-section-header__subtitle">{subtitle}</p>}
      </div>
      {action && <div className="ds-section-header__action">{action}</div>}
    </header>
  );
}
