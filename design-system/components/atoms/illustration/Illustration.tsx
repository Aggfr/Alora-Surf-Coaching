import { useId } from 'react';
import { cx } from '../../../lib/cx';
import { illustrations, type IllustrationName } from './illustrations';

export interface IllustrationProps {
  name: IllustrationName;
  /** When set, the illustration is meaningful (role=img). Otherwise it is decorative. */
  label?: string;
  className?: string;
}

/** Atom · Themed illustration for empty states and the authentication background. Docs: ./Illustration.docs.md */
export function Illustration({ name, label, className }: IllustrationProps) {
  const id = `ds-illustration-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const { viewBox, markup } = illustrations[name];
  return (
    <svg
      className={cx('ds-illustration', `ds-illustration--${name}`, className)}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio={name === 'auth-background' ? 'xMidYMax slice' : undefined}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: markup.replaceAll('{id}', id) }}
    />
  );
}
