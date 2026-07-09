import { useBudgets } from '@/entity/budget';
import { Category } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { mapCategoriesToCategoryItems } from '@/widgets/categories';
import { useCategoriesSummary } from '@/widgets/summary';
import { useMemo } from 'react';

const useCategoriesData = (categories: Category[]) => {
  const { transactionsList, transactionsByCategory } = useTransactions();
  const { budgetsByCategory } = useBudgets();

  const categoriesSummary = useCategoriesSummary(categories);

  const categoryItems = useMemo(
    () =>
      mapCategoriesToCategoryItems(
        categories,
        transactionsByCategory,
        budgetsByCategory,
      ),
    [categories, transactionsList, budgetsByCategory],
  );

  return {
    categoriesSummary,
    categoryItems,
  };
};

export { useCategoriesData };
