import { Category } from '@/entity/category';
import { FinanceTransferType } from '@/shared/types';
import { useMemo } from 'react';

const useCurrentCategories = (
  categories: Category[],
  type: FinanceTransferType,
) =>
  useMemo(
    () => [...categories].filter((category) => category.type === type),
    [categories, type],
  );
export { useCurrentCategories };
