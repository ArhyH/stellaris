import { ID } from '@/shared/types';
import { Budget, BudgetItem } from './types';
import { create } from 'zustand';

type BudgetStore = {
  budgets: BudgetItem;

  initBudgets: (budget: Budget[]) => void;

  addBudget: (budget: Budget) => void;
  editBudget: (budget: Budget) => void;
  deleteBudget: (id: ID) => void;
};

const useBudgetStore = create<BudgetStore>((set) => ({
  budgets: {},

  initBudgets: (budgets) =>
    set(() => ({
      budgets: budgets.reduce<BudgetItem>((acc, budget) => {
        acc[budget.id] = budget;
        return acc;
      }, {}),
    })),

  addBudget: (budget) =>
    set((state) => ({
      budgets: {
        ...state.budgets,
        [budget.id]: budget,
      },
    })),

  editBudget: (budget) =>
    set((state) => ({
      budgets: {
        ...state.budgets,
        [budget.id]: budget,
      },
    })),

  deleteBudget: (id) =>
    set((state) => {
      const copy = { ...state.budgets };
      delete copy[id];
      return {
        budgets: copy,
      };
    }),
}));

export { useBudgetStore };
