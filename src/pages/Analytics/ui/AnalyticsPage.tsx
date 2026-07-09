import { useState } from 'react';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { AnalyticsSummary } from '@/widgets/summary';
import { Row } from '@/shared/ui/Row/Row';
import { FinanceTransferTypes } from '@/shared/consts';
import {
  BarChartUI,
  PieChartUi,
  LineChartUI,
  pieChartProps,
} from '@/widgets/charts';
import { Grid, gridProps } from '@/shared/ui/Grid';
import { TopSpending } from '@/widgets/top-spending';
import { Page, PageCell } from '@/shared/ui/Page';
import { rowProps } from '@/shared/ui/Row';
import { AnalyticsDateSelect } from '@/features/analytics';
import { useTransactions } from '@/entity/transaction';
import { useAnalyticsData } from '../model/useAnalyticsData';
import { useCurrentAnalytics } from '../model/useCurrentAnalytics';

const AnalyticsPage = () => {
  const { transactionsDateKeys } = useTransactions();

  const [selectedKey, setSelectedKey] = useState<string | undefined>();

  const transactionsKey =
    selectedKey ?? transactionsDateKeys[transactionsDateKeys.length - 1];

  const {
    lineChartData,
    currentSummary,
    summaryDeltas,
    incomePieData,
    expencePieData,
    topCategory,
    barChart,
    date,
    isSelectEnabled,
  } = useAnalyticsData(transactionsKey);

  const { isAnalyticsAvailable, displayDate } = useCurrentAnalytics();

  const onChange = (current: string) => {
    setSelectedKey(current);
  };

  return (
    <Page>
      <Row justify={rowProps.justifies.spaceBetween}>
        <PageCell gap={sizes.sizes[4]}>
          <Typography
            type={typographyProps.types.title28}
            color={colors.base.white}
            tag={typographyProps.tags.h1}
          >
            Analytics
            {transactionsKey && <> — {date}</>}
          </Typography>

          {isAnalyticsAvailable ? (
            <Typography
              type={typographyProps.types.text14}
              color={colors.lightgray[2]}
            >
              Deeper insights into your financial patterns
            </Typography>
          ) : (
            <Typography
              type={typographyProps.types.text14}
              color={colors.lightgray[2]}
            >
              No transactions for
              <Typography
                type={typographyProps.types.title14}
                color={colors.base.white}
              >
                &nbsp;{displayDate}&nbsp;
              </Typography>
              yet. Add transactions to view analytics for this month.
            </Typography>
          )}
        </PageCell>

        {isSelectEnabled && (
          <AnalyticsDateSelect
            transactionsKey={transactionsKey}
            onChange={onChange}
          />
        )}
      </Row>

      <AnalyticsSummary summaries={currentSummary} deltas={summaryDeltas} />

      <Grid templateColumns={gridProps.columns['1-1']}>
        <PieChartUi
          data={expencePieData}
          date={date}
          type={FinanceTransferTypes.expense}
          mode={pieChartProps.modes.analytics}
        />

        <PieChartUi
          data={incomePieData}
          date={date}
          type={FinanceTransferTypes.income}
          mode={pieChartProps.modes.analytics}
        />
      </Grid>

      <Grid templateColumns={gridProps.columns['2-1']}>
        <LineChartUI data={lineChartData} />

        <PageCell gap={sizes.sizes[20]}>
          <TopSpending data={topCategory} date={date} />

          <BarChartUI data={barChart} date={date} />
        </PageCell>
      </Grid>
    </Page>
  );
};

export { AnalyticsPage };
