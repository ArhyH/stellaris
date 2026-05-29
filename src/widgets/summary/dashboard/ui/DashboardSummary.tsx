import {
  DashboardSummary as DashboardSummaryType,
  SummaryDeltas,
} from '../model/types';
import { DashboardCard } from './DashboardCard';
import { icons } from '@/shared/assets';
import {
  SummaryCardWrapper,
  summaryCardWrapperProps,
} from '@/shared/ui/SummaryCard';

type DashboardSummaryProps = {
  summaries: DashboardSummaryType;
  deltas: SummaryDeltas;
};

type SummaryKey = keyof DashboardSummaryType;

const BUDGET_CARDS_CONFIG = [
  { key: 'total', title: 'Total Balance', icon: icons.wallet18 },
  { key: 'income', title: 'Total Income', icon: icons.arrowUp18 },
  { key: 'expense', title: 'Total Expenses', icon: icons.arrowDown18 },
] as const satisfies ReadonlyArray<{
  key: SummaryKey;
  title: string;
  icon: UtilityTypes.SvgContent;
}>;

const DashboardSummary = (props: DashboardSummaryProps) => {
  const { summaries, deltas } = props;

  return (
    <SummaryCardWrapper columns={summaryCardWrapperProps.columns[3]}>
      {BUDGET_CARDS_CONFIG.map(({ key, icon, title }) => {
        return (
          <DashboardCard
            key={key}
            title={title}
            icon={icon}
            summary={summaries[key]}
            delta={deltas[key]}
            categoryKey={key}
          />
        );
      })}
    </SummaryCardWrapper>
  );
};

export { DashboardSummary };
export type { DashboardSummaryProps };
