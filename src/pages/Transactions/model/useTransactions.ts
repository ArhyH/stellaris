import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';

const useTransactions = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction,
  );

  const categories = Object.values(
    useCategoryStore((state) => state.categories),
  );

  const transactionsList = Object.values(transactions);

  return {
    transactionsList,
    categories,
    deleteTransaction,
  };
};

export { useTransactions };
