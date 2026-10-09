import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/** Molecule · Navegación entre páginas de resultados. Docs: ./Pagination.docs.md */
export function Pagination({ page, pageCount, onPageChange, className }: PaginationProps) {
  return (
    <nav aria-label="Pagination" className={cx('ds-pagination', className)}>
      <Button variant="ghost" size="small" leadingIcon="chevron-left" isDisabled={page <= 1} onPress={() => onPageChange(page - 1)} aria-label="Previous page" />
      <span className="ds-pagination__status" aria-live="polite">Page {page} of {pageCount}</span>
      <Button variant="ghost" size="small" trailingIcon="chevron-right" isDisabled={page >= pageCount} onPress={() => onPageChange(page + 1)} aria-label="Next page" />
    </nav>
  );
}
