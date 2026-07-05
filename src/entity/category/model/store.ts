import { create } from 'zustand';
import { storage } from '@/entity/persistence';
import { ID } from '@/shared/types';
import { Category } from '..';
import { CategoryItem } from './types';

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
      categories: storage.category.load(),
    })),

  addCategory: (category) =>
    set((state) => {
      const categories = {
        ...state.categories,
        [category.id]: category,
      };

      storage.category.save(categories);

      return { categories };
    }),

  editCategory: (category) =>
    set((state) => {
      const categories = {
        ...state.categories,
        [category.id]: category,
      };

      storage.category.save(categories);

      return { categories };
    }),

  deleteCategory: (id) =>
    set((state) => {
      const copy = { ...state.categories };
      delete copy[id];

      storage.category.save(copy);

      return { categories: copy };
    }),

  archiveCategory: (id) =>
    set((state) => {
      const copy = { ...state.categories };
      copy[id] = { ...copy[id], isArchived: true };

      storage.category.save(copy);

      return { categories: copy };
    }),
}));

export { useCategoryStore };
