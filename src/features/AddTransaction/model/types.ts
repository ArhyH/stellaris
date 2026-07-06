import { Transaction } from '@/entity/transaction';

type AddTransactionProps = {
  onSubmit: (transaction: Transaction) => void;
};

type FormTransaction = Omit<Transaction, 'amount'> & {
  amount: string;
};

export type { AddTransactionProps, FormTransaction };
