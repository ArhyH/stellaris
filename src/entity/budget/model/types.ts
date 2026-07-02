import { ValueOf } from 'type-fest';
import { AMOUNT, ICON, ID, LABEL } from '@/shared/types';
import { budgetStatus } from './consts';
import { CategoryColor } from '@/shared/styles';

interface Budget {
  categoryId: ID;
  id: ID;
  limit: AMOUNT;
}

interface BudgetProgress {
  progressPercent: number;
  clampedProgressPercent: number;
  remaining: number;
  overflowAmount: number;
  status: ValueOf<typeof budgetStatus>;
}

interface BudgetOverviewItem extends BudgetProgress {
  id: ID;
  categoryIcon: ICON | undefined;
  categoryName: LABEL;
  categoryColor: CategoryColor | undefined;
  categoryIconColor: CategoryColor | undefined;
  categoryId: ID | undefined;
  spent: number;
  limit: number;
}

interface Options {
  limit?: boolean;
  sortByProgress?: boolean;
}

type BudgetItem = Record<string, Budget>;

export type { BudgetProgress, BudgetOverviewItem, Options, Budget, BudgetItem };
