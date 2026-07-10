import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { getGroupByKey } from '@/shared/helpers';
import { ID } from '@/shared/types';

const useDeleteTransactions = () => {
  const { transactions, transactionsByCategory, deleteTransaction } =
    useTransactions();
  const { categories, deleteCategory } = useCategories();

  const onDelete = (id: ID) => {
    const currentTransaction = transactions[id];

    const currentCategory = categories[currentTransaction.categoryId];

    const categoryTransactions = getGroupByKey(
      transactionsByCategory,
      currentTransaction.categoryId,
    );

    const isLastTransaction = categoryTransactions.length === 1;
    const isArchivedCategory = currentCategory?.isArchived;

    if (isLastTransaction && isArchivedCategory) {
      deleteTransaction(id);
      deleteCategory(currentCategory.id);
      return;
    }

    deleteTransaction(id);
  };

  return { onDelete };
};

export { useDeleteTransactions };
