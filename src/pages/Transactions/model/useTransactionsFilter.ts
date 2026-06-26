import { useMemo, useState } from 'react';
import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { filterByCategory } from '@/features/FilterByCategory';
import { filterByDateRange } from '@/features/FilterByDate/model/filterByDateRange';
import {
  DEFAULT_FILTER,
  filterDataByFinanceTransferType,
  filterTypes,
} from '@/features/FilterByFinanceTransferType';
import { filterBySearchQuery } from '@/features/FilterByQuery';
import { FinanceTransferTypes } from '@/shared/consts';

const useTransactionsFilter = (
  categories: Category[],
  transactions: Transaction[],
) => {
  const [filters, setFilters] = useState({
    category: FinanceTransferTypes.all,
    financeType: DEFAULT_FILTER,
    searchQuery: '',
    date: {
      start: '',
      end: '',
    },
  });

  const currerntCatefory = filters.category;
  const currentQuery = filters.searchQuery;

  const currentTransactions = useMemo(() => {
    const transactionsByType = filterDataByFinanceTransferType(
      transactions,
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
  }, [filters, transactions]);

  const currentCategories = useMemo(() => {
    if (filters.financeType === filterTypes.all) {
      return categories;
    }

    return [...categories].filter(
      (category) => category.type === filters.financeType,
    );
  }, [filters.financeType, transactions]);

  return {
    setFilters,
    currerntCatefory,
    currentQuery,
    currentTransactions,
    currentCategories,
  };
};

export { useTransactionsFilter };
