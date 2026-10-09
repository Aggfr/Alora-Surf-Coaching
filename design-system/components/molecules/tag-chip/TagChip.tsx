import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';

export interface TagChipProps {
  label: string;
  isSelected?: boolean;
  onToggle?: () => void;
  onRemove?: () => void;
  className?: string;
}

/** Molecule · Selectable or removable chip. Docs: ./TagChip.docs.md */
export function TagChip({ label, isSelected = false, onToggle, onRemove, className }: TagChipProps) {
  return (
    <span className={cx('ds-tag-chip', isSelected && 'ds-tag-chip--selected', className)}>
      <button type="button" className="ds-tag-chip__toggle" aria-pressed={onToggle ? isSelected : undefined} onClick={onToggle}>
        {isSelected && <Icon name="check" size="xs" />}
        {label}
      </button>
      {onRemove && (
        <button type="button" className="ds-tag-chip__remove" aria-label={`Remove ${label}`} onClick={onRemove}>
          <Icon name="close" size="xs" />
        </button>
      )}
    </span>
  );
}
