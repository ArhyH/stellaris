import { useMemo, useState } from 'react';
import { Category } from '@/entity/category';
import {
  DEFAULT_FILTER,
  FilterType,
  filterDataByFinanceTransferType,
} from '@/features/FilterByFinanceTransferType';

const useCategoriesFilter = (categories: Category[]) => {
  const [currentFilter, setCurrentFilter] =
    useState<FilterType>(DEFAULT_FILTER);

  const currentCategories = useMemo(() => {
    return filterDataByFinanceTransferType(categories, currentFilter);
  }, [categories, currentFilter]);

  return { currentFilter, setCurrentFilter, currentCategories };
};

export { useCategoriesFilter };
