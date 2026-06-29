import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { filterTransactionsByMonth } from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import { budgetsMock } from '@/shared/mocks/budgets';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview';
import { getBudgetsSummary } from '@/widgets/summary';

const useBudgetsData = () => {
  const { currentMonth } = useCurrentDate();
  const { transactionsList } = useTransactions();
  const { categoriesList } = useCategories();

  const currentTransactions = useMemo(
    () => filterTransactionsByMonth(transactionsList, currentMonth),
    [transactionsList, currentMonth],
  );

  const budgetData = useMemo(
    () =>
      mapBudgetsToOverviewItems(
        budgetsMock,
        currentTransactions,
        categoriesList,
      ),
    [budgetsMock, currentTransactions, categoriesList],
  );

  const budgetSummaries = useMemo(
    () => getBudgetsSummary(budgetData),
    [budgetData],
  );

  return {
    budgetData,
    budgetSummaries,
  };
};

export { useBudgetsData };
