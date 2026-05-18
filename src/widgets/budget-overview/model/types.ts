import { ValueOf } from 'type-fest';
import { ICON, ID, LABEL } from '@/shared/types';

const budgetStatus = {
  normal: 'normal',
  warning: 'warning',
  over: 'over',
};

interface BudgetProgress {
  progressPercent: number;
  clampedProgressPercent: number;
  remaining: number;
  overflowAmount: number;
  status: ValueOf<typeof budgetStatus>;
}

interface BudgetOverviewItem extends BudgetProgress {
  id: ID;
  categoryIcon: ICON;
  categoryName: LABEL;
  spent: number;
  limit: number;
}

interface Options {
  limit?: boolean;
  sortByProgress?: boolean;
}

export type { BudgetProgress, BudgetOverviewItem, Options };
export { budgetStatus };
