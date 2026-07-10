import { useMemo } from 'react';
import { useTransactions } from '@/entity/transaction';
import { useAnalyticsSummary } from '@/widgets/summary';
import { useBarChart, usePieChart, useLineChart } from '@/widgets/charts';
import { FinanceTransferTypes } from '@/shared/consts';
import { useTopStendingCategory } from '@/widgets/top-spending';
import { useTargetTransactions } from './useTargetTransactions';
import { getMonthYearFromDate } from '@/shared/helpers';
import { useTotalSavings } from '@/widgets/summary/analytics/model/useTotalSavings';
import {
  AnalyticsSummaryType,
  SummaryDeltas,
} from '@/widgets/summary/analytics';

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

  const totalSavings = useTotalSavings(transactionsKey);

  const summaries: AnalyticsSummaryType = {
    ...currentSummary,
    totalSavings: totalSavings.current,
  };

  const deltas: SummaryDeltas = {
    ...summaryDeltas,
    totalSavings: totalSavings.delta,
  };

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
    summaries,
    deltas,
    incomePieData,
    expencePieData,
    topCategory,
    barChart,
    date,
  };
};

export { useAnalyticsData };
