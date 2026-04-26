import { FinanceTransferTypes } from '@/shared/consts/consts';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { mapBudgetsToOverviewItems } from '@/widgets/budget-overview/model/mappers';
import { getDashboardSummary } from '@/widgets/dashboard-summary/model/summary';
import { mapTransactionsToRecentItems } from '@/widgets/recent-transactions/model/mappers';
import { mapTransactionsToPieChartData } from '@/widgets/transaction-pie-chart/model/mapTransactionsToPieChartData';

const DashboardPage = () => {
  const { income, expense, total } = getDashboardSummary(transactionsMock);
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

  return (
    <div>
      <h1>DashboardPage</h1>
      <h2>Income {income}</h2>
      <h2>Expense {expense}</h2>
      <h2>Total {total}</h2>

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
