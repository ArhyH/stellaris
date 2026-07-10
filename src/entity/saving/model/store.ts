import { ID } from '@/shared/types';
import { Saving, SavingItem } from './types';
import { create } from 'zustand';
import { storage } from '@/entity/persistence';

type SavingsStore = {
  savings: SavingItem;

  initSavings: () => void;

  addSaving: (saving: Saving) => void;
  updateSaving: (saving: Saving) => void;
  deleteSaving: (id: ID) => void;
};

const useSavingStore = create<SavingsStore>((set) => ({
  savings: {},

  initSavings: () =>
    set(() => ({
      savings: storage.saving.load(),
    })),

  addSaving: (saving) =>
    set((state) => {
      const savings = {
        ...state.savings,
        [saving.id]: saving,
      };

      storage.saving.save(savings);

      return { savings };
    }),

  updateSaving: (saving) =>
    set((state) => {
      const savings = {
        ...state.savings,
        [saving.id]: saving,
      };

      storage.saving.save(savings);

      return { savings };
    }),

  deleteSaving: (id) =>
    set((state) => {
      const copy = { ...state.savings };
      delete copy[id];

      storage.saving.save(copy);

      return {
        savings: copy,
      };
    }),
}));

export { useSavingStore };
