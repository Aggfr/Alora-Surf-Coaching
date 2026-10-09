import { cx } from '../../../lib/cx';
import { icons, type IconName } from './icons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconTone = 'primary' | 'secondary' | 'brand' | 'inherit';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  tone?: IconTone;
  /** When set, the icon is meaningful (role=img). Otherwise it is decorative. */
  label?: string;
  className?: string;
}

/** Atom · Pictograma de línea del set de Alora. Docs: ./Icon.docs.md */
export function Icon({ name, size = 'lg', tone = 'inherit', label, className }: IconProps) {
  return (
    <svg
      className={cx('ds-icon', `ds-icon--${size}`, `ds-icon--${tone}`, className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}
