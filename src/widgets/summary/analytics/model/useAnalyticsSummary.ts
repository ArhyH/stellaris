import { useMemo } from 'react';
import { Transaction } from '@/entity/transaction';
import { getAnalyticsDeltas, getAnalyticsSummary } from './summary';

const useAnalyticsSummary = (
  currentTransactions: Transaction[],
  prevTransactions: Transaction[],
) => {
  const { currentSummary, prevSummary } = useMemo(() => {
    const currentSummary = getAnalyticsSummary(currentTransactions);
    const prevSummary = getAnalyticsSummary(prevTransactions);

    return { currentSummary, prevSummary };
  }, [currentTransactions, prevTransactions]);

  const summaryDeltas = useMemo(
    () => getAnalyticsDeltas(currentSummary, prevSummary),
    [currentSummary, prevSummary],
  );

  return { currentSummary, summaryDeltas };
};

export { useAnalyticsSummary };
