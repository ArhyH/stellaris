import { useMemo } from 'react';
import { useTransactionStore } from './store';

const useTransactions = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const transactionsList = useMemo(
    () => Object.values(transactions),
    [transactions],
  );

  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction,
  );

  return {
    transactions,
    transactionsList,
    addTransaction,
    deleteTransaction,
  };
};

export { useTransactions };
