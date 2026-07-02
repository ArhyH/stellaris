import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { filterTransactionsByMonth } from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview';
import { getBudgetsSummary } from '@/widgets/summary';
import { useBudgets } from '@/entity/budget';

const useBudgetsData = () => {
  const { currentMonth } = useCurrentDate();
  const { transactionsList } = useTransactions();
  const { categoriesList } = useCategories();
  const { budgets, budgetsList } = useBudgets();

  const currentTransactions = useMemo(
    () => filterTransactionsByMonth(transactionsList, currentMonth),
    [transactionsList, currentMonth],
  );

  const budgetData = useMemo(
    () =>
      mapBudgetsToOverviewItems(
        budgetsList,
        currentTransactions,
        categoriesList,
      ),
    [budgetsList, currentTransactions, categoriesList],
  );

  const budgetSummaries = useMemo(
    () => getBudgetsSummary(budgetData),
    [budgetData],
  );

  return {
    budgets,
    categoriesList,
    budgetsList,
    budgetData,
    budgetSummaries,
  };
};

export { useBudgetsData };
