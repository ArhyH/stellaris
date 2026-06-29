import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';

type AddTransactionProps = {
  categories: Category[];
  onSubmit: (transaction: Transaction) => void;
};

type FormTransaction = Omit<Transaction, 'amount'> & {
  amount: string;
};

export type { AddTransactionProps, FormTransaction };
