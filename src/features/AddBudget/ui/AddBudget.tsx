import { BudgetForm } from '@/features/BudgetForm';
import { Budget } from '@/entity/budget';
import { createBudget } from '../model/helpers';
import { SelectOption } from '@/shared/ui/Select';

type AddBudgetProps = {
  selectOptions: SelectOption[];
  onSubmit: (budget: Budget) => void;
  onClose: () => void;
};

const AddBudget = (props: AddBudgetProps) => {
  const { selectOptions, onSubmit, onClose } = props;

  return (
    <BudgetForm
      title="New Budget"
      selectOptions={selectOptions}
      onSubmit={onSubmit}
      onClose={onClose}
      currentBudget={createBudget()}
    />
  );
};

export { AddBudget };
