import { useCategoryStore } from '@/entity/category';
import { useTransactionStore } from '@/entity/transaction';
import { categoriesMock } from '@/shared/mocks/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { useEffect } from 'react';

const StoreInitializer = () => {
  const initCategories = useCategoryStore((state) => state.initCategories);
  const initTransactions = useTransactionStore(
    (state) => state.initTransactions,
  );

  useEffect(() => {
    initCategories(categoriesMock);
    initTransactions(transactionsMock);
  }, [initCategories, initTransactions]);

  return null;
};

export { StoreInitializer };
