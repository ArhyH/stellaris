import { ID } from '@/shared/types';
import { Transaction, TransactionItem } from './types';
import { create } from 'zustand';
import { loadTransactions, saveTransactions } from './storage';

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
      transactions: loadTransactions(),
    })),

  addTransaction: (transaction) =>
    set((state) => {
      const transactions = {
        ...state.transactions,
        [transaction.id]: transaction,
      };

      saveTransactions(transactions);

      return { transactions };
    }),

  deleteTransaction: (id) =>
    set((state) => {
      const copy = { ...state.transactions };
      delete copy[id];

      saveTransactions(copy);

      return {
        transactions: copy,
      };
    }),
}));

export { useTransactionStore };
