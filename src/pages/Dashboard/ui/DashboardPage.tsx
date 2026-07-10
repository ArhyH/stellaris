import { FinanceTransferTypes } from '@/shared/consts';
import { RecentTransactions } from '@/widgets/transaction';
import { PieChartUi, pieChartProps } from '@/widgets/charts';
import { BudgetOverview } from '@/widgets/budget';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { DashboardSummary } from '@/widgets/summary';
import { Page, PageCell } from '@/shared/ui/Page';
import { useDashboardData } from '../model/useDashboardData';
import { Grid, gridProps } from '@/shared/ui/Grid';

const DashboardPage = () => {
  const {
    currentSummary,
    summaryDeltas,
    recentTransactions,
    pieChartData,
    budgetData,
    monthYear,
  } = useDashboardData();

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
          Here's your financial overview for
          <Typography
            type={typographyProps.types.title14}
            color={colors.base.white}
          >
            &nbsp; {monthYear}
          </Typography>
        </Typography>
      </PageCell>

      <DashboardSummary summaries={currentSummary} deltas={summaryDeltas} />

      <Grid templateColumns={gridProps.columns['5-7']}>
        <PieChartUi
          data={pieChartData}
          date={monthYear}
          type={FinanceTransferTypes.expense}
          mode={pieChartProps.modes.dashboard}
        />
        <BudgetOverview budgets={budgetData} />
      </Grid>
      <RecentTransactions recentTransactions={recentTransactions} />
    </Page>
  );
};

export { DashboardPage };
