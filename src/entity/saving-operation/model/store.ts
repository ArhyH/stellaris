import { ID } from '@/shared/types';
import { SavingOperation, SavingOperationItem } from './types';
import { create } from 'zustand';
import { storage } from '@/entity/persistence';

type SavingOperationsStore = {
  savingOperations: SavingOperationItem;

  initSavingOperations: () => void;

  addSavingOperation: (savingOperation: SavingOperation) => void;
  deleteSavingOperation: (id: ID) => void;
};

const useSavingStore = create<SavingOperationsStore>((set) => ({
  savingOperations: {},

  initSavingOperations: () =>
    set(() => ({
      savingOperations: storage.savingOperation.load(),
    })),

  addSavingOperation: (savingOperation) =>
    set((state) => {
      const savingOperations = {
        ...state.savingOperations,
        [savingOperation.id]: savingOperation,
      };

      storage.savingOperation.save(savingOperations);

      return { savingOperations };
    }),

  deleteSavingOperation: (id) =>
    set((state) => {
      const copy = { ...state.savingOperations };
      delete copy[id];

      storage.savingOperation.save(copy);

      return {
        savingOperations: copy,
      };
    }),
}));

export { useSavingStore };
