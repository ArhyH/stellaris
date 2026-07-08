import { Transaction } from '@/entity/transaction';
import { FinanceTransferTypes } from '../consts';
import { Summary } from '../types';

const getSummary = (transactions: Transaction[]): Summary => {
  const { income, expense } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === FinanceTransferTypes.income) {
        acc.income += transaction.amount;
      }

      if (transaction.type === FinanceTransferTypes.expense) {
        acc.expense += transaction.amount;
      }

      return acc;
    },
    {
      income: 0,
      expense: 0,
    },
  );

  return {
    income,
    expense,
  };
};

export { getSummary };
export type { Summary };
