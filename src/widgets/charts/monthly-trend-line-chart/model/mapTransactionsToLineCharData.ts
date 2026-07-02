import { Transaction } from '@/entity/transaction';
import { TrendChartItem } from './types';
import {
  filterTransactionsByMonth,
  getLastNMonth,
  getMonthFromDate,
  getSummary,
} from '@/shared/helpers';

const MONTHS_COUNT = 4;

const mapTransactionsToLineCharData = (
  transactions: Transaction[],
  currentMonth: Date,
): TrendChartItem[] => {
  const months = getLastNMonth(currentMonth, MONTHS_COUNT).reverse();

  return months.map((month) => {
    const currentTransactions = filterTransactionsByMonth(transactions, month);
    return {
      date: getMonthFromDate(month),
      ...getSummary(currentTransactions),
    };
  });
};

export { mapTransactionsToLineCharData };
