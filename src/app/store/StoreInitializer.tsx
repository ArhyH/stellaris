import { useEffect } from 'react';
import { useBudgetStore } from '@/entity/budget';
import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';

const StoreInitializer = () => {
  const initCategories = useCategoryStore((state) => state.initCategories);
  const initTransactions = useTransactionStore(
    (state) => state.initTransactions,
  );
  const initBudgets = useBudgetStore((state) => state.initBudgets);

  useEffect(() => {
    initCategories();
    initTransactions();
    initBudgets();
  }, [initCategories, initTransactions, initBudgets]);

  return null;
};

export { StoreInitializer };
