import { useId } from 'react';
import { cx } from '../../../lib/cx';

export interface SegmentedControlOption {
  label: string;
  value: string;
}

export interface SegmentedControlProps {
  /** Accessible name of the group, e.g. "Gender". */
  label: string;
  options: SegmentedControlOption[];
  value?: string;
  onChange?: (value: string) => void;
  /** brand: teal selection (profile chips). highlight: warm selection (gender). */
  tone?: 'brand' | 'highlight';
  /** fill: options share the width. hug: pills sized to their text, wrapping. */
  layout?: 'fill' | 'hug';
  size?: 'small' | 'medium';
  className?: string;
}

/** Molecule · One choice among 2 to 6 short options shown side by side. Docs: ./SegmentedControl.docs.md */
export function SegmentedControl({ label, options, value, onChange, tone = 'brand', layout = 'fill', size = 'medium', className }: SegmentedControlProps) {
  const name = useId();
  return (
    <div role="radiogroup" aria-label={label} className={cx('ds-segmented-control', `ds-segmented-control--${tone}`, `ds-segmented-control--${layout}`, `ds-segmented-control--${size}`, className)}>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <label key={option.value} className={cx('ds-segmented-control__option', isSelected && 'ds-segmented-control__option--selected')}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              className="ds-visually-hidden ds-segmented-control__control"
              onChange={() => onChange?.(option.value)}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}
