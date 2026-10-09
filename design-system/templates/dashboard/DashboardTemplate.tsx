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
  className?: string;
}

/** Template · Sidebar + columna de contenido. Base de todas las vistas autenticadas. Docs: ./DashboardTemplate.docs.md */
export function DashboardTemplate({ navigation, header, children, className }: DashboardTemplateProps) {
  return (
    <div className={cx('ds-dashboard-template', className)}>
      <Sidebar {...navigation} />
      <main className="ds-dashboard-template__main">
        {header}
        <div className="ds-dashboard-template__content">{children}</div>
      </main>
    </div>
  );
}
