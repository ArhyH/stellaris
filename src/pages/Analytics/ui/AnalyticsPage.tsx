import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { AnalyticsSummary } from '@/widgets/summary';
import { Row } from '@/shared/ui/Row/Row';
import { FinanceTransferTypes } from '@/shared/consts';
import { BarChartUI, PieChartUi, LineChartUI } from '@/widgets/charts';
import { Grid, gridProps } from '@/shared/ui/Grid';
import { TopSpending } from '@/widgets/top-spending';
import { Page, PageCell } from '@/shared/ui/Page';

import { useAnalyticsData } from '../model/useAnalyticsData';

const AnalyticsPage = () => {
  const {
    currentSummary,
    summaryDeltas,
    expencePieData,
    incomePieData,
    lineChartData,
    barChartData,
    topCategory,
    monthYear,
    month,
  } = useAnalyticsData();

  const isAdditionalVisible = topCategory && !!barChartData.length;
  const isChartsVisible = !!expencePieData.length || !!incomePieData.length;

  return (
    <Page>
      <PageCell gap={sizes.sizes[4]}>
        <Typography
          type={typographyProps.types.title28}
          color={colors.base.white}
          tag={typographyProps.tags.h1}
        >
          Analytics
        </Typography>

        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[2]}
        >
          Deeper insights into your financial patterns
        </Typography>
      </PageCell>

      <AnalyticsSummary summaries={currentSummary} deltas={summaryDeltas} />

      {isChartsVisible && (
        <Row>
          <PieChartUi
            data={expencePieData}
            date={monthYear}
            type={FinanceTransferTypes.expense}
          />

          <PieChartUi
            data={incomePieData}
            date={monthYear}
            type={FinanceTransferTypes.income}
          />
        </Row>
      )}

      <Grid
        {...(isAdditionalVisible && {
          templateColumns: gridProps.columns['2-1'],
        })}
      >
        <LineChartUI data={lineChartData} />

        {isAdditionalVisible && (
          <PageCell gap={sizes.sizes[20]}>
            <TopSpending data={topCategory} />

            <BarChartUI data={barChartData} month={month} />
          </PageCell>
        )}
      </Grid>
    </Page>
  );
};

export { AnalyticsPage };
