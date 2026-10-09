import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '../../../design-system/components/atoms/text/Text';
import docs from '../../../design-system/components/atoms/text/Text.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: docsFrom(docs, 'components/atoms/text'),
  args: { children: 'I keep losing speed after the bottom turn. Any tips?', role: 'body-medium', tone: 'primary' },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Roles: Story = {
  render: () => (
    <div className="sb-column">
      <Text role="body-large">Body large · Frontside snap</Text>
      <Text role="body-medium">Body medium · Your coach left 3 comments on this clip.</Text>
      <Text role="body-small">Body small · Goofy · Intermediate · Zurriola</Text>
      <Text role="caption">Caption · At least 8 characters.</Text>
      <Text role="overline">Overline · Reviewed this week</Text>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className="sb-column">
      {(['primary', 'secondary', 'tertiary', 'brand', 'danger'] as const).map((tone) => (
        <Text key={tone} tone={tone}>{tone.charAt(0).toUpperCase() + tone.slice(1)} text</Text>
      ))}
    </div>
  ),
};
