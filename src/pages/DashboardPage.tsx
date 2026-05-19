import { FinanceTransferTypes } from '@/shared/consts';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import {
  BudgetCards,
  getSummaryDeltas,
  getDashboardSummary,
} from '@/widgets/dashboard-summary';
import { mapTransactionsToRecentItems } from '@/widgets/recent-transactions/model/mappers';
import { mapTransactionsToPieChartData } from '@/widgets/transaction-pie-chart/model/mapTransactionsToPieChartData';
import {
  filterTransactionsByMonth,
  getPrevMonth,
} from '@/shared/helpers/filterTransactions';
import styles from './style.module.scss';
import { RecentTransactions } from '@/widgets/recent-transactions/ui/RecentTransactions';
import { PieChartUi } from '@/widgets/transaction-pie-chart/ui/PieChart';
import { Row } from '@/shared/ui/Row/Row';
import { getMouthFromDate } from '@/widgets/transaction-pie-chart/model/helpers';
import {
  BudgetOverview,
  mapBudgetsToOverviewItems,
} from '@/widgets/budget-overview';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';

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

  const deltas = getSummaryDeltas(currentSummary, prevSummary);

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

  return (
    <div className={styles.page}>
      <div className={styles.page__cell}>
        <Typography
          type={typographyProps.types.title28}
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
      </div>

      <BudgetCards summaries={currentSummary} deltas={deltas} />
      <Row>
        <PieChartUi data={pieChartData} date={monthYear} />
        <BudgetOverview budgets={budgetData} />
      </Row>
      <RecentTransactions recentTransactions={recentTransactions} />
    </div>
  );
};

export { DashboardPage };
