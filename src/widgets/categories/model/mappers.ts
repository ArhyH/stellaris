import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { CategoryItem } from './types';
import { ID } from '@/shared/types';
import { getGroupByKey } from '@/shared/helpers';
import { Budget } from '@/entity/budget';

const mapCategoriesToCategoryItems = (
  categories: Category[],
  transactionsByCategory: Record<ID, Transaction[]>,
  budgetsByCategory: Record<ID, Budget[]>,
): CategoryItem[] => {
  return categories.map((category) => {
    const transactionsCount = getGroupByKey(
      transactionsByCategory,
      category.id,
    ).length;

    const [budget] = getGroupByKey(budgetsByCategory, category.id);

    const hasBudget = budget !== undefined;

    return {
      categoryId: category.id,
      categoryIcon: category.icon,
      categoryName: category.name,
      categoryColor: category.color,
      categoryIconColor: category.iconColor,
      transactionsCount: transactionsCount,
      type: category.type,
      isArchived: category.isArchived,
      hasBudget,
    };
  });
};

export { mapCategoriesToCategoryItems };
