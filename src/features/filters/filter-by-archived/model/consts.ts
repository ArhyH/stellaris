import { FilterByArchivedValue } from './types';

const filterTypes = {
  archived: 'archived',
  active: 'active',
};

const DEFAULT_STATE_FILTER: FilterByArchivedValue = filterTypes.active;

const FILTERS = [
  { label: 'Active', value: filterTypes.active },
  { label: 'Archived', value: filterTypes.archived },
];

export { filterTypes, FILTERS, DEFAULT_STATE_FILTER };
