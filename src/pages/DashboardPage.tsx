import { FinanceTransferTypes } from '@/shared/consts';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview/model/mappers';
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
import { BudgetOverview } from '@/widgets/budget-overview/ui/BudgetOverview';

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

  console.log('current', currentTransactions[0]);

  return (
    <div className={styles.page}>
      <h1>DashboardPage</h1>
      <BudgetCards summaries={currentSummary} deltas={deltas} />
      <Row>
        <PieChartUi
          data={pieChartData}
          date={getMouthFromDate(currentTransactions[0].date)}
        />
        <BudgetOverview budgets={budgetData} />
      </Row>
      <RecentTransactions recentTransactions={recentTransactions} />
    </div>
  );
};

export { DashboardPage };
