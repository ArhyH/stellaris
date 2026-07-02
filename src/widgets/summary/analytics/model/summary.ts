import { Transaction } from '@/entity/transaction';
import { AnalyticsSummary, SummaryDeltas } from './types';
import { getDailyTotal, getDelta, getSummary } from '@/shared/helpers';

const getSavingRate = (income: number, expense: number) => {
  if (income === 0) {
    return null;
  }

  return ((income - expense) / income) * 100;
};

const getDailySpent = (transactions: Transaction[]) => {
  if (transactions.length === 0) {
    return null;
  }

  const dailyTotals = getDailyTotal(transactions);
  const sorted = Array.from(dailyTotals.values()).sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};

const getAnalyticsSummary = (transactions: Transaction[]): AnalyticsSummary => {
  const { income, expense } = getSummary(transactions);
  const saving = getSavingRate(income, expense);
  const daily = getDailySpent(transactions);

  return {
    income,
    expense,
    saving,
    daily,
  };
};

const getAnalyticsDeltas = (
  current: AnalyticsSummary,
  prev: AnalyticsSummary,
): SummaryDeltas => {
  return {
    income: getDelta(current.income, prev.income),
    expense: getDelta(current.expense, prev.expense),
    saving: getDelta(current.saving, prev.saving),
    daily: getDelta(current.daily, prev.daily),
  };
};

export { getAnalyticsSummary, getAnalyticsDeltas };
