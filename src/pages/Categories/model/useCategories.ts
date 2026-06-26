import { useEffect } from 'react';
import { useCategoryStore } from '@/entity/category';
import { categoriesMock } from '@/shared/mocks/categories';

const useCategories = () => {
  const {
    categories,
    initCategories,
    addCategory,
    editCategory,
    deleteCategory,
  } = useCategoryStore((state) => state);

  useEffect(() => {
    initCategories(categoriesMock);
  }, [initCategories]);

  const categoriesList = Object.values(categories);

  return {
    categories,
    categoriesList,
    addCategory,
    editCategory,
    deleteCategory,
  };
};

export { useCategories };
