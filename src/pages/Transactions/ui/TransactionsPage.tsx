import { Page, PageCell } from '@/shared/ui/Page';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TransactionsSummary, getTransactionsSummary } from '@/widgets/summary';
import {
  FullTransactionsList,
  mapTransactionsToRecentItems,
} from '@/widgets/transactions-list';
import { TransactionsFilter } from '@/widgets/transactions-filter';
import { getTransactionsPageCallbacks, useTransactionsFilter } from '../model';
import { useTransactions } from '@/entity/transaction';
import { useCategories } from '@/entity/category';

const TransactionsPage = () => {
  const { transactionsList, deleteTransaction } = useTransactions();
  const { categoriesList } = useCategories();

  const {
    setFilters,
    currentTransactions,
    currentQuery,
    currentCategories,
    currerntCatefory,
  } = useTransactionsFilter(categoriesList, transactionsList);

  const {
    onCategoryFilterChange,
    onFinanceTypeFilterChange,
    onQueryFilterChange,
    onStartDateChange,
    onEndDateChange,
  } = getTransactionsPageCallbacks(setFilters);

  const recentTransactions = mapTransactionsToRecentItems(
    currentTransactions,
    categoriesList,
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
        currentCategory={currerntCatefory}
        currentQuery={currentQuery}
        onTypeFilterChange={onFinanceTypeFilterChange}
        onCategoryFilterChange={onCategoryFilterChange}
        onQueryFilterChange={onQueryFilterChange}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
      />

      <FullTransactionsList
        transactions={recentTransactions}
        onDelete={deleteTransaction}
      />
    </Page>
  );
};

export { TransactionsPage };
