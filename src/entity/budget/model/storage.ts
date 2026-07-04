import { budgetsMock } from './mocks';
import { BudgetItem } from './types';

const STORAGE_KEY = 'budgets';

const saveBudgets = (budgets: BudgetItem) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(budgets));

const loadBudgets = (): BudgetItem => {
  const budgets = localStorage.getItem(STORAGE_KEY);

  if (!budgets) {
    saveBudgets(budgetsMock);
    return budgetsMock;
  }

  try {
    return JSON.parse(budgets);
  } catch {
    saveBudgets(budgetsMock);
    return budgetsMock;
  }
};

const clearBudgets = () => localStorage.removeItem(STORAGE_KEY);

export { saveBudgets, loadBudgets, clearBudgets };
