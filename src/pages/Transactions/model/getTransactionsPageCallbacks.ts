import { Dispatch, SetStateAction } from 'react';
import { FilterByTypeValue } from '@/features/FilterByFinanceTransferType';
import { FinanceTransferTypes } from '@/shared/consts';
import { ID } from '@/shared/types';
import { Filters } from './types';

const getTransactionsPageCallbacks = (
  setFilters: Dispatch<SetStateAction<Filters>>,
) => {
  const onCategoryFilterChange = (categoryId: ID) => {
    setFilters((prev) => ({
      ...prev,
      category: categoryId,
    }));
  };

  const onFinanceTypeFilterChange = (filterType: FilterByTypeValue) => {
    setFilters((prev) => ({
      ...prev,
      category: FinanceTransferTypes.all,
      financeType: filterType,
    }));
  };

  const onQueryFilterChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: value,
    }));
  };

  const onStartDateChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        start: value,
      },
    }));
  };

  const onEndDateChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        end: value,
      },
    }));
  };

  return {
    onCategoryFilterChange,
    onFinanceTypeFilterChange,
    onQueryFilterChange,
    onStartDateChange,
    onEndDateChange,
  };
};

export { getTransactionsPageCallbacks };
