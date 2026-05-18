import { CategoryColor } from '@/shared/styles';
import {
  AMOUNT,
  DATE,
  FinanceTransferType,
  ICON,
  ID,
  LABEL,
} from '@/shared/types';

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
