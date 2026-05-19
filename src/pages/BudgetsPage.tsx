import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import { BudgetSummary, getBudgetsSummary } from '@/widgets/budget-summary';
import { filterTransactionsByMonth } from '@/shared/helpers/filterTransactions';
import { transactionsMock } from '@/shared/mocks/transactions';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import {
  BudgetOverview,
  mapBudgetsToOverviewItems,
} from '@/widgets/budget-overview';
import styles from './style.module.scss';

const BudgetsPage = () => {
  const now = new Date();
  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);

  const budgetData = mapBudgetsToOverviewItems(
    budgetsMock,
    currentTransactions,
    categoriesMock,
  );

  const budgetSummaries = getBudgetsSummary(budgetData);

  return (
    <div className={styles.page}>
      <div className={styles.page__cell}>
        <Typography
          type={typographyProps.types.title28}
          tag={typographyProps.tags.h1}
        >
          Budgets
        </Typography>

        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[2]}
        >
          et and track spending limits by category
        </Typography>
      </div>

      <BudgetSummary summaries={budgetSummaries} />
      <BudgetOverview budgets={budgetData} />
    </div>
  );
};

export { BudgetsPage };
