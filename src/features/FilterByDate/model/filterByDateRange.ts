import { Transaction } from '@/entity/transaction';

interface filterDate {
  start: string;
  end: string;
}

const filterByDateRange = (
  transactions: Transaction[],
  date: filterDate,
): Transaction[] => {
  if (!date.start || !date.end) {
    return transactions;
  }

  return [...transactions].filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return (
      transactionDate >= new Date(date.start) &&
      transactionDate <= new Date(date.end)
    );
  });
};

export { filterByDateRange };
