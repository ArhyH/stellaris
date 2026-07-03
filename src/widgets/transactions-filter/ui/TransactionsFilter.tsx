import styles from './style.module.scss';
import { ContentCard } from '@/features/ContentCard';
import { sizes } from '@/shared/styles';
import {
  FilterByType,
  FilterByTypeValue,
  filterModes,
} from '@/features/FilterByFinanceTransferType';
import { FilterByCategory } from '@/features/FilterByCategory';
import { ID } from '@/shared/types';
import { Category } from '@/entity/category';
import { FilterByQuery } from '@/features/FilterByQuery';
import { FilterByDate } from '@/features/FilterByDate';

type TransactionsFilterProps = {
  onTypeFilterChange: (filter: FilterByTypeValue) => void;
  onCategoryFilterChange: (categoryId: ID) => void;
  onQueryFilterChange: (value: string) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  categories: Category[];
  currentCategory: ID;
  currentQuery: string;
};

const TransactionsFilter = (props: TransactionsFilterProps) => {
  const {
    categories,
    currentCategory,
    currentQuery,
    onTypeFilterChange,
    onCategoryFilterChange,
    onQueryFilterChange,
    onStartDateChange,
    onEndDateChange,
  } = props;

  return (
    <ContentCard padding={sizes.sizes[16]}>
      <div className={styles['transactions-filter']}>
        <div className={styles['transactions-filter__cell']}>
          <FilterByQuery
            onChange={onQueryFilterChange}
            currentQuery={currentQuery}
          />
        </div>

        <div className={styles['transactions-filter__cell']}>
          <FilterByType
            filterMode={filterModes.transactions}
            onChange={onTypeFilterChange}
          />
        </div>

        <div className={styles['transactions-filter__cell']}>
          <FilterByCategory
            categories={categories}
            currentCategory={currentCategory}
            onChange={onCategoryFilterChange}
          />
        </div>

        <div className={styles['transactions-filter__cell']}>
          <FilterByDate
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
          />
        </div>
      </div>
    </ContentCard>
  );
};

export { TransactionsFilter };
export type { TransactionsFilterProps };
