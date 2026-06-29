import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import {
  filterTransactionsByMonth,
  getMonthYearFromDate,
  getPrevMonth,
} from '@/shared/helpers';
import { getDashboardDeltas, getDashboardSummary } from '@/widgets/summary';
import { mapTransactionsToRecentItems } from '@/widgets/transactions-list';
import { mapTransactionsToPieChartData } from '@/widgets/charts';
import { FinanceTransferTypes } from '@/shared/consts';
import { budgetsMock } from '@/shared/mocks/budgets';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview';

const useDashboardData = () => {
  const { transactionsList } = useTransactions();
  const { categoriesList } = useCategories();

  const now = new Date();
  const prevMonth = getPrevMonth(now);

  const { currentTransactions, currentSummary, deltas, monthYear } =
    useMemo(() => {
      const currentTransactions = filterTransactionsByMonth(
        transactionsList,
        now,
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

  const { recentTransactions, pieChartData, budgetData } = useMemo(() => {
    const recentTransactions = mapTransactionsToRecentItems(
      currentTransactions,
      categoriesList,
      true,
    );

    const pieChartData = mapTransactionsToPieChartData(
      currentTransactions,
      categoriesList,
      FinanceTransferTypes.expense,
    );

    const budgetData = mapBudgetsToOverviewItems(
      budgetsMock,
      currentTransactions,
      categoriesList,
      {
        sortByProgress: true,
        limit: true,
      },
    );

    return { recentTransactions, pieChartData, budgetData };
  }, [currentTransactions, categoriesList, budgetsMock]);

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
