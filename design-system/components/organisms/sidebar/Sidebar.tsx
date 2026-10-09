import { cx } from '../../../lib/cx';
import { NavigationItem, type NavigationItemProps } from '../../molecules/navigation-item/NavigationItem';

type SidebarItem = Omit<NavigationItemProps, 'isActive' | 'className'>;

const defaultItems: Record<'coach' | 'surfer', SidebarItem[]> = {
  coach: [
    { label: 'Home', icon: 'home', href: '/' },
    { label: 'Queue', icon: 'list', href: '/queue' },
    { label: 'Surfers', icon: 'users', href: '/surfers' },
    { label: 'Calendar', icon: 'calendar', href: '/calendar' },
    { label: 'Profile', icon: 'user', href: '/profile' },
  ],
  surfer: [
    { label: 'Home', icon: 'home', href: '/' },
    { label: 'Sessions', icon: 'play-circle', href: '/sessions' },
    { label: 'Upload', icon: 'upload', href: '/upload' },
    { label: 'Profile', icon: 'user', href: '/profile' },
  ],
};

export interface SidebarProps {
  product: 'coach' | 'surfer';
  activeHref: string;
  items?: SidebarItem[];
  className?: string;
}

/** Organism · Navegación principal vertical. Docs: ./Sidebar.docs.md */
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
    </nav>
  );
}
