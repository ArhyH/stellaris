import { BudgetForm } from '@/features/BudgetForm';
import { Budget } from '@/entity/budget';
import { SelectOption } from '@/shared/ui/Select';

type EditBudgetProps = {
  currentBudget: Budget;
  selectOptions: SelectOption[];
  onSubmit: (budget: Budget) => void;
  onClose: () => void;
};

type FormBudget = Omit<Budget, 'limit'> & {
  limit: string;
};

const EditBudget = (props: EditBudgetProps) => {
  const { currentBudget, selectOptions, onSubmit, onClose } = props;

  const currentOption = [...selectOptions].filter(
    (option) => option.value === currentBudget.categoryId,
  );

  const formBudget: FormBudget = {
    ...currentBudget,
    limit: String(currentBudget.limit),
  };

  return (
    <BudgetForm
      title="Edit Budget"
      currentBudget={formBudget}
      selectOptions={currentOption}
      onSubmit={onSubmit}
      onClose={onClose}
      isEditMode
    />
  );
};

export { EditBudget };
