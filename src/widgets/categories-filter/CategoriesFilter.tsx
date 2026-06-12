import {
  FilterByType,
  FilterType,
  filterModes,
} from '@/features/FilterByFinanceTransferType';

type CategoriesFilterProps = {
  onFilterChange: (filter: FilterType) => void;
};

const CategoriesFilter = (props: CategoriesFilterProps) => {
  const { onFilterChange } = props;

  return (
    <FilterByType
      onChange={onFilterChange}
      filterMode={filterModes.categories}
    />
  );
};

export { CategoriesFilter };
export type { CategoriesFilterProps };
