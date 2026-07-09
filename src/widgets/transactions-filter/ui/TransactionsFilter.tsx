import styles from './style.module.scss';
import { sizes } from '@/shared/styles';
import {
  FilterByType,
  FilterByTypeValue,
  filterModes,
  FilterByCategory,
  FilterByQuery,
  FilterByDate,
} from '@/features/filters';
import { ID } from '@/shared/types';
import { Category } from '@/entity/category';
import { Box } from '@/shared/ui/Box';

type TransactionsFilterProps = {
  onTypeFilterChange: (filter: FilterByTypeValue) => void;
  onCategoryFilterChange: (categoryId: ID) => void;
  onQueryFilterChange: (value: string) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  categories: Category[];
  currentCategory: ID;
  currentQuery: string;
  isDisabled: boolean;
};

const TransactionsFilter = (props: TransactionsFilterProps) => {
  const {
    categories,
    currentCategory,
    currentQuery,
    isDisabled,
    onTypeFilterChange,
    onCategoryFilterChange,
    onQueryFilterChange,
    onStartDateChange,
    onEndDateChange,
  } = props;

  return (
    <Box padding={sizes.sizes[16]}>
      <div className={styles['transactions-filter']}>
        <div className={styles['transactions-filter__cell']}>
          <FilterByQuery
            onChange={onQueryFilterChange}
            currentQuery={currentQuery}
            isDisabled={isDisabled}
          />
        </div>

        <div className={styles['transactions-filter__cell']}>
          <FilterByType
            filterMode={filterModes.transactions}
            onChange={onTypeFilterChange}
            isDisabled={isDisabled}
          />
        </div>

        <div className={styles['transactions-filter__cell']}>
          <FilterByCategory
            categories={categories}
            currentCategory={currentCategory}
            onChange={onCategoryFilterChange}
            isDisabled={isDisabled}
          />
        </div>

        <div className={styles['transactions-filter__cell']}>
          <FilterByDate
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </Box>
  );
};

export { TransactionsFilter };
export type { TransactionsFilterProps };
