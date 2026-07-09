import { Category } from '@/entity/category';
import { useMemo } from 'react';
import { getCategoriesSummary } from './summary';

const useCategoriesSummary = (categories: Category[]) =>
  useMemo(() => getCategoriesSummary(categories), [categories]);

export { useCategoriesSummary };
