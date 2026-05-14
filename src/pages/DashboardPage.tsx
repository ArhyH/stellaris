import { FinanceTransferTypes } from '@/shared/consts/consts';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview/model/mappers';
import { BudgetCards, getSummaryDeltas } from '@/widgets/dashboard-summary';
import { getDashboardSummary } from '@/widgets/dashboard-summary/model/summary';
import { mapTransactionsToRecentItems } from '@/widgets/recent-transactions/model/mappers';
import { mapTransactionsToPieChartData } from '@/widgets/transaction-pie-chart/model/mapTransactionsToPieChartData';
import styles from './style.module.scss';

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

  const transactionsData = mapTransactionsToRecentItems(
    transactionsMock,
    categoriesMock,
    true,
  );

  const current = getDashboardSummary(transactionsMock);
  const deltas = getSummaryDeltas(current, current);

  return (
    <div className={styles.page}>
      <h1>DashboardPage</h1>

      <BudgetCards summaries={current} deltas={deltas} />

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

      {transactionsData.map((item) => {
        return (
          <div>
            <h2>Transaction Item</h2>
            {Object.entries(item).map(([key, value]) => (
              <span>
                {key}: {value} <br />
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export { DashboardPage };
