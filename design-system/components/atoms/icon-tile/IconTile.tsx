import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Icon, type IconSize } from '../icon/Icon';
import type { IconName } from '../icon/icons';

export type IconTileSize = 'small' | 'medium' | 'large' | 'xlarge';
export type IconTileTone = 'brand' | 'danger' | 'highlight' | 'neutral' | 'solid';

const iconSize: Record<IconTileSize, IconSize> = { small: 'xs', medium: 'sm', large: 'lg', xlarge: 'xl' };

export interface IconTileProps {
  /** Icon to show. Use children instead for a letter (a coach initial). */
  icon?: IconName;
  children?: ReactNode;
  size?: IconTileSize;
  tone?: IconTileTone;
  shape?: 'square' | 'circle';
  /** Soft glow around the tile (result screens, highlighted actions). */
  hasHalo?: boolean;
  /** When set, the tile is meaningful (role=img). Otherwise it is decorative. */
  label?: string;
  className?: string;
}

/** Atom · Icon or letter on a tinted tile. Docs: ./IconTile.docs.md */
export function IconTile({ icon, children, size = 'medium', tone = 'brand', shape = 'square', hasHalo = false, label, className }: IconTileProps) {
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cx('ds-icon-tile', `ds-icon-tile--${size}`, `ds-icon-tile--${tone}`, `ds-icon-tile--${shape}`, hasHalo && 'ds-icon-tile--halo', className)}
    >
      {icon ? <Icon name={icon} size={iconSize[size]} /> : children}
    </span>
  );
}
