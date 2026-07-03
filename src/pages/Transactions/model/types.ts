import { FilterByTypeValue } from '@/features/FilterByFinanceTransferType';

interface Filters {
  category: string;
  financeType: FilterByTypeValue;
  searchQuery: string;
  date: { start: string; end: string };
}

export type { Filters };
