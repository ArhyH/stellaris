import { useMemo } from 'react';
import { Transaction } from '@/entity/transaction';
import { getTransactionsSummary } from './summary';

const useTransactionsSummary = (transactions: Transaction[]) =>
  useMemo(() => getTransactionsSummary(transactions), [transactions]);

export { useTransactionsSummary };
