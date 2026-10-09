import { useId, useRef } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';

export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
  className?: string;
}

/** Molecule · Búsqueda con limpiar. Docs: ./SearchField.docs.md */
export function SearchField({ value, onChange, placeholder = 'Search', onClear, className }: SearchFieldProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const clear = () => { onChange(''); onClear?.(); inputRef.current?.focus(); };
  return (
    <div role="search" className={cx('ds-input', 'ds-search-field', className)}>
      <Icon name="search" size="sm" tone="secondary" />
      <input
        ref={inputRef}
        id={id}
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        className="ds-input__control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => event.key === 'Escape' && clear()}
      />
      {value && (
        <button type="button" className="ds-search-field__clear" aria-label="Clear search" onClick={clear}>
          <Icon name="close" size="sm" />
        </button>
      )}
    </div>
  );
}
