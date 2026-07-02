import { useBudgets } from '@/entity/budget';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { DeleteState } from '@/features/DeleteCategory';
import { ID } from '@/shared/types';
import { useState } from 'react';

const useDeleteCategory = () => {
  const { budgetsList, deleteBudget } = useBudgets();
  const { transactionsList } = useTransactions();
  const { deleteCategory, archiveCategory } = useCategories();

  const [deleteState, setDeleteState] = useState<DeleteState | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const transactionSet = new Set(
    transactionsList.map((transaction) => transaction.categoryId),
  );

  const handleCategoryDelete = (id: ID) => {
    const connectedBudget = budgetsList.find(
      (budget) => budget.categoryId === id,
    );

    const hasTransaction = transactionSet.has(id);

    if (hasTransaction || connectedBudget) {
      setIsDeleteOpen(true);
      setDeleteState({
        categoryId: id,
        hasTransaction,
        dependentBudget: connectedBudget ?? null,
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
