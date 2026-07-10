import { useEffect } from 'react';
import { useBudgets } from '@/entity/budget';
import { useCategories } from '@/entity/category';
import { useTransactions } from '@/entity/transaction';
import { useSavings } from '@/entity/saving/model/hooks';
import { useSavingOperations } from '@/entity/saving-operation/model/hooks';

const StoreInitializer = () => {
  const { initCategories } = useCategories();
  const { initBudgets } = useBudgets();
  const { initTransactions } = useTransactions();
  const { initSavings } = useSavings();
  const { initSavingOperations } = useSavingOperations();

  useEffect(() => {
    initCategories();
    initBudgets();
    initTransactions();
    initSavings();
    initSavingOperations();
  }, [initCategories, initTransactions, initBudgets]);

  return null;
};

export { StoreInitializer };
