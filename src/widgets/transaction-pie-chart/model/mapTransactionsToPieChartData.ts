import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { FinanceTransferType, ID } from '@/shared/types';
import { PieChartItem } from './types';
import { colors } from '@/shared/styles';

const mapTransactionsToPieChartData = (
  transactions: Transaction[],
  categories: Category[],
  type: FinanceTransferType,
): PieChartItem[] => {
  const categoriesMap = new Map(
    [...categories]
      .filter((category) => category.type === type)
      .map((category) => [category.id, category]),
  );

  const targetTransactions = [...transactions].filter(
    (transaction) => transaction.type === type,
  );

  const totalByCategories = targetTransactions.reduce<Map<ID, number>>(
    (acc, transaction) => {
      const current = acc.get(transaction.categoryId) ?? 0;
      acc.set(transaction.categoryId, current + transaction.amount);
      return acc;
    },
    new Map(),
  );

  const total = Array.from(totalByCategories.values()).reduce(
    (acc, value) => acc + value,
    0,
  );

  if (total === 0) {
    return [];
  }

  const chartItems = Array.from(totalByCategories.entries()).map(
    ([categoryId, value]) => {
      const category = categoriesMap.get(categoryId);
      return {
        categoryId,
        categoryColor: category?.color,
        categoryIcon: category?.icon || '',
        categoryName: category?.name || '',
        value,
        percent: Math.round((value / total) * 100),
        fill: `var(--${category?.color ? colors.category[category.color] : 'lightgray-4'})`,
      };
    },
  );

  return chartItems.sort((a, b) => b.value - a.value);
};

export { mapTransactionsToPieChartData };
