import { Transaction } from '@/entity/transaction';
import { TrendChartItem } from './types';
import { getMonthFromDate, getSummary } from '@/shared/helpers';

const mapTransactionsToLineCharData = (
  transactions: Transaction[],
  key: string,
): TrendChartItem => {
  return {
    date: getMonthFromDate(key),
    ...getSummary(transactions),
  };
};

export { mapTransactionsToLineCharData };
