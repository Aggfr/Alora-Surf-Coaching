import { cx } from '../../../lib/cx';

export type LogoSize = 'small' | 'medium' | 'large';

export interface LogoProps {
  size?: LogoSize;
  /** Shows the ALORA wordmark under the mark. */
  hasWordmark?: boolean;
  className?: string;
}

/** Atom · Alora mark (mountains and sun) with the optional wordmark. Docs: ./Logo.docs.md */
export function Logo({ size = 'medium', hasWordmark = true, className }: LogoProps) {
  return (
    <span role="img" aria-label="Alora" className={cx('ds-logo', `ds-logo--${size}`, className)}>
      <svg className="ds-logo__mark" viewBox="0 0 60 36" aria-hidden="true">
        <path className="ds-logo__mountains" d="M0 30L14 20L20 26L32 10L40 22L46 16L52 24V30H0Z" />
        <circle className="ds-logo__sun" cx="48" cy="9" r="8" />
      </svg>
      {hasWordmark && <span className="ds-logo__wordmark" aria-hidden="true">ALORA</span>}
    </span>
  );
}
