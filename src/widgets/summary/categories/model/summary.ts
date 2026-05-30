import { Category } from '@/entity/category';
import { CategoriesSummary } from './types';
import { FinanceTransferTypes } from '@/shared/consts';

const getCategoriesSummary = (categories: Category[]): CategoriesSummary => {
  const { income, expense } = categories.reduce(
    (acc, category) => {
      if (category.type === FinanceTransferTypes.income) {
        acc.income += 1;
      }

      if (category.type === FinanceTransferTypes.expense) {
        acc.expense += 1;
      }

      return acc;
    },
    { income: 0, expense: 0 },
  );

  return {
    total: income + expense,
    income,
    expense,
  };
};

export { getCategoriesSummary };
