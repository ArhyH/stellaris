import { CategoryColor } from '@/shared/styles/colors/consts';
import {
  AMOUNT,
  DATE,
  FinanceTransferType,
  ICON,
  ID,
  LABEL,
} from '@/shared/types/types';

interface RecentTransaction {
  id: ID;
  amount: AMOUNT;
  date: DATE;
  type: FinanceTransferType;
  note: LABEL;
  categoryIcon: ICON;
  categoryColor?: CategoryColor;
  categoryName: LABEL;
}

export type { RecentTransaction };
