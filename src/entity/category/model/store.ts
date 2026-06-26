import { create } from 'zustand';
import { Category } from '..';
import { ID } from '@/shared/types';
import { CategoryItem } from './types';

type CategoryStore = {
  categories: CategoryItem;

  initCategories: (categories: Category[]) => void;

  addCategory: (category: Category) => void;
  editCategory: (category: Category) => void;
  deleteCategory: (id: ID) => void;
};

const useCategoryStore = create<CategoryStore>((set) => ({
  categories: {},

  initCategories: (categories) =>
    set(() => ({
      categories: categories.reduce<CategoryItem>((acc, category) => {
        acc[category.id] = category;
        return acc;
      }, {}),
    })),

  addCategory: (category) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category.id]: category,
      },
    })),

  editCategory: (category) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category.id]: category,
      },
    })),

  deleteCategory: (id) =>
    set((state) => {
      const copy = { ...state.categories };
      delete copy[id];

      return {
        categories: copy,
      };
    }),
}));

export { useCategoryStore };
