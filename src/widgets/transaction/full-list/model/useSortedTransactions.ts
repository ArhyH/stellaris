import { useMemo } from 'react';
import { SortConfig, SORT_CONFIG, RecentTransaction } from '../../data';

const useSortedTransactions = (
  transactions: RecentTransaction[],
  sortConfig: SortConfig,
) => {
  const sortedTransactions = useMemo(() => {
    if (!sortConfig.field) {
      return transactions;
    }

    const comparator = SORT_CONFIG[sortConfig.field];
    const sorted = [...transactions].sort(comparator);

    return sortConfig.direction === 'asc' ? sorted.reverse() : sorted;
  }, [sortConfig, transactions]);

  const transactionsCount = sortedTransactions.length;

  return { sortedTransactions, transactionsCount };
};

export { useSortedTransactions };
