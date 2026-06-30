import { useState } from 'react';
import { Budget, useBudgets } from '@/entity/budget';
import { ID } from '@/shared/types';

const getPageCallbacks = (budgets: Record<string, Budget>) => {
  const { addBudget, editBudget, deleteBudget } = useBudgets();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (budget: Budget) => {
    addBudget(budget);
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);

  const onEdit = (id: ID) => {
    setEditingBudget(budgets[id]);
  };

  const onEditSubmit = (budget: Budget) => {
    editBudget(budget);
    setEditingBudget(null);
  };

  const onEditClose = () => {
    setEditingBudget(null);
  };

  return {
    isOpen,
    editingBudget,
    onSubmit,
    onOpen,
    onClose,
    onEdit,
    onEditSubmit,
    onEditClose,
    deleteBudget,
  };
};

export { getPageCallbacks };
