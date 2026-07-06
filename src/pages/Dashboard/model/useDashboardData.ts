import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { getGroupByKey, getMonthYearFromDate } from '@/shared/helpers';
import { getDashboardDeltas, getDashboardSummary } from '@/widgets/summary';
import { mapTransactionsToRecentItems } from '@/widgets/transactions-list';
import { usePieChart } from '@/widgets/charts';
import { FinanceTransferTypes } from '@/shared/consts';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview';
import { useCurrentDate } from '@/shared/hooks';
import { useBudgets } from '@/entity/budget';

const useDashboardData = () => {
  const { transactionsList, transactionsByMonth } = useTransactions();
  const { categoriesList } = useCategories();
  const { currentMonth, prevMonth } = useCurrentDate();
  const { budgetsList } = useBudgets();

  const month = useMemo(() => {
    const current = currentMonth.toISOString().slice(0, 7);
    const prev = prevMonth.toISOString().slice(0, 7);
    return { current, prev };
  }, [currentMonth, prevMonth]);

  const { currentTransactions, prevTransactions } = useMemo(() => {
    const currentTransactions = getGroupByKey(
      transactionsByMonth,
      month.current,
    );
    const prevTransactions = getGroupByKey(transactionsByMonth, month.prev);

    return {
      currentTransactions,
      prevTransactions,
    };
  }, [transactionsByMonth, month.current, month.prev]);

  const { currentSummary, deltas, monthYear } = useMemo(() => {
    const currentSummary = getDashboardSummary(currentTransactions);
    const prevSummary = getDashboardSummary(prevTransactions);
    const deltas = getDashboardDeltas(currentSummary, prevSummary);

    const monthYear =
      currentTransactions.length > 0
        ? getMonthYearFromDate(currentTransactions[0].date)
        : getMonthYearFromDate(new Date().toISOString());

    return {
      currentSummary,
      deltas,
      monthYear,
    };
  }, [currentTransactions, prevTransactions]);

  const recentTransactions = useMemo(
    () => mapTransactionsToRecentItems(transactionsList, categoriesList, true),
    [transactionsList, categoriesList],
  );

  const { pieChartData, budgetData } = useMemo(() => {
    const pieChartData = usePieChart(
      currentTransactions,
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
