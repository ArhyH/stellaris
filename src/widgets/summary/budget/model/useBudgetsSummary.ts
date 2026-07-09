import { useMemo } from 'react';
import { BudgetOverviewItem } from '@/entity/budget';
import { BudgetsSummary } from './types';
import { getBudgetsSummary } from './summary';

const useBudgetsSummary = (
  budgetsData: BudgetOverviewItem[],
): BudgetsSummary => {
  return useMemo(() => getBudgetsSummary(budgetsData), [budgetsData]);
};

export { useBudgetsSummary };
