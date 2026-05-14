import styles from './style.module.scss';
import { DashboardSummary, SummaryDeltas } from '../model/types';
import { BudgetCard } from './BudgetCard';
import { ICON } from '@/shared/types/types';

type BudgetCardsProps = {
  summaries: DashboardSummary;
  deltas: SummaryDeltas;
};

type SummaryKey = keyof DashboardSummary;

const BUDGET_CARDS_CONFIG = [
  { key: 'total', title: 'Total Balance', icon: '' },
  { key: 'income', title: 'Total Income', icon: '' },
  { key: 'expense', title: 'Total Expenses', icon: '' },
] as const satisfies Array<{ key: SummaryKey; title: string; icon: ICON }>;

const BudgetCards = (props: BudgetCardsProps) => {
  const { summaries, deltas } = props;

  return (
    <div className={styles['budget-card__wrapper']}>
      {BUDGET_CARDS_CONFIG.map(({ key, icon, title }) => {
        return (
          <BudgetCard
            key={key}
            title={title}
            icon={icon}
            summary={summaries[key]}
            delta={deltas[key]}
          />
        );
      })}
    </div>
  );
};

export { BudgetCards };
export type { BudgetCardsProps };
