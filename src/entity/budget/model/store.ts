import { create } from 'zustand';
import { ID } from '@/shared/types';
import { storage } from '@/entity/persistence';
import { Budget, BudgetItem } from './types';

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
      budgets: storage.budget.load(),
    })),

  addBudget: (budget) =>
    set((state) => {
      const budgets = {
        ...state.budgets,
        [budget.id]: budget,
      };

      storage.budget.save(budgets);

      return { budgets };
    }),

  editBudget: (budget) =>
    set((state) => {
      const budgets = {
        ...state.budgets,
        [budget.id]: budget,
      };

      storage.budget.save(budgets);

      return { budgets };
    }),

  deleteBudget: (id) =>
    set((state) => {
      const copy = { ...state.budgets };
      delete copy[id];

      storage.budget.save(copy);

      return {
        budgets: copy,
      };
    }),
}));

export { useBudgetStore };
