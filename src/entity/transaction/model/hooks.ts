import { useMemo } from 'react';
import { useTransactionStore } from './store';
import { groupBy } from '@/shared/helpers';

const useTransactions = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const transactionsList = useMemo(
    () => Object.values(transactions),
    [transactions],
  );

  const transactionsByCategory = useMemo(
    () => groupBy(transactionsList, (t) => t.categoryId),
    [transactionsList],
  );

  const transactionByType = useMemo(
    () => groupBy(transactionsList, (t) => t.type),
    [transactionsList],
  );

  const transactionsByMonth = useMemo(
    () => groupBy(transactionsList, (t) => t.date.slice(0, 7)),
    [transactionsList],
  );

  const transactionsByDate = useMemo(
    () =>
      [...transactionsList].sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date),
      ),
    [transactionsList],
  );

  const transactionsDateKeys = useMemo(
    () =>
      Object.keys(transactionsByMonth).sort(
        (a, b) => new Date(a).getTime() - new Date(b).getTime(),
      ),
    [transactionsByMonth],
  );

  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction,
  );

  return {
    transactions,

    transactionsList,
    transactionsByCategory,
    transactionByType,
    transactionsByDate,
    transactionsByMonth,
    transactionsDateKeys,

    addTransaction,
    deleteTransaction,
  };
};

export { useTransactions };
