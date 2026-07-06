import { getMonthYearFromDate } from '@/shared/helpers';

const getPlaceholderOption = (
  hasTransactions: boolean,
  transactionsDateKeys: string[],
  currentDate: string,
) => {
  if (hasTransactions && transactionsDateKeys.length) {
    return {
      value: transactionsDateKeys[transactionsDateKeys.length - 1],
      description: getMonthYearFromDate(
        transactionsDateKeys[transactionsDateKeys.length - 1],
      ),
    };
  }
  return {
    value: currentDate,
    description: getMonthYearFromDate(currentDate),
  };
};

const getSelectOptions = (transactionsDateKeys: string[]) => {
  return transactionsDateKeys.map((month) => ({
    value: month,
    description: getMonthYearFromDate(month),
  }));
};

export { getPlaceholderOption, getSelectOptions };
