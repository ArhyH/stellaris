import { Transaction } from '@/entity/transaction';
import { DashboardSummary, SummaryDeltas } from './types';
import { FinanceTransferTypes } from '@/shared/consts';

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

const formatDelta = (delta: number | null): string => {
  if (delta === null) {
    return '';
  }

  const sign = delta > 0 ? '+' : '';
  return `${sign}${delta.toFixed(1)}%`;
};

const getSummaryDeltas = (
  current: DashboardSummary,
  prev: DashboardSummary,
): SummaryDeltas => {
  return {
    income: getDelta(current.income, prev.income),
    expense: getDelta(current.expense, prev.expense),
    total: getDelta(current.total, prev.total),
  };
};

export { getDashboardSummary, getSummaryDeltas, formatDelta };
