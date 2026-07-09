import { useBudgets } from '@/entity/budget';
import { SelectOption } from '@/shared/ui/Select';
import { useBudgetsCategories } from '../../BudgetForm';

const useAddBudget = (): SelectOption[] => {
  const { budgetsByCategory } = useBudgets();

  return useBudgetsCategories(
    (category) => !budgetsByCategory.has(category.id),
  );
};

export { useAddBudget };
