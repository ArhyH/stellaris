import { useBudgets } from '@/entity/budget';
import { useBudgetsCategories } from '@/features/BudgetForm';
import { SelectOption } from '@/shared/ui/Select';

const useAddBudget = (): SelectOption[] => {
  const { budgetsByCategory } = useBudgets();

  return useBudgetsCategories(
    (category) => !budgetsByCategory.has(category.id),
  );
};

export { useAddBudget };
