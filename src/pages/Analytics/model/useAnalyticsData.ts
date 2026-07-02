import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { FinanceTransferTypes } from '@/shared/consts';
import {
  filterTransactionsByMonth,
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
  const { transactionsList } = useTransactions();
  const { categoriesList } = useCategories();

  const { currentTransactions, prevTransactions, lineChartData } =
    useMemo(() => {
      const currentTransactions = filterTransactionsByMonth(
        transactionsList,
        currentMonth,
      );

      const prevTransactions = filterTransactionsByMonth(
        transactionsList,
        prevMonth,
      );

      const lineChartData = mapTransactionsToLineCharData(
        transactionsList,
        currentMonth,
      );

      return { currentTransactions, prevTransactions, lineChartData };
    }, [transactionsList, currentMonth, prevMonth]);

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

  const { barChartData, monthYear, month } = useMemo(() => {
    const barChartData = mapTransactionsToBarCtartData(currentTransactions);

    const monthYear =
      currentTransactions.length > 0
        ? getMonthYearFromDate(currentTransactions[0].date)
        : getMonthYearFromDate(new Date().toISOString());

    const month =
      currentTransactions.length > 0
        ? getMonthFromDate(currentTransactions[0].date)
        : getMonthFromDate(new Date().toISOString());

    return { barChartData, monthYear, month };
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
    month,
  };
};

export { useAnalyticsData };
