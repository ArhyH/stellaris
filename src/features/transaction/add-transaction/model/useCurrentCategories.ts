import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { getGroupByKey } from '@/shared/helpers';
import { FinanceTransferType } from '@/shared/types';

const useCurrentCategories = (type: FinanceTransferType) => {
  const { activeCategoriesByType } = useCategories();

  const currentCategories = useMemo(
    () => getGroupByKey(activeCategoriesByType, type),
    [activeCategoriesByType, type],
  );
  return { currentCategories };
};
export { useCurrentCategories };
