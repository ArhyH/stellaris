import { ID } from '@/shared/types';
import { Budget, BudgetItem } from './types';
import { create } from 'zustand';
import { loadBudgets, saveBudgets } from './storage';

type BudgetStore = {
  budgets: BudgetItem;

  initBudgets: () => void;

  addBudget: (budget: Budget) => void;
  editBudget: (budget: Budget) => void;
  deleteBudget: (id: ID) => void;
};

const useBudgetStore = create<BudgetStore>((set) => ({
  budgets: {},

  initBudgets: () =>
    set(() => ({
      budgets: loadBudgets(),
    })),

  addBudget: (budget) =>
    set((state) => {
      const budgets = {
        ...state.budgets,
        [budget.id]: budget,
      };

      saveBudgets(budgets);
      return { budgets };
    }),

  editBudget: (budget) =>
    set((state) => {
      const budgets = {
        ...state.budgets,
        [budget.id]: budget,
      };

      saveBudgets(budgets);
      return { budgets };
    }),

  deleteBudget: (id) =>
    set((state) => {
      const copy = { ...state.budgets };
      delete copy[id];

      saveBudgets(copy);

      return {
        budgets: copy,
      };
    }),
}));

export { useBudgetStore };
