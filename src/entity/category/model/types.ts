import { CategoryColor } from '@/shared/styles';
import { FinanceTransferType, ICON, ID, LABEL } from '@/shared/types';

interface Category {
  id: ID;
  name: LABEL;
  icon: ICON;
  color: CategoryColor;
  iconColor: CategoryColor;
  type: FinanceTransferType;
  isArchived: boolean;
}

type CategoryItem = Record<string, Category>;

export type { Category, CategoryItem };
