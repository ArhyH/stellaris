import { Budget } from '@/entity/budget';
import { SelectOption } from '@/shared/ui/Select';
import { createBudget } from '../model/helpers';
import { BudgetForm } from '../../BudgetForm';

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
