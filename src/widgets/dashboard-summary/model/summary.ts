import { Transaction } from '@/entity/transaction';
import { DashboardSummary, SummaryDeltas } from './types';
import { FinanceTransferTypes } from '@/shared/consts/consts';

const getDashboardSummary = (transactions: Transaction[]): DashboardSummary => {
  const { income, expense } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == FinanceTransferTypes.income) {
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
    total: income - expense,
  };
};

const getDelta = (current: number, prev: number): number | null => {
  if (prev === 0) {
    return null;
  }

  return ((current - prev) / prev) * 100;
};

const getSummaryDeltas = (
  current: DashboardSummary,
  prev: DashboardSummary,
): SummaryDeltas => {
  return {
    incomeDelta: getDelta(current.income, prev.income),
    expenseDelta: getDelta(current.expense, prev.expense),
    totalDelta: getDelta(current.total, prev.total),
  };
};

export { getDashboardSummary, getSummaryDeltas };
