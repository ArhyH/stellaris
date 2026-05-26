import { Transaction } from '@/entity/transaction';
import { DashboardSummary, SummaryDeltas } from './types';
import { getDelta, getSummary } from '@/shared/helpers';

const getDashboardSummary = (transactions: Transaction[]): DashboardSummary => {
  const { income, expense } = getSummary(transactions);

  return {
    income,
    expense,
    total: income - expense,
  };
};

const getDashboardDeltas = (
  current: DashboardSummary,
  prev: DashboardSummary,
): SummaryDeltas => {
  return {
    income: getDelta(current.income, prev.income),
    expense: getDelta(current.expense, prev.expense),
    total: getDelta(current.total, prev.total),
  };
};

export { getDashboardSummary, getDashboardDeltas };
