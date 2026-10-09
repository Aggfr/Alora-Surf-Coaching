import { useMemo, useState } from 'react';
import { Avatar } from '../../components/atoms/avatar/Avatar';
import { Tag } from '../../components/atoms/tag/Tag';
import { SearchField } from '../../components/molecules/search-field/SearchField';
import { Stat } from '../../components/molecules/stat/Stat';
import { TagChip } from '../../components/molecules/tag-chip/TagChip';
import { EmptyState } from '../../components/organisms/empty-state/EmptyState';
import { PageHeader } from '../../components/organisms/page-header/PageHeader';
import { SubmissionCard, type SubmissionCardProps } from '../../components/organisms/submission-card/SubmissionCard';
import { DashboardTemplate } from '../../templates/dashboard/DashboardTemplate';

type Submission = Omit<SubmissionCardProps, 'action' | 'className'> & { id: string };

const submissions: Submission[] = [
  {
    id: 'sub-1',
    surfer: { name: 'Lucía Marín', plan: 'elite' },
    status: 'pending',
    clipTitle: 'Frontside snap',
    submittedAt: 'Today, 09:12',
    meta: 'Goofy · Intermediate · Zurriola',
    note: 'I keep losing speed after the bottom turn. Any tips?',
    deadline: { label: 'Due in 6h', tone: 'due-soon' },
  },
  {
    id: 'sub-2',
    surfer: { name: 'Marco Ruiz', plan: 'progression' },
    status: 'in-review',
    clipTitle: 'Cutback',
    submittedAt: 'Yesterday, 18:40',
    meta: 'Regular · Advanced · Mundaka',
    deadline: { label: 'Due tomorrow', tone: 'on-track' },
  },
  {
    id: 'sub-3',
    surfer: { name: 'Ane Etxeberria', plan: 'pay-as-you-go' },
    status: 'overdue',
    clipTitle: 'Pop-up',
    submittedAt: 'Mon, 11:05',
    meta: 'Regular · Beginner · Sopelana',
    deadline: { label: 'Overdue 1 day', tone: 'overdue' },
  },
];

const filters = ['All', 'Pending', 'In review', 'Overdue'] as const;

/** Page · Cola de revisión del coach. Docs: ./CoachQueuePage.docs.md */
export function CoachQueuePage({ onOpenSubmission }: { onOpenSubmission: (id: string) => void }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const visible = useMemo(() => submissions.filter((item) => {
    const matchesQuery = item.surfer.name.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || item.status === filter.toLowerCase().replace(' ', '-');
    return matchesQuery && matchesFilter;
  }), [query, filter]);

  return (
    <DashboardTemplate
      navigation={{ product: 'coach', activeHref: '/queue' }}
      header={
        <PageHeader
          title="Welcome, Alejandro"
          subtitle="3 clips are waiting for your feedback."
          actions={<><Tag tone="highlight" icon="star">Head coach</Tag><Avatar name="Alejandro Ortiz" size="large" /></>}
        />
      }
    >
      <div className="ds-stat-row">
        <Stat label="Pending" value={1} />
        <Stat label="In review" value={1} />
        <Stat label="Reviewed this week" value={14} trend={{ direction: 'up', label: '+4 vs last week' }} />
      </div>

      <div className="ds-toolbar">
        <SearchField value={query} onChange={setQuery} placeholder="Search surfers" />
        {filters.map((name) => (
          <TagChip key={name} label={name} isSelected={filter === name} onToggle={() => setFilter(name)} />
        ))}
      </div>

      {visible.length === 0 ? (
        <EmptyState message="No clips match these filters." icon="search" action={{ label: 'Clear filters', onPress: () => { setQuery(''); setFilter('All'); } }} />
      ) : (
        <div className="ds-stack">
          {visible.map(({ id, ...submission }) => (
            <SubmissionCard
              key={id}
              {...submission}
              action={{ label: submission.status === 'in-review' ? 'Continue review' : 'Start review', icon: 'play-circle', onPress: () => onOpenSubmission(id) }}
            />
          ))}
        </div>
      )}
    </DashboardTemplate>
  );
}
