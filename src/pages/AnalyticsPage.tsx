import { filterTransactionsByMonth } from '@/shared/helpers';
import { transactionsMock } from '@/shared/mocks/transactions';

import styles from './style.module.scss';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import {
  AnalyticsSummary,
  getAnalyticsDeltas,
  getAnalyticsSummary,
} from '@/widgets/summary';
import { getPrevMonth } from '@/shared/helpers/filterTransactions';

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
    </div>
  );
};

export { AnalyticsPage };
