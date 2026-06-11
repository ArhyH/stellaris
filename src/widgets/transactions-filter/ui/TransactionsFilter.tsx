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
import { FilterByDate } from '@/features/FilterByDate';
import { Row } from '@/shared/ui/Row/Row';

type TransactionsFilterProps = {
  onTypeFilterChange: (filter: FilterType) => void;
  onCategoryFilterChange: (categoryId: ID) => void;
  onQueryFilterChange: (value: string) => void;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
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
    onStartDateChange,
    onEndDateChange,
  } = props;

  return (
    <ContentCard padding={sizes.sizes[16]}>
      <div className={styles['transactions-filter']}>
        <div className={styles['transactions-filter__cell']}>
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

        <Row>
          <FilterByDate
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
          />
        </Row>
      </div>
    </ContentCard>
  );
};

export { TransactionsFilter };
export type { TransactionsFilterProps };
