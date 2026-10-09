import { useId } from 'react';
import { cx } from '../../../lib/cx';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { ListItem, type ListItemProps } from '../../molecules/list-item/ListItem';

export interface DataListProps {
  title: string;
  icon?: IconName;
  items: ListItemProps[];
  className?: string;
}

/** Organism · Section with a title and data rows. Docs: ./DataList.docs.md */
export function DataList({ title, icon, items, className }: DataListProps) {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} className={cx('ds-card', 'ds-data-list', className)}>
      <header className="ds-data-list__header">
        {icon && <Icon name={icon} size="md" tone="brand" />}
        <Heading level="small" as="h2" id={titleId}>{title}</Heading>
      </header>
      <ul className="ds-data-list__items">
        {items.map((item, index) => <ListItem key={`${item.title}-${index}`} {...item} hasDivider={index < items.length - 1} />)}
      </ul>
    </section>
  );
}
