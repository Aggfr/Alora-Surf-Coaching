/** Alora Design System · public API. Import CSS once: dist/tokens.css then styles/components.css. */

// Atoms
export * from './components/atoms/avatar/Avatar';
export * from './components/atoms/badge/Badge';
export * from './components/atoms/button/Button';
export * from './components/atoms/checkbox/Checkbox';
export * from './components/atoms/divider/Divider';
export * from './components/atoms/heading/Heading';
export * from './components/atoms/icon/Icon';
export * from './components/atoms/input/Input';
export * from './components/atoms/label/Label';
export * from './components/atoms/radio/Radio';
export * from './components/atoms/spinner/Spinner';
export * from './components/atoms/switch/Switch';
export * from './components/atoms/tag/Tag';
export * from './components/atoms/text/Text';
export * from './components/atoms/textarea/Textarea';
export * from './components/atoms/tooltip/Tooltip';

// Molecules
export * from './components/molecules/breadcrumb/Breadcrumb';
export * from './components/molecules/form-field/FormField';
export * from './components/molecules/list-item/ListItem';
export * from './components/molecules/navigation-item/NavigationItem';
export * from './components/molecules/notification/Notification';
export * from './components/molecules/pagination/Pagination';
export * from './components/molecules/search-field/SearchField';
export * from './components/molecules/stat/Stat';
export * from './components/molecules/tag-chip/TagChip';

// Organisms
export * from './components/organisms/data-list/DataList';
export * from './components/organisms/empty-state/EmptyState';
export * from './components/organisms/form-section/FormSection';
export * from './components/organisms/modal/Modal';
export * from './components/organisms/page-header/PageHeader';
export * from './components/organisms/sidebar/Sidebar';
export * from './components/organisms/submission-card/SubmissionCard';

// Icons
export { icons, type IconName } from './components/atoms/icon/icons';

// Templates
export * from './templates/dashboard/DashboardTemplate';
export * from './templates/auth/AuthTemplate';

// Pages (reference implementations)
export * from './pages/coach-queue/CoachQueuePage';
export * from './pages/surfer-login/SurferLoginPage';

// Utilities
export { cx } from './lib/cx';
