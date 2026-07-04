import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import {
  filterTransactionsByMonth,
  getMonthYearFromDate,
} from '@/shared/helpers';
import { getDashboardDeltas, getDashboardSummary } from '@/widgets/summary';
import { mapTransactionsToRecentItems } from '@/widgets/transactions-list';
import { mapTransactionsToPieChartData } from '@/widgets/charts';
import { FinanceTransferTypes } from '@/shared/consts';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview';
import { useCurrentDate } from '@/shared/hooks';
import { useBudgets } from '@/entity/budget';

const useDashboardData = () => {
  const { transactionsList } = useTransactions();
  const { categoriesList } = useCategories();
  const { currentMonth, prevMonth } = useCurrentDate();
  const { budgetsList } = useBudgets();

  const { currentTransactions, currentSummary, deltas, monthYear } =
    useMemo(() => {
      const currentTransactions = filterTransactionsByMonth(
        transactionsList,
        currentMonth,
      );

      const prevTransactions = filterTransactionsByMonth(
        transactionsList,
        prevMonth,
      );

      const currentSummary = getDashboardSummary(currentTransactions);
      const prevSummary = getDashboardSummary(prevTransactions);
      const deltas = getDashboardDeltas(currentSummary, prevSummary);

      const monthYear =
        currentTransactions.length > 0
          ? getMonthYearFromDate(currentTransactions[0].date)
          : getMonthYearFromDate(new Date().toISOString());

      return {
        currentTransactions,
        currentSummary,
        deltas,
        monthYear,
      };
    }, [transactionsList]);

  const recentTransactions = useMemo(
    () => mapTransactionsToRecentItems(transactionsList, categoriesList, true),
    [transactionsList, categoriesList],
  );

  const { pieChartData, budgetData } = useMemo(() => {
    const pieChartData = mapTransactionsToPieChartData(
      currentTransactions,
      categoriesList,
      FinanceTransferTypes.expense,
    );

    const budgetData = mapBudgetsToOverviewItems(
      budgetsList,
      currentTransactions,
      categoriesList,
      {
        sortByProgress: true,
        limit: true,
      },
    );

    return { pieChartData, budgetData };
  }, [currentTransactions, categoriesList, budgetsList]);

  return {
    currentSummary,
    deltas,
    recentTransactions,
    pieChartData,
    budgetData,
    monthYear,
  };
};

export { useDashboardData };
