import { Category } from '@/entity/category';
import { Select } from '@/shared/ui/Select/Select';
import { mapCategoryToSelectItems } from './model/mappers';
import { ID } from '@/shared/types';

type FilterByCategoryProps = {
  onChange: (value: string) => void;
  categories: Category[];
  currentCategory: ID;
};

const FilterByCategory = (props: FilterByCategoryProps) => {
  const { onChange, categories, currentCategory } = props;
  const data = mapCategoryToSelectItems(categories);

  return <Select options={data} value={currentCategory} onChange={onChange} />;
};

export { FilterByCategory };
export type { FilterByCategoryProps };
