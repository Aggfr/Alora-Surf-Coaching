import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../../../design-system/components/atoms/avatar/Avatar';
import { Button } from '../../../design-system/components/atoms/button/Button';
import { Tag } from '../../../design-system/components/atoms/tag/Tag';
import { PageHeader } from '../../../design-system/components/organisms/page-header/PageHeader';
import docs from '../../../design-system/components/organisms/page-header/PageHeader.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  parameters: docsFrom(docs, 'components/organisms/page-header'),
  args: {
    title: 'Welcome, Alejandro',
    subtitle: '3 clips are waiting for your feedback.',
    actions: <><Tag tone="highlight" icon="star">Head coach</Tag><Avatar name="Alejandro Ortiz" size="large" /></>,
  },
  argTypes: { actions: { control: false } },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Coach: Story = {};

export const Surfer: Story = {
  args: {
    title: 'Hi, Lucía',
    subtitle: 'Your last clip has feedback ready.',
    actions: <Button leadingIcon="upload">Upload clip</Button>,
  },
};

export const TitleOnly: Story = { args: { subtitle: undefined, actions: undefined, title: 'Sessions' } };
