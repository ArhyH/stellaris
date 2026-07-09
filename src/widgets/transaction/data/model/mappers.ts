import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { RecentTransaction } from './types';

const RECENT_TRANSACTIONS_LIMIT = 5;

const mapTransactionsToRecentItems = (
  transactions: Transaction[],
  categories: Category[],
  limit?: boolean,
): RecentTransaction[] => {
  const categoriesMap = new Map(
    categories.map((category) => [category.id, category]),
  );

  const targetTransactions = limit
    ? transactions.slice(0, RECENT_TRANSACTIONS_LIMIT)
    : transactions;

  return targetTransactions.map((transaction) => {
    const category = categoriesMap.get(transaction.categoryId);

    return {
      id: transaction.id,
      amount: transaction.amount,
      date: transaction.date,
      type: transaction.type,
      note: transaction.note?.trim() || '',
      categoryIcon: category?.icon,
      categoryColor: category?.color,
      categoryIconColor: category?.iconColor,
      categoryName: category?.name || '',
    };
  });
};

export { mapTransactionsToRecentItems };
