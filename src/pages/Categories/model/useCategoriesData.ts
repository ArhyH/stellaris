import { Category } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { mapCategoriesToCategoryItems } from '@/widgets/categories';
import { getCategoriesSummary } from '@/widgets/summary';
import { useMemo } from 'react';

const useCategoriesData = (categoriesList: Category[]) => {
  const { transactionsList } = useTransactions();

  const categoriesSummary = useMemo(
    () => getCategoriesSummary(categoriesList),
    [categoriesList],
  );

  const categoryItems = useMemo(
    () => mapCategoriesToCategoryItems(categoriesList, transactionsList),
    [categoriesList, transactionsList],
  );

  return {
    categoriesSummary,
    categoryItems,
  };
};

export { useCategoriesData };
