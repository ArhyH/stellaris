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

  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction,
  );

  return {
    transactions,

    transactionsList,
    transactionsByCategory,
    transactionByType,
    transactionsByMonth,

    addTransaction,
    deleteTransaction,
  };
};

export { useTransactions };
