import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { CategoryItem } from './types';
import { ID } from '@/shared/types';

const mapCategoriesToCategoryItems = (
  categories: Category[],
  transactions: Transaction[],
): CategoryItem[] => {
  const categoriesMap = new Map(
    [...categories].map((category) => [category.id, category]),
  );

  const totalTransactionsByCategory = transactions.reduce<Map<ID, number>>(
    (acc, transaction) => {
      const current = acc.get(transaction.categoryId) ?? 0;
      acc.set(transaction.categoryId, current + 1);
      return acc;
    },
    new Map(),
  );

  return Array.from(categoriesMap.entries()).map(([categoryId, category]) => {
    const transactionsCount = totalTransactionsByCategory.get(categoryId);

    return {
      categoryId,
      categoryIcon: category.icon,
      categoryName: category.name,
      categoryColor: category.color,
      transactionsCount: transactionsCount || 0,
      type: category.type,
    };
  });
};

export { mapCategoriesToCategoryItems };
