import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { getTopSpendingCategory } from './getTopSpendingCategory';

const useTopStendingCategory = (transactions: Transaction[]) => {
  const { categoriesList } = useCategories();

  const topCategory = useMemo(
    () => getTopSpendingCategory(transactions, categoriesList),
    [transactions, categoriesList],
  );

  return topCategory;
};

export { useTopStendingCategory };
