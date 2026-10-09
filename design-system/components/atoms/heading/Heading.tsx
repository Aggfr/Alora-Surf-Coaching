import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';

export type HeadingLevel = 'display' | 'large' | 'medium' | 'small';
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const defaultElement: Record<HeadingLevel, HeadingElement> = { display: 'h1', large: 'h1', medium: 'h2', small: 'h3' };

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  as?: HeadingElement;
  id?: string;
  className?: string;
}

/** Atom · Hierarchical headings. Docs: ./Heading.docs.md */
export function Heading({ children, level = 'medium', as, id, className }: HeadingProps) {
  const Tag = as ?? defaultElement[level];
  return <Tag id={id} className={cx('ds-heading', `ds-heading--${level}`, className)}>{children}</Tag>;
}
