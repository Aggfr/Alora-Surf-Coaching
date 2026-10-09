import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';
import type { IconName } from '../icon/icons';

export type LinkTone = 'brand' | 'danger' | 'neutral';

export interface LinkProps {
  children: ReactNode;
  /** Navigates. Without href, Link renders a button and calls onPress. */
  href?: string;
  onPress?: () => void;
  tone?: LinkTone;
  size?: 'small' | 'medium';
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  className?: string;
}

/** Atom · Text action: navigation or a low-emphasis command. Docs: ./Link.docs.md */
export function Link({ children, href, onPress, tone = 'brand', size = 'medium', leadingIcon, trailingIcon, className }: LinkProps) {
  const classes = cx('ds-link', `ds-link--${tone}`, `ds-link--${size}`, className);
  const content = (
    <>
      {leadingIcon && <Icon name={leadingIcon} size="sm" />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} size="sm" />}
    </>
  );
  if (href) return <a href={href} className={classes} onClick={onPress}>{content}</a>;
  return <button type="button" className={classes} onClick={onPress}>{content}</button>;
}
