import styles from './style.module.scss';
import { BudgetCard } from './BudgetCard';
import { BudgetsSummary, SummaryKey } from '../model/types';

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
    <div className={styles['budget-card__wrapper']}>
      {BUDGET_CARDS_CONFIG.map(({ title, key }) => {
        return (
          <BudgetCard title={title} budgetKey={key} summary={summaries[key]} />
        );
      })}
    </div>
  );
};

export { BudgetSummary };
export type { BudgetSummaryProps };
