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
): TrendChartItem[] => {
  const now = new Date();
  const months = getLastNMonth(now, MONTHS_COUNT).reverse();

  return months.map((month) => {
    const currentTransactions = filterTransactionsByMonth(transactions, month);
    return {
      date: getMonthFromDate(month),
      ...getSummary(currentTransactions),
    };
  });
};

export { mapTransactionsToLineCharData };
