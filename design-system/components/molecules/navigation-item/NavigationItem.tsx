import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';

export interface NavigationItemProps {
  label: string;
  icon: IconName;
  href: string;
  isActive?: boolean;
  className?: string;
}

/** Molecule · Sidebar destination (icon above label). Docs: ./NavigationItem.docs.md */
export function NavigationItem({ label, icon, href, isActive = false, className }: NavigationItemProps) {
  return (
    <a href={href} aria-current={isActive ? 'page' : undefined} className={cx('ds-navigation-item', isActive && 'ds-navigation-item--active', className)}>
      <Icon name={icon} size="lg" />
      <span className="ds-navigation-item__label">{label}</span>
    </a>
  );
}
