import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';

const useTransactions = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction,
  );

  const categories = Object.values(
    useCategoryStore((state) => state.categories),
  );

  const transactionsList = Object.values(transactions);

  return {
    transactions,
    transactionsList,
    categories,
    addTransaction,
    deleteTransaction,
  };
};

export { useTransactions };
