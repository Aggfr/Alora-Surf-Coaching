import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Pagination, type PaginationProps } from '../../../design-system/components/molecules/pagination/Pagination';
import docs from '../../../design-system/components/molecules/pagination/Pagination.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: PaginationProps) {
  const [, updateArgs] = useArgs<PaginationProps>();
  return <Pagination {...args} onPageChange={(page) => { updateArgs({ page }); args.onPageChange(page); }} />;
}

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: docsFrom(docs, 'components/molecules/pagination'),
  args: { page: 2, pageCount: 5, onPageChange: fn() },
  render: Controlled,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const FirstPage: Story = { args: { page: 1 } };

export const LastPage: Story = { args: { page: 5 } };
