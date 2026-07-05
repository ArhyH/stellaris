import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { getTransactionsSummary } from '@/widgets/summary';
import { mapTransactionsToRecentItems } from '@/widgets/transactions-list';

const useTransactionsData = (transactions: Transaction[]) => {
  const { categoriesList } = useCategories();

  const recentTransactions = useMemo(
    () => mapTransactionsToRecentItems(transactions, categoriesList),
    [transactions, categoriesList],
  );

  const summaries = useMemo(
    () => getTransactionsSummary(transactions),
    [transactions],
  );

  return { recentTransactions, summaries };
};

export { useTransactionsData };
