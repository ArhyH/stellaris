import { Transaction } from '@/entity/transaction';
import { FinanceTransferTypes } from '../consts';

const getDailyTotal = (transactions: Transaction[]): Map<string, number> => {
  const dailyTotal = transactions
    .filter((transaction) => transaction.type === FinanceTransferTypes.expense)
    .reduce<Map<string, number>>((acc, transaction) => {
      const day = transaction.date.slice(0, 10);
      const current = acc.get(day) ?? 0;
      acc.set(day, current + transaction.amount);

      return acc;
    }, new Map());

  return dailyTotal;
};

export { getDailyTotal };
