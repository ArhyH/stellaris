import { useBudgets } from '@/entity/budget';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { DeleteState } from '@/features/category';
import { getGroupByKey } from '@/shared/helpers';
import { ID } from '@/shared/types';
import { useState } from 'react';

const useDeleteCategory = () => {
  const { budgetsByCategory, deleteBudget } = useBudgets();
  const { transactionsByCategory } = useTransactions();
  const { deleteCategory, archiveCategory } = useCategories();

  const [deleteState, setDeleteState] = useState<DeleteState | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleCategoryDelete = (id: ID) => {
    const categoryBudget = budgetsByCategory.get(id);
    const categoryTransactions = getGroupByKey(transactionsByCategory, id);

    const hasTransaction = categoryTransactions.length > 0;
    const hasBudget = categoryBudget !== undefined;

    if (hasTransaction || hasBudget) {
      setIsDeleteOpen(true);
      setDeleteState({
        categoryId: id,
        hasTransaction,
        dependentBudget: categoryBudget ?? null,
      });

      return;
    }

    deleteCategory(id);
  };

  const clearStates = () => {
    setIsDeleteOpen(false);
    setDeleteState(null);
  };

  const onDeleteSubmit = () => {
    if (!deleteState) {
      return;
    }

    if (deleteState.dependentBudget) {
      deleteBudget(deleteState.dependentBudget.id);
    }

    if (deleteState.hasTransaction) {
      archiveCategory(deleteState.categoryId);
      clearStates();
      return;
    }

    deleteCategory(deleteState.categoryId);
    clearStates();
  };

  const onDeleteCancel = () => {
    clearStates();
  };

  return {
    isDeleteOpen,
    deleteState,
    setIsDeleteOpen,
    handleCategoryDelete,
    onDeleteSubmit,
    onDeleteCancel,
  };
};

export { useDeleteCategory };
