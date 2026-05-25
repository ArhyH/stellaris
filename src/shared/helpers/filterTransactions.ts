import { Transaction } from '@/entity/transaction';

const isSameMonthAndYear = (date: Date, reference: Date): boolean => {
  return (
    date.getMonth() === reference.getMonth() &&
    date.getFullYear() === reference.getFullYear()
  );
};

const getPrevMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};

const filterTransactionsByMonth = (
  transactions: Transaction[],
  reference: Date,
): Transaction[] => {
  return transactions.filter((transaction) =>
    isSameMonthAndYear(new Date(transaction.date), reference),
  );
};

export { filterTransactionsByMonth, getPrevMonth };
