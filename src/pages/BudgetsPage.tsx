import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { BudgetSummary, getBudgetsSummary } from '@/widgets/budget-summary';
import { filterTransactionsByMonth } from '@/shared/helpers/filterTransactions';
import { transactionsMock } from '@/shared/mocks/transactions';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import {
  BudgetList,
  mapBudgetsToOverviewItems,
} from '@/widgets/budget-overview';
import styles from './style.module.scss';
import { Row } from '@/shared/ui/Row/Row';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { rowProps } from '@/shared/ui/Row/consts';

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
      <Row justify={rowProps.justifies.spaceBetween}>
        <div className={styles.page__cell}>
          <Typography
            type={typographyProps.types.title28}
            color={colors.base.white}
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

        <div className={styles.page__cell}>
          <Button theme={buttonProps.themes.green} size={buttonProps.sizes[40]}>
            <Icon
              icon={icons.plus24}
              width={sizes.sizes[16]}
              height={sizes.sizes[16]}
            />
            <Typography
              tag={typographyProps.tags.h3}
              type={typographyProps.types.title14}
            >
              Add Budget
            </Typography>
          </Button>
        </div>
      </Row>

      <BudgetSummary summaries={budgetSummaries} />
      <BudgetList budgets={budgetData} />
    </div>
  );
};

export { BudgetsPage };
