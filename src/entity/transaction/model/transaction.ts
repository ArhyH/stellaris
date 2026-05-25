import { AMOUNT, DATE, FinanceTransferType, ID, LABEL } from '@/shared/types';

interface Transaction {
  type: FinanceTransferType;
  id: ID;
  date: DATE;
  amount: AMOUNT;
  categoryId: ID;
  note?: LABEL;
}

export type { Transaction };
