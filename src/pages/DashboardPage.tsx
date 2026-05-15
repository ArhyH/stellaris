import { FinanceTransferTypes } from '@/shared/consts/consts';
// import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
// import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview/model/mappers';
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

const DashboardPage = () => {
  // const budgetsData = mapBudgetsToOverviewItems(
  //   budgetsMock,
  //   transactionsMock,
  //   categoriesMock,
  //   {
  //     sortByProgress: true,
  //     limit: true,
  //   },
  // );

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

  return (
    <div className={styles.page}>
      <h1>DashboardPage</h1>
      <BudgetCards summaries={currentSummary} deltas={deltas} />
      <Row>
        <PieChartUi data={pieChartData} />
        <div
          style={{
            backgroundColor: '#d4d4d4',
            display: 'flex',
            flexGrow: 2,
          }}
        />
      </Row>
      <RecentTransactions recentTransactions={recentTransactions} />
    </div>
  );
};

export { DashboardPage };
