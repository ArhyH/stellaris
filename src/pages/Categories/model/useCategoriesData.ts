import { Category } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { filterTransactionsByMonth } from '@/shared/helpers';
import { useCurrentDate } from '@/shared/hooks';
import { mapCategoriesToCategoryItems } from '@/widgets/categories';
import { getCategoriesSummary } from '@/widgets/summary';
import { useMemo } from 'react';

const useCategoriesData = (
  categoriesList: Category[],
  currentCategories: Category[],
) => {
  const { currentMonth } = useCurrentDate();
  const { transactionsList } = useTransactions();

  const categoriesSummary = useMemo(
    () => getCategoriesSummary(categoriesList),
    [categoriesList],
  );

  const currentTransactions = useMemo(
    () => filterTransactionsByMonth(transactionsList, currentMonth),
    [transactionsList, currentMonth],
  );

  const categoryItems = useMemo(
    () => mapCategoriesToCategoryItems(currentCategories, currentTransactions),
    [currentCategories, currentTransactions],
  );

  return {
    categoriesSummary,
    categoryItems,
  };
};

export { useCategoriesData };
