import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { getTransactionsSummary } from '@/widgets/summary';
import { useRecentTransactions } from '@/widgets/transactions-list';
import { ViewModes } from '@/shared/consts';

const useTransactionsData = (transactions: Transaction[]) => {
  const { categoriesList } = useCategories();

  const recentTransactions = useRecentTransactions(
    categoriesList,
    ViewModes.long,
  );

  const summaries = useMemo(
    () => getTransactionsSummary(transactions),
    [transactions],
  );

  return { recentTransactions, summaries };
};

export { useTransactionsData };
