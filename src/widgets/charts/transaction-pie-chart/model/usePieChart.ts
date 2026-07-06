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

  const barChartData = useMemo(
    () => mapTransactionsToPieChartData(transactions, currentCategories),
    [transactions, currentCategories],
  );

  return barChartData;
};

export { usePieChart };
