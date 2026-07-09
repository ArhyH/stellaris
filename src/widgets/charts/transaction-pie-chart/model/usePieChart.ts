import { useMemo } from 'react';
import { useCategories } from '@/entity/category';
import { FinanceTransferType } from '@/shared/types';
import { getGroupByKey } from '@/shared/helpers';
import { mapTransactionsToPieChartData } from './mapTransactionsToPieChartData';
import { Transaction } from '@/entity/transaction';

const usePieChart = (
  transactions: Transaction[],
  type: FinanceTransferType,
) => {
  const { categoriesByType } = useCategories();

  const currentCategories = useMemo(
    () => getGroupByKey(categoriesByType, type),
    [categoriesByType, type],
  );

  const currentTransactions = useMemo(
    () => [...transactions].filter((transaction) => transaction.type === type),
    [transactions],
  );

  const pieChartData = useMemo(
    () => mapTransactionsToPieChartData(currentTransactions, currentCategories),
    [currentTransactions, currentCategories],
  );

  return pieChartData;
};

export { usePieChart };
