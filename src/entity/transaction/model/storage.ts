import { transactionsMock } from '..';
import { TransactionItem } from './types';

const STORAGE_KEY = 'transactions';

const saveTransactions = (transactions: TransactionItem) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));

const loadTransactions = (): TransactionItem => {
  const transactions = localStorage.getItem(STORAGE_KEY);

  if (!transactions) {
    saveTransactions(transactionsMock);
    return transactionsMock;
  }

  try {
    return JSON.parse(transactions);
  } catch {
    saveTransactions(transactionsMock);
    return transactionsMock;
  }
};

const clearTransactions = () => localStorage.removeItem(STORAGE_KEY);

export { saveTransactions, loadTransactions, clearTransactions };
