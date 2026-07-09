import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { getGroupByKey } from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import { useBudgetsData } from '@/widgets/budget-overview';
import { useBudgetsSummary } from '@/widgets/summary';
import { useBudgets } from '@/entity/budget';
import { ViewModes } from '@/shared/consts';

const useBudgetsPageData = () => {
  const { currentMonth } = useCurrentDate();
  const { transactionsByMonth } = useTransactions();
  const { activeCategoriesByType } = useCategories();
  const { budgets, budgetsByCategory } = useBudgets();

  const month = currentMonth.toISOString().slice(0, 7);

  const currentTransactions = useMemo(
    () => getGroupByKey(transactionsByMonth, month),
    [transactionsByMonth, month],
  );

  const currentCategories = getGroupByKey(activeCategoriesByType, 'expense');

  const budgetsData = useBudgetsData(
    currentTransactions,
    currentCategories,
    ViewModes.long,
  );

  const budgetSummaries = useBudgetsSummary(budgetsData);

  const hasCategories = currentCategories.length > 0;

  const allActiveCategoriesWithBudget = currentCategories.every((category) =>
    budgetsByCategory.has(category.id),
  );

  const isCreateBudgetEnabled = hasCategories && !allActiveCategoriesWithBudget;

  return {
    budgets,
    budgetsData,
    budgetSummaries,
    isCreateBudgetEnabled,
    hasCategories,
    allActiveCategoriesWithBudget,
  };
};

export { useBudgetsPageData };
