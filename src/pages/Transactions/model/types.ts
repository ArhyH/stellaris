import { FilterType } from '@/features/FilterByFinanceTransferType';

interface Filters {
  category: string;
  financeType: FilterType;
  searchQuery: string;
  date: { start: string; end: string };
}

export type { Filters };
