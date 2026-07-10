import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { PieChartItem } from './types';
import { colors } from '@/shared/styles';
import {
  getTotalByCategory,
  getTotalFromAllCategories,
} from '@/shared/helpers/getTotalByCategories';

const mapTransactionsToPieChartData = (
  transactions: Transaction[],
  categories: Category[],
): PieChartItem[] => {
  const totalByCategories = getTotalByCategory(transactions);
  const total = getTotalFromAllCategories(totalByCategories);

  if (total === 0) {
    return [];
  }

  return categories
    .map((category) => {
      const value = totalByCategories.get(category.id) ?? 0;

      return {
        categoryId: category.id,
        categoryColor: category.color,
        categoryIcon: category.icon,
        categoryName: category.name,
        value,
        percent: Math.round((value / total) * 100),
        fill: `var(--${category.color ? colors.category[category.color] : 'lightgray-4'})`,
      };
    })
    .filter((item) => item.value !== 0)
    .sort((a, b) => b.value - a.value);
};

export { mapTransactionsToPieChartData };
