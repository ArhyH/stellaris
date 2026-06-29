import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { BudgetList } from '@/widgets/budget-overview';
import { Row } from '@/shared/ui/Row/Row';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { rowProps } from '@/shared/ui/Row/consts';
import { BudgetSummary } from '@/widgets/summary';
import { Page, PageCell } from '@/shared/ui/Page';
import { useBudgetsData } from '../model/useBudgetsData';

const BudgetsPage = () => {
  const { budgetData, budgetSummaries } = useBudgetsData();

  return (
    <Page>
      <Row justify={rowProps.justifies.spaceBetween}>
        <PageCell gap={sizes.sizes[4]}>
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
            Set and track spending limits by category
          </Typography>
        </PageCell>

        <PageCell>
          <Button theme={buttonProps.themes.green} size={buttonProps.sizes[40]}>
            <Icon icon={icons.plus24} size={sizes.sizes[16]} />
            <Typography
              tag={typographyProps.tags.h3}
              type={typographyProps.types.title14}
            >
              Add Budget
            </Typography>
          </Button>
        </PageCell>
      </Row>

      <BudgetSummary summaries={budgetSummaries} />
      <BudgetList budgets={budgetData} />
    </Page>
  );
};

export { BudgetsPage };
