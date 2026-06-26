import { useCategoryStore } from '@/entity/category';

const useCategories = () => {
  const { categories, addCategory, editCategory, deleteCategory } =
    useCategoryStore((state) => state);

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
