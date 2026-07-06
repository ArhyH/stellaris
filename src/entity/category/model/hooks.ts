import { useMemo } from 'react';
import { useCategoryStore } from './store';
import { filterByArchived, groupBy } from '@/shared/helpers';

const useCategories = () => {
  const categories = useCategoryStore((state) => state.categories);

  const categoriesList = useMemo(() => Object.values(categories), [categories]);

  const activeCategories = useMemo(
    () => filterByArchived(Object.values(categories), false),
    [categories],
  );

  const categoriesByType = useMemo(
    () => groupBy(categoriesList, (c) => c.type),
    [categoriesList],
  );

  const activeCategoriesByType = useMemo(
    () => groupBy(activeCategories, (c) => c.type),
    [activeCategories],
  );

  console.log(activeCategoriesByType);

  const addCategory = useCategoryStore((state) => state.addCategory);

  const editCategory = useCategoryStore((state) => state.editCategory);

  const deleteCategory = useCategoryStore((state) => state.deleteCategory);

  const archiveCategory = useCategoryStore((state) => state.archiveCategory);

  return {
    categories,

    categoriesList,
    activeCategories,
    categoriesByType,
    activeCategoriesByType,

    addCategory,
    editCategory,
    deleteCategory,
    archiveCategory,
  };
};

export { useCategories };
