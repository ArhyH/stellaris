import { Category, useCategories } from '@/entity/category';
import { FinanceTransferTypes } from '@/shared/consts';
import { getGroupByKey } from '@/shared/helpers';
import { mapCategoriesToSelectItems } from '..';

const useBudgetsCategories = (predicate: (category: Category) => boolean) => {
  const { activeCategoriesByType } = useCategories();

  const expenseCategories = getGroupByKey(
    activeCategoriesByType,
    FinanceTransferTypes.expense,
  );

  return mapCategoriesToSelectItems(expenseCategories.filter(predicate));
};

export { useBudgetsCategories };
