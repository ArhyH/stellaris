import {
  AnalyticsSummary as AnalyticsSummaryType,
  SummaryDeltas,
} from '../model/types';
import { AnalyticsCard } from './AnalyticsCard';
import { icons } from '@/shared/assets';
import {
  SummaryCardWrapper,
  summaryCardWrapperProps,
} from '@/shared/ui/SummaryCard';

type AnalyticsSummaryProps = {
  summaries: AnalyticsSummaryType;
  deltas: SummaryDeltas;
};

type SummaryKey = keyof AnalyticsSummaryType;

const ANALYTICS_CARD_CONFIG = [
  { key: 'income', title: 'Income This Month', icon: icons.arrowUp18 },
  { key: 'expense', title: 'Expenses This Month', icon: icons.arrowDown18 },
  { key: 'daily', title: 'Avg Daily Spend', icon: icons.arrowDown18 },
  { key: 'saving', title: 'Savings Rate', icon: icons.shield24 },
  { key: 'totalSavings', title: 'Total Savings', icon: icons.coins24 },
] as const satisfies ReadonlyArray<{
  key: SummaryKey;
  title: string;
  icon: UtilityTypes.SvgContent;
}>;

const AnalyticsSummary = (props: AnalyticsSummaryProps) => {
  const { summaries, deltas } = props;
  return (
    <SummaryCardWrapper columns={summaryCardWrapperProps.columns[3]}>
      {ANALYTICS_CARD_CONFIG.map(({ key, icon, title }) => {
        return (
          <AnalyticsCard
            key={key}
            title={title}
            summary={summaries[key]}
            delta={deltas[key]}
            budgetKey={key}
            icon={icon}
          />
        );
      })}
    </SummaryCardWrapper>
  );
};

export { AnalyticsSummary };
export type { AnalyticsSummaryProps };
