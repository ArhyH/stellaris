import { useCategories } from '@/entity/category';
import { Transaction } from '@/entity/transaction';
import { useTransactionsSummary } from '@/widgets/summary';
import { useRecentTransactions } from '@/widgets/transactions-list';
import { ViewModes } from '@/shared/consts';

const useTransactionsData = (transactions: Transaction[]) => {
  const { categoriesList } = useCategories();

  const recentTransactions = useRecentTransactions(
    transactions,
    categoriesList,
    ViewModes.long,
  );

  const summaries = useTransactionsSummary(transactions);

  return { recentTransactions, summaries };
};

export { useTransactionsData };
