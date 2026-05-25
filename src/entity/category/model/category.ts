import { CategoryColor } from '@/shared/styles';
import { FinanceTransferType, ICON, ID, LABEL } from '@/shared/types';

interface Category {
  id: ID;
  name: LABEL;
  icon: ICON;
  color: CategoryColor;
  type: FinanceTransferType;
}

export type { Category };
