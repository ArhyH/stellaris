import { CategoryColor } from '@/shared/styles';
import { AMOUNT } from '@/shared/types';

interface TopSpendingCategory {
  categoryName: string;
  categoryColor: CategoryColor;
  categoryIconColor: CategoryColor;
  amount: AMOUNT;
  percent: string;
}

export { TopSpendingCategory };
