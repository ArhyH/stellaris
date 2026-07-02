import { Budget } from '@/entity/budget';
import { Category } from '@/entity/category';
import { icons } from '@/shared/assets';
import { FinanceTransferTypes } from '@/shared/consts';
import { SelectOption } from '@/shared/ui/Select';

const mapCategoryToSelectItems = (categories: Category[]): SelectOption[] => {
  return categories.map((category) => {
    return {
      value: category.id,
      description: category.name,
      icon: icons[category.icon],
      color: category.color,
    };
  });
};

const getSelectOptions = (
  categories: Category[],
  budgets: Budget[],
  editingBudget?: Budget | null,
) => {
  const expenseCategories = [...categories].filter(
    (category) => category.type === FinanceTransferTypes.expense,
  );

  if (editingBudget) {
    const currentCategories = [...expenseCategories].filter(
      (category) => category.id === editingBudget?.categoryId,
    );
    return mapCategoryToSelectItems(currentCategories);
  }

  const budgetSet = new Set(budgets.map((budget) => budget.categoryId));

  const currentCategories = [...expenseCategories].filter(
    (category) => !budgetSet.has(category.id),
  );

  return mapCategoryToSelectItems(currentCategories);
};

export { getSelectOptions };
