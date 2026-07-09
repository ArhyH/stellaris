import { Transaction } from '@/entity/transaction';

interface filterDate {
  start: string;
  end: string;
}

const filterByDateRange = (
  transactions: Transaction[],
  date: filterDate,
): Transaction[] => {
  return [...transactions].filter((transaction) => {
    const transactionDate = new Date(transaction.date);

    const startDate = date?.start ? new Date(date.start) : null;
    const endDate = date?.end ? new Date(date.end) : null;

    if (startDate && transactionDate < startDate) {
      return false;
    }

    if (endDate && transactionDate > endDate) {
      return false;
    }

    return true;
  });
};

export { filterByDateRange };
