import { Transaction } from '@/entity/transaction';
import { getSummary } from '@/shared/helpers';

const getTotalSavings = (transactions: Transaction[]) => {
  const { income, expense } = getSummary(transactions);
  const saving = income - expense;

  return saving;
};

export { getTotalSavings };
