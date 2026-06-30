import { Budget, BudgetOverviewItem } from '@/entity/budget';
import { ID } from '@/shared/types';
import { EditBudget } from '@/features/EditBudget';
import { BudgetElement } from './BudgetElement';
import { SelectOption } from '@/shared/ui/Select';

type BudgetItemProps = {
  budget: BudgetOverviewItem;
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;

  isEditing: boolean;
  editingBudget: Budget | null;
  selectOptions: SelectOption[];
  onSubmit: (budget: Budget) => void;
  onClose: () => void;
};

const BudgetItem = (props: BudgetItemProps) => {
  const {
    budget,
    onEdit,
    onDelete,
    isEditing,
    editingBudget,
    selectOptions,
    onSubmit,
    onClose,
  } = props;

  if (isEditing && editingBudget) {
    return (
      <EditBudget
        selectOptions={selectOptions}
        currentBudget={editingBudget}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    );
  }

  return <BudgetElement budget={budget} onEdit={onEdit} onDelete={onDelete} />;
};

export { BudgetItem };
export type { BudgetItemProps };
