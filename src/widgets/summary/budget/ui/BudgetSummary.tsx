import { BudgetCard } from './BudgetCard';
import { BudgetsSummary, SummaryKey } from '../model/types';
import {
  SummaryCardWrapper,
  summaryCardWrapperProps,
} from '@/shared/ui/SummaryCard';

type BudgetSummaryProps = {
  summaries: BudgetsSummary;
};

const BUDGET_CARDS_CONFIG = [
  { key: 'total', title: 'Total Budget' },
  { key: 'spent', title: 'Total Spent' },
  { key: 'remaining', title: 'Remaining' },
  { key: 'over', title: 'Over Budget' },
] as const satisfies ReadonlyArray<{
  key: SummaryKey;
  title: string;
}>;

const BudgetSummary = (props: BudgetSummaryProps) => {
  const { summaries } = props;

  return (
    <SummaryCardWrapper columns={summaryCardWrapperProps.columns[4]}>
      {BUDGET_CARDS_CONFIG.map(({ title, key }) => {
        return (
          <BudgetCard title={title} budgetKey={key} summary={summaries[key]} />
        );
      })}
    </SummaryCardWrapper>
  );
};

export { BudgetSummary };
export type { BudgetSummaryProps };
