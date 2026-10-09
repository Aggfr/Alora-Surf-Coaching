import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { SearchField, type SearchFieldProps } from '../../../design-system/components/molecules/search-field/SearchField';
import docs from '../../../design-system/components/molecules/search-field/SearchField.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: SearchFieldProps) {
  const [, updateArgs] = useArgs<SearchFieldProps>();
  return <SearchField {...args} onChange={(value) => { updateArgs({ value }); args.onChange(value); }} />;
}

const meta = {
  title: 'Molecules/SearchField',
  component: SearchField,
  parameters: docsFrom(docs, 'components/molecules/search-field'),
  args: { value: '', placeholder: 'Search surfers', onChange: fn(), onClear: fn() },
  decorators: [(Story) => <div className="sb-narrow"><Story /></div>],
  render: Controlled,
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** With a value, the clear button appears. Escape clears too. */
export const WithValue: Story = { args: { value: 'Lucía' } };
