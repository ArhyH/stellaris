import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { TopSpendingCategory } from './types';
import { FinanceTransferTypes } from '@/shared/consts';
import { filterTransactionsByType } from '@/shared/helpers/filterTransactions';
import {
  getTotalByCategory,
  getTotalFromAllCategories,
} from '@/shared/helpers/getTotalByCategories';
import { colors } from '@/shared/styles';

const getTopSpendingCategory = (
  transactions: Transaction[],
  categories: Category[],
): TopSpendingCategory | undefined => {
  const currentType = FinanceTransferTypes.expense;

  const categoriesMap = new Map(
    [...categories]
      .filter((category) => category.type === currentType)
      .map((category) => [category.id, category]),
  );

  const targetTransactions = filterTransactionsByType(
    transactions,
    currentType,
  );
  const totalByCategories = getTotalByCategory(targetTransactions);
  const total = getTotalFromAllCategories(totalByCategories);

  if (total === 0) {
    return undefined;
  }

  const topCategory = Array.from(totalByCategories.entries())
    .map(([categoryId, value]) => {
      return {
        categoryId,
        value,
      };
    })
    .sort((a, b) => b.value - a.value)
    .shift();

  if (topCategory) {
    const category = categoriesMap.get(topCategory.categoryId);

    return {
      categoryName: category?.name || '',
      categoryColor: category?.color || colors.category['category-blue-1'],
      amount: topCategory.value,
      percent: ((topCategory.value / total) * 100).toFixed(1),
    };
  }

  return undefined;
};

export { getTopSpendingCategory };
