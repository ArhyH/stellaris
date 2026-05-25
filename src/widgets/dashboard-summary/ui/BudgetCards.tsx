import styles from './style.module.scss';
import { DashboardSummary, SummaryDeltas } from '../model/types';
import { BudgetCard } from './BudgetCard';
import { icons } from '@/shared/assets';

type BudgetCardsProps = {
  summaries: DashboardSummary;
  deltas: SummaryDeltas;
};

type SummaryKey = keyof DashboardSummary;

const BUDGET_CARDS_CONFIG = [
  { key: 'total', title: 'Total Balance', icon: icons.wallet18 },
  { key: 'income', title: 'Total Income', icon: icons.arrowUp18 },
  { key: 'expense', title: 'Total Expenses', icon: icons.arrowDown18 },
] as const satisfies ReadonlyArray<{
  key: SummaryKey;
  title: string;
  icon: UtilityTypes.SvgContent;
}>;

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
            categoryKey={key}
          />
        );
      })}
    </div>
  );
};

export { BudgetCards };
export type { BudgetCardsProps };
