import { useTransactions } from '@/entity/transaction';
import { useMemo } from 'react';
import { mapTransactionsToRecentItems } from './mappers';
import { Category } from '@/entity/category';
import { ViewMode } from '@/shared/types';
import { ViewModes } from '@/shared/consts';

const useRecentTransactions = (categories: Category[], mode: ViewMode) => {
  const { transactionsByDate } = useTransactions();

  const hasLimit = mode === ViewModes.short;

  const recentTransactions = useMemo(
    () =>
      mapTransactionsToRecentItems(transactionsByDate, categories, hasLimit),
    [transactionsByDate, categories],
  );

  return recentTransactions;
};

export { useRecentTransactions };
