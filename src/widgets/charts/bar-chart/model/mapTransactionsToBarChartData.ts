import { Transaction } from '@/entity/transaction';
import { BarChartItem } from './types';
import { getDailyTotal, getMonthDayFromDate } from '@/shared/helpers';

const mapTransactionsToBarCtartData = (
  transactions: Transaction[],
): BarChartItem[] => {
  const dailyTotal = getDailyTotal(transactions);

  return Array.from(dailyTotal.entries()).map(([day, value]) => {
    const date = getMonthDayFromDate(day);

    return {
      date: date,
      spent: value,
    };
  });
};

export { mapTransactionsToBarCtartData };
