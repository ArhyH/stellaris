import { useMemo } from 'react';
import { useBudgetStore } from './store';
import { ID } from '@/shared/types';
import { Budget } from '..';

const useBudgets = () => {
  const budgets = useBudgetStore((state) => state.budgets);

  const budgetsList = useMemo(() => Object.values(budgets), [budgets]);

  const budgetsByCategory = useMemo(
    () =>
      new Map<ID, Budget>(
        budgetsList.map((budget) => [budget.categoryId, budget]),
      ),
    [budgetsList],
  );

  const addBudget = useBudgetStore((state) => state.addBudget);

  const editBudget = useBudgetStore((state) => state.editBudget);

  const deleteBudget = useBudgetStore((state) => state.deleteBudget);

  return {
    budgets,

    budgetsList,
    budgetsByCategory,

    addBudget,
    editBudget,
    deleteBudget,
  };
};

export { useBudgets };
