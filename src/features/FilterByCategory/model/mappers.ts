import { Category } from '@/entity/category';
import { SelectItem } from './types';

const mapCategoryToSelectItems = (categories: Category[]): SelectItem[] => {
  return categories.map((category) => {
    return {
      value: category.id,
      description: category.name,
    };
  });
};

export { mapCategoryToSelectItems };
