import { Transaction } from '@/entity/transaction';

const filterBySearchQuery = (
  transactions: Transaction[],
  filter: string,
): Transaction[] => {
  if (filter === '') {
    return transactions;
  }

  return [...transactions].filter((transaction) => {
    return transaction.note?.toLowerCase().includes(filter.toLowerCase());
  });
};

export { filterBySearchQuery };
