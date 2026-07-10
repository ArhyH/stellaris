import { useMemo, useState } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import {
  filterByCategory,
  filterByDateRange,
  DEFAULT_TYPE_FILTER,
  filterDataByFinanceTransferType,
  filterTypes,
  filterBySearchQuery,
} from '@/features/filters';

import { FinanceTransferTypes } from '@/shared/consts';

const useTransactionsFilter = () => {
  const { transactionsList } = useTransactions();
  const { activeCategories } = useCategories();

  const [filters, setFilters] = useState({
    category: FinanceTransferTypes.all,
    financeType: DEFAULT_TYPE_FILTER,
    searchQuery: '',
    date: {
      start: '',
      end: '',
    },
  });

  const currerntCatefory = filters.category;
  const currentQuery = filters.searchQuery;
  const isFiltersDisabled = transactionsList.length === 0;

  const currentTransactions = useMemo(() => {
    const transactionsByType = filterDataByFinanceTransferType(
      transactionsList,
      filters.financeType,
    );

    const transactionsByCategory = filterByCategory(
      transactionsByType,
      filters.category,
    );

    const transactionsByQuery = filterBySearchQuery(
      transactionsByCategory,
      filters.searchQuery,
    );

    const transactionsByDate = filterByDateRange(
      transactionsByQuery,
      filters.date,
    );

    return transactionsByDate;
  }, [
    transactionsList,
    filters.financeType,
    filters.category,
    filters.searchQuery,
    filters.date,
  ]);

  const currentCategories = useMemo(() => {
    if (filters.financeType === filterTypes.all) {
      return activeCategories;
    }

    return activeCategories.filter(
      (category) => category.type === filters.financeType,
    );
  }, [filters.financeType, activeCategories]);

  return {
    setFilters,
    currerntCatefory,
    currentQuery,
    currentTransactions,
    currentCategories,
    isFiltersDisabled,
  };
};

export { useTransactionsFilter };
