import { useMemo } from 'react';
import { useTransactions } from '@/entity/transaction';
import { mapTransactionsToLineCharData } from './mapTransactionsToLineCharData';
import { getGroupByKey } from '@/shared/helpers';

const useLineChart = (currentKey: string) => {
  const { transactionsByMonth, transactionsDateKeys } = useTransactions();

  const index = useMemo(
    () => transactionsDateKeys.indexOf(currentKey),
    [transactionsDateKeys, currentKey],
  );

  const FROM = Math.max(0, index - 3);
  const TO = index + 1;

  const currentKeys = [...transactionsDateKeys].slice(FROM, TO);

  const lineChartData = useMemo(() => {
    return currentKeys.map((key) => {
      const transactions = getGroupByKey(transactionsByMonth, key);
      return mapTransactionsToLineCharData(transactions, key);
    });
  }, [transactionsByMonth, currentKey]);

  return lineChartData;
};

export { useLineChart };
