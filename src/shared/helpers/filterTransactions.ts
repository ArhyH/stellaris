import { Transaction } from '@/entity/transaction';

const isSameMonthAndYear = (date: Date, reference: Date): boolean => {
  return (
    date.getMonth() === reference.getMonth() &&
    date.getFullYear() === reference.getFullYear()
  );
};

const filterTransactionsByMonth = (
  transactions: Transaction[],
  reference: Date,
): Transaction[] => {
  return transactions.filter((transaction) =>
    isSameMonthAndYear(new Date(transaction.date), reference),
  );
};

export { filterTransactionsByMonth };
