import {
  filterTransactionsByMonth,
  getMonthFromDate,
  getMonthYearFromDate,
  getPrevMonth,
} from '@/shared/helpers';
import { transactionsMock } from '@/shared/mocks/transactions';

import styles from './style.module.scss';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import {
  AnalyticsSummary,
  getAnalyticsDeltas,
  getAnalyticsSummary,
} from '@/widgets/summary';
import { Row } from '@/shared/ui/Row/Row';
import { categoriesMock } from '@/shared/mocks/categories';
import { FinanceTransferTypes } from '@/shared/consts';
import {
  BarChartUI,
  PieChartUi,
  LineChartUI,
  mapTransactionsToBarCtartData,
  mapTransactionsToLineCharData,
  mapTransactionsToPieChartData,
} from '@/widgets/charts';
import { Grid, gridProps } from '@/shared/ui/Grid';

const AnalyticsPage = () => {
  const now = new Date();
  const prevMonth = getPrevMonth(now);

  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);
  const prevTransactions = filterTransactionsByMonth(
    transactionsMock,
    prevMonth,
  );

  const currentSummary = getAnalyticsSummary(currentTransactions);
  const prevSummary = getAnalyticsSummary(prevTransactions);

  const summaryDeltas = getAnalyticsDeltas(currentSummary, prevSummary);

  const incomePieData = mapTransactionsToPieChartData(
    currentTransactions,
    categoriesMock,
    FinanceTransferTypes.income,
  );

  const expencePieData = mapTransactionsToPieChartData(
    currentTransactions,
    categoriesMock,
    FinanceTransferTypes.expense,
  );

  const monthYear = getMonthYearFromDate(currentTransactions[0].date);
  const month = getMonthFromDate(currentTransactions[0].date);

  const barChartData = mapTransactionsToBarCtartData(currentTransactions);

  const lineChartData = mapTransactionsToLineCharData(transactionsMock);

  return (
    <div className={styles.page}>
      <div className={styles.page__cell}>
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
      </div>

      <AnalyticsSummary summaries={currentSummary} deltas={summaryDeltas} />

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

      <Grid columns={gridProps.columns['2-1']}>
        <LineChartUI data={lineChartData} />

        <BarChartUI data={barChartData} month={month} />
      </Grid>
    </div>
  );
};

export { AnalyticsPage };
