import { useTransactions } from '@/entity/transaction';
import { getGroupByKey } from '@/shared/helpers';
import { useMemo } from 'react';

const useTargetTransactions = (
  currentKey: string,
  prevKey: string | undefined,
) => {
  const { transactionsByMonth } = useTransactions();

  const { currentTransactions, prevTransactions } = useMemo(() => {
    const currentTransactions = getGroupByKey(transactionsByMonth, currentKey);

    const prevTransactions = getGroupByKey(transactionsByMonth, prevKey);

    return { currentTransactions, prevTransactions };
  }, [transactionsByMonth, currentKey, prevKey]);

  return { currentTransactions, prevTransactions };
};

export { useTargetTransactions };
