import { FinanceTransferTypes } from '@/shared/consts';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import {
  mapTransactionsToRecentItems,
  RecentTransactions,
} from '@/widgets/transactions-list';
import { filterTransactionsByMonth } from '@/shared/helpers/filterTransactions';
import { Row } from '@/shared/ui/Row/Row';
import { PieChartUi, mapTransactionsToPieChartData } from '@/widgets/charts';
import {
  BudgetOverview,
  mapBudgetsToOverviewItems,
} from '@/widgets/budget-overview';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import {
  DashboardSummary,
  getDashboardDeltas,
  getDashboardSummary,
} from '@/widgets/summary';
import { getMonthYearFromDate, getPrevMonth } from '@/shared/helpers';
import { Page, PageCell } from './ui';

const DashboardPage = () => {
  const now = new Date();
  const prevMonth = getPrevMonth(now);

  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);
  const prevTransactions = filterTransactionsByMonth(
    transactionsMock,
    prevMonth,
  );

  const currentSummary = getDashboardSummary(currentTransactions);
  const prevSummary = getDashboardSummary(prevTransactions);

  const deltas = getDashboardDeltas(currentSummary, prevSummary);

  const recentTransactions = mapTransactionsToRecentItems(
    currentTransactions,
    categoriesMock,
    true,
  );

  const pieChartData = mapTransactionsToPieChartData(
    currentTransactions,
    categoriesMock,
    FinanceTransferTypes.expense,
  );

  const budgetData = mapBudgetsToOverviewItems(
    budgetsMock,
    currentTransactions,
    categoriesMock,
    {
      sortByProgress: true,
      limit: true,
    },
  );

  const monthYear = getMonthYearFromDate(currentTransactions[0].date);

  return (
    <Page>
      <PageCell gap={sizes.sizes[4]}>
        <Typography
          type={typographyProps.types.title28}
          color={colors.base.white}
          tag={typographyProps.tags.h1}
        >
          Good morning, John
        </Typography>

        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[2]}
        >
          Here's your financial overview for {monthYear}
        </Typography>
      </PageCell>

      <DashboardSummary summaries={currentSummary} deltas={deltas} />
      <Row>
        <PieChartUi
          data={pieChartData}
          date={monthYear}
          type={FinanceTransferTypes.expense}
        />
        <BudgetOverview budgets={budgetData} />
      </Row>
      <RecentTransactions recentTransactions={recentTransactions} />
    </Page>
  );
};

export { DashboardPage };
