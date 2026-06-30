import { useMemo } from 'react';
import { useBudgetStore } from './store';

const useBudgets = () => {
  const budgets = useBudgetStore((state) => state.budgets);

  const budgetsList = useMemo(() => Object.values(budgets), [budgets]);

  const addBudget = useBudgetStore((state) => state.addBudget);
  const editBudget = useBudgetStore((state) => state.editBudget);
  const deleteBudget = useBudgetStore((state) => state.deleteBudget);

  return {
    budgets,
    budgetsList,
    addBudget,
    editBudget,
    deleteBudget,
  };
};

export { useBudgets };
