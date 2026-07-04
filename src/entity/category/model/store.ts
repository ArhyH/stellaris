import { create } from 'zustand';
import { Category } from '..';
import { ID } from '@/shared/types';
import { CategoryItem } from './types';
import { loadCategories, saveCategories } from './storage';

type CategoryStore = {
  categories: CategoryItem;

  initCategories: () => void;

  addCategory: (category: Category) => void;
  editCategory: (category: Category) => void;
  deleteCategory: (id: ID) => void;
  archiveCategory: (id: ID) => void;
};

const useCategoryStore = create<CategoryStore>((set) => ({
  categories: {},

  initCategories: () =>
    set(() => ({
      categories: loadCategories(),
    })),

  addCategory: (category) =>
    set((state) => {
      const categories = {
        ...state.categories,
        [category.id]: category,
      };

      saveCategories(categories);

      return { categories };
    }),

  editCategory: (category) =>
    set((state) => {
      const categories = {
        ...state.categories,
        [category.id]: category,
      };

      saveCategories(categories);

      return { categories };
    }),

  deleteCategory: (id) =>
    set((state) => {
      const copy = { ...state.categories };
      delete copy[id];
      saveCategories(copy);

      return { categories: copy };
    }),

  archiveCategory: (id) =>
    set((state) => {
      const copy = { ...state.categories };
      copy[id] = { ...copy[id], isArchived: true };
      saveCategories(copy);

      return { categories: copy };
    }),
}));

export { useCategoryStore };
