import { Page, PageCell } from '@/shared/ui/Page';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TransactionsSummary, getTransactionsSummary } from '@/widgets/summary';
import {
  FullTransactionsList,
  mapTransactionsToRecentItems,
} from '@/widgets/transactions-list';
import { TransactionsFilter } from '@/widgets/transactions-filter';
import {
  getTransactionsPageCallbacks,
  useTransactions,
  useTransactionsFilter,
} from '../model';

const TransactionsPage = () => {
  const { transactionsList, categories } = useTransactions();

  const {
    setFilters,
    currentTransactions,
    currentQuery,
    currentCategories,
    currerntCatefory,
  } = useTransactionsFilter(categories, transactionsList);

  const {
    onCategoryFilterChange,
    onFinanceTypeFilterChange,
    onQueryFilterChange,
    onStartDateChange,
    onEndDateChange,
  } = getTransactionsPageCallbacks(setFilters);

  console.log(transactionsList);

  const recentTransactions = mapTransactionsToRecentItems(
    currentTransactions,
    categories,
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

      <FullTransactionsList transactions={recentTransactions} />
    </Page>
  );
};

export { TransactionsPage };
