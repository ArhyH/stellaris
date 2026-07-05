import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { getGroupByKey } from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview';
import { getBudgetsSummary } from '@/widgets/summary';
import { useBudgets } from '@/entity/budget';

const useBudgetsData = () => {
  const { currentMonth } = useCurrentDate();
  const { transactionsByMonth } = useTransactions();
  const { activeCategories } = useCategories();
  const { budgets, budgetsList } = useBudgets();

  const month = useMemo(() => {
    const current = currentMonth.toISOString().slice(0, 7);
    return { current };
  }, [currentMonth]);

  const currentTransactions = useMemo(
    () => getGroupByKey(transactionsByMonth, month.current),
    [transactionsByMonth, month.current],
  );

  const budgetData = useMemo(
    () =>
      mapBudgetsToOverviewItems(
        budgetsList,
        currentTransactions,
        activeCategories,
      ),
    [budgetsList, currentTransactions, activeCategories],
  );

  const budgetSummaries = useMemo(
    () => getBudgetsSummary(budgetData),
    [budgetData],
  );

  return {
    budgets,
    activeCategories,
    budgetsList,
    budgetData,
    budgetSummaries,
  };
};

export { useBudgetsData };
