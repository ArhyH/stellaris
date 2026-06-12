import { Dispatch, SetStateAction } from 'react';
import { FilterType } from '@/features/FilterByFinanceTransferType';
import { FinanceTransferTypes } from '@/shared/consts';
import { ID } from '@/shared/types';
import { Filters } from '../types';

const getTransactionsPageCallbacks = (
  setFilters: Dispatch<SetStateAction<Filters>>,
) => {
  const onCategoryFilterChange = (categoryId: ID) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: categoryId,
    }));
  };

  const onFinanceTypeFilterChange = (filterType: FilterType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: FinanceTransferTypes.all,
      financeType: filterType,
    }));
  };

  const onQueryFilterChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: value,
    }));
  };

  const onStartDateChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: {
        start: value,
        end: prevFilters.date.end,
      },
    }));
  };

  const onEndDateChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: {
        end: value,
        start: prevFilters.date.start,
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
