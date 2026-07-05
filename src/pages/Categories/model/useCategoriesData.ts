import { Category } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { mapCategoriesToCategoryItems } from '@/widgets/categories';
import { getCategoriesSummary } from '@/widgets/summary';
import { useMemo } from 'react';

const useCategoriesData = (categories: Category[]) => {
  const { transactionsList } = useTransactions();

  const categoriesSummary = useMemo(
    () => getCategoriesSummary(categories),
    [categories],
  );

  const categoryItems = useMemo(
    () => mapCategoriesToCategoryItems(categories, transactionsList),
    [categories, transactionsList],
  );

  return {
    categoriesSummary,
    categoryItems,
  };
};

export { useCategoriesData };
