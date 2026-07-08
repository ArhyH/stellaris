import { useMemo } from 'react';
import { useTransactions } from '@/entity/transaction';
import { useLineChart } from '@/widgets/charts/monthly-trend-line-chart';
import { useAnalyticsSummary } from '@/widgets/summary';
import { useBarChart, usePieChart } from '@/widgets/charts';
import { FinanceTransferTypes } from '@/shared/consts';
import { useTopStendingCategory } from '@/widgets/top-spending';
import { useTargetTransactions } from './useTargetTransactions';
import { getMonthYearFromDate } from '@/shared/helpers';

const useAnalyticsData = (transactionsKey: string) => {
  const { transactionsDateKeys } = useTransactions();

  const isSelectEnabled = transactionsDateKeys.length > 1;

  const prevKey = useMemo(() => {
    const index = transactionsDateKeys.indexOf(transactionsKey);
    const prevKey = index > 0 ? transactionsDateKeys[index - 1] : undefined;

    return prevKey;
  }, [transactionsDateKeys, transactionsKey]);

  const { currentTransactions, prevTransactions } = useTargetTransactions(
    transactionsKey,
    prevKey,
  );

  const lineChartData = useLineChart(transactionsKey);

  const { currentSummary, summaryDeltas } = useAnalyticsSummary(
    currentTransactions,
    prevTransactions,
  );

  const incomePieData = usePieChart(
    currentTransactions,
    FinanceTransferTypes.income,
  );

  const expencePieData = usePieChart(
    currentTransactions,
    FinanceTransferTypes.expense,
  );

  const topCategory = useTopStendingCategory(currentTransactions);

  const barChart = useBarChart(currentTransactions);

  const date = transactionsKey
    ? getMonthYearFromDate(transactionsKey)
    : new Date().toISOString().slice(0, 7);

  return {
    isSelectEnabled,
    lineChartData,
    currentSummary,
    summaryDeltas,
    incomePieData,
    expencePieData,
    topCategory,
    barChart,
    date,
  };
};

export { useAnalyticsData };
