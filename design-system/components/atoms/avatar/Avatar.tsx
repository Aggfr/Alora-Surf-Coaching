import { cx } from '../../../lib/cx';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';
export type AvatarTone = 'brand' | 'elite' | 'progression' | 'session' | 'performance' | 'neutral';

export interface AvatarProps {
  name: string;
  size?: AvatarSize;
  tone?: AvatarTone;
  className?: string;
}

function initials(name: string, size: AvatarSize): string {
  const parts = name.trim().split(/\s+/);
  const letters = size === 'large' || size === 'xlarge' ? parts.slice(0, 2) : parts.slice(0, 1);
  return letters.map((part) => part[0]?.toUpperCase() ?? '').join('');
}

/** Atom · A person's initials. Docs: ./Avatar.docs.md */
export function Avatar({ name, size = 'medium', tone = 'brand', className }: AvatarProps) {
  return (
    <span className={cx('ds-avatar', `ds-avatar--${size}`, `ds-avatar--${tone}`, className)} aria-hidden="true" title={name}>
      {initials(name, size)}
    </span>
  );
}
