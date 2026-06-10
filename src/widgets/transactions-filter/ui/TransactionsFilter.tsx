import styles from './style.module.scss';
import { ContentCard } from '@/features/ContentCard';
import { sizes } from '@/shared/styles';
import {
  FilterByType,
  FilterType,
  filterModes,
} from '@/features/FilterByFinanceTransferType';
import { FilterByCategory } from '@/features/FilterByCategory';
import { ID } from '@/shared/types';
import { Category } from '@/entity/category';
import { FilterByQuery } from '@/features/FilterByQuery';

type TransactionsFilterProps = {
  onTypeFilterChange: (filter: FilterType) => void;
  onCategoryFilterChange: (categoryId: ID) => void;
  onQueryFilterChange: (value: string) => void;
  categories: Category[];
  currentCategory: ID;
};

const TransactionsFilter = (props: TransactionsFilterProps) => {
  const {
    categories,
    currentCategory,
    onTypeFilterChange,
    onCategoryFilterChange,
    onQueryFilterChange,
  } = props;

  return (
    <ContentCard padding={sizes.sizes[16]}>
      <div className={styles['transactions-filter']}>
        <div style={{ flexGrow: 1, flexShrink: 1 }}>
          <FilterByQuery onChange={onQueryFilterChange} />
        </div>

        <FilterByType
          filterMode={filterModes.transactions}
          onChange={onTypeFilterChange}
        />

        <FilterByCategory
          categories={categories}
          currentCategory={currentCategory}
          onChange={onCategoryFilterChange}
        />

        <div>Date</div>
      </div>
    </ContentCard>
  );
};

export { TransactionsFilter };
export type { TransactionsFilterProps };
