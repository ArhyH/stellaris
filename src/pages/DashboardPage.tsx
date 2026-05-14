import { FinanceTransferTypes } from '@/shared/consts/consts';
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

const DashboardPage = () => {
  const pieChartData = mapTransactionsToPieChartData(
    transactionsMock,
    categoriesMock,
    FinanceTransferTypes.expense,
  );

  const budgetsData = mapBudgetsToOverviewItems(
    budgetsMock,
    transactionsMock,
    categoriesMock,
    {
      sortByProgress: true,
      limit: true,
    },
  );

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

  return (
    <div className={styles.page}>
      <h1>DashboardPage</h1>

      <BudgetCards summaries={currentSummary} deltas={deltas} />

      {pieChartData.map((item) => {
        return (
          <div>
            <h2>Chart Item</h2>
            {Object.entries(item).map(([key, value]) => (
              <span>
                {key}: {value} <br />
              </span>
            ))}
          </div>
        );
      })}

      {budgetsData.map((item) => {
        return (
          <div>
            <h2>Budgets Item</h2>
            {Object.entries(item).map(([key, value]) => (
              <span>
                {key}: {value} <br />
              </span>
            ))}
          </div>
        );
      })}

      <RecentTransactions recentTransactions={recentTransactions} />
    </div>
  );
};

export { DashboardPage };
