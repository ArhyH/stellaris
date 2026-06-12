import { AMOUNT } from '@/shared/types';

interface TransactionsSummary {
  income: AMOUNT;
  expense: AMOUNT;
  delta: AMOUNT;
}

type SummaryKey = keyof TransactionsSummary;

export { TransactionsSummary, SummaryKey };
