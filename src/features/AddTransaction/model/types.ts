import { Transaction } from '@/entity/transaction';

type AddTransactionProps = {
  onSubmit: (transaction: Transaction) => void;
  isDisabled: boolean;
};

type FormTransaction = Omit<Transaction, 'amount'> & {
  amount: string;
};

export type { AddTransactionProps, FormTransaction };
