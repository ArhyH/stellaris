import { useMemo } from 'react';
import { useCategoryStore } from './store';

const useCategories = () => {
  const categories = useCategoryStore((state) => state.categories);

  const categoriesList = useMemo(() => Object.values(categories), [categories]);

  const addCategory = useCategoryStore((state) => state.addCategory);
  const editCategory = useCategoryStore((state) => state.editCategory);
  const deleteCategory = useCategoryStore((state) => state.deleteCategory);

  return {
    categories,
    categoriesList,
    addCategory,
    editCategory,
    deleteCategory,
  };
};

export { useCategories };
