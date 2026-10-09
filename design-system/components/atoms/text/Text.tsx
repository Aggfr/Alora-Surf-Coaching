import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';

export type TextRole = 'body-large' | 'body-medium' | 'body-small' | 'caption' | 'overline';
export type TextTone = 'primary' | 'secondary' | 'tertiary' | 'brand' | 'danger';

export interface TextProps {
  children: ReactNode;
  role?: TextRole;
  tone?: TextTone;
  as?: 'p' | 'span' | 'div' | 'dd' | 'dt';
  id?: string;
  className?: string;
}

/** Atom · Reading text and metadata. Docs: ./Text.docs.md */
export function Text({ children, role = 'body-medium', tone = 'primary', as: Tag = 'p', id, className }: TextProps) {
  return <Tag id={id} className={cx('ds-text', `ds-text--${role}`, `ds-text--${tone}`, className)}>{children}</Tag>;
}
