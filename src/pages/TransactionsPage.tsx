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
} from '@/features/FilterByFinanceTransferType';

const TransactionsPage = () => {
  const [currentFilter, setCurrentFilter] =
    useState<FilterType>(DEFAULT_FILTER);

  const currentTransactions = useMemo(() => {
    return filterDataByFinanceTransferType(transactionsMock, currentFilter);
  }, [currentFilter, transactionsMock]);

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

      <TransactionsFilter onFilterChange={setCurrentFilter} />

      <FullTransactionsList transactions={transactions} />
    </Page>
  );
};

export { TransactionsPage };
