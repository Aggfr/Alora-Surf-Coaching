import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Breadcrumb, FormField, Input, Notification, Pagination, SearchField, TagChip } from '../index';
import { axeViolations } from './axe';

describe('FormField', () => {
  it('links the label, error and helper text to the control', async () => {
    const { container } = render(
      <FormField id="email" label="Email" helperText="We never share it" errorMessage="Enter a valid email" isRequired>
        <Input id="email" />
      </FormField>,
    );
    const input = screen.getByRole('textbox', { name: /Email/ });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAccessibleDescription('Enter a valid email We never share it');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('SearchField', () => {
  function Controlled({ onClear }: { onClear: () => void }) {
    const [value, setValue] = useState('');
    return <SearchField value={value} onChange={setValue} onClear={onClear} placeholder="Search surfers" />;
  }

  it('clears with the button and with Escape, and keeps focus in the field', async () => {
    const onClear = vi.fn();
    render(<Controlled onClear={onClear} />);
    const input = screen.getByRole('searchbox', { name: 'Search surfers' });
    await userEvent.type(input, 'laia');
    await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();
    await userEvent.type(input, 'marc{Escape}');
    expect(input).toHaveValue('');
    expect(onClear).toHaveBeenCalledTimes(2);
  });
});

describe('TagChip', () => {
  it('exposes the selected state with aria-pressed and names the remove button', async () => {
    const onToggle = vi.fn();
    const onRemove = vi.fn();
    render(<TagChip label="Elite" isSelected onToggle={onToggle} onRemove={onRemove} />);
    expect(screen.getByRole('button', { name: 'Elite' })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(screen.getByRole('button', { name: 'Remove Elite' }));
    expect(onRemove).toHaveBeenCalled();
  });
});

describe('Pagination', () => {
  it('disables the previous page on the first page and moves forward', async () => {
    const onPageChange = vi.fn();
    render(<Pagination page={1} pageCount={3} onPageChange={onPageChange} />);
    await userEvent.click(screen.getByRole('button', { name: 'Previous page' }));
    expect(onPageChange).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'Next page' }));
    expect(onPageChange).toHaveBeenCalledWith(2);
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
  });
});

describe('Breadcrumb', () => {
  it('marks the last item as the current page', () => {
    render(<Breadcrumb items={[{ label: 'Queue', href: '/queue' }, { label: 'Laia Ferrer' }]} />);
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Queue' })).toHaveAttribute('href', '/queue');
    expect(screen.getByText('Laia Ferrer')).toHaveAttribute('aria-current', 'page');
  });
});

describe('Notification', () => {
  it('uses role=alert only for danger', () => {
    const { rerender } = render(<Notification title="Clip uploaded" tone="success" />);
    expect(screen.getByRole('status')).toHaveTextContent('Clip uploaded');
    rerender(<Notification title="Upload failed" tone="danger" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Upload failed');
  });
});
