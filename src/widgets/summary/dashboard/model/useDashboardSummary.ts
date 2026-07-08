import { useMemo } from 'react';
import { Transaction } from '@/entity/transaction';
import { getDashboardDeltas, getDashboardSummary } from './summary';

const useDashboardSummary = (
  currentTransactions: Transaction[],
  prevTransactions: Transaction[],
) => {
  const { currentSummary, prevSummary } = useMemo(() => {
    const currentSummary = getDashboardSummary(currentTransactions);
    const prevSummary = getDashboardSummary(prevTransactions);

    return { currentSummary, prevSummary };
  }, [currentTransactions, prevTransactions]);

  const summaryDeltas = useMemo(
    () => getDashboardDeltas(currentSummary, prevSummary),
    [currentSummary, prevSummary],
  );

  return { currentSummary, summaryDeltas };
};

export { useDashboardSummary };
