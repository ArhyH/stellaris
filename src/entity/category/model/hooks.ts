import { useMemo } from 'react';
import { useCategoryStore } from './store';
import { filterByArchived } from '@/shared/helpers';

const useCategories = () => {
  const categories = useCategoryStore((state) => state.categories);

  const categoriesList = useMemo(() => Object.values(categories), [categories]);
  const activeCategories = useMemo(
    () => filterByArchived(Object.values(categories)),
    [categories],
  );
  const addCategory = useCategoryStore((state) => state.addCategory);
  const editCategory = useCategoryStore((state) => state.editCategory);
  const deleteCategory = useCategoryStore((state) => state.deleteCategory);
  const archiveCategory = useCategoryStore((state) => state.archiveCategory);

  return {
    categories,
    categoriesList,
    activeCategories,
    addCategory,
    editCategory,
    deleteCategory,
    archiveCategory,
  };
};

export { useCategories };
