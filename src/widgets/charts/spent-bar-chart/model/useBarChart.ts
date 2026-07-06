import { useMemo } from 'react';
import { Transaction } from '@/entity/transaction';
import { mapTransactionsToBarCtartData } from './mapTransactionsToBarChartData';

const useBarChart = (transactions: Transaction[]) => {
  const barChartData = useMemo(
    () => mapTransactionsToBarCtartData(transactions),
    [transactions],
  );

  return barChartData;
};

export { useBarChart };
