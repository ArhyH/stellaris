import { BudgetOverviewItem } from '@/entity/budget';
import { BudgetItem } from './BudgetItem';
import styles from './style.module.scss';

type BudgetListProps = {
  budgets: BudgetOverviewItem[];
};

const BudgetList = (props: BudgetListProps) => {
  const { budgets } = props;
  return (
    <ul className={styles['budget-overview']}>
      {budgets.map((budget) => {
        return <BudgetItem budget={budget} />;
      })}
    </ul>
  );
};

export { BudgetList };
export type { BudgetListProps };
