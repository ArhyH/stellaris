import { useBudgets } from '@/entity/budget';
import { useMemo } from 'react';
import { mapBudgetsToOverviewItems } from './mappers';
import { Transaction } from '@/entity/transaction';
import { Category } from '@/entity/category';
import { ViewMode } from '@/shared/types';
import { ViewModes } from '@/shared/consts';

const useBudgetsData = (
  transactions: Transaction[],
  categories: Category[],
  mode: ViewMode,
) => {
  const { budgetsList } = useBudgets();

  const additionalSettings = {
    sortByProgress: true,
    limit: true,
  } as const;

  const budgetsData = useMemo(
    () =>
      mapBudgetsToOverviewItems(
        budgetsList,
        transactions,
        categories,
        mode === ViewModes.short ? { ...additionalSettings } : undefined,
      ),
    [budgetsList, transactions, categories],
  );

  return budgetsData;
};

export { useBudgetsData };
