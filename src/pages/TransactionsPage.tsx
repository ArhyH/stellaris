import { transactionsMock } from '@/shared/mocks/transactions';
import { Page, PageCell } from './ui';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TransactionsSummary, getTransactionsSummary } from '@/widgets/summary';
import {
  FullTransactionsList,
  mapTransactionsToRecentItems,
} from '@/widgets/transactions-list';
import { categoriesMock } from '@/shared/mocks/categories';
import { TransactionsFilter } from '@/widgets/transactions-filter';
import { useMemo, useState } from 'react';
import {
  DEFAULT_FILTER,
  FilterType,
  filterDataByFinanceTransferType,
  filterTypes,
} from '@/features/FilterByFinanceTransferType';
import { ID } from '@/shared/types';
import { filterByCategory } from '@/features/FilterByCategory';
import { FinanceTransferTypes } from '@/shared/consts';
import { filterBySearchQuery } from '@/features/FilterByQuery';

const TransactionsPage = () => {
  const [filters, setFilters] = useState({
    category: FinanceTransferTypes.all,
    financeType: DEFAULT_FILTER,
    searchQuery: '',
    date: '',
  });

  const onCategoryFilterChange = (categoryId: ID) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: categoryId,
    }));
  };

  const onFinanceTypeFilterChange = (filterType: FilterType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: FinanceTransferTypes.all,
      financeType: filterType,
    }));
  };

  const onQueryFilterChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: value,
    }));
  };

  const currentTransactions = useMemo(() => {
    const transactionsByType = filterDataByFinanceTransferType(
      transactionsMock,
      filters.financeType,
    );

    const transactionsByCategory = filterByCategory(
      transactionsByType,
      filters.category,
    );

    const transactionsByQuery = filterBySearchQuery(
      transactionsByCategory,
      filters.searchQuery,
    );

    return transactionsByQuery;
  }, [filters]);

  const currentCategories = useMemo(() => {
    if (filters.financeType === filterTypes.all) {
      return categoriesMock;
    }

    return [...categoriesMock].filter(
      (category) => category.type === filters.financeType,
    );
  }, [filters.financeType]);

  const transactions = mapTransactionsToRecentItems(
    currentTransactions,
    categoriesMock,
  );

  const summaries = getTransactionsSummary(currentTransactions);

  return (
    <Page>
      <PageCell gap={sizes.sizes[4]}>
        <Typography
          type={typographyProps.types.title28}
          color={colors.base.white}
          tag={typographyProps.tags.h1}
        >
          Transactions
        </Typography>

        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[2]}
        >
          All your income and expenses in one place
        </Typography>
      </PageCell>

      <TransactionsSummary summaries={summaries} />

      <TransactionsFilter
        categories={currentCategories}
        currentCategory={filters.category}
        onTypeFilterChange={onFinanceTypeFilterChange}
        onCategoryFilterChange={onCategoryFilterChange}
        onQueryFilterChange={onQueryFilterChange}
      />

      <FullTransactionsList transactions={transactions} />
    </Page>
  );
};

export { TransactionsPage };
