import { transactionsMock } from '@/shared/mocks/transactions';
import { Page, PageCell } from './ui';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TransactionsSummary, getTransactionsSummary } from '@/widgets/summary';
import {
  TransactionsList,
  mapTransactionsToRecentItems,
} from '@/widgets/recent-transactions';
import { categoriesMock } from '@/shared/mocks/categories';

const TransactionsPage = () => {
  const summaries = getTransactionsSummary(transactionsMock);
  const transactions = mapTransactionsToRecentItems(
    transactionsMock,
    categoriesMock,
  );
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

      <TransactionsList recentTransactions={transactions} />
    </Page>
  );
};

export { TransactionsPage };
