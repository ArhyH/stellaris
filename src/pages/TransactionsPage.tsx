import { filterTransactionsByMonth } from '@/shared/helpers';
import { transactionsMock } from '@/shared/mocks/transactions';
import { Page, PageCell } from './ui';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TransactionsSummary, getTransactionsSummary } from '@/widgets/summary';

const TransactionsPage = () => {
  const now = new Date();
  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);
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
    </Page>
  );
};

export { TransactionsPage };
