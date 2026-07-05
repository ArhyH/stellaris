import { useMemo } from 'react';
import { useBudgetStore } from './store';
import { groupBy } from '@/shared/helpers';

const useBudgets = () => {
  const budgets = useBudgetStore((state) => state.budgets);

  const budgetsList = useMemo(() => Object.values(budgets), [budgets]);

  const budgetsByCategory = useMemo(
    () => groupBy(budgetsList, (b) => b.categoryId),
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
