import { useEffect } from 'react';
import { useBudgetStore } from '@/entity/budget';
import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';

const StoreInitializer = () => {
  const initCategories = useCategoryStore((state) => state.initCategories);
  const initTransactions = useTransactionStore(
    (state) => state.initTransactions,
  );
  const initBudgets = useBudgetStore((state) => state.initBudgets);

  useEffect(() => {
    initCategories(categoriesMock);
    initTransactions(transactionsMock);
    initBudgets(budgetsMock);
  }, [initCategories, initTransactions, initBudgets]);

  return null;
};

export { StoreInitializer };
