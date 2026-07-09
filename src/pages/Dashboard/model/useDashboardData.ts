import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { getGroupByKey, getMonthYearFromDate } from '@/shared/helpers';
import { useDashboardSummary } from '@/widgets/summary';
import { useRecentTransactions } from '@/widgets/transaction';
import { usePieChart } from '@/widgets/charts';
import { FinanceTransferTypes, ViewModes } from '@/shared/consts';
import { useBudgetsData } from '@/widgets/budget';
import { useCurrentDate } from '@/shared/hooks';

const useDashboardData = () => {
  const { transactionsByMonth, transactionsByDate } = useTransactions();
  const { categoriesList } = useCategories();
  const { currentMonth, prevMonth } = useCurrentDate();

  const month = {
    current: currentMonth.toISOString().slice(0, 7),
    prev: prevMonth.toISOString().slice(0, 7),
  };

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

  const { currentSummary, summaryDeltas } = useDashboardSummary(
    currentTransactions,
    prevTransactions,
  );

  const monthYear =
    currentTransactions.length > 0
      ? getMonthYearFromDate(currentTransactions[0].date)
      : getMonthYearFromDate(new Date().toISOString());

  const recentTransactions = useRecentTransactions(
    transactionsByDate,
    categoriesList,
    ViewModes.short,
  );

  const pieChartData = usePieChart(
    currentTransactions,
    FinanceTransferTypes.expense,
  );

  const budgetData = useBudgetsData(
    currentTransactions,
    categoriesList,
    ViewModes.short,
  );

  return {
    currentSummary,
    summaryDeltas,
    recentTransactions,
    pieChartData,
    budgetData,
    monthYear,
  };
};

export { useDashboardData };
