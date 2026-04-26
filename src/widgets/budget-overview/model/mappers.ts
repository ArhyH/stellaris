import { Budget } from '@/entity/budget';
import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import {
  BudgetOverviewItem,
  BudgetProgress,
  budgetStatus,
  Options,
} from './types';

const OVERVIEW_ITEMS_COUNT = 4;

const getBudgetProgress = (spent: number, limit: number): BudgetProgress => {
  if (limit === 0) {
    return {
      progressPercent: 0,
      clampedProgressPercent: 0,
      remaining: 0,
      overflowAmount: 0,
      status: budgetStatus.normal,
    };
  }

  const progressPercent = (spent / limit) * 100;
  const clampedProgressPercent = Math.min(progressPercent, 100);
  const overflowAmount = Math.max(spent - limit, 0);
  const remaining = Math.max(limit - spent, 0);
  let status = budgetStatus.normal;

  if (progressPercent >= 80) {
    status = budgetStatus.warning;
  }

  if (progressPercent >= 100) {
    status = budgetStatus.over;
  }

  return {
    progressPercent,
    clampedProgressPercent,
    remaining,
    overflowAmount,
    status,
  };
};

const mapBudgetsToOverviewItems = (
  budgets: Budget[],
  transactions: Transaction[],
  categories: Category[],
  options?: Options,
): BudgetOverviewItem[] => {
  const categorisMap = new Map(
    categories.map((category) => [category.id, category]),
  );

  const preparedBudgets = budgets.map((budget) => {
    const category = categorisMap.get(budget.categoryId);
    const spent = transactions.reduce(
      (acc, transaction) =>
        transaction.categoryId === budget.categoryId
          ? acc + transaction.amount
          : acc,
      0,
    );
    const progress = getBudgetProgress(spent, budget.limit);

    return {
      id: budget.id,
      categoryIcon: category?.icon || '',
      categoryName: category?.name || '',
      spent,
      limit: budget.limit,
      progressPercent: progress.progressPercent,
      clampedProgressPercent: progress.clampedProgressPercent,
      remaining: progress.remaining,
      overflowAmount: progress.overflowAmount,
      status: progress.status,
    };
  });

  let result = preparedBudgets;

  if (options?.sortByProgress) {
    result.sort((a, b) => b.progressPercent - a.progressPercent);
  }

  if (options?.limit) {
    result = result.slice(0, OVERVIEW_ITEMS_COUNT);
  }

  return result;
};

export { mapBudgetsToOverviewItems };
