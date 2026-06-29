import { useMemo } from 'react';
import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { getTransactionsSummary } from '@/widgets/summary';
import { mapTransactionsToRecentItems } from '@/widgets/transactions-list';

const useTransactionsData = (
  transactions: Transaction[],
  categories: Category[],
) => {
  const recentTransactions = useMemo(
    () => mapTransactionsToRecentItems(transactions, categories),
    [transactions, categories],
  );

  const summaries = useMemo(
    () => getTransactionsSummary(transactions),
    [transactions],
  );

  return { recentTransactions, summaries };
};

export { useTransactionsData };
