import { CategoryColor } from '@/shared/styles';
import { FinanceTransferType, ICON, ID, LABEL } from '@/shared/types';

interface CategoryItem {
  categoryId: ID;
  transactionsCount: number;
  type: FinanceTransferType | undefined;
  categoryIcon: ICON | undefined;
  categoryName: LABEL | undefined;
  categoryColor: CategoryColor | undefined;
  categoryIconColor: CategoryColor | undefined;
  isArchived: boolean;
  hasBudget: boolean;
}

export { CategoryItem };
