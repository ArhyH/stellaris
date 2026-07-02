import { Category } from '@/entity/category';
import { icons } from '@/shared/assets';
import { SelectOption } from '@/shared/ui/Select';

const mapCategoryToSelectItems = (categories: Category[]): SelectOption[] => {
  return categories.map((category) => {
    return {
      value: category.id,
      description: category.name,
      icon: icons[category.icon],
      color: category.color,
    };
  });
};

export { mapCategoryToSelectItems };
