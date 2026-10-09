import { useId } from 'react';
import { cx } from '../../../lib/cx';

export interface OptionCardProps {
  title: string;
  description?: string;
  value: string;
  /** Shared by every OptionCard of the group, so they behave as one radio group. */
  name: string;
  isSelected?: boolean;
  /** Shows a radio circle before the text. Without it the card centers its text (stance). */
  hasIndicator?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

/** Molecule · Large selectable option, one choice per group (skill level, stance, board length). Docs: ./OptionCard.docs.md */
export function OptionCard({ title, description, value, name, isSelected = false, hasIndicator = true, isDisabled = false, onChange, className }: OptionCardProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  return (
    <label
      htmlFor={id}
      className={cx('ds-option-card', isSelected && 'ds-option-card--selected', !hasIndicator && 'ds-option-card--centered', isDisabled && 'ds-option-card--disabled', className)}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        disabled={isDisabled}
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={cx('ds-option-card__control', !hasIndicator && 'ds-visually-hidden')}
        onChange={() => onChange?.(value)}
      />
      {hasIndicator && <span className="ds-radio__circle" aria-hidden="true" />}
      <span className="ds-option-card__text">
        <span id={titleId} className="ds-option-card__title">{title}</span>
        {description && <span id={descriptionId} className="ds-option-card__description">{description}</span>}
      </span>
    </label>
  );
}
