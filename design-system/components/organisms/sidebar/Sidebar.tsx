import { cx } from '../../../lib/cx';
import { Logo } from '../../atoms/logo/Logo';
import { NavigationItem, type NavigationItemProps } from '../../molecules/navigation-item/NavigationItem';

type SidebarItem = Omit<NavigationItemProps, 'isActive' | 'className'>;

const defaultItems: Record<'coach' | 'surfer', SidebarItem[]> = {
  coach: [
    { label: 'Queue', icon: 'play-circle', href: '/' },
    { label: 'Surfers', icon: 'users', href: '/surfers' },
    { label: 'Schedule', icon: 'calendar', href: '/schedule' },
    { label: 'Profile', icon: 'user', href: '/profile' },
  ],
  surfer: [
    { label: 'Dashboard', icon: 'home', href: '/' },
    { label: 'History', icon: 'list', href: '/history' },
    { label: 'Profile', icon: 'user', href: '/profile' },
  ],
};

export interface SidebarProps {
  product: 'coach' | 'surfer';
  activeHref: string;
  items?: SidebarItem[];
  className?: string;
}

/** Organism · Vertical main navigation. Docs: ./Sidebar.docs.md */
export function Sidebar({ product, activeHref, items = defaultItems[product], className }: SidebarProps) {
  return (
    <nav aria-label="Main" className={cx('ds-sidebar', className)}>
      <ul className="ds-sidebar__list">
        {items.slice(0, 5).map((item) => (
          <li key={item.href}>
            <NavigationItem {...item} isActive={item.href === activeHref} />
          </li>
        ))}
      </ul>
      <Logo size="small" className="ds-sidebar__logo" />
    </nav>
  );
}
