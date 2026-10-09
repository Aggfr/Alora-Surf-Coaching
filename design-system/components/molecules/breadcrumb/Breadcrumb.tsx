import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';

export interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}

/** Molecule · Hierarchical path. The last item is the current page. Docs: ./Breadcrumb.docs.md */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cx('ds-breadcrumb', className)}>
      <ol className="ds-breadcrumb__list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="ds-breadcrumb__item">
              {isCurrent || !item.href
                ? <span aria-current={isCurrent ? 'page' : undefined} className="ds-breadcrumb__current">{item.label}</span>
                : <a href={item.href} className="ds-breadcrumb__link">{item.label}</a>}
              {!isCurrent && <Icon name="chevron-right" size="xs" tone="secondary" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
