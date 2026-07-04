import { useEffect } from 'react';
import { useBudgetStore } from '@/entity/budget';
import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';
import { budgetsMock } from '@/shared/mocks/budgets';
import { categoriesMock } from '@/shared/mocks/categories';

const StoreInitializer = () => {
  const initCategories = useCategoryStore((state) => state.initCategories);
  const initTransactions = useTransactionStore(
    (state) => state.initTransactions,
  );
  const initBudgets = useBudgetStore((state) => state.initBudgets);

  useEffect(() => {
    initCategories(categoriesMock);
    initTransactions();
    initBudgets(budgetsMock);
  }, [initCategories, initTransactions, initBudgets]);

  return null;
};

export { StoreInitializer };
