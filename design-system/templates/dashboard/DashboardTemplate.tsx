import type { ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Sidebar, type SidebarProps } from '../../components/organisms/sidebar/Sidebar';

export interface DashboardTemplateProps {
  /** Props passed to the Sidebar organism. */
  navigation: SidebarProps;
  /** Slot Header: a PageHeader. */
  header: ReactNode;
  /** Slot Content: stats, lists and cards stacked in a single column. */
  children: ReactNode;
  /** narrow: single reading column (dashboards, profile). wide: full width (lists, schedule). */
  width?: 'narrow' | 'wide';
  className?: string;
}

/** Template · Sidebar + content column. Base of every authenticated view. Docs: ./DashboardTemplate.docs.md */
export function DashboardTemplate({ navigation, header, children, width = 'narrow', className }: DashboardTemplateProps) {
  return (
    <div className={cx('ds-dashboard-template', className)}>
      <Sidebar {...navigation} />
      <main className={cx('ds-dashboard-template__main', `ds-dashboard-template__main--${width}`)}>
        {header}
        <div className="ds-dashboard-template__content">{children}</div>
      </main>
    </div>
  );
}
