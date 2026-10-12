import { cx } from '../../../lib/cx';
import logoSrc from '../../../assets/logo-alora.png';

export type LogoSize = 'small' | 'medium' | 'large';

export interface LogoProps {
  size?: LogoSize;
  /** @deprecated The brand image always includes the ALORA wordmark, so this prop has no effect. */
  hasWordmark?: boolean;
  className?: string;
}

/** Atom · Alora brand image (mountains, sun and ALORA wordmark), shown unaltered. Docs: ./Logo.docs.md */
export function Logo({ size = 'medium', className }: LogoProps) {
  return <img src={logoSrc} alt="Alora" className={cx('ds-logo', `ds-logo--${size}`, className)} />;
}
