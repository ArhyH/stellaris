import { Category } from '@/entity/category';
import { Select } from '@/shared/ui/Select';
import { mapCategoryToSelectItems } from '../model/mappers';
import { ID } from '@/shared/types';

type FilterByCategoryProps = {
  onChange: (value: string) => void;
  categories: Category[];
  currentCategory: ID;
};

const FilterByCategory = (props: FilterByCategoryProps) => {
  const { onChange, categories, currentCategory } = props;
  const options = mapCategoryToSelectItems(categories);

  return (
    <Select
      options={options}
      placeholderOption={{ value: 'all', description: 'All Categories' }}
      value={currentCategory}
      onChange={onChange}
      isPlaceholderSelectable
    />
  );
};

export { FilterByCategory };
export type { FilterByCategoryProps };
