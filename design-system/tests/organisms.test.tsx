import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Modal } from '../index';

describe('Modal', () => {
  const actions = { primaryAction: { label: 'Delete', onPress: vi.fn() }, secondaryAction: { label: 'Cancel', onPress: vi.fn() } };

  it('opens as a labelled dialog and closes with the close button', async () => {
    const onClose = vi.fn();
    const { rerender } = render(<Modal isOpen={false} title="Delete clip?" onClose={onClose} {...actions} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    rerender(<Modal isOpen title="Delete clip?" description="This cannot be undone." tone="danger" onClose={onClose} {...actions} />);
    const dialog = screen.getByRole('dialog', { name: 'Delete clip?' });
    expect(dialog).toHaveAccessibleDescription('This cannot be undone.');
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose instead of closing itself on Escape', () => {
    const onClose = vi.fn();
    render(<Modal isOpen title="Delete clip?" onClose={onClose} {...actions} />);
    const dialog = screen.getByRole('dialog');
    const cancel = new Event('cancel', { cancelable: true });
    dialog.dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(true);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
