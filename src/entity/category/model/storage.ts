import { categoriesMock } from './mocks';
import { CategoryItem } from './types';

const STORAGE_KEY = 'categories';

const saveCategories = (categories: CategoryItem) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));

const loadCategories = (): CategoryItem => {
  const categories = localStorage.getItem(STORAGE_KEY);

  if (!categories) {
    saveCategories(categoriesMock);
    return categoriesMock;
  }

  try {
    return JSON.parse(categories);
  } catch {
    saveCategories(categoriesMock);
    return categoriesMock;
  }
};

const clearCategories = () => localStorage.removeItem(STORAGE_KEY);

export { saveCategories, loadCategories, clearCategories };
