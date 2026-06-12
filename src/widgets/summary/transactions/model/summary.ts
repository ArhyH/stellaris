import { Transaction } from '@/entity/transaction';
import { TransactionsSummary } from './types';
import { FinanceTransferTypes } from '@/shared/consts';

const getTransactionsSummary = (
  transaction: Transaction[],
): TransactionsSummary => {
  const { income, expense } = transaction.reduce(
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
    delta: income - expense,
  };
};

export { getTransactionsSummary };
