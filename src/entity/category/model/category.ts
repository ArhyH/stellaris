import { CategoryColor } from '@/shared/styles/colors/consts';
import { FinanceTransferType, ICON, ID, LABEL } from '@/shared/types/types';

interface Category {
  id: ID;
  name: LABEL;
  icon: ICON;
  color: CategoryColor;
  type: FinanceTransferType;
}

export type { Category };
