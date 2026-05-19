import { BudgetOverviewItem, budgetStatus } from '@/entity/budget';
import { BudgetsSummary } from './types';

const getBudgetsSummary = (
  budgetsData: BudgetOverviewItem[],
): BudgetsSummary => {
  const { total, spent, remaining, over } = budgetsData.reduce(
    (acc, budget) => {
      acc.total += budget.limit;
      acc.spent += budget.spent;
      acc.remaining += budget.remaining;

      if (budget.status === budgetStatus.over) {
        acc.over += 1;
      }

      return acc;
    },
    {
      total: 0,
      spent: 0,
      remaining: 0,
      over: 0,
    },
  );

  return {
    total,
    spent,
    remaining,
    over,
  };
};

export { getBudgetsSummary };
