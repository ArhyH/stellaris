import { Category } from '@/entity/category';
import { SelectOption } from '@/shared/ui/Select';

const mapCategoryToSelectItems = (categories: Category[]): SelectOption[] => {
  return categories.map((category) => {
    return {
      value: category.id,
      description: category.name,
    };
  });
};

export { mapCategoryToSelectItems };
