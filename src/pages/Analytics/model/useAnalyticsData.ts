import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { FinanceTransferTypes } from '@/shared/consts';
import {
  getGroupByKey,
  getMonthFromDate,
  getMonthYearFromDate,
} from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import {
  mapTransactionsToBarCtartData,
  mapTransactionsToLineCharData,
  mapTransactionsToPieChartData,
} from '@/widgets/charts';
import { getAnalyticsDeltas, getAnalyticsSummary } from '@/widgets/summary';
import { getTopSpendingCategory } from '@/widgets/top-spending';
import { useMemo } from 'react';

const useAnalyticsData = () => {
  const { currentMonth, prevMonth } = useCurrentDate();
  const { transactionsList, transactionsByMonth } = useTransactions();
  const { categoriesList } = useCategories();

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

    const prevTransactions = getGroupByKey(transactionsByMonth, month.current);

    return { currentTransactions, prevTransactions, lineChartData };
  }, [transactionsByMonth, month.current, month.prev]);

  const lineChartData = useMemo(
    () => mapTransactionsToLineCharData(transactionsList, currentMonth),
    [transactionsList, currentMonth],
  );

  const { currentSummary, summaryDeltas } = useMemo(() => {
    const currentSummary = getAnalyticsSummary(currentTransactions);
    const prevSummary = getAnalyticsSummary(prevTransactions);
    const summaryDeltas = getAnalyticsDeltas(currentSummary, prevSummary);

    return {
      currentSummary,
      summaryDeltas,
    };
  }, [currentTransactions, prevTransactions]);

  const { incomePieData, expencePieData, topCategory } = useMemo(() => {
    const incomePieData = mapTransactionsToPieChartData(
      currentTransactions,
      categoriesList,
      FinanceTransferTypes.income,
    );

    const expencePieData = mapTransactionsToPieChartData(
      currentTransactions,
      categoriesList,
      FinanceTransferTypes.expense,
    );

    const topCategory = getTopSpendingCategory(
      currentTransactions,
      categoriesList,
    );

    return { incomePieData, expencePieData, topCategory };
  }, [currentTransactions, categoriesList]);

  const { barChartData, monthYear, monthDate } = useMemo(() => {
    const barChartData = mapTransactionsToBarCtartData(currentTransactions);

    const monthYear =
      currentTransactions.length > 0
        ? getMonthYearFromDate(currentTransactions[0].date)
        : getMonthYearFromDate(new Date().toISOString());

    const monthDate =
      currentTransactions.length > 0
        ? getMonthFromDate(currentTransactions[0].date)
        : getMonthFromDate(new Date().toISOString());

    return { barChartData, monthYear, monthDate };
  }, [currentTransactions]);

  return {
    currentSummary,
    summaryDeltas,
    incomePieData,
    expencePieData,
    barChartData,
    lineChartData,
    topCategory,
    monthYear,
    month: monthDate,
  };
};

export { useAnalyticsData };
