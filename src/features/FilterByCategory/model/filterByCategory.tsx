import { Transaction } from '@/entity/transaction';
import { ID } from '@/shared/types';
import { FinanceTransferTypes } from '@/shared/consts';

const filterByCategory = (
  transactions: Transaction[],
  categoryId: ID | typeof FinanceTransferTypes.all,
) => {
  if (!categoryId || categoryId === 'all') {
    return transactions;
  }

  return [...transactions].filter(
    (transaction) => transaction.categoryId === categoryId,
  );
};

export { filterByCategory };
