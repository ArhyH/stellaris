import { Budget, BudgetOverviewItem } from '@/entity/budget';
import { BudgetItem } from './BudgetItem';
import styles from './style.module.scss';
import { ID } from '@/shared/types';
import { SelectOption } from '@/shared/ui/Select';

type BudgetListProps = {
  budgets: BudgetOverviewItem[];
  editingBudget: Budget | null;
  selectOptions: SelectOption[];
  onClose: () => void;
  onSubmit: (budget: Budget) => void;
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const BudgetList = (props: BudgetListProps) => {
  const {
    budgets,
    editingBudget,
    selectOptions,
    onClose,
    onSubmit,
    onEdit,
    onDelete,
  } = props;

  return (
    <ul className={styles['budget-overview']}>
      {budgets.map((budget) => {
        return (
          <BudgetItem
            budget={budget}
            key={budget.id}
            onEdit={onEdit}
            onDelete={onDelete}
            selectOptions={selectOptions}
            editingBudget={editingBudget}
            onClose={onClose}
            onSubmit={onSubmit}
            isEditing={editingBudget?.categoryId === budget.categoryId}
          />
        );
      })}
    </ul>
  );
};

export { BudgetList };
export type { BudgetListProps };
