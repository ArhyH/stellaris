import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { getGroupByKey } from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import { useBudgetsData } from '@/widgets/budget-overview';
import { getBudgetsSummary } from '@/widgets/summary';
import { useBudgets } from '@/entity/budget';
import { ViewModes } from '@/shared/consts';

const useBudgetsPageData = () => {
  const { currentMonth } = useCurrentDate();
  const { transactionsByMonth } = useTransactions();
  const { activeCategories } = useCategories();
  const { budgets } = useBudgets();

  const month = useMemo(() => {
    const current = currentMonth.toISOString().slice(0, 7);
    return { current };
  }, [currentMonth]);

  const currentTransactions = useMemo(
    () => getGroupByKey(transactionsByMonth, month.current),
    [transactionsByMonth, month.current],
  );

  const budgetData = useBudgetsData(
    currentTransactions,
    activeCategories,
    ViewModes.long,
  );

  const budgetSummaries = useMemo(
    () => getBudgetsSummary(budgetData),
    [budgetData],
  );

  const hasCategories = activeCategories.length > 0;

  return {
    budgets,
    budgetData,
    budgetSummaries,
    hasCategories,
  };
};

export { useBudgetsPageData };
