import { AMOUNT, DATE, FinanceTransferType, ID, LABEL } from '@/shared/types';

interface Transaction {
  type: FinanceTransferType;
  id: ID;
  date: DATE;
  amount: AMOUNT;
  categoryId: ID;
  note?: LABEL;
}

type TransactionItem = Record<string, Transaction>;

export type { Transaction, TransactionItem };
