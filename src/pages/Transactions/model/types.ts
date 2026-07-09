import { FilterByTypeValue } from '@/features/filters';

interface Filters {
  category: string;
  financeType: FilterByTypeValue;
  searchQuery: string;
  date: { start: string; end: string };
}

export type { Filters };
