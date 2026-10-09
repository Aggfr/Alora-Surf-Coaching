import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';
import type { IconName } from '../icon/icons';

export type TagTone = 'brand' | 'highlight' | 'warning' | 'danger' | 'neutral';

export interface TagProps {
  children: ReactNode;
  tone?: TagTone;
  icon?: IconName;
  className?: string;
}

/** Atom · Píldora informativa con icono opcional. Docs: ./Tag.docs.md */
export function Tag({ children, tone = 'brand', icon, className }: TagProps) {
  return (
    <span className={cx('ds-tag', `ds-tag--${tone}`, className)}>
      {icon && <Icon name={icon} size="xs" />}
      {children}
    </span>
  );
}
