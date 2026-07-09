import { Category } from '@/entity/category';
import { Select } from '@/shared/ui/Select';
import { mapCategoryToSelectItems } from '../model/mappers';
import { ID } from '@/shared/types';

type FilterByCategoryProps = {
  onChange: (value: string) => void;
  categories: Category[];
  currentCategory: ID;
  isDisabled?: boolean;
};

const FilterByCategory = (props: FilterByCategoryProps) => {
  const { onChange, categories, currentCategory, isDisabled } = props;
  const options = mapCategoryToSelectItems(categories);

  return (
    <Select
      options={options}
      placeholderOption={{ value: 'all', description: 'All Categories' }}
      value={currentCategory}
      onChange={onChange}
      isDisabled={isDisabled}
      isPlaceholderSelectable
    />
  );
};

export { FilterByCategory };
export type { FilterByCategoryProps };
