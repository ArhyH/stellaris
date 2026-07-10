import { Page, PageCell } from '@/shared/ui/Page';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TransactionsSummary } from '@/widgets/summary';
import {
  FullTransactionsList,
  TransactionsFilter,
} from '@/widgets/transaction';
import {
  getTransactionsPageCallbacks,
  useDeleteTransactions,
  useTransactionsFilter,
} from '../model';
import { useTransactionsData } from '../model/useTransactionsData';

const TransactionsPage = () => {
  const {
    setFilters,
    currentTransactions,
    currentQuery,
    currentCategories,
    currerntCatefory,
    isFiltersDisabled,
  } = useTransactionsFilter();

  const {
    onCategoryFilterChange,
    onFinanceTypeFilterChange,
    onQueryFilterChange,
    onStartDateChange,
    onEndDateChange,
  } = getTransactionsPageCallbacks(setFilters);

  const { recentTransactions, summaries } =
    useTransactionsData(currentTransactions);

  const { onDelete } = useDeleteTransactions();

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
        isDisabled={isFiltersDisabled}
      />

      <FullTransactionsList
        transactions={recentTransactions}
        onDelete={onDelete}
      />
    </Page>
  );
};

export { TransactionsPage };
