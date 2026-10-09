import { useId } from 'react';
import { cx } from '../../../lib/cx';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { ListItem, type ListItemProps } from '../../molecules/list-item/ListItem';

export interface DataListProps {
  /** Optional: without a title the list is a plain table of facts (surfer profile in Coach). */
  title?: string;
  icon?: IconName;
  items: ListItemProps[];
  /** stacked: label above value. inline: label left, value right. */
  layout?: 'stacked' | 'inline';
  /** Alternating row backgrounds, for long lists of facts. */
  isStriped?: boolean;
  className?: string;
}

/** Organism · Section with a title and data rows. Docs: ./DataList.docs.md */
export function DataList({ title, icon, items, layout = 'stacked', isStriped = false, className }: DataListProps) {
  const titleId = useId();
  return (
    <section
      aria-labelledby={title ? titleId : undefined}
      className={cx('ds-card', 'ds-data-list', `ds-data-list--${layout}`, isStriped && 'ds-data-list--striped', className)}
    >
      {title && (
        <header className="ds-data-list__header">
          {icon && <Icon name={icon} size="md" tone="brand" />}
          <Heading level="small" as="h2" id={titleId}>{title}</Heading>
        </header>
      )}
      <ul className="ds-data-list__items">
        {items.map((item, index) => <ListItem key={`${item.title}-${index}`} {...item} hasDivider={index < items.length - 1} />)}
      </ul>
    </section>
  );
}
