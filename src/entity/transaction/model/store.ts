import { ID } from '@/shared/types';
import { Transaction, TransactionItem } from './types';
import { create } from 'zustand';
import { storage } from '@/entity/persistence';

type TransactionStore = {
  transactions: TransactionItem;

  initTransactions: () => void;

  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: ID) => void;
};

const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: {},

  initTransactions: () =>
    set(() => ({
      transactions: storage.transaction.load(),
    })),

  addTransaction: (transaction) =>
    set((state) => {
      const transactions = {
        ...state.transactions,
        [transaction.id]: transaction,
      };

      storage.transaction.save(transactions);

      return { transactions };
    }),

  deleteTransaction: (id) =>
    set((state) => {
      const copy = { ...state.transactions };
      delete copy[id];

      storage.transaction.save(copy);

      return {
        transactions: copy,
      };
    }),
}));

export { useTransactionStore };
