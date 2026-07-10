import { useTransactions } from '@/entity/transaction';
import { getGroupByKey } from '@/shared/helpers';
import { useMemo } from 'react';
import { getTotalSavings } from './totalSavings';

const useTotalSavings = (lastDateKey: string) => {
  const { transactionsByMonth, transactionsDateKeys } = useTransactions();

  const { current, prev } = useMemo(() => {
    const index = transactionsDateKeys.indexOf(lastDateKey);
    const targetDateKeys = [...transactionsDateKeys].slice(0, index + 1);

    return targetDateKeys.reduce(
      (acc, key) => {
        const targetTransactions = getGroupByKey(transactionsByMonth, key);
        const saving = getTotalSavings(targetTransactions);

        acc.prev = acc.current;
        acc.current += saving;
        return acc;
      },
      { current: 0, prev: 0 },
    );
  }, [transactionsByMonth, transactionsDateKeys, lastDateKey]);

  const delta = current - prev;

  return {
    current,
    delta,
  };
};

export { useTotalSavings };
