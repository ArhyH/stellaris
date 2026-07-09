import {
  FilterByArchived,
  FilterByArchivedValue,
  FilterByType,
  FilterByTypeValue,
  filterModes,
} from '@/features/filters';
import { sizes } from '@/shared/styles';
import { Row, rowProps } from '@/shared/ui/Row';

type CategoriesFilterProps = {
  onFilterStateChange: (filter: FilterByArchivedValue) => void;
  onFilterTypeChange: (filter: FilterByTypeValue) => void;
  hasArchivedCategories?: boolean;
  isDisabled?: boolean;
};

const CategoriesFilter = (props: CategoriesFilterProps) => {
  const {
    onFilterTypeChange,
    onFilterStateChange,
    hasArchivedCategories,
    isDisabled,
  } = props;

  return (
    <Row gap={sizes.sizes[20]} justify={rowProps.justifies.spaceBetween}>
      <FilterByType
        onChange={onFilterTypeChange}
        filterMode={filterModes.categories}
        isDisabled={isDisabled}
      />

      {hasArchivedCategories && (
        <FilterByArchived onChange={onFilterStateChange} />
      )}
    </Row>
  );
};

export { CategoriesFilter };
export type { CategoriesFilterProps };
