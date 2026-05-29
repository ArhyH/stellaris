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

  let sorted = [...transactions].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );

  if (limit) {
    sorted = sorted.slice(0, RECENT_TRANSACTIONS_LIMIT);
  }

  return sorted.map((transaction) => {
    const category = categoriesMap.get(transaction.categoryId);

    return {
      id: transaction.id,
      amount: transaction.amount,
      date: transaction.date,
      type: transaction.type,
      note: transaction.note?.trim() || '',
      categoryIcon: category?.icon,
      categoryColor: category?.color,
      categoryName: category?.name || '',
    };
  });
};

export { mapTransactionsToRecentItems };
