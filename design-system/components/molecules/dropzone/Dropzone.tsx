import { useId, useState } from 'react';
import { cx } from '../../../lib/cx';
import { IconTile } from '../../atoms/icon-tile/IconTile';

export interface DropzoneProps {
  label: string;
  hint?: string;
  /** File types, as in the input accept attribute ("video/*"). */
  accept?: string;
  isMultiple?: boolean;
  /** Shows the failed state with this message instead of the label. */
  errorMessage?: string;
  isDisabled?: boolean;
  onFiles?: (files: File[]) => void;
  className?: string;
}

/** Molecule · Area to add files by clicking or dropping them (Add clip). Docs: ./Dropzone.docs.md */
export function Dropzone({ label, hint, accept, isMultiple = false, errorMessage, isDisabled = false, onFiles, className }: DropzoneProps) {
  const id = useId();
  const [isDragging, setIsDragging] = useState(false);
  const hasError = Boolean(errorMessage);

  return (
    <div
      className={cx('ds-dropzone', hasError && 'ds-dropzone--error', isDragging && 'ds-dropzone--dragging', isDisabled && 'ds-dropzone--disabled', className)}
      onDragOver={(event) => { event.preventDefault(); if (!isDisabled) setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setIsDragging(false);
        if (!isDisabled) onFiles?.(Array.from(event.dataTransfer.files));
      }}
    >
      <input
        id={id}
        type="file"
        accept={accept}
        multiple={isMultiple}
        disabled={isDisabled}
        aria-labelledby={`${id}-label`}
        aria-describedby={hint && !hasError ? `${id}-hint` : undefined}
        aria-invalid={hasError || undefined}
        className="ds-visually-hidden ds-dropzone__control"
        onChange={(event) => {
          onFiles?.(Array.from(event.target.files ?? []));
          event.target.value = '';
        }}
      />
      <label htmlFor={id} className="ds-dropzone__target">
        <IconTile icon={hasError ? 'close' : 'plus'} tone={hasError ? 'danger' : 'brand'} shape="circle" size="large" />
        <span id={`${id}-label`} className="ds-dropzone__label">{errorMessage ?? label}</span>
        {hint && !hasError && <span id={`${id}-hint`} className="ds-dropzone__hint">{hint}</span>}
      </label>
    </div>
  );
}
