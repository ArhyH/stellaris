import { Budget } from '@/entity/budget';
import { useBudgetsCategories } from '@/features/BudgetForm';
import { SelectOption } from '@/shared/ui/Select';

const useEditBudget = (editingBudget: Budget | null): SelectOption[] | [] => {
  return useBudgetsCategories(
    (category) => category.id === editingBudget?.categoryId,
  );
};

export { useEditBudget };
