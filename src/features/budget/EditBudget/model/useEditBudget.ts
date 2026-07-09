import { Budget } from '@/entity/budget';
import { SelectOption } from '@/shared/ui/Select';
import { useBudgetsCategories } from '../../BudgetForm';

const useEditBudget = (editingBudget: Budget | null): SelectOption[] | [] => {
  return useBudgetsCategories(
    (category) => category.id === editingBudget?.categoryId,
  );
};

export { useEditBudget };
