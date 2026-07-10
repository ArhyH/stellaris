import { Transaction } from '@/entity/transaction';
import { useMemo } from 'react';
import { mapTransactionsToRecentItems } from './mappers';
import { Category } from '@/entity/category';
import { ViewMode } from '@/shared/types';
import { ViewModes } from '@/shared/consts';

const useRecentTransactions = (
  transactions: Transaction[],
  categories: Category[],
  mode: ViewMode,
) => {
  const hasLimit = mode === ViewModes.short;

  const recentTransactions = useMemo(
    () => mapTransactionsToRecentItems(transactions, categories, hasLimit),
    [transactions, categories],
  );

  return recentTransactions;
};

export { useRecentTransactions };
