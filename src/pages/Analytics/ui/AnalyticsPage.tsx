import { useState } from 'react';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { AnalyticsSummary } from '@/widgets/summary';
import { Row } from '@/shared/ui/Row/Row';
import { FinanceTransferTypes } from '@/shared/consts';
import { BarChartUI, PieChartUi, LineChartUI } from '@/widgets/charts';
import { Grid, gridProps } from '@/shared/ui/Grid';
import { TopSpending } from '@/widgets/top-spending';
import { Page, PageCell } from '@/shared/ui/Page';
import { rowProps } from '@/shared/ui/Row';
import { AnalyticsDateSelect } from '@/features/AnalyticsDateSelect';
import { getMonthYearFromDate } from '@/shared/helpers';
import { useTransactions } from '@/entity/transaction';
import { useAnalyticsData } from '../model/useAnalyticsData';

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
  } = useAnalyticsData(transactionsKey);

  const onChange = (current: string) => {
    setSelectedKey(current);
  };

  const isAdditionalVisible = topCategory && !!barChart.length;
  const isChartsVisible = !!expencePieData.length || !!incomePieData.length;

  return (
    <Page>
      <Row justify={rowProps.justifies.spaceBetween}>
        <PageCell gap={sizes.sizes[4]}>
          <Typography
            type={typographyProps.types.title28}
            color={colors.base.white}
            tag={typographyProps.tags.h1}
          >
            Analytics —&nbsp;
            {transactionsKey && getMonthYearFromDate(transactionsKey)}
          </Typography>

          <Typography
            type={typographyProps.types.text14}
            color={colors.lightgray[2]}
          >
            Deeper insights into your financial patterns
          </Typography>
        </PageCell>

        <AnalyticsDateSelect
          transactionsKey={transactionsKey}
          onChange={onChange}
        />
      </Row>

      <AnalyticsSummary summaries={currentSummary} deltas={summaryDeltas} />

      {isChartsVisible && (
        <Row>
          <PieChartUi
            data={expencePieData}
            date={date}
            type={FinanceTransferTypes.expense}
          />

          <PieChartUi
            data={incomePieData}
            date={date}
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
            <TopSpending data={topCategory} date={date} />

            <BarChartUI data={barChart} date={date} />
          </PageCell>
        )}
      </Grid>
    </Page>
  );
};

export { AnalyticsPage };
