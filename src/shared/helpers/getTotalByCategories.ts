import { Transaction } from '@/entity/transaction';
import { ID } from '../types';

const getTotalByCategory = (transactions: Transaction[]): Map<ID, number> => {
  return transactions.reduce<Map<ID, number>>((acc, transaction) => {
    const current = acc.get(transaction.categoryId) ?? 0;
    acc.set(transaction.categoryId, current + transaction.amount);
    return acc;
  }, new Map());
};

const getTotalFromAllCategories = (total: Map<ID, number>): number => {
  return Array.from(total.values()).reduce((acc, value) => acc + value, 0);
};

export { getTotalByCategory, getTotalFromAllCategories };
