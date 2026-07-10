import { useTransactions } from '@/entity/transaction';
import { getMonthYearFromDate } from '@/shared/helpers';

const useCurrentAnalytics = () => {
  const { transactionsDateKeys } = useTransactions();

  const currentMonth = new Date().toISOString().slice(0, 7);
  const isAnalyticsAvailable = transactionsDateKeys.includes(currentMonth);
  const displayDate = getMonthYearFromDate(currentMonth);

  return { isAnalyticsAvailable, displayDate };
};

export { useCurrentAnalytics };
