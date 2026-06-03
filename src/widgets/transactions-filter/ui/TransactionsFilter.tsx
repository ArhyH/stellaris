import styles from './style.module.scss';
import { ContentCard } from '@/features/ContentCard';
import { sizes } from '@/shared/styles';
import {
  FilterByType,
  FilterType,
  filterModes,
} from '@/features/FilterByFinanceTransferType';

type TransactionsFilterProps = {
  onFilterChange: (filter: FilterType) => void;
};

const TransactionsFilter = (props: TransactionsFilterProps) => {
  const { onFilterChange } = props;

  return (
    <ContentCard padding={sizes.sizes[16]}>
      <div className={styles['transactions-filter']}>
        <div style={{ flexGrow: 1, flexShrink: 1 }}>Input</div>

        <FilterByType
          filterMode={filterModes.transactions}
          onChange={onFilterChange}
        />

        <div>Dropwown</div>

        <div>Date</div>
      </div>
    </ContentCard>
  );
};

export { TransactionsFilter };
export type { TransactionsFilterProps };
