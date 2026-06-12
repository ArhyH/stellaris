import { FilterType } from '@/features/FilterByFinanceTransferType';

type Filters = {
  category: string;
  financeType: FilterType;
  searchQuery: string;
  date: { start: string; end: string };
};

export { Filters };
