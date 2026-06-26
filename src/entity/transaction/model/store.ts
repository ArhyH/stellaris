import { ID } from '@/shared/types';
import { Transaction, TransactionItem } from './types';
import { create } from 'zustand';

type TransactionStore = {
  transactions: TransactionItem;

  initTransactions: (transactions: Transaction[]) => void;

  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: ID) => void;
};

const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: {},

  initTransactions: (transactions) =>
    set(() => ({
      transactions: transactions.reduce<TransactionItem>((acc, transaction) => {
        acc[transaction.id] = transaction;
        return acc;
      }, {}),
    })),

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: {
        ...state.transactions,
        [transaction.id]: transaction,
      },
    })),

  deleteTransaction: (id) =>
    set((state) => {
      const copy = { ...state.transactions };
      delete copy[id];
      return {
        transactions: copy,
      };
    }),
}));

export { useTransactionStore };
