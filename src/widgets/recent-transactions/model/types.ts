import {
  AMOUNT,
  COLOR,
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
  categoryColor: COLOR;
  categoryName: LABEL;
}

export type { RecentTransaction };
