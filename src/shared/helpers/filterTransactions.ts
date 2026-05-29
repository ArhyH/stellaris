import { Transaction } from '@/entity/transaction';
import { FinanceTransferType } from '../types';

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

const filterTransactionsByType = (
  transactions: Transaction[],
  reference: FinanceTransferType,
) => {
  return transactions.filter((transaction) => transaction.type === reference);
};

export { filterTransactionsByMonth, filterTransactionsByType };
